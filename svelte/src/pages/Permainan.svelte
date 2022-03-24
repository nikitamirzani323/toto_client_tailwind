<script>

    import Form432d from "../permainan/Form432d.svelte";

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
    let resultslipbet = [];
    let totalbayar_invoice = 0;
    let totalbet_invoice = 0;
    let isModalAlert = false;
    let msg_error = "";
    let idcomppasaran = "";
    let idtrxkeluaran = "";
    let statuspasaran = "OFFLINE";
    let tab_bet_pasangan = true;
    let tab_bet_pasangan_class = "bg-base-300 rounded-lg outline outline-1 outline-offset-1 outline-green-600";
    let tab_bet_history_class = "";
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
    async function slipbet() {
        const res = await fetch(path_api+"api/slipperiode", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                company: client_company,
                username: client_username,
                pasaran_code: pasaran_code,
            }),
        });
        const json = await res.json();
        let record = json.record;
        if (json.status == 200) {
            record = json.record;
            if (record != null) {
                for (var i = 0; i < record.length; i++) {
                    resultslipbet = [
                        ...resultslipbet,
                        {
                            status: record[i]["status"],
                            tglkeluaran: record[i]["tglkeluaran"],
                            idinvoice: record[i]["idinvoice"],
                            periode: record[i]["periode"],
                            totallose: record[i]["totallose"],
                            backgroundstatus: record[i]["background"],
                        },
                    ];
                }
            }
        }
    }
    const handleInvoice = (e) => {
        resultinvoice = [];
        resultslipbet = [];
        invoicebet("all");
        // slipbet();
    };
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
            resultslipbet = [];
            invoicebet("all");
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
                        <button type="button" class="modal-button bg-base-200 grass w-32 py-2 m-2 rounded-md outline outline-1 outline-offset-1 outline-green-600">4D/3D/2D</button>
                        <button type="button" class="modal-button bg-base-200 grass w-32 py-2 m-2 rounded-md outline outline-1 outline-offset-1 outline-green-600">COLOK</button>
                        <button type="button" class="modal-button bg-base-200 grass w-32 py-2 m-2 rounded-md outline outline-1 outline-offset-1 outline-green-600">50-50</button>
                        <button type="button" class="modal-button bg-base-200 grass w-32 py-2 m-2 rounded-md outline outline-1 outline-offset-1 outline-green-600">KOMBINASI</button>
                        <button type="button" class="modal-button bg-base-200 grass w-32 py-2 m-2 rounded-md outline outline-1 outline-offset-1 outline-green-600">DASAR</button>
                        <button type="button" class="modal-button bg-base-200 grass w-32 py-2 m-2 rounded-md outline outline-1 outline-offset-1 outline-green-600">SHIO</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-8 gap-2 grid grid-cols-1 lg:grid-cols-2 ">
            <div>
                {#if permainan == "4-3-2"}
                    <Form432d
                        on:handleInvoice={handleInvoice}
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
                        {pasaran_periode}/>
                {/if}
            </div>
            <div class="card rounded-md bg-base-200 shadow-xl">
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
                        
                    <div class="overflow-auto scrollbar-thin scrollbar-thumb-green-100" style="height:{client_device_height_custom-100}px;">
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
                                        <td class="text-sm lg:text-sm text-right link-accent">{rec.kei.toFixed(2)}</td>
                                        <td class="text-sm lg:text-sm text-right link-accent">{rec.diskon.toFixed(2)}</td>
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
                class="{tab_bet_pasangan_class} p-2 text-xs lg:text-sm">KERANJANG</div>
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
                        <button class="modal-button py-2 m-2 text-xs lg:text-sm rounded-md outline outline-1 outline-offset-1 outline-green-600 ">4D/3D/2D</button>
                        <button class="modal-button py-2 m-2 text-xs lg:text-sm rounded-md outline outline-1 outline-offset-1 outline-green-600 ">COLOK</button>
                        <button class="modal-button py-2 m-2 text-xs lg:text-sm rounded-md outline outline-1 outline-offset-1 outline-green-600 ">50-50</button>
                        <button class="modal-button py-2 m-2 text-xs lg:text-sm rounded-md outline outline-1 outline-offset-1 outline-green-600 ">KOMBINASI</button>
                        <button class="modal-button py-2 m-2 text-xs lg:text-sm rounded-md outline outline-1 outline-offset-1 outline-green-600 ">DASAR</button>
                        <button class="modal-button py-2 m-2 text-xs lg:text-sm rounded-md outline outline-1 outline-offset-1 outline-green-600 ">SHIO</button>
                    </div>
                </div>
            </div>
            
            {#if permainan == "4-3-2"}
                <Form432d
                    on:handleInvoice={handleInvoice}
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
                    {pasaran_periode}/>
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