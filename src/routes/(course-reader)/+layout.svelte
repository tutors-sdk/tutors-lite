<script lang="ts">
  import "../../app.postcss";
  import { page } from "$app/stores";
  import { initializeStores, storePopup } from "@skeletonlabs/skeleton";
  import { transitionKey, currentLo } from "$lib/runes";
  import { computePosition, autoUpdate, flip, shift, offset, arrow } from "@floating-ui/dom";
  import CourseShell from "$lib/ui/app-shells/CourseShell.svelte";

  type Props = { children: any };
  let { children }: Props = $props();

  initializeStores();
  storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

  page.subscribe((path) => {
    if (["course", "topic", "unit"].includes(currentLo?.value?.type!)) {
      transitionKey.value = path.url.pathname;
    }
  });
</script>

<svelte:head>
  <title>{currentLo?.value?.title}</title>
</svelte:head>

<CourseShell>
  {@render children()}
</CourseShell>
