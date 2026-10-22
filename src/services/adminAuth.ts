import { timingSafeEqual } from 'node:crypto';

// Configure new independent secrets on the server. Missing/short configuration
// grants no access; no default credential is embedded in source or browser code.
export function getAdminIdentity(value: unknown): 'Ken' | 'Jay' | undefined {
  if (typeof value !== 'string' || value.length > 512) return undefined;
  const supplied = Buffer.from(value);
  for (const [name, key] of [['Ken', 'ADMIN_SECRET_KEN'], ['Jay', 'ADMIN_SECRET_JAY']] as const) {
    const expected = process.env[key];
    if (!expected || expected.length < 32) continue;
    const configured = Buffer.from(expected);
    if (configured.length === supplied.length && timingSafeEqual(configured, supplied)) return name;
  }
  return undefined;
}
