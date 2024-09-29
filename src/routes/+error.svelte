<script lang="ts">
  import "../app.postcss";
  import Footer from "$lib/ui/navigators/footers/Footer.svelte";
  import MainNavigator from "$lib/ui/navigators/MainNavigator.svelte";
  import TutorsTitle from "$lib/ui/navigators/titles/TutorsTitle.svelte";
  import { AppShell, Modal } from "@skeletonlabs/skeleton";
</script>

<AppShell class="h-screen">
  <svelte:fragment slot="header">
    <MainNavigator>
      <svelte:fragment slot="lead">
        <TutorsTitle title={"Tutors"} subtitle={"Could not locate a Tutors course at this domain"} />
      </svelte:fragment>
      <slot name="header" />
    </MainNavigator>
  </svelte:fragment>
  <slot />
  <svelte:fragment slot="pageFooter">
    <Footer />
  </svelte:fragment>
</AppShell>
