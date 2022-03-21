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
        invoicebet("all");
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
        slipbet();
    };
    checkpasaran();
</script>
{#if statuspasaran == "ONLINE"}
    {#if client_device=="WEBSITE"}
        <div class="card shadow-xl bg-base-300  mt-5 rounded-md">
            <div class="card-body p-1">
                <div class="flex p-2">
                    <div class="flex-1 mt-1">
                        <a href="/?token={client_token}" class="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                            </svg> 
                        </a>
                    </div>
                    <div class="flex-auto mx-auto">
                        <button type="button" class="modal-button shadow-lg btn btn-outline btn-error">4D/3D/2D</button>
                        <button type="button" class="modal-button shadow-lg btn btn-outline btn-error">COLOK</button>
                        <button type="button" class="modal-button shadow-lg btn btn-outline btn-error">50-50</button>
                        <button type="button" class="modal-button shadow-lg btn btn-outline btn-error">KOMBINASI</button>
                        <button type="button" class="modal-button shadow-lg btn btn-outline btn-error">DASAR</button>
                        <button type="button" class="modal-button shadow-lg btn btn-outline btn-error">SHIO</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-8 gap-3 grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-1 sm:grid-cols-1">
            <div class="col-span-2">
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
            
            <div class="col-span-2">
                <div class="card rounded-md  bg-base-200 shadow-xl" >
                    <div class="card-body p-3">
                        <h2 class="card-title text-lg grid grid-cols-2 gap-4">
                            <div class="place-content-start text-left">
                                TOTAL BET : <span class="text-md link-accent">{new Intl.NumberFormat().format(totalbet_invoice)}</span>
                            </div>
                            <div class="place-content-end text-right">
                                TOTAL BAYAR : <span class="text-md link-accent">{new Intl.NumberFormat().format(totalbayar_invoice)}</span>
                            </div>
                        </h2>
                        <div class="overflow-x-auto" style="height: 790px;">
                            <table class="table-auto table table-zebra w-full" >
                                <thead>
                                    <tr>
                                        <th class="text-sm text-center tracking-wide whitespace-nowrap">NOMOR</th>
                                        <th class="text-sm text-center tracking-wide whitespace-nowrap">TIPE</th>
                                        <th class="text-sm text-center tracking-wide whitespace-nowrap">PERMAINAN</th>
                                        <th class="text-sm text-right tracking-wide whitespace-nowrap">BET</th>
                                        <th class="text-sm text-right tracking-wide whitespace-nowrap">DIS(%)</th>
                                        <th class="text-sm text-right tracking-wide whitespace-nowrap">KEI(%)</th>
                                        <th class="text-sm text-right tracking-wide whitespace-nowrap">BAYAR</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {#each resultinvoice as rec}
                                    <tr>
                                        <td class="text-sm text-center">{rec.nomor}</td>
                                        <td class="text-sm text-center">{rec.tipe_betinvoice}</td>
                                        <td class="text-sm text-center">{rec.permainan}</td>
                                        <td class="text-sm text-right link-accent">{new Intl.NumberFormat().format(rec.bet)}</td>
                                        <td class="text-sm text-right link-accent">{rec.kei.toFixed(2)}</td>
                                        <td class="text-sm text-right link-accent">{rec.diskon.toFixed(2)}</td>
                                        <td class="text-sm text-right link-accent">{new Intl.NumberFormat().format(rec.bayar)}</td>
                                    </tr>
                                    {/each}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    {:else}
        <div tabindex="0" class="collapse collapse-arrow border border-base-200 bg-base-200 rounded-md mx-2 my-2">
            <input type="checkbox" class="peer"> 
            <div class="collapse-title text-sm font-normal">
                PILIH PERMAINAN DIBAWAH INI
            </div>
            <div class="collapse-content"> 
                <div class="grid grid-cols-2 gap-2 px-2">
                    <button class="modal-button py-2 m-2 rounded-md outline outline-1 outline-offset-1 outline-green-600 ">4D/3D/2D</button>
                    <button class="modal-button py-2 m-2 rounded-md outline outline-1 outline-offset-1 outline-green-600 ">COLOK</button>
                    <button class="modal-button py-2 m-2 rounded-md outline outline-1 outline-offset-1 outline-green-600 ">50-50</button>
                    <button class="modal-button py-2 m-2 rounded-md outline outline-1 outline-offset-1 outline-green-600 ">KOMBINASI</button>
                    <button class="modal-button py-2 m-2 rounded-md outline outline-1 outline-offset-1 outline-green-600 ">DASAR</button>
                    <button class="modal-button py-2 m-2 rounded-md outline outline-1 outline-offset-1 outline-green-600 ">SHIO</button>
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