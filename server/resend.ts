// Resend email integration
import { Resend } from 'resend';

let connectionSettings: any;

async function getCredentials() {
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found for repl/depl');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=resend',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  if (!connectionSettings || (!connectionSettings.settings.api_key)) {
    throw new Error('Resend not connected');
  }
  return { apiKey: connectionSettings.settings.api_key, fromEmail: connectionSettings.settings.from_email };
}

export async function getUncachableResendClient() {
  const { apiKey, fromEmail } = await getCredentials();
  return {
    client: new Resend(apiKey),
    fromEmail
  };
}

export async function sendContactNotification(lead: {
  name: string;
  email: string;
  phone?: string | null;
  role?: string | null;
  practiceArea?: string | null;
  state?: string | null;
}) {
  try {
    const { client, fromEmail } = await getUncachableResendClient();
    
    const emailBody = `
New contact form submission from Native Legal website:

Name: ${lead.name}
Email: ${lead.email}
Phone: ${lead.phone || 'Not provided'}
Role: ${lead.role || 'Not provided'}
Practice Area: ${lead.practiceArea || 'Not provided'}
State: ${lead.state || 'Not provided'}

---
This is an automated notification from the Native Legal contact form.
    `.trim();

    const result = await client.emails.send({
      from: fromEmail,
      to: 'joshua@native.legal',
      subject: `New Lead: ${lead.name} - Native Legal Contact Form`,
      text: emailBody,
    });

    console.log('Email notification sent:', result);
    return result;
  } catch (error) {
    console.error('Failed to send email notification:', error);
    throw error;
  }
}
