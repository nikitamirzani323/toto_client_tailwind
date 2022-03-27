<script>
    import { createEventDispatcher } from "svelte";
    import Button_custom1 from "../component/Button_custom1.svelte";
    import Button_custom2 from "../component/Button_custom2.svelte";

    export let keranjang = [];
    export let totalkeranjang = 0;
    export let card_custom = "";
    export let client_device = "";
    export let count_line_dasar = 0;
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
        if(e == 'Y'){
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
        if(e == "Y"){
            dispatch("handleSave", "save");
        }
        isModalAlert_belanja = false;
    };
    
    $: count_line = count_line_dasar + count_line_standart;
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
                                        handleRemoveKeranjang(rec.id, rec.bayar,rec.nomor,rec.permainan,rec.bet,rec.diskon,rec.diskonpercen,rec.kei,rec.kei_percen);
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
                                        handleRemoveKeranjang(rec.id, rec.bayar,rec.nomor,rec.permainan,rec.bet,rec.diskon,rec.diskonpercen,rec.kei,rec.kei_percen);
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
        <div class="modal-box relative max-w-full lg:max-w-xl h-full max-h-full rounded-none lg:rounded-lg p-2 lg:p-4 overflow-auto scrollbar-hide">
            <label for="my-modal-information" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 class="text-xs lg:text-sm font-bold mt-1">INFORMASI</h3>
            <div class="h-[40rem] mt-4" >
                <div class="overflow-auto scrollbar-hide">
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
            Kei : <span class="text-sm link-accent">{new Intl.NumberFormat().format( Math.ceil(temp_kei))} ({(temp_keipercen * 100).toFixed(2)}%)</span> <br>
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
            Total Transaksi : <span class="text-sm link-accent">{new Intl.NumberFormat().format(totalkeranjang)}</span>
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
