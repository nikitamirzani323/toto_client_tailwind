<script>
	import Modal_alert from "../component/Modal_alert.svelte";
	import Button_custom1 from "../component/Button_custom1.svelte";
	import Tablekeranjang from "../permainan/Tablekeranjangshio.svelte";
	import SaveTrans from "../permainan/savetransaksi";
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

	let min_bet = 0;
	let max_bet = 0;
	let win_bet = 0;
	let diskon_bet = 0;
	let limit_total = 0;
	let count_line_shio = 0;
	let count_line_standart = 0;
	let db_formshio = 0;
	let db_formshio_standart = 0;

	//SHIO - INIT FORM
	let select_shio = "";
	let select_shio_input;
	let bet_shio = "";

	let dispatch = createEventDispatcher();
	let isModalAlert = false
	let isModalAlertSystem = false
	let isModalLoading = false
	let flag_fulldiskon = ""
	let msg_error = ""
	let barWidth = 0;
	let card_custom = ""
	if(client_device == "MOBILE"){
		card_custom = "mx-2"
	}
	const animate = () => {
		barWidth++;
  	}
  	const handleTambah = () => {
		if (select_shio == "" && parseInt(bet_shio) < min_bet) {
			select_shio_input.focus();
		} else {
			formshio_add();
		}
  	};
  	
  	
	function addKeranjang(nomor,game,bet,diskon_percen,diskon,bayar,win,
		kei_percen,kei,tipetoto) {
		let total_data = keranjang.length;
		let flag_data = false;
		for (var i = 0; i < total_data; i++) {
			if (nomor == keranjang[i].nomor.toString()) {
				let maxtotal_bayarshio = 0;
				for (var j = 0; j < keranjang.length; j++) {
					if ("SHIO" == keranjang[j].permainan) {
						if (nomor == keranjang[j].nomor) {
							maxtotal_bayarshio = parseInt(maxtotal_bayarshio) + parseInt(keranjang[j].bet);
						}
					}
				}
				if (parseInt(limit_total) < (parseInt(maxtotal_bayarshio) + parseInt(bet))) {
					msg_error +="Nomor ini : " +nomor +" sudah melebihi LIMIT TOTAL SHIO<br />";
					flag_data = true;
				}
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
			isModalLoading = true;
			(async () => {
				msg_error = "";
				let result = await SaveTrans(path_api+"api/savetransaksi",idtrxkeluaran,idcomppasaran,pasaran_code,pasaran_periode,
					client_token,client_company,client_username,client_ipaddress,client_device,
					client_timezone,totalkeranjang,keranjang)
				let server_status_internal = result;
				let server_status_external = result['status'];
				let server_msg = result['message'];
				let server_msg_error = result['messageerror'];
				let server_totalbayar = result['totalbayar'];
				if(server_status_internal == 404){
					msg_error = "System Mengalami Trouble<br>Silahkan Hubungi Administrator"
					isModalAlert = true;
					loader_timeout();
				}else{
					if(server_status_external == 200){
						console.log(server_status_external+" - "+server_msg+" - "+server_msg_error+" - "+server_totalbayar);
						if(server_msg_error != ""){
							msg_error += server_msg_error
						}
						if(parseInt(server_totalbayar) > 0){
							msg_error += "Data telah berhasil disimpan,<br>Total Transaksi : " +new Intl.NumberFormat().format(server_totalbayar)
						}
						if(msg_error != ""){
							isModalAlert = true;
							loader_timeout();
						}
						dispatch("handleInvoice", "call");
						reset();
					}else{
						msg_error = "System Mengalami Trouble<br>Silahkan Hubungi Administrator"
						isModalAlert = true;
						loader_timeout();
					}
					
				}
				isModalLoading = false;
			})()
		} else {
			isModalAlert = true;
			msg_error = "Tidak ada list transaksi";
		}
	};
  	function reset() {
		keranjang = [];
		totalkeranjang = 0;
		count_line_shio = 0;
		count_line_standart = 0;
		inittogel_432d("shio");
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
		if (!res.ok) {
			isModalAlertSystem = true;
		}else{
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
	}
  	function count_keranjang() {
		let count_umum = 0;
		let count_shio = 0;
		for (let i = 0; i < keranjang.length; i++) {
			switch (keranjang[i].permainan.toString()) {
				case "DASAR":
					count_shio = count_shio + 1;
					break;
			}
		}
		count_line_shio = count_shio + db_formshio;
		count_line_standart = count_umum + db_formshio_standart;
	}
	
	function formshio_add() {
		let flag = true;
		let nomor = select_shio;
		let bet = bet_shio;
		let diskon = 0;
		let diskonpercen = 0;
		let win = win_bet;
		let kei = 0;
		let keipersen = 0;
		let bayar = 0;
		let nmgame = "SHIO";
		msg_error = "";
		if (nomor == "") {
			select_shio_input.focus();
			flag = false;
		}
		if (bet == "") {
			flag = false;
			msg_error += "Bet tidak boleh kosong";
		}
		if (parseInt(bet) < parseInt(min_bet)) {
			bet_shio = min_bet;
			flag = false;
			msg_error += "Minimal Bet : " + new Intl.NumberFormat().format(min_bet) + "<br>";
		}
		if (parseInt(bet) > parseInt(max_bet)) {
			bet_shio = max_bet;
			flag = false;
			msg_error += " Maximal Bet : " + new Intl.NumberFormat().format(max_bet) + "<br>";
		}
		if (flag == true) {
			diskon = bet * diskon_bet;
			diskonpercen = diskon_bet;
			win = win_bet;
			bayar = parseInt(bet) - parseInt(Math.ceil(diskon));
			totalkeranjang = bayar + totalkeranjang;
			addKeranjang(
				nomor,
				nmgame,
				bet_shio,
				diskonpercen,
				diskon,
				bayar,
				win,
				0,
				0,flag_fulldiskon
			);
			clearField();
		}
		if (msg_error != "") {
			isModalAlert = true;
			loader_timeout();
		}
	}
	
	inittogel_432d("shio");
	
 	
  	const handleKeyboard_number = (e) => {
    	let numbera;
		for (let i = 0; i < bet_shio.length; i++) {
			numbera = parseInt(bet_shio[i]);
			if (isNaN(numbera)) {
				bet_shio = "";
			}
		}
  	}
  	const handleKeyboard_checkenter = (e) => {
		let keyCode = e.which || e.keyCode;
		if (keyCode === 13) {
			formshio_add();
		}
	};
	const clearField = () => {
		select_shio = "";
		bet_shio = "";
	}
	function loader_timeout(){
		setTimeout(function () {
			let intervalID = setInterval(() => {
				if (barWidth === 100) {
					clearInterval(intervalID);
					isModalAlert = false
					barWidth = 0;
				} else {
					animate();
				}
			}, 100);
		}, 500);
	}
	let form_font_sizelabel_default = "text-xs"
  	let form_font_sizeinput_default = "text-lg"
	if(client_device == "WEBSITE"){
		form_font_sizelabel_default = "text-xs"
		form_font_sizeinput_default = "text-lg"
	}else{	
		form_font_sizelabel_default = "text-xs"
		form_font_sizeinput_default = "text-sm"
	}
	$:{
		let row_keranjang = keranjang.length;
		dispatch("handleKeranjang", {
			row_keranjang,
			totalkeranjang
		});
	}
	const handleBetHistory = (e) => {
		dispatch("handleBetHistory", "call_bethistory");
	};
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
			<div class="gap-2 grid grid-cols-2">
				<div class="form-control">
					<label class="label">
						<span class="label-text {form_font_sizelabel_default}">TEBAK</span>
					</label>
					<select
						bind:value={select_shio}
						bind:this={select_shio_input} 
						class="select w-full max-w-xs {form_font_sizeinput_default}">
						<option value="">--Pilih--</option>
						<option value="ANJING">ANJING</option>
						<option value="AYAM">AYAM</option>
						<option value="MONYET">MONYET</option>
						<option value="KAMBING">KAMBING</option>
						<option value="KUDA">KUDA</option>
						<option value="ULAR">ULAR</option>
						<option value="NAGA">NAGA</option>
						<option value="KELINCI">KELINCI</option>
						<option value="HARIMAU">HARIMAU</option>
						<option value="KERBAU">KERBAU</option>
						<option value="TIKUS">TIKUS</option>
						<option value="BABI">BABI</option>
				</select> 
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
						bind:value={bet_shio}
						on:keyup={handleKeyboard_number}
						on:keypress={handleKeyboard_checkenter} 
						minlength="3"
						maxlength="{max_bet.toString().length}"
						type="text" placeholder="Bet" 
						class="input border-none text-right {form_font_sizeinput_default} placeholder:{form_font_sizeinput_default}">
					<label class="label">
						<span class="label-text {form_font_sizelabel_default}">&nbsp;</span>
						<span class="label-text-alt {form_font_sizelabel_default}">{new Intl.NumberFormat().format(bet_shio)}</span>
					</label>
				</div>
			</div>
			
			<Button_custom1 
				on:click={() => {
				handleTambah();
				}} 
			button_tipe=""
			button_block="btn-block"
			button_title="Keranjang" />
		
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
					<div class="mt-4 gap-2 grid grid-cols-1">
						<div class="form-control">
							<select
								bind:value={select_shio}
								bind:this={select_shio_input} 
								class="select w-full max-w-full {form_font_sizeinput_default}">
								<option value="">--Pilih--</option>
								<option value="ANJING">ANJING</option>
								<option value="AYAM">AYAM</option>
								<option value="MONYET">MONYET</option>
								<option value="KAMBING">KAMBING</option>
								<option value="KUDA">KUDA</option>
								<option value="ULAR">ULAR</option>
								<option value="NAGA">NAGA</option>
								<option value="KELINCI">KELINCI</option>
								<option value="HARIMAU">HARIMAU</option>
								<option value="KERBAU">KERBAU</option>
								<option value="TIKUS">TIKUS</option>
								<option value="BABI">BABI</option>
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
							bind:value={bet_shio}
							on:keyup={handleKeyboard_number}
							on:keypress={handleKeyboard_checkenter} 
							minlength="3"
							maxlength="{max_bet.toString().length}"
							type="text" placeholder="Bet" 
							class="input border-none text-right {form_font_sizeinput_default} placeholder:{form_font_sizeinput_default}">
						<label class="label">
							<span class="label-text {form_font_sizelabel_default}">&nbsp;</span>
							<span class="label-text-alt {form_font_sizelabel_default}">{new Intl.NumberFormat().format(bet_shio)}</span>
						</label>
					</div>
					<Button_custom1 
						on:click={() => {
						handleTambah();
						}} 
					button_tipe=""
					button_block="btn-sm btn-block"
					button_title="Keranjang" />
				</div>
			</div>
      	{/if}
 	</div>
</div>

<input type="checkbox" id="my-modal-alert" class="modal-toggle" bind:checked={isModalAlert}>
<Modal_alert 
	modal_id="my-modal-alert" 
	modal_tipe="1" 
	modal_title="INFORMASI" 
	modal_title_class="" 
	modal_p_class="" 
	modal_widthheight_class="" 
	modal_bar={barWidth+1} 
	modal_message="{msg_error}" />
<input type="checkbox" id="my-modal-AlertSystem" class="modal-toggle" bind:checked={isModalAlertSystem}>
<Modal_alert 
	modal_id="my-modal-AlertSystem" 
	modal_widthheight_class="w-11/12 max-w-xl" 
	modal_tipe="2" 
	modal_title="" 
	modal_path_url="/?token={client_token}" 
	modal_message="
		Maaf Saat Ini Anda TIdak Bisa Mengakses Halaman Ini <br>
		Halaman <b>SHIO</b> Terjadi Kesalahan Sistem Harap Hubungi Administrator
	" />
<input type="checkbox" id="my-modal-loading" class="modal-toggle" bind:checked={isModalLoading}>
<Modal_alert 
	modal_id="my-modal-loading" 
	modal_widthheight_class="w-auto grass opacity-50" 
	modal_tipe="loading" />

<Tablekeranjang
  	on:removekeranjang={removekeranjang}
	on:removekeranjangall={removekeranjangall}
	on:handleSave={handleSave}
	on:handleBetHistory={handleBetHistory}
	{card_custom}
	{client_device}
	{keranjang}
	{totalkeranjang}
	{count_line_shio}
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