<script lang="ts">
	import { IS_OWNEDLIST_OPEN, OWNEDLIST } from "@store/stores"
    import { SendNUI } from "@utils/SendNUI";
</script>




{#if $IS_OWNEDLIST_OPEN}
	<div
		class="w-[40rem] h-[60rem] bg-[color:var(--color-primary)] absolute right-0 -top-[65rem] flex flex-col gap-[1rem]"
	>
		<div class="flex flex-row gap-2">
			<h1
				class="bg-[color:var(--color-secondary)] text-[2rem] py-4 w-full h-fit text-center"
			>
				Cart
			</h1>
			<button
				class="bg-[color:var(--color-secondary)] text-[2rem] py-4 h-full text-center aspect-square"
				on:click={() => ($IS_OWNEDLIST_OPEN = false)}
			>
				<i class="fa-solid fa-xmark" />
			</button>
		</div>
		<div
			class="flex flex-col gap-2 px-4 overflow-scroll h-full scroll-style scroll-style-vertical"
		>
			{#each $OWNEDLIST as item, i}
				<div
					class="flex flex-row gap-2 w-full justify-between bg-[color:var(--color-secondary)] p-4 items-center"
				>
					<button
						class="bg-[color:var(--color-tertiary)] text-[2rem] w-[4rem] h-[4rem] text-center aspect-square"
						on:click={() => {
							SendNUI('selectOwnedItem', item)
						}}
					>
						<i class="fa-solid fa-magnifying-glass" />
					</button>
					<div class="flex flex-col gap-2 w-full">
						<h1 class="text-[2rem]">{item.label}</h1>
						<h1 class="text-[1.5rem]">${item.price}</h1>
					</div>
                    {#if !item.type}
                        <button
                            class="bg-[color:var(--color-tertiary)] text-[2rem] py-4 h-full text-center aspect-square"
                            on:click={() => {
                                SendNUI('removeOwnedItem', item)
                            }}
                        >
                            <i class="fa-solid fa-xmark" />
                        </button>
                    {/if}
				</div>
			{/each}
		</div>
	</div>
{/if}
