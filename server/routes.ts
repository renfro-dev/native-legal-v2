import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactLeadSchema } from "@shared/schema";
import { sendContactNotification } from "./resend";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const result = insertContactLeadSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ error: "Invalid form data", details: result.error.issues });
      }
      
      const lead = await storage.createContactLead(result.data);
      
      // Send email notification to joshua@native.legal
      try {
        await sendContactNotification(lead);
        console.log("Email notification sent for lead:", lead.id);
      } catch (emailError) {
        console.error("Failed to send email notification:", emailError);
      }
      
      return res.status(201).json({ success: true, id: lead.id });
    } catch (error) {
      console.error("Error creating contact lead:", error);
      return res.status(500).json({ error: "Failed to submit form" });
    }
  });

  return httpServer;
}
