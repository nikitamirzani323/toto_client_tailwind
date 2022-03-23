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
    export let listkeluaran = [];
    let listhasilkeluaran = [];
    let listhasilinvoice = [];
    let filterBukuMimpi = [];
    let listBukumimpi = [];
    let resulttogel = [];
    let drodown_count = 0;
    let drodown_close = "";
    let clockmachine = "";
    let searchbukumimpi = "";
    let tipe = "";
    let nmpasaran = "";
    let isModal_result = false
    let isModal_result_bypasaran = false
    let isModal_allinvoice = false
    let isModal_bukumimpi = false
    let tab_bookdream_all = "bg-green-600 text-black"
    let tab_bookdream_4d = ""
    let tab_bookdream_3d = ""
    let tab_bookdream_2d = ""
    function updateClock() {
        let endtime = dayjs().tz(client_timezone).format("DD MMM YYYY | HH:mm:ss");
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
        <div class="navbar ">
            <div class="navbar-start">
            </div>
            <div class="navbar-center text-center">
                <a href="/?token={client_token}" class="btn btn-ghost">
                    <img class="w-36" src="logo-green.svg" alt="">
                </a>
            </div>
            <div class="navbar-end text-right">
                <div class="dropdown dropdown-left ">
                    <label tabindex="0" class="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
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
    <div class="mt-2 mb-2 mx-2 p-0 card bg-base-300 shadow-xl rounded-none">
        <div class="card-body p-3">
            <p class="text-sm">
                Asia/Jakarta<br>{clockmachine} WIB (+7)<br>
                {client_username} ({client_ipaddress}) <br>
                Credit : IDR <span class="link-accent">{new Intl.NumberFormat().format(client_credit)}</span>
            </p>
            <div class="flex flex-row justify-center text-center gap-2">
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
    <div class="modal-box relative max-w-full lg:max-w-xl h-2/3 rounded-none lg:rounded-lg p-2 lg:p-4">
        <label for="my-modal-resulttogel" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 class="text-md font-bold">RESULT</h3>
        <div class="overflow-auto h-[90%] scrollbar-thin scrollbar-thumb-green-100 mt-2">
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
    <div class="modal-box relative max-w-full lg:max-w-xl h-2/3 rounded-none lg:rounded-lg p-2 lg:p-4">
        <label for="my-modal-resulttogel_bypasaran" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 class="text-md font-bold">PASARAN : {nmpasaran}</h3>
        <div class="overflow-auto h-[90%] scrollbar-thin scrollbar-thumb-green-100 mt-2">
            <table class="table-auto table table-zebra w-full" >
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
    <div class="modal-box relative max-w-2xl h-2/3 rounded-none lg:rounded-lg">
        <label for="my-modal-allinvoice" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 class="text-md font-bold">INVOICE</h3>
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
                        <td class="text-xs lg:text-sm text-left whitespace-nowrap">{rec.invoice_periode}</td>
                        <td class="text-xs lg:text-sm text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(rec.invoice_totallose)}</td>
                    </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    </div>
    {:else}
    <div class="modal-box relative max-w-2xl h-full rounded-none p-1">
        <label for="my-modal-allinvoice" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 class="text-md font-bold px-4 mt-2">INVOICE</h3>
        <div class="overflow-auto h-[90%] scrollbar-thin scrollbar-thumb-green-100 mt-4">
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
                        <th class="text-sm text-center whitespace-nowrap">
                            <span class="{rec.invoice_status_background} p-1.5 text-xs lg:text-sm  uppercase tracking-wider rounded-lg ">{rec.invoice_status}</span>
                        </th>
                        <td class="text-xs text-center whitespace-nowrap">{rec.invoice_tglkeluaran}</td>
                        <td class="text-xs text-left whitespace-nowrap">{rec.invoice_pasaran}</td>
                        <td class="text-xs text-left whitespace-nowrap">{rec.invoice_periode}</td>
                        <td class="text-xs text-right link-accent whitespace-nowrap">{new Intl.NumberFormat().format(rec.invoice_totallose)}</td>
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
    <div class="modal-box relative max-w-2xl h-2/3 rounded-none lg:rounded-lg" >
        <label for="my-modal-pasaran" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 class="text-md font-bold">INFORMASI</h3>
        <div class="overflow-auto h-[90%] scrollbar-thin scrollbar-thumb-green-100 mt-1">
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
    <div class="modal-box relative max-w-2xl h-2/3 rounded-none lg:rounded-lg p-2" >
        <label for="my-modal-pasaran" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 class="text-md font-bold">INFORMASI</h3>
        <div class="overflow-auto h-[90%] scrollbar-thin scrollbar-thumb-green-100 mt-1">
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
        <div class="modal-box relative max-w-xl h-2/3 rounded-none lg:rounded-lg">
            <label for="my-modal-bukumimpi" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 class="text-md font-bold">BUKU MIMPI</h3>
            <div class="flex justify-start items-center mt-4">
                <ul class="flex flex-1 gap-2">
                    <li 
                        on:click={() => {
                            handleClickBukuMimpi("ALL");
                        }}
                        class="{tab_bookdream_all} inline-flex items-center transition px-3 py-1.5 whitespace-nowrap inactive cursor-pointer rounded-md outline outline-1 outline-offset-1 outline-green-600">ALL</li>
                    <li 
                        on:click={() => {
                            handleClickBukuMimpi("4D");
                        }}
                        class="{tab_bookdream_4d} inline-flex items-center transition px-3 py-1.5 whitespace-nowrap inactive cursor-pointer rounded-md outline outline-1 outline-offset-1 outline-green-600">4D</li>
                    <li 
                        on:click={() => {
                            handleClickBukuMimpi("3D");
                        }}
                        class="{tab_bookdream_3d} inline-flex items-center transition px-3 py-1.5 whitespace-nowrap inactive cursor-pointer rounded-md outline outline-1 outline-offset-1 outline-green-600">3D</li>
                    <li 
                        on:click={() => {
                            handleClickBukuMimpi("2D");
                        }}
                        class="{tab_bookdream_2d} inline-flex items-center transition px-3 py-1.5 whitespace-nowrap inactive cursor-pointer rounded-md outline outline-1 outline-offset-1 outline-green-600">2D</li>
                </ul>
                <div class="flex justify-end">
                    <input
                        bind:value={searchbukumimpi}
                        on:keypress={handleKeyboardbukumimpi_checkenter} 
                        type="text" placeholder="Ketik + Enter" class="input mt-1 bg-base-300 rounded-sm input-sm w-full max-w-2xl">
                </div>
            </div>
            <div class="flex flex-col justify-start mt-4 overflow-auto h-[80%] scrollbar-thin scrollbar-thumb-green-100">
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
        </div>
    </div>
{:else}
    <input type="checkbox" id="my-modal-bukumimpi" class="modal-toggle" bind:checked={isModal_bukumimpi}>
    <div class="modal" on:click|self={()=>isModal_bukumimpi = false}>
        <div class="modal-box relative max-w-xl h-full rounded-none p-1">
            <label for="my-modal-bukumimpi" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 class="text-md font-bold mt-2">BUKU MIMPI</h3>
            <div class="flex flex-col justify-start mt-4 overflow-auto h-[75%] scrollbar-thin scrollbar-thumb-green-100 bg-base-200 p-4">
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
            <div class="flex flex-col">
                <div class="flex justify-start items-center mt-4 mb-4">
                    <ul class="flex flex-1 gap-2 justify-center">
                        <li 
                            on:click={() => {
                                handleClickBukuMimpi("ALL");
                            }}
                            class="{tab_bookdream_all} inline-flex items-center transition px-3 py-1.5 whitespace-nowrap inactive cursor-pointer rounded-md outline outline-1 outline-offset-1 outline-green-600">ALL</li>
                        <li 
                            on:click={() => {
                                handleClickBukuMimpi("4D");
                            }}
                            class="{tab_bookdream_4d} inline-flex items-center transition px-3 py-1.5 whitespace-nowrap inactive cursor-pointer rounded-md outline outline-1 outline-offset-1 outline-green-600">4D</li>
                        <li 
                            on:click={() => {
                                handleClickBukuMimpi("3D");
                            }}
                            class="{tab_bookdream_3d} inline-flex items-center transition px-3 py-1.5 whitespace-nowrap inactive cursor-pointer rounded-md outline outline-1 outline-offset-1 outline-green-600">3D</li>
                        <li 
                            on:click={() => {
                                handleClickBukuMimpi("2D");
                            }}
                            class="{tab_bookdream_2d} inline-flex items-center transition px-3 py-1.5 whitespace-nowrap inactive cursor-pointer rounded-md outline outline-1 outline-offset-1 outline-green-600">2D</li>
                    </ul>
                </div>
                <div class="flex">
                    <input
                    bind:value={searchbukumimpi}
                    on:keypress={handleKeyboardbukumimpi_checkenter} 
                    type="text" placeholder="Ketik apa yang kamu mimpikan + Enter" class="input mt-1 bg-base-300 rounded-sm input-md w-full max-w-lg md">
                </div>
            </div>
            
        </div>
    </div>
{/if}