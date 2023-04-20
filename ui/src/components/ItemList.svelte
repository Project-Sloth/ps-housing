<script lang="ts">
	import { IS_MENU_MINIMIZED, SHOWFURNITURES, CURRENTFURNITURE } from '@store/stores'
	import { SendNUI } from '@utils/SendNUI'
	let scrollableElement: HTMLElement
	function scrollHorizontally(e) {
		e = window.event || e
		var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail))
		scrollableElement.scrollLeft -= delta * 50 // Multiplied by 40
		e.preventDefault()
	}
</script>

<div  class="w-full h-[24rem] bg-[color:var(--color-primary)] p-[1rem]">
	<div
	bind:this={scrollableElement} on:wheel={scrollHorizontally}
		class="grid grid-rows-2 grid-flow-col-dense gap-[1rem] overflow-x-scroll overflow-y-hidden w-fit max-w-full h-full relative scroll-style scroll-style-horizontal"
	>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
		{#each $SHOWFURNITURES.items as furniture, i}
			<button
				class="h-full w-[30rem] bg-[color:var(--color-secondary)] flex flex-row items-center p-[1.5rem] hover:cursor-pointer"
				on:click={() => {
					SendNUI("previewFurniture", furniture)
					$CURRENTFURNITURE = furniture
					$IS_MENU_MINIMIZED = true
				}}
			>
				<!-- Furniture name -->
				<div
					class="w-full h-full flex flex-col justify-center items-start "
				>
					<p
						class="text-[color:var(--color-text)] text-[2rem] font-bold"
					>
						{furniture.label}
					</p>
					<p class="text-[color:var(--color-text)] text-[2rem]">
						${furniture.price}
					</p>
				</div>
				<!-- eye button -->
				<div
					class=" bg-[color:var(--color-tertiary)] aspect-square h-[5rem] grid place-items-center justify-center items-center"
				>
					<i
						class="fas fa-eye text-[color:var(--color-text)] text-[2.5rem]"
					/>
				</div>
			</button>
		{/each}
	</div>
</div>

<style>

</style>
