<script lang="ts">
	import { IS_MENU_MINIMIZED } from "@store/stores"
    import Header from "./Header.svelte"
	import ItemList from "./ItemList.svelte"
	import { onMount } from "svelte"
	import { SendNUI } from "@utils/SendNUI"
	import { ReceiveNUI } from "@utils/ReceiveNUI"
	import Cart from "./Cart.svelte"
	import ModelStore from "@store/ModelStore"

    const {
		cartIndex,
	} = ModelStore

    let isFreeCamMode: boolean = false


    function listenForLeftAlt(e: KeyboardEvent) {
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
        $IS_MENU_MINIMIZED = false
        isFreeCamMode = false
    })

</script>




<div class="w-[97%] h-fit flex flex-col absolute left-1/2 overflow-visible -translate-x-1/2 {$IS_MENU_MINIMIZED ? "-bottom-[24rem]" : "bottom-[3rem]"} z-[1]">
    <Header />
    <ItemList />
    <Cart />
    <div 
    style="border-color: {isFreeCamMode?"white":"var(--color-tertiary)"};"
    class="absolute -top-[4rem] text-[2rem] right-0 w-[8rem] border-[0.3rem] h-[4rem] bg-[color:var(--color-secondary)] flex flex-row gap-[1rem] items-center justify-center">
        <i class="fa-solid fa-video text-[white]"></i>
        <p class=" font-semibold">C</p>
    </div>

</div>