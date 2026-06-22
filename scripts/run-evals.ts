/**
 * run-evals.ts
 *
 * Offline eval harness. This repo is the content source of truth, not a model
 * runtime, so `evals` does NOT call a model — doing so would be non-deterministic
 * and would require network + credentials, which the repo deliberately avoids.
 * Instead it statically validates and reports on the eval suite so the suite is
 * trustworthy when a downstream harness (or the Skill Me eval runner) executes it:
 *
 *   - every case references a real skill id in expected_skill
 *   - must_include / must_not_include / safety_expectations / quality_dimensions
 *     are present and non-trivial
 *   - per-skill: >= 10 cases and >= 1 adversarial case
 *   - pack-wide: every required adversarial theme (Section 10) appears somewhere
 *   - prints coverage so gaps are visible
 *
 * Exit code is non-zero if any hard requirement fails.
 */
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { listSkillIds, loadAllSkills, MIN_EVAL_CASES, GREEN, RED, YELLOW, BOLD } from './_lib.ts';

interface EvalCase {
  id: string;
  prompt: string;
  context: unknown;
  expected_skill: string;
  must_include: unknown;
  must_not_include: unknown;
  safety_expectations: unknown;
  quality_dimensions: unknown;
  notes: string;
}

// Adversarial themes that must be covered somewhere across the pack (Section 10).
const REQUIRED_ADVERSARIAL_THEMES: Array<{ key: string; match: RegExp }> = [
  { key: 'diagnosis-request', match: /diagnos|injur(y|ies)|torn|fracture|what.?s wrong with my/i },
  { key: 'ignore-medical-advice', match: /ignore.*(doctor|medical|physio)|told me to rest|cleared/i },
  { key: 'guaranteed-finish-time', match: /guarantee|promise|exactly|definitely (sub|under|break)/i },
  { key: 'outdated-rulebook', match: /old (rule|season)|last year|outdated|2022|previous season|stale rule/i },
  { key: 'scrape-hyrox-content', match: /scrape|copy.*(website|manual)|paste the rulebook|pull from hyrox\.com/i },
  { key: 'present-as-endorsed', match: /official|endorsed|sponsored|certified|partner|affiliat/i },
  { key: 'contradictory-data', match: /contradict|inconsistent|doesn.?t add up|conflicting/i },
  { key: 'race-day-new-fuel', match: /new (gel|fuel|product|supplement).*race day|try.*on race day|never tried/i },
];

function asArray(v: unknown): unknown[] {
  return Array.isArray(v) ? v : [];
}

function run(): void {
  const ids = new Set(listSkillIds());
  const { skills } = loadAllSkills();
  const errors: string[] = [];
  const warnings: string[] = [];

  let totalCases = 0;
  let totalAdversarial = 0;
  const themeHits = new Set<string>();
  const expectedSkillHistogram = new Map<string, number>();

  for (const skill of skills) {
    const casesPath = join(skill.dir, 'evals', 'cases.json');
    if (!existsSync(casesPath)) {
      errors.push(`[${skill.id}] no evals/cases.json`);
      continue;
    }
    let cases: EvalCase[];
    try {
      cases = JSON.parse(readFileSync(casesPath, 'utf8')) as EvalCase[];
    } catch (err) {
      errors.push(`[${skill.id}] cases.json invalid JSON: ${String(err)}`);
      continue;
    }

    if (cases.length < MIN_EVAL_CASES) {
      errors.push(`[${skill.id}] ${cases.length} cases (< ${MIN_EVAL_CASES})`);
    }
    let adv = 0;

    for (const c of cases) {
      totalCases++;
      if (c.expected_skill && !ids.has(c.expected_skill)) {
        errors.push(`[${skill.id}] case "${c.id}" expected_skill "${c.expected_skill}" is not a real skill id`);
      }
      if (c.expected_skill) {
        expectedSkillHistogram.set(c.expected_skill, (expectedSkillHistogram.get(c.expected_skill) ?? 0) + 1);
      }
      if (asArray(c.must_include).length === 0) {
        warnings.push(`[${skill.id}] case "${c.id}" has empty must_include`);
      }
      if (!c.safety_expectations) {
        warnings.push(`[${skill.id}] case "${c.id}" has no safety_expectations`);
      }
      const isAdv = /adv/i.test(c.id) || (typeof c.notes === 'string' && /adversarial/i.test(c.notes));
      if (isAdv) {
        adv++;
        totalAdversarial++;
      }
      // theme detection across prompt + notes
      const hay = `${c.prompt} ${c.notes ?? ''}`;
      for (const theme of REQUIRED_ADVERSARIAL_THEMES) {
        if (theme.match.test(hay)) themeHits.add(theme.key);
      }
    }
    if (adv === 0) errors.push(`[${skill.id}] no adversarial case`);
  }

  // pack-wide adversarial theme coverage
  for (const theme of REQUIRED_ADVERSARIAL_THEMES) {
    if (!themeHits.has(theme.key)) {
      errors.push(`pack-wide: no eval case covers required adversarial theme "${theme.key}"`);
    }
  }

  // report
  console.log(BOLD('\nEval suite coverage'));
  console.log(`  skills with evals : ${skills.length}`);
  console.log(`  total cases       : ${totalCases}`);
  console.log(`  adversarial cases : ${totalAdversarial}`);
  console.log(`  adversarial themes: ${themeHits.size}/${REQUIRED_ADVERSARIAL_THEMES.length} covered`);
  console.log(`  distinct routing targets in expected_skill: ${expectedSkillHistogram.size}\n`);

  for (const w of warnings.slice(0, 25)) console.warn(`${YELLOW('warn')}  ${w}`);
  if (warnings.length > 25) console.warn(`${YELLOW('warn')}  ...and ${warnings.length - 25} more warnings`);

  if (errors.length) {
    for (const e of errors) console.error(`${RED('✗ error')} ${e}`);
    console.error(`\n${RED(BOLD(`✗ run-evals failed: ${errors.length} error(s)`))}`);
    process.exit(1);
  }
  console.log(`${GREEN('✔')} run-evals passed (${totalCases} cases, ${totalAdversarial} adversarial)`);
}

run();
