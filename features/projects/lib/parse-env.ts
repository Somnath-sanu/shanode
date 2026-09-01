export type EnvVarPair = {
  key: string
  value: string
}

function stripQuotes(value: string) {
  const trimmed = value.trim()
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1)
  }
  return trimmed
}

export function parseEnvText(text: string): EnvVarPair[] {
  const pairs: EnvVarPair[] = []
  const seen = new Set<string>()

  for (const rawLine of text.split(/\r?\n/)) {
    const line = rawLine.trim()
    if (!line || line.startsWith("#")) {
      continue
    }

    const withoutExport = line.startsWith("export ")
      ? line.slice("export ".length).trim()
      : line

    const eqIndex = withoutExport.indexOf("=")
    if (eqIndex <= 0) {
      continue
    }

    const key = withoutExport.slice(0, eqIndex).trim()
    if (!key || seen.has(key)) {
      continue
    }

    const value = stripQuotes(withoutExport.slice(eqIndex + 1))
    seen.add(key)
    pairs.push({ key, value })
  }

  return pairs
}

export function mergeEnvVars(
  existing: EnvVarPair[],
  incoming: EnvVarPair[]
): EnvVarPair[] {
  const map = new Map<string, string>()

  for (const row of existing) {
    const key = row.key.trim()
    if (key) {
      map.set(key, row.value)
    }
  }

  for (const row of incoming) {
    const key = row.key.trim()
    if (key) {
      map.set(key, row.value)
    }
  }

  return Array.from(map.entries()).map(([key, value]) => ({ key, value }))
}
