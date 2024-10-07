import { writable, type Writable } from "svelte/store";
import type { Lo, Course } from "$lib/services/models/lo-types";
import { rune } from "./services/runes.svelte";

// export const transitionKey = writable("");

export const transitionKey = rune("");
export const layout = rune("expanded");

export const currentLo = rune<Lo | null>(null);
export const currentCourse = rune<Course | null>(null);
export const courseUrl = rune("");
export const currentLabStepIndex = rune(0);
export const currentTheme = rune("tutors");
