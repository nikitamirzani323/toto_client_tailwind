<script>
    import { createEventDispatcher } from "svelte";
    import Modal_alert_remove from "../component/Modal_alert_remove.svelte";
    import Button_custom1 from "../component/Button_custom1.svelte";
    import Button_custom2 from "../component/Button_custom2.svelte";

    export let keranjang = [];
    export let totalkeranjang = 0;
    export let card_custom = "";
    export let client_device = "";
    export let count_line_dasar = 0;
    export let sum_line_shio = 0;
    export let min_bet = 0;
    export let max_bet = 0;
    export let win_bet = 0;
    export let diskon_bet = 0;
    let count_line = 0;
    let sum_line = 0;
    let isModalInformation = false;
    let isModalAlert = false;
    let isModalAlert2 = false;
    let isModalAlert_belanja = false;
    let temp_idkeranjang = ""
    let temp_bayar = 0
    let temp_nomor = ""
    let temp_permainan = ""
    let temp_bet = 0
    let temp_diskon = 0
    let temp_diskonpercen = 0
    let temp_kei = 0
    let temp_keipercen = 0
    let dispatch = createEventDispatcher();
    const handleInformation = () => {
        isModalInformation = true
    };
    
    const handleRemoveKeranjang = (idkeranjang, bayar,nomor,permainan,bet,diskon,diskoonpercen,kei,keiperceen) => {
        isModalAlert = true;
        temp_idkeranjang = idkeranjang
        temp_bayar = bayar
        temp_nomor = nomor
        temp_permainan = permainan
        temp_bet = bet
        temp_diskon = diskon
        temp_diskonpercen = diskoonpercen
        temp_kei = kei
        temp_keipercen = keiperceen
    };
    const handleAlertRemove = (e) => {
        if(e.detail.action_remove == 'Y'){
            let idkeranjang = temp_idkeranjang 
            let bayar = temp_bayar 
            isModalAlert = false;
            dispatch("removekeranjang", {
                idkeranjang,
                bayar,
            });
        }else{
            isModalAlert = false;
        }
        temp_idkeranjang = ""
        temp_bayar = 0
        temp_nomor = ""
        temp_permainan = ""
        temp_bet = 0
        temp_diskon = 0
        temp_diskonpercen = 0
        temp_kei = 0
        temp_keipercen = 0
        
    }
    const handleRemoveKeranjang_all = () => {
        if (keranjang.length > 0) {
			isModalAlert2 = true;
		}
    };
    const handleAlertRemoveAll = (e) => {
        if(e.detail.action_remove == 'Y'){
            isModalAlert2 = false;
            dispatch("removekeranjangall", "all");
        }else{
            isModalAlert2 = false;
        }
        temp_idkeranjang = ""
        temp_bayar = 0
        temp_nomor = ""
        temp_permainan = ""
        temp_bet = 0
        temp_diskon = 0
        temp_diskonpercen = 0
        temp_kei = 0
        temp_keipercen = 0
    }
    const handleSave = () => {
        if (keranjang.length > 0) {
			isModalAlert_belanja = true;
		}
    };
    const handleSaveLanjut = (e) => {
        if(e.detail.action_remove == "Y"){
            dispatch("handleSave", "save");
        }
        isModalAlert_belanja = false;
    };
    const handleBetHistory = () => {
        dispatch("handleBetHistory", "call_bethistory");
    }
    let class_card_table_keranjang = "mt-5";
    if(client_device == "WEBSITE"){
        class_card_table_keranjang = "mt-5";
    }else{
        class_card_table_keranjang = "mt-2";
    }
    $: { 
        count_line = count_line_dasar;
        sum_line = sum_line_shio;
    }
    let tab_line = "bg-success text-black"
    let tab_sum = ""
    let panel_line = true
    let panel_sum = false
    const ChangeTabLine = (e) => {
        switch(e){
            case "menu_line":
                tab_line = "bg-success text-black"
                tab_sum = ""
                panel_line = true
                panel_sum = false
                break;
            case "menu_sum":
                tab_line = ""
                tab_sum = "bg-success text-black"
                panel_line = false
                panel_sum = true
                break;
        }
    }
</script>

<div class="card bg-base-200 shadow-xl {class_card_table_keranjang} rounded-md {card_custom}">
    <div class="card-body p-3">
        {#if client_device == "WEBSITE"}
            <h2 class="card-title text-lg grid grid-cols-2 gap-4">
                <div class="place-content-start text-left text-sm lg:text-lg">
                    TOTAL BAYAR : <span class="text-xs lg:text-lg link-accent">{new Intl.NumberFormat().format(totalkeranjang)}</span>
                </div>
            </h2>
            <div class="overflow-auto shadow-lg scrollbar-thin scrollbar-thumb-green-100 h-[500px]">
                <table class="table table-zebra w-full" >
                    <thead class="sticky top-0">
                        <tr>
                            <th width="1%" class="text-[11px] lg:text-xs text-center">#</th>
                            <th width="*" class="text-[11px] lg:text-xs text-center">NOMOR</th>
                            <th width="10%" class="text-[11px] lg:text-xs text-center">PERMAINAN</th>
                            <th width="15%" class="text-[11px] lg:text-xs text-right">BET</th>
                            <th width="15%" class="text-[11px] lg:text-xs text-right">DISKON</th>
                            <th width="15%" class="text-[11px] lg:text-xs text-right">BAYAR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each keranjang as rec (rec)}
                            <tr>
                                <th 
                                    class="cursor-pointer"
                                    on:click={() => {
                                        handleRemoveKeranjang(rec.id, rec.bayar,rec.nomor,rec.permainan,rec.bet,rec.diskon,rec.diskonpercen,rec.kei,rec.kei_percen);
                                    }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </th>
                                <td class="text-[11px] lg:text-xs text-center">{rec.nomor}</td>
                                <td class="text-[11px] lg:text-xs text-center">{rec.permainan}</td>
                                <td class="text-[11px] lg:text-xs text-right link-accent">{new Intl.NumberFormat().format(rec.bet)}</td>
                                <td class="text-[11px] lg:text-xs text-right link-accent">{new Intl.NumberFormat().format( Math.ceil(rec.diskon))} ({(rec.diskonpercen * 100).toFixed(2)}%)</td>
                                <td class="text-[11px] lg:text-xs text-right link-accent">{new Intl.NumberFormat().format(rec.bayar)}</td>
                            </tr>
                        {/each}
                    </tbody>
                </table>    
            </div>
            <div class="grid grid-cols-3 gap-1">
                <Button_custom2
                    on:click={handleInformation}
                    button_block="btn-sm rounded-md"
                    button_title="INFORMASI" />
                <Button_custom1
                    on:click={handleRemoveKeranjang_all}
                    button_tipe="HAPUS"
                    button_block="btn-sm rounded-md"
                    button_title="HAPUS SEMUA" />
                <Button_custom1
                    on:click={handleSave}
                    button_tipe="BELI"
                    button_block="btn-sm rounded-md"
                    button_title="PEMBAYARAN" />
            </div>
            <ul class="flex justify-center items-center gap-3 mt-2">
                <li on:click={() => {
                        ChangeTabLine("menu_line");
                    }} class="items-center {tab_line} px-5 py-1.5 text-xs lg:text-sm cursor-pointer rounded-md outline outline-1 outline-offset-1 outline-green-600">LINE</li>
                <li on:click={() => {
                    ChangeTabLine("menu_sum");
                    }} class="items-center {tab_sum} px-5 py-1.5 text-xs lg:text-sm cursor-pointer rounded-md outline outline-1 outline-offset-1 outline-green-600">SUM</li>
            </ul>
            {#if panel_line}
                <div class="bg-base-300 shadow-lg p-2">
                    <div class="text-xs">TOTAL LINE : <span class="text-sm link-accent">{count_line_dasar}</span></div>
                    <div class="grid grid-cols-1">
                        <div class="basis-1/4 text-xs">DASAR : <span class="text-sm link-accent">{count_line_dasar}</span></div>
                    </div>
                </div>
            {/if}
            {#if panel_sum}
                <div class="bg-base-300 shadow-lg p-2">
                    <div class="text-xs">TOTAL SUM : <span class="text-sm link-accent">{new Intl.NumberFormat().format(sum_line)}</span></div>
                    <div class="grid grid-cols-1">
                        <div class="basis-1/4 text-xs">SHIO : <span class="text-sm link-accent">{new Intl.NumberFormat().format(sum_line_shio)}</span></div>
                    </div>
                </div>
            {/if}
        {:else}
            <h2 class="card-title text-lg mt-1">
                <div class="place-content-start text-left text-xs">
                    TOTAL BAYAR : <span class="text-xs link-accent">{new Intl.NumberFormat().format(totalkeranjang)}</span>
                </div>
            </h2>
            <div class="overflow-auto scrollbar-hide bg-base-300 h-[350px]">
                <table class="table table-compact w-full" >
                    <thead>
                        <tr>
                            <th width="1%" class="text-[11px] text-center">#</th>
                            <th width="*" class="text-[11px] text-center">NOMOR</th>
                            <th width="10%" class="text-[11px] text-center">PERMAINAN</th>
                            <th width="15%" class="text-[11px] text-right">BET</th>
                            <th width="15%" class="text-[11px] text-right">DISKON</th>
                            <th width="15%" class="text-[11px] text-right">BAYAR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each keranjang as rec (rec)}
                            <tr>
                                <th 
                                    class="cursor-pointer"
                                    on:click={() => {
                                        handleRemoveKeranjang(rec.id, rec.bayar,rec.nomor,rec.permainan,rec.bet,rec.diskon,rec.diskonpercen,rec.kei,rec.kei_percen);
                                    }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </th>
                                <td class="text-[11px] text-center">{rec.nomor}</td>
                                <td class="text-[11px] text-center">{rec.permainan}</td>
                                <td class="text-[11px] text-right link-accent">{new Intl.NumberFormat().format(rec.bet)}</td>
                                <td class="text-[11px] text-right link-accent">{new Intl.NumberFormat().format( Math.ceil(rec.diskon))} ({(rec.diskonpercen * 100).toFixed(2)}%)</td>
                                <td class="text-[11px] text-right link-accent">{new Intl.NumberFormat().format(rec.bayar)}</td>
                            </tr>
                        {/each}
                    </tbody>
                </table>    
            </div>
            <ul class="flex justify-center items-center gap-3 mt-2">
                <li on:click={() => {
                        ChangeTabLine("menu_line");
                    }} class="items-center {tab_line} px-5 py-1.5 text-[11px] cursor-pointer rounded-md outline outline-1 outline-offset-1 outline-green-600">LINE</li>
                <li on:click={() => {
                    ChangeTabLine("menu_sum");
                    }} class="items-center {tab_sum} px-5 py-1.5 text-[11px] cursor-pointer rounded-md outline outline-1 outline-offset-1 outline-green-600">SUM</li>
            </ul>
            {#if panel_line}
                <div class="bg-base-300 shadow-lg p-2">
                    <div class="text-[11px]">TOTAL LINE : <span class="text-[11px] link-accent">{count_line_dasar}</span></div>
                    <div class="grid grid-cols-1">
                        <div class="basis-1/4 text-[11px]">DASAR : <span class="text-[11px] link-accent">{count_line_dasar}</span></div>
                    </div>
                </div>
            {/if}
            {#if panel_sum}
                <div class="bg-base-300 shadow-lg p-2">
                    <div class="text-[11px]">TOTAL SUM : <span class="text-[11px] link-accent">{new Intl.NumberFormat().format(sum_line)}</span></div>
                    <div class="grid grid-cols-1">
                        <div class="basis-1/4 text-[11px]">SHIO : <span class="text-[11px] link-accent">{new Intl.NumberFormat().format(sum_line_shio)}</span></div>
                    </div>
                </div>
            {/if}
        {/if}
    </div>
</div>
{#if client_device == "MOBILE"}
    <div class="card rounded-none p-0 m-0 bottom-0 fixed z-50">
        <div class="card-body bg-base-300 m-0 w-screen max-w-full p-2">
            <div class="flex  justify-center items-center gap-1 ">
                <button on:click={handleInformation} class="grow btn btn-md rounded-r-sm gap-2  bg-neutral ">
                    <div class="flex flex-col justify-items-center items-center w-full max-w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        <div class="text-[10px] text-white">INFO</div>
                    </div>
                </button>
                <button on:click={handleBetHistory} class="grow btn btn-md rounded-none gap-2 bg-neutral ">
                    <div class="flex flex-col justify-items-center items-center w-full max-w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                        <div class="text-[10px] text-white whitespace-normal">BET HISTORY</div>
                    </div>
                </button>
                <button on:click={handleRemoveKeranjang_all} class="grow btn btn-md rounded-none gap-2  bg-success  text-black border-success active:bg-succes active:text-black hover:bg-success hover:text-black hover:border-success">
                    <div class="flex flex-col justify-items-center items-center w-full max-w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        <div class="text-[10px]">HAPUS</div>
                    </div>
                </button>
                <button on:click={handleSave} class="grow btn btn-md rounded-l-sm gap-2  bg-success  text-black border-success active:bg-succes active:text-black hover:bg-success hover:text-black hover:border-success">
                    <div class="flex flex-col justify-items-center items-center w-full max-w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <div class="text-[10px]">BELI</div>
                    </div>
                </button>
            </div>
        </div>
    </div>
{/if}
{#if client_device == "WEBSITE"}
    <input type="checkbox" id="my-modal-information" class="modal-toggle" bind:checked={isModalInformation}>
    <div class="modal" on:click|self={()=>isModalInformation = false}>
        <div class="modal-box relative w-11/12 max-w-xl h-[550px] overflow-auto scrollbar-hide">
            <label for="my-modal-information" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 class="text-xs lg:text-sm font-bold -mt-2">INFORMASI</h3>
            <div class="overflow-auto scrollbar-hide mt-4" >
                <div class="overflow-auto">
                    <table class="table table-compact w-full" >
                        <tbody>
                            <tr>
                                <td class="text-xs text-left">MIN BET</td>
                                <td class="text-xs text-right link-accent">{new Intl.NumberFormat().format(min_bet)}</td>
                            </tr>
                            <tr>
                                <td class="text-xs text-left">MAX BET</td>
                                <td class="text-xs text-right link-accent">{new Intl.NumberFormat().format(max_bet)}</td>
                            </tr>
                            <tr>
                                <td class="text-xs text-left">DISKON</td>
                                <td class="text-xs text-right link-accent">
                                    {(diskon_bet * 100).toFixed(2)}%
                                </td>
                            </tr>
                            <tr>
                                <td class="text-xs text-left">HADIAH</td>
                                <td class="text-xs text-right link-accent">
                                    {win_bet.toFixed(2)}X
                                </td>
                            </tr>
                        </tbody>
                    </table>    
                </div>
                <p class="py-2 text-xs">
                    <b>CARA BERMAIN</b>
                    <br />
                    Menebak SHIO dari posisi 2D, SHIO merupakan 12 lambang kelahiran dalam penanggalan China. Dalam permainan ini, setiap lambang diwakili dengan satu nomor.
                    <br />
                    Struktur ABCD<br /><br />

                    Analisis I :<br />
                    Keluar : 4321<br />
                    Permainan ini hanya memperhatikan posisi 2D, berarti yang dipedomanin = 21<br />
                    Hasil = 21-12 = 9 (shio disesuaikan dengan tabel diatas)<br />
                    catatan: nilai yang dikurangi merupakan kelipatan 12.<br /><br />

                    Jika dilakukan pembelian dengan 100rb dan menang maka:<br />
                    Menang = 100rb + [Indeks kemenangan untuk SHIO]<br /><br />

                    NB: Indeks menang dan diskon dapat dilihat di bagian Peraturan
                </p>
            </div>
        </div>
    </div>
{:else}
    <input type="checkbox" id="my-modal-information" class="modal-toggle" bind:checked={isModalInformation}>
    <div class="modal " on:click|self={()=>isModalInformation = false}>
        <div class="modal-box relative max-w-full  w-full h-screen  rounded-none  p-0 m-0 overflow-hidden">
            <div class="border-b-2 border-base-200 p-2 h-11 w-full max-w-full">
                <label for="my-modal-information" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 class="text-xs lg:text-sm font-bold mt-2">INFORMASI: SHIO</h3>
            </div>
            <div class="h-full flex flex-col justify-between items-stretch mt-1 ">
                <div class="flex-1 self-stretch scrollbar-thin scrollbar-thumb-green-300 overflow-auto p-2" >
                    <div class="overflow-auto">
                        <table class="table table-compact w-full" >
                            <tbody>
                                <tr>
                                    <td class="text-[11px] text-left">MIN BET</td>
                                    <td class="text-[11px] text-right link-accent">{new Intl.NumberFormat().format(min_bet)}</td>
                                </tr>
                                <tr>
                                    <td class="text-[11px] text-left">MAX BET</td>
                                    <td class="text-[11px] text-right link-accent">{new Intl.NumberFormat().format(max_bet)}</td>
                                </tr>
                                <tr>
                                    <td class="text-[11px] text-left">DISKON</td>
                                    <td class="text-[11px] text-right link-accent">
                                        {(diskon_bet * 100).toFixed(2)}%
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-[11px] text-left">HADIAH</td>
                                    <td class="text-[11px] text-right link-accent">
                                        {win_bet.toFixed(2)}X
                                    </td>
                                </tr>
                            </tbody>
                        </table>    
                    </div>
                    <p class="mb-20 text-[11px]">
                        <b>CARA BERMAIN</b>
                        <br />
                        Menebak SHIO dari posisi 2D, SHIO merupakan 12 lambang kelahiran dalam penanggalan China. Dalam permainan ini, setiap lambang diwakili dengan satu nomor.
                        <br />
                        Struktur ABCD<br /><br />
    
                        Analisis I :<br />
                        Keluar : 4321<br />
                        Permainan ini hanya memperhatikan posisi 2D, berarti yang dipedomanin = 21<br />
                        Hasil = 21-12 = 9 (shio disesuaikan dengan tabel diatas)<br />
                        catatan: nilai yang dikurangi merupakan kelipatan 12.<br /><br />
    
                        Jika dilakukan pembelian dengan 100rb dan menang maka:<br />
                        Menang = 100rb + [Indeks kemenangan untuk SHIO]<br /><br />
    
                        NB: Indeks menang dan diskon dapat dilihat di bagian Peraturan
                    </p>
                </div>
                <div class="h-24  self-stretch "></div>
            </div>
        </div>
    </div>
{/if}

<input type="checkbox" id="my-modal-informationalert" class="modal-toggle" bind:checked={isModalAlert}>
<Modal_alert_remove
    on:handleAlertRemove={handleAlertRemove}
    modal_tipe="remove_single"
    modal_title="Apakah Anda Ingin Menghapus Transaksi Ini :"
    modal_widthheight_class="max-w-lg">
    <slot:template slot="modal_body">
        Nomor : {temp_nomor} <br>
        Permainan : {temp_permainan} <br>
        Bet : <span class="text-xs link-accent">{new Intl.NumberFormat().format(temp_bet)}</span> <br>
        Diskon : <span class="text-xs link-accent">{new Intl.NumberFormat().format( Math.ceil(temp_diskon))} ({(temp_diskonpercen * 100).toFixed(2)}%)</span> <br>
        Bayar : <span class="text-xs link-accent">{new Intl.NumberFormat().format(temp_bayar)}</span>
    </slot:template>
</Modal_alert_remove>
<input type="checkbox" id="my-modal-informationalert2" class="modal-toggle" bind:checked={isModalAlert2}>
<Modal_alert_remove
    on:handleAlertRemove={handleAlertRemoveAll}
    modal_tipe=""
    modal_title="Apakah Anda Ingin Menghapus Semua Transaksi :"
    modal_widthheight_class="max-w-lg" />

<input type="checkbox" id="my-modal-informationalertbelanja" class="modal-toggle" bind:checked={isModalAlert_belanja}>
<Modal_alert_remove
    on:handleAlertRemove={handleSaveLanjut}
    modal_tipe="remove_single"
    modal_title="Apakah Anda Ingin Melanjutkan Transaksi :"
    modal_widthheight_class="max-w-lg">
    <slot:template slot="modal_body">
        Total Transaksi : <span class="text-xs link-accent">{new Intl.NumberFormat().format(totalkeranjang)}</span>
    </slot:template>
</Modal_alert_remove>
