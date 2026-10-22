import { en } from "./en";
import { vi } from "./vi";
import type { Dictionary, Locale } from "./types";

const dictionaries: Record<Locale, Dictionary> = { vi, en };

export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale];
