/**
 * validate-skills.ts
 *
 * Structural validation of each skill folder:
 *   - SKILL.md contains every required H2 section
 *   - a Display Title H1 exists
 *   - examples/ has >= MIN_EXAMPLES markdown files
 *   - evals/ has cases.json, rubric.md, expected-behaviors.md
 *   - cases.json is well-formed: >= MIN_EVAL_CASES, every case has required
 *     keys, and at least one adversarial case is present
 *   - rules-dependent skills (requires_current_rules: true) actually mention
 *     a season/version requirement in their body
 */
import { readdirSync, existsSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import {
  loadAllSkills,
  REQUIRED_SECTIONS,
  MIN_EXAMPLES,
  MIN_EVAL_CASES,
  REQUIRED_CASE_KEYS,
  reportAndExit,
} from './_lib.ts';

function run(): void {
  const errors: string[] = [];
  const { skills } = loadAllSkills();

  for (const skill of skills) {
    const bodyLower = skill.body.toLowerCase();

    // H1 display title
    if (!/^#\s+\S/m.test(skill.body)) {
      errors.push(`[${skill.id}] SKILL.md body has no H1 display title`);
    }

    // required sections
    for (const section of REQUIRED_SECTIONS) {
      if (!bodyLower.includes(section.toLowerCase())) {
        errors.push(`[${skill.id}] missing required section: ${section}`);
      }
    }

    // examples/
    const examplesDir = join(skill.dir, 'examples');
    if (!existsSync(examplesDir)) {
      errors.push(`[${skill.id}] missing examples/ directory`);
    } else {
      const exs = readdirSync(examplesDir).filter((f) => f.endsWith('.md'));
      if (exs.length < MIN_EXAMPLES) {
        errors.push(`[${skill.id}] examples/ has ${exs.length} markdown file(s); need >= ${MIN_EXAMPLES}`);
      }
    }

    // evals/
    const evalsDir = join(skill.dir, 'evals');
    if (!existsSync(evalsDir)) {
      errors.push(`[${skill.id}] missing evals/ directory`);
      continue;
    }
    for (const required of ['rubric.md', 'expected-behaviors.md']) {
      if (!existsSync(join(evalsDir, required))) {
        errors.push(`[${skill.id}] evals/ missing ${required}`);
      }
    }
    const casesPath = join(evalsDir, 'cases.json');
    if (!existsSync(casesPath)) {
      errors.push(`[${skill.id}] evals/ missing cases.json`);
    } else {
      try {
        const cases = JSON.parse(readFileSync(casesPath, 'utf8'));
        if (!Array.isArray(cases)) {
          errors.push(`[${skill.id}] cases.json must be a JSON array`);
        } else {
          if (cases.length < MIN_EVAL_CASES) {
            errors.push(`[${skill.id}] cases.json has ${cases.length} case(s); need >= ${MIN_EVAL_CASES}`);
          }
          const ids = new Set<string>();
          let hasAdversarial = false;
          cases.forEach((c: Record<string, unknown>, i: number) => {
            for (const key of REQUIRED_CASE_KEYS) {
              if (!(key in c)) errors.push(`[${skill.id}] cases.json[${i}] missing key "${key}"`);
            }
            if (typeof c.id === 'string') {
              if (ids.has(c.id)) errors.push(`[${skill.id}] cases.json duplicate case id "${c.id}"`);
              ids.add(c.id);
              if (/adv/i.test(c.id)) hasAdversarial = true;
            }
            if (c.notes && typeof c.notes === 'string' && /adversarial/i.test(c.notes)) hasAdversarial = true;
          });
          if (!hasAdversarial) {
            errors.push(`[${skill.id}] cases.json has no adversarial case (id containing "adv" or note marked "adversarial")`);
          }
        }
      } catch (err) {
        errors.push(`[${skill.id}] cases.json is not valid JSON: ${err instanceof Error ? err.message : String(err)}`);
      }
    }

    // rules-dependent skills must enforce versioning in prose
    if (skill.frontmatter.requires_current_rules === true) {
      const enforcesVersion = /(season|event date|rulebook|version|effective date)/i.test(skill.body);
      if (!enforcesVersion) {
        errors.push(
          `[${skill.id}] requires_current_rules is true but body never references a season/rulebook/version requirement`,
        );
      }
    }
  }

  // sanity: examples/evals dirs should not be empty stubs
  for (const skill of skills) {
    for (const sub of ['examples', 'evals']) {
      const p = join(skill.dir, sub);
      if (existsSync(p) && statSync(p).isDirectory() && readdirSync(p).length === 0) {
        errors.push(`[${skill.id}] ${sub}/ exists but is empty`);
      }
    }
  }

  reportAndExit('validate-skills', errors);
}

run();
