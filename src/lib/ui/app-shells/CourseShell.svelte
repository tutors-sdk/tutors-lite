<script lang="ts">
  import { AppShell, Modal } from "@skeletonlabs/skeleton";
  import Sidebars from "$lib/ui/navigators/sidebars/Sidebars.svelte";
  import Footer from "$lib/ui/navigators/footers/Footer.svelte";
  import CalendarButton from "$lib/ui/navigators/buttons/CalendarButton.svelte";
  import MainNavigator from "$lib/ui/navigators/MainNavigator.svelte";
  import LayoutMenu from "$lib/ui/themes/menu/LayoutMenu.svelte";
  import SecondaryNavigator from "$lib/ui/navigators/SecondaryNavigator.svelte";
  import CourseTitle from "$lib/ui/navigators/titles/CourseTitle.svelte";
  import TocButton from "$lib/ui/navigators/buttons/TocButton.svelte";
  import InfoButton from "$lib/ui/navigators/buttons/InfoButton.svelte";
  import SearchButton from "$lib/ui/navigators/buttons/SearchButton.svelte";
  import { currentCourse, transitionKey } from "$lib/runes";
  import { fade, scale } from "svelte/transition";

  type Props = { children: any };
  let { children }: Props = $props();
</script>

<AppShell class="h-screen">
  <Modal />
  <Sidebars />
  <svelte:fragment slot="header">
    <MainNavigator>
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
    </MainNavigator>
    <SecondaryNavigator />
  </svelte:fragment>

  {#key transitionKey.value}
    <div id="app" class="h-full">
      <div id="top"></div>
      <div class="mx-auto my-4">
        <div in:fade={{ duration: 300, delay: 200 }}>
          {@render children()}
        </div>
      </div>
    </div>
  {/key}

  <svelte:fragment slot="pageFooter">
    <Footer />
  </svelte:fragment>
</AppShell>
