/**
 * validate-source-versions.ts
 *
 * Validates references/source-version-registry.json and the brand-authorization
 * record. Enforces Section 7 (versioned rules, no hardcoding) and Section 8
 * (trademark / non-affiliation):
 *   - every registry entry has the required metadata fields
 *   - effective_date / retrieved_date are ISO dates
 *   - authorization_status is from the allowed set
 *   - supersedes (if present) points at a known source_id
 *   - brand-authorization.json is internally consistent: if authorized is
 *     false, no authorization fields may be populated (cannot label official)
 */
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { ROOT, reportAndExit } from './_lib.ts';

const REGISTRY_PATH = join(ROOT, 'references', 'source-version-registry.json');
const BRAND_PATH = join(ROOT, 'assets', 'brand', 'brand-authorization.json');

const REQUIRED_SOURCE_FIELDS = [
  'source_id',
  'organization',
  'document_title',
  'season',
  'effective_date',
  'retrieved_date',
  'authorization_status',
  'official_source_reference',
  'supersedes',
  'notes',
];

const ALLOWED_AUTH_STATUS = ['user_supplied', 'public_reference', 'licensed', 'unverified', 'none'];
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

function run(): void {
  const errors: string[] = [];

  if (!existsSync(REGISTRY_PATH)) {
    reportAndExit('validate-source-versions', [`missing ${REGISTRY_PATH}`]);
    return;
  }

  let registry: unknown;
  try {
    registry = JSON.parse(readFileSync(REGISTRY_PATH, 'utf8'));
  } catch (err) {
    reportAndExit('validate-source-versions', [`registry is not valid JSON: ${String(err)}`]);
    return;
  }

  const sources = Array.isArray((registry as { sources?: unknown }).sources)
    ? (registry as { sources: Array<Record<string, unknown>> }).sources
    : null;
  if (!sources) {
    errors.push('registry must have a "sources" array (may be empty until real rulebooks are supplied)');
  } else {
    const ids = new Set<string>();
    for (const [i, src] of sources.entries()) {
      for (const f of REQUIRED_SOURCE_FIELDS) {
        if (!(f in src)) errors.push(`sources[${i}] missing field "${f}"`);
      }
      if (typeof src.source_id === 'string') {
        if (ids.has(src.source_id)) errors.push(`duplicate source_id "${src.source_id}"`);
        ids.add(src.source_id);
      }
      if (typeof src.effective_date === 'string' && !ISO_DATE.test(src.effective_date)) {
        errors.push(`sources[${i}] effective_date "${src.effective_date}" is not YYYY-MM-DD`);
      }
      if (typeof src.retrieved_date === 'string' && !ISO_DATE.test(src.retrieved_date)) {
        errors.push(`sources[${i}] retrieved_date "${src.retrieved_date}" is not YYYY-MM-DD`);
      }
      if (typeof src.authorization_status === 'string' && !ALLOWED_AUTH_STATUS.includes(src.authorization_status)) {
        errors.push(`sources[${i}] authorization_status "${src.authorization_status}" not in ${ALLOWED_AUTH_STATUS.join(', ')}`);
      }
    }
    // supersedes integrity
    for (const [i, src] of sources.entries()) {
      if (src.supersedes && typeof src.supersedes === 'string' && !ids.has(src.supersedes)) {
        errors.push(`sources[${i}] supersedes unknown source_id "${src.supersedes}"`);
      }
    }
  }

  // brand authorization consistency
  if (!existsSync(BRAND_PATH)) {
    errors.push(`missing ${BRAND_PATH}`);
  } else {
    try {
      const brand = JSON.parse(readFileSync(BRAND_PATH, 'utf8')) as Record<string, unknown>;
      if (brand.brand !== 'HYROX') errors.push('brand-authorization.json brand must be "HYROX"');
      if (typeof brand.authorized !== 'boolean') errors.push('brand-authorization.json authorized must be a boolean');
      if (brand.authorized === false) {
        for (const field of ['authorization_type', 'authorized_by', 'authorization_date']) {
          if (brand[field] !== null && brand[field] !== undefined && brand[field] !== '') {
            errors.push(`brand-authorization.json: authorized is false but "${field}" is populated — cannot label official`);
          }
        }
        if (Array.isArray(brand.permitted_uses) && brand.permitted_uses.length > 0) {
          errors.push('brand-authorization.json: authorized is false but permitted_uses is non-empty');
        }
      } else {
        // if someone sets authorized true, require complete metadata
        for (const field of ['authorization_type', 'authorized_by', 'authorization_date']) {
          if (!brand[field]) errors.push(`brand-authorization.json: authorized is true but "${field}" is missing`);
        }
      }
    } catch (err) {
      errors.push(`brand-authorization.json is not valid JSON: ${String(err)}`);
    }
  }

  reportAndExit('validate-source-versions', errors);
}

run();
