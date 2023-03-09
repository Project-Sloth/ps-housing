<script lang="ts">
  import { ReceiveNUI } from '../utils/ReceiveNUI';
  import { SendNUI } from '../utils/SendNUI';
  import { onMount } from 'svelte';
  import { visibility } from '../store/stores';
  import BackdropFix from './BackdropFix.svelte';


let isVisible: boolean;

visibility.subscribe((visible: boolean) => {
  isVisible = visible;
});

ReceiveNUI<boolean>('setVisible', (visible: boolean) => {
  visibility.set(visible);
});

onMount(() => {
  const keyHandler = (e: KeyboardEvent) => {
    if (isVisible && ['Escape'].includes(e.code)) {
      SendNUI('hideUI');
      visibility.set(false);
    }
  };

  window.addEventListener('keydown', keyHandler);

  return () => window.removeEventListener('keydown', keyHandler);
});
</script>

{#if isVisible}
<main>
    <slot />
</main>
<!-- <BackdropFix /> -->
{/if}

<style>
  main {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 100;
    user-select: none;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    height: 100vh;
width: 100vw;
  }
  </style>

