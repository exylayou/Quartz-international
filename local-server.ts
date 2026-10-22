// Local development/static hosting only. Vercel imports server.ts directly,
// so frontend build outputs and Vite never enter the API dependency graph.
import express from 'express';
import path from 'node:path';
import fs from 'node:fs/promises';
import app from './server.js';

if (!process.env.VERCEL) {
  const startLocalServer = async () => {
    const PORT = process.env.PORT || 3000;
    // Vite middleware for development
    if (process.env.NODE_ENV !== "production") {
      const { createServer: createViteServer } = await import("vite");
      const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: "spa",
      });
      app.use(vite.middlewares);
    } else {
      const distPath = path.join(process.cwd(), 'dist');
      const hosting = JSON.parse(await fs.readFile(path.join(process.cwd(), 'vercel.json'), 'utf8'));
      for (const redirect of hosting.redirects) {
        const source = redirect.source.replace('/:path*', '/:path(*)?');
        app.get(source, (req, res) => {
          const destination = redirect.destination.replace(/:([A-Za-z]+)/g,
            (_: string, key: string) => encodeURIComponent(String(req.params[key] || '')));
          res.redirect(308, destination);
        });
      }
      const publicRoutes: string[] = JSON.parse(await fs.readFile(path.join(distPath, 'prerender-manifest.json'), 'utf8'));
      for (const route of publicRoutes) {
        app.get(route, (_req, res) => res.sendFile(path.join(distPath, route.slice(1), 'index.html')));
      }
      app.use(express.static(distPath));
      app.get(['/admin', '/results', '/quote/:id'], (req, res) => {
        res.sendFile(path.join(distPath, 'app-shell.html'));
      });
      app.get('*', (req, res) => {
        res.status(404).sendFile(path.join(distPath, '404.html'));
      });
    }

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  };

  startLocalServer().catch(err => {
    console.error("Failed to start local dev server:", err);
  });
}
