<script>
    import Card_placeholder from '../component/Placeholder.svelte'
    import Form432d from "../permainan/Form432d.svelte";
    import Formcolok from "../permainan/Formcolok.svelte";
    import Form5050 from "../permainan/Form5050.svelte";
    import Formmacau from "../permainan/Formmacau.svelte";
    import Formdasar from "../permainan/Formdasar.svelte";
    import Formshio from "../permainan/Formshio.svelte";

    export let path_api = "";
    export let client_token = "";
    export let client_company = "";
    export let client_username = "";
    export let client_credit = 0;
    export let client_ipaddress = "";
    export let client_timezone = "Asia/Jakarta";
    export let client_device = "";
    export let client_device_height_custom = "";
    export let pasaran_code = "";
    export let pasaran_name = "";
    export let pasaran_periode = 0;
    export let permainan = "";
    export let listkeluaran = [];
    
    
    let resultinvoice = [];
    let totalbayar_invoice = 0;
    let totalbet_invoice = 0;
    let row_keranjang = 0;
    let totalkeranjang = 0;
    let isModalAlert = false;
    let isModalAlertKeranjang = false;
    let msg_error = "";
    let idcomppasaran = "";
    let idtrxkeluaran = "";
    let permainan_title = "4D / 3D / 2D";
    let statuspasaran = "";
    let tab_bet_pasangan = true;
    let tab_bet_pasangan_class = "bg-base-300 rounded-lg outline outline-1 outline-offset-1 outline-green-600";
    let tab_bet_history_class = "";
    let permainan_432_class = "bg-green-700 grass text-white";
    let permainan_colok_class = "bg-base-200 ";
    let permainan_5050_class = "bg-base-200 ";
    let permainan_kombinasi_class = "bg-base-200 ";
    let permainan_dasar_class = "bg-base-200 ";
    let permainan_shio_class = "bg-base-200 ";
    async function checkpasaran() {
        const res = await fetch(path_api+"api/checkpasaran", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                company: client_company,
                timezone: client_timezone,
                pasaran_code: pasaran_code,
            }),
        });
        const json = await res.json();
        let record = json;
        if (json.status == "200") {
            isModalAlert = false;
        }
        idcomppasaran = record["pasaran_idcomp"];
        idtrxkeluaran = record["pasaran_idtransaction"];
        statuspasaran = record["pasaran_status"];
        pasaran_periode = record["pasaran_periode"];
        if (statuspasaran == "OFFLINE") {
            isModalAlert = true
            msg_error = "Pasaran OFFLINE";
        }
        if(client_device == "WEBSITE"){
            invoicebet("all");
        }
    }
    async function invoicebet(e) {
        const res = await fetch(path_api+"api/invoicebet", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                company: client_company,
                username: client_username,
                pasaran_code: pasaran_code,
                pasaran_periode: pasaran_periode,
                permainan: e,
                pasaran_idtransaction: parseInt(idtrxkeluaran),
            }),
        });
        const json = await res.json();
        let record = json.record;
        if (json.status == 200) {
            totalbayar_invoice = json.totalbayar;
            totalbet_invoice = json.totalbet;
            record = json.record;
            if (record != null) {
                for (var i = 0; i < record.length; i++) {
                    resultinvoice = [
                        ...resultinvoice,
                        {
                            permainan: record[i]["permainan"],
                            periode: record[i]["periode"],
                            tipe_betinvoice: record[i]["tipe"],
                            nomor: record[i]["nomor"],
                            bet: record[i]["bet"],
                            diskon: record[i]["diskon"],
                            kei: record[i]["kei"],
                            bayar: record[i]["bayar"],
                            win: record[i]["win"],
                            menang: record[i]["menang"],
                        },
                    ];
                }
            }
        }
    }
    
    const handleInvoice = (e) => {
        resultinvoice = [];
        invoicebet("all");
    };
    const handleKeranjang = (e) => {
        row_keranjang = e.detail.row_keranjang
        totalkeranjang = e.detail.totalkeranjang
    }
    const handleTabBet = (e) => {
        if(e == "Y"){
            tab_bet_pasangan = true;
            tab_bet_pasangan_class = "bg-base-300 rounded-lg outline outline-1 outline-offset-1 outline-green-600";
            tab_bet_history_class = "";
        }else{
            tab_bet_pasangan = false;
            tab_bet_pasangan_class = "";
            tab_bet_history_class = "bg-base-300 rounded-lg outline outline-1 outline-offset-1 outline-green-600";
            resultinvoice = [];
            invoicebet("all");
        }
    };
    const changePermainan = (e) => {
        if(row_keranjang > 0){
            isModalAlertKeranjang = true;
        }else{
            permainan = e;
            switch (e) {
                case "4-3-2":
                    permainan_title = "4D / 3D / 2D";
                    permainan_432_class = "bg-green-700 grass text-white";
                    permainan_colok_class = "bg-base-200 ";
                    permainan_5050_class = "bg-base-200 ";
                    permainan_kombinasi_class = "bg-base-200 ";
                    permainan_dasar_class = "bg-base-200 ";
                    permainan_shio_class = "bg-base-200 ";
                    break;
                case "colok":
                    permainan_title = "COLOK";
                    permainan_432_class = "bg-base-200";
                    permainan_colok_class = "bg-green-700 grass text-white ";
                    permainan_5050_class = "bg-base-200 ";
                    permainan_kombinasi_class = "bg-base-200 ";
                    permainan_dasar_class = "bg-base-200 ";
                    permainan_shio_class = "bg-base-200 ";
                    break;
                case "5050":
                    permainan_title = "50 - 50";
                    permainan_432_class = "bg-base-200";
                    permainan_colok_class = " ";
                    permainan_5050_class = "bg-green-700 grass text-white ";
                    permainan_kombinasi_class = "bg-base-200 ";
                    permainan_dasar_class = "bg-base-200 ";
                    permainan_shio_class = "bg-base-200 ";
                    break;
                case "kombinasi":
                    permainan_title = "MACAU / KOMBINASI";
                    permainan_432_class = "bg-base-200";
                    permainan_colok_class = "bg-base-200 ";
                    permainan_5050_class = "bg-base-200 ";
                    permainan_kombinasi_class = "bg-green-700 grass text-white";
                    permainan_dasar_class = "bg-base-200 ";
                    permainan_shio_class = "bg-base-200 ";
                    break;
                case "dasar":
                    permainan_title = "DASAR";
                    permainan_432_class = "bg-base-200";
                    permainan_colok_class = "bg-base-200 ";
                    permainan_5050_class = "bg-base-200 ";
                    permainan_kombinasi_class = "bg-base-200 ";
                    permainan_dasar_class = "bg-green-700 grass text-white";
                    permainan_shio_class = "bg-base-200 ";
                    break;
                case "shio":
                    permainan_title = "SHIO";
                    permainan_432_class = "bg-base-200 ";
                    permainan_colok_class = "bg-base-200 ";
                    permainan_5050_class = "bg-base-200 ";
                    permainan_kombinasi_class = "bg-base-200 ";
                    permainan_dasar_class = "bg-base-200 ";
                    permainan_shio_class = "bg-green-700 grass text-white";
                    break;
            }
        }
    };
    checkpasaran();
    let searchNomor = ""
    let filterTransaksi = []
    $: {
        if (searchNomor) {
            filterTransaksi = resultinvoice.filter(
                (item) =>
                    item.nomor
                        .toLowerCase()
                        .includes(searchNomor.toLowerCase()) 
            );
        } else {
            filterTransaksi = [...resultinvoice];
        }
    }
</script>

{#if statuspasaran == "ONLINE"}
    {#if client_device=="WEBSITE"}
        <div class="card shadow-xl bg-base-300  mt-5 rounded-md">
            <div class="card-body p-1">
                <div class="lg:flex lg:items-start">
                    <div class="hidden lg:flex lg:self-center">
                        <a href="/?token={client_token}" class="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                            </svg> 
                        </a>
                    </div>
                    <div class="grid grid-cols-3 self-center lg:flex lg:flex-1 lg:justify-center ">
                        <button
                            on:click={() => {
                                changePermainan("4-3-2");
                            }} 
                            type="button" class="modal-button text-sm {permainan_432_class} w-20 lg:w-32 py-2 m-2 rounded-md outline outline-1 outline-offset-1 outline-green-600">4D/3D/2D</button>
                        <button
                            on:click={() => {
                                changePermainan("colok");
                            }} 
                            type="button" class="modal-button text-sm {permainan_colok_class} w-20 lg:w-32 py-2 m-2 rounded-md outline outline-1 outline-offset-1 outline-green-600">COLOK</button>
                        <button
                            on:click={() => {
                                changePermainan("5050");
                            }} 
                            type="button" class="modal-button text-sm {permainan_5050_class} w-20 lg:w-32 py-2 m-2 rounded-md outline outline-1 outline-offset-1 outline-green-600">50-50</button>
                        <button
                            on:click={() => {
                                changePermainan("kombinasi");
                            }} 
                            type="button" class="modal-button text-sm {permainan_kombinasi_class} w-20 lg:w-32 py-2 m-2 rounded-md outline outline-1 outline-offset-1 outline-green-600">KOMBINASI</button>
                        <button
                            on:click={() => {
                                changePermainan("dasar");
                            }} 
                            type="button" class="modal-button text-sm {permainan_dasar_class} w-20 lg:w-32 py-2 m-2 rounded-md outline outline-1 outline-offset-1 outline-green-600">DASAR</button>
                        <button
                            on:click={() => {
                                changePermainan("shio");
                            }} 
                            type="button" class="modal-button text-sm {permainan_shio_class} w-20 lg:w-32 py-2 m-2 rounded-md outline outline-1 outline-offset-1 outline-green-600">SHIO</button>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="mt-5 gap-2 grid grid-cols-1 lg:grid-cols-2 ">
            <div>
                {#if permainan == "4-3-2"}
                    <Form432d
                        on:handleInvoice={handleInvoice}
                        on:handleKeranjang={handleKeranjang}
                        {path_api}
                        {idcomppasaran}
                        {idtrxkeluaran}
                        {client_token}
                        {client_company}
                        {client_username}
                        {client_timezone}
                        {client_ipaddress}
                        {client_device}
                        {pasaran_name}
                        {pasaran_code}
                        {pasaran_periode} 
                        {permainan_title}/>
                {/if}
                {#if permainan == "colok"}
                    <Formcolok
                        on:handleInvoice={handleInvoice}
                        on:handleKeranjang={handleKeranjang}
                        {path_api}
                        {idcomppasaran}
                        {idtrxkeluaran}
                        {client_token}
                        {client_company}
                        {client_username}
                        {client_timezone}
                        {client_ipaddress}
                        {client_device}
                        {pasaran_name}
                        {pasaran_code}
                        {pasaran_periode} 
                        {permainan_title}/>
                {/if}
                {#if permainan == "5050"}
                    <Form5050
                        on:handleInvoice={handleInvoice}
                        on:handleKeranjang={handleKeranjang}
                        {path_api}
                        {idcomppasaran}
                        {idtrxkeluaran}
                        {client_token}
                        {client_company}
                        {client_username}
                        {client_timezone}
                        {client_ipaddress}
                        {client_device}
                        {pasaran_name}
                        {pasaran_code}
                        {pasaran_periode} 
                        {permainan_title}/>
                {/if}
                {#if permainan == "kombinasi"}
                    <Formmacau
                        on:handleInvoice={handleInvoice}
                        on:handleKeranjang={handleKeranjang}
                        {path_api}
                        {idcomppasaran}
                        {idtrxkeluaran}
                        {client_token}
                        {client_company}
                        {client_username}
                        {client_timezone}
                        {client_ipaddress}
                        {client_device}
                        {pasaran_name}
                        {pasaran_code}
                        {pasaran_periode} 
                        {permainan_title}/>
                {/if}
                {#if permainan == "dasar"}
                    <Formdasar
                        on:handleInvoice={handleInvoice}
                        on:handleKeranjang={handleKeranjang}
                        {path_api}
                        {idcomppasaran}
                        {idtrxkeluaran}
                        {client_token}
                        {client_company}
                        {client_username}
                        {client_timezone}
                        {client_ipaddress}
                        {client_device}
                        {pasaran_name}
                        {pasaran_code}
                        {pasaran_periode} 
                        {permainan_title}/>
                {/if}
                {#if permainan == "shio"}
                    <Formshio
                        on:handleInvoice={handleInvoice}
                        on:handleKeranjang={handleKeranjang}
                        {path_api}
                        {idcomppasaran}
                        {idtrxkeluaran}
                        {client_token}
                        {client_company}
                        {client_username}
                        {client_timezone}
                        {client_ipaddress}
                        {client_device}
                        {pasaran_name}
                        {pasaran_code}
                        {pasaran_periode} 
                        {permainan_title}/>
                {/if}
            </div>
            <div class="card rounded-md bg-base-200 shadow-xl select-none">
                <div class="card-body p-3 overflow-hidden">
                    <h2 class="card-title text-sm lg:text-lg grid grid-cols-2 gap-4">
                        <div class="place-content-start text-left">
                            TOTAL BET : <span class="text-sm lg:text-lg link-accent">{new Intl.NumberFormat().format(totalbet_invoice)}</span>
                        </div>
                        <div class="place-content-end text-right">
                            TOTAL BAYAR : <span class="text-sm lg:text-lg link-accent">{new Intl.NumberFormat().format(totalbayar_invoice)}</span>
                        </div>
                    </h2>
                    <input
                        bind:value={searchNomor}
                        class="input w-full max-w-full rounded-sm"
                        placeholder="Search Nomor" 
                        type="text" name="" id="">
                    <div class="overflow-auto scrollbar-thin scrollbar-thumb-green-300 h-[50rem]">
                        <table class="table table-zebra w-full " >
                            <thead>
                                <tr>
                                    <th class="text-xs lg:text-sm text-center tracking-wide whitespace-nowrap">NOMOR</th>
                                    <th class="text-xs lg:text-sm text-center tracking-wide whitespace-nowrap">TIPE</th>
                                    <th class="text-xs lg:text-sm text-center tracking-wide whitespace-nowrap">PERMAINAN</th>
                                    <th class="text-xs lg:text-sm text-right tracking-wide whitespace-nowrap">BET</th>
                                    <th class="text-xs lg:text-sm text-right tracking-wide whitespace-nowrap">DISC(%)</th>
                                    <th class="text-xs lg:text-sm text-right tracking-wide whitespace-nowrap">KEI(%)</th>
                                    <th class="text-xs lg:text-sm text-right tracking-wide whitespace-nowrap">BAYAR</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                {#each filterTransaksi as rec}
                                    <tr>
                                        <th class="text-sm lg:text-sm text-center">{rec.nomor}</th>
                                        <td class="text-sm lg:text-sm text-center">{rec.tipe_betinvoice}</td>
                                        <td class="text-sm lg:text-sm text-center">{rec.permainan}</td>
                                        <td class="text-sm lg:text-sm text-right link-accent">{new Intl.NumberFormat().format(rec.bet)}</td>
                                        <td class="text-sm lg:text-sm text-right link-accent">{rec.diskon.toFixed(2)}</td>
                                        <td class="text-sm lg:text-sm text-right link-accent">{rec.kei.toFixed(2)}</td>
                                        <td class="text-sm lg:text-sm text-right link-accent">{new Intl.NumberFormat().format(rec.bayar)}</td>
                                    </tr>
                                {/each}
                               
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    {:else}
        <div class="flex justify-center items-center mx-2 gap-3 bg-base-200 shadow-lg">
            <div
                on:click={() => {
                    handleTabBet("Y");
                }} 
                class="{tab_bet_pasangan_class} p-2 text-xs lg:text-sm">TRANSAKSI</div>
            <div
                on:click={() => {
                    handleTabBet("N");
                }}
                class="{tab_bet_history_class} p-2 text-xs lg:text-sm">BET HISTORY</div>
        </div>
        
        {#if tab_bet_pasangan}
            <div tabindex="0" class="collapse collapse-arrow border border-base-200 bg-base-200 rounded-md mx-2 my-2">
                <input type="checkbox" class="peer"> 
                <div class="collapse-title text-sm font-normal">
                    PILIH PERMAINAN DIBAWAH INI
                </div>
                <div class="collapse-content"> 
                    <div class="grid grid-cols-3 gap-2 px-2">
                        <button
                            on:click={() => {
                                changePermainan("4-3-2");
                            }} 
                            type="button" class="modal-button text-xs {permainan_432_class} w-full py-2 m-2 rounded-md outline outline-1 outline-offset-1 outline-green-600">4D/3D/2D</button>
                        <button
                            on:click={() => {
                                changePermainan("colok");
                            }} 
                            type="button" class="modal-button text-xs {permainan_colok_class} w-full py-2 m-2 rounded-md outline outline-1 outline-offset-1 outline-green-600">COLOK</button>
                        <button
                            on:click={() => {
                                changePermainan("5050");
                            }} 
                            type="button" class="modal-button text-xs {permainan_5050_class} w-full py-2 m-2 rounded-md outline outline-1 outline-offset-1 outline-green-600">50-50</button>
                        <button
                            on:click={() => {
                                changePermainan("kombinasi");
                            }} 
                            type="button" class="modal-button text-xs {permainan_kombinasi_class} w-full py-2 m-2 rounded-md outline outline-1 outline-offset-1 outline-green-600">KOMBINASI</button>
                        <button
                            on:click={() => {
                                changePermainan("dasar");
                            }} 
                            type="button" class="modal-button text-xs {permainan_dasar_class} w-full py-2 m-2 rounded-md outline outline-1 outline-offset-1 outline-green-600">DASAR</button>
                        <button
                            on:click={() => {
                                changePermainan("shio");
                            }} 
                            type="button" class="modal-button text-xs {permainan_shio_class} w-full py-2 m-2 rounded-md outline outline-1 outline-offset-1 outline-green-600">SHIO</button>
                    </div>
                </div>
            </div>
            
            {#if permainan == "4-3-2"}
                <Form432d
                    on:handleInvoice={handleInvoice}
                    on:handleKeranjang={handleKeranjang}
                    {path_api}
                    {idcomppasaran}
                    {idtrxkeluaran}
                    {client_token}
                    {client_company}
                    {client_username}
                    {client_timezone}
                    {client_ipaddress}
                    {client_device}
                    {pasaran_name}
                    {pasaran_code}
                    {pasaran_periode} 
                    {permainan_title}/>
            {/if}
            {#if permainan == "colok"}
                <Formcolok
                    on:handleInvoice={handleInvoice}
                    on:handleKeranjang={handleKeranjang}
                    {path_api}
                    {idcomppasaran}
                    {idtrxkeluaran}
                    {client_token}
                    {client_company}
                    {client_username}
                    {client_timezone}
                    {client_ipaddress}
                    {client_device}
                    {pasaran_name}
                    {pasaran_code}
                    {pasaran_periode} 
                    {permainan_title}/>
            {/if}
            {#if permainan == "5050"}
                <Form5050
                    on:handleInvoice={handleInvoice}
                    on:handleKeranjang={handleKeranjang}
                    {path_api}
                    {idcomppasaran}
                    {idtrxkeluaran}
                    {client_token}
                    {client_company}
                    {client_username}
                    {client_timezone}
                    {client_ipaddress}
                    {client_device}
                    {pasaran_name}
                    {pasaran_code}
                    {pasaran_periode} 
                    {permainan_title}/>
            {/if}
            {#if permainan == "kombinasi"}
                <Formmacau
                    on:handleInvoice={handleInvoice}
                    on:handleKeranjang={handleKeranjang}
                    {path_api}
                    {idcomppasaran}
                    {idtrxkeluaran}
                    {client_token}
                    {client_company}
                    {client_username}
                    {client_timezone}
                    {client_ipaddress}
                    {client_device}
                    {pasaran_name}
                    {pasaran_code}
                    {pasaran_periode} 
                    {permainan_title}/>
            {/if}
            {#if permainan == "dasar"}
                <Formdasar
                    on:handleInvoice={handleInvoice}
                    on:handleKeranjang={handleKeranjang}
                    {path_api}
                    {idcomppasaran}
                    {idtrxkeluaran}
                    {client_token}
                    {client_company}
                    {client_username}
                    {client_timezone}
                    {client_ipaddress}
                    {client_device}
                    {pasaran_name}
                    {pasaran_code}
                    {pasaran_periode} 
                    {permainan_title}/>
            {/if}
            {#if permainan == "shio"}
                <Formshio
                    on:handleInvoice={handleInvoice}
                    on:handleKeranjang={handleKeranjang}
                    {path_api}
                    {idcomppasaran}
                    {idtrxkeluaran}
                    {client_token}
                    {client_company}
                    {client_username}
                    {client_timezone}
                    {client_ipaddress}
                    {client_device}
                    {pasaran_name}
                    {pasaran_code}
                    {pasaran_periode} 
                    {permainan_title}/>
            {/if}
        {:else}
            <div class="card rounded-md bg-base-200 shadow-xl mt-3" >
                <div class="card-body p-3">
                    <h2 class="card-title text-xs grid grid-cols-2 gap-4">
                        <div class="place-content-start text-left">
                            TOTAL BET : <span class="text-xs link-accent">{new Intl.NumberFormat().format(totalbet_invoice)}</span>
                        </div>
                        <div class="place-content-end text-right">
                            TOTAL BAYAR : <span class="text-xs link-accent">{new Intl.NumberFormat().format(totalbayar_invoice)}</span>
                        </div>
                    </h2>
                    <input
                        bind:value={searchNomor}
                        class="input w-full max-w-full rounded-sm"
                        placeholder="Search Nomor" 
                        type="text" name="" id="">
                        
                    <div class="overflow-auto scrollbar-thin scrollbar-thumb-green-100 h-[50rem]">
                        <table class="table table-zebra w-full" >
                            <thead>
                                <tr>
                                    <th class="text-xs text-center whitespace-nowrap">NOMOR</th>
                                    <th class="text-xs text-center whitespace-nowrap">TIPE</th>
                                    <th class="text-xs text-center whitespace-nowrap">PERMAINAN</th>
                                    <th class="text-xs text-right whitespace-nowrap">BET</th>
                                    <th class="text-xs text-right whitespace-nowrap">DISKON(%)</th>
                                    <th class="text-xs text-right whitespace-nowrap">KEI(%)</th>
                                    <th class="text-xs text-right whitespace-nowrap">BAYAR</th>
                                </tr>
                            </thead>
                            <tbody>
                                {#each filterTransaksi as rec}
                                    <tr>
                                        <th class="text-xs text-center whitespace-nowrap">{rec.nomor}</th>
                                        <td class="text-xs text-center whitespace-nowrap">{rec.tipe_betinvoice}</td>
                                        <td class="text-xs text-center whitespace-nowrap">{rec.permainan}</td>
                                        <td class="text-xs text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(rec.bet)}</td>
                                        <td class="text-xs text-right link-accent whitespace-nowrap">{rec.diskon.toFixed(2)}</td>
                                        <td class="text-xs text-right link-accent whitespace-nowrap">{rec.kei.toFixed(2)}</td>
                                        <td class="text-xs text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(rec.bayar)}</td>
                                    </tr>
                                {/each}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        {/if}
    {/if}
{:else if statuspasaran == ""}
    <div class="glass_bgplace border border-base-300 shadow rounded-md p-4 max-w-full w-full mx-auto mb-5 h-96"></div>
{/if}
<input type="checkbox" id="my-modal-alert" class="modal-toggle" bind:checked={isModalAlert}>
<div class="modal" on:click|self={()=>isModalAlert = false}>
    <div class="modal-box relative">
        <h3 class="text-lg font-bold">INFORMATION</h3>
        <p class="py-4">{@html msg_error}</p>
        <div class="modal-action">
            <a href="/?token={client_token}" class="btn btn-block">BACK</a>
        </div>
    </div>
</div>

<input type="checkbox" id="my-modal-alertkeranjang" class="modal-toggle" bind:checked={isModalAlertKeranjang}>
<div class="modal" >
    <div class="modal-box relative max-w-lg">
		<label for="my-modal-alertkeranjang" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 class="text-sm font-bold capitalize text-center mb-4">Saat Ini Anda Memiliki Transaksi:</h3>
        <p class="p-3 italic text-sm bg-base-200 rounded-md mb-4 mt-4">
            Total Belanja : <span class="text-sm link-accent">{new Intl.NumberFormat().format(totalkeranjang)}</span>
			Harap selesaikan Transaksi Sebelumnya, Sebelum Mengakses Halaman Lainnya
        </p>
    </div>
</div>
<style>
    .scrollbar-thin::-webkit-scrollbar {
      width: 3px;
      height: 3px;
    }
    .collapse-arrow .collapse-title:after {
        position: absolute;
        display: block;
        height: 0.5rem/* 8px */;
        width: 0.5rem/* 8px */;
        transition-property: all;
        transition-duration: 150ms;
        transition-duration: 0.2s;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        top: 1.1rem/* 22.4px */;
        right: 1.4rem/* 22.4px */;
        content: "";
        transform-origin: 75% 75%;
        transform: rotate(45deg);
        box-shadow: 2px 2px;
        pointer-events: none;
    }
    .glass_bgplace {
        border: none;
        -webkit-backdrop-filter: none;
        backdrop-filter: none;
        background-color: transparent;
        background-image: linear-gradient( 135deg, rgb(255 255 255 / var(--glass-opacity, 30%)) 0%, rgb(0 0 0 / 0%) 100% ), linear-gradient( var(--glass-reflex-degree, 100deg), rgb(255 255 255 / var(--glass-reflex-opacity, 10%)) 25%, rgb(0 0 0 / 0%) 25% );
        box-shadow: 0 0 0 1px rgb(255 255 255 / var(--glass-border-opacity, 10%)) inset, 0 0 0 2px rgb(0 0 0 / 5%);
        text-shadow: 0 1px rgb(0 0 0 / var(--glass-text-shadow-opacity, 5%));
    }
</style>