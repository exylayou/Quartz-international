import React from 'react';
import ReactDOMServer from 'react-dom/server';
import fs from 'fs';
import path from 'path';

// Set up mock window and localStorage for the environment
const mockLocalStorage: Record<string, string> = {
  admin_secret: 'qi-admin-2026'
};

global.window = {
  addEventListener: () => {},
  removeEventListener: () => {},
} as any;

global.localStorage = {
  getItem: (key: string) => mockLocalStorage[key] || null,
  setItem: (key: string, val: string) => { mockLocalStorage[key] = val; },
  removeItem: (key: string) => { delete mockLocalStorage[key]; },
  clear: () => { Object.keys(mockLocalStorage).forEach(k => delete mockLocalStorage[k]); }
} as any;

// Mock fetch globally
global.fetch = (async (url: string, options: any) => {
  const headers = options?.headers || {};
  const secret = headers['x-admin-secret'];
  
  if (secret !== 'qi-admin-2026') {
    return {
      ok: false,
      status: 401,
      json: async () => ({ error: 'Unauthorized' })
    };
  }

  const leadsPath = path.resolve(process.cwd(), 'data/leads.json');
  const customersPath = path.resolve(process.cwd(), 'data/customers.json');
  const messagesPath = path.resolve(process.cwd(), 'data/messages.json');

  if (url.includes('/api/leads')) {
    const leads = JSON.parse(fs.readFileSync(leadsPath, 'utf-8'));
    return { ok: true, json: async () => leads };
  }
  if (url.includes('/api/customers')) {
    const customers = JSON.parse(fs.readFileSync(customersPath, 'utf-8'));
    return { ok: true, json: async () => customers };
  }
  if (url.includes('/api/messages')) {
    const messages = JSON.parse(fs.readFileSync(messagesPath, 'utf-8'));
    return { ok: true, json: async () => messages };
  }

  return { ok: false, status: 404 };
}) as any;

console.log("Mock environment ready. Importing Admin component...");

import Admin from '../src/pages/Admin';

async function testRender() {
  try {
    console.log("Rendering component using ReactDOMServer...");
    // Render the element
    const html = ReactDOMServer.renderToStaticMarkup(React.createElement(Admin));
    console.log("SUCCESS: Admin component rendered successfully!");
    console.log("HTML length:", html.length);
  } catch (err: any) {
    console.error("CRASH DETECTED during ReactDOMServer render:", err);
  }
}

testRender();
