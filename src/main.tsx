import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Global error catcher for diagnostic visibility
if (typeof window !== 'undefined') {
  const showDiagnosticError = (title: string, message: string, stack?: string) => {
    if (document.getElementById('error-diagnostic-overlay')) return;
    
    const overlay = document.createElement('div');
    overlay.id = 'error-diagnostic-overlay';
    overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:#111317;color:#F87171;z-index:999999;padding:40px;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;overflow:auto;box-sizing:border-box;line-height:1.6;';
    overlay.innerHTML = `
      <div style="max-width:900px;margin:40px auto;background:#1F2937;padding:40px;border-radius:24px;border:1px solid #EF4444;box-shadow:0 25px 50px -12px rgba(0,0,0,0.5);">
        <h1 style="color:#EF4444;font-size:26px;font-weight:900;margin:0 0 15px 0;letter-spacing:-0.025em;border-bottom:1px solid #374151;padding-bottom:15px;display:flex;align-items:center;gap:12px;">
          <span>⚠️</span> Frontend Runtime Crash
        </h1>
        <p style="font-size:16px;font-weight:700;color:#F9FAFB;margin:20px 0;">${title}: <span style="color:#FCA5A5;font-weight:500;">${message}</span></p>
        ${stack ? `<pre style="background:#111827;padding:24px;border-radius:16px;color:#E5E7EB;font-size:13px;overflow-x:auto;line-height:1.6;border:1px solid #374151;margin-top:20px;">${stack}</pre>` : ''}
        <div style="margin-top:35px;font-size:13px;color:#9CA3AF;border-top:1px solid #374151;padding-top:20px;">
          <p style="margin:0 0 5px 0;font-weight:700;color:#D1D5DB;">How to fix:</p>
          <p style="margin:0;">Please take a screenshot of this error message and send it to the assistant so we can identify and patch the exact component file and line number.</p>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
  };

  window.addEventListener('error', (e) => {
    showDiagnosticError('Unhandled Exception', e.message, e.error?.stack);
  });

  window.addEventListener('unhandledrejection', (e) => {
    const reason = e.reason;
    showDiagnosticError(
      'Unhandled Promise Rejection',
      reason?.message || String(reason),
      reason?.stack
    );
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
