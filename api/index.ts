import express from 'express';

const app = express();

app.all('*', async (req, res) => {
  try {
    // Dynamically import the main server module to catch any initialization errors
    const serverModule = await import('../server');
    const actualApp = serverModule.default;
    return actualApp(req, res);
  } catch (err: any) {
    res.status(500).json({
      error: "Diagnostic: Failed to load server module",
      message: err.message,
      stack: err.stack,
    });
  }
});

export default app;
