import { describe, expect, it } from 'vitest';
import { normalizeMiraMode } from '../src/mira-mode.js';

describe('normalizeMiraMode', () => {
  it('defaults to quick when unset', () => {
    expect(normalizeMiraMode(undefined)).toBe('quick');
    expect(normalizeMiraMode('')).toBe('quick');
  });

  it('maps user-facing mode names to Mira API values', () => {
    expect(normalizeMiraMode('fast')).toBe('quick');
    expect(normalizeMiraMode('max')).toBe('pro');
  });

  it('keeps native Mira API values', () => {
    expect(normalizeMiraMode('quick')).toBe('quick');
    expect(normalizeMiraMode('deep')).toBe('deep');
    expect(normalizeMiraMode('pro')).toBe('pro');
  });

  it('trims and handles aliases case-insensitively', () => {
    expect(normalizeMiraMode(' MAX ')).toBe('pro');
  });

  it('passes through unknown future modes', () => {
    expect(normalizeMiraMode('experimental')).toBe('experimental');
  });
});
