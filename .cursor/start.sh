#!/usr/bin/env bash
# Per-boot startup for the native-legal-v2 Cloud Agent environment.
# Brings up the local PostgreSQL cluster, ensures the app database exists,
# and syncs the Drizzle schema. Safe to run repeatedly.
set -euo pipefail

# Resolve and move to the repository root so relative npm scripts work
# regardless of the caller's working directory (this is a multi-repo workspace).
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_DIR="$(dirname "$SCRIPT_DIR")"
cd "$REPO_DIR"

DB_NAME="native_legal"
DB_USER="postgres"
DB_PASS="postgres"
export DATABASE_URL="postgresql://${DB_USER}:${DB_PASS}@localhost:5432/${DB_NAME}"

echo "[start] Ensuring PostgreSQL cluster is online..."
if ! sudo pg_lsclusters -h 2>/dev/null | awk '{print $4}' | grep -q '^online$'; then
  sudo pg_ctlcluster 16 main start
fi

# Wait for the server to accept connections.
for i in $(seq 1 30); do
  if sudo -u postgres pg_isready -q; then
    break
  fi
  echo "[start] Waiting for PostgreSQL to accept connections ($i/30)..."
  sleep 1
done

echo "[start] Ensuring role password and application database exist..."
sudo -u postgres psql -v ON_ERROR_STOP=1 -c "ALTER USER ${DB_USER} WITH PASSWORD '${DB_PASS}';"
if ! sudo -u postgres psql -tAc "SELECT 1 FROM pg_database WHERE datname='${DB_NAME}'" | grep -q 1; then
  sudo -u postgres psql -v ON_ERROR_STOP=1 -c "CREATE DATABASE ${DB_NAME};"
fi

echo "[start] Applying Drizzle schema (db:push)..."
npm run db:push

echo "[start] Environment ready. DATABASE_URL=${DATABASE_URL}"
