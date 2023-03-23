














<div class="w-full h-[24vh] bg-[color:var(--color-primary)] p-[1vw]">

	<div
		class="grid grid-rows-2 grid-flow-col-dense gap-[1vw] overflow-x-scroll w-fit max-w-full h-full relative scroll-style"
	>
		{#each { length: 100 } as _, i}
			<div class="h-full w-[15vw] bg-[color:var(--color-secondary)]" />
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
