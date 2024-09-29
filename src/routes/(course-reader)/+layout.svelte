<script lang="ts">
  import "../../app.postcss";
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import { afterNavigate } from "$app/navigation";
  import { initializeStores, storePopup, setInitialClassState } from "@skeletonlabs/skeleton";
  import { storeTheme, transitionKey, currentLo, currentCourse } from "$lib/stores";
  import { computePosition, autoUpdate, flip, shift, offset, arrow } from "@floating-ui/dom";
  import CourseShell from "$lib/ui/app-shells/CourseShell.svelte";
  import type { Course, Lo } from "$lib/services/models/lo-types";

  let course: Course;
  let lo: Lo;

  initializeStores();
  storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

  currentCourse.subscribe((current) => {
    course = current;
  });

  currentLo.subscribe((current) => {
    lo = current;
  });

  function setBodyThemeAttribute(): void {
    document.body.setAttribute("data-theme", $storeTheme);
  }

  onMount(() => {
    setInitialClassState();
    storeTheme.subscribe(setBodyThemeAttribute);
  });

  let currentRoute = "";

  page.subscribe((path) => {
    if (path.route.id) {
      currentRoute = path.route.id;
    }
    if (path.url.hash && !path.url.hash.startsWith("#access_token")) {
      const el = document.querySelector(`[id="${path.url.hash}"]`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }

    if (["course", "topic", "unit"].includes($currentLo.type)) {
      transitionKey.set(path.url.pathname);
    }
  });

  afterNavigate((params) => {
    if (!$page.url.hash) {
      const isNewPage = params.from && params.to && params.from.route.id !== params.to.route.id;
      const elemPage = document.querySelector("#page");
      if (isNewPage && elemPage !== null) {
        elemPage.scrollTop = 0;
      }
    }
  });
</script>

<svelte:head>
  <title>{$currentLo?.title}</title>
</svelte:head>

<CourseShell>
  <slot />
</CourseShell>
