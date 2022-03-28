<script>
    import { createEventDispatcher } from "svelte";
    export let button_title = "";
    export let button_block = "";
    export let button_function = "";
    let dispatch = createEventDispatcher()
</script>
<button
    on:click={() => dispatch('click',button_function)}
    class="btn  {button_block} bg-[#bf95f9] hover:bg-[#bf95f9] shadow-lg  border-none text-[#3f1b71] rounded-lg  ">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    {button_title}
</button>

