<script>
    import { createEventDispatcher } from "svelte";
    import Modal_alert_remove from "../component/Modal_alert_remove.svelte";
    import Button_custom1 from "../component/Button_custom1.svelte";
    import Button_custom2 from "../component/Button_custom2.svelte";

    export let keranjang = [];
    export let totalkeranjang = 0;
    export let card_custom = "";
    export let client_device = "";
    export let count_line_5050umum = 0;
    export let count_line_5050special = 0;
    export let count_line_5050kombinasi = 0;
    export let min_bet_5050umum = 0;
    export let max_bet_5050umum = 0;
    export let keibesar_bet_5050umum = 0;
    export let keikecil_bet_5050umum = 0;
    export let keigenap_bet_5050umum = 0;
    export let keiganjil_bet_5050umum = 0;
    export let keitengah_bet_5050umum = 0;
    export let keitepi_bet_5050umum = 0;
    export let discbesar_bet_5050umum = 0;
    export let disckecil_bet_5050umum = 0;
    export let discgenap_bet_5050umum = 0;
    export let discganjil_bet_5050umum = 0;
    export let disctengah_bet_5050umum = 0;
    export let disctepi_bet_5050umum = 0;
    export let min_bet_5050special = 0;
    export let max_bet_5050special = 0;
    export let keiasganjil_bet_5050special = 0;
    export let keiasgenap_bet_5050special = 0;
    export let keiasbesar_bet_5050special = 0;
    export let keiaskecil_bet_5050special = 0;
    export let keikopganjil_bet_5050special = 0;
    export let keikopgenap_bet_5050special = 0;
    export let keikopbesar_bet_5050special = 0;
    export let keikopkecil_bet_5050special = 0;
    export let keikepalaganjil_bet_5050special = 0;
    export let keikepalagenap_bet_5050special = 0;
    export let keikepalabesar_bet_5050special = 0;
    export let keikepalakecil_bet_5050special = 0;
    export let keiekorganjil_bet_5050special = 0;
    export let keiekorgenap_bet_5050special = 0;
    export let keiekorbesar_bet_5050special = 0;
    export let keiekorkecil_bet_5050special = 0;
    export let discasganjil_bet_5050special = 0;
    export let discasgenap_bet_5050special = 0;
    export let discasbesar_bet_5050special = 0;
    export let discaskecil_bet_5050special = 0;
    export let disckopganjil_bet_5050special = 0;
    export let disckopgenap_bet_5050special = 0;
    export let disckopbesar_bet_5050special = 0;
    export let disckopkecil_bet_5050special = 0;
    export let disckepalaganjil_bet_5050special = 0;
    export let disckepalagenap_bet_5050special = 0;
    export let disckepalabesar_bet_5050special = 0;
    export let disckepalakecil_bet_5050special = 0;
    export let discekorganjil_bet_5050special = 0;
    export let discekorgenap_bet_5050special = 0;
    export let discekorbesar_bet_5050special = 0;
    export let discekorkecil_bet_5050special = 0;
    export let min_bet_5050kombinasi = 0;
    export let max_bet_5050kombinasi = 0;
    export let kei_belakangmono_bet_5050kombinasi = 0;
    export let kei_belakangstereo_bet_5050kombinasi = 0;
    export let kei_belakangkembang_bet_5050kombinasi = 0;
    export let kei_belakangkempis_bet_5050kombinasi = 0;
    export let kei_belakangkembar_bet_5050kombinasi = 0;
    export let kei_tengahmono_bet_5050kombinasi = 0;
    export let kei_tengahstereo_bet_5050kombinasi = 0;
    export let kei_tengahkembang_bet_5050kombinasi = 0;
    export let kei_tengahkempis_bet_5050kombinasi = 0;
    export let kei_tengahkembar_bet_5050kombinasi = 0;
    export let kei_depanmono_bet_5050kombinasi = 0;
    export let kei_depanstereo_bet_5050kombinasi = 0;
    export let kei_depankembang_bet_5050kombinasi = 0;
    export let kei_depankempis_bet_5050kombinasi = 0;
    export let kei_depankembar_bet_5050kombinasi = 0;
    export let disc_belakangmono_bet_5050kombinasi = 0;
    export let disc_belakangstereo_bet_5050kombinasi = 0;
    export let disc_belakangkembang_bet_5050kombinasi = 0;
    export let disc_belakangkempis_bet_5050kombinasi = 0;
    export let disc_belakangkembar_bet_5050kombinasi = 0;
    export let disc_tengahmono_bet_5050kombinasi = 0;
    export let disc_tengahstereo_bet_5050kombinasi = 0;
    export let disc_tengahkembang_bet_5050kombinasi = 0;
    export let disc_tengahkempis_bet_5050kombinasi = 0;
    export let disc_tengahkembar_bet_5050kombinasi = 0;
    export let disc_depanmono_bet_5050kombinasi = 0;
    export let disc_depanstereo_bet_5050kombinasi = 0;
    export let disc_depankembang_bet_5050kombinasi = 0;
    export let disc_depankempis_bet_5050kombinasi = 0;
    export let disc_depankembar_bet_5050kombinasi = 0;
    let count_line = 0;
    let isModalInformation = false;
    let isModalAlert = false;
    let isModalAlert2 = false;
    let isModalAlert_belanja = false;
    let temp_idkeranjang = ""
    let temp_bayar = 0
    let temp_nomor = ""
    let temp_tipe = ""
    let temp_permainan = ""
    let temp_bet = 0
    let temp_diskon = 0
    let temp_diskonpercen = 0
    let temp_kei = 0
    let temp_keipercen = 0
    let tab_5050_umum = "bg-green-600 text-black"
    let tab_5050_special = ""
    let tab_5050_kombinasi = ""
    let panel_5050_umum = true
    let panel_5050_special = false
    let panel_5050_kombinasi = false
    let dispatch = createEventDispatcher();
    const handleInformation = () => {
        isModalInformation = true
    };
    const handleClickInfoColok = (e) => {
        switch(e){
            case "umum":
                tab_5050_umum = "bg-green-600 text-black"
                tab_5050_special = ""
                tab_5050_kombinasi = ""
                panel_5050_umum = true
                panel_5050_special = false
                panel_5050_kombinasi = false
                break;
            case "special":
                tab_5050_umum = ""
                tab_5050_special = "bg-green-600 text-black"
                tab_5050_kombinasi = ""
                panel_5050_umum = false
                panel_5050_special = true
                panel_5050_kombinasi = false
                break;
            case "kombinasi":
                tab_5050_umum = ""
                tab_5050_special = ""
                tab_5050_kombinasi = "bg-green-600 text-black"
                panel_5050_umum = false
                panel_5050_special = false
                panel_5050_kombinasi = true
                break;
        }
    };
    const handleRemoveKeranjang = (idkeranjang, bayar,nomor,tipe,permainan,bet,diskon,diskoonpercen,kei,keiperceen) => {
        isModalAlert = true;
        temp_idkeranjang = idkeranjang
        temp_bayar = bayar
        temp_nomor = nomor
        temp_tipe = tipe
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
        temp_tipe = ""
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
        temp_tipe = ""
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
    $: count_line = count_line_5050umum + count_line_5050special + count_line_5050kombinasi;
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
                            <th width="15%" class="text-xs text-right">KEI</th>
                            <th width="15%" class="text-xs text-right">BAYAR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each keranjang as rec (rec)}
                            <tr>
                                <th 
                                    class="cursor-pointer"
                                    on:click={() => {
                                        handleRemoveKeranjang(rec.id, rec.bayar,rec.nomor,rec.tipetoto,rec.permainan,rec.bet,rec.diskon,rec.diskonpercen,rec.kei,rec.kei_percen);
                                    }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </th>
                                <td class="text-xs text-center">{rec.nomor}</td>
                                <td class="text-xs text-center">{rec.permainan}</td>
                                <td class="text-xs text-right link-accent">{new Intl.NumberFormat().format(rec.bet)}</td>
                                <td class="text-xs text-right link-accent">{new Intl.NumberFormat().format( Math.ceil(rec.diskon))} ({(rec.diskonpercen * 100).toFixed(2)}%)</td>
                                <td class="text-xs text-right link-accent">{new Intl.NumberFormat().format( Math.ceil(rec.kei))} ({(rec.kei_percen * 100).toFixed(2)}%)</td>
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
                            <th width="15%" class="text-[11px] text-right">KEI</th>
                            <th width="15%" class="text-[11px] text-right">BAYAR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each keranjang as rec (rec)}
                            <tr>
                                <th 
                                    class="cursor-pointer"
                                    on:click={() => {
                                        handleRemoveKeranjang(rec.id, rec.bayar,rec.nomor,rec.tipetoto,rec.permainan,rec.bet,
                                        rec.diskon,rec.diskonpercen,rec.kei,rec.kei_percen);
                                    }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </th>
                                <td class="text-[11px] text-center">{rec.nomor}</td>
                                <td class="text-[11px] text-center">{rec.permainan}</td>
                                <td class="text-[11px] text-right link-accent">{new Intl.NumberFormat().format(rec.bet)}</td>
                                <td class="text-[11px] text-right link-accent">{new Intl.NumberFormat().format( Math.ceil(rec.diskon))} ({(rec.diskonpercen * 100).toFixed(2)}%)</td>
                                <td class="text-[11px] text-right link-accent">{new Intl.NumberFormat().format( Math.ceil(rec.kei))} ({(rec.kei_percen * 100).toFixed(2)}%)</td>
                                <td class="text-[11px] text-right link-accent">{new Intl.NumberFormat().format(rec.bayar)}</td>
                            </tr>
                        {/each}
                    </tbody>
                </table>    
            </div>
            <div class="bg-base-300 p-2 shadow-lg">
                <div class="text-xs">TOTAL LINE : <span class="text-xs link-accent">{count_line}</span></div>
            </div>
            
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
                <button on:click={handleRemoveKeranjang_all} class="grow btn btn-md rounded-none gap-2  bg-green-700  border-green-700  text-white">
                    <div class="flex flex-col justify-items-center items-center w-full max-w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        <div class="text-[10px]">HAPUS</div>
                    </div>
                </button>
                <button on:click={handleSave} class="grow btn btn-md rounded-l-sm gap-2  bg-green-700  border-green-700  text-white">
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
        <div class="modal-box relative w-11/12 max-w-xl h-[800px] overflow-hidden">
            <label for="my-modal-information" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 class="text-xs lg:text-sm font-bold -mt-2">INFORMASI</h3>
            <div class="hidden lg:flex justify-start items-center mt-4 ">
                <ul class="flex flex-1 gap-2">
                    <li 
                        on:click={() => {
                            handleClickInfoColok("umum");
                        }}
                        class="{tab_5050_umum} inline-flex items-center  px-2 py-1.5 text-xs lg:text-sm cursor-pointer rounded-md outline outline-1 outline-offset-1 outline-green-600">UMUM</li>
                    <li 
                        on:click={() => {
                            handleClickInfoColok("special");
                        }}
                        class="{tab_5050_special} inline-flex items-center  px-2 py-1.5text-xs lg:text-sm   cursor-pointer rounded-md outline outline-1 outline-offset-1 outline-green-600">SPECIAL</li>
                    <li 
                        on:click={() => {
                            handleClickInfoColok("kombinasi");
                        }}
                        class="{tab_5050_kombinasi} inline-flex items-center  px-2 py-1.5 text-xs lg:text-sm  cursor-pointer rounded-md outline outline-1 outline-offset-1 outline-green-600">KOMBINASI</li>
                </ul>
            </div>
            <div class="h-[40rem] overflow-auto scrollbar-hide mt-4" >
                {#if panel_5050_umum}
                    <div class="overflow-auto">
                        <table class="table table-compact w-full" >
                            <tbody>
                                <tr>
                                    <th class="text-xs text-left">MIN BET</th>
                                    <td class="text-xs text-right link-accent">{new Intl.NumberFormat().format(min_bet_5050umum)}</td>
                                </tr>
                                <tr>
                                    <th class="text-xs text-left">MAX BET</th>
                                    <td class="text-xs text-right link-accent">{new Intl.NumberFormat().format(max_bet_5050umum)}</td>
                                </tr>
                                <tr>
                                    <th class="text-xs text-left">DISKON</th>
                                    <td class="text-xs text-right link-accent">
                                        BESAR : {(discbesar_bet_5050umum*100).toFixed(2)}% <br />
                                        KECIL : {(disckecil_bet_5050umum*100).toFixed(2)}% <br />
                                        GENAP : {(discgenap_bet_5050umum*100).toFixed(2)}% <br />
                                        GANJIL : {(discganjil_bet_5050umum*100).toFixed(2)}% <br />
                                        TENGAH : {(disctengah_bet_5050umum*100).toFixed(2)}% <br />
                                        TEPI : {(disctepi_bet_5050umum*100).toFixed(2)}%
                                    </td>
                                </tr>
                                <tr>
                                    <th class="text-xs text-left">KEI</th>
                                    <td class="text-xs text-right link-accent">
                                        BESAR : {(keibesar_bet_5050umum*100).toFixed(2)}% <br />
                                        KECIL : {(keikecil_bet_5050umum*100).toFixed(2)}% <br />
                                        GENAP : {(keigenap_bet_5050umum*100).toFixed(2)}% <br />
                                        GANJIL : {(keiganjil_bet_5050umum*100).toFixed(2)}% <br />
                                        TENGAH : {(keitengah_bet_5050umum*100).toFixed(2)}% <br />
                                        TEPI : {(keitepi_bet_5050umum*100).toFixed(2)}%
                                    </td>
                                </tr>
                            </tbody>
                        </table>    
                    </div>
                    <p class="py-2 text-xs">
                        <b>CARA BERMAIN</b>
                        <br />
                        Permainan ganjil/genap, besar/kecil, dan tengah/ tepi UMUM
                        <br />
                        Struktur: CD ( hanya dua angka belakang yang dihitung)<br /><br />
                        
                        Menebak ganjil/genap dan besar/kecil dari posisi:<br />
                        C=KEPALA<br />
                        D=EKOR<br />
                        Besar/Kecil: 0-4=kecil, 5-9=besar<br />
                        Ganjil/Genap : 1=ganjil, 2=genap dan seterusnya<br /><br />
                        Tengah/Tepi : Tengah: angka 25 s/d 74. TEPI : angka 75 s/d 99, dan 00s/d 24<br /><br />
                        
                        Analisis I :<br />
                        Keluar : 6789, Berarti hasil 89<br />
                        Berarti pemenang adalah yang memilih :<br />
                        BESAR<br />
                        GANJIL<br />
                        TEPI
                    </p>
				{/if}
                {#if panel_5050_special}
                    <div class="overflow-auto">
                        <table class="table table-compact w-full" >
                            <tbody>
                                <tr>
                                    <th class="text-xs text-left">MIN BET</th>
                                    <td class="text-xs text-right link-accent">{new Intl.NumberFormat().format(min_bet_5050special)}</td>
                                </tr>
                                <tr>
                                    <th class="text-xs text-left">MAX BET</th>
                                    <td class="text-xs text-right link-accent">{new Intl.NumberFormat().format(max_bet_5050special)}</td>
                                </tr>
                                <tr>
                                    <th class="text-xs text-left">DISKON</th>
                                    <td class="text-xs text-right link-accent">
                                        AS GANJIL : {(discasganjil_bet_5050special*100).toFixed(2)}% <br />
                                        AS GENAP : {(discasgenap_bet_5050special*100).toFixed(2)}% <br />
                                        AS BESAR : {(discasbesar_bet_5050special*100).toFixed(2)}% <br />
                                        AS KECIL : {(discaskecil_bet_5050special*100).toFixed(2)}% <br />
                                        KOP GANJIL : {(disckopganjil_bet_5050special*100).toFixed(2)}% <br />
                                        KOP GENAP : {(disckopgenap_bet_5050special*100).toFixed(2)}% <br />
                                        KOP BESAR : {(disckopbesar_bet_5050special*100).toFixed(2)}% <br />
                                        KOP KECIL : {(disckopkecil_bet_5050special*100).toFixed(2)}% <br />
                                        KEPALA GANJIL : {(disckepalaganjil_bet_5050special*100).toFixed(2)}% <br />
                                        KEPALA GENAP : {(disckepalagenap_bet_5050special*100).toFixed(2)}% <br />
                                        KEPALA BESAR : {(disckepalabesar_bet_5050special*100).toFixed(2)}% <br />
                                        KEPALA KECIL : {(disckepalakecil_bet_5050special*100).toFixed(2)}% <br />
                                        EKOR GANJIL : {(discekorganjil_bet_5050special*100).toFixed(2)}% <br />
                                        EKOR GENAP : {(discekorgenap_bet_5050special*100).toFixed(2)}% <br />
                                        EKOR BESAR : {(discekorbesar_bet_5050special*100).toFixed(2)}% <br />
                                        EKOR KECIL : {(discekorkecil_bet_5050special*100).toFixed(2)}%
                                    </td>
                                </tr>
                                <tr>
                                    <th class="text-xs text-left">KEI</th>
                                    <td class="text-xs text-right link-accent">
                                        AS GANJIL : {(keiasganjil_bet_5050special*100).toFixed(2)}% <br />
                                        AS GENAP : {(keiasgenap_bet_5050special*100).toFixed(2)}% <br />
                                        AS BESAR : {(keiasbesar_bet_5050special*100).toFixed(2)}% <br />
                                        AS KECIL : {(keiaskecil_bet_5050special*100).toFixed(2)}% <br />
                                        KOP GANJIL : {(keikopganjil_bet_5050special*100).toFixed(2)}% <br />
                                        KOP GENAP : {(keikopgenap_bet_5050special*100).toFixed(2)}% <br />
                                        KOP BESAR : {(keikopbesar_bet_5050special*100).toFixed(2)}% <br />
                                        KOP KECIL : {(keikopkecil_bet_5050special*100).toFixed(2)}% <br />
                                        KEPALA GANJIL : {(keikepalaganjil_bet_5050special*100).toFixed(2)}% <br />
                                        KEPALA GENAP : {(keikepalagenap_bet_5050special*100).toFixed(2)}% <br />
                                        KEPALA BESAR : {(keikepalabesar_bet_5050special*100).toFixed(2)}% <br />
                                        KEPALA KECIL : {(keikepalakecil_bet_5050special*100).toFixed(2)}% <br />
                                        EKOR GANJIL : {(keiekorganjil_bet_5050special*100).toFixed(2)}% <br />
                                        EKOR GENAP : {(keiekorgenap_bet_5050special*100).toFixed(2)}% <br />
                                        EKOR BESAR : {(keiekorbesar_bet_5050special*100).toFixed(2)}% <br />
                                        EKOR KECIL : {(keiekorkecil_bet_5050special*100).toFixed(2)}%
                                    </td>
                                </tr>
                            </tbody>
                        </table>    
                    </div>
                    <p class="py-2 text-xs">
                        <b>CARA BERMAIN</b>
                        <br />
                        Menebak ganjil/genap, besar/kecil <br>
                        Permainan ini sangat menarik karena pasarannya naik turun sesuai keinginan market pada waktu tersebut. Dengan demikian, nilai pembelian dipengaruhi kei (pasaran)
                        <br />
                        Struktur: ABCD<br /><br />
                        
                        Menebak ganjil/genap dan besar/kecil dari posisi:<br />
                        A=AS<br />
                        B=KOP<br />
                        C=KEPALA<br />
                        D=EKOR<br />
                        
                        Besar/Kecil : 0-4=kecil, 5-9=besar<br />
                        Ganjil/Genap : 1=ganjil, 2=genap dan seterusnya<br /><br />
                        
                        Analisis I :<br />
                        Keluar : 4327<br />
                        Berarti pemenang adalah yang memilih :<br />
                        AS GENAP/KECIL<br />
                        KOP GANJIL/KECIL<br />
                        KEPALA GENAP/KECIL<br />
                        EKOR GANJIL/BESAR<br />
                        Misal anda membeli dengan dana Rp.100rb untuk AS Genap, menang = 100rb + [indeks pasaran AS Genap 50-50]<br />
                        Atau :<br />
                        Jika membeli dengan dana Rp.100rb untuk Ekor Ganjil, menang = 100rb + [indeks pasaran Ekor Ganjil 50-50]<br />
                        Atau :<br />
                        Jika membeli dengan dana Rp.100rb untuk AS Ganjil, kalah = 100rb + [indeks pasaran AS Ganjil 50-50]
                    </p>
				{/if}
                {#if panel_5050_kombinasi}
                    <div class="overflow-auto">
                        <table class="table table-compact w-full" >
                            <tbody>
                                <tr>
                                    <th class="text-xs text-left">MIN BET</th>
                                    <td class="text-xs text-right link-accent">{new Intl.NumberFormat().format(min_bet_5050kombinasi)}</td>
                                </tr>
                                <tr>
                                    <th class="text-xs text-left">MAX BET</th>
                                    <td class="text-xs text-right link-accent">{new Intl.NumberFormat().format(max_bet_5050kombinasi)}</td>
                                </tr>
                                <tr>
                                    <th class="text-xs text-left">DISKON</th>
                                    <td class="text-xs text-right link-accent">
                                        BELAKANG MONO : {(disc_belakangmono_bet_5050kombinasi*100).toFixed(2)}% <br />
                                        BELAKANG STEREO : {(disc_belakangstereo_bet_5050kombinasi*100).toFixed(2)}% <br />
                                        BELAKANG KEMBANG : {(disc_belakangkembang_bet_5050kombinasi*100).toFixed(2)}% <br />
                                        BELAKANG KEMPIS : {(disc_belakangkempis_bet_5050kombinasi*100).toFixed(2)}% <br />
                                        BELAKANG KEMBAR : {(disc_belakangkembar_bet_5050kombinasi*100).toFixed(2)}% <br />
                                        TENGAH MONO : {(disc_tengahmono_bet_5050kombinasi*100).toFixed(2)}% <br />
                                        TENGAH STEREO : {(disc_tengahstereo_bet_5050kombinasi*100).toFixed(2)}% <br />
                                        TENGAH KEMBANG : {(disc_tengahkembang_bet_5050kombinasi*100).toFixed(2)}% <br />
                                        TENGAH KEMPIS : {(disc_tengahkempis_bet_5050kombinasi*100).toFixed(2)}% <br />
                                        TENGAH KEMBAR : {(disc_tengahkembar_bet_5050kombinasi*100).toFixed(2)}% <br />
                                        DEPAN MONO : {(disc_depanmono_bet_5050kombinasi*100).toFixed(2)}% <br />
                                        DEPAN STEREO : {(disc_depanstereo_bet_5050kombinasi*100).toFixed(2)}% <br />
                                        DEPAN KEMBANG : {(disc_depankembang_bet_5050kombinasi*100).toFixed(2)}% <br />
                                        DEPAN KEMPIS : {(disc_depankempis_bet_5050kombinasi*100).toFixed(2)}% <br />
                                        DEPAN KEMBAR : {(disc_depankembar_bet_5050kombinasi*100).toFixed(2)}%
                                    </td>
                                </tr>
                                <tr>
                                    <th class="text-xs text-left">KEI</th>
                                    <td class="text-xs text-right link-accent">
                                        BELAKANG MONO : {(kei_belakangmono_bet_5050kombinasi*100).toFixed(2)}% <br />
                                        BELAKANG STEREO : {(kei_belakangstereo_bet_5050kombinasi*100).toFixed(2)}% <br />
                                        BELAKANG KEMBANG : {(kei_belakangkembang_bet_5050kombinasi*100).toFixed(2)}% <br />
                                        BELAKANG KEMPIS : {(kei_belakangkempis_bet_5050kombinasi*100).toFixed(2)}% <br />
                                        BELAKANG KEMBAR : {(kei_belakangkembar_bet_5050kombinasi*100).toFixed(2)}% <br />
                                        TENGAH MONO : {(kei_tengahmono_bet_5050kombinasi*100).toFixed(2)}% <br />
                                        TENGAH STEREO : {(kei_tengahstereo_bet_5050kombinasi*100).toFixed(2)}% <br />
                                        TENGAH KEMBANG : {(kei_tengahkembang_bet_5050kombinasi*100).toFixed(2)}% <br />
                                        TENGAH KEMPIS : {(kei_tengahkempis_bet_5050kombinasi*100).toFixed(2)}% <br />
                                        TENGAH KEMBAR : {(kei_tengahkembar_bet_5050kombinasi*100).toFixed(2)}% <br />
                                        DEPAN MONO : {(kei_depanmono_bet_5050kombinasi*100).toFixed(2)}% <br />
                                        DEPAN STEREO : {(kei_depanstereo_bet_5050kombinasi*100).toFixed(2)}% <br />
                                        DEPAN KEMBANG : {(kei_depankembang_bet_5050kombinasi*100).toFixed(2)}% <br />
                                        DEPAN KEMPIS : {(kei_depankempis_bet_5050kombinasi*100).toFixed(2)}% <br />
                                        DEPAN KEMBAR : {(kei_depankembar_bet_5050kombinasi*100).toFixed(2)}%
                                    </td>
                                </tr>
                            </tbody>
                        </table>    
                    </div>
                    <p class="py-2 text-xs">
                        <b>CARA BERMAIN</b>
                        <br />
                        MONO STEREO <br>
                        Menebak dari posisi Depan,Tengah,Belakang.
                        <br />
                        Contoh no 1234<br />
                        Yang dimaksud dengan Posisi Depan adalah 2 no terdepan yaitu 12<br />
                        Yang dimaksud dengan Posisi Tengah adalah 2 no ditengah yaitu 23<br />
                        Yang dimaksud dengan Posisi Belakang adalah 2 no terbelakang yaitu 34<br />
                        STEREO = Terdapat Ganjil dan Genap<br />
                        MONO = Terdapat 1 pasang Ganjil atau 1 pasang Genap<br /><br />
                        
                        Analisis I : Beli Posisi Depan<br />
                        Keluar : 1234<br />
                        Yang menjadi pedoman adalah posisi Depan, berarti 12<br />
                        12 => 1=ganjil dan 2=genap , berarti hasil = STEREO<br /><br />
                        
                        Analisis II : Beli Posisi Tengah<br />
                        Keluar : 4326<br />
                        Yang menjadi pedoman adalah posisi Tengah, berarti 32<br />
                        32 => 3=ganjil dan 2=genap , berarti hasil = STEREO<br /><br />
                        
                        Analisis III : Beli Posisi Belakang<br />
                        Keluar : 4533<br />
                        Yang menjadi pedoman adalah posisi Belakang, berarti 33<br />
                        33 => 3=ganjil dan 3=ganjil , berarti hasil = MONO<br />
                        Jika dilakukan pembelian dengan 100rb dan menang maka: Menang = 100rb + [Indeks kemenangan untuk MONO STEREO]<br /><br />
                        
                        KEMBANG KEMPIS KEMBAR<br />
                        Struktur=ABCD<br />
                        Jika Menebang posisi Depan maka yang menjadi fokus adalah AB<br />
                        Jika Menebang posisi Tengah maka yang menjadi fokus adalah BC<br />
                        Jika Menebang posisi Belakang maka yang menjadi fokus adalah CD<br />
                        KEMBANG jika A &#8249; B ataupun B &#8249; C ataupun C &#8249; D<br />
                        KEMPIS jika A <span style='font-size:12px;'>&#8250</span> B ataupun B <span style='font-size:12px;'>&#8250</span> C ataupun C <span style='font-size:12px;'>&#8250</span> D<br />
                        KEMBAR jika A = B ataupun B = C ataupun C = D<br /><br />
                        
                        Analisis I : Beli Posisi Depan<br />
                        Keluar : 4321<br />
                        Yang menjadi pedoman adalah posisi Depan, berarti 43<br />
                        43 => 4 <span style='font-size:12px;'>&#8250</span>; 3, hasil = KEMPIS<br /><br />

                        Analisis II : Beli Posisi Tengah<br />
                        Keluar : 4236<br />
                        Yang menjadi pedoman adalah posisi Tengah, berarti 23<br />
                        23 => 2 &#8249; 3, hasil = KEMBANG<br /><br />

                        Analisis III : Beli Posisi Belakang:<br />
                        Keluar : 4099<br />
                        Yang menjadi pedoman adalah posisi Belakang, berarti 99<br />
                        99 => Hasil = KEMBAR<br /><br />

                        Jika dilakukan pembelian dengan 100rb dan menang maka:<br />
                        Menang = 100rb + [Indeks kemenangan untuk KEMBANG/KEMPIS/KEMBAR]
                    </p>
				{/if}
            </div>
        </div>
    </div>
{:else}
    <input type="checkbox" id="my-modal-information" class="modal-toggle" bind:checked={isModalInformation}>
    <div class="modal " on:click|self={()=>isModalInformation = false}>
        <div class="modal-box relative max-w-full  w-full h-screen  rounded-none  p-0 m-0 overflow-hidden">
            <div class="border-b-2 border-base-200 p-2 h-11 w-full max-w-full">
                <label for="my-modal-information" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 class="text-xs lg:text-sm font-bold mt-2">INFORMASI: 50-50</h3>
            </div>
            <ul class="flex justify-center items-center gap-2 mt-1 mx-2">
                <li 
                    on:click={() => {
                        handleClickInfoColok("umum");
                    }}
                    class="{tab_5050_umum} inline-flex items-center  px-2 py-1 text-xs text-center cursor-pointer rounded-md outline outline-1 outline-offset-1 outline-green-600">UMUM</li>
                <li 
                    on:click={() => {
                        handleClickInfoColok("special");
                    }}
                    class="{tab_5050_special} inline-flex items-center  px-2 py-1 text-xs text-center cursor-pointer rounded-md outline outline-1 outline-offset-1 outline-green-600">SPECIAL</li>
                <li 
                    on:click={() => {
                        handleClickInfoColok("kombinasi");
                    }}
                    class="{tab_5050_kombinasi} inline-flex items-center  px-2 py-1 text-xs text-center cursor-pointer rounded-md outline outline-1 outline-offset-1 outline-green-600">KOMBINASI</li>
            </ul>
            <div class="h-full flex flex-col justify-between items-stretch mt-1 ">
                <div class="flex-1 self-stretch scrollbar-thin scrollbar-thumb-green-300 overflow-auto p-2" >
                    {#if panel_5050_umum}
                        <div class="overflow-auto ">
                            <table class="table table-compact w-full" >
                                <tbody>
                                    <tr>
                                        <th class="text-[11px] text-left">MIN BET</th>
                                        <td class="text-[11px] text-right link-accent">{new Intl.NumberFormat().format(min_bet_5050umum)}</td>
                                    </tr>
                                    <tr>
                                        <th class="text-[11px] text-left">MAX BET</th>
                                        <td class="text-[11px] text-right link-accent">{new Intl.NumberFormat().format(max_bet_5050umum)}</td>
                                    </tr>
                                    <tr>
                                        <th class="text-[11px] text-left">DISKON</th>
                                        <td class="text-[11px] text-right link-accent">
                                            BESAR : {(discbesar_bet_5050umum*100).toFixed(2)}% <br />
                                            KECIL : {(disckecil_bet_5050umum*100).toFixed(2)}% <br />
                                            GENAP : {(discgenap_bet_5050umum*100).toFixed(2)}% <br />
                                            GANJIL : {(discganjil_bet_5050umum*100).toFixed(2)}% <br />
                                            TENGAH : {(disctengah_bet_5050umum*100).toFixed(2)}% <br />
                                            TEPI : {(disctepi_bet_5050umum*100).toFixed(2)}%
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="text-[11px] text-left">KEI</th>
                                        <td class="text-[11px] text-right link-accent">
                                            BESAR : {(keibesar_bet_5050umum*100).toFixed(2)}% <br />
                                            KECIL : {(keikecil_bet_5050umum*100).toFixed(2)}% <br />
                                            GENAP : {(keigenap_bet_5050umum*100).toFixed(2)}% <br />
                                            GANJIL : {(keiganjil_bet_5050umum*100).toFixed(2)}% <br />
                                            TENGAH : {(keitengah_bet_5050umum*100).toFixed(2)}% <br />
                                            TEPI : {(keitepi_bet_5050umum*100).toFixed(2)}%
                                        </td>
                                    </tr>
                                </tbody>
                            </table>    
                        </div>
                        <p class="mb-20 text-[11px]">
                            <b>CARA BERMAIN</b>
                            <br />
                            Permainan ganjil/genap, besar/kecil, dan tengah/ tepi UMUM
                            <br />
                            Struktur: CD ( hanya dua angka belakang yang dihitung)<br /><br />
                            
                            Menebak ganjil/genap dan besar/kecil dari posisi:<br />
                            C=KEPALA<br />
                            D=EKOR<br />
                            Besar/Kecil: 0-4=kecil, 5-9=besar<br />
                            Ganjil/Genap : 1=ganjil, 2=genap dan seterusnya<br /><br />
                            Tengah/Tepi : Tengah: angka 25 s/d 74. TEPI : angka 75 s/d 99, dan 00s/d 24<br /><br />
                            
                            Analisis I :<br />
                            Keluar : 6789, Berarti hasil 89<br />
                            Berarti pemenang adalah yang memilih :<br />
                            BESAR<br />
                            GANJIL<br />
                            TEPI
                        </p>
                    {/if}
                    {#if panel_5050_special}
                        <div class="overflow-auto scrollbar-hide">
                            <table class="table table-compact w-full" >
                                <tbody>
                                    <tr>
                                        <th class="text-[11px] text-left">MIN BET</th>
                                        <td class="text-[11px] text-right link-accent">{new Intl.NumberFormat().format(min_bet_5050special)}</td>
                                    </tr>
                                    <tr>
                                        <th class="text-[11px] text-left">MAX BET</th>
                                        <td class="text-[11px] text-right link-accent">{new Intl.NumberFormat().format(max_bet_5050special)}</td>
                                    </tr>
                                    <tr>
                                        <th class="text-[11px] text-left">DISKON</th>
                                        <td class="text-[11px] text-right link-accent">
                                            AS GANJIL : {(discasganjil_bet_5050special*100).toFixed(2)}% <br />
                                            AS GENAP : {(discasgenap_bet_5050special*100).toFixed(2)}% <br />
                                            AS BESAR : {(discasbesar_bet_5050special*100).toFixed(2)}% <br />
                                            AS KECIL : {(discaskecil_bet_5050special*100).toFixed(2)}% <br />
                                            KOP GANJIL : {(disckopganjil_bet_5050special*100).toFixed(2)}% <br />
                                            KOP GENAP : {(disckopgenap_bet_5050special*100).toFixed(2)}% <br />
                                            KOP BESAR : {(disckopbesar_bet_5050special*100).toFixed(2)}% <br />
                                            KOP KECIL : {(disckopkecil_bet_5050special*100).toFixed(2)}% <br />
                                            KEPALA GANJIL : {(disckepalaganjil_bet_5050special*100).toFixed(2)}% <br />
                                            KEPALA GENAP : {(disckepalagenap_bet_5050special*100).toFixed(2)}% <br />
                                            KEPALA BESAR : {(disckepalabesar_bet_5050special*100).toFixed(2)}% <br />
                                            KEPALA KECIL : {(disckepalakecil_bet_5050special*100).toFixed(2)}% <br />
                                            EKOR GANJIL : {(discekorganjil_bet_5050special*100).toFixed(2)}% <br />
                                            EKOR GENAP : {(discekorgenap_bet_5050special*100).toFixed(2)}% <br />
                                            EKOR BESAR : {(discekorbesar_bet_5050special*100).toFixed(2)}% <br />
                                            EKOR KECIL : {(discekorkecil_bet_5050special*100).toFixed(2)}%
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="text-[11px] text-left">KEI</th>
                                        <td class="text-[11px] text-right link-accent">
                                            AS GANJIL : {(keiasganjil_bet_5050special*100).toFixed(2)}% <br />
                                            AS GENAP : {(keiasgenap_bet_5050special*100).toFixed(2)}% <br />
                                            AS BESAR : {(keiasbesar_bet_5050special*100).toFixed(2)}% <br />
                                            AS KECIL : {(keiaskecil_bet_5050special*100).toFixed(2)}% <br />
                                            KOP GANJIL : {(keikopganjil_bet_5050special*100).toFixed(2)}% <br />
                                            KOP GENAP : {(keikopgenap_bet_5050special*100).toFixed(2)}% <br />
                                            KOP BESAR : {(keikopbesar_bet_5050special*100).toFixed(2)}% <br />
                                            KOP KECIL : {(keikopkecil_bet_5050special*100).toFixed(2)}% <br />
                                            KEPALA GANJIL : {(keikepalaganjil_bet_5050special*100).toFixed(2)}% <br />
                                            KEPALA GENAP : {(keikepalagenap_bet_5050special*100).toFixed(2)}% <br />
                                            KEPALA BESAR : {(keikepalabesar_bet_5050special*100).toFixed(2)}% <br />
                                            KEPALA KECIL : {(keikepalakecil_bet_5050special*100).toFixed(2)}% <br />
                                            EKOR GANJIL : {(keiekorganjil_bet_5050special*100).toFixed(2)}% <br />
                                            EKOR GENAP : {(keiekorgenap_bet_5050special*100).toFixed(2)}% <br />
                                            EKOR BESAR : {(keiekorbesar_bet_5050special*100).toFixed(2)}% <br />
                                            EKOR KECIL : {(keiekorkecil_bet_5050special*100).toFixed(2)}%
                                        </td>
                                    </tr>
                                </tbody>
                            </table>    
                        </div>
                        <p class="mb-20 text-[11px]">
                            <b>CARA BERMAIN</b>
                            <br />
                            Menebak ganjil/genap, besar/kecil <br>
                            Permainan ini sangat menarik karena pasarannya naik turun sesuai keinginan market pada waktu tersebut. Dengan demikian, nilai pembelian dipengaruhi kei (pasaran)
                            <br />
                            Struktur: ABCD<br /><br />
                            
                            Menebak ganjil/genap dan besar/kecil dari posisi:<br />
                            A=AS<br />
                            B=KOP<br />
                            C=KEPALA<br />
                            D=EKOR<br />
                            
                            Besar/Kecil : 0-4=kecil, 5-9=besar<br />
                            Ganjil/Genap : 1=ganjil, 2=genap dan seterusnya<br /><br />
                            
                            Analisis I :<br />
                            Keluar : 4327<br />
                            Berarti pemenang adalah yang memilih :<br />
                            AS GENAP/KECIL<br />
                            KOP GANJIL/KECIL<br />
                            KEPALA GENAP/KECIL<br />
                            EKOR GANJIL/BESAR<br />
                            Misal anda membeli dengan dana Rp.100rb untuk AS Genap, menang = 100rb + [indeks pasaran AS Genap 50-50]<br />
                            Atau :<br />
                            Jika membeli dengan dana Rp.100rb untuk Ekor Ganjil, menang = 100rb + [indeks pasaran Ekor Ganjil 50-50]<br />
                            Atau :<br />
                            Jika membeli dengan dana Rp.100rb untuk AS Ganjil, kalah = 100rb + [indeks pasaran AS Ganjil 50-50]
                        </p>
                    {/if}
                    {#if panel_5050_kombinasi}
                        <div class="overflow-auto scrollbar-hide">
                            <table class="table table-compact w-full" >
                                <tbody>
                                    <tr>
                                        <th class="text-[11px] text-left">MIN BET</th>
                                        <td class="text-[11px] text-right link-accent">{new Intl.NumberFormat().format(min_bet_5050kombinasi)}</td>
                                    </tr>
                                    <tr>
                                        <th class="text-[11px] text-left">MAX BET</th>
                                        <td class="text-[11px] text-right link-accent">{new Intl.NumberFormat().format(max_bet_5050kombinasi)}</td>
                                    </tr>
                                    <tr>
                                        <th class="text-[11px] text-left">DISKON</th>
                                        <td class="text-[11px] text-right link-accent">
                                            BELAKANG MONO : {(disc_belakangmono_bet_5050kombinasi*100).toFixed(2)}% <br />
                                            BELAKANG STEREO : {(disc_belakangstereo_bet_5050kombinasi*100).toFixed(2)}% <br />
                                            BELAKANG KEMBANG : {(disc_belakangkembang_bet_5050kombinasi*100).toFixed(2)}% <br />
                                            BELAKANG KEMPIS : {(disc_belakangkempis_bet_5050kombinasi*100).toFixed(2)}% <br />
                                            BELAKANG KEMBAR : {(disc_belakangkembar_bet_5050kombinasi*100).toFixed(2)}% <br />
                                            TENGAH MONO : {(disc_tengahmono_bet_5050kombinasi*100).toFixed(2)}% <br />
                                            TENGAH STEREO : {(disc_tengahstereo_bet_5050kombinasi*100).toFixed(2)}% <br />
                                            TENGAH KEMBANG : {(disc_tengahkembang_bet_5050kombinasi*100).toFixed(2)}% <br />
                                            TENGAH KEMPIS : {(disc_tengahkempis_bet_5050kombinasi*100).toFixed(2)}% <br />
                                            TENGAH KEMBAR : {(disc_tengahkembar_bet_5050kombinasi*100).toFixed(2)}% <br />
                                            DEPAN MONO : {(disc_depanmono_bet_5050kombinasi*100).toFixed(2)}% <br />
                                            DEPAN STEREO : {(disc_depanstereo_bet_5050kombinasi*100).toFixed(2)}% <br />
                                            DEPAN KEMBANG : {(disc_depankembang_bet_5050kombinasi*100).toFixed(2)}% <br />
                                            DEPAN KEMPIS : {(disc_depankempis_bet_5050kombinasi*100).toFixed(2)}% <br />
                                            DEPAN KEMBAR : {(disc_depankembar_bet_5050kombinasi*100).toFixed(2)}%
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="text-[11px] text-left">DISKON</th>
                                        <td class="text-[11px] text-right link-accent">
                                            BELAKANG MONO : {(kei_belakangmono_bet_5050kombinasi*100).toFixed(2)}% <br />
                                            BELAKANG STEREO : {(kei_belakangstereo_bet_5050kombinasi*100).toFixed(2)}% <br />
                                            BELAKANG KEMBANG : {(kei_belakangkembang_bet_5050kombinasi*100).toFixed(2)}% <br />
                                            BELAKANG KEMPIS : {(kei_belakangkempis_bet_5050kombinasi*100).toFixed(2)}% <br />
                                            BELAKANG KEMBAR : {(kei_belakangkembar_bet_5050kombinasi*100).toFixed(2)}% <br />
                                            TENGAH MONO : {(kei_tengahmono_bet_5050kombinasi*100).toFixed(2)}% <br />
                                            TENGAH STEREO : {(kei_tengahstereo_bet_5050kombinasi*100).toFixed(2)}% <br />
                                            TENGAH KEMBANG : {(kei_tengahkembang_bet_5050kombinasi*100).toFixed(2)}% <br />
                                            TENGAH KEMPIS : {(kei_tengahkempis_bet_5050kombinasi*100).toFixed(2)}% <br />
                                            TENGAH KEMBAR : {(kei_tengahkembar_bet_5050kombinasi*100).toFixed(2)}% <br />
                                            DEPAN MONO : {(kei_depanmono_bet_5050kombinasi*100).toFixed(2)}% <br />
                                            DEPAN STEREO : {(kei_depanstereo_bet_5050kombinasi*100).toFixed(2)}% <br />
                                            DEPAN KEMBANG : {(kei_depankembang_bet_5050kombinasi*100).toFixed(2)}% <br />
                                            DEPAN KEMPIS : {(kei_depankempis_bet_5050kombinasi*100).toFixed(2)}% <br />
                                            DEPAN KEMBAR : {(kei_depankembar_bet_5050kombinasi*100).toFixed(2)}%
                                        </td>
                                    </tr>
                                </tbody>
                            </table>    
                        </div>
                        <p class="mb-20 text-[11px]">
                            <b>CARA BERMAIN</b>
                            <br />
                            MONO STEREO <br>
                            Menebak dari posisi Depan,Tengah,Belakang.
                            <br />
                            Contoh no 1234<br />
                            Yang dimaksud dengan Posisi Depan adalah 2 no terdepan yaitu 12<br />
                            Yang dimaksud dengan Posisi Tengah adalah 2 no ditengah yaitu 23<br />
                            Yang dimaksud dengan Posisi Belakang adalah 2 no terbelakang yaitu 34<br />
                            STEREO = Terdapat Ganjil dan Genap<br />
                            MONO = Terdapat 1 pasang Ganjil atau 1 pasang Genap<br /><br />
                            
                            Analisis I : Beli Posisi Depan<br />
                            Keluar : 1234<br />
                            Yang menjadi pedoman adalah posisi Depan, berarti 12<br />
                            12 => 1=ganjil dan 2=genap , berarti hasil = STEREO<br /><br />
                            
                            Analisis II : Beli Posisi Tengah<br />
                            Keluar : 4326<br />
                            Yang menjadi pedoman adalah posisi Tengah, berarti 32<br />
                            32 => 3=ganjil dan 2=genap , berarti hasil = STEREO<br /><br />
                            
                            Analisis III : Beli Posisi Belakang<br />
                            Keluar : 4533<br />
                            Yang menjadi pedoman adalah posisi Belakang, berarti 33<br />
                            33 => 3=ganjil dan 3=ganjil , berarti hasil = MONO<br />
                            Jika dilakukan pembelian dengan 100rb dan menang maka: Menang = 100rb + [Indeks kemenangan untuk MONO STEREO]<br /><br />
                            
                            KEMBANG KEMPIS KEMBAR<br />
                            Struktur=ABCD<br />
                            Jika Menebang posisi Depan maka yang menjadi fokus adalah AB<br />
                            Jika Menebang posisi Tengah maka yang menjadi fokus adalah BC<br />
                            Jika Menebang posisi Belakang maka yang menjadi fokus adalah CD<br />
                            KEMBANG jika A &#8249; B ataupun B &#8249; C ataupun C &#8249; D<br />
                            KEMPIS jika A <span style='font-size:12px;'>&#8250</span> B ataupun B <span style='font-size:12px;'>&#8250</span> C ataupun C <span style='font-size:12px;'>&#8250</span> D<br />
                            KEMBAR jika A = B ataupun B = C ataupun C = D<br /><br />
                            
                            Analisis I : Beli Posisi Depan<br />
                            Keluar : 4321<br />
                            Yang menjadi pedoman adalah posisi Depan, berarti 43<br />
                            43 => 4 <span style='font-size:12px;'>&#8250</span>; 3, hasil = KEMPIS<br /><br />
    
                            Analisis II : Beli Posisi Tengah<br />
                            Keluar : 4236<br />
                            Yang menjadi pedoman adalah posisi Tengah, berarti 23<br />
                            23 => 2 &#8249; 3, hasil = KEMBANG<br /><br />
    
                            Analisis III : Beli Posisi Belakang:<br />
                            Keluar : 4099<br />
                            Yang menjadi pedoman adalah posisi Belakang, berarti 99<br />
                            99 => Hasil = KEMBAR<br /><br />
    
                            Jika dilakukan pembelian dengan 100rb dan menang maka:<br />
                            Menang = 100rb + [Indeks kemenangan untuk KEMBANG/KEMPIS/KEMBAR]
                        </p>
                    {/if}
                </div>
                <div class="h-28  self-stretch "></div>
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
        Kei : <span class="text-sm link-accent">{new Intl.NumberFormat().format( Math.ceil(temp_kei))} ({(temp_keipercen * 100).toFixed(2)}%)</span> <br>
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