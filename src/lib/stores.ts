import { writable, type Writable } from "svelte/store";
import { localStorageStore } from "@skeletonlabs/skeleton";
import type { Lo, Course } from "$lib/services/models/lo-types";

export const revealSidebar = writable(false);
export const revealOnline = writable(false);
export const courseUrl = writable("");
export const currentCourse: Writable<Course> = writable();
export const currentLo: Writable<Lo> = writable();
export const currentLabStepIndex = writable(0);
export const layout = writable("");
export const transitionKey = writable("");
export const storeTheme = localStorageStore("storeTheme", "tutors");
export const storePreview = localStorageStore("storePreview", false);
