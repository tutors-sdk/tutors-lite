<script lang="ts">
  import { layout } from "$lib/runes";
  import Icon from "$lib/ui/themes/icons/Icon.svelte";

  function toggleLayout() {
    if (layout.value === "compacted") {
      layout.value = "expanded";
    } else {
      layout.value = "compacted";
    }
  }
</script>

<button class="btn w-full flex justify-between" on:click={toggleLayout}>
  <span class="flex-none">Compact</span>
  <Icon type={layout.value} />
</button>
