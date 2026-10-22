import assert from 'node:assert/strict';
import { getAdminIdentity } from '../src/services/adminAuth';

const before = [process.env.ADMIN_SECRET_KEN, process.env.ADMIN_SECRET_JAY];
try {
  delete process.env.ADMIN_SECRET_KEN;
  delete process.env.ADMIN_SECRET_JAY;
  for (const value of [undefined, null, '', [], 'unconfigured', 'x'.repeat(600)]) assert.equal(getAdminIdentity(value), undefined);
  process.env.ADMIN_SECRET_KEN = 'short-test-value';
  assert.equal(getAdminIdentity('short-test-value'), undefined);
  // Deliberately public fixtures; these are not deployment credentials.
  process.env.ADMIN_SECRET_KEN = 'public-test-fixture-ken-'.repeat(3);
  process.env.ADMIN_SECRET_JAY = 'public-test-fixture-jay-'.repeat(3);
  assert.equal(getAdminIdentity(process.env.ADMIN_SECRET_KEN), 'Ken');
  assert.equal(getAdminIdentity(process.env.ADMIN_SECRET_JAY), 'Jay');
  assert.equal(getAdminIdentity(process.env.ADMIN_SECRET_KEN + 'wrong'), undefined);
  assert.equal(getAdminIdentity(process.env.ADMIN_SECRET_KEN.slice(0, -1) + 'X'), undefined);
  assert.equal(getAdminIdentity([process.env.ADMIN_SECRET_KEN]), undefined);
  console.log('PASS: missing, short, invalid and configured administrator credentials.');
} finally {
  for (const [i, key] of ['ADMIN_SECRET_KEN', 'ADMIN_SECRET_JAY'].entries()) {
    if (before[i] === undefined) delete process.env[key]; else process.env[key] = before[i];
  }
}
