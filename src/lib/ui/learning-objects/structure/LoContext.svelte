<script lang="ts">
  import type { Lo } from "$lib/services/models/lo-types";
  import { TreeViewItem } from "@skeletonlabs/skeleton";
  import Icon from "$lib/ui/themes/icons/Icon.svelte";

  export let lo: Lo;
  if (lo?.toc) {
    lo?.toc.forEach((lo) => {
      if (lo?.route.endsWith("/")) {
        lo.route = lo?.route.slice(0, -1);
      }
    });
  }
</script>

{#each lo?.toc as lo}
  <TreeViewItem open hideChildren>
    <svelte:fragment slot="lead">
      <div class="flex">
        <Icon type={lo.type} />
        <a href={lo?.route}>
          {@html lo.title}
          {#if lo.video && lo.type != "panelvideo"}
            <a class="pl-4" href={lo.video}>
              <Icon type="video" />
            </a>
          {/if}
        </a>
      </div>
    </svelte:fragment>

    <svelte:fragment slot="children">
      {#if lo.toc}
        <svelte:self {lo} />
      {/if}
    </svelte:fragment>
  </TreeViewItem>
{/each}
