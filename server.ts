import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = process.env.PORT || 3001;

  app.use(express.json());

  const leads: any[] = [];

  // API routes
  app.post("/api/leads", (req, res) => {
    const leadData = {
      ...req.body,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date().toISOString()
    };
    leads.push(leadData);
    console.log("New Lead Received:", leadData);
    
    res.status(201).json({ 
      status: "success", 
      message: "Lead captured successfully",
      leadId: leadData.id
    });
  });

  app.get("/api/leads", (req, res) => {
    // Basic protection: check for a secret header
    const adminSecret = req.headers['x-admin-secret'];
    if (adminSecret !== 'aura-admin-2026') {
      return res.status(401).json({ error: "Unauthorized" });
    }
    res.json(leads);
  });

  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
