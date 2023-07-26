<script lang="ts">
  import { ReceiveNUI } from '../utils/ReceiveNUI';
  import { SendNUI } from '../utils/SendNUI';
  import { onMount } from 'svelte';
  import { IS_MENU_MINIMIZED, visibility, CART, CURRENTFURNITURE } from '../store/stores';
  import BackdropFix from './BackdropFix.svelte';
	import ModelStore from '@store/ModelStore'
  import Portal from '@components/Portal.svelte';


let isVisible: boolean;

visibility.subscribe((visible: boolean) => {
  isVisible = visible;
});

ReceiveNUI<boolean>('setVisible', (visible: boolean) => {
  visibility.set(visible);
  if (visible) {
    $IS_MENU_MINIMIZED = false;
  }
});

let showModal = false;

onMount(() => {
  const keyHandler = (e: KeyboardEvent) => {
    if (isVisible && ['Escape'].includes(e.code)) {
      if ($CART.length > 0) {
        showModal = true
      } else {
        SendNUI("hoverOut")
        SendNUI('hideUI');
        showModal = false;
        visibility.set(false);
        ModelStore.show.set(false)
        CURRENTFURNITURE.set(null)
      }
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

{#if showModal && isVisible}
<Portal>
	<div class="z-[100] bg-black bg-opacity-50 w-screen h-screen absolute top-0 left-0 grid place-items-center">
		<div class="bg-[color:var(--color-secondary)] absolute w-[50rem] h-[fit] p-[1vw] flex flex-col gap-[1vw] justify-center items-center">
			<p class="text-[color:var(--color-text)] text-[2rem] font-bold text-start">
				Are you sure you want to exit? You have items in your cart.
			</p>
			<div class="flex flex-row justify-between w-full gap-[2vw]">
				<button
					class="bg-[color:var(--color-tertiary)] text-[color:var(--color-text)] text-[2rem] px-[1rem] py-[0.5rem] w-full hover:cursor-pointer"
					on:click={() => {
						showModal = false
					}}
				>
					No
				</button>
				<button
				class="bg-[color:var(--color-tertiary)] text-[color:var(--color-text)] text-[2rem] px-[1rem] py-[0.5rem] w-full hover:cursor-pointer"
				on:click={() => {
          SendNUI('hideUI');
          showModal = false;
          visibility.set(false);
          ModelStore.show.set(false)
				}}
			>
				Yes
			</button>
			</div>
		</div>
	</div>

</Portal>

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

