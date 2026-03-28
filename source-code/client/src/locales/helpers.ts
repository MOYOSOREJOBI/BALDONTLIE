import type { TFunction } from "i18next";

export function translateStrings(values: string[], t: TFunction) {
  return values.map((value) => t(value));
}

export function translateRecordFields<T extends Record<string, unknown>>(
  records: T[],
  fields: Array<keyof T>,
  t: TFunction,
) {
  return records.map((record) => {
    const next = { ...record };

    for (const field of fields) {
      const value = next[field];

      if (typeof value === "string") {
        next[field] = t(value) as T[keyof T];
      }
    }

    return next;
  });
}

export function translateRecord<T extends Record<string, unknown>>(
  record: T,
  fields: Array<keyof T>,
  t: TFunction,
) {
  const next = { ...record };

  for (const field of fields) {
    const value = next[field];

    if (typeof value === "string") {
      next[field] = t(value) as T[keyof T];
    }
  }

  return next;
}

