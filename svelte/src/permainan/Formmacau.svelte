<script>
	import Button_custom1 from "../component/Button_custom1.svelte";
	import Tablekeranjang from "../permainan/Tablekeranjangmacau.svelte";
	import { createEventDispatcher } from "svelte";

	export let path_api = "";
	export let idcomppasaran = "";
	export let idtrxkeluaran = "";
	export let client_token = "";
	export let client_company = "";
	export let client_username = "";
	export let client_ipaddress = "";
	export let client_device = "";
	export let client_timezone = "";
	export let pasaran_code = "";
	export let pasaran_name = "";
	export let pasaran_periode = 0;
	export let permainan_title = "4D / 3D / 2D";

	

  	let keranjang = [];
	let nomor_global = 0;
	let totalkeranjang = 0;
	let group_btn_beli = false;


	let min_bet = 0;
	let max_bet = 0;
	let win_bet = 0;
	let diskon_bet = 0;
	let limit_total = 0;
	let count_line_macaukombinasi = 0;
	let count_line_standart = 0;
	let db_formkombinasi = 0;
	let db_formkombinasi_dasar = 0;

	//KOMBINASI - INIT FORM
	let select_kombinasi_1 = "";
	let select_kombinasi_1_input;
	let select_kombinasi_2 = "";
	let select_kombinasi_2_input;
	let select_kombinasi_3 = "";
	let select_kombinasi_3_input;
	let bet_kombinasi = "";

	let dispatch = createEventDispatcher();
	let isModalAlert = false
	let isModalAlertTabPermainan = false
	let isModalLoading = false
	let flag_fulldiskon = ""
	let msg_error = ""

	let card_custom = ""
	if(client_device == "MOBILE"){
		card_custom = "mx-2"
	}
	
  	const handleTambah = (e) => {
		switch (e) {
			case "macaukombinasi":
				if (select_kombinasi_1 == "" && select_kombinasi_2 == "" && select_kombinasi_3 == "" && parseInt(bet_kombinasi) < min_bet) {
					select_kombinasi_1_input.focus();
				} else {
					formkombinasi_add();
				}
				break;
		}
  	};
  	
  	async function savetransaksi() {
    	msg_error = "";
		group_btn_beli = false;
		isModalLoading = true;
		const res = await fetch(path_api+"api/savetransaksi", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				pasaran_idtransaction: idtrxkeluaran,
				pasaran_idcomp: idcomppasaran,
				pasaran_code: pasaran_code,
				pasaran_periode: pasaran_periode,
				token: client_token,
				company: client_company,
				username: client_username,
				ipaddress: client_ipaddress,
				devicemember: client_device,
				timezone: client_timezone,
				total: totalkeranjang,
				data: keranjang,
			}),
		});
		const json = await res.json();
		let messageerror = json.messageerror
		let totalbayar_server = json.totalbayar
		if (json.status == "200") {
			if(messageerror != ""){
				msg_error += messageerror
			}
			if(parseInt(totalbayar_server) > 0){
				msg_error += "Data telah berhasil disimpan, Total belanja : " +new Intl.NumberFormat().format(totalbayar_server)
			}
			if(msg_error != ""){
        		isModalAlert = true;
      		}
			isModalLoading = false;
			dispatch("handleInvoice", "call");
			reset();
		} else {
			if (json.status == "500" || json.status == "404") {
				group_btn_beli = true;
				isModalAlert = true;
				isModalLoading = false;
			}
		}
	}
	function addKeranjang(nomor,game,bet,diskon_percen,diskon,bayar,win,kei_percen,kei,tipetoto) {
		let total_data = keranjang.length;
		let flag_data = false;
		msg_error = "";
		for (var i = 0; i < total_data; i++) {
			switch (game) {
				case "MACAU_KOMBINASI":
					if (nomor == keranjang[i].nomor.toString()) {
						let maxtotal_bayarmacaukombinasi = 0;
						for (var j = 0; j < keranjang.length; j++) {
							if ("MACAU_KOMBINASI" == keranjang[j].permainan) {
								if (nomor == keranjang[j].nomor) {
									maxtotal_bayarmacaukombinasi = parseInt(maxtotal_bayarmacaukombinasi) + parseInt(keranjang[j].bet);
								}
							}
						}
						if (parseInt(limit_total) < (parseInt(maxtotal_bayarmacaukombinasi)+parseInt(bet))) {
							msg_error = "Nomor ini : " +nomor + " sudah melebihi LIMIT TOTAL MACAU KOMBINASI<br />";
							flag_data = true;
						}
					}
					break;
			}
		}
		if (flag_data == false) {
			nomor_global = nomor_global + 1;
			const data = {
				id: nomor_global,
				nomor,
				permainan: game,
				bet,
				diskon,
				diskonpercen: diskon_percen,
				bayar,
				win,
				kei,
				kei_percen,tipetoto
			};
			keranjang = [data, ...keranjang];
			count_keranjang();
		}else{
			totalkeranjang = totalkeranjang  - bayar;
		}
		if(msg_error != ""){
			isModalAlert = true;
		}
	}
  
  	const removekeranjang = (e) => {
		keranjang = keranjang.filter(
			(keranjang) => keranjang.id != e.detail.idkeranjang
		);
		totalkeranjang = totalkeranjang - e.detail.bayar;
		count_keranjang();
	};

  	const removekeranjangall = (e) => {
		if (keranjang.length > 0) {
			reset();
			count_keranjang();
		} else {
      		isModalAlert = true;
			msg_error = "Tidak ada list transaksi";
		}
	};

  	const handleSave = (e) => {
		if (keranjang.length > 0) {
			savetransaksi();
		} else {
			isModalAlert = true;
			msg_error = "Tidak ada list transaksi";
		}
	};
  	function reset() {
		keranjang = [];
		group_btn_beli = true;
		totalkeranjang = 0;
		count_line_macaukombinasi = 0;
		count_line_standart = 0;
	}
  	async function inittogel_432d(e) {
		const res = await fetch(path_api+"api/inittogel_432d", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				company: client_company,
				pasaran_code: pasaran_code,
				permainan: e,
			}),
		});
		group_btn_beli = true;
		const json = await res.json();
		let record = json.record;
		for (var i = 0; i < record.length; i++) {
			min_bet = parseInt(record[i]["min_bet"]);
			max_bet = parseInt(record[i]["max_bet"]);
			win_bet = parseFloat(record[i]["win_bet"]);
			diskon_bet = parseFloat(record[i]["diskon_bet"]);
			limit_total = parseInt(record[i]["limit_total"]);
		}
	}
  	function count_keranjang() {
		let count_umum = 0;
		let count_kombinasi = 0;
		for (let i = 0; i < keranjang.length; i++) {
			switch (keranjang[i].permainan.toString()) {
				case "MACAU_KOMBINASI":
					count_kombinasi = count_kombinasi + 1;
					break;
			}
		}
		count_line_macaukombinasi = count_kombinasi + db_formkombinasi;
		count_line_standart = count_umum + db_formkombinasi_dasar;
	}
	
	function formkombinasi_add() {
		let flag = true;
		let nomor = select_kombinasi_1;
		let nomor2 = select_kombinasi_2;
		let nomor3 = select_kombinasi_3;
		let bet = bet_kombinasi;
		let diskon = 0;
		let diskonpercen = 0;
		let win = win_bet;
		let kei = 0;
		let keipersen = 0;
		let bayar = 0;
		let nmgame = "MACAU_KOMBINASI";
		msg_error = "";
		if (nomor == "") {
			select_kombinasi_1_input.focus();
			flag = false;
			msg_error += "Tebak tidak boleh kosong<br>";
		}
		if (nomor2 == "") {
			select_kombinasi_2_input.focus();
			flag = false;
			msg_error += "Tebak tidak boleh kosong<br>";
		}
		if (nomor3 == "") {
			select_kombinasi_3_input.focus();
			flag = false;
			msg_error += "Tebak tidak boleh kosong<br>";
		}
		if (bet == "") {
			flag = false;
			msg_error += "Bet tidak boleh kosong<br>";
		}
		if (parseInt(bet) < parseInt(min_bet)) {
			bet_kombinasi = min_bet;
			flag = false;
			msg_error += "Minimal Bet : " + min_bet + "<br>";
		}
		if (parseInt(bet) > parseInt(max_bet)) {
			bet_kombinasi = max_bet;
			flag = false;
			msg_error += " Maximal Bet : " + max_bet + "<br>";
		}
		if (flag == true) {
			diskon = bet * diskon_bet;
			diskonpercen = diskon_bet;
			win = win_bet;
			bayar = parseInt(bet) - parseInt(Math.ceil(diskon));
			totalkeranjang = bayar + totalkeranjang;
			addKeranjang(
				nomor + "_" + nomor2 + "_" + nomor3,
				nmgame,
				bet_kombinasi,
				diskonpercen,
				diskon,
				bayar,
				win,
				keipersen,
				kei,flag_fulldiskon
			);
			clearField();
		}
		if (msg_error != "") {
			isModalAlert = true;
		}
	}
	
	inittogel_432d("macaukombinasi");
	
 	
  	const handleKeyboard_number = (e) => {
    	let numbera;
		for (let i = 0; i < bet_kombinasi.length; i++) {
			numbera = parseInt(bet_kombinasi[i]);
			if (isNaN(numbera)) {
				bet_kombinasi = "";
			}
		}
  	}
  	const handleKeyboard_checkenter = (e) => {
		let keyCode = e.which || e.keyCode;
		if (keyCode === 13) {
			formkombinasi_add();
		}
	};
	const clearField = () => {
		select_kombinasi_1 = "";
		select_kombinasi_2 = "";
		select_kombinasi_3 = "";
		bet_kombinasi = "";
	}
	let form_font_sizelabel_default = "text-xs"
  	let form_font_sizeinput_default = "text-lg"
	  $:{
			let row_keranjang = keranjang.length;
			dispatch("handleKeranjang", {
				row_keranjang,
				totalkeranjang
			});
		}
</script>
<div class="card bg-base-200 shadow-xl rounded-md {card_custom}">
  <div class="card-body p-3">
      {#if client_device == "WEBSITE"}
		<h2 class="card-title text-lg grid grid-cols-2 gap-2">
			<div class="text-left text-xs lg:text-lg md:text-sm">
				{pasaran_name} - {permainan_title}
			</div>
			<div class="text-right text-xs lg:text-lg md:text-sm">PERIODE : #{pasaran_periode} - {pasaran_code}</div>
		</h2>
		<div class="gap-2 grid grid-cols-3">
			<div class="form-control">
				<label class="label">
					<span class="label-text {form_font_sizelabel_default}">TEBAK</span>
				</label>
				<select
					bind:value={select_kombinasi_1}
					bind:this={select_kombinasi_1_input} 
					class="select w-full max-w-xs {form_font_sizeinput_default}">
					<option value="">--Pilih--</option>
					<option value="BELAKANG">BELAKANG</option>
					<option value="TENGAH">TENGAH</option>
					<option value="DEPAN">DEPAN</option>
			  </select> 
			</div>
			<div class="form-control">
				<label class="label">
					<span class="label-text {form_font_sizelabel_default}">TEBAK</span>
				</label>
				<select
					bind:value={select_kombinasi_2}
					bind:this={select_kombinasi_2_input} 
					class="select w-full max-w-xs {form_font_sizeinput_default}">
					<option value="">--Pilih--</option>
					<option value="BESAR">BESAR</option>
					<option value="KECIL">KECIL</option>
			  </select> 
			</div>
			<div class="form-control">
				<label class="label">
					<span class="label-text {form_font_sizelabel_default}">TEBAK</span>
				</label>
				<select
					bind:value={select_kombinasi_3}
					bind:this={select_kombinasi_3_input} 
					class="select w-full max-w-xs {form_font_sizeinput_default}">
					<option value="">--Pilih--</option>
					<option value="GENAP">GENAP</option>
					<option value="GANJIL">GANJIL</option>
			  </select> 
			</div>
		</div>
		<div class="form-control">
			<label class="label">
				<span class="label-text {form_font_sizelabel_default}">&nbsp;</span>
				<span class="label-text-alt {form_font_sizelabel_default}">
					Bet (
						min : {new Intl.NumberFormat().format(min_bet)} dan 
						max : {new Intl.NumberFormat().format(max_bet)}
					)
				</span>
			</label>
			<input
				bind:value={bet_kombinasi}
				on:keyup={handleKeyboard_number}
				on:keypress={handleKeyboard_checkenter} 
				minlength="3"
				maxlength="9"
				type="text" placeholder="Bet" 
				class="input border-none text-right {form_font_sizeinput_default} placeholder:{form_font_sizeinput_default}">
			<label class="label">
				<span class="label-text {form_font_sizelabel_default}">&nbsp;</span>
				<span class="label-text-alt {form_font_sizelabel_default}">{new Intl.NumberFormat().format(bet_kombinasi)}</span>
			</label>
		</div>
		<Button_custom1 
			on:click={() => {
			handleTambah("macaukombinasi");
			}} 
		button_tipe="btn-block"
		button_title="Tambah" />
		
      {:else}
        <h2 class="card-title bg-base-200 text-lg grid grid-cols-2 gap-1">
          <div class="place-content-start text-left text-xs">
              {pasaran_name} <br> {permainan_title}
          </div>
          <div class="place-content-end text-right text-xs -mt-4">PERIODE : #{pasaran_periode} - {pasaran_code}</div>
        </h2>
		<label for="my-modal-inputbet" 
			class="modal-button flex items-center justify-center font-semibold text-center text-xs m-2 h-[3rem] bg-base-200 rounded-md outline outline-1 outline-offset-1 outline-green-600 ">
			Klik Area Ini Untuk Melakukan Transaksi
		</label>
		
		<input type="checkbox" id="my-modal-inputbet" class="modal-toggle">
		<div class="modal modal-bottom sm:modal-middle">
			<div class="modal-box bg-base-200 relative rounded-sm">
				<label for="my-modal-inputbet" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
				<div class="mt-4 gap-2 grid grid-cols-3">
					<div class="form-control">
						<select
							bind:value={select_kombinasi_1}
							class="select w-full max-w-xs text-sm">
							<option value="">--Pilih--</option>
							<option value="BELAKANG">BELAKANG</option>
							<option value="TENGAH">TENGAH</option>
							<option value="DEPAN">DEPAN</option>
					  </select> 
					</div>
					<div class="form-control">
						<select
							bind:value={select_kombinasi_2}
							class="select w-full max-w-xs text-sm">
							<option value="">--Pilih--</option>
							<option value="BESAR">BESAR</option>
							<option value="KECIL">KECIL</option>
					  </select> 
					</div>
					<div class="form-control">
						<select
							bind:value={select_kombinasi_3}
							class="select w-full max-w-xs text-sm">
							<option value="">--Pilih--</option>
							<option value="GENAP">GENAP</option>
							<option value="GANJIL">GANJIL</option>
					  </select> 
					</div>
				</div>
				<div class="form-control">
					<label class="label">
						<span class="label-text text-xs">&nbsp;</span>
						<span class="label-text-alt text-xs">
							Bet (
								min : {new Intl.NumberFormat().format(min_bet)} dan 
								max : {new Intl.NumberFormat().format(max_bet)}
							)
						</span>
					</label>
					<input
						bind:value={bet_kombinasi}
						on:keyup={handleKeyboard_number}
						on:keypress={handleKeyboard_checkenter} 
						minlength="3"
						maxlength="9"
						type="text" placeholder="Bet" 
						class="input border-none text-right text-sm placeholder:text-sm">
					<label class="label">
						<span class="label-text text-sm">&nbsp;</span>
						<span class="label-text-alt text-sm">{new Intl.NumberFormat().format(bet_kombinasi)}</span>
					</label>
				</div>
				<div class="form-control ">
					<Button_custom1 
						on:click={() => {
						handleTambah("macaukombinasi");
						}} 
					button_tipe=""
					button_title="Tambah" />
				</div>
			</div>
		</div>
      {/if}
  </div>
</div>

<input type="checkbox" id="my-modal-alert" class="modal-toggle" bind:checked={isModalAlert}>
<div class="modal " on:click|self={()=>isModalAlert = false}>
    <div class="modal-box relative">
        <label for="my-modal-alert" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 class="text-lg font-bold">INFORMASI</h3>
        <p class="p-3 italic text-xs lg:text-sm bg-base-200 rounded-md mb-4 mt-4">{@html msg_error}</p>
    </div>
</div>

<input type="checkbox" id="my-modal-loading" class="modal-toggle" bind:checked={isModalLoading}>
<div class="modal">
    <div class="modal-box w-auto grass opacity-70">
		<svg class="lds-curve-bars" width="80px"  height="80px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><g transform="translate(50,50)"><circle cx="0" cy="0" r="8.333333333333334" fill="none" stroke="#ffffcb" stroke-width="4" stroke-dasharray="26.179938779914945 26.179938779914945" transform="rotate(308.129)">
			<animateTransform attributeName="transform" type="rotate" values="0 0 0;360 0 0" times="0;1" dur="1s" calcMode="spline" keySplines="0.2 0 0.8 1" begin="0" repeatCount="indefinite"></animateTransform>
			</circle><circle cx="0" cy="0" r="16.666666666666668" fill="none" stroke="#fac090" stroke-width="4" stroke-dasharray="52.35987755982989 52.35987755982989" transform="rotate(360)">
			<animateTransform attributeName="transform" type="rotate" values="0 0 0;360 0 0" times="0;1" dur="1s" calcMode="spline" keySplines="0.2 0 0.8 1" begin="-0.2" repeatCount="indefinite"></animateTransform>
			</circle><circle cx="0" cy="0" r="25" fill="none" stroke="#ff7c81" stroke-width="4" stroke-dasharray="78.53981633974483 78.53981633974483" transform="rotate(51.8709)">
			<animateTransform attributeName="transform" type="rotate" values="0 0 0;360 0 0" times="0;1" dur="1s" calcMode="spline" keySplines="0.2 0 0.8 1" begin="-0.4" repeatCount="indefinite"></animateTransform>
			</circle><circle cx="0" cy="0" r="33.333333333333336" fill="none" stroke="#c0f6d2" stroke-width="4" stroke-dasharray="104.71975511965978 104.71975511965978" transform="rotate(135.238)">
			<animateTransform attributeName="transform" type="rotate" values="0 0 0;360 0 0" times="0;1" dur="1s" calcMode="spline" keySplines="0.2 0 0.8 1" begin="-0.6" repeatCount="indefinite"></animateTransform>
			</circle><circle cx="0" cy="0" r="41.666666666666664" fill="none" stroke="#dae4bf" stroke-width="4" stroke-dasharray="130.89969389957471 130.89969389957471" transform="rotate(224.762)">
			<animateTransform attributeName="transform" type="rotate" values="0 0 0;360 0 0" times="0;1" dur="1s" calcMode="spline" keySplines="0.2 0 0.8 1" begin="-0.8" repeatCount="indefinite"></animateTransform>
			</circle></g>
		</svg>
    </div>
</div>

<input type="checkbox" id="my-modal-alertbbfs" class="modal-toggle" bind:checked={isModalAlertTabPermainan}>
<div class="modal" >
    <div class="modal-box relative max-w-lg">
		<label for="my-modal-alertbbfs" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 class="text-sm font-bold capitalize text-center mb-4">Saat Ini Anda Memiliki Transaksi:</h3>
        <p class="p-3 italic text-sm bg-base-200 rounded-md mb-4 mt-4">
            Total Belanja : <span class="text-sm link-accent">{new Intl.NumberFormat().format(totalkeranjang)}</span>
			Harap selesaikan Transaksi Sebelumnya, Sebelum Mengakses Halaman Lainnya
        </p>
    </div>
</div>

<Tablekeranjang
  	on:removekeranjang={removekeranjang}
	on:removekeranjangall={removekeranjangall}
	on:handleSave={handleSave}
	{card_custom}
	{client_device}
	{group_btn_beli}
	{keranjang}
	{totalkeranjang}
	{count_line_macaukombinasi}
	{count_line_standart}
	{min_bet}
	{max_bet}
	{win_bet}
	{diskon_bet}/>



{#if client_device !="WEBSITE"}
	<style>
		.scrollbar-thin::-webkit-scrollbar {
		width: 3px;
		height: 3px;
		}
	</style>
{/if}