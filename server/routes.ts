import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactLeadSchema } from "@shared/schema";
import { sendContactNotification } from "./resend";
import { createRepository, getAuthenticatedUser } from "./github";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Create GitHub repository
  app.post("/api/github/create-repo", async (req, res) => {
    try {
      const { name, description, isPrivate } = req.body;
      
      if (!name) {
        return res.status(400).json({ error: "Repository name is required" });
      }
      
      const user = await getAuthenticatedUser();
      const repo = await createRepository(name, description, isPrivate);
      
      return res.status(201).json({
        success: true,
        repo: {
          name: repo.name,
          full_name: repo.full_name,
          html_url: repo.html_url,
          clone_url: repo.clone_url,
          ssh_url: repo.ssh_url,
        },
        owner: user.login
      });
    } catch (error: any) {
      console.error("Error creating GitHub repo:", error);
      return res.status(500).json({ error: error.message || "Failed to create repository" });
    }
  });

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
