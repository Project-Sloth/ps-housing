<script lang="ts">
	import { IS_MENU_MINIMIZED } from "@store/stores"
    import Header from "./Header.svelte"
	import ItemList from "./ItemList.svelte"
	import { onMount } from "svelte"
	import { SendNUI } from "@utils/SendNUI"
	import { ReceiveNUI } from "@utils/ReceiveNUI"
	import Cart from "./Cart.svelte"
    import OwnedItems from "./OwnedItems.svelte"
    let isFreeCamMode: boolean = false
    let hoverDistance: number = 5.0


    function listenForLeftAlt(e: KeyboardEvent) {
        // if the user is in a text field, don't do anything
        if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return
        if (e.key === "c") {
            SendNUI("freecamMode", true)
            $IS_MENU_MINIMIZED = true
            isFreeCamMode = true
        }
    }

    ReceiveNUI("freecamMode", (data: boolean) => {
        if (data == false) {
            $IS_MENU_MINIMIZED = false
            isFreeCamMode = false
        }
    })

    onMount(() => {
        window.addEventListener('keypress', listenForLeftAlt)
        SendNUI("freecamMode", false)
        SendNUI("setHoverDistance", hoverDistance)
        $IS_MENU_MINIMIZED = false
        isFreeCamMode = false
    })


</script>




<div class="w-[97%] h-fit flex flex-col absolute left-1/2 overflow-visible -translate-x-1/2 {$IS_MENU_MINIMIZED ? "-bottom-[24rem]" : "bottom-[3rem]"} z-[1] transition-all">
    <Header />
    <ItemList />
    <Cart />
    <OwnedItems />
    <div 
    style="border-color: {isFreeCamMode?"white":"var(--color-tertiary)"};"
    class="absolute -top-[5rem] text-[2rem] right-0 w-[8rem] border-[0.3rem] h-[4rem] bg-[color:var(--color-primary)] flex flex-row gap-[1rem] items-center justify-center">
        <i class="fa-solid fa-video text-[white]"></i>
        <p class=" font-semibold">C</p>
    </div>
    <div class="flex flex-row gap-[1rem] items-center absolute left-0 -top-[5rem] w-[30rem] h-fit p-4 bg-[color:var(--color-primary)]">
        <i class="fa-solid fa-eye text-[white]"></i>
        <p class=" font-semibold text-center w-[4rem]">{hoverDistance.toFixed(1)}</p>
        <input
            id="slider"
            type="range"
            min="1.0"
            max="12.5"
            step="0.5"
            bind:value={hoverDistance}
            on:change={() => {
                SendNUI("setHoverDistance", hoverDistance)
            }}
            class="w-full"
        />
    </div>

</div>