<script lang="ts">
	import { ReceiveNUI } from '@utils/ReceiveNUI'
	import { debugData } from '@utils/debugData'
	import { FURNITURES, SHOWFURNITURES, browserMode, visibility } from '@store/stores'



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

	ReceiveNUI('setFurnituresData', (data: any) => {
		FURNITURES.set(data)
		SHOWFURNITURES.set($FURNITURES[Object.keys($FURNITURES)[0]])
		console.log($FURNITURES)
	})

</script>
