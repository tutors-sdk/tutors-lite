<script lang="ts">
  import { tutorsConnectService } from "$lib/services/connect.svelte";
</script>

<p class="text-2xl">
  {#if tutorsConnectService.tutorsId.value?.name}
    Connected as: {tutorsConnectService.tutorsId.value?.name}
    ({tutorsConnectService.tutorsId.value?.login})
  {/if}
</p>
