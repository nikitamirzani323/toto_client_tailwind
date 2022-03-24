<script>
    import { createEventDispatcher } from "svelte";
    export let isOpenModal;
    export let modal_id = "";
    export let modal_body_class = "";
</script>
<input type="checkbox" id="{modal_id}" class="modal-toggle" bind:checked={isOpenModal}>
<div class="modal">
    <div class="modal-box relative {modal_body_class}">
        <label for="{modal_id}" class="btn btn-sm btn-circle absolute right-2 top-2 ">✕</label>
        <slot name="modal_body" />
    </div>
</div>