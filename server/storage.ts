import { users, contactLeads, type User, type InsertUser, type ContactLead, type InsertContactLead } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactLead(lead: InsertContactLead): Promise<ContactLead>;
  getContactLeads(): Promise<ContactLead[]>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async createContactLead(lead: InsertContactLead): Promise<ContactLead> {
    const [contactLead] = await db
      .insert(contactLeads)
      .values(lead)
      .returning();
    return contactLead;
  }

  async getContactLeads(): Promise<ContactLead[]> {
    return await db.select().from(contactLeads);
  }
}

export const storage = new DatabaseStorage();
