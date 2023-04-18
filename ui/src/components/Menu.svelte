<script lang="ts">
	import { IS_MENU_MINIMIZED } from "@store/stores"
    import Header from "./Header.svelte"
	import ItemList from "./ItemList.svelte"
	import { onMount } from "svelte"
	import { SendNUI } from "@utils/SendNUI"
	import { ReceiveNUI } from "@utils/ReceiveNUI"

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




<div class="w-[97vw] h-fit flex flex-col absolute left-1/2 overflow-visible -translate-x-1/2 {$IS_MENU_MINIMIZED ? "-bottom-[24vh]" : "bottom-[3vh]"} z-[1]">
    <Header />
    <ItemList />
    <div 
    style="border-color: {isFreeCamMode?"white":"var(--color-tertiary)"};"
    class="absolute -top-[2vw] text-[1.2vw] right-[0.2vw] w-[4vw] border-[0.3vw] h-[2vw] bg-[color:var(--color-secondary)] flex flex-row gap-[0.5vw] items-center justify-center">
        <i class="fa-solid fa-video text-[white]"></i>
        <p class=" font-semibold">C</p>
    </div>
</div>