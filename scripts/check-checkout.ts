import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';

// Isolated local fixtures and mock payment mode; no production stores or payments.
const fixtureDir = await mkdtemp(path.join(tmpdir(), 'quartz-checkout-'));
process.chdir(fixtureDir);
for (const key of ['VERCEL', 'REDIS_URL', 'KV_REST_API_URL', 'KV_REST_API_TOKEN', 'SMTP_USER', 'SMTP_PASS']) delete process.env[key];
process.env.STRIPE_SECRET_KEY = 'sk_test_mock_secret_key_checkout_fixture';
const base = { createdAt: '2026-01-01T00:00:00Z', name: 'Test', email: 'test@example.invalid', phone: '000', quoteStatus: 'approved' };
const cases = [
  { id: 'missing-total', expected: 400 },
  { id: 'zero-total', quoteTotal: 0, expected: 400 },
  { id: 'negative-total', quoteTotal: -100, expected: 400 },
  { id: 'bad-percent', quoteTotal: 1000, quoteDepositPercent: 101, expected: 400 },
  { id: 'negative-percent', quoteTotal: 1000, quoteDepositPercent: -1, expected: 400 },
  { id: 'valid-default', quoteTotal: 1000, expected: 200 },
  { id: 'valid-percent', quoteTotal: 1000, quoteDepositPercent: 25, expected: 200 },
];
await mkdir(path.join(fixtureDir, 'data'));
await writeFile(path.join(fixtureDir, 'data/leads.json'), JSON.stringify(cases.map(({ expected, ...fixture }) => ({ ...base, ...fixture }))));
const { default: app } = await import('../server.js');
const listener = app.listen(0, '127.0.0.1');
await new Promise<void>(resolve => listener.once('listening', resolve));
const address = listener.address();
assert.ok(address && typeof address === 'object');
try {
  for (const fixture of cases) {
    const response: Response = await fetch(`http://127.0.0.1:${address.port}/api/quotes/${fixture.id}/create-checkout-session`, { method: 'POST' });
    assert.equal(response.status, fixture.expected, fixture.id);
    if (response.ok) assert.ok((await response.json()).url.includes('mock_session_'));
  }
  console.log(`PASS: ${cases.length} isolated checkout validation cases; no payment processor calls.`);
} finally {
  await new Promise<void>((resolve, reject) => listener.close(error => error ? reject(error) : resolve()));
  await rm(fixtureDir, { recursive: true, force: true });
}
process.exit(0);
