import { currentTheme } from "$lib/runes";
import type { IconType } from "$lib/services/models/lo-types";
import { FluentIconLib } from "../icons/fluent-icons";
import { HeroIconLib } from "../icons/hero-icons";

let StandardIconLib = FluentIconLib;
export const themes = ["tutors", "dyslexia", "skeleton", "seafoam", "vintage"];

export const themeIcons = {
  tutors: FluentIconLib,
  dyslexia: FluentIconLib,
  skeleton: HeroIconLib,
  seafoam: FluentIconLib,
  vintage: HeroIconLib
};

export function setIconLibForTheme(theme: string) {
  StandardIconLib = themeIcons[currentTheme.value];
}

export function getIcon(type: string): IconType {
  return StandardIconLib[type];
}

export function addIcon(type: string, icon: IconType) {
  FluentIconLib[type] = icon;
  HeroIconLib[type] = icon;
}
