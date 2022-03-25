<script>
    import { createEventDispatcher } from "svelte";
    import Button_custom1 from "../component/Button_custom1.svelte";
    import Button_custom2 from "../component/Button_custom2.svelte";

    export let keranjang = [];
    export let totalkeranjang = 0;
    export let card_custom = "";
    export let client_device = "";
    export let count_line_colokbebas = 0;
    export let count_line_colokmacau = 0;
    export let count_line_coloknaga = 0;
    export let count_line_colokjitu = 0;
    export let min_bet_colokbebas = 0;
    export let max_bet_colokbebas = 0;
    export let disc_bet_colokbebas = 0;
    export let win_bet_colokbebas = 0;
    export let min_bet_colokmacau = 0;
    export let max_bet_colokmacau = 0;
    export let disc_bet_colokmacau = 0;
    export let win_bet_colokmacau = 0;
    export let win3_bet_colokmacau = 0;
    export let win4_bet_colokmacau = 0;
    export let min_bet_coloknaga = 0;
    export let max_bet_coloknaga = 0;
    export let disc_bet_coloknaga = 0;
    export let win_bet_coloknaga = 0;
    export let win4_bet_coloknaga = 0;
    export let min_bet_colokjitu = 0;
    export let max_bet_colokjitu = 0;
    export let disc_bet_colokjitu = 0;
    export let winas_bet_colokjitu = 0;
    export let winkop_bet_colokjitu = 0;
    export let winkepala_bet_colokjitu = 0;
    export let winekor_bet_colokjitu = 0;
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
    let tab_colok_bebas = "bg-green-600 text-black"
    let tab_colok_macau = ""
    let tab_colok_naga = ""
    let tab_colok_jitu = ""
    let panel_colok_bebas = true
    let panel_colok_macau = false
    let panel_colok_naga = false
    let panel_colok_jitu = false
    let dispatch = createEventDispatcher();
    const handleInformation = () => {
        isModalInformation = true
    };
    const handleClickInfoColok = (e) => {
        switch(e){
            case "bebas":
                tab_colok_bebas = "bg-green-600 text-black"
                tab_colok_macau = ""
                tab_colok_naga = ""
                tab_colok_jitu = ""
                panel_colok_bebas = true
                panel_colok_macau = false
                panel_colok_naga = false
                panel_colok_jitu = false
                break;
            case "macau":
                tab_colok_bebas = ""
                tab_colok_macau = "bg-green-600 text-black"
                tab_colok_naga = ""
                tab_colok_jitu = ""
                panel_colok_bebas = false
                panel_colok_macau = true
                panel_colok_naga = false
                panel_colok_jitu = false
                break;
            case "naga":
                tab_colok_bebas = ""
                tab_colok_macau = ""
                tab_colok_naga = "bg-green-600 text-black"
                tab_colok_jitu = ""
                panel_colok_bebas = false
                panel_colok_macau = false
                panel_colok_naga = true
                panel_colok_jitu = false
                break;
            case "jitu":
                tab_colok_bebas = ""
                tab_colok_macau = ""
                tab_colok_naga = ""
                tab_colok_jitu = "bg-green-600 text-black"
                panel_colok_bebas = false
                panel_colok_macau = false
                panel_colok_naga = false
                panel_colok_jitu = true
                break;
        }
    };
    const handleRemoveKeranjang = (idkeranjang, bayar,nomor,tipe,permainan,bet,diskon,diskoonpercen) => {
        isModalAlert = true;
        temp_idkeranjang = idkeranjang
        temp_bayar = bayar
        temp_nomor = nomor
        temp_tipe = tipe
        temp_permainan = permainan
        temp_bet = bet
        temp_diskon = diskon
        temp_diskonpercen = diskoonpercen
    };
    const handleAlertRemove = (e) => {
        if(e == 'Y'){
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
        
    }
    const handleRemoveKeranjang_all = () => {
        if (keranjang.length > 0) {
			isModalAlert2 = true;
		}
    };
    const handleAlertRemoveAll = (e) => {
        if(e == 'Y'){
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
        
    }
    const handleSave = () => {
        if (keranjang.length > 0) {
			isModalAlert_belanja = true;
		}
    };
    const handleSaveLanjut = (e) => {
        if(e == "Y"){
            dispatch("handleSave", "save");
        }
        isModalAlert_belanja = false;
    };
    
    $: count_line =
        count_line_colokbebas +
        count_line_colokmacau +
        count_line_coloknaga +
        count_line_colokjitu;
</script>

<div class="card bg-base-200 shadow-xl mt-5 rounded-md {card_custom}">
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
                            <th width="1%" class="text-xs lg:text-sm text-center">#</th>
                            <th width="*" class="text-xs text-center">NOMOR</th>
                            <th width="10%" class="text-xs lg:text-sm text-center">PERMAINAN</th>
                            <th width="15%" class="text-xs lg:text-sm text-right">BET</th>
                            <th width="15%" class="text-xs lg:text-sm text-right">DISKON</th>
                            <th width="15%" class="text-xs lg:text-sm text-right">BAYAR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each keranjang as rec (rec)}
                            <tr>
                                <th 
                                    class="cursor-pointer"
                                    on:click={() => {
                                        handleRemoveKeranjang(rec.id, rec.bayar,rec.nomor,rec.tipetoto,rec.permainan,rec.bet,rec.diskon,rec.diskonpercen);
                                    }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </th>
                                <td class="text-xs lg:text-sm text-center">{rec.nomor}</td>
                                <td class="text-xs lg:text-sm text-center">{rec.permainan}</td>
                                <td class="text-xs lg:text-sm text-right link-accent">{new Intl.NumberFormat().format(rec.bet)}</td>
                                <td class="text-xs lg:text-sm text-right link-accent">{new Intl.NumberFormat().format( Math.ceil(rec.diskon))} ({(rec.diskonpercen * 100).toFixed(2)}%)</td>
                                <td class="text-xs lg:text-sm text-right link-accent">{new Intl.NumberFormat().format(rec.bayar)}</td>
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
                                        handleRemoveKeranjang(rec.id, rec.bayar,rec.nomor,rec.tipetoto,rec.permainan,rec.bet,rec.diskon,rec.diskonpercen);
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
            <div class="flex justify-center items-center flex-nowrap gap-1">
                <div on:click={handleInformation} class="p-1 cursor-pointer glass bg-accent hover:bg-accent  outline-blue-700 text-white flex basis-full flex-col justify-center items-center rounded-md shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                    <h3 class="text-xs ">INFORMASI</h3>
                </div>
                <div on:click={handleRemoveKeranjang_all} class="p-1 cursor-pointer glass bg-green-700 hover:bg-green-700 border-green-500 outline-green-500 text-white flex basis-full flex-col justify-center items-center rounded-md shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    <h3 class="text-xs ">HAPUS</h3>
                </div>
                <div on:click={handleSave} class="p-1 cursor-pointer glass bg-green-700 hover:bg-green-700 border-green-500 outline-green-500 text-white flex basis-full flex-col justify-center items-center rounded-md shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <h3 class="text-xs ">PEMBAYARAN</h3>
                </div>
            </div>
        {/if}
    </div>
</div>

{#if client_device == "WEBSITE"}
    <input type="checkbox" id="my-modal-information" class="modal-toggle" bind:checked={isModalInformation}>
    <div class="modal" on:click|self={()=>isModalInformation = false}>
        <div class="modal-box relative w-11/12 max-w-2xl h-[600px] overflow-hidden">
            <label for="my-modal-information" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 class="text-xs lg:text-sm font-bold mt-1">INFORMASI</h3>
            <div class="hidden lg:flex justify-start items-center mt-4 ">
                <ul class="flex flex-1 gap-2">
                    <li 
                        on:click={() => {
                            handleClickInfoColok("bebas");
                        }}
                        class="{tab_colok_bebas} inline-flex items-center  px-2 py-1.5 text-xs lg:text-sm cursor-pointer rounded-md outline outline-1 outline-offset-1 outline-green-600">Colok Bebas</li>
                    <li 
                        on:click={() => {
                            handleClickInfoColok("macau");
                        }}
                        class="{tab_colok_macau} inline-flex items-center  px-2 py-1.5text-xs lg:text-sm   cursor-pointer rounded-md outline outline-1 outline-offset-1 outline-green-600">Colok Macau</li>
                    <li 
                        on:click={() => {
                            handleClickInfoColok("naga");
                        }}
                        class="{tab_colok_naga} inline-flex items-center  px-2 py-1.5 text-xs lg:text-sm  cursor-pointer rounded-md outline outline-1 outline-offset-1 outline-green-600">Colok Naga</li>
                    <li 
                        on:click={() => {
                            handleClickInfoColok("jitu");
                        }}
                        class="{tab_colok_jitu} inline-flex items-center  px-2 py-1.5 text-xs lg:text-sm  cursor-pointer rounded-md outline outline-1 outline-offset-1 outline-green-600">Colok Jitu</li>
                </ul>
            </div>
            <div class="h-[32rem] overflow-auto scrollbar-hide mt-4" >
                {#if panel_colok_bebas}
                    <div class="overflow-auto">
                        <table class="table table-compact w-full" >
                            <tbody>
                                <tr>
                                    <th class="text-sm text-left">MIN BET</th>
                                    <td class="text-sm text-right link-accent">{new Intl.NumberFormat().format(min_bet_colokbebas)}</td>
                                </tr>
                                <tr>
                                    <th class="text-sm text-left">MAX BET</th>
                                    <td class="text-sm text-right link-accent">{new Intl.NumberFormat().format(max_bet_colokbebas)}</td>
                                </tr>
                                <tr>
                                    <th class="text-sm text-left">DISKON</th>
                                    <td class="text-sm text-right link-accent">{(disc_bet_colokbebas * 100).toFixed(2)}%</td>
                                </tr>
                                <tr>
                                    <th class="text-sm text-left">HADIAH</th>
                                    <td class="text-sm text-right link-accent">{win_bet_colokbebas}x</td>
                                </tr>
                            </tbody>
                        </table>    
                    </div>
                    <p class="py-2 text-sm">
                        <b>CARA BERMAIN</b>
                        <br />
                        Menebak salah satu angka dari 4D. Posisi angka bisa dimana saja
                        <br />
                        Struktur ABCD<br /><br />
                        
                        Analisis I :<br />
                        keluar : 4321<br />
                        Misalnya pembelian Angka 3 dengan nilai taruhan 100rb.<br />
                        Berarti menang : 100rb + [Indeks kemenangan untuk colok angka]<br /><br />
                        
                        Analisis I:<br />
                        keluar : 4331<br />
                        Misalnya pembelian Angka 3 dengan nilai taruhan 100rb.<br />
                        Berarti menang: 100rb + ([Indeks kemenangan untuk colok Angka] x 2)<br /><br />
                        
                        Dan seterusnya untuk setiap kembaran yang berhasil ditebak, otomatis mendapat kelipatan [Indeks kemenangan untuk colok angka]
                    </p>
				{/if}
                {#if panel_colok_macau}
                    <div class="overflow-auto">
                        <table class="table table-compact w-full" >
                            <tbody>
                                <tr>
                                    <th class="text-sm text-left">MIN BET</th>
                                    <td class="text-sm text-right link-accent">{new Intl.NumberFormat().format(min_bet_colokmacau)}</td>
                                </tr>
                                <tr>
                                    <th class="text-sm text-left">MAX BET</th>
                                    <td class="text-sm text-right link-accent">{new Intl.NumberFormat().format(max_bet_colokmacau)}</td>
                                </tr>
                                <tr>
                                    <th class="text-sm text-left">DISKON</th>
                                    <td class="text-sm text-right link-accent">{(disc_bet_colokmacau  * 100).toFixed(2)}%</td>
                                </tr>
                                <tr>
                                    <th class="text-sm text-left">HADIAH 2 DIGIT</th>
                                    <td class="text-sm text-right link-accent">{win_bet_colokmacau}x</td>
                                </tr>
                                <tr>
                                    <th class="text-sm text-left">HADIAH 3 DIGIT</th>
                                    <td class="text-sm text-right link-accent">{win3_bet_colokmacau}x</td>
                                </tr>
                                <tr>
                                    <th class="text-sm text-left">HADIAH 4 DIGIT</th>
                                    <td class="text-sm text-right link-accent">{win4_bet_colokmacau}x</td>
                                </tr>
                            </tbody>
                        </table>    
                    </div>
                    <p class="py-2 text-sm">
                        <b>CARA BERMAIN</b>
                        <br />
                        Cara kerja seperti colok angka tapi mesti yang keluar 2 angka dari 4D.
                        <br />
                        Struktur ABCD<br /><br />
                        
                        Analisis I :<br />
                        keluar : 4321<br />
                        Misalnya dibeli 4 dan 2 dengan nilai 100rb.<br />
                        Berarti menang: 100rb + [Indeks kemenangan untuk Macau, kategori: 2 digit]<br /><br />
                        
                        Analisis II :<br />
                        keluar : 4321<br />
                        Misalnya dibeli 4 dan 6 dengan nilai 100rb.<br />
                        Berarti KALAH dan nilai betting tidak dikembalikan)<br /><br />
                        
                        Analisis III :<br />
                        keluar : 4331<br />
                        Misalnya dibeli 4 dan 3 dengan nilai 100rb.<br />
                        Berarti menang: 100rb + [Indeks kemenangan untuk Macau, kategori: 3 digit]<br /><br />
                        
                        Analisis IV :<br />
                        keluar : 4334<br />
                        Misalnya dibeli 4 dan 3 dengan nilai 100rb.<br />
                        Berarti menang: 100rb + [Indeks kemenangan untuk Macau, kategori: 3 digit]
                    </p>
				{/if}
                {#if panel_colok_naga}
                    <div class="overflow-auto">
                        <table class="table table-compact w-full" >
                            <tbody>
                                <tr>
                                    <th class="text-sm text-left">MIN BET</th>
                                    <td class="text-sm text-right link-accent">{new Intl.NumberFormat().format(min_bet_coloknaga)}</td>
                                </tr>
                                <tr>
                                    <th class="text-sm text-left">MAX BET</th>
                                    <td class="text-sm text-right link-accent">{new Intl.NumberFormat().format(max_bet_coloknaga)}</td>
                                </tr>
                                <tr>
                                    <th class="text-sm text-left">DISKON</th>
                                    <td class="text-sm text-right link-accent">{(disc_bet_coloknaga  * 100).toFixed(2)}%</td>
                                </tr>
                                <tr>
                                    <th class="text-sm text-left">HADIAH 3 DIGIT</th>
                                    <td class="text-sm text-right link-accent">{win_bet_coloknaga.toFixed(2)}x</td>
                                </tr>
                                <tr>
                                    <th class="text-sm text-left">HADIAH 4 DIGIT</th>
                                    <td class="text-sm text-right link-accent">{win4_bet_coloknaga.toFixed(2)}x</td>
                                </tr>
                            </tbody>
                        </table>    
                    </div>
                    <p class="py-2 text-sm">
                        <b>CARA BERMAIN</b>
                        <br />
                        Cara kerja seperti colok angka tapi mesti yang keluar 3 angka dari 4D.
                        <br />
                        Struktur ABCD<br /><br />
                        
                        Analisis I :<br />
                        keluar : 4321<br />
                        Misalnya dibeli 4,2 dan 3 dengan nilai 100rb.<br />
                        Berarti menang: karena keluar 3 digit,angka 4,2 dan 3.<br />
                        100rb + [Indeks kemenangan untuk colok naga , kategori: 3 digit]<br /><br />
                        
                        Analisis II :<br />
                        keluar : 4321<br />
                        Misalnya dibeli 4,2 dan 6 dengan nilai 100rb.<br />
                        karena keluar hanya 2 digit angka 4 dan 2, dan angka 6 tidak muncul berarti kalah<br /><br />
                        
                        Analisis III :<br />
                        keluar : 4331<br />
                        Misalnya dibeli 4,3 dan 3 dengan nilai 100rb.<br />
                        Berarti menang: karena keluar 3 digit,angka 4,3 dan 3.<br />
                        100rb + [Indeks kemenangan untuk colok naga , kategori: 3 digit]<br /><br />
                        
                        Analisis IV :<br />
                        keluar : 4334<br />
                        Misalnya dibeli 4,3 dan 3 dengan nilai 100rb.<br />
                        Berarti menang: 100rb + [Indeks kemenangan untuk colok naga, kategori: 4 digit]
                    </p>
				{/if}
                {#if panel_colok_jitu}
                    <div class="overflow-auto">
                        <table class="table table-compact w-full" >
                            <tbody>
                                <tr>
                                    <th class="text-sm text-left">MIN BET</th>
                                    <td class="text-sm text-right link-accent">{new Intl.NumberFormat().format(min_bet_colokjitu)}</td>
                                </tr>
                                <tr>
                                    <th class="text-sm text-left">MAX BET</th>
                                    <td class="text-sm text-right link-accent">{new Intl.NumberFormat().format(max_bet_colokjitu)}</td>
                                </tr>
                                <tr>
                                    <th class="text-sm text-left">DISKON</th>
                                    <td class="text-sm text-right link-accent">{(disc_bet_colokjitu  * 100).toFixed(2)}%</td>
                                </tr>
                                <tr>
                                    <th class="text-sm text-left">HADIAH AS</th>
                                    <td class="text-sm text-right link-accent">{winas_bet_colokjitu.toFixed(2)}x</td>
                                </tr>
                                <tr>
                                    <th class="text-sm text-left">HADIAH KOP</th>
                                    <td class="text-sm text-right link-accent">{winkop_bet_colokjitu.toFixed(2)}x</td>
                                </tr>
                                <tr>
                                    <th class="text-sm text-left">HADIAH KEPALA</th>
                                    <td class="text-sm text-right link-accent">{winkepala_bet_colokjitu.toFixed(2)}x</td>
                                </tr>
                                <tr>
                                    <th class="text-sm text-left">HADIAH EKOR</th>
                                    <td class="text-sm text-right link-accent">{winekor_bet_colokjitu.toFixed(2)}x</td>
                                </tr>
                            </tbody>
                        </table>    
                    </div>
                    <p class="py-2 text-sm">
                        <b>CARA BERMAIN</b>
                        <br />
                        Menebak satu angka pada posisi tertentu dari 4D.
                        <br />
                        Struktur ABCD<br /><br />
                        
                        Analisis I :<br />
                        keluar : 4321<br />
                        Misalnya dibeli 4 pada posisi AS dengan nilai 100rb.<br />
                        Berarti menang: 100rb + [Indeks kemenangan untuk colok jitu]<br /><br />
                        
                        Analisis II :<br />
                        keluar : 4331<br />
                        Misalnya dibeli 3 pada posisi KOP dengan nilai 100rb.<br />
                        Berarti menang: 100rb + [Indeks kemenangan untuk colok jitu]. Hasilnya sama dengan analisis I karena hanya memperhatikan posisi yang dipasang.<br /><br />
                        
                        Analisis III :<br />
                        keluar : 4331<br />
                        Misalnya dibeli 4 pada posisi EKOR dengan nilai 100rb.<br />
                        Berarti kalah. Biarpun nilai 4 keluar pada posisi AS tapi tidak akan mepengaruhi pemilihan di pososi EKOR
                    </p>
				{/if}
            </div>
        </div>
    </div>
{:else}
    <input type="checkbox" id="my-modal-information" class="modal-toggle" bind:checked={isModalInformation}>
    <div class="modal " on:click|self={()=>isModalInformation = false}>
        <div class="modal-box relative max-w-full lg:max-w-xl h-full lg:h-2/3 rounded-none lg:rounded-lg p-2 lg:p-4 overflow-hidden">
            <label for="my-modal-information" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 class="text-xs lg:text-sm font-bold mt-1">INFORMASI</h3>
            <div class="flex justify-start items-center mt-4 ">
                <ul class="flex flex-1 gap-2">
                    <li 
                        on:click={() => {
                            handleClickInfoColok("bebas");
                        }}
                        class="{tab_colok_bebas} inline-flex items-center  px-2 py-1 text-xs text-center cursor-pointer rounded-md outline outline-1 outline-offset-1 outline-green-600">Colok Bebas</li>
                    <li 
                        on:click={() => {
                            handleClickInfoColok("macau");
                        }}
                        class="{tab_colok_macau} inline-flex items-center  px-2 py-1 text-xs text-center cursor-pointer rounded-md outline outline-1 outline-offset-1 outline-green-600">Colok Macau</li>
                    <li 
                        on:click={() => {
                            handleClickInfoColok("naga");
                        }}
                        class="{tab_colok_naga} inline-flex items-center  px-2 py-1 text-xs text-center cursor-pointer rounded-md outline outline-1 outline-offset-1 outline-green-600">Colok Naga</li>
                    <li 
                        on:click={() => {
                            handleClickInfoColok("jitu");
                        }}
                        class="{tab_colok_jitu} inline-flex items-center  px-2 py-1 text-xs text-center cursor-pointer rounded-md outline outline-1 outline-offset-1 outline-green-600">Colok Jitu</li>
                </ul>
            </div>
            <div class="h-[32rem] overflow-auto scrollbar-hide mt-4" >
                {#if panel_colok_bebas}
                    <div class="overflow-auto">
                        <table class="table table-compact w-full" >
                            <tbody>
                                <tr>
                                    <th class="text-xs text-left">MIN BET</th>
                                    <td class="text-xs text-right link-accent">{new Intl.NumberFormat().format(min_bet_colokbebas)}</td>
                                </tr>
                                <tr>
                                    <th class="text-xs text-left">MAX BET</th>
                                    <td class="text-xs text-right link-accent">{new Intl.NumberFormat().format(max_bet_colokbebas)}</td>
                                </tr>
                                <tr>
                                    <th class="text-xs text-left">DISKON</th>
                                    <td class="text-xs text-right link-accent">{(disc_bet_colokbebas * 100).toFixed(2)}%</td>
                                </tr>
                                <tr>
                                    <th class="text-xs text-left">HADIAH</th>
                                    <td class="text-xs text-right link-accent">{win_bet_colokbebas}x</td>
                                </tr>
                            </tbody>
                        </table>    
                    </div>
                    <p class="py-2 text-xs">
                        <b>CARA BERMAIN</b>
                        <br />
                        Menebak salah satu angka dari 4D. Posisi angka bisa dimana saja
                        <br />
                        Struktur ABCD<br /><br />
                        
                        Analisis I :<br />
                        keluar : 4321<br />
                        Misalnya pembelian Angka 3 dengan nilai taruhan 100rb.<br />
                        Berarti menang : 100rb + [Indeks kemenangan untuk colok angka]<br /><br />
                        
                        Analisis I:<br />
                        keluar : 4331<br />
                        Misalnya pembelian Angka 3 dengan nilai taruhan 100rb.<br />
                        Berarti menang: 100rb + ([Indeks kemenangan untuk colok Angka] x 2)<br /><br />
                        
                        Dan seterusnya untuk setiap kembaran yang berhasil ditebak, otomatis mendapat kelipatan [Indeks kemenangan untuk colok angka]
                    </p>
				{/if}
                {#if panel_colok_macau}
                    <div class="overflow-auto">
                        <table class="table table-compact w-full" >
                            <tbody>
                                <tr>
                                    <th class="text-xs text-left">MIN BET</th>
                                    <td class="text-xs text-right link-accent">{new Intl.NumberFormat().format(min_bet_colokmacau)}</td>
                                </tr>
                                <tr>
                                    <th class="text-xs text-left">MAX BET</th>
                                    <td class="text-xs text-right link-accent">{new Intl.NumberFormat().format(max_bet_colokmacau)}</td>
                                </tr>
                                <tr>
                                    <th class="text-xs text-left">DISKON</th>
                                    <td class="text-xs text-right link-accent">{(disc_bet_colokmacau  * 100).toFixed(2)}%</td>
                                </tr>
                                <tr>
                                    <th class="text-xs text-left">HADIAH 2 DIGIT</th>
                                    <td class="text-xs text-right link-accent">{win_bet_colokmacau}x</td>
                                </tr>
                                <tr>
                                    <th class="text-xs text-left">HADIAH 3 DIGIT</th>
                                    <td class="text-xs text-right link-accent">{win3_bet_colokmacau}x</td>
                                </tr>
                                <tr>
                                    <th class="text-xs text-left">HADIAH 4 DIGIT</th>
                                    <td class="text-xs text-right link-accent">{win4_bet_colokmacau}x</td>
                                </tr>
                            </tbody>
                        </table>    
                    </div>
                    <p class="py-2 text-xs">
                        <b>CARA BERMAIN</b>
                        <br />
                        Cara kerja seperti colok angka tapi mesti yang keluar 2 angka dari 4D.
                        <br />
                        Struktur ABCD<br /><br />
                        
                        Analisis I :<br />
                        keluar : 4321<br />
                        Misalnya dibeli 4 dan 2 dengan nilai 100rb.<br />
                        Berarti menang: 100rb + [Indeks kemenangan untuk Macau, kategori: 2 digit]<br /><br />
                        
                        Analisis II :<br />
                        keluar : 4321<br />
                        Misalnya dibeli 4 dan 6 dengan nilai 100rb.<br />
                        Berarti KALAH dan nilai betting tidak dikembalikan)<br /><br />
                        
                        Analisis III :<br />
                        keluar : 4331<br />
                        Misalnya dibeli 4 dan 3 dengan nilai 100rb.<br />
                        Berarti menang: 100rb + [Indeks kemenangan untuk Macau, kategori: 3 digit]<br /><br />
                        
                        Analisis IV :<br />
                        keluar : 4334<br />
                        Misalnya dibeli 4 dan 3 dengan nilai 100rb.<br />
                        Berarti menang: 100rb + [Indeks kemenangan untuk Macau, kategori: 3 digit]
                    </p>
				{/if}
                {#if panel_colok_naga}
                    <div class="overflow-auto">
                        <table class="table table-compact w-full" >
                            <tbody>
                                <tr>
                                    <th class="text-xs text-left">MIN BET</th>
                                    <td class="text-xs text-right link-accent">{new Intl.NumberFormat().format(min_bet_coloknaga)}</td>
                                </tr>
                                <tr>
                                    <th class="text-xs text-left">MAX BET</th>
                                    <td class="text-xs text-right link-accent">{new Intl.NumberFormat().format(max_bet_coloknaga)}</td>
                                </tr>
                                <tr>
                                    <th class="text-xs text-left">DISKON</th>
                                    <td class="text-xs text-right link-accent">{(disc_bet_coloknaga  * 100).toFixed(2)}%</td>
                                </tr>
                                <tr>
                                    <th class="text-xs text-left">HADIAH 3 DIGIT</th>
                                    <td class="text-xs text-right link-accent">{win_bet_coloknaga.toFixed(2)}x</td>
                                </tr>
                                <tr>
                                    <th class="text-xs text-left">HADIAH 4 DIGIT</th>
                                    <td class="text-xs text-right link-accent">{win4_bet_coloknaga.toFixed(2)}x</td>
                                </tr>
                            </tbody>
                        </table>    
                    </div>
                    <p class="py-2 text-xs">
                        <b>CARA BERMAIN</b>
                        <br />
                        Cara kerja seperti colok angka tapi mesti yang keluar 3 angka dari 4D.
                        <br />
                        Struktur ABCD<br /><br />
                        
                        Analisis I :<br />
                        keluar : 4321<br />
                        Misalnya dibeli 4,2 dan 3 dengan nilai 100rb.<br />
                        Berarti menang: karena keluar 3 digit,angka 4,2 dan 3.<br />
                        100rb + [Indeks kemenangan untuk colok naga , kategori: 3 digit]<br /><br />
                        
                        Analisis II :<br />
                        keluar : 4321<br />
                        Misalnya dibeli 4,2 dan 6 dengan nilai 100rb.<br />
                        karena keluar hanya 2 digit angka 4 dan 2, dan angka 6 tidak muncul berarti kalah<br /><br />
                        
                        Analisis III :<br />
                        keluar : 4331<br />
                        Misalnya dibeli 4,3 dan 3 dengan nilai 100rb.<br />
                        Berarti menang: karena keluar 3 digit,angka 4,3 dan 3.<br />
                        100rb + [Indeks kemenangan untuk colok naga , kategori: 3 digit]<br /><br />
                        
                        Analisis IV :<br />
                        keluar : 4334<br />
                        Misalnya dibeli 4,3 dan 3 dengan nilai 100rb.<br />
                        Berarti menang: 100rb + [Indeks kemenangan untuk colok naga, kategori: 4 digit]
                    </p>
				{/if}
                {#if panel_colok_jitu}
                    <div class="overflow-auto">
                        <table class="table table-compact w-full" >
                            <tbody>
                                <tr>
                                    <th class="text-xs text-left">MIN BET</th>
                                    <td class="text-xs text-right link-accent">{new Intl.NumberFormat().format(min_bet_colokjitu)}</td>
                                </tr>
                                <tr>
                                    <th class="text-xs text-left">MAX BET</th>
                                    <td class="text-xs text-right link-accent">{new Intl.NumberFormat().format(max_bet_colokjitu)}</td>
                                </tr>
                                <tr>
                                    <th class="text-xs text-left">DISKON</th>
                                    <td class="text-xs text-right link-accent">{(disc_bet_colokjitu  * 100).toFixed(2)}%</td>
                                </tr>
                                <tr>
                                    <th class="text-xs text-left">HADIAH AS</th>
                                    <td class="text-xs text-right link-accent">{winas_bet_colokjitu.toFixed(2)}x</td>
                                </tr>
                                <tr>
                                    <th class="text-xs text-left">HADIAH KOP</th>
                                    <td class="text-xs text-right link-accent">{winkop_bet_colokjitu.toFixed(2)}x</td>
                                </tr>
                                <tr>
                                    <th class="text-xs text-left">HADIAH KEPALA</th>
                                    <td class="text-xs text-right link-accent">{winkepala_bet_colokjitu.toFixed(2)}x</td>
                                </tr>
                                <tr>
                                    <th class="text-xs text-left">HADIAH EKOR</th>
                                    <td class="text-xs text-right link-accent">{winekor_bet_colokjitu.toFixed(2)}x</td>
                                </tr>
                            </tbody>
                        </table>    
                    </div>
                    <p class="py-2 text-xs">
                        <b>CARA BERMAIN</b>
                        <br />
                        Menebak satu angka pada posisi tertentu dari 4D.
                        <br />
                        Struktur ABCD<br /><br />
                        
                        Analisis I :<br />
                        keluar : 4321<br />
                        Misalnya dibeli 4 pada posisi AS dengan nilai 100rb.<br />
                        Berarti menang: 100rb + [Indeks kemenangan untuk colok jitu]<br /><br />
                        
                        Analisis II :<br />
                        keluar : 4331<br />
                        Misalnya dibeli 3 pada posisi KOP dengan nilai 100rb.<br />
                        Berarti menang: 100rb + [Indeks kemenangan untuk colok jitu]. Hasilnya sama dengan analisis I karena hanya memperhatikan posisi yang dipasang.<br /><br />
                        
                        Analisis III :<br />
                        keluar : 4331<br />
                        Misalnya dibeli 4 pada posisi EKOR dengan nilai 100rb.<br />
                        Berarti kalah. Biarpun nilai 4 keluar pada posisi AS tapi tidak akan mepengaruhi pemilihan di pososi EKOR
                    </p>
				{/if}
            </div>
        </div>
    </div>
{/if}

<input type="checkbox" id="my-modal-informationalert" class="modal-toggle" bind:checked={isModalAlert}>
<div class="modal" >
    <div class="modal-box relative max-w-lg">
        <h3 class="text-xs lg:text-sm font-bold capitalize text-center">Apakah Anda Ingin Menghapus Transaksi Ini :</h3>
        <p class="p-3 italic text-xs lg:text-sm bg-base-200 rounded-md mb-4 mt-4">
            Nomor : {temp_nomor} <br>
            Permainan : {temp_permainan} <br>
            Bet : <span class="text-sm link-accent">{new Intl.NumberFormat().format(temp_bet)}</span> <br>
            Diskon : <span class="text-sm link-accent">{new Intl.NumberFormat().format( Math.ceil(temp_diskon))} ({(temp_diskonpercen * 100).toFixed(2)}%)</span> <br>
            Bayar : <span class="text-sm link-accent">{new Intl.NumberFormat().format(temp_bayar)}</span>
        </p>
        <div class="grid grid-cols-2 gap-1">
            <button
                on:click={() => {
                    handleAlertRemove("Y");
                }}
                class="btn btn-success rounded-md">Ya</button>
            <button
                on:click={() => {
                    handleAlertRemove("N");
                }}
                class="btn btn-accent rounded-md">Tidak</button>
        </div>
    </div>
</div>
<input type="checkbox" id="my-modal-informationalert2" class="modal-toggle" bind:checked={isModalAlert2}>
<div class="modal" >
    <div class="modal-box relative max-w-lg">
        <h3 class="text-xs lg:text-sm font-bold capitalize text-center mb-4">Apakah Anda Ingin Menghapus Semua Transaksi :</h3>
        <div class="grid grid-cols-2 gap-1">
            <button
                on:click={() => {
                    handleAlertRemoveAll("Y");
                }}
                class="btn btn-success rounded-md">Ya</button>
            <button
                on:click={() => {
                    handleAlertRemoveAll("N");
                }}
                class="btn btn-accent rounded-md">Tidak</button>
        </div>
    </div>
</div>

<input type="checkbox" id="my-modal-informationalertbelanja" class="modal-toggle" bind:checked={isModalAlert_belanja}>
<div class="modal" >
    <div class="modal-box relative max-w-lg">
        <h3 class="text-sm font-bold capitalize text-center mb-4">Apakah Anda Ingin Melanjutkan Transaksi :</h3>
        <p class="p-3 italic text-sm bg-base-200 rounded-md mb-4 mt-4">
            Total Belanja : <span class="text-sm link-accent">{new Intl.NumberFormat().format(totalkeranjang)}</span>
        </p>
        <div class="grid grid-cols-2 gap-1">
            <button
                on:click={() => {
                    handleSaveLanjut("Y");
                }}
                class="btn btn-success rounded-md">Ya</button>
            <button
                on:click={() => {
                    handleSaveLanjut("N");
                }}
                class="btn btn-accent rounded-md">Tidak</button>
        </div>
    </div>
</div>

<style>
    .scrollbar-thin::-webkit-scrollbar {
      width: 3px;
      height: 3px;
    }
</style>