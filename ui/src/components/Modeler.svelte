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
	import { browserMode, CART, CURRENTFURNITURE } from '@store/stores'
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
		entity,
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
				$objectPosition.x = mesh.position.x
				$objectPosition.y = mesh.position.y
				$objectPosition.z = mesh.position.z
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
		<!-- Modeler Panel -->
		<div
			class="w-fit text-[1.5rem] bg-[color:var(--color-primary)] top-[4rem] origin-top absolute {isPanelOpen
				? 'left-[1.5rem]'
				: '-left-[30rem]'}  flex flex-row gap-[1rem] items-center justify-between"
		>
			<div class="flex flex-col gap-[1rem] p-[2rem]">
				<button
					class="bg-[color:var(--color-secondary)] text-white p-[1rem] w-full"
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
				<div class="flex flex-row gap-[1rem]">
					<button
						class="bg-[color:var(--color-secondary)] text-white p-[0.5rem] w-full whitespace-nowrap"
						on:click={() => {
							mesh.rotation.set(0.0, 0.0, 0.0, $objectEuler.order)
							getMeshLocation()
						}}>Reset Rotation</button
					>
					<button
						class="bg-[color:var(--color-secondary)]  text-white p-[1rem] w-full"
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
				<div class="flex flex-col items-center">
					<p class=" h-fit">Translation Snap</p>
					<div class="flex flex-row gap-[1rem] text-center">
						<!-- y and z are switched because it was not passed throguh convertToGTACordSystem -->
						<div class="bg-[color:var(--color-secondary)] relative flex flex-col w-[8rem] px-[0.1rem]"><p>x</p> <p>{$objectPosition.x.toFixed(2)}</p></div>
						<div class="bg-[color:var(--color-secondary)] relative flex flex-col w-[8rem] px-[0.1rem]"><p>y</p> <p>{-$objectPosition.z.toFixed(2)}</p></div>
						<div class="bg-[color:var(--color-secondary)] relative flex flex-col w-[8rem] px-[0.1rem]"><p>z</p> <p>{$objectPosition.y.toFixed(2)}</p></div>
					</div>
				</div>
				<div class="flex flex-row gap-[1rem] items-center">
					<div
						class="w-[5rem] h-[3rem] items-center flex justify-center bg-[color:var(--color-secondary)]"
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
						class="bg-[color:var(--color-secondary)]  text-white p-[1rem] w-full"
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
				<div class="flex flex-col items-center ">
					<p class=" h-fit">Rotation Snap</p>
					<div class="flex flex-row gap-[1rem] text-center">
						<div class="bg-[color:var(--color-secondary)] relative flex flex-col w-[8rem] px-[0.1rem]"><p>x</p> <p>{MathUtils.radToDeg($objectEuler.x).toFixed(2)}</p></div>
						<div class="bg-[color:var(--color-secondary)] relative flex flex-col w-[8rem] px-[0.1rem]"><p>y</p> <p>{MathUtils.radToDeg($objectEuler.y).toFixed(2)}</p></div>
						<div class="bg-[color:var(--color-secondary)] relative flex flex-col w-[8rem] px-[0.1rem]"><p>z</p> <p>{MathUtils.radToDeg($objectEuler.z).toFixed(2)}</p></div>
					</div>
				</div>
				<div class="flex flex-row gap-[1rem] items-center">
						<div
							class="w-[5rem] h-[3rem] items-center flex justify-center bg-[color:var(--color-secondary)]"
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
				<p class="">Object Alpha</p>
				<div class="flex flex-row gap-[1rem] items-center">
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
					class="bg-[color:var(--color-secondary)] text-white p-[1rem] w-full"
					on:click={() => {
						SendNUI('stopPlacement')
						ModelStore.show.set(false)
						$CURRENTFURNITURE = null
					}}>Stop Placement</button
				>
			</div>
			<button
				class="h-full absolute -right-[4rem] w-[4rem] grid place-items-center bg-[color:var(--color-secondary)]"
				on:click={() => {
					isPanelOpen = !isPanelOpen
				}}
			>
				<i
					class="fas text-[2rem] fa-chevron-{isPanelOpen
						? 'left'
						: 'right'}"
				/>
			</button>
		</div>

		<!-- Add To Cart -->
		{#if $entity == null}
		<button
			class="absolute text-[2rem] hover:brightness-110 top-1/2 -translate-y-1/2 right-[1rem] w-fit gap-[1rem] px-8 py-4  h-fit bg-[color:var(--color-secondary)] flex flex-row items-center justify-between"
			on:click={() => {
				if ($CURRENTFURNITURE.max) {
					const itemsWithSameType = $CART.filter(item => item.object === $CURRENTFURNITURE.object);

					const furnitureTypeMax = $CURRENTFURNITURE.max;

					if (itemsWithSameType.length >= furnitureTypeMax) {
						SendNUI('showNotification', {
							type: 'error',
							message: `You can only have ${furnitureTypeMax} of this item!`,
						})
						return;
					}
				}

				SendNUI('addToCart', $CURRENTFURNITURE)
				$CURRENTFURNITURE = null
			}}
		>        
			<i class="fa-solid fa-shopping-cart text-[white]"></i>
        	<p class=" font-semibold">Add To Cart</p>
		</button>	
		{/if}

		<Canvas>
			<PerspectiveCamera
				position={$cameraPosition}
				lookAt={$cameraLookAt}
				fov={45.0}
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
					on:dragging-changed={(event) => {
						const isDragging = event.detail.value
						if (!isDragging) {
							if ($entity != null) {
								const item = $CART.find((item) => item.entity === $entity)
								if (item === undefined) return
								const gtaPos = convertToGTACordSystem($objectPosition);
								item.position = gtaPos
								const gtaRot = convertToGTACordSystem($objectEuler);
								item.rotation = gtaRot
								$CART = [...$CART]
								SendNUI('updateCartItem', item)
							}
						}
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
