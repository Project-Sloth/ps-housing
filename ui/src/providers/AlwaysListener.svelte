<script lang="ts">
	import { ReceiveNUI } from '@utils/ReceiveNUI'
	import { debugData } from '@utils/debugData'
	import { FURNITURES, SHOWFURNITURES, browserMode, visibility } from '@store/stores'
	import ModelStore from '@store/ModelStore'



	debugData([
		{
			action: 'setVisible',
			data: true,
		},
	])

	debugData([
		{
			action: 'setBrowserMode',
			data: true
		},
	])

	function browserHideAndShow(e: KeyboardEvent) {
		if (e.key === '=') {
			$visibility = true
		}
	}

	ReceiveNUI('setBrowserMode', (data: boolean) => {
		browserMode.set(data)
		console.log('browser mode enabled')
		if (data) {
			window.addEventListener('keydown', browserHideAndShow)
		} else {
			window.removeEventListener('keydown', browserHideAndShow)
		}
	})


	// MODELR STUFF
	ReceiveNUI('setupModel', (data: any) => {
		ModelStore.show.set(true)
		ModelStore.setupModel(data)
	})

	ReceiveNUI('updateCamera', (data: any) => {
		ModelStore.updateCamera(data)
	})




	// FURNITURES STUFF

	ReceiveNUI('setFurnituresData', (data: any) => {
		FURNITURES.set(data)
		SHOWFURNITURES.set($FURNITURES[0])
	})



</script>
