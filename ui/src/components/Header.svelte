<script lang="ts">
	import {
		FURNITURES,
		IS_CART_OPEN,
		IS_MENU_MINIMIZED,
		SHOWFURNITURES,
		CART,
		OWNEDITEMS,
		IS_OWNEDITEMS_OPEN
	} from '@store/stores'

	let selected: number = -1
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
				$SHOWFURNITURES = { category: "All Objects", items: allFurnitureItems }
			} else {
				$SHOWFURNITURES = $FURNITURES[selected]
			}
		}
	}


</script>

<div
	class="w-full h-full overflow-y-visible flex flex-row gap-2 items-end flex-nowrap"
>
	<button class="h-[4.5rem] {showSearch?"w-fit" : "w-[5rem] aspect-square"} bg-[color:var(--color-secondary)] flex flex-row gap-2 items-center"

	>
		<button
			class="h-[4.5rem] w-[4.5rem] aspect-square bg-[color:var(--color-secondary)] flex flex-row gap-2 items-center justify-center"
		on:click={() => {
			showSearch = !showSearch
			if ($IS_MENU_MINIMIZED) $IS_MENU_MINIMIZED = false
		}}>
			<i class="fas fa-magnifying-glass text-[1.6rem]" />
		</button>

		{#if showSearch}
			<input
				bind:value={searchTerm}
				autofocus
				class="min-w-[10rem] h-[4.5rem] px-[1rem] text-[1.6rem] bg-[color:var(--color-tertiary)]"
				type="text"
				placeholder="Search"
			/>
		{/if}
	</button>

	<div
		on:wheel={scrollHorizontally}
		bind:this={scrollableElement}
		class=" w-full  h-[5rem] items-end flex flex-row gap-2 overflow-y-visible overflow-x-scroll categories"
	>
		<button
			class="whitespace-nowrap w-fit px-10 h-[4.5rem] text-[1.6rem] bg-[color:var(--color-secondary)] grid place-items-center transition-all duration-200 ease-in-out"
			on:click={() => {
				selected = -1
				const allFurnitureItems = $FURNITURES.flatMap(furniture => furniture.items);
				$SHOWFURNITURES = { category: "All Objects", items: allFurnitureItems }
				if ($IS_MENU_MINIMIZED) $IS_MENU_MINIMIZED = false
			}}
			class:selected={selected === -1}>All Objects</button
		>
		{#each $FURNITURES as category, i}
			<button
				class=" whitespace-nowrap w-fit px-10 h-[4.5rem] text-[1.6rem] bg-[color:var(--color-secondary)] grid place-items-center transition-all duration-200 ease-in-out"
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
			class="w-fit px-[2rem] items-center justify-center break h-[4.5rem] text-[1.6rem] bg-[color:var(--color-secondary)] flex flex-row gap-4 transition-all duration-200 ease-in-out"
			on:click={() => {
				$IS_CART_OPEN = false
				$IS_OWNEDITEMS_OPEN = !$IS_OWNEDITEMS_OPEN
				
			}}
			>
			<p class="w-fit whitespace-nowrap">Owned Furniture</p>
			<span class="h-fit px-[1rem] bg-[color:var(--color-tertiary)]"
				>{$OWNEDITEMS.length}</span
			>
		</button>
		<button
			class="h-[4.5rem] w-fit px-[2rem] text-[1.6rem] bg-[color:var(--color-secondary)] flex flex-row gap-4 items-center justify-center transition-all duration-200 ease-in-out"
			on:click={() => {
				$IS_OWNEDITEMS_OPEN = false
				$IS_CART_OPEN = !$IS_CART_OPEN
			}}
		>
			<i class="fas fa-shopping-cart" />
			<span
				class="h-fit px-[1rem] bg-[color:var(--color-tertiary)]"
				>{$CART.length}</span
			>
		</button>
		<button
			class="h-[4.5rem] w-fit aspect-square text-[1.6rem] bg-[color:var(--color-secondary)] flex flex-row gap-4 items-center justify-center transition-all duration-200 ease-in-out"
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
		margin-right: 0.5rem;
		margin-left:  0.5rem;
	}

	.categories::-webkit-scrollbar {
		display: none;
	}
</style>
