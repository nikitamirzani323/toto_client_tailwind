<script>
    import { createEventDispatcher } from "svelte";
    import Modal_alert_remove from "../component/Modal_alert_remove.svelte";
    import Button_custom1 from "../component/Button_custom1.svelte";
    import Button_custom2 from "../component/Button_custom2.svelte";

    export let keranjang = [];
    export let totalkeranjang = 0;
    export let card_custom = "";
    export let client_device = "";
    export let count_line_macaukombinasi = 0;
    export let count_line_standart = 0;
    export let min_bet = 0;
    export let max_bet = 0;
    export let win_bet = 0;
    export let diskon_bet = 0;
    let count_line = 0;
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
    let dispatch = createEventDispatcher();
    const handleInformation = () => {
        isModalInformation = true
    };
    
    const handleRemoveKeranjang = (idkeranjang, bayar,nomor,permainan,bet,diskon,diskoonpercen) => {
        isModalAlert = true;
        temp_idkeranjang = idkeranjang
        temp_bayar = bayar
        temp_nomor = nomor
        temp_permainan = permainan
        temp_bet = bet
        temp_diskon = diskon
        temp_diskonpercen = diskoonpercen
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
    let class_card_table_keranjang = "mt-5";
    if(client_device == "WEBSITE"){
        class_card_table_keranjang = "mt-5";
    }else{
        class_card_table_keranjang = "mt-2";
    }
    $: count_line = count_line_macaukombinasi + count_line_standart;
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
                    <thead>
                        <tr>
                            <th width="1%" class="text-xs text-center">#</th>
                            <th width="*" class="text-xs text-center">NOMOR</th>
                            <th width="10%" class="text-xs text-center">PERMAINAN</th>
                            <th width="15%" class="text-xs text-right">BET</th>
                            <th width="15%" class="text-xs text-right">DISKON</th>
                            <th width="15%" class="text-xs text-right">BAYAR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each keranjang as rec (rec)}
                            <tr>
                                <th 
                                    class="cursor-pointer"
                                    on:click={() => {
                                        handleRemoveKeranjang(rec.id, rec.bayar,rec.nomor,rec.permainan,rec.bet,rec.diskon,rec.diskonpercen);
                                    }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </th>
                                <td class="text-xs text-center">{rec.nomor}</td>
                                <td class="text-xs text-center">{rec.permainan}</td>
                                <td class="text-xs text-right link-accent">{new Intl.NumberFormat().format(rec.bet)}</td>
                                <td class="text-xs text-right link-accent">{new Intl.NumberFormat().format( Math.ceil(rec.diskon))} ({(rec.diskonpercen * 100).toFixed(2)}%)</td>
                                <td class="text-xs text-right link-accent">{new Intl.NumberFormat().format(rec.bayar)}</td>
                            </tr>
                        {/each}
                    </tbody>
                </table>    
            </div>
            <div class="grid grid-cols-3 gap-1">
                <Button_custom2
                    on:click={handleInformation}
                    button_block="btn-sm rounded-sm"
                    button_title="INFORMASI" />
                <Button_custom1
                    on:click={handleRemoveKeranjang_all}
                    button_tipe="HAPUS"
                    button_block="btn-sm rounded-sm"
                    button_title="HAPUS SEMUA" />
                <Button_custom1
                    on:click={handleSave}
                    button_tipe="BELI"
                    button_block="btn-sm rounded-sm"
                    button_title="PEMBAYARAN" />
            </div>
            <div class="bg-base-200 shadow-lg p-2">
                <div class="text-sm">TOTAL LINE : <span class="text-sm link-accent">{count_line}</span></div>
            </div>
        {:else}
            <h2 class="card-title text-lg mt-1">
                <div class="place-content-start text-left text-sm">
                    TOTAL BAYAR : <span class="text-sm link-accent">{new Intl.NumberFormat().format(totalkeranjang)}</span>
                </div>
            </h2>
            <div class="overflow-auto scrollbar-hide bg-base-300 h-[350px]">
                <table class="table table-zebra w-full" >
                    <thead>
                        <tr>
                            <th width="1%" class="text-xs text-center">#</th>
                            <th width="*" class="text-xs text-center">NOMOR</th>
                            <th width="10%" class="text-xs text-center">PERMAINAN</th>
                            <th width="15%" class="text-xs text-right">BET</th>
                            <th width="15%" class="text-xs text-right">DISKON</th>
                            <th width="15%" class="text-xs text-right">BAYAR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each keranjang as rec (rec)}
                            <tr>
                                <th 
                                    class="cursor-pointer"
                                    on:click={() => {
                                        handleRemoveKeranjang(rec.id, rec.bayar,rec.nomor,rec.permainan,rec.bet,rec.diskon,rec.diskonpercen);
                                    }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </th>
                                <td class="text-xs text-center">{rec.nomor}</td>
                                <td class="text-xs text-center">{rec.permainan}</td>
                                <td class="text-xs text-right link-accent">{new Intl.NumberFormat().format(rec.bet)}</td>
                                <td class="text-xs text-right link-accent">{new Intl.NumberFormat().format( Math.ceil(rec.diskon))} ({(rec.diskonpercen * 100).toFixed(2)}%)</td>
                                <td class="text-xs text-right link-accent">{new Intl.NumberFormat().format(rec.bayar)}</td>
                            </tr>
                        {/each}
                    </tbody>
                </table>    
            </div>
            <div class="bg-base-300 px-2 shadow-lg">
                <div class="text-xs">TOTAL LINE : <span class="text-xs link-accent">{count_line}</span></div>
            </div>
            
        {/if}
    </div>
</div>
{#if client_device == "MOBILE"}
    <div class="card rounded-none p-0 m-0 bottom-0 fixed z-50">
        <div class="card-body bg-base-300 m-0 w-full max-w-full p-2">
            <div class="grid grid-cols-3 justify-center items-center gap-1 mx-2">
                <button on:click={handleInformation} class="btn btn-md rounded-r-sm gap-2 glass bg-[#bf95f9] hover:bg-[#bf95f9]     ">
                    <div class="grid grid-rows-2 justify-items-center items-center w-screen max-w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        <div class="text-xs text-[#3f1b71]">INFORMASI</div>
                    </div>
                </button>
                <button on:click={handleRemoveKeranjang_all} class="btn btn-md rounded-none gap-2 glass bg-green-700  border-green-500 outline-green-500 text-white">
                    <div class="grid grid-rows-2 justify-items-center items-center w-screen max-w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        <div class="text-xs">HAPUS</div>
                    </div>
                </button>
                <button on:click={handleSave} class="btn btn-md rounded-l-sm gap-2 glass bg-green-700  border-green-500 outline-green-500 text-white">
                    <div class="grid grid-rows-2 justify-items-center items-center w-screen max-w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <div class="text-xs">BELI</div>
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
                                <td class="text-xs text-right link-accent">{(diskon_bet *100).toFixed(2)}%</td>
                            </tr>
                            <tr>
                                <td class="text-xs text-left">HADIAH</td>
                                <td class="text-xs text-right link-accent">{win_bet.toFixed(2)}x</td>
                            </tr>
                        </tbody>
                    </table>    
                </div>
                <p class="py-2 text-xs">
                    <b>CARA BERMAIN</b>
                    Struktur ABCD<br /><br />

                    AB = DEPAN, BC = TENGAH, CD = BELAKANG<br />
                    Besar/Kecil: 0-4=kecil, 5-9=besar<br />
                    Ganjil/Genap : 1=ganjil, 2=genap dan seterusnya<br /><br />

                    Anda dapat menebak Genap/Ganjil, Besar/Kecil<br />
                    dari 2 kombinasi antara DEPAN, TENGAH, BELAKANG<br /><br />

                    Analisis : keluar nomor 1845<br /><br />

                    berarti pemenang untuk :<br />
                    DEPAN Kecil/Genap<br />
                    TENGAH Besar/Genap<br />
                    BELAKANG Kecil/Ganjil<br /><br />

                    Misalnya anda membeli BELAKANG KECIl dan GANJIL seharga 100rb,<br />
                    maka menang = 100rb + [indeks kemenangan untuk kombinasi 2]<br />
                    atau :<br />
                    jika membeli DEPAN KECIL dan GENAP seharga 100rb,<br />
                    maka menang = 100rb + [indeks kemenangan untuk kombinasi 2]<br />
                    atau :<br />
                    jika membeli TENGAH KECIL dan GENAP seharga 100rb, berarti KALAH<br />
                    ( Anda harus menebak keduanya dengan Benar diantara DEPAN,TENGAH,BELAKANG agar Menang )<br />
                </p>
            </div>
        </div>
    </div>
{:else}
    <input type="checkbox" id="my-modal-information" class="modal-toggle" bind:checked={isModalInformation}>
    <div class="modal " on:click|self={()=>isModalInformation = false}>
        <div class="modal-box relative max-w-full lg:max-w-xl h-full max-h-full rounded-none lg:rounded-lg p-2 lg:p-4 overflow-auto scrollbar-hide">
            <label for="my-modal-information" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 class="text-xs lg:text-sm font-bold mt-1">INFORMASI</h3>
            <div class="h-[40rem] overflow-auto scrollbar-hide mt-4" >
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
                                <td class="text-xs text-right link-accent">{(diskon_bet *100).toFixed(2)}%</td>
                            </tr>
                            <tr>
                                <td class="text-xs text-left">HADIAH</td>
                                <td class="text-xs text-right link-accent">{win_bet.toFixed(2)}x</td>
                            </tr>
                        </tbody>
                    </table>    
                </div>
                <p class="py-2 text-xs">
                    <b>CARA BERMAIN</b>
                    Struktur ABCD<br /><br />

                    AB = DEPAN, BC = TENGAH, CD = BELAKANG<br />
                    Besar/Kecil: 0-4=kecil, 5-9=besar<br />
                    Ganjil/Genap : 1=ganjil, 2=genap dan seterusnya<br /><br />

                    Anda dapat menebak Genap/Ganjil, Besar/Kecil<br />
                    dari 2 kombinasi antara DEPAN, TENGAH, BELAKANG<br /><br />

                    Analisis : keluar nomor 1845<br /><br />

                    berarti pemenang untuk :<br />
                    DEPAN Kecil/Genap<br />
                    TENGAH Besar/Genap<br />
                    BELAKANG Kecil/Ganjil<br /><br />

                    Misalnya anda membeli BELAKANG KECIl dan GANJIL seharga 100rb,<br />
                    maka menang = 100rb + [indeks kemenangan untuk kombinasi 2]<br />
                    atau :<br />
                    jika membeli DEPAN KECIL dan GENAP seharga 100rb,<br />
                    maka menang = 100rb + [indeks kemenangan untuk kombinasi 2]<br />
                    atau :<br />
                    jika membeli TENGAH KECIL dan GENAP seharga 100rb, berarti KALAH<br />
                    ( Anda harus menebak keduanya dengan Benar diantara DEPAN,TENGAH,BELAKANG agar Menang )<br />
                </p>
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
        Bet : <span class="text-sm link-accent">{new Intl.NumberFormat().format(temp_bet)}</span> <br>
        Diskon : <span class="text-sm link-accent">{new Intl.NumberFormat().format( Math.ceil(temp_diskon))} ({(temp_diskonpercen * 100).toFixed(2)}%)</span> <br>
        Bayar : <span class="text-sm link-accent">{new Intl.NumberFormat().format(temp_bayar)}</span>
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
        Total Transaksi : <span class="text-sm link-accent">{new Intl.NumberFormat().format(totalkeranjang)}</span>
    </slot:template>
</Modal_alert_remove>
