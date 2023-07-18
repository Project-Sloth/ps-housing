<script lang="ts">
	import VisibilityProvider from '@providers/VisibilityProvider.svelte'
	import {
		CURRENTFURNITURE,
		FURNITURES,
		browserMode,
		resName,
	} from '@store/stores'
	import DebugBrowser from '@providers/DebugBrowser.svelte'
	import AlwaysListener from '@providers/AlwaysListener.svelte'
	import Menu from '@components/Menu.svelte'

	import Modeler from '@components/Modeler.svelte'
	import ModelStore from '@store/ModelStore'

	$resName = 'ps-housing' // Change this to your resource name (case sensitive)

	const { show } = ModelStore

</script>

<VisibilityProvider>
	{#if $FURNITURES}
		<Menu />
		<Modeler />
	{/if}
</VisibilityProvider>

<AlwaysListener />
{#if $browserMode}
	<DebugBrowser />
	<body class=" bg-neutral-700"></body>
{/if}
