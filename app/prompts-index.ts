import { PROMPTS_DEV } from "./prompts-part1";
import { PROMPTS_MARKETER } from "./prompts-part2";
import { PROMPTS_FOUNDER } from "./prompts-part3";
import { PROMPTS_WRITER } from "./prompts-part4";

export type Role = "developer" | "marketer" | "founder" | "writer";

const ALL = [
  ...PROMPTS_DEV,
  ...PROMPTS_MARKETER,
  ...PROMPTS_FOUNDER,
  ...PROMPTS_WRITER,
];

export const FREE_PROMPTS = ALL.filter(p => !("proOnly" in p));
export const PROMPTS = ALL;
