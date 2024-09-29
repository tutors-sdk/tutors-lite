<script lang="ts">
  import Composite from "$lib/ui/learning-objects/structure/Composite.svelte";

  export let data: any;
</script>

<Composite composite={data.course} />
