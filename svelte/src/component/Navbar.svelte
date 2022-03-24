<script>
    import { onMount } from 'svelte'
    import { themeChange } from 'theme-change'
    import dayjs from "dayjs";
    import utc from "dayjs/plugin/utc";
    import timezone from "dayjs/plugin/timezone";

    dayjs.extend(utc);
    dayjs.extend(timezone);
    onMount(() => {
        themeChange(false)
    }) 
    export let path_api = "";
    export let client_token = "";
    export let client_company = "";
    export let client_username = "client";
    export let client_credit = 0;
    export let client_ipaddress = "0.0.0.0";
    export let client_timezone = "Asia/Jakarta";
    export let client_device = "";
    export let client_device_height_custom = 0;
    export let listkeluaran = [];
    let listhasilkeluaran = [];
    let listhasilinvoice = [];
    let listhasilinvoicebet = [];
    let filterBukuMimpi = [];
    let listBukumimpi = [];
    let resulttogel = [];
    let drodown_count = 0;
    let idinvoiceall = "";
    let detailslipheader = "";
    let detailslipheaderpermainan = "";
    let nmpasaran = "";
    let total4d_bayar = 0;
    let total3d_bayar = 0;
    let total2d_bayar = 0;
    let totalcolokbebas_bayar = 0;
    let totalcolokmacau_bayar = 0;
    let totalcoloknaga_bayar = 0;
    let totalcolokjitu_bayar = 0;
    let total5050umum_bayar = 0;
    let total5050special_bayar = 0;
    let total5050kombinasi_bayar = 0;
    let totalmacaukombinasi_bayar = 0;
    let totaldasar_bayar = 0;
    let totalshio_bayar = 0;
    let totalwin_4d = 0;
    let totalwin_3d = 0;
    let totalwin_2d = 0;
    let totalwin_colokbebas = 0;
    let totalwin_colokmacau = 0;
    let totalwin_coloknaga = 0;
    let totalwin_colokjitu = 0;
    let totalwin_5050umum = 0;
    let totalwin_5050special = 0;
    let totalwin_5050kombinasi = 0;
    let totalwin_macaukombinasi = 0;
    let totalwin_dasar = 0;
    let totalwin_shio = 0;
    let subtotal_bayar = 0;
    let subtotal_winner = 0;
    let total_winlose = 0;
    let clockmachine = "";
    let searchbukumimpi = "";
    let tipe = "";
    let isModal_result = false
    let isModal_result_bypasaran = false
    let isModal_allinvoice = false
    let isModal_invoicedetail = false
    let isModal_detailbyid = false
    let isModal_bukumimpi = false
    let isModal_bukumimpi_2 = false
    let tab_bookdream_all = "bg-green-600 text-black"
    let tab_bookdream_4d = ""
    let tab_bookdream_3d = ""
    let tab_bookdream_2d = ""
    function updateClock() {
        let endtime = dayjs().tz(client_timezone).format("DD MMM YYYY | HH:mm");
        clockmachine = endtime;
    }
    
    
    const call_result = () => {
        isModal_result = true
        fetch_resultall()
	};
    const call_allinvoice = () => {
        isModal_allinvoice = true
        fetch_invoicell()
	};
    const call_bukumimpi = () => {
        isModal_bukumimpi = true
        fetch_bukumimpi()
	};
    async function fetch_resultall() {
        listhasilkeluaran = [];
        const res = await fetch(path_api+"api/resulttogelall", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                company: client_company,
            }),
        });
        const json = await res.json();
        if (json.status == 200) {
            let record = json.record;
            if (record != null) {
                for (var i = 0; i < record.length; i++) {
                    listhasilkeluaran = [
                        ...listhasilkeluaran,
                        {
                            keluaran_no: record[i]["no"],
                            keluaran_date: dayjs(record[i]["date"])
                                .tz(client_timezone)
                                .format("DD MMM YYYY"),
                            keluaran_pasaran: record[i]["pasaran"],
                            keluaran_pasarancode: record[i]["pasaran_code"],
                            keluaran_periode: record[i]["periode"],
                            keluaran_result: record[i]["result"],
                        },
                    ];
                }
                console.log(listhasilkeluaran);
            }
        } 
    }
    async function fetch_invoicell() {
        listhasilinvoice = [];
        const res = await fetch(path_api+"api/slipperiodeall", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                company: client_company,
                username: client_username,
            }),
        });
        const json = await res.json();
        if (json.status == 200) {
            let record = json.record;
            let background_invoice_css = ""
            if (record != null) {
                for (var i = 0; i < record.length; i++) {
                    if(record[i]["status"] == "RUNNING"){
                        background_invoice_css = "bg-yellow-200 text-black"
                    }else{
                        background_invoice_css = "bg-green-200 text-black"
                    }
                    listhasilinvoice = [
                        ...listhasilinvoice,
                        {
                            invoice_idinvoice: record[i]["idinvoice"],
                            invoice_tglkeluaran: dayjs(record[i]["tglkeluaran"])
                                .tz(client_timezone)
                                .format("DD MMM YYYY"),
                            invoice_pasaran: record[i]["pasaran"],
                            invoice_periode: record[i]["periode"],
                            invoice_status: record[i]["status"],
                            invoice_status_background: background_invoice_css,
                            invoice_totalbet: record[i]["totalbet"],
                            invoice_totalbayar: record[i]["totalbayar"],
                            invoice_totalwin: record[i]["totalwin"],
                            invoice_totallose: record[i]["totallose"],
                            invoice_background: record[i]["background"],
                            invoice_color_lost: record[i]["color_lost"],
                            invoice_color_totalloset: record[i]["color_totallose"],
                        },
                    ];
                }
            }
        } 
    }
    async function fetch_invoicelldetail(e, periode) {
        isModal_invoicedetail = true;
        detailslipheader = periode;
        idinvoiceall = e;
        const res = await fetch(path_api+"api/slipperiodedetail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                company: client_company,
                username: client_username,
                idinvoice: e,
            }),
        });
        const json = await res.json();
        let record = json.record;
        if (json.status == 200) {
            record = json.record;
            total4d_bayar = record["total4d_bayar"];
            total3d_bayar = record["total3d_bayar"];
            total2d_bayar = record["total2d_bayar"];
            totalcolokbebas_bayar = record["totalcolokbebas_bayar"];
            totalcolokmacau_bayar = record["totalcolokmacau_bayar"];
            totalcoloknaga_bayar = record["totalcoloknaga_bayar"];
            totalcolokjitu_bayar = record["totalcolokjitu_bayar"];
            total5050umum_bayar = record["total5050umum_bayar"];
            total5050special_bayar = record["total5050special_bayar"];
            total5050kombinasi_bayar = record["total5050kombinasi_bayar"];
            totalmacaukombinasi_bayar = record["totalmacaukombinasi_bayar"];
            totaldasar_bayar = record["totaldasar_bayar"];
            totalshio_bayar = record["totalshio_bayar"];
            totalwin_4d = record["totalwin_4d"];
            totalwin_3d = record["totalwin_3d"];
            totalwin_2d = record["totalwin_2d"];
            totalwin_colokbebas = record["totalwin_colokbebas"];
            totalwin_colokmacau = record["totalwin_colokmacau"];
            totalwin_coloknaga = record["totalwin_coloknaga"];
            totalwin_colokjitu = record["totalwin_colokjitu"];
            totalwin_5050umum = record["totalwin_5050umum"];
            totalwin_5050special = record["totalwin_5050special"];
            totalwin_5050kombinasi = record["totalwin_5050kombinasi"];
            totalwin_macaukombinasi = record["totalwin_macaukombinasi"];
            totalwin_dasar = record["totalwin_dasar"];
            totalwin_shio = record["totalwin_shio"];
            subtotal_bayar = record["subtotal_bayar"];
            subtotal_winner = record["subtotal_winner"];
            total_winlose = record["total_winlose"];
        }
        
    }
    async function fetch_invoicealldetailpermainan(permainan, bayar) {
        if (parseInt(bayar) > 0) {
            detailslipheaderpermainan = permainan;
            listhasilinvoicebet = [];
            const res = await fetch(path_api+"api/invoicebetdetail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    invoice: parseInt(idinvoiceall),
                    company: client_company,
                    username: client_username,
                    permainan: permainan,
                }),
            });
            const json = await res.json();
            if (json.status == 200) {
                let record = json.record;
                if (record != null) {
                    for (var i = 0; i < record.length; i++) {
                        let status = record[i]["status"];
                        let background = "";
                        switch (status) {
                            case "RUNNING":
                                background = "bg-yellow-200 text-black"
                                break;
                            case "WINNER":
                                background = "bg-green-200 text-black"
                                break;
                            case "LOSE":
                                background = "bg-rose-200 text-black"
                                break;
                        }  
                        listhasilinvoicebet = [
                            ...listhasilinvoicebet,
                            {
                                bet_no: record[i]["no"],
                                bet_background: background,
                                bet_status: record[i]["status"],
                                bet_tipe: record[i]["tipe"],
                                bet_permainan: record[i]["permainan"],
                                bet_nomor: record[i]["nomor"],
                                bet_bet: record[i]["bet"],
                                bet_diskon: record[i]["diskon"],
                                bet_kei: record[i]["kei"],
                                bet_bayar: record[i]["bayar"],
                                bet_win: record[i]["win"],
                            },
                        ];
                    }
                    isModal_detailbyid = true;
                } else {
                    alert("Error");
                }
            } else {
                alert("Error");
            }
        } else {
            alert("Data Not Found");
        }
    }
    async function fetch_bukumimpi() {
        listBukumimpi = [];
        const res = await fetch(path_api+"api/bookdream", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                tipe: tipe,
                nama: searchbukumimpi.toLowerCase(),
            }),
        });
        const json = await res.json();
        if (json.status == 200) {
            let record = json.record;
            if (record != null) {
                for (var i = 0; i < record.length; i++) {
                    listBukumimpi = [
                        ...listBukumimpi,
                        {
                            bukumimpi_tipe: record[i]["bukumimpi_tipe"],
                            bukumimpi_nama: record[i]["bukumimpi_nama"],
                            bukumimpi_nomor: record[i]["bukumimpi_nomor"],
                        },
                    ];
                }
            } else {
                alert("Error");
            }
        } else {
            alert("Error");
        }
    }
    const handleModalCustom = () => {
        isModal_bukumimpi_2 = !isModal_bukumimpi_2;
    }
    const handleClickBukuMimpi = (e) => {
        filterBukuMimpi = [];
        listBukumimpi = [];
        switch (e) {
            case "ALL":
                tipe = "";
                searchbukumimpi = "";
                tab_bookdream_all = "bg-green-600 text-black"
                tab_bookdream_4d = ""
                tab_bookdream_3d = ""
                tab_bookdream_2d = ""
                break;
            case "4D":
                tipe = "4D";
                searchbukumimpi = "";
                tab_bookdream_all = ""
                tab_bookdream_4d = "bg-green-600 text-black"
                tab_bookdream_3d = ""
                tab_bookdream_2d = ""
                break;
            case "3D":
                tipe = "3D";
                searchbukumimpi = "";
                tab_bookdream_all = ""
                tab_bookdream_4d = ""
                tab_bookdream_3d = "bg-green-600 text-black"
                tab_bookdream_2d = ""
                break;
            case "2D":
                tipe = "2D";
                searchbukumimpi = "";
                tab_bookdream_all = ""
                tab_bookdream_4d = ""
                tab_bookdream_3d = ""
                tab_bookdream_2d = "bg-green-600 text-black"
                break;
        }
        fetch_bukumimpi();
    };
    const handleKeyboardbukumimpi_checkenter = (e) => {
        let keyCode = e.which || e.keyCode;
        if (keyCode === 13) {
            filterBukuMimpi = [];
            listBukumimpi = [];
            fetch_bukumimpi();
        }
    };
    async function fetch_resultbypasaran(e, y) {
        resulttogel = [];
        nmpasaran = y;
        const res = await fetch(path_api+"api/resulttogel", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                company: client_company,
                pasaran_code: e,
            }),
        });
        const json = await res.json();
        let record = json.record;
        if (json.status == 200) {
            record = json.record;
            if (record != null) {
                for (var i = 0; i < record.length; i++) {
                    resulttogel = [
                        ...resulttogel,
                        {
                            no: record[i]["no"],
                            date: dayjs(record[i]["date"]).format(
                                "DD MMM YYYY"
                            ),
                            periode: record[i]["periode"],
                            result: record[i]["result"],
                        },
                    ];
                }
                isModal_result_bypasaran = true
            }
        }
    }
    $: {
        setInterval(updateClock, 100);
        if (searchbukumimpi) {
            filterBukuMimpi = listBukumimpi.filter((item) =>
                item.bukumimpi_nama
                    .toLowerCase()
                    .includes(searchbukumimpi.toLowerCase())
            );
        } else {
            filterBukuMimpi = [...listBukumimpi];
        }
    }
    function closeModal_Custom() {
        isModal_bukumimpi_2 = false;
    }
</script>

{#if client_device == "WEBSITE"}
    <div class="dropdown dropdown-left fixed right-2 top-20 z-50">
        <label tabindex="0" class="btn m-1 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
        </label>
        <ul data-choose-theme tabindex="0" class="dropdown-content menu p-3 shadow bg-base-200 rounded-box w-52">
            <li data-set-theme="light" class="cursor-pointer hover:bg-base-300 p-3" data-act-class="ACTIVECLASS">Light</li>
            <li data-set-theme="winter" class="cursor-pointer hover:bg-base-300 p-3" data-act-class="ACTIVECLASS">Winter</li>
            <li data-set-theme="dark" class="cursor-pointer hover:bg-base-300 p-3" data-act-class="ACTIVECLASS">Dark</li>
            <li data-set-theme="dracula" class="cursor-pointer hover:bg-base-300 p-3" data-act-class="ACTIVECLASS">Dracula</li>
        </ul>
    </div>
    <div class="navbar">
        <div class="navbar-start">
            <a href="/?token={client_token}" class="btn btn-ghost">
                <img src="logo-green.svg" alt="">
            </a>
        </div>
        <div class="navbar-center hidden lg:flex">
            <div class="flex flex-row gap-2">
                <!-- The button to open modal -->
                <label
                    on:click={() => {
                        call_result();
                    }}   
                     class="btn bg-base-300 border-none shadow-lg shadow-green-500/50">RESULT</label>
                <label
                    on:click={() => {
                        call_allinvoice();
                    }}
                    class="btn bg-base-300 border-none shadow-lg shadow-green-500/50">INVOICE</label>
                <label for="my-modal-pasaran" class="btn bg-base-300 border-none shadow-lg shadow-green-500/50">PASARAN</label>
                <label
                    on:click={() => {
                        call_bukumimpi();
                    }}
                    class="btn bg-base-300 border-none shadow-lg shadow-green-500/50">BUKU MIMPI</label>
                
            </div>
        </div>
        <div class="navbar-end hidden text-xs lg:text-sm lg:inline-block text-right">
            <p>
                Asia/Jakarta <br> 
                {clockmachine}  WIB (+7)<br>
                {client_username} ({client_ipaddress}) <br>
                Credit : IDR <span class="link-accent">{new Intl.NumberFormat().format(client_credit)}</span>
            </p>
        </div>
    </div>
{:else}
    <div class="
        sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-80 backdrop-blur transition-all duration-100 
         text-base-content shadow-sm">
        <div class="navbar w-full">
            <div class="navbar-start">
            </div>
            <div class="navbar-center text-center">
                <a href="/?token={client_token}" class="btn btn-ghost">
                    <img class="w-32 lg:w-36" src="logo-green.svg" alt="">
                </a>
            </div>
            <div class="navbar-end text-right">
                <div class="dropdown dropdown-left ">
                    <label tabindex="0" class="btn btn-ghost btn-circle">
                        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                        </svg>
                    </label>
                    <ul data-choose-theme tabindex="0" class="dropdown-content menu p-3 shadow bg-base-200 rounded-box w-52">
                        <li data-set-theme="light" class="cursor-pointer hover:bg-base-300 p-3" data-act-class="ACTIVECLASS">Light</li>
                        <li data-set-theme="winter" class="cursor-pointer hover:bg-base-300 p-3" data-act-class="ACTIVECLASS">Winter</li>
                        <li data-set-theme="dark" class="cursor-pointer hover:bg-base-300 p-3" data-act-class="ACTIVECLASS">Dark</li>
                        <li data-set-theme="dracula" class="cursor-pointer hover:bg-base-300 p-3" data-act-class="ACTIVECLASS">Dracula</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="mt-1 mb-2 mx-2 p-0 card bg-base-300 shadow-xl rounded-none">
        <div class="card-body p-3">
            <p class="text-xs lg:text-sm">
                Asia/Jakarta<br>{clockmachine} WIB (+7)<br>
                {client_username} ({client_ipaddress}) <br>
                Credit : IDR <span class="link-accent">{new Intl.NumberFormat().format(client_credit)}</span>
            </p>
            <div class="flex flex-row justify-center text-center gap-1">
                <!-- The button to open modal -->
                <label
                    on:click={() => {
                        call_result();
                    }}   
                     class="btn btn-xs bg-base-300 border-none shadow-sm shadow-green-500/50">RESULT</label>
                <label
                    on:click={() => {
                        call_allinvoice();
                    }}
                    class="btn btn-xs bg-base-300 border-none shadow-sm shadow-green-500/50">INVOICE</label>
                <label for="my-modal-pasaran" class="btn btn-xs bg-base-300 border-none shadow-sm shadow-green-500/50">PASARAN</label>
                <label
                    on:click={() => {
                        call_bukumimpi();
                    }}
                    class="btn btn-xs bg-base-300 border-none shadow-sm shadow-green-500/50">BUKU MIMPI</label>
            </div>
        </div>
    </div>
{/if}

<input type="checkbox" id="my-modal-resulttogel" class="modal-toggle" bind:checked={isModal_result}>
<div class="modal" on:click|self={()=>isModal_result = false}>
    <div class="modal-box relative max-w-full lg:max-w-xl h-full lg:h-2/3 rounded-none lg:rounded-lg p-2 lg:p-4 overflow-hidden">
        <label for="my-modal-resulttogel" class="btn btn-xs lg:btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 class="text-xs lg:text-sm font-bold mt-1">RESULT</h3>
        <div class="overflow-auto h-[90%] scrollbar-thin scrollbar-thumb-base-300 lg:scrollbar-thumb-green-100  mt-4">
            {#if client_device == "WEBSITE"}
            <table class="table table-zebra w-full" >
                <thead>
                    <tr>
                        <th width="1%" class="text-xs lg:text-sm text-center"></th>
                        <th width="15%" class="text-xs lg:text-sm text-left">TANGGAL</th>
                        <th width="*" class="text-xs lg:text-sm text-left">PASARAN</th>
                        <th width="15%" class="text-xs lg:text-sm text-left">PERIODE</th>
                        <th width="25%" class="text-xs lg:text-sm text-center">HASIL</th>
                    </tr>
                </thead>
                <tbody>
                    {#each listhasilkeluaran as rec}
                    <tr>
                        <td class="text-xs text-center">{rec.keluaran_no}</td>
                        <td class="text-xs lg:text-sm text-left">{rec.keluaran_date}</td>
                        <td 
                            on:click={() => {
                                fetch_resultbypasaran(
                                    rec.keluaran_pasarancode,
                                    rec.keluaran_pasaran
                                );
                            }}
                            class="text-xs lg:text-sm text-left underline cursor-pointer">{rec.keluaran_pasaran}</td>
                        <td class="text-xs lg:text-sm text-left">{rec.keluaran_periode}</td>
                        <td class="text-xs lg:text-sm text-center link-accent">{rec.keluaran_result}</td>
                    </tr>
                    {/each}
                </tbody>
            </table>
            {:else}
            <table class="table table-zebra w-full" >
                <thead>
                    <tr>
                        <th width="15%" class="text-xs lg:text-sm text-left">TANGGAL</th>
                        <th width="*" class="text-xs lg:text-sm text-left">PASARAN</th>
                        <th width="15%" class="text-xs lg:text-sm text-left">PERIODE</th>
                        <th width="25%" class="text-xs lg:text-sm text-center">HASIL</th>
                    </tr>
                </thead>
                <tbody>
                    {#each listhasilkeluaran as rec}
                    <tr>
                        <th class="text-xs text-left">{rec.keluaran_date}</th>
                        <td 
                            on:click={() => {
                                fetch_resultbypasaran(
                                    rec.keluaran_pasarancode,
                                    rec.keluaran_pasaran
                                );
                            }}
                            class="text-xs text-left underline cursor-pointer">{rec.keluaran_pasaran}</td>
                        <td class="text-xs text-left">{rec.keluaran_periode}</td>
                        <td class="text-xs text-center link-accent">{rec.keluaran_result}</td>
                    </tr>
                    {/each}
                </tbody>
            </table>
            {/if}
        </div>
    </div>
</div>

<input type="checkbox" id="my-modal-resulttogel_bypasaran" class="modal-toggle" bind:checked={isModal_result_bypasaran}>
<div class="modal" on:click|self={()=>isModal_result_bypasaran = false}>
    <div class="modal-box relative max-w-full lg:max-w-xl h-full lg:h-2/3 rounded-none lg:rounded-lg p-2 lg:p-4 overflow-hidden">
        <label for="my-modal-resulttogel_bypasaran" class="btn btn-xs lg:btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 class="text-xs lg:text-sm font-bold mt-1">PASARAN : {nmpasaran}</h3>
        <div class="overflow-auto h-[90%] scrollbar-thin scrollbar-thumb-green-100 mt-4">
            <table class="table table-zebra w-full">
                <thead>
                    <tr>
                        <th width="15%" class="text-xs lg:text-sm text-left">TANGGAL</th>
                        <th width="15%" class="text-xs lg:text-sm text-left">PERIODE</th>
                        <th width="25%" class="text-xs lg:text-sm text-center">HASIL</th>
                    </tr>
                </thead>
                <tbody>
                    {#each resulttogel  as rec}
                    <tr>
                        <th class="text-xs lg:text-sm text-left">{rec.date}</th>
                        <td class="text-xs lg:text-sm text-left">{rec.periode}</td>
                        <td class="text-xs lg:text-sm text-center link-accent">{rec.result}</td>
                    </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    </div>
</div>
<input type="checkbox" id="my-modal-allinvoice" class="modal-toggle" bind:checked={isModal_allinvoice}>
<div class="modal" on:click|self={()=>isModal_allinvoice = false}>
    {#if client_device == "WEBSITE"}
    <div class="modal-box relative max-w-full lg:max-w-xl h-full lg:h-2/3 rounded-none lg:rounded-lg p-2 lg:p-4 overflow-hidden">
        <label for="my-modal-allinvoice" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 class="text-xs lg:text-sm font-bold -mt-1">INVOICE</h3>
        <div class="overflow-auto h-[90%] scrollbar-thin scrollbar-thumb-green-100 mt-4">
            <table class="table table-zebra w-full" >
                <thead>
                    <tr>
                        <th width="1%" class="text-xs lg:text-sm text-center">STATUS</th>
                        <th width="15%" class="text-xs lg:text-sm text-center">TANGGAL</th>
                        <th width="*" class="text-xs lg:text-sm text-left">PASARAN</th>
                        <th width="15%" class="text-xs lg:text-sm text-left">PERIODE</th>
                        <th width="25%" class="text-xs lg:text-sm text-right">WINLOSE</th>
                    </tr>
                </thead>
                <tbody>
                    {#each listhasilinvoice as rec}
                    <tr>
                        <th class="text-sm text-center whitespace-nowrap">
                            <span class="{rec.invoice_status_background} p-1.5 text-xs lg:text-sm  uppercase tracking-wider rounded-lg ">{rec.invoice_status}</span>
                        </th>
                        <td class="text-xs lg:text-sm text-center whitespace-nowrap">{rec.invoice_tglkeluaran}</td>
                        <td class="text-xs lg:text-sm text-left whitespace-nowrap">{rec.invoice_pasaran}</td>
                        <td 
                            on:click={() => {
                                fetch_invoicelldetail(
                                    rec.invoice_idinvoice,
                                    rec.invoice_periode
                                );
                            }}
                            class="text-xs lg:text-sm text-left whitespace-nowrap underline cursor-pointer">{rec.invoice_periode}</td>
                        <td class="text-xs lg:text-sm text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(rec.invoice_totallose)}</td>
                    </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    </div>
    {:else}
    <div class="modal-box relative max-w-full lg:max-w-xl h-full lg:h-2/3 rounded-none lg:rounded-lg p-2 lg:p-4 overflow-hidden">
        <label for="my-modal-allinvoice" class="btn btn-xs lg:btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 class="text-xs lg:text-sm font-bold mt-4">INVOICE</h3>
        <div class="overflow-auto h-[90%] scrollbar-thin scrollbar-thumb-green-100 mt-2">
            <table class="table table-zebra w-full" >
                <thead>
                    <tr>
                        <th width="1%" class="text-xs text-center">STATUS</th>
                        <th width="15%" class="text-xs text-center">TANGGAL</th>
                        <th width="*" class="text-xs text-left">PASARAN</th>
                        <th width="15%" class="text-xs text-left">PERIODE</th>
                        <th width="25%" class="text-xs text-right">WINLOSE</th>
                    </tr>
                </thead>
                <tbody>
                    {#each listhasilinvoice as rec}
                    <tr>
                        <th class="text-xs text-center whitespace-nowrap">
                            <span class="{rec.invoice_status_background} p-1 text-[10px] lg:text-sm  uppercase rounded-lg ">{rec.invoice_status}</span>
                        </th>
                        <td class="text-xs text-center whitespace-nowrap">{rec.invoice_tglkeluaran}</td>
                        <td class="text-xs text-left whitespace-nowrap">{rec.invoice_pasaran}</td>
                        <td 
                            on:click={() => {
                                fetch_invoicelldetail(
                                    rec.invoice_idinvoice,
                                    rec.invoice_periode
                                );
                            }}
                            class="text-xs text-left whitespace-nowrap  underline cursor-pointer">{rec.invoice_periode}</td>
                        <td class="text-xs text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(rec.invoice_totallose)}</td>
                    </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    </div>
    {/if}
</div>
<input type="checkbox" id="my-modal-invoicedetail" class="modal-toggle" bind:checked={isModal_invoicedetail}>
<div class="modal" on:click|self={()=>isModal_invoicedetail = false}>
    {#if client_device == "WEBSITE"}
    <div class="modal-box relative max-w-full lg:max-w-xl h-full lg:h-2/3 rounded-none lg:rounded-lg p-2 lg:p-4 overflow-hidden">
        <label for="my-modal-invoicedetail" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 class="text-xs lg:text-sm font-bold -mt-1">PASARAN : {detailslipheader}</h3>
        <div class="overflow-auto h-[73%] scrollbar-thin scrollbar-thumb-green-100 mt-4">
            <table class="table table-zebra w-full" >
                <thead>
                    <tr>
                        <th width="1%" class="text-xs lg:text-sm text-center">NO</th>
                        <th width="*" class="text-xs lg:text-sm text-left">PERMAINAN</th>
                        <th width="25%" class="text-xs lg:text-sm text-right">BAYAR</th>
                        <th width="25%" class="text-xs lg:text-sm text-right">MENANG</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th class="text-xs lg:text-sm text-center whitespace-nowrap">1</th>
                        <th 
                            on:click={() => {
                                fetch_invoicealldetailpermainan(
                                    "4D",
                                    total4d_bayar
                                );
                            }}
                            class="text-xs lg:text-sm text-left whitespace-nowrap cursor-pointer underline">4D</th>
                        <td class="text-xs lg:text-sm text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(total4d_bayar)}</td>
                        <td class="text-xs lg:text-sm text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(totalwin_4d)}</td>
                    </tr>
                    <tr>
                        <th class="text-xs lg:text-sm text-center whitespace-nowrap">2</th>
                        <th 
                            on:click={() => {
                                fetch_invoicealldetailpermainan(
                                    "3D",
                                    total3d_bayar
                                );
                            }}
                            class="text-xs lg:text-sm text-left whitespace-nowrap cursor-pointer underline">3D</th>
                        <td class="text-xs lg:text-sm text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(total3d_bayar)}</td>
                        <td class="text-xs lg:text-sm text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(totalwin_3d)}</td>
                    </tr>
                    <tr>
                        <th class="text-xs lg:text-sm text-center whitespace-nowrap">3</th>
                        <th 
                            on:click={() => {
                                fetch_invoicealldetailpermainan(
                                    "2D",
                                    total2d_bayar
                                );
                            }}
                            class="text-xs lg:text-sm text-left whitespace-nowrap cursor-pointer underline">2D</th>
                        <td class="text-xs lg:text-sm text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(total2d_bayar)}</td>
                        <td class="text-xs lg:text-sm text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(totalwin_2d)}</td>
                    </tr>
                    <tr>
                        <th class="text-xs lg:text-sm text-center whitespace-nowrap">4</th>
                        <th 
                            on:click={() => {
                                fetch_invoicealldetailpermainan(
                                    "COLOK_BEBAS",
                                    totalcolokbebas_bayar
                                );
                            }}
                            class="text-xs lg:text-sm text-left whitespace-nowrap cursor-pointer underline">COLOK BEBAS</th>
                        <td class="text-xs lg:text-sm text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(totalcolokbebas_bayar)}</td>
                        <td class="text-xs lg:text-sm text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(totalwin_colokbebas)}</td>
                    </tr>
                    <tr>
                        <th class="text-xs lg:text-sm text-center whitespace-nowrap">5</th>
                        <th 
                            on:click={() => {
                                fetch_invoicealldetailpermainan(
                                    "COLOK_MACAU",
                                    totalcolokmacau_bayar
                                );
                            }}
                            class="text-xs lg:text-sm text-left whitespace-nowrap cursor-pointer underline">COLOK MACAU</th>
                        <td class="text-xs lg:text-sm text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(totalcolokmacau_bayar)}</td>
                        <td class="text-xs lg:text-sm text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(totalwin_colokmacau)}</td>
                    </tr>
                    <tr>
                        <th class="text-xs lg:text-sm text-center whitespace-nowrap">6</th>
                        <th 
                            on:click={() => {
                                fetch_invoicealldetailpermainan(
                                    "COLOK_NAGA",
                                    totalcoloknaga_bayar
                                );
                            }}
                            class="text-xs lg:text-sm text-left whitespace-nowrap cursor-pointer underline">COLOK NAGA</th>
                        <td class="text-xs lg:text-sm text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(totalcoloknaga_bayar)}</td>
                        <td class="text-xs lg:text-sm text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(totalwin_coloknaga)}</td>
                    </tr>
                    <tr>
                        <th class="text-xs lg:text-sm text-center whitespace-nowrap">7</th>
                        <th 
                            on:click={() => {
                                fetch_invoicealldetailpermainan(
                                    "COLOK_JITU",
                                    totalcolokjitu_bayar
                                );
                            }}
                            class="text-xs lg:text-sm text-left whitespace-nowrap cursor-pointer underline">COLOK JITU</th>
                        <td class="text-xs lg:text-sm text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(totalcolokjitu_bayar)}</td>
                        <td class="text-xs lg:text-sm text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(totalwin_colokjitu)}</td>
                    </tr>
                    <tr>
                        <th class="text-xs lg:text-sm text-center whitespace-nowrap">8</th>
                        <th 
                            on:click={() => {
                                fetch_invoicealldetailpermainan(
                                    "50_50_UMUM",
                                    total5050umum_bayar
                                );
                            }}
                            class="text-xs lg:text-sm text-left whitespace-nowrap cursor-pointer underline">50 - 50 UMUM</th>
                        <td class="text-xs lg:text-sm text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(total5050umum_bayar)}</td>
                        <td class="text-xs lg:text-sm text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(totalwin_5050umum)}</td>
                    </tr>
                    <tr>
                        <th class="text-xs lg:text-sm text-center whitespace-nowrap">9</th>
                        <th 
                            on:click={() => {
                                fetch_invoicealldetailpermainan(
                                    "50_50_SPECIAL",
                                    total5050special_bayar
                                );
                            }}
                            class="text-xs lg:text-sm text-left whitespace-nowrap cursor-pointer underline">50 - 50 SPECIAL</th>
                        <td class="text-xs lg:text-sm text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(total5050special_bayar)}</td>
                        <td class="text-xs lg:text-sm text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(totalwin_5050special)}</td>
                    </tr>
                    <tr>
                        <th 
                            on:click={() => {
                                fetch_invoicealldetailpermainan(
                                    "50_50_KOMBINASI",
                                    total5050kombinasi_bayar
                                );
                            }}
                            class="text-xs lg:text-sm text-center whitespace-nowrap">10</th>
                        <th class="text-xs lg:text-sm text-left whitespace-nowrap cursor-pointer underline">50 - 50 KOMBINASI</th>
                        <td class="text-xs lg:text-sm text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(total5050kombinasi_bayar)}</td>
                        <td class="text-xs lg:text-sm text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(totalwin_5050kombinasi)}</td>
                    </tr>
                    <tr>
                        <th class="text-xs lg:text-sm text-center whitespace-nowrap">11</th>
                        <th 
                            on:click={() => {
                                fetch_invoicealldetailpermainan(
                                    "MACAU_KOMBINASI",
                                    totalmacaukombinasi_bayar
                                );
                            }}
                            class="text-xs lg:text-sm text-left whitespace-nowrap cursor-pointer underline">MACAU / KOMBINASI</th>
                        <td class="text-xs lg:text-sm text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(totalmacaukombinasi_bayar)}</td>
                        <td class="text-xs lg:text-sm text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(totalwin_macaukombinasi)}</td>
                    </tr>
                    <tr>
                        <th class="text-xs lg:text-sm text-center whitespace-nowrap">12</th>
                        <th 
                            on:click={() => {
                                fetch_invoicealldetailpermainan(
                                    "DASAR",
                                    totaldasar_bayar
                                );
                            }}
                            class="text-xs lg:text-sm text-left whitespace-nowrap cursor-pointer underline">DASAR</th>
                        <td class="text-xs lg:text-sm text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(totaldasar_bayar)}</td>
                        <td class="text-xs lg:text-sm text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(totalwin_dasar)}</td>
                    </tr>
                    <tr>
                        <th class="text-xs lg:text-sm text-center whitespace-nowrap">13</th>
                        <th 
                            on:click={() => {
                                fetch_invoicealldetailpermainan(
                                    "SHIO",
                                    totalshio_bayar
                                );
                            }}
                            class="text-xs lg:text-sm text-left whitespace-nowrap cursor-pointer underline">SHIO</th>
                        <td class="text-xs lg:text-sm text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(totalshio_bayar)}</td>
                        <td class="text-xs lg:text-sm text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(totalwin_shio)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="bg-base-300 p-3 shadow-lg mt-4 rounded-lg">
            <table class="w-full">
                <tr>
                    <td class="text-right text-xs lg:text-sm">TOTAL BAYAR</td>
                    <td class="text-right text-xs lg:text-sm">:</td>
                    <td class="text-right text-xs lg:text-sm link-accent">{new Intl.NumberFormat().format(subtotal_bayar)}</td>
                </tr>
                <tr>
                    <td class="text-right text-xs lg:text-sm">TOTAL WINNER</td>
                    <td class="text-right text-xs lg:text-sm">:</td>
                    <td class="text-right text-xs lg:text-sm link-accent">{new Intl.NumberFormat().format(subtotal_winner)}</td>
                </tr>
                <tr>
                    <td class="text-right text-xs lg:text-sm">WINLOSE</td>
                    <td class="text-right text-xs lg:text-sm">:</td>
                    <td class="text-right text-xs lg:text-sm link-accent">{new Intl.NumberFormat().format(total_winlose)}</td>
                </tr>
            </table>
        </div>
    </div>
    {:else}
    <div class="modal-box relative max-w-full lg:max-w-xl h-full lg:h-2/3 rounded-none lg:rounded-lg p-2 lg:p-4 overflow-hidden">
        <label for="my-modal-invoicedetail" class="btn btn-xs lg:btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 class="text-xs lg:text-sm font-bold mt-2">PASARAN : {detailslipheader}</h3>
        <div class="overflow-auto h-[90%] scrollbar-thin scrollbar-thumb-green-100 mt-2">
            <table class="table table-zebra w-full" >
                <thead>
                    <tr>
                        <th width="*" class="text-xs lg:text-sm text-left">PERMAINAN</th>
                        <th width="25%" class="text-xs lg:text-sm text-right">BAYAR</th>
                        <th width="25%" class="text-xs lg:text-sm text-right">MENANG</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th 
                            on:click={() => {
                                fetch_invoicealldetailpermainan(
                                    "4D",
                                    total4d_bayar
                                );
                            }}
                            class="text-xs lg:text-sm text-left whitespace-nowrap cursor-pointer underline">4D</th>
                        <td class="text-xs lg:text-sm text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(total4d_bayar)}</td>
                        <td class="text-xs lg:text-sm text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(totalwin_4d)}</td>
                    </tr>
                    <tr>
                        <th 
                            on:click={() => {
                                fetch_invoicealldetailpermainan(
                                    "3D",
                                    total3d_bayar
                                );
                            }}
                            class="text-xs lg:text-sm text-left whitespace-nowrap cursor-pointer underline">3D</th>
                        <td class="text-xs lg:text-sm text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(total3d_bayar)}</td>
                        <td class="text-xs lg:text-sm text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(totalwin_3d)}</td>
                    </tr>
                    <tr>
                        <th 
                            on:click={() => {
                                fetch_invoicealldetailpermainan(
                                    "2D",
                                    total2d_bayar
                                );
                            }}
                            class="text-xs lg:text-sm text-left whitespace-nowrap cursor-pointer underline">2D</th>
                        <td class="text-xs lg:text-sm text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(total2d_bayar)}</td>
                        <td class="text-xs lg:text-sm text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(totalwin_2d)}</td>
                    </tr>
                    <tr>
                        <th 
                            on:click={() => {
                                fetch_invoicealldetailpermainan(
                                    "COLOK_BEBAS",
                                    totalcolokbebas_bayar
                                );
                            }}
                            class="text-xs lg:text-sm text-left whitespace-nowrap cursor-pointer underline">COLOK BEBAS</th>
                        <td class="text-xs lg:text-sm text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(totalcolokbebas_bayar)}</td>
                        <td class="text-xs lg:text-sm text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(totalwin_colokbebas)}</td>
                    </tr>
                    <tr>
                        <th 
                            on:click={() => {
                                fetch_invoicealldetailpermainan(
                                    "COLOK_MACAU",
                                    totalcolokmacau_bayar
                                );
                            }}
                            class="text-xs lg:text-sm text-left whitespace-nowrap cursor-pointer underline">COLOK MACAU</th>
                        <td class="text-xs lg:text-sm text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(totalcolokmacau_bayar)}</td>
                        <td class="text-xs lg:text-sm text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(totalwin_colokmacau)}</td>
                    </tr>
                    <tr>
                        <th 
                            on:click={() => {
                                fetch_invoicealldetailpermainan(
                                    "COLOK_NAGA",
                                    totalcoloknaga_bayar
                                );
                            }}
                            class="text-xs lg:text-sm text-left whitespace-nowrap cursor-pointer underline">COLOK NAGA</th>
                        <td class="text-xs lg:text-sm text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(totalcoloknaga_bayar)}</td>
                        <td class="text-xs lg:text-sm text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(totalwin_coloknaga)}</td>
                    </tr>
                    <tr>
                        <th 
                            on:click={() => {
                                fetch_invoicealldetailpermainan(
                                    "COLOK_JITU",
                                    totalcolokjitu_bayar
                                );
                            }}
                            class="text-xs lg:text-sm text-left whitespace-nowrap cursor-pointer underline">COLOK JITU</th>
                        <td class="text-xs lg:text-sm text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(totalcolokjitu_bayar)}</td>
                        <td class="text-xs lg:text-sm text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(totalwin_colokjitu)}</td>
                    </tr>
                    <tr>
                        <th 
                            on:click={() => {
                                fetch_invoicealldetailpermainan(
                                    "50_50_UMUM",
                                    total5050umum_bayar
                                );
                            }}
                            class="text-xs lg:text-sm text-left whitespace-nowrap cursor-pointer underline">50 - 50 UMUM</th>
                        <td class="text-xs lg:text-sm text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(total5050umum_bayar)}</td>
                        <td class="text-xs lg:text-sm text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(totalwin_5050umum)}</td>
                    </tr>
                    <tr>
                        <th 
                            on:click={() => {
                                fetch_invoicealldetailpermainan(
                                    "50_50_SPECIAL",
                                    total5050special_bayar
                                );
                            }}
                            class="text-xs lg:text-sm text-left whitespace-nowrap cursor-pointer underline">50 - 50 SPECIAL</th>
                        <td class="text-xs lg:text-sm text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(total5050special_bayar)}</td>
                        <td class="text-xs lg:text-sm text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(totalwin_5050special)}</td>
                    </tr>
                    <tr>
                        <th 
                            on:click={() => {
                                fetch_invoicealldetailpermainan(
                                    "50_50_KOMBINASI",
                                    total5050kombinasi_bayar
                                );
                            }}
                            class="text-xs lg:text-sm text-center whitespace-nowrap">50 - 50 KOMBINASI</th>
                        <td class="text-xs lg:text-sm text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(total5050kombinasi_bayar)}</td>
                        <td class="text-xs lg:text-sm text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(totalwin_5050kombinasi)}</td>
                    </tr>
                    <tr>
                        <th 
                            on:click={() => {
                                fetch_invoicealldetailpermainan(
                                    "MACAU_KOMBINASI",
                                    totalmacaukombinasi_bayar
                                );
                            }}
                            class="text-xs lg:text-sm text-left whitespace-nowrap cursor-pointer underline">MACAU / KOMBINASI</th>
                        <td class="text-xs lg:text-sm text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(totalmacaukombinasi_bayar)}</td>
                        <td class="text-xs lg:text-sm text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(totalwin_macaukombinasi)}</td>
                    </tr>
                    <tr>
                        <th 
                            on:click={() => {
                                fetch_invoicealldetailpermainan(
                                    "DASAR",
                                    totaldasar_bayar
                                );
                            }}
                            class="text-xs lg:text-sm text-left whitespace-nowrap cursor-pointer underline">DASAR</th>
                        <td class="text-xs lg:text-sm text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(totaldasar_bayar)}</td>
                        <td class="text-xs lg:text-sm text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(totalwin_dasar)}</td>
                    </tr>
                    <tr>
                        <th 
                            on:click={() => {
                                fetch_invoicealldetailpermainan(
                                    "SHIO",
                                    totalshio_bayar
                                );
                            }}
                            class="text-xs lg:text-sm text-left whitespace-nowrap cursor-pointer underline">SHIO</th>
                        <td class="text-xs lg:text-sm text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(totalshio_bayar)}</td>
                        <td class="text-xs lg:text-sm text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(totalwin_shio)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    {/if}
</div>
<input type="checkbox" id="my-modal-detailbyid" class="modal-toggle" bind:checked={isModal_detailbyid}>
<div class="modal" on:click|self={()=>isModal_detailbyid = false}>
    {#if client_device == "WEBSITE"}
    <div class="modal-box relative max-w-5xl h-2/3 rounded-none lg:rounded-lg p-2 lg:p-4 overflow-hidden">
        <label for="my-modal-detailbyid" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 class="text-xs lg:text-sm font-bold -mt-1">PERMAINAN : {detailslipheaderpermainan}</h3>
        <div class="overflow-auto h-[90%] scrollbar-thin scrollbar-thumb-green-100 mt-4">
            <table class="table table-zebra w-full" >
                <thead>
                    <tr>
                        <th width="1%" class="text-xs lg:text-sm text-center">NO</th>
                        <th width="1%" class="text-xs lg:text-sm text-center">STATUS</th>
                        <th width="15%" class="text-xs lg:text-sm text-center">TIPE</th>
                        <th width="15%" class="text-xs lg:text-sm text-center">PERMAINAN</th>
                        <th width="*" class="text-xs lg:text-sm text-left">NOMOR</th>
                        <th width="15%" class="text-xs lg:text-sm text-right">BET</th>
                        <th width="15%" class="text-xs lg:text-sm text-right">DISC(%)</th>
                        <th width="15%" class="text-xs lg:text-sm text-right">KEI(%)</th>
                        <th width="15%" class="text-xs lg:text-sm text-right">BAYAR</th>
                        <th width="15%" class="text-xs lg:text-sm text-right">WIN</th>
                    </tr>
                </thead>
                <tbody>
                    {#each listhasilinvoicebet as rec}
                    <tr>
                        <th class="text-xs lg:text-sm text-center whitespace-nowrap">{rec.bet_no}</th>
                        <th class="text-sm text-center whitespace-nowrap">
                            <span class="{rec.bet_background} p-1.5 text-xs lg:text-sm  uppercase tracking-wider rounded-lg ">{rec.bet_status}</span>
                        </th>
                        <td class="text-xs lg:text-sm text-center whitespace-nowrap">{rec.bet_tipe}</td>
                        <td class="text-xs lg:text-sm text-center whitespace-nowrap">{rec.bet_permainan}</td>
                        <td class="text-xs lg:text-sm text-center whitespace-nowrap">{rec.bet_nomor}</td>
                        <td class="text-xs lg:text-sm text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(rec.bet_bet)}</td>
                        <td class="text-xs lg:text-sm text-right link-accent whitespace-nowrap">{rec.bet_diskon.toFixed(2)}</td>
                        <td class="text-xs lg:text-sm text-right link-accent whitespace-nowrap">{rec.bet_kei.toFixed(2)}</td>
                        <td class="text-xs lg:text-sm text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(rec.bet_bayar)}</td>
                        <td class="text-xs lg:text-sm text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(rec.bet_win)}</td>
                    </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    </div>
    {:else}
    <div class="modal-box relative max-w-full lg:max-w-xl h-full lg:h-2/3 rounded-none lg:rounded-lg p-2 lg:p-4 overflow-hidden">
        <label for="my-modal-detailbyid" class="btn btn-xs lg:btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 class="text-xs lg:text-sm font-bold mt-1">PERMAINAN : {detailslipheaderpermainan}</h3>
        <div class="overflow-auto h-[90%] scrollbar-thin scrollbar-thumb-green-100 mt-4">
            <table class="table table-zebra w-full" >
                <thead>
                    <tr>
                        <th width="1%" class="text-xs text-center">NO</th>
                        <th width="1%" class="text-xs text-center">STATUS</th>
                        <th width="15%" class="text-xs text-center">TIPE</th>
                        <th width="15%" class="text-xs text-center">PERMAINAN</th>
                        <th width="*" class="text-xs text-left">NOMOR</th>
                        <th width="15%" class="text-xs text-right">BET</th>
                        <th width="15%" class="text-xs text-right">DISC(%)</th>
                        <th width="15%" class="text-xs text-right">KEI(%)</th>
                        <th width="15%" class="text-xs text-right">BAYAR</th>
                        <th width="15%" class="text-xs text-right">WIN</th>
                    </tr>
                </thead>
                <tbody>
                    {#each listhasilinvoicebet as rec}
                    <tr>
                        <th class="text-xs text-center whitespace-nowrap">{rec.bet_no}</th>
                        <th class="text-xs text-center whitespace-nowrap">
                            <span class="{rec.bet_background} p-1.5 text-[11px] uppercase tracking-wider rounded-lg ">{rec.bet_status}</span>
                        </th>
                        <th class="text-xs text-center whitespace-nowrap">{rec.bet_tipe}</th>
                        <th class="text-xs text-center whitespace-nowrap">{rec.bet_permainan}</th>
                        <th class="text-xs text-center whitespace-nowrap">{rec.bet_nomor}</th>
                        <td class="text-xs text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(rec.bet_bet)}</td>
                        <td class="text-xs text-right link-accent whitespace-nowrap">{rec.bet_diskon.toFixed(2)}</td>
                        <td class="text-xs text-right link-accent whitespace-nowrap">{rec.bet_kei.toFixed(2)}</td>
                        <td class="text-xs text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(rec.bet_bayar)}</td>
                        <td class="text-xs text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(rec.bet_win)}</td>
                    </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    </div>
    {/if}
</div>
<input type="checkbox" id="my-modal-pasaran" class="modal-toggle">
<div class="modal">
    {#if client_device == "WEBSITE"}
    <div class="modal-box relative max-w-2xl h-full lg:h-2/3 rounded-none lg:rounded-lg overflow-hidden" >
        <label for="my-modal-pasaran" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 class="text-xs lg:text-sm font-bold -mt-1">INFORMASI</h3>
        <div class="overflow-auto h-[90%] scrollbar-thin scrollbar-thumb-green-100 mt-4">
            <table class="table-normal table-zebra  w-full" >
                <thead>
                    <tr>
                        <th width="*" class="text-xs lg:text-sm text-left">PASARAN</th>
                        <th width="15%" class="text-xs lg:text-sm text-left">NOTE</th>
                        <th width="15%" class="text-xs lg:text-sm text-center">TUTUP</th>
                        <th width="15%" class="text-xs lg:text-sm text-center">JADWAL</th>
                        <th width="15%" class="text-xs lg:text-sm text-center">OPEN</th>
                    </tr>
                </thead>
                <tbody>
                    {#each listkeluaran as rec}
                    <tr>
                        <td class="text-xs lg:text-sm text-left whitespace-nowrap">
                            <a class="underline" href="{rec.pasaran_url}" target="_blank">
                                {rec.pasaran}
                            </a>
                        </td>
                        <td class="text-xs lg:text-sm text-left whitespace-nowrap">{rec.pasaran_note}</td>
                        <td class="text-xs lg:text-sm text-left">{rec.pasaran_tglclose}</td>
                        <td class="text-xs lg:text-sm text-left">{rec.pasaran_tglschedule}</td>
                        <td class="text-xs lg:text-sm text-left">{rec.pasaran_tglopen}</td>
                    </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    </div>
    {:else}
    <div class="modal-box relative max-w-full h-full lg:h-2/3 rounded-none lg:rounded-lg p-2 lg:p-4 overflow-hidden">
        <label for="my-modal-pasaran" class="btn btn-xs btn-circle absolute right-2 top-2">✕</label>
        <h3 class="text-xs lg:text-sm font-bold mt-1">INFORMASI</h3>
        <div class="overflow-auto h-[90%] scrollbar-thin scrollbar-thumb-green-100 mt-4">
            <table class="table table-zebra w-full" >
                <thead>
                    <tr>
                        <th width="*" class="text-xs text-left">PASARAN</th>
                        <th width="15%" class="text-xs text-left">NOTE</th>
                        <th width="15%" class="text-xs text-center">TUTUP</th>
                        <th width="15%" class="text-xs text-center">JADWAL</th>
                        <th width="15%" class="text-xs text-center">OPEN</th>
                    </tr>
                </thead>
                <tbody>
                    {#each listkeluaran as rec}
                    <tr>
                        <th class="text-xs text-left whitespace-nowrap">
                            <a class="underline" href="{rec.pasaran_url}" target="_blank">
                                {rec.pasaran}
                            </a>
                        </th>
                        <td class="text-xs text-left whitespace-nowrap">{rec.pasaran_note}</td>
                        <td class="text-xs text-left">{rec.pasaran_tglclose}</td>
                        <td class="text-xs text-left">{rec.pasaran_tglschedule}</td>
                        <td class="text-xs text-left">{rec.pasaran_tglopen}</td>
                    </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    </div>
    
    {/if}
</div>
{#if client_device == "WEBSITE"}
    <input type="checkbox" id="my-modal-bukumimpi" class="modal-toggle" bind:checked={isModal_bukumimpi}>
    <div class="modal" on:click|self={()=>isModal_bukumimpi = false}>
        <div class="modal-box relative max-w-xl h-full lg:h-2/3 rounded-none lg:rounded-lg overflow-hidden">
            <label for="my-modal-bukumimpi" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 class="text-xs lg:text-sm font-bold -mt-2">BUKU MIMPI</h3>
            <div class="hidden lg:flex justify-start items-center mt-4 ">
                <ul class="flex flex-1 gap-2">
                    <li 
                        on:click={() => {
                            handleClickBukuMimpi("ALL");
                        }}
                        class="{tab_bookdream_all} inline-flex items-center  px-2 py-1.5 text-xs lg:text-sm cursor-pointer rounded-md outline outline-1 outline-offset-1 outline-green-600">ALL</li>
                    <li 
                        on:click={() => {
                            handleClickBukuMimpi("4D");
                        }}
                        class="{tab_bookdream_4d} inline-flex items-center  px-2 py-1.5text-xs lg:text-sm   cursor-pointer rounded-md outline outline-1 outline-offset-1 outline-green-600">4D</li>
                    <li 
                        on:click={() => {
                            handleClickBukuMimpi("3D");
                        }}
                        class="{tab_bookdream_3d} inline-flex items-center  px-2 py-1.5 text-xs lg:text-sm  cursor-pointer rounded-md outline outline-1 outline-offset-1 outline-green-600">3D</li>
                    <li 
                        on:click={() => {
                            handleClickBukuMimpi("2D");
                        }}
                        class="{tab_bookdream_2d} inline-flex items-center  px-2 py-1.5 text-xs lg:text-sm  cursor-pointer rounded-md outline outline-1 outline-offset-1 outline-green-600">2D</li>
                </ul>
                <div class="flex flex-1 h-full ">
                    <input
                        bind:value={searchbukumimpi}
                        on:keypress={handleKeyboardbukumimpi_checkenter} 
                        type="text" placeholder="Ketik Apa Yang Kamu Mimpikan" class="input mt-1 bg-base-300 rounded-sm input-sm w-full max-w-4xl">
                </div>
            </div>
            <div class="flex flex-col justify-start mt-4 overflow-auto h-[80%] scrollbar-thin scrollbar-thumb-green-100 max-w-full" >
                {#each filterBukuMimpi as rec}
                    <div class="flex flex-row mb-4 border-b-2 border-b-base-300">
                        <div class="flex w-[3rem] text-center text-sm self-center link-accent">{rec.bukumimpi_tipe}</div>
                        <div class="flex flex-1">
                            <p class="p-1 text-sm text-justify">
                                {rec.bukumimpi_nama}<br>
                                <span class="link-accent text-sm ">{rec.bukumimpi_nomor}</span>
                            </p>
                        </div>
                    </div>
                {/each}
            </div>
            <div class="flex justify-start items-center mt-4 lg:hidden 2xl:hidden xl:hidden md:hidden sm:hidden ">
                <ul class="flex flex-1 gap-2">
                    <li 
                        on:click={() => {
                            handleClickBukuMimpi("ALL");
                        }}
                        class="{tab_bookdream_all} inline-flex items-center  px-2 py-1.5 text-xs lg:text-sm cursor-pointer rounded-md outline outline-1 outline-offset-1 outline-green-600">ALL</li>
                    <li 
                        on:click={() => {
                            handleClickBukuMimpi("4D");
                        }}
                        class="{tab_bookdream_4d} inline-flex items-center  px-2 py-1.5text-xs lg:text-sm   cursor-pointer rounded-md outline outline-1 outline-offset-1 outline-green-600">4D</li>
                    <li 
                        on:click={() => {
                            handleClickBukuMimpi("3D");
                        }}
                        class="{tab_bookdream_3d} inline-flex items-center  px-2 py-1.5 text-xs lg:text-sm  cursor-pointer rounded-md outline outline-1 outline-offset-1 outline-green-600">3D</li>
                    <li 
                        on:click={() => {
                            handleClickBukuMimpi("2D");
                        }}
                        class="{tab_bookdream_2d} inline-flex items-center  px-2 py-1.5 text-xs lg:text-sm  cursor-pointer rounded-md outline outline-1 outline-offset-1 outline-green-600">2D</li>
                </ul>
                <div class="flex flex-1 h-full ">
                    <input
                        bind:value={searchbukumimpi}
                        on:keypress={handleKeyboardbukumimpi_checkenter} 
                        type="text" placeholder="Ketik Apa Yang Kamu Mimpikan" class="input mt-1 bg-base-300 rounded-sm input-sm w-full max-w-4xl">
                </div>
            </div>
        </div>
    </div>
{:else}
    <input type="checkbox" id="my-modal-bukumimpi" class="modal-toggle" bind:checked={isModal_bukumimpi}>
    <div class="modal" on:click|self={()=>isModal_bukumimpi = false}>
        <div class="modal-box relative max-w-xl max-h-full rounded-none p-1 overflow-hidden">
            <label for="my-modal-bukumimpi" class="btn btn-xs btn-circle absolute right-2 top-2">✕</label>
            <h3 class="text-xs lg:text-md font-bold mt-1">BUKU MIMPI</h3>
            <div class="flex flex-col justify-start mt-4 overflow-auto scrollbar-thin scrollbar-thumb-green-100 bg-base-200 p-4" style="height:{client_device_height_custom-200}px">
                {#each filterBukuMimpi as rec}
                    <div class="flex flex-row mb-4 border-b-2 border-b-base-300">
                        <div class="flex w-[3rem] text-center text-sm self-center link-accent">{rec.bukumimpi_tipe}</div>
                        <div class="flex flex-1">
                            <p class="p-1 text-xs text-justify">
                                {rec.bukumimpi_nama}<br>{client_device_height_custom-200}
                                <span class="link-accent text-xs ">{rec.bukumimpi_nomor}</span>
                            </p>
                            
                        </div>
                    </div>
                {/each}
            </div>
            <div class="flex flex-col">
                <div class="flex justify-start items-center mt-4 mb-4">
                    <ul class="flex flex-1 gap-2 justify-center">
                        <li 
                            on:click={() => {
                                handleClickBukuMimpi("ALL");
                            }}
                            class="{tab_bookdream_all} inline-flex items-center  px-2 py-1.5 text-xs lg:text-sm cursor-pointer rounded-md outline outline-1 outline-offset-1 outline-green-600">ALL</li>
                        <li 
                            on:click={() => {
                                handleClickBukuMimpi("4D");
                            }}
                            class="{tab_bookdream_4d} inline-flex items-center  px-2 py-1.5 text-xs lg:text-sm cursor-pointer rounded-md outline outline-1 outline-offset-1 outline-green-600">4D</li>
                        <li 
                            on:click={() => {
                                handleClickBukuMimpi("3D");
                            }}
                            class="{tab_bookdream_3d} inline-flex items-center  px-2 py-1.5 text-xs lg:text-sm cursor-pointer rounded-md outline outline-1 outline-offset-1 outline-green-600">3D</li>
                        <li 
                            on:click={() => {
                                handleClickBukuMimpi("2D");
                            }}
                            class="{tab_bookdream_2d} inline-flex items-center  px-2 py-1.5 text-xs lg:text-sm cursor-pointer rounded-md outline outline-1 outline-offset-1 outline-green-600">2D</li>
                    </ul>
                </div>
                <div class="flex">
                    <input
                    bind:value={searchbukumimpi}
                    on:keypress={handleKeyboardbukumimpi_checkenter} 
                    type="text" placeholder="Ketik apa yang kamu mimpikan + Enter" class="input input-sm  bg-base-300 rounded-sm input-md w-full max-w-lg min-w-full">
                </div>
            </div>
            
        </div>
    </div>
{/if}

<style>
    .scrollbar-thin::-webkit-scrollbar {
      width: 3px;
      height: 3px;
    }
</style>