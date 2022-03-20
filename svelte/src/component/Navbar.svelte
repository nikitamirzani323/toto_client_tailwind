<script>
    import { onMount } from 'svelte'
    import { themeChange } from 'theme-change'
    import Themeselet from '../component/theme-select.svelte'
    import dayjs from "dayjs";
    import utc from "dayjs/plugin/utc";
    import timezone from "dayjs/plugin/timezone";

    dayjs.extend(utc);
    dayjs.extend(timezone);
    onMount(() => {
        themeChange(false)
    }) 
    export let client_token = "";
    export let client_company = "";
    export let client_username = "client";
    export let client_credit = 0;
    export let client_ipaddress = "0.0.0.0";
    export let client_timezone = "Asia/Jakarta";
    export let client_device = "";
    let clockmachine = "";
    function updateClock() {
        let endtime = dayjs().tz(client_timezone).format("DD MMM YYYY | HH:mm:ss");
        clockmachine = endtime;
    }
    $: {
        setInterval(updateClock, 100);
    }
</script>
<div class="fixed right-2 top-2 bg-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-lg p-2.5  z-50">
    <Themeselet />
</div>
{#if client_device == "WEBSITE"}
    <div class="navbar bg-base-100">
        <div class="navbar-start">
            <a href="/?token={client_token}" class="btn btn-ghost">
                <img src="logo-green.svg" alt="">
            </a>
        </div>
        <div class="navbar-center hidden lg:flex">
            <div class="flex flex-row gap-2">
                <!-- The button to open modal -->
                <label for="my-modal-result" class="btn modal-button shadow-lg shadow-green-500/50 hover:bg-sky-700">RESULT</label>
                <label for="my-modal-invoice" class="btn modal-button shadow-lg shadow-green-500/50 hover:bg-sky-700">INVOICE</label>
                <label for="my-modal-pasaran" class="btn modal-button shadow-lg shadow-green-500/50 hover:bg-sky-700">PASARAN</label>
                <label for="my-modal-bukumimpi" class="btn modal-button shadow-lg shadow-green-500/50 hover:bg-sky-700">BUKU MIMPI</label>
            </div>
        </div>
        <div class="navbar-end text-sm text-right">
            <p>
                TIMEZONE : Asia/Jakarta {clockmachine} <br>
                {client_username} ({client_ipaddress}) <br>
                Credit : IDR <span class="link-accent">{new Intl.NumberFormat().format(client_credit)}</span>
            </p>
        </div>
    </div>
{:else}
    <div class="navbar bg-base-200">
        <div class="navbar-start">
            <div class="dropdown">
              <label tabindex="0" class="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
              </label>
              <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>RESULT</a></li>
                <li><a>INVOICE</a></li>
                <li><a>PASARAN</a></li>
                <li><a>BUKU MIMPI</a></li>
              </ul>
            </div>
        </div>
        <div class="navbar-center text-center">
            <a href="/?token={client_token}" class="btn btn-ghost">
                <img src="logo-green.svg" alt="">
            </a>
        </div>
        <div class="navbar-end text-right">
            <Themeselet />
        </div>
    </div>
{/if}
<input type="checkbox" id="my-modal-result" class="modal-toggle">
<div class="modal">
    <div class="modal-box">
        <table class="table-fixed table table-zebra w-full" >
            <thead>
                <tr>
                    <th class="text-sm text-center">NOMOR</th>
                    <th class="text-sm text-center">TIPE</th>
                    <th class="text-sm text-center">PERMAINAN</th>
                    <th class="text-sm text-right">BET</th>
                    <th class="text-sm text-right">BAYAR</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="text-sm text-center">1234</td>
                    <td class="text-sm text-center">BB</td>
                    <td class="text-sm text-center">4D</td>
                    <td class="text-sm text-right link-accent">500</td>
                    <td class="text-sm text-right link-accent">1650</td>
                </tr>
                <tr>
                    <td class="text-sm text-center">1234</td>
                    <td class="text-sm text-center">BB</td>
                    <td class="text-sm text-center">4D</td>
                    <td class="text-sm text-right link-accent">500</td>
                    <td class="text-sm text-right link-accent">1650</td>
                </tr>
            </tbody>
        </table>
        <div class="modal-action">
            <label for="my-modal-result" class="btn">Yay!</label>
        </div>
    </div>
</div>

<input type="checkbox" id="my-modal-invoice" class="modal-toggle">
<div class="modal">
    <div class="modal-box">
        <table class="table-fixed table table-zebra w-full" >
            <thead>
                <tr>
                    <th class="text-sm text-center">NOMOR</th>
                    <th class="text-sm text-center">TIPE</th>
                    <th class="text-sm text-center">PERMAINAN</th>
                    <th class="text-sm text-right">BET</th>
                    <th class="text-sm text-right">BAYAR</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="text-sm text-center">1234</td>
                    <td class="text-sm text-center">BB</td>
                    <td class="text-sm text-center">4D</td>
                    <td class="text-sm text-right link-accent">500</td>
                    <td class="text-sm text-right link-accent">1650</td>
                </tr>
                <tr>
                    <td class="text-sm text-center">1234</td>
                    <td class="text-sm text-center">BB</td>
                    <td class="text-sm text-center">4D</td>
                    <td class="text-sm text-right link-accent">500</td>
                    <td class="text-sm text-right link-accent">1650</td>
                </tr>
            </tbody>
        </table>
        <div class="modal-action">
            <label for="my-modal-invoice" class="btn">Yay!</label>
        </div>
    </div>
</div>