<script lang="ts">
	import { IS_MENU_MINIMIZED, SHOWFURNITURES, CURRENTFURNITURE } from '@store/stores'
	import { SendNUI } from '@utils/SendNUI'
	import Portal from './Portal.svelte'

	let scrollableElement: HTMLElement

	function scrollHorizontally(e) {
		e = window.event || e
		var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail))
		scrollableElement.scrollLeft -= delta * 50 // Multiplied by 40
		e.preventDefault()
	}

	let showModal: boolean = false
	let switchToFurniture: any = null
</script>

<div  class="w-full h-[24rem] bg-[color:var(--color-primary)] p-[1rem]">
	<div
	bind:this={scrollableElement} on:wheel={scrollHorizontally}
		class="grid grid-rows-2 grid-flow-col-dense gap-[1rem] overflow-x-scroll overflow-y-hidden w-fit max-w-full h-full relative scroll-style scroll-style-horizontal"
	>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
		{#each $SHOWFURNITURES.items as furniture, i}
			<button
				class="h-full w-[30rem] bg-[color:var(--color-secondary)] flex flex-row items-center px-[1.5rem] py-[0.5rem] hover:cursor-pointer"
				on:click={() => {
					SendNUI("hoverOut")
					if ($CURRENTFURNITURE != null) {
						showModal = true
						switchToFurniture = furniture
					} else {
						SendNUI("previewFurniture", furniture)
						$CURRENTFURNITURE = furniture
						$IS_MENU_MINIMIZED = true
					}
				}}
				on:mouseleave={() => {
					SendNUI("hoverOut")
				}}
			>
				<!-- Furniture name -->
				<div
					class="w-full h-full flex flex-col justify-center items-start "
				>
					<p
						class="text-[color:var(--color-text)] text-[2rem] font-bold text-start"
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
					on:mouseenter={() => {
						SendNUI("hoverIn", furniture)
					}}
					on:mouseleave={() => {
						SendNUI("hoverOut")
					}}
				>
					<i
						class="fas fa-eye text-[color:var(--color-text)] text-[2.5rem]"
					/>
				</div>
			</button>
		{/each}
	</div>
</div>

{#if showModal}
<Portal>
	<div class="z-[100] bg-black bg-opacity-50 w-screen h-screen absolute top-0 left-0 grid place-items-center">
		<div class="bg-[color:var(--color-secondary)] absolute w-[50rem] h-[fit] p-[1vw] flex flex-col gap-[1vw] justify-center items-center">
			<p class="text-[color:var(--color-text)] text-[2rem] font-bold text-start">
				Are you sure you want to stop placing this current furniture?
			</p>
			<div class="flex flex-row justify-between w-full gap-[2vw]">
				<button
					class="bg-[color:var(--color-tertiary)] text-[color:var(--color-text)] text-[2rem] px-[1rem] py-[0.5rem] w-full hover:cursor-pointer"
					on:click={() => {
						showModal = false
						switchToFurniture = null
					}}
				>
					No
				</button>
				<button
				class="bg-[color:var(--color-tertiary)] text-[color:var(--color-text)] text-[2rem] px-[1rem] py-[0.5rem] w-full hover:cursor-pointer"
				on:click={() => {
					SendNUI("previewFurniture", switchToFurniture)
					$CURRENTFURNITURE = switchToFurniture
					$IS_MENU_MINIMIZED = true

					showModal = false
					switchToFurniture = null
				}}
			>
				Yes
			</button>
			</div>
		</div>
	</div>

</Portal>

{/if}