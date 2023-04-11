<script lang="ts">
	import { FURNITURES, SHOWFURNITURES } from "@store/stores"

	let selected = 0
</script>

<div class="w-full h-full overflow-y-visible flex flex-row gap-2 items-end">
	<button class="h-[5vh] aspect-square bg-[color:var(--color-secondary)]">
		<i class="fas fa-magnifying-glass text-[1vw]" />
	</button>

	<div class=" w-full h-[6vh] items-end flex flex-row gap-2 overflow-y-visible overflow-x-scroll categories ">
		<button
			class="min-w-[8vw] h-[5vh] text-[1vw] bg-[color:var(--color-secondary)] grid place-items-center transition-all duration-200 ease-in-out"
			on:click={() => {selected = -1; $SHOWFURNITURES = Object.values($FURNITURES).reduce((accumulator, currentValue) => accumulator.concat(currentValue));;}}
			class:selected={selected === -1}
			>Show All</button
	>
		{#each Object.keys($FURNITURES) as category, i}
			<button
				class="min-w-[8vw] h-[5vh] text-[1vw] bg-[color:var(--color-secondary)] grid place-items-center transition-all duration-200 ease-in-out"
				on:click={() => {selected = i; $SHOWFURNITURES = $FURNITURES[Object.keys($FURNITURES)[i]];} }
				class:selected={selected === i}
				>{category}</button
			>
		{/each}
	</div>

	<div class="overflow-y-visible  flex flex-row gap-2 ml-auto">
		<button
			class="w-fit px-[1vw] items-center justify-center break h-[5vh] text-[1vw] bg-[color:var(--color-secondary)] flex flex-row gap-4 transition-all duration-200 ease-in-out"
			>
            <p class="w-fit whitespace-nowrap">Owned Furniture</p>
            <span class="py-[0.1vw] px-[0.5vw] bg-[color:var(--color-tertiary)]">0</span>
            </button
		>
		<button
			class="h-[5vh] w-fit px-[1vw] text-[1vw] bg-[color:var(--color-secondary)] flex flex-row gap-4 items-center justify-center transition-all duration-200 ease-in-out"
		>
			<i class="fas fa-shopping-cart" />
            <span class=" py-[0.1vw] px-[0.5vw] bg-[color:var(--color-tertiary)]">0</span>
		</button>
        <button
            class="h-[5vh] w-fit px-[1vw] text-[1vw] bg-[color:var(--color-secondary)] flex flex-row gap-4 items-center justify-center transition-all duration-200 ease-in-out">
            <i class="fas fa-chevron-down" />
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
