<script>
  
  import dayjs from "dayjs";
  import utc from "dayjs/plugin/utc";
  import timezone from "dayjs/plugin/timezone";
  import Viewport from 'svelte-viewport-info'
  import Navbar from './component/Navbar.svelte'
  import Home from './pages/Home.svelte'
  import Permainan from './pages/Permainan.svelte'
 
  dayjs.extend(utc);
  dayjs.extend(timezone);
  
  export let path_api = "";
  // console.log('Viewport Width x Height:     ',Viewport.Width+'x'+Viewport.Height)
  // console.log('standard Screen Orientation: ',Viewport.Orientation)
  // console.log('detailled Screen Orientation:',Viewport.detailledOrientation)
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const token_browser = urlParams.get("token");
  let client_device = "";
  let client_device_height = Viewport.Height
  let client_device_width = Viewport.Width
  let client_device_orientation = Viewport.Orientation
  let container_class = "container mx-auto lg:px-2 text-base-content glass2 xl:rounded-box xl:mt-7 max-w-screen-xl bg-opacity-60 pb-5 xl:pb-5"
  if (token_browser === null) {
    console.log("TOKEN NOT FOUND");
  } else {
    initTimezone();
  }
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    client_device = "MOBILE";
    container_class = "container mx-auto glass2 lg:px-2 text-base-content  xl:rounded-box xl:mt-7 max-w-screen-xl bg-opacity-60 pb-5 xl:pb-5";
  } else {
    client_device = "WEBSITE";
    container_class = "container mx-auto glass2 lg:px-2 text-base-content  xl:rounded-box xl:mt-7 max-w-screen-xl bg-opacity-60 pb-5 xl:pb-5";
  }
  let listkeluaran = [];
  let pasaran_name = "";
  let pasaran_code = "";
  let pasaran_periode = 0;
  let permainan = "4-3-2";
  let client_token = "";
  let client_company = "";
  let client_username = "";
  let client_ipaddress = "";
  let client_timezone = "Asia/Jakarta";
  let client_website_status = "OFFLINE";
  let client_website_message = "";
  let client_credit = 0;
  const pasaran = (e) => {
    pasaran_code = e.detail.code;
    pasaran_name = e.detail.name;
    pasaran_periode = e.detail.periode;
  };
  let record = "";
  let isModalAlert = false;
  let message_err = "";
  async function initTimezone() {
    const res = await fetch(path_api+"api/healthz");
    if (!res.ok) {
      const message = `An error has occured: ${res.status}`;
      throw new Error(message);
    } else {
      const json = await res.json();
      client_ipaddress = json.real_ip;
      client_timezone = "Asia/Jakarta";
    }
    initapp(token_browser);
  }
  async function initapp(e) {
    const resInit = await fetch(path_api+"api/init", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: e,
      }),
    });
    if (!resInit.ok) {
      const initMessage = `An error has occured: ${resInit.status}`;
      throw new Error(initMessage);
    } else {
      const initJson = await resInit.json();
      if (initJson.status === 200) {
        switch (initJson.company) {
          case "":
            css_err = "display:inline-block";
            message_err = "Agen not found, Please contact admin";
            setTimeout(function () {
              css_err = "display: none;";
            }, 5000);
            break;
          default:
            client_token = initJson.token;
            client_company = initJson.company;
            client_username = initJson.developer;
            client_credit = initJson.credit;
            client_website_status = initJson.website_status;
            client_website_message = initJson.website_message;
            if (client_website_status == "OFFLINE") {
              client_token = "";
              message_err = client_website_message.replace(",","<br>");
              isModalAlert = true;
            } else {
              initPasaran();
            }
        }
      }
    }
  }
  async function initPasaran() {
    const resPasar = await fetch(path_api+"api/listpasaran", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: client_token,
        company: client_company,
        timezone: client_timezone,
      }),
    });
    if (!resPasar.ok) {
      const pasarMessage = `An error has occured: ${resPasar.status}`;
      throw new Error(pasarMessage);
    } else {
      const jsonPasar = await resPasar.json();
      if (jsonPasar.status == 200) {
        record = jsonPasar.record;
        if (record != null) {
          for (var i = 0; i < record.length; i++) {
            listkeluaran = [
              ...listkeluaran,
              {
                id: record[i]["pasaran_id"],
                pasaran_code: record[i]["pasaran_id"],
                pasaran: record[i]["pasaran_togel"],
                pasaran_periode: record[i]["pasaran_periode"],
                pasaran_tgl: dayjs(record[i]["pasaran_marketclose"]).tz(client_timezone).format("DD MMM YYYY | HH:mm"),
                pasaran_tglclose: dayjs(record[i]["pasaran_marketclose"]).tz(client_timezone).format("HH:mm"),
                pasaran_tglschedule: dayjs(record[i]["pasaran_marketschedule"]).tz(client_timezone).format("HH:mm"),
                pasaran_tglopen: dayjs(record[i]["pasaran_marketopen"]).tz(client_timezone).format("HH:mm"),
                pasaran_url: record[i]["pasaran_url"],
                pasaran_note: record[i]["pasaran_note"],
                pasaran_status: record[i]["pasaran_status"],
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
  }
  let client_device_height_custom =  parseInt(client_device_height);
</script>
<svelte:head>
  <title>APP TOTO</title>
  <meta name="theme-color" content="#2b2a33" />
</svelte:head>
<svelte:body
  on:viewportchanged={() => {
    client_device_height_custom = parseInt(Viewport.Height)
    // console.log('HEIGHT Size changed to: ',client_device_height_custom)
    // console.log('HEIGHT Size2 changed to: ',Viewport.Height)
    // console.log('Viewport Size changed to: ',Viewport.Width+'x'+Viewport.Height)
  }}
  on:orientationchangeend={() => { 
    client_device_orientation = Viewport.Orientation
    // console.log(client_device_orientation)
    // console.log(
    //   'Screen Orientation changed to: ', Viewport.Orientation + (
    //     Viewport.detailledOrientation == null
    //     ? ''
    //     : '(' + Viewport.detailledOrientation + ')'
    //   )
    // ) 
  }}
/>

{#if client_website_status == "ONLINE"}
  <div class="{container_class} "> 
    {#if token_browser != "" || client_token != ""}
        <Navbar
          {path_api}
          {pasaran_code}
          {client_token}
          {client_company}
          {client_username}
          {client_credit}
          {client_ipaddress}
          {client_timezone}
          {client_device} 
          {client_device_height_custom} 
          {client_device_orientation} 
          {listkeluaran}/>
          {#if pasaran_code != ""}
            <Permainan
              {client_device_height_custom}
              {path_api}
              {client_token}
              {client_company}
              {client_username}
              {client_credit}
              {client_ipaddress}
              {client_timezone}
              {client_device}
              {pasaran_code}
              {pasaran_name}
              {pasaran_periode}
              {permainan}
              {listkeluaran}/>
          {:else}
            <Home 
              {client_token}
              {client_company}
              {client_username}
              {client_credit}
              {client_ipaddress}
              {client_timezone}
              {client_device}
              {listkeluaran} 
              on:pasaran={pasaran}/>
          {/if}
      {:else}
        TOKEN NOT FOUND
      {/if}
  </div>
{:else}
  <input type="checkbox" id="my-modal-alert" class="modal-toggle" bind:checked={isModalAlert}>
  <div class="modal" on:click|self={()=>isModalAlert = false}>
      <div class="modal-box relative">
          <label for="my-modal-alert" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 class="text-lg font-bold">INFORMATION</h3>
          <p class="py-4 text-center">{@html message_err}</p>
      </div>
  </div>
{/if}
{#if listkeluaran != ""}
<footer class=" footer footer-center p-4 text-base-content mt-2 text-center">
  <div class="">
    <p class="text-xs lg:text-sm text-center">
      Copyright © 2022 - Powerby
    </p>
    <img class="w-24 lg:w-28" src="https://isbtoto.net/logo-green.svg" alt="SDSB">
  </div>
</footer>
{/if}
<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  .glass2 {
    border: none;
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
    background-color: transparent;
    background-image: linear-gradient( 135deg, rgb(255 255 255 / var(--glass-opacity, 30%)) 0%, rgb(0 0 0 / 0%) 100% ), linear-gradient( var(--glass-reflex-degree, 100deg), rgb(255 255 255 / var(--glass-reflex-opacity, 10%)) 25%, rgb(0 0 0 / 0%) 25% );
    box-shadow: 0 0 0 1px rgb(255 255 255 / var(--glass-border-opacity, 10%)) inset, 0 0 0 2px rgb(0 0 0 / 5%);
    text-shadow: 0 1px rgb(0 0 0 / var(--glass-text-shadow-opacity, 5%));
  }
</style>


