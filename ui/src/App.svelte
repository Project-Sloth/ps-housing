<script lang="ts">
	import VisibilityProvider from '@providers/VisibilityProvider.svelte'
	import { browserMode, resName } from '@store/stores'
	import DebugBrowser from '@providers/DebugBrowser.svelte'
	import AlwaysListener from '@providers/AlwaysListener.svelte'

	$resName = 'ps-housing' // Change this to your resource name (case sensitive)
</script>

<VisibilityProvider>
	<!-- PUT STUFF HERE  -->
</VisibilityProvider>


<style>


</style>


<AlwaysListener />
{#if $browserMode}
	<DebugBrowser />
{/if}
