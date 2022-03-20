<script>
    export let modal_alert = false;
    export let modal_msg = "";
    console.log(modal_alert)
    console.log(modal_msg)
</script>
<input type="checkbox" id="my-modal-alert" class="modal-toggle" bind:checked={modal_alert}>
<div class="modal" on:click|self={()=>modal_alert = false}>
    <div class="modal-box relative">
        <label for="my-modal-alert" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 class="text-lg font-bold">INFORMATION</h3>
        <p class="py-4">{@html modal_msg}</p>
    </div>
</div>