<script>
    import { createEventDispatcher } from "svelte";
    import Modal_alert_remove from "../component/Modal_alert_remove.svelte";
    import Button_custom1 from "../component/Button_custom1.svelte";
    import Button_custom2 from "../component/Button_custom2.svelte";

    export let keranjang = [];
    export let totalkeranjang = 0;
    export let card_custom = "";
    export let client_device = "";
    export let temp_permainan_tab = "";
    export let count_line_4d = 0;
    export let count_line_3d = 0;
    export let count_line_3dd = 0;
    export let count_line_2d = 0;
    export let count_line_2dd = 0;
    export let count_line_2dt = 0;
    export let minimal_bet = 0;
    export let max4d_bet = 0;
    export let max3d_bet = 0;
    export let max3dd_bet = 0;
    export let max2d_bet = 0;
    export let max2dd_bet = 0;
    export let max2dt_bet = 0;
    export let disc4d_bet = 0;
    export let disc3d_bet = 0;
    export let disc3dd_bet = 0;
    export let disc2d_bet = 0;
    export let disc2dd_bet = 0;
    export let disc2dt_bet = 0;
    export let win4d_bet = 0;
    export let win3d_bet = 0;
    export let win3dd_bet = 0;
    export let win2d_bet = 0;
    export let win2dd_bet = 0;
    export let win2dt_bet = 0;
    export let win4dnodiskon_bet = 0;
	export let win3dnodiskon_bet = 0;
	export let win3ddnodiskon_bet = 0;
	export let win2dnodiskon_bet = 0;
	export let win2ddnodiskon_bet = 0;
	export let win2dtnodiskon_bet = 0;
    export let win4dbb_kena_bet = 0;
    export let win3dbb_kena_bet = 0;
    export let win3ddbb_kena_bet = 0;
    export let win2dbb_kena_bet = 0;
    export let win2ddbb_kena_bet = 0;
    export let win2dtbb_kena_bet = 0;
    export let win4dbb_bet = 0;
    export let win3dbb_bet = 0;
    export let win3ddbb_bet = 0;
    export let win2dbb_bet = 0;
    export let win2ddbb_bet = 0;
    export let win2dtbb_bet = 0;
    export let limitline_4d = 0;
    export let limitline_3d = 0;
    export let limitline_3dd = 0;
    export let limitline_2d = 0;
    export let limitline_2dd = 0;
    export let limitline_2dt = 0;
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
    let dispatch = createEventDispatcher();
    const handleInformation = () => {
        isModalInformation = true
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
        if(e.detail.action_remove == 'Y'){
            isModalAlert = false;
            let idkeranjang = temp_idkeranjang 
            let bayar = temp_bayar 
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
    $: {
        count_line = count_line_4d +count_line_3d +count_line_3dd +count_line_2d +count_line_2dd +count_line_2dt;
    }
    let class_card_table_keranjang = "mt-5";
    if(client_device == "WEBSITE"){
        class_card_table_keranjang = "mt-5";
    }else{
        class_card_table_keranjang = "mt-2";
    }
</script>

<div class="card bg-base-200 shadow-xl {class_card_table_keranjang} rounded-md {card_custom}">
    <div class="card-body p-3 select-none">
        {#if client_device == "WEBSITE"}
            <h2 class="card-title text-lg grid grid-cols-2 gap-4">
                <div class="place-content-start text-left text-sm lg:text-lg">
                    TOTAL BAYAR : <span class="text-xs lg:text-lg link-accent">{new Intl.NumberFormat().format(totalkeranjang)}</span>
                </div>
            </h2>
            <div class="overflow-auto shadow-lg scrollbar-thin scrollbar-thumb-green-300  h-[500px] cursor-pointer">
                <table class="table table-zebra w-full" >
                    <thead>
                        <tr>
                            {#if temp_permainan_tab != '432BOLAKBALIK'}
                            <th width="1%" class="text-xs text-center">#</th>
                            {/if}
                            <th width="*" class="text-xs text-center">NOMOR</th>
                            <th width="10%" class="text-xs text-center">TIPE</th>
                            <th width="10%" class="text-xs text-center">PERMAINAN</th>
                            <th width="15%" class="text-xs text-right">BET</th>
                            <th width="15%" class="text-xs text-right">DISKON</th>
                            <th width="15%" class="text-xs text-right">BAYAR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each keranjang as rec (rec)}
                            <tr>
                                {#if temp_permainan_tab != '432BOLAKBALIK'}
                                    <th 
                                        class="cursor-pointer"
                                        on:click={() => {
                                            handleRemoveKeranjang(rec.id, rec.bayar,rec.nomor,rec.tipetoto,rec.permainan,rec.bet,rec.diskon,rec.diskonpercen);
                                        }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </th>
                                {/if}
                                <td class="text-xs text-center">{rec.nomor}</td>
                                <td class="text-xs text-center">{rec.tipetoto}</td>
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
                <div class="grid grid-cols-3">
                    <div class="basis-1/4 text-sm">4D : <span class="text-sm link-accent">{count_line_4d}</span></div>
                    <div class="basis-1/4 text-sm">3D : <span class="text-sm link-accent">{count_line_3d}</span></div>
                    <div class="basis-1/4 text-sm">3D DEPAN : <span class="text-sm link-accent">{count_line_3dd}</span></div>
                    <div class="basis-1/4 text-sm">2D : <span class="text-sm link-accent">{count_line_2d}</span></div>
                    <div class="basis-1/4 text-sm">2D DEPAN : <span class="text-sm link-accent">{count_line_2dd}</span></div>
                    <div class="basis-1/4 text-sm">2D TENGAH : <span class="text-sm link-accent">{count_line_2dt}</span></div>
                </div>
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
                            {#if temp_permainan_tab != '432BOLAKBALIK'}
                            <th width="1%" class="text-[11px] text-center">#</th>
                            {/if}
                            <th width="*" class="text-[11px] text-center">NOMOR</th>
                            <th width="10%" class="text-[11px] text-center">TIPE</th>
                            <th width="10%" class="text-[11px] text-center">PERMAINAN</th>
                            <th width="15%" class="text-[11px] text-right">BET</th>
                            <th width="15%" class="text-[11px] text-right">DISKON</th>
                            <th width="15%" class="text-[11px] text-right">BAYAR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each keranjang as rec (rec)}
                            <tr >
                                {#if temp_permainan_tab != '432BOLAKBALIK'}
                                    <th 
                                        class="cursor-pointer"
                                        on:click={() => {
                                            handleRemoveKeranjang(rec.id, rec.bayar,rec.nomor,rec.tipetoto,rec.permainan,rec.bet,rec.diskon,rec.diskonpercen);
                                        }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </th>
                                {/if}
                                <th class="text-[11px] text-center">{rec.nomor}</th>
                                <td class="text-[11px] text-center">{rec.tipetoto}</td>
                                <td class="text-[11px] text-center">{rec.permainan}</td>
                                <td class="text-[11px] text-right link-accent">{new Intl.NumberFormat().format(rec.bet)}</td>
                                <td class="text-[11px] text-right link-accent">{new Intl.NumberFormat().format( Math.ceil(rec.diskon))} ({(rec.diskonpercen * 100).toFixed(2)}%)</td>
                                <td class="text-[11px] text-right link-accent">{new Intl.NumberFormat().format(rec.bayar)}</td>
                            </tr>
                        {/each}
                    </tbody>
                </table>    
            </div>
            <div class="bg-base-300 p-2 shadow-lg">
                <div class="text-xs">TOTAL LINE : <span class="text-xs link-accent">{count_line}</span></div>
                <div class="grid grid-cols-3">
                    <div class="text-[11px]">4D : <span class="text-xs link-accent">{count_line_4d}</span></div>
                    <div class="text-[11px]">3D : <span class="text-xs link-accent">{count_line_3d}</span></div>
                    <div class="text-[11px]">3D DEPAN : <span class="text-xs link-accent">{count_line_3dd}</span></div>
                    <div class="text-[11px]">2D : <span class="text-xs link-accent">{count_line_2d}</span></div>
                    <div class="text-[11px]">2D DEPAN : <span class="text-xs link-accent">{count_line_2dd}</span></div>
                    <div class="text-[11px]">2D TENGAH : <span class="text-xs link-accent">{count_line_2dt}</span></div>
                </div>
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
        <div class="modal-box relative w-11/12 max-w-2xl h-[600px] overflow-hidden select-none">
            <label for="my-modal-information" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 class="text-xs lg:text-sm font-bold mt-1">INFORMASI</h3>
            <div class="h-[32rem] overflow-auto scrollbar-hide" >
                <div class="overflow-auto scrollbar-thin scrollbar-thumb-green-300">
                    <table class="table table-compact w-full" >
                        <thead>
                            <tr>
                                <th class="text-xs text-left align-top"></th>
                                <th class="text-xs text-right align-top">4D</th>
                                <th class="text-xs text-right align-top">3D</th>
                                <th class="text-xs text-right align-top">3DD <br> 3D DEPAN</th>
                                <th class="text-xs text-right align-top">2D</th>
                                <th class="text-xs text-right align-top">2DD <br> 2D DEPAN</th>
                                <th class="text-xs text-right align-top">2DT <br> 2D TENGAH</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th class="text-xs text-left">MIN BET</th>
                                <td class="text-xs text-right link-accent">{new Intl.NumberFormat().format(minimal_bet)}</td>
                                <td class="text-xs text-right link-accent">{new Intl.NumberFormat().format(minimal_bet)}</td>
                                <td class="text-xs text-right link-accent">{new Intl.NumberFormat().format(minimal_bet)}</td>
                                <td class="text-xs text-right link-accent">{new Intl.NumberFormat().format(minimal_bet)}</td>
                                <td class="text-xs text-right link-accent">{new Intl.NumberFormat().format(minimal_bet)}</td>
                                <td class="text-xs text-right link-accent">{new Intl.NumberFormat().format(minimal_bet)}</td>
                            </tr>
                            <tr>
                                <th class="text-xs text-left">MAX BET</th>
                                <td class="text-xs text-right link-accent">{new Intl.NumberFormat().format(max4d_bet)}</td>
                                <td class="text-xs text-right link-accent">{new Intl.NumberFormat().format(max3d_bet)}</td>
                                <td class="text-xs text-right link-accent">{new Intl.NumberFormat().format(max3dd_bet)}</td>
                                <td class="text-xs text-right link-accent">{new Intl.NumberFormat().format(max2d_bet)}</td>
                                <td class="text-xs text-right link-accent">{new Intl.NumberFormat().format(max2dd_bet)}</td>
                                <td class="text-xs text-right link-accent">{new Intl.NumberFormat().format(max2dt_bet)}</td>
                            </tr>
                            <tr>
                                <th class="text-xs text-left">DISKON</th>
                                <td class="text-xs text-right link-accent">{(disc4d_bet * 100).toFixed(2)}%</td>
                                <td class="text-xs text-right link-accent">{(disc3d_bet * 100).toFixed(2)}%</td>
                                <td class="text-xs text-right link-accent">{(disc3dd_bet * 100).toFixed(2)}%</td>
                                <td class="text-xs text-right link-accent">{(disc2d_bet * 100).toFixed(2)}%</td>
                                <td class="text-xs text-right link-accent">{(disc2dd_bet * 100).toFixed(2)}%</td>
                                <td class="text-xs text-right link-accent">{(disc2dt_bet * 100).toFixed(2)}%</td>
                            </tr>
                            <tr>
                                <th class="text-xs text-left">HADIAH</th>
                                <td class="text-xs text-right link-accent">{win4d_bet}x</td>
                                <td class="text-xs text-right link-accent">{win3d_bet}x</td>
                                <td class="text-xs text-right link-accent">{win3dd_bet}x</td>
                                <td class="text-xs text-right link-accent">{win2d_bet}x</td>
                                <td class="text-xs text-right link-accent">{win2dd_bet}x</td>
                                <td class="text-xs text-right link-accent">{win2dt_bet}x</td>
                            </tr>
                            <tr>
                                <th class="text-xs text-left">HADIAH FULL</th>
                                <td class="text-xs text-right link-accent">{win4dnodiskon_bet}x</td>
                                <td class="text-xs text-right link-accent">{win3dnodiskon_bet}x</td>
                                <td class="text-xs text-right link-accent">{win3ddnodiskon_bet}x</td>
                                <td class="text-xs text-right link-accent">{win2dnodiskon_bet}x</td>
                                <td class="text-xs text-right link-accent">{win2ddnodiskon_bet}x</td>
                                <td class="text-xs text-right link-accent">{win2dtnodiskon_bet}x</td>
                            </tr>
                            <tr>
                                <th class="text-xs text-left">HADIAH BB KENA</th>
                                <td class="text-xs text-right link-accent">{win4dbb_kena_bet}x</td>
                                <td class="text-xs text-right link-accent">{win3dbb_kena_bet}x</td>
                                <td class="text-xs text-right link-accent">{win3ddbb_kena_bet}x</td>
                                <td class="text-xs text-right link-accent">{win2dbb_kena_bet}x</td>
                                <td class="text-xs text-right link-accent">{win2ddbb_kena_bet}x</td>
                                <td class="text-xs text-right link-accent">{win2dtbb_kena_bet}x</td>
                            </tr>
                            <tr>
                                <th class="text-xs text-left">HADIAH BB</th>
                                <td class="text-xs text-right link-accent">{win4dbb_bet}x</td>
                                <td class="text-xs text-right link-accent">{win3dbb_bet}x</td>
                                <td class="text-xs text-right link-accent">{win3ddbb_bet}x</td>
                                <td class="text-xs text-right link-accent">{win2dbb_bet}x</td>
                                <td class="text-xs text-right link-accent">{win2ddbb_bet}x</td>
                                <td class="text-xs text-right link-accent">{win2dtbb_bet}x</td>
                            </tr>
                            <tr>
                                <th class="text-xs text-left">LIMIT LINE</th>
                                <td class="text-xs text-right link-accent">{new Intl.NumberFormat().format(limitline_4d)}</td>
                                <td class="text-xs text-right link-accent">{new Intl.NumberFormat().format(limitline_3d)}</td>
                                <td class="text-xs text-right link-accent">{new Intl.NumberFormat().format(limitline_3dd)}</td>
                                <td class="text-xs text-right link-accent">{new Intl.NumberFormat().format(limitline_2d)}</td>
                                <td class="text-xs text-right link-accent">{new Intl.NumberFormat().format(limitline_2dd)}</td>
                                <td class="text-xs text-right link-accent">{new Intl.NumberFormat().format(limitline_2dt)}</td>
                            </tr>
                        </tbody>
                    </table>    
                </div>
                <p class="py-2 text-xs">
                    <b>Contoh Penulisan 4D/3D/2D:</b><br />
                    1234 : 4D<br /> 
                    123 : 3D<br /> 
                    *123 : 3D<br /> 
                    123* : 3DD / 3D DEPAN<br /> 
                    12 : 2D <br />
                    **12 : 2D<br /> 
                    12** : 2DD / 2D DEPAN<br /> 
                    *12* : 2DT / 2D TENGAH
                    <br><br>
                    <b>CARA BERMAIN</b><br>
                    Menebak 4 angka, 3 angka dan 2 angka
                    <br />
                    Struktur ABCD<br /><br />
    
                    Misalnya keluar : 4321<br />
                    Berarti pemenang untuk<br />
                    4D = 4321<br />
                    3D = 321<br />
                    3DD / 3D DEPAN = 432<br />
                    2D = 21<br />
                    2DD / 2D DEPAN = 43<br />
                    2DT / 2D TENGAH = 32<br /><br />
    
                    Aturan permainan:<br />
                    1. Jika anda membeli diluar dari nomor yang dikeluarkan, berarti
                    anda kalah dan uang tidak dikembalikan sama sekali.<br />
                    2. Jika anda membeli masing 100rb untuk angka :<br />
                    4D = 4321<br />
                    3D = 321<br />
                    2D = 21<br /><br />
                    Berarti kemenangan anda adalah :<br />
                    4D = 100rb x [Indeks kemenangan untuk 4D]<br />
                    3D = 100rb x [Indeks kemenangan untuk 3D]<br />
                    2D = 100rb x [Indeks kemenangan untuk 2D]<br /><br />
                    (Catatan: nilai bet 100rb tidak dikembalikan ke member)<br/>
                    (Khusus untuk 4D,3D dan 2D diberikan diskon tambahan)<br /><br/>
                    <b>3D Posisi</b><br>
                    Struktur: ABCD<br/>
                    Misalnya keluar nomor = 1234<br/>
                    berati pemenang untuk 3D Depan / 3DD adalah = 123<br/>
                    berati pemenang untuk 3D Belakang / 3D adalah = 234 <br/><br/>
                    <b>2D Posisi</b><br>
                    Struktur: ABCD<br/>
                    Misalnya keluar nomor = 1234<br/>
                    berati pemenang untuk 2D Depan / 2DD adalah = 12<br/>
                    berati pemenang untuk 2D Tengah / 2DT adalah = 23<br/>
                    berati pemenang untuk 2D Belakang / 2D adalah = 34 <br/>
                </p>
            </div>
        </div>
    </div>
{:else}
    <input type="checkbox" id="my-modal-information" class="modal-toggle" bind:checked={isModalInformation}>
    <div class="modal" on:click|self={()=>isModalInformation = false}>
        <div class="modal-box relative max-w-full  w-full h-screen  rounded-none  p-0 m-0 overflow-hidden">
            <div class="border-b-2 border-base-200 p-2 h-11 w-full max-w-full">
                <label for="my-modal-information" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 class="text-xs lg:text-sm font-bold mt-2">INFORMASI: 4D/3D/2D</h3>
            </div>
            <div class="h-full  flex flex-col justify-items-stretch items-stretch mt-1 ">
                <div class="h-full w-full scrollbar-thin scrollbar-thumb-green-300 overflow-auto p-2">
                    <div class="overflow-auto ">
                        <table class="table table-compact w-full" >
                            <thead>
                                <tr>
                                    <th>&nbsp;</th>
                                    <th class="text-[11px] text-right align-top">4D</th>
                                    <th class="text-[11px] text-right align-top">3D</th>
                                    <th class="text-[11px] text-right align-top">3DD</th>
                                    <th class="text-[11px] text-right align-top">2D</th>
                                    <th class="text-[11px] text-right align-top">2DD</th>
                                    <th class="text-[11px] text-right align-top">2DT</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th class="text-[11px] text-left">MIN BET</th>
                                    <td class="text-[11px] text-right link-accent">{new Intl.NumberFormat().format(minimal_bet)}</td>
                                    <td class="text-[11px] text-right link-accent">{new Intl.NumberFormat().format(minimal_bet)}</td>
                                    <td class="text-[11px] text-right link-accent">{new Intl.NumberFormat().format(minimal_bet)}</td>
                                    <td class="text-[11px] text-right link-accent">{new Intl.NumberFormat().format(minimal_bet)}</td>
                                    <td class="text-[11px] text-right link-accent">{new Intl.NumberFormat().format(minimal_bet)}</td>
                                    <td class="text-[11px] text-right link-accent">{new Intl.NumberFormat().format(minimal_bet)}</td>
                                </tr>
                                <tr>
                                    <th class="text-[11px] text-left">MAX BET</th>
                                    <td class="text-[11px] text-right link-accent">{new Intl.NumberFormat().format(max4d_bet)}</td>
                                    <td class="text-[11px] text-right link-accent">{new Intl.NumberFormat().format(max3d_bet)}</td>
                                    <td class="text-[11px] text-right link-accent">{new Intl.NumberFormat().format(max3dd_bet)}</td>
                                    <td class="text-[11px] text-right link-accent">{new Intl.NumberFormat().format(max2d_bet)}</td>
                                    <td class="text-[11px] text-right link-accent">{new Intl.NumberFormat().format(max2dd_bet)}</td>
                                    <td class="text-[11px] text-right link-accent">{new Intl.NumberFormat().format(max2dt_bet)}</td>
                                </tr>
                                <tr>
                                    <th class="text-[11px] text-left">DISKON</th>
                                    <td class="text-[11px] text-right link-accent">{(disc4d_bet * 100).toFixed(2)}%</td>
                                    <td class="text-[11px] text-right link-accent">{(disc3d_bet * 100).toFixed(2)}%</td>
                                    <td class="text-[11px] text-right link-accent">{(disc3dd_bet * 100).toFixed(2)}%</td>
                                    <td class="text-[11px] text-right link-accent">{(disc2d_bet * 100).toFixed(2)}%</td>
                                    <td class="text-[11px] text-right link-accent">{(disc2dd_bet * 100).toFixed(2)}%</td>
                                    <td class="text-[11px] text-right link-accent">{(disc2dt_bet * 100).toFixed(2)}%</td>
                                </tr>
                                <tr>
                                    <th class="text-[11px] text-left">HADIAH</th>
                                    <td class="text-[11px] text-right link-accent">{win4d_bet}x</td>
                                    <td class="text-[11px] text-right link-accent">{win3d_bet}x</td>
                                    <td class="text-[11px] text-right link-accent">{win3dd_bet}x</td>
                                    <td class="text-[11px] text-right link-accent">{win2d_bet}x</td>
                                    <td class="text-[11px] text-right link-accent">{win2dd_bet}x</td>
                                    <td class="text-[11px] text-right link-accent">{win2dt_bet}x</td>
                                </tr>
                                <tr>
                                    <th class="text-[11px] text-left">HADIAH FULL</th>
                                    <td class="text-[11px] text-right link-accent">{win4dnodiskon_bet}x</td>
                                    <td class="text-[11px] text-right link-accent">{win3dnodiskon_bet}x</td>
                                    <td class="text-[11px] text-right link-accent">{win3ddnodiskon_bet}x</td>
                                    <td class="text-[11px] text-right link-accent">{win2dnodiskon_bet}x</td>
                                    <td class="text-[11px] text-right link-accent">{win2ddnodiskon_bet}x</td>
                                    <td class="text-[11px] text-right link-accent">{win2dtnodiskon_bet}x</td>
                                </tr>
                                <tr>
                                    <th class="text-[11px] text-left">HADIAH BB KENA</th>
                                    <td class="text-[11px] text-right link-accent">{win4dbb_kena_bet}x</td>
                                    <td class="text-[11px] text-right link-accent">{win3dbb_kena_bet}x</td>
                                    <td class="text-[11px] text-right link-accent">{win3ddbb_kena_bet}x</td>
                                    <td class="text-[11px] text-right link-accent">{win2dbb_kena_bet}x</td>
                                    <td class="text-[11px] text-right link-accent">{win2ddbb_kena_bet}x</td>
                                    <td class="text-[11px] text-right link-accent">{win2dtbb_kena_bet}x</td>
                                </tr>
                                <tr>
                                    <th class="text-[11px] text-left">HADIAH BB</th>
                                    <td class="text-[11px] text-right link-accent">{win4dbb_bet}x</td>
                                    <td class="text-[11px] text-right link-accent">{win3dbb_bet}x</td>
                                    <td class="text-[11px] text-right link-accent">{win3ddbb_bet}x</td>
                                    <td class="text-[11px] text-right link-accent">{win2dbb_bet}x</td>
                                    <td class="text-[11px] text-right link-accent">{win2ddbb_bet}x</td>
                                    <td class="text-[11px] text-right link-accent">{win2dtbb_bet}x</td>
                                </tr>
                                <tr>
                                    <th class="text-[11px] text-left">LIMIT LINE</th>
                                    <td class="text-[11px] text-right link-accent">{new Intl.NumberFormat().format(limitline_4d)}</td>
                                    <td class="text-[11px] text-right link-accent">{new Intl.NumberFormat().format(limitline_3d)}</td>
                                    <td class="text-[11px] text-right link-accent">{new Intl.NumberFormat().format(limitline_3dd)}</td>
                                    <td class="text-[11px] text-right link-accent">{new Intl.NumberFormat().format(limitline_2d)}</td>
                                    <td class="text-[11px] text-right link-accent">{new Intl.NumberFormat().format(limitline_2dd)}</td>
                                    <td class="text-[11px] text-right link-accent">{new Intl.NumberFormat().format(limitline_2dt)}</td>
                                </tr>
                            </tbody>
                        </table>    
                    </div>
                    <p class="text-[11px] ">
                        <b>Contoh Penulisan 4D/3D/2D:</b><br />
                        1234 : 4D<br /> 
                        123 : 3D<br /> 
                        *123 : 3D<br /> 
                        123* : 3DD / 3D DEPAN<br /> 
                        12 : 2D <br />
                        **12 : 2D<br /> 
                        12** : 2DD / 2D DEPAN<br /> 
                        *12* : 2DT / 2D TENGAH
                        <br><br>
                        <b>CARA BERMAIN</b><br>
                        Menebak 4 angka, 3 angka dan 2 angka
                        <br />
                        Struktur ABCD<br /><br />
        
                        Misalnya keluar : 4321<br />
                        Berarti pemenang untuk<br />
                        4D = 4321<br />
                        3D = 321<br />
                        3DD / 3D DEPAN = 432<br />
                        2D = 21<br />
                        2DD / 2D DEPAN = 43<br />
                        2DT / 2D TENGAH = 32<br /><br />
        
                        Aturan permainan:<br />
                        1. Jika anda membeli diluar dari nomor yang dikeluarkan, berarti
                        anda kalah dan uang tidak dikembalikan sama sekali.<br />
                        2. Jika anda membeli masing 100rb untuk angka :<br />
                        4D = 4321<br />
                        3D = 321<br />
                        2D = 21<br /><br />
                        Berarti kemenangan anda adalah :<br />
                        4D = 100rb x [Indeks kemenangan untuk 4D]<br />
                        3D = 100rb x [Indeks kemenangan untuk 3D]<br />
                        2D = 100rb x [Indeks kemenangan untuk 2D]<br /><br />
                        (Catatan: nilai bet 100rb tidak dikembalikan ke member)<br/>
                        (Khusus untuk 4D,3D dan 2D diberikan diskon tambahan)<br /><br/>
                        <b>3D Posisi</b><br>
                        Struktur: ABCD<br/>
                        Misalnya keluar nomor = 1234<br/>
                        berati pemenang untuk 3D Depan / 3DD adalah = 123<br/>
                        berati pemenang untuk 3D Belakang / 3D adalah = 234 <br/><br/>
                        <b>2D Posisi</b><br>
                        Struktur: ABCD<br/>
                        Misalnya keluar nomor = 1234<br/>
                        berati pemenang untuk 2D Depan / 2DD adalah = 12<br/>
                        berati pemenang untuk 2D Tengah / 2DT adalah = 23<br/>
                        berati pemenang untuk 2D Belakang / 2D adalah = 34 <br/>
                    </p>
                </div>
                <div class="h-20 w-full">&nbsp;</div>
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
        Tipe : {temp_tipe} <br>
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




