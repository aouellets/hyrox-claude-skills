/**
 * validate-internal-links.ts
 *
 * Walks every markdown file in the repo and checks that relative links and
 * `references/...` / `lib/...` / `skills/...` paths resolve to a file that
 * actually exists. External links (http/https/mailto) and pure anchors are
 * skipped. Fails loudly on any broken internal link so the routing/reference
 * web never rots.
 */
import { readdirSync, existsSync, readFileSync, statSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';
import { ROOT, reportAndExit } from './_lib.ts';

const SKIP_DIRS = new Set(['node_modules', '.git', 'dist', 'coverage']);
const LINK_RE = /\[[^\]]*\]\(([^)]+)\)/g;

function walk(dir: string, out: string[] = []): string[] {
  for (const entry of readdirSync(dir)) {
    if (SKIP_DIRS.has(entry)) continue;
    const p = join(dir, entry);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, out);
    else if (entry.endsWith('.md')) out.push(p);
  }
  return out;
}

function run(): void {
  const errors: string[] = [];
  const files = walk(ROOT);

  for (const file of files) {
    const content = readFileSync(file, 'utf8');
    let m: RegExpExecArray | null;
    LINK_RE.lastIndex = 0;
    while ((m = LINK_RE.exec(content)) !== null) {
      let target = m[1].trim();
      // strip title: [x](path "title")
      target = target.split(/\s+/)[0];
      if (!target) continue;
      if (/^(https?:|mailto:|tel:|#)/i.test(target)) continue;
      if (target.startsWith('<') && target.endsWith('>')) target = target.slice(1, -1);
      // drop anchor / query
      const cleanPath = target.split('#')[0].split('?')[0];
      if (!cleanPath) continue;

      const resolved = cleanPath.startsWith('/')
        ? join(ROOT, cleanPath)
        : resolve(dirname(file), cleanPath);

      if (!existsSync(resolved)) {
        errors.push(`${file.replace(ROOT + '/', '')}: broken link -> ${target}`);
      }
    }
  }

  reportAndExit('validate-internal-links', errors);
}

run();
