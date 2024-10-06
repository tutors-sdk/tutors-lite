import { writable, type Writable } from "svelte/store";
import { localStorageStore } from "@skeletonlabs/skeleton";
import type { Lo, Course } from "$lib/services/models/lo-types";
import { rune } from "./services/runes.svelte";

export const revealSidebar = writable(false);
export const revealOnline = writable(false);
export const courseUrl = writable("");
export const currentCourse: Writable<Course> = writable();
export const currentLabStepIndex = writable(0);
export const transitionKey = writable("");
export const storeTheme = localStorageStore("storeTheme", "tutors");
export const storePreview = localStorageStore("storePreview", false);

export const currentLo = rune<Lo | null>(null);
export const layout = rune<string | null>("expanded");
