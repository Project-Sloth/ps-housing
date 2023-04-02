














<div class="w-full h-[24vh] bg-[color:var(--color-primary)] p-[1vw]">

	<div
		class="grid grid-rows-2 grid-flow-col-dense gap-[1vw] overflow-x-scroll w-fit max-w-full h-full relative scroll-style"
	>
		{#each { length: 100 } as _, i}
			<div class="h-full w-[15vw] bg-[color:var(--color-secondary)] flex flex-row">
                <!-- Furniture name -->
                <div class="w-full h-full flex flex-col justify-center items-start p-[1vw]">
                    <p class="text-[color:var(--color-text)] text-[1vw] font-bold">Furniture Name</p>
                    <p class="text-[color:var(--color-text)] text-[1vw]">Price</p>
                </div>
                <!-- eye button -->
                <button class=" bg-[color:var(--color-tertiary)] aspect-square h-full grid place-items-center justify-center items-center">
                    <i class="fas fa-eye text-[color:var(--color-text)] text-[1.5vw]"></i>
                </button>
            </div>  
		{/each}
	</div>
</div>


<style>

    .scroll-style::-webkit-scrollbar {
        height: 1vh;
        width: 100%;
    }

    .scroll-style::-webkit-scrollbar-track {
        background: whtie;
    }

    .scroll-style::-webkit-scrollbar-thumb {
        background: var(--color-accent);
        border-radius: 1vh;
    }
</style>
