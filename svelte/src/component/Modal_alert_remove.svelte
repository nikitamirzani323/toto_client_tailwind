<script>
    import { createEventDispatcher } from "svelte";
    export let modal_tipe = "";
    export let modal_widthheight_class = "";
    export let modal_title = "";
    const dispatch = createEventDispatcher();
    const handleAlertRemove = (e) => {
        let action_remove = e;
        dispatch("handleAlertRemove", {
			action_remove,
		});
    }
</script>


<div class="modal" >
    <div class="modal-box {modal_widthheight_class} select-none">
        <h3 class="text-xs lg:text-sm font-bold capitalize text-center">{modal_title}</h3>
        {#if modal_tipe == "remove_single"}
            <p class="p-3 italic text-xs lg:text-sm bg-base-200 rounded-md mb-4 mt-4">
                <slot name="modal_body" />
            </p>
        {/if}
        <div class="grid grid-cols-2 gap-1 mt-1">
            <button
                on:click={() => {
                    handleAlertRemove("Y");
                }}
                class="btn btn-sm btn-success rounded-md">Ya</button>
            <button
                on:click={() => {
                    handleAlertRemove("N");
                }}
                class="btn btn-sm bg-[#ff2fa5] hover:bg-[#ff2fa5] border-none  text-[#68073e] rounded-md">Tidak</button>
        </div>
    </div>
</div>