/**
 * scripts/_lib.ts
 *
 * Shared helpers for the validation and build tooling: a tiny dependency-free
 * frontmatter parser, skill discovery, and the canonical contract constants
 * (required frontmatter keys, required SKILL.md sections, eval file shapes).
 *
 * Keeping this single source of truth means the validators and the build
 * scripts never disagree about what a valid skill looks like.
 */

import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
export const SKILLS_DIR = join(ROOT, 'skills');
export const REFERENCES_DIR = join(ROOT, 'references');

/** Frontmatter keys every SKILL.md must declare. */
export const REQUIRED_FRONTMATTER = ['name', 'description', 'category', 'risk_level', 'requires_current_rules'] as const;

/** Allowed values for risk_level. */
export const RISK_LEVELS = ['low', 'moderate', 'high'] as const;
export type RiskLevel = (typeof RISK_LEVELS)[number];

/** Domain categories used inside this repo (distinct from the catalog DB enum). */
export const DOMAIN_CATEGORIES = [
  'orchestration',
  'planning',
  'assessment',
  'running',
  'stations',
  'race-execution',
  'division-rules',
  'partners',
  'post-race',
  'readiness',
] as const;

/** H2 section headings every SKILL.md body must contain (case-insensitive). */
export const REQUIRED_SECTIONS = [
  '## Workflow',
  '## Required Inputs',
  '## Optional Inputs',
  '## Non-Goals',
  '## Default Output',
  '## Safety and Scope',
  '## Handling Incomplete Information',
  '## Related Skills and Routing',
] as const;

/** Minimum counts. */
export const MIN_EXAMPLES = 3;
export const MIN_EVAL_CASES = 10;

/** Keys each eval case object must declare. */
export const REQUIRED_CASE_KEYS = [
  'id',
  'prompt',
  'context',
  'expected_skill',
  'must_include',
  'must_not_include',
  'safety_expectations',
  'quality_dimensions',
  'notes',
] as const;

export interface Frontmatter {
  name: string;
  description: string;
  category: string;
  risk_level: string;
  requires_current_rules: boolean;
  [key: string]: unknown;
}

export interface Skill {
  /** Folder name == catalog slug/id. */
  id: string;
  dir: string;
  skillMdPath: string;
  frontmatter: Frontmatter;
  body: string;
  raw: string;
}

/**
 * Minimal, strict frontmatter parser. Supports the small subset we need:
 *   - file must start with a `---` fence
 *   - each line inside is `key: value`
 *   - values are scalars (string / boolean / number); no nested structures
 * Returns the parsed map plus the body after the closing fence.
 */
export function parseFrontmatter(raw: string): { data: Record<string, unknown>; body: string } {
  if (!raw.startsWith('---')) {
    throw new Error('missing opening frontmatter fence (file must start with "---")');
  }
  const end = raw.indexOf('\n---', 3);
  if (end === -1) {
    throw new Error('missing closing frontmatter fence ("---")');
  }
  const fmBlock = raw.slice(3, end).trim();
  const body = raw.slice(raw.indexOf('\n', end + 1) + 1);

  const data: Record<string, unknown> = {};
  for (const line of fmBlock.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const colon = trimmed.indexOf(':');
    if (colon === -1) {
      throw new Error(`frontmatter line is not "key: value": ${JSON.stringify(line)}`);
    }
    const key = trimmed.slice(0, colon).trim();
    let value: string = trimmed.slice(colon + 1).trim();
    // strip surrounding quotes
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    if (value === 'true' || value === 'false') {
      data[key] = value === 'true';
    } else if (value !== '' && !Number.isNaN(Number(value)) && /^-?\d+(\.\d+)?$/.test(value)) {
      data[key] = Number(value);
    } else {
      data[key] = value;
    }
  }
  return { data, body };
}

/** List every skill folder id (sorted). */
export function listSkillIds(): string[] {
  if (!existsSync(SKILLS_DIR)) return [];
  return readdirSync(SKILLS_DIR)
    .filter((name) => {
      const p = join(SKILLS_DIR, name);
      return statSync(p).isDirectory() && existsSync(join(p, 'SKILL.md'));
    })
    .sort();
}

/** Load a single skill, parsing its frontmatter. Throws on parse failure. */
export function loadSkill(id: string): Skill {
  const dir = join(SKILLS_DIR, id);
  const skillMdPath = join(dir, 'SKILL.md');
  const raw = readFileSync(skillMdPath, 'utf8');
  const { data, body } = parseFrontmatter(raw);
  return {
    id,
    dir,
    skillMdPath,
    frontmatter: data as Frontmatter,
    body,
    raw,
  };
}

/** Load all skills. Skills that fail to parse are returned with a thrown-style note via the errors array. */
export function loadAllSkills(): { skills: Skill[]; parseErrors: Array<{ id: string; error: string }> } {
  const skills: Skill[] = [];
  const parseErrors: Array<{ id: string; error: string }> = [];
  for (const id of listSkillIds()) {
    try {
      skills.push(loadSkill(id));
    } catch (err) {
      parseErrors.push({ id, error: err instanceof Error ? err.message : String(err) });
    }
  }
  return { skills, parseErrors };
}

// ---- console helpers ----
export const RED = (s: string) => `\x1b[31m${s}\x1b[0m`;
export const GREEN = (s: string) => `\x1b[32m${s}\x1b[0m`;
export const YELLOW = (s: string) => `\x1b[33m${s}\x1b[0m`;
export const BOLD = (s: string) => `\x1b[1m${s}\x1b[0m`;

export function reportAndExit(label: string, errors: string[], warnings: string[] = []): void {
  for (const w of warnings) console.warn(`${YELLOW('warn')}  ${w}`);
  if (errors.length === 0) {
    console.log(`${GREEN('✔')} ${label} passed${warnings.length ? ` (${warnings.length} warning(s))` : ''}`);
    return;
  }
  for (const e of errors) console.error(`${RED('✗ error')} ${e}`);
  console.error(`\n${RED(BOLD(`✗ ${label} failed: ${errors.length} error(s)`))}`);
  process.exit(1);
}
