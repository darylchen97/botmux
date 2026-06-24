const MIRA_MODE_ALIASES: Record<string, string> = {
  fast: 'quick',
  quick: 'quick',
  deep: 'deep',
  max: 'pro',
  pro: 'pro',
};

export function normalizeMiraMode(value: string | undefined, fallback = 'quick'): string {
  const raw = value?.trim();
  if (!raw) return fallback;
  return MIRA_MODE_ALIASES[raw.toLowerCase()] ?? raw;
}
