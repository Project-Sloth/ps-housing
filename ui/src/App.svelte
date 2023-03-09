<script lang="ts">
	import VisibilityProvider from '@providers/VisibilityProvider.svelte'
	import { browserMode, resName } from '@store/stores'
	import DebugBrowser from '@providers/DebugBrowser.svelte'
	import AlwaysListener from '@providers/AlwaysListener.svelte'
	import Menu from '@components/Menu.svelte'

	$resName = 'ps-housing' // Change this to your resource name (case sensitive)
</script>

<VisibilityProvider>
	<Menu />
</VisibilityProvider>


<style>


</style>


<AlwaysListener />
{#if $browserMode}
	<DebugBrowser />
{/if}
