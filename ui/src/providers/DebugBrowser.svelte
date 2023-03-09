<script>
    import { debugData } from '../utils/debugData';

	let show = false;
    //EXAMPLE
    
    // debugData([
	// 	{
	// 		action: 'setVisible',
	// 		data: true,
	// 	},
	// ])

	let options = [
		{
				component: 'Show',
				actions : [
					{
						name: "show",
						action: "setVisible",
						data: true,
					},
					{
						name: "hide",
						action: "setVisible",
						data: false,
					},
				]
		},
		// {
		// 	component: 'Example',
		// 	actions : [
		// 		{
		// 			name: "debugLocation",
		// 			custom: true,
		// 			customFunction: () => {
					// CUSTOM LOGIC
		// 			}
		// 		},
		// 		{
		// 			name: "toggle Show",
		// 			custom: true,
		// 			customFunction: () => {
					// CUSTOM LOGIC
		// 			}
		// 		},
		// 	]
		// },

	]
</script>


<div class="absolute top-0 left-1/2 z-[1000]">
	<button class="bg-red-500 text-white p-2"
		on:click={() => {
			show = !show;
		}}
	>
	Show
	</button>
	{#if show}
	<div class="w-fit h-fit bg-gray-600 p-2 ">
		{#each options as option}
		<div class="flex flex-row gap-2 items-center m-1">
			<p class="text-white">{option.component}</p>
			{#each option.actions as action}
			<button class="bg-blue-500 text-white p-2"
				on:click={() => {

					if (action.custom == true) {
						action.customFunction();
						return
					}
					debugData([
						{
							action: action.action,
							data: action.data,
						},
					])
				}}
			>
			{action.name}
			</button>
			{/each}
		</div>
		{/each}
	</div>
	{/if}
</div>