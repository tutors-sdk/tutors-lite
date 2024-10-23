<script lang="ts">
  import type { Lo } from "$lib/services/models/lo-types";
  import Iconify from "@iconify/svelte";
  import { Avatar } from "@skeletonlabs/skeleton";

  export let lo: Lo;
  export let miniImage = false;
  let imageHeight = "h-48";
  let iconHeight = "180";

  if (miniImage) {
    imageHeight = "h-10";
    iconHeight = "48";
  }
</script>

{#if lo?.icon}
  <Iconify icon={lo?.icon.type} color={lo.icon.color} height={iconHeight} />
{:else}
  <Avatar src={lo?.img} alt={lo?.title} width={imageHeight} rounded="rounded-xl" background="none" />
{/if}
