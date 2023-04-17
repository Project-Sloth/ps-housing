<script lang="ts">
	import { IS_MENU_MINIMIZED } from "@store/stores"
    import Header from "./Header.svelte"
	import ItemList from "./ItemList.svelte"
	import { onMount } from "svelte"
	import { SendNUI } from "@utils/SendNUI"
	import { ReceiveNUI } from "@utils/ReceiveNUI"

    let isFreeCamMode: boolean = false


    function listenForLeftAlt(e: KeyboardEvent) {
        console.log(e.key)
        if (e.key === "c") {
            SendNUI("freecamMode", true)
            console.log("freecamMode")
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
    })

</script>




<div class="w-[97vw] h-fit flex flex-col absolute left-1/2 -translate-x-1/2 {$IS_MENU_MINIMIZED ? "-bottom-[24vh]" : "bottom-[3vh]"} z-[1]">
    <Header />
    <ItemList />
</div>