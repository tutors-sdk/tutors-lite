<script lang="ts">
  import { AppBar } from "@skeletonlabs/skeleton";
  import InfoButton from "./buttons/InfoButton.svelte";
  import CourseTitle from "./titles/CourseTitle.svelte";
  import SearchButton from "./buttons/SearchButton.svelte";
  import CalendarButton from "./buttons/CalendarButton.svelte";
  import LayoutMenu from "../themes/menu/LayoutMenu.svelte";
  import TocButton from "./buttons/TocButton.svelte";
  import { currentCourse } from "$lib/runes";
</script>

<AppBar background="bg-surface-100-800-token" shadow="none" class="h-20 justify-center border-b-[1px] border-surface-200 dark:border-surface-700">
  <svelte:fragment slot="lead">
    <InfoButton />
    <CourseTitle />
  </svelte:fragment>
  <CalendarButton />
  <svelte:fragment slot="trail">
    {#if !currentCourse?.value?.isPortfolio}
      <SearchButton />
    {/if}
    <span class="divider-vertical h-10 hidden lg:block"></span>
    <LayoutMenu />
    <span class="divider-vertical h-10 hidden lg:block"></span>
    {#if !currentCourse?.value?.isPortfolio}
      <TocButton />
    {/if}
  </svelte:fragment>
</AppBar>
