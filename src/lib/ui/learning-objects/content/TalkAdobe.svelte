<script lang="ts">
  import { page } from "$app/stores";
  import { PUBLIC_PDF_KEY } from "$env/static/public";
  import type { Talk } from "$lib/services/models/lo-types";

  import { onMount } from "svelte";

  interface Props {
    lo: Talk;
  }
  let { lo }: Props = $props();

  let adobeDCView: any = null;

  function displayPDF() {
    adobeDCView = new window.AdobeDC.View({
      clientId: PUBLIC_PDF_KEY,
      divId: "adobe-pdf-viewer"
    });

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
      {
        defaultViewMode: "FIT_WIDTH", // Options are "FIT_WIDTH" or "FIT_PAGE"
        showAnnotationTools: false, // Hide annotation tools
        enableAnnotationAPIs: false, // Disable annotations completely
        showLeftHandPanel: false, // Hide left panel for better focus on the document
        showDownloadPDF: true, // Optionally disable download button
        showPrintPDF: true,
        showFullScreen: true
      }
    );
  }
  page.subscribe((path) => {
    if (window.AdobeDC) {
      displayPDF();
    }
  });

  onMount(() => {
    // Wait for AdobeDC.View to load before initializing
    console.log("mounting");
    if (window.AdobeDC) {
      displayPDF();
    } else {
      // Add an event listener to initialize after the library loads
      window.addEventListener("adobe_dc_view_sdk.ready", initializeAdobeDCView);
    }
  });

  function initializeAdobeDCView() {
    displayPDF();
  }
</script>

<div class="aspect-w-16 aspect-h-9 w-full">
  <div id="adobe-pdf-viewer" class="h-[85dvh] w-full"></div>
</div>

<svelte:head>
  <script type="text/javascript" src="https://acrobatservices.adobe.com/view-sdk/viewer.js"></script>
</svelte:head>
