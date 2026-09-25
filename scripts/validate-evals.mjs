#!/usr/bin/env node
import { readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const skills = readdirSync(join(root, 'skills')).filter((n) => !n.startsWith('.'));
let ok = true;
for (const s of skills) {
  const p = join(root, 'evaluations', s, 'cases.md');
  if (!existsSync(p)) {
    console.error('Missing evaluations for', s);
    ok = false;
  }
}
if (!existsSync(join(root, 'ATTRIBUTION.md'))) {
  console.error('Missing ATTRIBUTION.md');
  ok = false;
}
if (!ok) process.exit(1);
console.log(`OK: ${skills.length} skills have evaluations`);
