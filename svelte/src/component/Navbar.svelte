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
    let drodown_count = 0;
    let drodown_close = "";
    let clockmachine = "";
    function updateClock() {
        let endtime = dayjs().tz(client_timezone).format("DD MMM YYYY | HH:mm:ss");
        clockmachine = endtime;
    }
    $: {
        setInterval(updateClock, 100);
    }
    const switchMenu = () => {
        drodown_count = drodown_count + 1
        if(drodown_count%2 == 0){
            drodown_close = "hidden";
        }else{
            drodown_close = "";
        }
	};
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
            <li data-set-theme="cyberpunk" class="cursor-pointer hover:bg-base-300 p-3" data-act-class="ACTIVECLASS">Cyberpunk</li>
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
                <label for="my-modal-result" class="btn modal-button shadow-lg shadow-green-500/50">RESULT</label>
                <label for="my-modal-invoice" class="btn modal-button shadow-lg shadow-green-500/50">INVOICE</label>
                <label for="my-modal-pasaran" class="btn modal-button shadow-lg shadow-green-500/50">PASARAN</label>
                <label for="my-modal-bukumimpi" class="btn modal-button shadow-lg shadow-green-500/50">BUKU MIMPI</label>
            </div>
        </div>
        <div class="navbar-end hidden text-xs lg:text-sm lg:inline-block text-right">
            <p>
                Asia/Jakarta <br> 
                {clockmachine} WIB<br>
                {client_username} ({client_ipaddress}) <br>
                Credit : IDR <span class="link-accent">{new Intl.NumberFormat().format(client_credit)}</span>
            </p>
        </div>
    </div>
{:else}
    <div class="navbar bg-base-200">
        <div class="navbar-start">
            <div
                on:click={() => {
                    switchMenu();
                }}  
                class="dropdown">
              <label tabindex="0" class="btn btn-ghost btn-circle" >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
              </label>
              <ul class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52 {drodown_close}" >
                <li><a>RESULT</a></li>
                <li><a>INVOICE</a></li>
                <li><a>PASARAN</a></li>
                <li><a>BUKU MIMPI</a></li>
              </ul>
            </div>
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
                    <li data-set-theme="cyberpunk" class="cursor-pointer hover:bg-base-300 p-3" data-act-class="ACTIVECLASS">Cyberpunk</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="mt-2 mb-2 mx-2 p-0 card bg-base-300 shadow-xl rounded-none">
        <div class="card-body p-3">
            <p class="text-sm">
                Asia/Jakarta {clockmachine} WIB<br>
                {client_username} ({client_ipaddress}) <br>
                Credit : IDR <span class="link-accent">{new Intl.NumberFormat().format(client_credit)}</span>
            </p>
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