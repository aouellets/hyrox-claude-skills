/**
 * validate-frontmatter.ts
 *
 * Fails loudly when any SKILL.md has missing/invalid frontmatter or a
 * duplicate name/id. Frontmatter is the primary triggering surface in the
 * catalog, so it must be complete and well-typed.
 */
import {
  loadAllSkills,
  REQUIRED_FRONTMATTER,
  RISK_LEVELS,
  DOMAIN_CATEGORIES,
  reportAndExit,
  type RiskLevel,
} from './_lib.ts';

function run(): void {
  const errors: string[] = [];
  const { skills, parseErrors } = loadAllSkills();

  for (const pe of parseErrors) {
    errors.push(`[${pe.id}] frontmatter parse failed: ${pe.error}`);
  }

  if (skills.length === 0 && parseErrors.length === 0) {
    errors.push('no skills found under skills/ — expected 27');
  }

  const seenNames = new Map<string, string>();
  const seenIds = new Set<string>();

  for (const skill of skills) {
    const fm = skill.frontmatter;

    for (const key of REQUIRED_FRONTMATTER) {
      if (fm[key] === undefined || fm[key] === null || fm[key] === '') {
        errors.push(`[${skill.id}] missing required frontmatter key: ${key}`);
      }
    }

    if (typeof fm.name === 'string' && fm.name.trim()) {
      const norm = fm.name.trim().toLowerCase();
      const prev = seenNames.get(norm);
      if (prev) errors.push(`[${skill.id}] duplicate display name "${fm.name}" (also in ${prev})`);
      else seenNames.set(norm, skill.id);
    }

    if (seenIds.has(skill.id)) errors.push(`[${skill.id}] duplicate skill id`);
    seenIds.add(skill.id);

    if (fm.risk_level !== undefined && !RISK_LEVELS.includes(fm.risk_level as RiskLevel)) {
      errors.push(`[${skill.id}] invalid risk_level "${String(fm.risk_level)}" (expected one of ${RISK_LEVELS.join(', ')})`);
    }

    if (fm.category !== undefined && !DOMAIN_CATEGORIES.includes(fm.category as (typeof DOMAIN_CATEGORIES)[number])) {
      errors.push(`[${skill.id}] invalid category "${String(fm.category)}" (expected one of ${DOMAIN_CATEGORIES.join(', ')})`);
    }

    if (typeof fm.requires_current_rules !== 'boolean') {
      errors.push(`[${skill.id}] requires_current_rules must be a boolean (true/false)`);
    }

    // slug hygiene
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(skill.id)) {
      errors.push(`[${skill.id}] folder name is not a lowercase-hyphenated slug`);
    }
    if (!skill.id.startsWith('hyrox-')) {
      errors.push(`[${skill.id}] skill id should be namespaced with the "hyrox-" prefix`);
    }
  }

  reportAndExit('validate-frontmatter', errors);
}

run();
