<script lang="ts">
	import {
		FURNITURES,
		IS_MENU_MINIMIZED,
		SHOWFURNITURES,
	} from '@store/stores'

	let selected: number = 0
	let scrollableElement: HTMLElement

	function scrollHorizontally(e) {
		e = window.event || e
		var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail))
		scrollableElement.scrollLeft -= delta * 50 // Multiplied by 40
		e.preventDefault()
	}

	let showSearch: boolean = false
	let searchTerm: string = ''

	$: {
		if (searchTerm.length > 0) {
			let allFurnitureItems = null
			if (selected == -1) {
				allFurnitureItems = $FURNITURES.flatMap(furniture => furniture.items);
			} else {
				allFurnitureItems = $FURNITURES[selected].items
			}

			const filteredFurnitureItems = allFurnitureItems.filter(furniture => furniture.label.toLowerCase().includes(searchTerm.toLowerCase()))
			$SHOWFURNITURES = { category: "Search Results", items: filteredFurnitureItems }
		} else {
			if (selected === -1) {
				const allFurnitureItems = $FURNITURES.flatMap(furniture => furniture.items);
				$SHOWFURNITURES = { category: "Show All", items: allFurnitureItems }
			} else {
				$SHOWFURNITURES = $FURNITURES[selected]
			}
		}
	}


</script>

<div
	class="w-full h-full overflow-y-visible flex flex-row gap-2 items-end flex-nowrap"
>
	<button class="h-[5vh] {showSearch?"w-fit" : "w-[5vh] aspect-square"} bg-[color:var(--color-secondary)] flex flex-row gap-2 items-center"

	>
		<button
			class="h-[5vh] w-[5vh] aspect-square bg-[color:var(--color-secondary)] flex flex-row gap-2 items-center justify-center"
		on:click={() => {
			showSearch = !showSearch
			if ($IS_MENU_MINIMIZED) $IS_MENU_MINIMIZED = false
		}}>
			<i class="fas fa-magnifying-glass text-[1vw]" />
		</button>

		{#if showSearch}
			<input
				bind:value={searchTerm}
				autofocus
				class="min-w-[10vw] h-[5vh] px-[1vw] text-[1vw] bg-[color:var(--color-tertiary)]"
				type="text"
				placeholder="Search"
			/>
		{/if}
	</button>

	<div
		on:wheel={scrollHorizontally}
		bind:this={scrollableElement}
		class=" w-full  h-[6vh] items-end flex flex-row gap-2 overflow-y-visible overflow-x-scroll categories"
	>
		<button
			class="min-w-[8vw] h-[5vh] text-[1vw] bg-[color:var(--color-secondary)] grid place-items-center transition-all duration-200 ease-in-out"
			on:click={() => {
				selected = -1
				const allFurnitureItems = $FURNITURES.flatMap(furniture => furniture.items);
				$SHOWFURNITURES = { category: "Show All", items: allFurnitureItems }
				if ($IS_MENU_MINIMIZED) $IS_MENU_MINIMIZED = false
			}}
			class:selected={selected === -1}>Show All</button
		>
		{#each $FURNITURES as category, i}
			<button
				class="min-w-[8vw] h-[5vh] text-[1vw] bg-[color:var(--color-secondary)] grid place-items-center transition-all duration-200 ease-in-out"
				on:click={() => {
					selected = i
					$SHOWFURNITURES = $FURNITURES[i]
					if ($IS_MENU_MINIMIZED) $IS_MENU_MINIMIZED = false
				}}
				class:selected={selected === i}>{category.category}</button
			>
		{/each}
	</div>

	<div class="overflow-y-visible flex flex-row gap-2 ml-auto">
		<button
			class="w-fit px-[1vw] items-center justify-center break h-[5vh] text-[1vw] bg-[color:var(--color-secondary)] flex flex-row gap-4 transition-all duration-200 ease-in-out"
		>
			<p class="w-fit whitespace-nowrap">Owned Furniture</p>
			<span class="py-[0.1vw] px-[0.5vw] bg-[color:var(--color-tertiary)]"
				>0</span
			>
		</button>
		<button
			class="h-[5vh] w-fit px-[1vw] text-[1vw] bg-[color:var(--color-secondary)] flex flex-row gap-4 items-center justify-center transition-all duration-200 ease-in-out"
		>
			<i class="fas fa-shopping-cart" />
			<span
				class=" py-[0.1vw] px-[0.5vw] bg-[color:var(--color-tertiary)]"
				>0</span
			>
		</button>
		<button
			class="h-[5vh] w-fit px-[1vw] text-[1vw] bg-[color:var(--color-secondary)] flex flex-row gap-4 items-center justify-center transition-all duration-200 ease-in-out"
			on:click={() => {
				$IS_MENU_MINIMIZED = !$IS_MENU_MINIMIZED
			}}
		>
			<i class="fas fa-chevron-{$IS_MENU_MINIMIZED ? 'up' : 'down'}" />
		</button>
	</div>
</div>

<style>
	.selected {
		transform-origin: bottom;
		transform: scale(1.1);
		background-color: var(--color-primary);
		margin-right: 0.5vw;
		margin-left: 0.5vw;
	}

	.categories::-webkit-scrollbar {
		display: none;
	}
</style>
