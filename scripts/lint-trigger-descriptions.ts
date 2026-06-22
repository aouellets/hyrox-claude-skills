/**
 * lint-trigger-descriptions.ts
 *
 * The `description` frontmatter is what `browse_skills` / `get_active_skills`
 * match against, so vague descriptions cause mis-triggering. This linter fails
 * on descriptions that are too short, generic, not trigger-precise, or that
 * use banned filler ("helps with", "assists with", "anything related to").
 *
 * A good description states WHEN to load the skill, the user language that
 * signals it, the inputs it expects, what it excludes, and (where relevant)
 * the adjacent skill that should own the request instead.
 */
import { loadAllSkills, reportAndExit } from './_lib.ts';

const BANNED_PHRASES = [
  'helps with',
  'help with',
  'assists with',
  'assist with',
  'anything related to',
  'all things',
  'general purpose',
  'general-purpose',
  'various tasks',
  'and more',
  'etc.',
];

const MIN_LEN = 140; // chars — trigger-precise descriptions are substantial
const MAX_LEN = 900;

// Signals that the description actually states a trigger condition.
const TRIGGER_SIGNALS = ['when ', 'use when', 'load this', 'requests', 'asks', 'wants', 'provides', 'after '];
// Signals that it states what it excludes / routes elsewhere.
const BOUNDARY_SIGNALS = ['not ', 'exclud', 'instead', 'route', 'rather than', 'does not', "doesn't", 'beyond'];

function run(): void {
  const errors: string[] = [];
  const warnings: string[] = [];
  const { skills } = loadAllSkills();

  for (const skill of skills) {
    const desc = String(skill.frontmatter.description ?? '');
    const lower = desc.toLowerCase();

    if (desc.length < MIN_LEN) {
      errors.push(`[${skill.id}] description too short (${desc.length} chars; need >= ${MIN_LEN}) — not trigger-precise`);
    }
    if (desc.length > MAX_LEN) {
      warnings.push(`[${skill.id}] description very long (${desc.length} chars) — consider tightening`);
    }
    for (const phrase of BANNED_PHRASES) {
      if (lower.includes(phrase)) {
        errors.push(`[${skill.id}] description uses vague/banned phrase: "${phrase}"`);
      }
    }
    if (/^(helps?|assists?)\b/i.test(desc.trim())) {
      errors.push(`[${skill.id}] description opens with "Helps/Assists" — front-load the trigger condition instead`);
    }
    if (!TRIGGER_SIGNALS.some((s) => lower.includes(s))) {
      errors.push(`[${skill.id}] description states no trigger condition (no "when/use when/requests/asks/after ...")`);
    }
    if (!BOUNDARY_SIGNALS.some((s) => lower.includes(s))) {
      warnings.push(`[${skill.id}] description states no boundary/exclusion — add what it excludes or routes elsewhere`);
    }
    if (!lower.includes('hyrox')) {
      warnings.push(`[${skill.id}] description does not mention HYROX — confirm domain specificity`);
    }
  }

  reportAndExit('lint-trigger-descriptions', errors, warnings);
}

run();
