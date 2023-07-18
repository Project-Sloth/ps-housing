<script>
	import { CART, CURRENTFURNITURE, IS_CART_OPEN } from '@store/stores'
	import { SendNUI } from '@utils/SendNUI'
</script>

{#if $IS_CART_OPEN}
	<div
		class="w-[40rem] h-[60rem] bg-[color:var(--color-primary)] absolute right-0 -top-[65rem] flex flex-col gap-[1rem] p-12"
	>
		<div class="font-medium">
			<p>YOUR SHOPPING CART</p>
		</div>
		<div
			class="flex flex-col gap-2 overflow-scroll h-[73%] scroll-style scroll-style-vertical"
		>
			{#each $CART as item, i}
				<button
					class="flex flex-row gap-2 w-full min-h-[8rem] justify-between bg-[color:var(--color-secondary)] items-center"
					on:click={() => {
						SendNUI('selectCartItem', item)
					}}
					>
					<!-- <button
						class="bg-[color:var(--color-tertiary)] text-[2rem] w-[4rem] h-[4rem] text-center aspect-square"
						on:click={() => {
							SendNUI('selectCartItem', item)
						}}
					> 
						<i class="fa-solid fa-magnifying-glass" />
					</button> -->
					<div class="flex flex-col gap-2 w-full text-start ml-10">
						<h1 class="text-[2rem]">{item.label}</h1>
						<div class="flex text-[1.5rem]">
							<h1>Price:</h1>
							<h1 class="text-[color:var(--color-accent)] font-bold ml-2">${item.price}</h1>
						</div>

					</div>
					<button
						class="bg-[color:var(--color-tertiary)] text-[2rem] py-4 h-full text-center aspect-square"
						on:click={() => {
							SendNUI('removeCartItem', item)
						}}
					>
						<i class="fa-solid fa-trash" />
					</button>
				</button>
			{/each}
		</div>
		<div class="flex flex-col gap-2 items-center justify-center h-[5rem] mt-10">
			<div class="text-[1.6rem] w-full h-full flex items-center justify-between">
				<h1>
					SUBTOTAL:
				</h1>
				<h1>
					${$CART.reduce((acc, item) => acc + item.price, 0)}
				</h1>
			</div>
			<div class="flex w-full h-full justify-between">
				<button
					class="bg-[color:var(--color-secondary)]  mt-2 font-medium h-full w-[20%] py-14 gap-4 whitespace-nowrap flex flex-row items-center justify-center px-8 text-center"
					on:click={() => ($IS_CART_OPEN = false)}
				>
					<i class="fa-solid fa-xmark" />
				</button>
				<button
					class="bg-[color:var(--color-accent)] text-[2rem] mt-2 font-medium h-full w-[79%] py-14 gap-4 whitespace-nowrap flex flex-row items-center justify-center px-8 text-center"
					on:click={()=>{
						$CURRENTFURNITURE = null
						SendNUI('buyCartItems')
					}}
				>
					<p>Purchase</p>
				</button>
			</div>
		</div>
	</div>
{/if}
