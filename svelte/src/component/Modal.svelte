<script>
    import { createEventDispatcher } from "svelte";

    export let isOpenModal;
    export let modal_heading_class = "";
    export let modal_body_class = "";
    export let modal_body_css = "";
    export let modal_footer_flag = false;
    export let modal_footer_class = "";
    export let modal_footer_css = "";
    const dispatch = createEventDispatcher();
    const handleModalPopUp_Close = () => {
        isOpenModal = false;
        dispatch('closeModal', { isOpenModal });
    }
</script>

<div  tabindex="-1" aria-hidden="true" class="{isOpenModal ? 'flex justify-center items-center' : 'hidden'} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
    <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-base-100 rounded-lg shadow dark:bg-base-100">
            <!-- Modal header -->
            <div class="flex justify-between items-start {modal_heading_class}">
                <slot name="modal_heading" />
                <button
                  on:click={() => {
                    handleModalPopUp_Close();
                  }}  
                  type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                </button>
            </div>
            <!-- Modal body -->
            
            <div class="{modal_body_class}" style="{modal_body_css}">
                <slot name="modal_body" />
            </div>
            <!-- Modal footer -->
            {#if modal_footer_flag}
            <div class="flex  {modal_footer_class}" style="{modal_footer_css}">
                <slot name="modal_footer" />
            </div>
            {/if}
        </div>
    </div>
</div>