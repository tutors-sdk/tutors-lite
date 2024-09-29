<script lang="ts">
  import "../../app.postcss";
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import { initializeStores, storePopup, setInitialClassState } from "@skeletonlabs/skeleton";
  import { storeTheme, transitionKey, currentLo } from "$lib/stores";
  import { computePosition, autoUpdate, flip, shift, offset, arrow } from "@floating-ui/dom";
  import CourseShell from "$lib/ui/app-shells/CourseShell.svelte";

  initializeStores();
  storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

  function setBodyThemeAttribute(): void {
    document.body.setAttribute("data-theme", $storeTheme);
  }

  onMount(() => {
    setInitialClassState();
    storeTheme.subscribe(setBodyThemeAttribute);
  });

  page.subscribe((path) => {
    if (["course", "topic", "unit"].includes($currentLo.type)) {
      transitionKey.set(path.url.pathname);
    }
  });
</script>

<svelte:head>
  <title>{$currentLo?.title}</title>
</svelte:head>

<CourseShell>
  <slot />
</CourseShell>
