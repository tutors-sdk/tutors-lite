<script lang="ts">
  import { AppShell, Modal } from "@skeletonlabs/skeleton";
  import Sidebars from "$lib/ui/navigators/sidebars/Sidebars.svelte";
  import Footer from "$lib/ui/navigators/footers/Footer.svelte";
  import SecondaryNavigator from "$lib/ui/navigators/SecondaryNavigator.svelte";
  import { transitionKey } from "$lib/runes";
  import { fade, scale } from "svelte/transition";
  import type { Snippet } from "svelte";
  import MainNavigator from "../navigators/MainNavigator.svelte";

  type Props = { children: Snippet };
  let { children }: Props = $props();
</script>

<AppShell class="h-screen">
  <Modal />
  <Sidebars />
  <svelte:fragment slot="header">
    <MainNavigator />
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
