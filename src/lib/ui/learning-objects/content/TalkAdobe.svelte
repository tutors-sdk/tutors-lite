<script lang="ts">
  import { PUBLIC_PDF_KEY } from "$env/static/public";
  import type { Talk } from "$lib/services/models/lo-types";
  import { ProgressRadial } from "@skeletonlabs/skeleton";
  import { onMount } from "svelte";

  interface Props {
    lo: Talk;
  }
  let { lo }: Props = $props();

  let loading = false;
  let adobeDCView;

  $effect(() => {
    initializeAdobeDCView();
  });

  onMount(() => {
    // Wait for AdobeDC.View to load before initializing
    if (window.AdobeDC) {
      initializeAdobeDCView();
    } else {
      // Add an event listener to initialize after the library loads
      window.addEventListener("adobe_dc_view_sdk.ready", initializeAdobeDCView);
    }
  });

  function initializeAdobeDCView() {
    // Create an instance of AdobeDC.View
    adobeDCView = new window.AdobeDC.View({
      clientId: PUBLIC_PDF_KEY,
      divId: "adobe-pdf-viewer"
    });

    // Call the previewFile method to display the PDF
    adobeDCView.previewFile(
      {
        content: {
          location: {
            url: lo.pdf // Replace with your PDF URL
          }
        },
        metaData: {
          fileName: lo.title
        }
      },
      { showAnnotationTools: false, defaultViewMode: "FIT_WIDTH" }
    );
  }
</script>

{#if !loading}
  <div class="aspect-w-16 aspect-h-9 w-full">
    <div id="adobe-pdf-viewer" class="h-dvh w-full"></div>
  </div>
{:else}
  <div class="mb-72 mt-72 flex flex-col items-center justify-center">
    <ProgressRadial stroke={100} meter="stroke-primary-500" track="stroke-primary-500/30" width="w-20" />
  </div>
{/if}

<svelte:head>
  <script type="text/javascript" src="https://acrobatservices.adobe.com/view-sdk/viewer.js"></script>
</svelte:head>
