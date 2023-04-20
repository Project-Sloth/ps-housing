<script>
    import { debugData } from '../utils/debugData';

	let show = false;

	let debugItems = [
		{
			label: "Item 1",
			object: "v_res_d_coffeetable",
			price: 100,
		},
		{
			label: "Item 2",
			object: "v_res_d_coffeetable",
			price: 100,
		},
		{
			label: "Item 3",
			object: "v_res_d_coffeetable",
			price: 100,
		},
		{
			label: "Item 4",
			object: "v_res_d_coffeetable",
			price: 100,
		},
		{
			label: "Item 5",
			object: "v_res_d_coffeetable",
			price: 100,
		},
	]

	const debugFurnitures = [
		{
			category: "Category 1",
			items: debugItems
		},
		{
			category: "Category 2",
			items: debugItems
		},
		{
			category: "Category 3",
			items: debugItems
		},
		{
			category: "Category 4",
			items: debugItems
		},
		{
			category: "Category 5",
			items: debugItems
		},
	]
	
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
		{
			component: 'Furniture',
			actions : [
				{
					name: "Set Furniture Data",
					action: "setFurnituresData",
					data: debugFurnitures,
				},
			]
		},
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