<script>
    import { createEventDispatcher } from "svelte";
    import Button_custom1 from "../component/Button_custom1.svelte";
    import Button_custom2 from "../component/Button_custom2.svelte";

    export let keranjang = [];
    export let totalkeranjang = 0;
    export let card_custom = "";
    export let client_device = "";
    export let group_btn_beli = false;
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
    let dispatch = createEventDispatcher();
    const handleInformation = () => {
        isModalInformation = true
    };
    const handleRemoveKeranjang = (idkeranjang, bayar) => {
        dispatch("removekeranjang", {
            idkeranjang,
            bayar,
        });
    };
    const handleRemoveKeranjang_all = () => {
        dispatch("removekeranjangall", "all");
    };
    const handleSave = () => {
        dispatch("handleSave", "save");
    };
    
    $: count_line =
        count_line_4d +
        count_line_3d +
        count_line_3dd +
        count_line_2d +
        count_line_2dd +
        count_line_2dt;
</script>
<div class="card bg-base-200 shadow-xl mt-5 rounded-md {card_custom}">
    <div class="card-body p-3">
        {#if client_device == "WEBSITE"}
            <h2 class="card-title text-lg grid grid-cols-2 gap-4">
                <div class="place-content-start text-left">
                    TOTAL BAYAR : <span class="text-md link-accent">{new Intl.NumberFormat().format(totalkeranjang)}</span>
                </div>
                <div class="place-content-end text-right">
                    <div class="flex">
                        <div class="flex-auto">
                            <Button_custom2
                                on:click={handleInformation}
                                button_block="btn-sm rounded-sm"
                                button_title="INFORMATION" />
                            <Button_custom1
                                on:click={handleRemoveKeranjang_all}
                                button_tipe="HAPUS"
                                button_block="btn-sm rounded-sm"
                                button_title="HAPUS" />
                            <Button_custom1
                                on:click={handleSave}
                                button_tipe="BELI"
                                button_block="btn-sm rounded-sm"
                                button_title="BELI" />
                            
                        </div>
                    </div>
                </div>
            </h2>
            <div class="overflow-auto shadow" style="height: 450px;">
                <table class="table-auto table table-zebra w-full" >
                    <thead>
                        <tr>
                            <th width="1%"></th>
                            <th width="*" class="text-sm text-center">NOMOR</th>
                            <th width="10%" class="text-sm text-center">TIPE</th>
                            <th width="10%" class="text-sm text-center">PERMAINAN</th>
                            <th width="15%" class="text-sm text-right">BET</th>
                            <th width="15%" class="text-sm text-right">DISKON</th>
                            <th width="15%" class="text-sm text-right">BAYAR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each keranjang as rec}
                        <tr>
                            <td 
                                class="cursor-pointer"
                                on:click={() => {
                                    handleRemoveKeranjang(rec.id, rec.bayar);
                                }}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </td>
                            <td class="text-sm text-center">{rec.nomor}</td>
                            <td class="text-sm text-center">{rec.tipetoto}</td>
                            <td class="text-sm text-center">{rec.permainan}</td>
                            <td class="text-sm text-right link-accent">{new Intl.NumberFormat().format(rec.bet)}</td>
                            <td class="text-sm text-right link-accent">{new Intl.NumberFormat().format( Math.ceil(rec.diskon))} ({(rec.diskonpercen * 100).toFixed(2)}%)</td>
                            <td class="text-sm text-right link-accent">{new Intl.NumberFormat().format(rec.bayar)}</td>
                        </tr>
                        {/each}
                    </tbody>
                </table>    
            </div>
            <div class="text-sm">TOTAL LINE : <span class="text-sm link-accent">{count_line}</span></div>
            <div class="flex flex-row">
                <div class="basis-1/4 text-sm">4D : <span class="text-sm link-accent">{count_line_4d}</span></div>
                <div class="basis-1/4 text-sm">3D : <span class="text-sm link-accent">{count_line_3d}</span></div>
                <div class="basis-1/4 text-sm">3D DEPAN : <span class="text-sm link-accent">{count_line_3dd}</span></div>
                <div class="basis-1/4 text-sm">2D : <span class="text-sm link-accent">{count_line_2d}</span></div>
                <div class="basis-1/4 text-sm">2D DEPAN : <span class="text-sm link-accent">{count_line_2dd}</span></div>
                <div class="basis-1/4 text-sm">2D TENGAH : <span class="text-sm link-accent">{count_line_2dt}</span></div>
            </div>
        {:else}
            <div class="place-content-center text-center">
                <div class="flex">
                    <div class="flex-auto">
                        <Button_custom2
                            on:click={handleInformation}
                            button_block="btn-sm rounded-sm"
                            button_title="INFORMATION" />
                        <Button_custom1
                            on:click={handleRemoveKeranjang_all}
                            button_tipe="HAPUS"
                            button_block="btn-sm rounded-sm"
                            button_title="HAPUS" />
                        <Button_custom1
                            on:click={handleSave}
                            button_tipe="BELI"
                            button_block="btn-sm rounded-sm"
                            button_title="BELI" />
                    </div>
                </div>
            </div>
            <h2 class="card-title text-lg grid grid-cols-2 gap-4">
                <div class="place-content-start text-left text-sm">
                    TOTAL BAYAR : <span class="text-sm link-accent">{new Intl.NumberFormat().format(totalkeranjang)}</span>
                </div>
            </h2>
            <div class="overflow-auto shadow" style="height: 350px;">
                <table class="table-auto table table-zebra w-full" >
                    <thead>
                        <tr>
                            <th width="1%"></th>
                            <th width="*" class="text-sm text-center">NOMOR</th>
                            <th width="10%" class="text-sm text-center">TIPE</th>
                            <th width="10%" class="text-sm text-center">PERMAINAN</th>
                            <th width="15%" class="text-sm text-right">BET</th>
                            <th width="15%" class="text-sm text-right">DISKON</th>
                            <th width="15%" class="text-sm text-right">BAYAR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each keranjang as rec}
                        <tr>
                            <td 
                                class="cursor-pointer"
                                on:click={() => {
                                    handleRemoveKeranjang(rec.id, rec.bayar);
                                }}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </td>
                            <td class="text-sm text-center">{rec.nomor}</td>
                            <td class="text-sm text-center">{rec.tipetoto}</td>
                            <td class="text-sm text-center">{rec.permainan}</td>
                            <td class="text-sm text-right link-accent">{new Intl.NumberFormat().format(rec.bet)}</td>
                            <td class="text-sm text-right link-accent">{new Intl.NumberFormat().format( Math.ceil(rec.diskon))} ({(rec.diskonpercen * 100).toFixed(2)}%)</td>
                            <td class="text-sm text-right link-accent">{new Intl.NumberFormat().format(rec.bayar)}</td>
                        </tr>
                        {/each}
                    </tbody>
                </table>    
            </div>
            <div class="text-sm">TOTAL LINE : <span class="text-sm link-accent">{count_line}</span></div>
            <div class="grid grid-cols-2">
                <div class="text-sm">4D : <span class="text-sm link-accent">{count_line_4d}</span></div>
                <div class="text-sm">3D : <span class="text-sm link-accent">{count_line_3d}</span></div>
                <div class="text-sm">3D DEPAN : <span class="text-sm link-accent">{count_line_3dd}</span></div>
                <div class="text-sm">2D : <span class="text-sm link-accent">{count_line_2d}</span></div>
                <div class="text-sm">2D DEPAN : <span class="text-sm link-accent">{count_line_2dd}</span></div>
                <div class="text-sm">2D TENGAH : <span class="text-sm link-accent">{count_line_2dt}</span></div>
            </div>
        {/if}
    </div>
</div>

{#if client_device == "WEBSITE"}
    <input type="checkbox" id="my-modal-information" class="modal-toggle" bind:checked={isModalInformation}>
    <div class="modal" on:click|self={()=>isModalInformation = false}>
        <div class="modal-box relative w-11/12 max-w-4xl h-3/4">
            <label for="my-modal-information" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 class="text-lg font-bold">INFORMATION</h3>
            <div class="overflow-auto">
                <table class="table table-compact w-full" >
                    <thead>
                        <tr>
                            <th></th>
                            <th class="text-sm text-right align-top">4D</th>
                            <th class="text-sm text-right align-top">3D</th>
                            <th class="text-sm text-right align-top">3DD <br> 3D DEPAN</th>
                            <th class="text-sm text-right align-top">2D</th>
                            <th class="text-sm text-right align-top">2DD <br> 2D DEPAN</th>
                            <th class="text-sm text-right align-top">2DT <br> 2D TENGAH</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="text-sm text-left">MIN BET</td>
                            <td class="text-sm text-right link-accent">{new Intl.NumberFormat().format(minimal_bet)}</td>
                            <td class="text-sm text-right link-accent">{new Intl.NumberFormat().format(minimal_bet)}</td>
                            <td class="text-sm text-right link-accent">{new Intl.NumberFormat().format(minimal_bet)}</td>
                            <td class="text-sm text-right link-accent">{new Intl.NumberFormat().format(minimal_bet)}</td>
                            <td class="text-sm text-right link-accent">{new Intl.NumberFormat().format(minimal_bet)}</td>
                            <td class="text-sm text-right link-accent">{new Intl.NumberFormat().format(minimal_bet)}</td>
                        </tr>
                        <tr>
                            <td class="text-sm text-left">MAX BET</td>
                            <td class="text-sm text-right link-accent">{new Intl.NumberFormat().format(max4d_bet)}</td>
                            <td class="text-sm text-right link-accent">{new Intl.NumberFormat().format(max3d_bet)}</td>
                            <td class="text-sm text-right link-accent">{new Intl.NumberFormat().format(max3dd_bet)}</td>
                            <td class="text-sm text-right link-accent">{new Intl.NumberFormat().format(max2d_bet)}</td>
                            <td class="text-sm text-right link-accent">{new Intl.NumberFormat().format(max2dd_bet)}</td>
                            <td class="text-sm text-right link-accent">{new Intl.NumberFormat().format(max2dt_bet)}</td>
                        </tr>
                        <tr>
                            <td class="text-sm text-left">DISKON</td>
                            <td class="text-sm text-right link-accent">{(disc4d_bet * 100).toFixed(2)}%</td>
                            <td class="text-sm text-right link-accent">{(disc3d_bet * 100).toFixed(2)}%</td>
                            <td class="text-sm text-right link-accent">{(disc3dd_bet * 100).toFixed(2)}%</td>
                            <td class="text-sm text-right link-accent">{(disc2d_bet * 100).toFixed(2)}%</td>
                            <td class="text-sm text-right link-accent">{(disc2dd_bet * 100).toFixed(2)}%</td>
                            <td class="text-sm text-right link-accent">{(disc2dt_bet * 100).toFixed(2)}%</td>
                        </tr>
                        <tr>
                            <td class="text-sm text-left">HADIAH</td>
                            <td class="text-sm text-right link-accent">{win4d_bet}x</td>
                            <td class="text-sm text-right link-accent">{win3d_bet}x</td>
                            <td class="text-sm text-right link-accent">{win3dd_bet}x</td>
                            <td class="text-sm text-right link-accent">{win2d_bet}x</td>
                            <td class="text-sm text-right link-accent">{win2dd_bet}x</td>
                            <td class="text-sm text-right link-accent">{win2dt_bet}x</td>
                        </tr>
                        <tr>
                            <td class="text-sm text-left">HADIAH FULL</td>
                            <td class="text-sm text-right link-accent">{win4dnodiskon_bet}x</td>
                            <td class="text-sm text-right link-accent">{win3dnodiskon_bet}x</td>
                            <td class="text-sm text-right link-accent">{win3ddnodiskon_bet}x</td>
                            <td class="text-sm text-right link-accent">{win2dnodiskon_bet}x</td>
                            <td class="text-sm text-right link-accent">{win2ddnodiskon_bet}x</td>
                            <td class="text-sm text-right link-accent">{win2dtnodiskon_bet}x</td>
                        </tr>
                        <tr>
                            <td class="text-sm text-left">HADIAH BB KENA</td>
                            <td class="text-sm text-right link-accent">{win4dbb_kena_bet}x</td>
                            <td class="text-sm text-right link-accent">{win3dbb_kena_bet}x</td>
                            <td class="text-sm text-right link-accent">{win3ddbb_kena_bet}x</td>
                            <td class="text-sm text-right link-accent">{win2dbb_kena_bet}x</td>
                            <td class="text-sm text-right link-accent">{win2ddbb_kena_bet}x</td>
                            <td class="text-sm text-right link-accent">{win2dtbb_kena_bet}x</td>
                        </tr>
                        <tr>
                            <td class="text-sm text-left">HADIAH BB</td>
                            <td class="text-sm text-right link-accent">{win4dbb_bet}x</td>
                            <td class="text-sm text-right link-accent">{win3dbb_bet}x</td>
                            <td class="text-sm text-right link-accent">{win3ddbb_bet}x</td>
                            <td class="text-sm text-right link-accent">{win2dbb_bet}x</td>
                            <td class="text-sm text-right link-accent">{win2ddbb_bet}x</td>
                            <td class="text-sm text-right link-accent">{win2dtbb_bet}x</td>
                        </tr>
                        <tr>
                            <td class="text-sm text-left">LIMIT LINE</td>
                            <td class="text-sm text-right link-accent">{new Intl.NumberFormat().format(limitline_4d)}</td>
                            <td class="text-sm text-right link-accent">{new Intl.NumberFormat().format(limitline_3d)}</td>
                            <td class="text-sm text-right link-accent">{new Intl.NumberFormat().format(limitline_3dd)}</td>
                            <td class="text-sm text-right link-accent">{new Intl.NumberFormat().format(limitline_2d)}</td>
                            <td class="text-sm text-right link-accent">{new Intl.NumberFormat().format(limitline_2dd)}</td>
                            <td class="text-sm text-right link-accent">{new Intl.NumberFormat().format(limitline_2dt)}</td>
                        </tr>
                    </tbody>
                </table>    
            </div>
            <p class="py-2 h-72 overflow-y-scroll text-sm">
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
{:else}
<input type="checkbox" id="my-modal-information" class="modal-toggle" bind:checked={isModalInformation}>
<div class="modal " on:click|self={()=>isModalInformation = false}>
    <div class="modal-box relative w-11/12 max-w-4xl h-5/6 p-4 rounded-none">
        <label for="my-modal-information" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 class="text-lg font-bold">INFORMATION</h3>
        <div class="overflow-auto">
            <table class="table-auto table table-compact w-full" >
                <thead>
                    <tr>
                        <th>&nbsp;</th>
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
                        <td class="text-xs text-left">MIN BET</td>
                        <td class="text-xs text-right link-accent">{new Intl.NumberFormat().format(minimal_bet)}</td>
                        <td class="text-xs text-right link-accent">{new Intl.NumberFormat().format(minimal_bet)}</td>
                        <td class="text-xs text-right link-accent">{new Intl.NumberFormat().format(minimal_bet)}</td>
                        <td class="text-xs text-right link-accent">{new Intl.NumberFormat().format(minimal_bet)}</td>
                        <td class="text-xs text-right link-accent">{new Intl.NumberFormat().format(minimal_bet)}</td>
                        <td class="text-xs text-right link-accent">{new Intl.NumberFormat().format(minimal_bet)}</td>
                    </tr>
                    <tr>
                        <td class="text-xs text-left">MAX BET</td>
                        <td class="text-xs text-right link-accent">{new Intl.NumberFormat().format(max4d_bet)}</td>
                        <td class="text-xs text-right link-accent">{new Intl.NumberFormat().format(max3d_bet)}</td>
                        <td class="text-xs text-right link-accent">{new Intl.NumberFormat().format(max3dd_bet)}</td>
                        <td class="text-xs text-right link-accent">{new Intl.NumberFormat().format(max2d_bet)}</td>
                        <td class="text-xs text-right link-accent">{new Intl.NumberFormat().format(max2dd_bet)}</td>
                        <td class="text-xs text-right link-accent">{new Intl.NumberFormat().format(max2dt_bet)}</td>
                    </tr>
                    <tr>
                        <td class="text-xs text-left">DISKON</td>
                        <td class="text-xs text-right link-accent">{(disc4d_bet * 100).toFixed(2)}%</td>
                        <td class="text-xs text-right link-accent">{(disc3d_bet * 100).toFixed(2)}%</td>
                        <td class="text-xs text-right link-accent">{(disc3dd_bet * 100).toFixed(2)}%</td>
                        <td class="text-xs text-right link-accent">{(disc2d_bet * 100).toFixed(2)}%</td>
                        <td class="text-xs text-right link-accent">{(disc2dd_bet * 100).toFixed(2)}%</td>
                        <td class="text-xs text-right link-accent">{(disc2dt_bet * 100).toFixed(2)}%</td>
                    </tr>
                    <tr>
                        <td class="text-xs text-left">HADIAH</td>
                        <td class="text-xs text-right link-accent">{win4d_bet}x</td>
                        <td class="text-xs text-right link-accent">{win3d_bet}x</td>
                        <td class="text-xs text-right link-accent">{win3dd_bet}x</td>
                        <td class="text-xs text-right link-accent">{win2d_bet}x</td>
                        <td class="text-xs text-right link-accent">{win2dd_bet}x</td>
                        <td class="text-xs text-right link-accent">{win2dt_bet}x</td>
                    </tr>
                    <tr>
                        <td class="text-xs text-left">HADIAH FULL</td>
                        <td class="text-xs text-right link-accent">{win4dnodiskon_bet}x</td>
                        <td class="text-xs text-right link-accent">{win3dnodiskon_bet}x</td>
                        <td class="text-xs text-right link-accent">{win3ddnodiskon_bet}x</td>
                        <td class="text-xs text-right link-accent">{win2dnodiskon_bet}x</td>
                        <td class="text-xs text-right link-accent">{win2ddnodiskon_bet}x</td>
                        <td class="text-xs text-right link-accent">{win2dtnodiskon_bet}x</td>
                    </tr>
                    <tr>
                        <td class="text-xs text-left">HADIAH BB KENA</td>
                        <td class="text-xs text-right link-accent">{win4dbb_kena_bet}x</td>
                        <td class="text-xs text-right link-accent">{win3dbb_kena_bet}x</td>
                        <td class="text-xs text-right link-accent">{win3ddbb_kena_bet}x</td>
                        <td class="text-xs text-right link-accent">{win2dbb_kena_bet}x</td>
                        <td class="text-xs text-right link-accent">{win2ddbb_kena_bet}x</td>
                        <td class="text-xs text-right link-accent">{win2dtbb_kena_bet}x</td>
                    </tr>
                    <tr>
                        <td class="text-xs text-left">HADIAH BB</td>
                        <td class="text-xs text-right link-accent">{win4dbb_bet}x</td>
                        <td class="text-xs text-right link-accent">{win3dbb_bet}x</td>
                        <td class="text-xs text-right link-accent">{win3ddbb_bet}x</td>
                        <td class="text-xs text-right link-accent">{win2dbb_bet}x</td>
                        <td class="text-xs text-right link-accent">{win2ddbb_bet}x</td>
                        <td class="text-xs text-right link-accent">{win2dtbb_bet}x</td>
                    </tr>
                    <tr>
                        <td class="text-xs text-left">LIMIT LINE</td>
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
        <p class="py-4 text-xs">
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
{/if}