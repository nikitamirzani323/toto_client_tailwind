<script>
    import { createEventDispatcher } from "svelte";
    import Card_pasaran from '../component/Card_pasaran.svelte'

    export let client_token = "";
    export let client_company = "";
    export let client_username = "";
    export let client_credit = 0;
    export let client_ipaddress = "";
    export let client_timezone = "Asia/Jakarta";
    export let client_device = "";
    export let listkeluaran = [];
    let isModalAlert = false;
  
    let msg_error = "";
    let dispatch = createEventDispatcher();

    const handleClick = (code, name, periode, status) => {
        if (status == "ONLINE") {
            const pasaran = {
                code,
                periode,
                name,
                client_token,
            };
            dispatch("pasaran", pasaran);
        } else {
            isModalAlert = true
            msg_error = "PASARAN " + name + " OFFLINE"
        }
    };
</script>
{#if client_device == "WEBSITE"}
  <div class="mt-5 gap-4 grid grid-cols-2  xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2">
    {#each listkeluaran as rec}
      <Card_pasaran
          on:click={() => {
              handleClick(
                  rec.pasaran_code,
                  rec.pasaran,
                  rec.pasaran_periode,
                  rec.pasaran_status
              );
          }}
          card_title="{rec.pasaran}"
          card_description="PERIODE: {rec.pasaran_periode} <br>
          {rec.pasaran_tgl} WIB"
          card_status="{rec.pasaran_status}"/>
    {/each}
    
    <input type="checkbox" id="my-modal-alert" class="modal-toggle" bind:checked={isModalAlert}>
    <div class="modal" on:click|self={()=>isModalAlert = false}>
        <div class="modal-box relative">
            <label for="my-modal-alert" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 class="text-lg font-bold">INFORMATION</h3>
            <p class="py-4">{@html msg_error}</p>
        </div>
    </div>
    
    
  </div>
{:else}
  <div class="mt-1 gap-2 grid grid-cols-2 px-1">
    {#each listkeluaran as rec}
      <Card_pasaran
          on:click={() => {
              handleClick(
                  rec.pasaran_code,
                  rec.pasaran,
                  rec.pasaran_periode,
                  rec.pasaran_status
              );
          }}
          card_device="{client_device}"
          card_title="{rec.pasaran}"
          card_description="PERIODE: {rec.pasaran_periode} <br>
          {rec.pasaran_tgl} WIB"
          card_status="{rec.pasaran_status}"/>
    {/each}
    
    <input type="checkbox" id="my-modal-alert" class="modal-toggle" bind:checked={isModalAlert}>
    <div class="modal" on:click|self={()=>isModalAlert = false}>
        <div class="modal-box relative">
            <label for="my-modal-alert" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 class="text-lg font-bold">INFORMATION</h3>
            <p class="py-4">{@html msg_error}</p>
        </div>
    </div>
  </div>
{/if}