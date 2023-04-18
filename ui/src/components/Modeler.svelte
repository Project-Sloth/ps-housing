<script lang="ts">
	import {
		Mesh,
		BoxGeometry,
		GridHelper,
		MeshStandardMaterial,
		Quaternion,
		Euler,
		MathUtils,
	} from 'three'
	import {
		T,
		useFrame,
		OrbitControls,
		PerspectiveCamera,
		TransformControls,
		useThrelte,
		Canvas,
	} from '@threlte/core'
	import { CURRENTFURNITURE, browserMode } from '@store/stores'
	import type { position, quaternion } from '@customTypes/type'
	import { onDestroy, onMount } from 'svelte'
	import { convertToGTACordSystem, convertToThreeCordSystem } from '@customTypes/type'
	import ModelStore from '@store/ModelStore'
	import { SendNUI } from '@utils/SendNUI'
	import { ReceiveNUI } from '@utils/ReceiveNUI'

	const {
		show,
		cameraPosition,
		cameraLookAt,
		objectPosition,
		objectEuler,
	} = ModelStore

	let mesh: any = undefined
	let mode: 'translate' | 'rotate' = 'translate'
	let translationSnap: number = 0.01
	let rotationSnapDegrees: number = 1
	let isPanelOpen: boolean = false
	let objectAlpha: number = 200

	ReceiveNUI('setObjectAlpha', (data: number) => {
		objectAlpha = data
	})
	$: SendNUI("setObjectAlpha", { alpha: objectAlpha })

	function changeMode(e: MouseEvent) {
		//on right click change mode
		if (e.button == 2) {
			if (mode == 'translate') {
				mode = 'rotate'
			} else {
				mode = 'translate'
			}
		}
	}

	onMount(() => {
		document.addEventListener('contextmenu', changeMode)
	})
	onDestroy(() => {
		document.removeEventListener('contextmenu', changeMode)
	})

	function hasPositionChanged(newPosition: position) {
		return (
			newPosition.x != $objectPosition.x ||
			newPosition.y != $objectPosition.y ||
			newPosition.z != $objectPosition.z
		)
	}

	function hasEulerChanged(newEuler: Euler) {
		return (
			newEuler.x != $objectEuler.x ||
			newEuler.y != $objectEuler.y ||
			newEuler.z != $objectEuler.z
		)
	}

	function getMeshLocation() {
		if (mesh) {
			if (hasPositionChanged(mesh.position)) {
				// console.log("Mesh?", mesh.position);
				// console.log("HMM?", $objectPosition);
				$objectPosition.x = mesh.position.x
				$objectPosition.y = mesh.position.y
				$objectPosition.z = mesh.position.z
				// Fetch client event to move entity
				ModelStore.sendMovementUpdate(
					convertToGTACordSystem($objectPosition)
				)
			}

			if (hasEulerChanged(mesh.rotation)) {
				$objectEuler.x = mesh.rotation.x
				$objectEuler.y = mesh.rotation.y
				$objectEuler.z = mesh.rotation.z
				ModelStore.sendRotationUpdate($objectEuler)
			}
		}
	}

	$: if (mesh) {
		mesh.rotation.set(
			$objectEuler.x,
			$objectEuler.y,
			$objectEuler.z,
			$objectEuler.order
		)
		mesh.position.set(
			$objectPosition.x,
			$objectPosition.y,
			$objectPosition.z
		)
	}
</script>

{#if $show}
	<div
		class="modeler z-[0] absolute h-screen w-screen {$browserMode
			? 'bg-gray-800'
			: ''} "
	>
		<div
			class="w-[15vw] bg-[color:var(--color-primary)] top-[2vh] origin-top absolute {isPanelOpen
				? 'left-[1.5vw]'
				: '-left-[15vw]'}  flex flex-row gap-[1vw] items-center justify-between"
		>
			<div class="flex flex-col gap-[0.5vw] p-[1vw]">
				<button
					class="bg-[color:var(--color-secondary)] text-[0.8vw] text-white p-[0.5vw] w-full"
					on:click={() => {
						if (mode == 'translate') {
							mode = 'rotate'
						} else {
							mode = 'translate'
						}
					}}
					>Change to {mode == 'translate'
						? 'rotate'
						: 'translate'}</button
				>
				<div class="flex flex-row gap-[1vw]">
					<button
						class="bg-[color:var(--color-secondary)] text-[0.8vw] text-white p-[0.5vw] w-full whitespace-nowrap"
						on:click={() => {
							mesh.rotation.set(0.0, 0.0, 0.0, $objectEuler.order)
							getMeshLocation()
						}}>Reset Rotation</button
					>
					<button
						class="bg-[color:var(--color-secondary)] text-[0.8vw] text-white p-[0.5vw] w-full"
						on:click={() => {
							mesh.position.set(
								$cameraLookAt.x,
								$cameraLookAt.y,
								$cameraLookAt.z
							)
							getMeshLocation()
						}}>Reset Position</button
					>
				</div>
				<div class="flex flex-col items-center text-[0.8vw]">
					<p class="text-[0.8vw] h-[1.7vw]">Translation Snap</p>
					<div class="flex flex-row gap-[0.5vw] text-center">
						<!-- y and z are switched because it was not passed throguh convertToGTACordSystem -->
						<div class="bg-[color:var(--color-secondary)] relative flex flex-col w-[4.2vw] px-[0.1vw]"><p>x</p> <p>{$objectPosition.x.toFixed(2)}</p></div>
						<div class="bg-[color:var(--color-secondary)] relative flex flex-col w-[4.2vw] px-[0.1vw]"><p>y</p> <p>{-$objectPosition.z.toFixed(2)}</p></div>
						<div class="bg-[color:var(--color-secondary)] relative flex flex-col w-[4.2vw] px-[0.1vw]"><p>z</p> <p>{$objectPosition.y.toFixed(2)}</p></div>
					</div>
				</div>
				<div class="flex flex-row gap-[1vw] items-center">
					<div
						class="w-[4vw] h-[1.7vw] text-[0.8vw] items-center flex justify-center bg-[color:var(--color-secondary)]"
					>
						{translationSnap}
					</div>
					<input
						id="slider"
						type="range"
						min="0.01"
						max="1"
						step="0.01"
						bind:value={translationSnap}
						class="w-full"
					/>
				</div>
					<button
						class="bg-[color:var(--color-secondary)] text-[0.8vw] text-white p-[0.5vw] w-full"
						on:click={() => {
							SendNUI('placeOnGround').then((data) => {
								const coords = convertToThreeCordSystem(data)
								mesh.position.set(
									coords.x,
									coords.y,
									coords.z
								)
								getMeshLocation()
							})
						}}>Place On Ground</button
					>
				<div class="flex flex-col items-center text-[0.8vw]">
					<p class="text-[0.8vw] h-[1.7vw]">Rotation Snap</p>
					<div class="flex flex-row gap-[0.5vw] text-center">
						<div class="bg-[color:var(--color-secondary)] relative flex flex-col w-[4.2vw] px-[0.1vw]"><p>x</p> <p>{MathUtils.radToDeg($objectEuler.x).toFixed(2)}</p></div>
						<div class="bg-[color:var(--color-secondary)] relative flex flex-col w-[4.2vw] px-[0.1vw]"><p>y</p> <p>{MathUtils.radToDeg($objectEuler.y).toFixed(2)}</p></div>
						<div class="bg-[color:var(--color-secondary)] relative flex flex-col w-[4.2vw] px-[0.1vw]"><p>z</p> <p>{MathUtils.radToDeg($objectEuler.z).toFixed(2)}</p></div>
					</div>
				</div>
				<div class="flex flex-row gap-[1vw] items-center">
						<div
							class="w-[4vw] h-[1.7vw] items-center flex justify-center bg-[color:var(--color-secondary)]"
						>
							{rotationSnapDegrees}
						</div>
					<input
						id="slider"
						type="range"
						min="1"
						max="90"
						step="1"
						bind:value={rotationSnapDegrees}
						class="w-full"
					/>
				</div>
				<p class="text-[0.8vw]">Object Alpha</p>
				<div class="flex flex-row gap-[1vw] items-center">
					<input
						id="slider"
						type="range"
						min="1"
						max="255"
						step="10"
						bind:value={objectAlpha}
						class="w-full"
					/>
				</div>
				<button
					class="bg-[color:var(--color-secondary)] text-[0.8vw] text-white p-[0.5vw] w-full"
					on:click={() => {
						SendNUI('cancelPlacement')
						ModelStore.show.set(false)
					}}>Cancel Placement</button
				>
			</div>
			<button
				class="h-full absolute -right-[2vw] w-[2vw] grid place-items-center bg-[color:var(--color-secondary)]"
				on:click={() => {
					isPanelOpen = !isPanelOpen
				}}
			>
				<i
					class="fas text-[1vw] fa-chevron-{isPanelOpen
						? 'left'
						: 'right'}"
				/>
			</button>
		</div>

		<Canvas>
			<PerspectiveCamera
				position={$cameraPosition}
				lookAt={$cameraLookAt}
			>
				<!-- <OrbitControls /> -->
			</PerspectiveCamera>
			<T.Mesh
				bind:ref={mesh}
				position.x={$objectPosition.x}
				position.y={$objectPosition.y}
				position.z={$objectPosition.z}
				quaternion={5}
				geometry={new BoxGeometry(0, 0, 0)}
				material={new MeshStandardMaterial()}
				rotation.x={$objectEuler.x}
				rotation.y={$objectEuler.y}
				rotation.z={$objectEuler.z}
			>
				<TransformControls
					{mode}
					on:objectChange={(event) => {
						getMeshLocation()
					}}
					{translationSnap}
					rotationSnap={MathUtils.degToRad(rotationSnapDegrees)}
					size={0.5}
					space="local"
				/>
			</T.Mesh>
		</Canvas>
	</div>
{/if}

<style>
	input#slider[type='range'] {
		height: 1vw;
		-webkit-appearance: none;
		width: 100%;
	}

	input#slider[type='range']::-webkit-slider-runnable-track {
		width: 100%;
		height: 1vw;
		cursor: pointer;
		background: var(--color-secondary);
	}

	input#slider[type='range']::-webkit-slider-thumb {
		height: 1vw;
		width: 1vw;
		background: white;
		cursor: pointer;
		-webkit-appearance: none;
	}
</style>
