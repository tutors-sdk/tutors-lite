<script lang="ts">
  import type { Lo } from "$lib/services/models/lo-types";
  import Image from "../../themes/Image.svelte";
  import { currentLo } from "$lib/runes";
  import LoContext from "../structure/LoContext.svelte";
  import { TreeView } from "@skeletonlabs/skeleton";

  interface Props {
    loContext: Lo;
  }
  let { loContext }: Props = $props();

  let headingText = "text-md font-semibold";

  let cardWidths = "w-72";
</script>

<div class="card {cardWidths} px-4 py-2">
  <h3 class="px-4 py-2 text-center {headingText}">{loContext?.title}</h3>
  <div class="card-body">
    <figure class="flex justify-center p-2">
      <Image lo={currentLo.value} />
    </figure>
    <TreeView padding="p-1">
      <LoContext lo={loContext} />
    </TreeView>
  </div>
</div>
