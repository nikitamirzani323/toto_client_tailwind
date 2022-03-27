<script>
	import Button_custom1 from "../component/Button_custom1.svelte";
	import Tablekeranjang from "../permainan/Tablekeranjangcolok.svelte";
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

	let class_tab_colokbebas = "py-2 m-2 rounded-md outline outline-1 outline-offset-1 outline-green-600";
	let class_tab_colokmacau = "";
	let class_tab_coloknaga = "";
	let class_tab_colokjitu = "";
	let class_tab_polacolok = "";
	let class_tab_432quick2d = "";
	let panel_form_colokbebas = true;
	let panel_form_colokmacau = false;
	let panel_form_coloknaga = false;
	let panel_form_colokjitu = false;
	let panel_form_polacolok = false;

  	let keranjang = [];
	let nomor_global = 0;
	let totalkeranjang = 0;
	let group_btn_beli = false;


	let min_bet_colokbebas = 0;
	let max_bet_colokbebas = 0;
	let disc_bet_colokbebas = 0;
	let win_bet_colokbebas = 0;
	let limittotal_bet_colokbebas = 0;
	let min_bet_colokmacau = 0;
	let max_bet_colokmacau = 0;
	let disc_bet_colokmacau = 0;
	let win_bet_colokmacau = 0;
	let win3_bet_colokmacau = 0;
	let win4_bet_colokmacau = 0;
	let limittotal_bet_colokmacau = 0;
	let min_bet_coloknaga = 0;
	let max_bet_coloknaga = 0;
	let disc_bet_coloknaga = 0;
	let win_bet_coloknaga = 0;
	let win4_bet_coloknaga = 0;
	let limittotal_bet_coloknaga = 0;
	let min_bet_colokjitu = 0;
	let max_bet_colokjitu = 0;
	let disc_bet_colokjitu = 0;
	let winas_bet_colokjitu = 0;
	let winkop_bet_colokjitu = 0;
	let winkepala_bet_colokjitu = 0;
	let winekor_bet_colokjitu = 0;
	let limittotal_bet_colokjitu = 0;

	let count_line_colokbebas = 0;
	let count_line_colokmacau = 0;
	let count_line_coloknaga = 0;
	let count_line_colokjitu = 0;
	let db_formcolok_colokbebas_count_temp = 0;
	let db_formcolok_colokmacau_count_temp = 0;
	let db_formcolok_coloknaga_count_temp = 0;
	let db_formcolok_colokjitu_count_temp = 0;
	
	//COLOK BEBAS - INIT FORM
	let nomor_colokbebas = "";
	let nomor_colokbebas_input;
	let bet_colokbebas = "";
	//COLOK MACAU - INIT FORM
	let nomor_colokmacau_1 = "";
	let nomor_colokmacau_1_input;
	let nomor_colokmacau_2 = "";
	let nomor_colokmacau_2_input;
	let bet_colokmacau = "";
	//COLOK NAGA - INIT FORM
	let nomor_coloknaga_1 = "";
	let nomor_coloknaga_1_input;
	let nomor_coloknaga_2 = "";
	let nomor_coloknaga_2_input;
	let nomor_coloknaga_3 = "";
	let nomor_coloknaga_3_input;
	let bet_coloknaga = "";
	//COLOK JITU - INIT FORM
	let nomor_colokjitu = "";
	let nomor_colokjitu_input;
	let select_pilihancolokjitu = "";
	let select_pilihancolokjitu_input;
	let bet_colokjitu = "";
	//POLA COLOK - INIT FORM
	let nomor_polacolok = "";
	let nomor_polacolok_input;
	let bet_polacolokbebas = "";
	let bet_polacolokmacau = "";
	let bet_polacoloknaga = "";

	let dispatch = createEventDispatcher();
	let isModalAlert = false
	let isModalAlertTabPermainan = false
	let isModalAPilihan = false
	let isModalLoading = false
	let flag_fulldiskon = ""
	let msg_error = ""
	let path_432 = ""

	let card_custom = ""
	if(client_device == "MOBILE"){
		card_custom = "mx-2"
	}
	const changeTabs = (e) => {
		switch(e){
			case "colokbebas":
				class_tab_colokbebas = "py-2 m-2 rounded-md outline outline-1 outline-offset-1 outline-green-600";
				class_tab_colokmacau = "";
				class_tab_coloknaga = "";
				class_tab_colokjitu = "";
				class_tab_polacolok = "";
				class_tab_432quick2d = "";
				panel_form_colokbebas = true;
				panel_form_colokmacau = false;
				panel_form_coloknaga = false;
				panel_form_colokjitu = false;
				panel_form_polacolok = false;
				clearField();
				break;
			case "colokmacau":
				class_tab_colokbebas = "";
				class_tab_colokmacau = "py-2 m-2 rounded-md outline outline-1 outline-offset-1 outline-green-600";
				class_tab_coloknaga = "";
				class_tab_colokjitu = "";
				class_tab_polacolok = "";
				class_tab_432quick2d = "";
				panel_form_colokbebas = false;
				panel_form_colokmacau = true;
				panel_form_coloknaga = false;
				panel_form_colokjitu = false;
				panel_form_polacolok = false;
				clearField();
				break;
			case "coloknaga":
				class_tab_colokbebas = "";
				class_tab_colokmacau = "";
				class_tab_coloknaga = "py-2 m-2 rounded-md outline outline-1 outline-offset-1 outline-green-600";
				class_tab_colokjitu = "";
				class_tab_polacolok = "";
				class_tab_432quick2d = "";
				panel_form_colokbebas = false;
				panel_form_colokmacau = false;
				panel_form_coloknaga = true;
				panel_form_colokjitu = false;
				panel_form_polacolok = false;
				clearField();
				break;
			case "colokjitu":
				class_tab_colokbebas = "";
				class_tab_colokmacau = "";
				class_tab_coloknaga = "p";
				class_tab_colokjitu = "y-2 m-2 rounded-md outline outline-1 outline-offset-1 outline-green-600";
				class_tab_polacolok = "";
				class_tab_432quick2d = "";
				panel_form_colokbebas = false;
				panel_form_colokmacau = false;
				panel_form_coloknaga = false;
				panel_form_colokjitu = true;
				panel_form_polacolok = false;
				clearField();
				break;
			case "polacolok":
				class_tab_colokbebas = "";
				class_tab_colokmacau = "";
				class_tab_coloknaga = "p";
				class_tab_colokjitu = "";
				class_tab_polacolok = "y-2 m-2 rounded-md outline outline-1 outline-offset-1 outline-green-600";
				class_tab_432quick2d = "";
				panel_form_colokbebas = false;
				panel_form_colokmacau = false;
				panel_form_coloknaga = false;
				panel_form_colokjitu = false;
				panel_form_polacolok = true;
				clearField();
				break;
		}
	};
  	const handleTambah = (e,path) => {
		switch (e) {
			case "colokbebas":
				if (nomor_colokbebas == "" && parseInt(bet_colokbebas) < min_bet_colokbebas) {
					nomor_colokbebas_input.focus();
				} else {
					formcolokbebas_add();
				}
				break;
			case "colokmacau":
				if (nomor_colokmacau_1 == "" && nomor_colokmacau_2 == "" && parseInt(bet_colokmacau) < min_bet_colokmacau) {
					nomor_colokmacau_1_input.focus();
				} else {
					formcolokmacau_add();
				}
				break;
			case "coloknaga":
				if (nomor_coloknaga_1 == "" && nomor_coloknaga_2 == "" && nomor_coloknaga_3 == "" && parseInt(bet_coloknaga) < min_bet_coloknaga) {
					nomor_coloknaga_1_input.focus();
				} else {
					formcoloknaga_add();
				}
				break;
			case "colokjitu":
				if (nomor_colokjitu == "" && parseInt(bet_colokjitu) < min_bet_colokjitu) {
					nomor_colokjitu_input.focus();
				} else {
					formcolokjitu_add();
				}
				break;
			case "polacolok":
				if (nomor_polacolok == "") {
					nomor_polacolok_input.focus();
				} else {
					formpolacolok_add();
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
	function addKeranjang(
		nomor,game,
		bet,
		diskon_percen,diskon,
		bayar,win,kei,kei_percen,tipetoto) {
		let total_data = keranjang.length;
		let flag_data = false;
		msg_error = "";
		for (var i = 0; i < total_data; i++) {
			switch (game) {
				case "COLOK_BEBAS":
					if (nomor == keranjang[i].nomor.toString()) {
						let maxtotal_bayarcolokbebas = 0;
						for (var j = 0; j < keranjang.length; j++) {
							if ("COLOK_BEBAS" == keranjang[j].permainan) {
								if (parseInt(nomor) == parseInt(keranjang[j].nomor)) {
									maxtotal_bayarcolokbebas = parseInt(maxtotal_bayarcolokbebas) + parseInt(keranjang[j].bet);
								}
							}
						}
						if (parseInt(limittotal_bet_colokbebas) < (parseInt(maxtotal_bayarcolokbebas)+parseInt(bet))) {
							msg_error ="Nomor ini : " + nomor +" sudah melebihi LIMIT TOTAL COLOK BEBAS<br />";
							flag_data = true;
						}
					}
					break;
				case "COLOK_MACAU":
					if (nomor == keranjang[i].nomor.toString()) {
						let maxtotal_bayarcolokmacau = 0;
						for (var j = 0; j < keranjang.length; j++) {
							if ("COLOK_MACAU" == keranjang[j].permainan) {
								if (parseInt(nomor) == parseInt(keranjang[j].nomor)) {
									maxtotal_bayarcolokmacau = parseInt(maxtotal_bayarcolokmacau) + parseInt(keranjang[j].bet);
								}
							}
						}
						if (parseInt(limittotal_bet_colokmacau) < (parseInt(maxtotal_bayarcolokmacau)+parseInt(bet))) {
							msg_error ="Nomor ini : " + nomor +" sudah melebihi LIMIT TOTAL COLOK MACAU<br />";
							flag_data = true;
						}
					}
					break;
				case "COLOK_NAGA":
					if (nomor == keranjang[i].nomor.toString()) {
						let maxtotal_bayarcoloknaga = 0;
						for (var j = 0; j < keranjang.length; j++) {
							if ("COLOK_NAGA" == keranjang[j].permainan) {
								if (parseInt(nomor) == parseInt(keranjang[j].nomor)) {
									maxtotal_bayarcoloknaga = parseInt(maxtotal_bayarcoloknaga) + parseInt(keranjang[j].bet);
								}
							}
						}
						if (parseInt(limittotal_bet_coloknaga) < (parseInt(maxtotal_bayarcoloknaga)+parseInt(bet))) {
							msg_error ="Nomor ini : " + nomor +" sudah melebihi LIMIT TOTAL COLOK NAGA<br />";
							flag_data = true;
						}
					}
					break;
				case "COLOK_JITU":
					if (nomor == keranjang[i].nomor.toString()) {
						let maxtotal_bayarcolokjitu = 0;
						for (var j = 0; j < keranjang.length; j++) {
							if ("COLOK_JITU" == keranjang[j].permainan) {
								if (nomor == keranjang[j].nomor) {
									maxtotal_bayarcolokjitu = parseInt(maxtotal_bayarcolokjitu) + parseInt(keranjang[j].bet);
								}
							}
						}
						if (parseInt(limittotal_bet_colokjitu) < (parseInt(maxtotal_bayarcolokjitu)+parseInt(bet))) {
							msg_error ="Nomor ini : " + nomor +" sudah melebihi LIMIT TOTAL COLOK JITU<br />";
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
		count_line_colokbebas = 0;
		count_line_colokmacau = 0;
		count_line_coloknaga = 0;
		count_line_colokjitu = 0;
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
			min_bet_colokbebas = parseInt(record[i]["min_bet_colokbebas"]);
			max_bet_colokbebas = parseInt(record[i]["max_bet_colokbebas"]);
			disc_bet_colokbebas = parseFloat(record[i]["disc_bet_colokbebas"]);
			win_bet_colokbebas = parseFloat(record[i]["win_bet_colokbebas"]);
			limittotal_bet_colokbebas = parseInt(record[i]["limittotal_bet_colokbebas"]);
			min_bet_colokmacau = parseInt(record[i]["min_bet_colokmacau"]);
			max_bet_colokmacau = parseFloat(record[i]["max_bet_colokmacau"]);
			disc_bet_colokmacau = parseFloat(record[i]["disc_bet_colokmacau"]);
			win_bet_colokmacau = parseFloat(record[i]["win_bet_colokmacau"]);
			win3_bet_colokmacau = parseFloat(record[i]["win3_bet_colokmacau"]);
			win4_bet_colokmacau = parseFloat(record[i]["win4_bet_colokmacau"]);
			limittotal_bet_colokmacau = parseInt(record[i]["limittotal_bet_colokmacau"]);
			min_bet_coloknaga = parseInt(record[i]["min_bet_coloknaga"]);
			max_bet_coloknaga = parseInt(record[i]["max_bet_coloknaga"]);
			disc_bet_coloknaga = parseFloat(record[i]["disc_bet_coloknaga"]);
			win_bet_coloknaga = parseFloat(record[i]["win_bet_coloknaga"]);
			win4_bet_coloknaga = parseFloat(record[i]["win4_bet_coloknaga"]);
			limittotal_bet_coloknaga = parseInt(record[i]["limittotal_bet_coloknaga"]);
			min_bet_colokjitu = parseInt(record[i]["min_bet_colokjitu"]);
			max_bet_colokjitu = parseInt(record[i]["max_bet_colokjitu"]);
			disc_bet_colokjitu = parseFloat(record[i]["disc_bet_colokjitu"]);
			winas_bet_colokjitu = parseFloat(record[i]["winas_bet_colokjitu"]);
			winkop_bet_colokjitu = parseFloat(record[i]["winkop_bet_colokjitu"]);
			winkepala_bet_colokjitu = parseFloat(record[i]["winkepala_bet_colokjitu"]);
			winekor_bet_colokjitu = parseFloat(record[i]["winekor_bet_colokjitu"]);
			limittotal_bet_colokjitu = parseInt(record[i]["limittotal_bet_colokjitu"]);
		}
	}
  	function count_keranjang() {
		let count_colokbebas = 0;
		let count_colokmacau = 0;
		let count_coloknaga = 0;
		let count_colokjitu = 0;
		for (let i = 0; i < keranjang.length; i++) {
			switch (keranjang[i].permainan.toString()) {
				case "COLOK_BEBAS":
					count_colokbebas = count_colokbebas + 1;
					break;
				case "COLOK_MACAU":
					count_colokmacau = count_colokmacau + 1;
					break;
				case "COLOK_NAGA":
					count_coloknaga = count_coloknaga + 1;
					break;
				case "COLOK_JITU":
					count_colokjitu = count_colokjitu + 1;
					break;
			}
		}
		count_line_colokbebas = count_colokbebas + db_formcolok_colokbebas_count_temp;
		count_line_colokmacau = count_colokmacau + db_formcolok_colokmacau_count_temp;
		count_line_coloknaga = count_coloknaga + db_formcolok_coloknaga_count_temp;
		count_line_colokjitu = count_colokjitu + db_formcolok_colokjitu_count_temp;
	}
	
	function formcolokbebas_add() {
		let flag = true;
		let nomor = nomor_colokbebas;
		let bet = bet_colokbebas;
		let diskon = 0;
		let diskonpercen = 0;
		let win = 0;
		let bayar = 0;
		let nmgame = "COLOK_BEBAS";
		msg_error = "";
		if (nomor == "") {
			nomor_colokbebas_input.focus();
			flag = false;
		}
		if (bet == "") {
			flag = false;
			msg_error + "Bet tidak boleh kosong<br>";
		}
		if (parseInt(bet) < parseInt(min_bet_colokbebas)) {
			flag = false;
			bet_colokbebas = min_bet_colokbebas;
			msg_error += "Minimal Bet : " + min_bet_colokbebas + "<br>";
		}
		if (parseInt(bet) > parseInt(max_bet_colokbebas)) {
			flag = false;
			bet_colokbebas = max_bet_colokbebas;
			msg_error += "Maximal Bet : " + max_bet_colokbebas+ "<br>";
		}
		if (flag == true) {
			diskon = bet * disc_bet_colokbebas;
			diskonpercen = disc_bet_colokbebas;
			win = win_bet_colokbebas;
			bayar = parseInt(bet) - parseInt(Math.ceil(diskon));
			totalkeranjang = bayar + totalkeranjang;
			addKeranjang(
				nomor,
				nmgame,
				bet_colokbebas,
				diskonpercen,
				diskon,
				bayar,
				win,
				0,
				0,flag_fulldiskon
			);
			clearField()
		}
		if (msg_error != "") {
			isModalAlert = true
		}
	}
	function formcolokmacau_add() {
		let flag = true;
		let nomor = nomor_colokmacau_1;
		let nomor2 = nomor_colokmacau_2;
		let bet = bet_colokmacau;
		let diskon = 0;
		let diskonpercen = 0;
		let win = 0;
		let bayar = 0;
		let nmgame = "COLOK_MACAU";
		msg_error = "";
		if (nomor == "") {
			nomor_colokmacau_1_input.focus();
			flag = false;
		}
		if (nomor2 == "") {
			flag = false;
		}
		if (nomor == nomor2) {
			msg_error += "Nomor tidak boleh sama<br>";
			flag = false;
		}
		if (bet == "") {
			flag = false;
			msg_error += "Amount tidak boleh kosong<br>";
		}
		if (parseInt(bet) < parseInt(min_bet_colokmacau)) {
			bet_colokmacau = min_bet_colokmacau;
			flag = false;
			msg_error += "Minimal Bet : " + min_bet_colokmacau +"<br>";
		}
		if (parseInt(bet) > parseInt(max_bet_colokmacau)) {
			bet_colokmacau = max_bet_colokmacau;
			flag = false;
			msg_error += "Maximal Bet : " + max_bet_colokmacau +"<br>";
		}
		if (flag == true) {
			diskon = bet * disc_bet_colokmacau;
			diskonpercen = disc_bet_colokmacau;
			win = win_bet_colokmacau;
			bayar = parseInt(bet) - parseInt(Math.ceil(diskon));
			totalkeranjang = bayar + totalkeranjang;
			addKeranjang(
				nomor + "" + nomor2,
				nmgame,
				bet_colokmacau,
				diskonpercen,
				diskon,
				bayar,
				win,
				0,
				0,flag_fulldiskon
			);
			clearField()
		}
		if (msg_error != "") {
			isModalAlert = true
		}
	}
	function formcoloknaga_add() {
		let flag = true;
		let nomor = nomor_coloknaga_1;
		let nomor2 = nomor_coloknaga_2;
		let nomor3 = nomor_coloknaga_3;
		let bet = bet_coloknaga;
		let diskon = 0;
		let diskonpercen = 0;
		let win = 0;
		let bayar = 0;
		let nmgame = "COLOK_NAGA";
		msg_error = "";
		if (nomor == "") {
			nomor_coloknaga_1_input.focus();
			flag = false;
		}
		if (nomor2 == "") {
			nomor_coloknaga_2_input.focus();
			flag = false;
		}
		if (nomor3 == "") {
			nomor_coloknaga_3_input.focus();
			flag = false;
		}
		if (nomor == nomor2) {
			msg_error += "Nomor tidak boleh sama<br>";
			flag = false;
		}
		if (nomor == nomor3) {
			msg_error += "Nomor tidak boleh sama<br>";
			flag = false;
		}
		if (nomor2 == nomor3) {
			msg_error += "Nomor tidak boleh sama<br>";
			flag = false;
		}
		if (bet == "") {
			flag = false;
			msg_error +=  "Amount tidak boleh kosong<br>";
		}
		if (parseInt(bet) < parseInt(min_bet_coloknaga)) {
			bet_coloknaga = min_bet_coloknaga;
			flag = false;
			msg_error +=  "Minimal Bet : " + min_bet_coloknaga +"<br>";
		}
		if (parseInt(bet) > parseInt(max_bet_coloknaga)) {
			bet_coloknaga = max_bet_coloknaga;
			flag = false;
			msg_error +=  "Maximal Bet : " + max_bet_coloknaga +"<br>";
		}
		if (flag == true) {
			diskon = bet * disc_bet_coloknaga;
			diskonpercen = disc_bet_coloknaga;
			win = win_bet_coloknaga;
			bayar = parseInt(bet) - parseInt(Math.ceil(diskon));
			totalkeranjang = bayar + totalkeranjang;
			addKeranjang(
				nomor + "" + nomor2 + "" + nomor3,
				nmgame,
				bet_coloknaga,
				diskonpercen,
				diskon,
				bayar,
				win,
				0,
				0,flag_fulldiskon
			);
			clearField()
		}
		if (msg_error != "") {
			isModalAlert = true
		}
	}
	function formcolokjitu_add() {
		let flag = true;
		let nomor = nomor_colokjitu;
		let posisi = select_pilihancolokjitu;
		let bet = bet_colokjitu;
		let diskon = 0;
		let diskonpercen = 0;
		let win = 0;
		let bayar = 0;
		let nmgame = "COLOK_JITU";
		msg_error = "";
		if (nomor == "") {
			nomor_colokjitu_input.focus();
			flag = false;
		}
		if (posisi == "") {
			select_pilihancolokjitu_input.focus();
			flag = false;
			msg_error += "Posisi wajib diisi<br>";
		}
		if (bet == "") {
			flag = false;
			msg_error += "Bet tidak boleh kosong<br>";
		}
		if (parseInt(bet) < parseInt(min_bet_colokjitu)) {
			bet_colokjitu = min_bet_colokjitu;
			flag = false;
			msg_error += "Minimal Bet : " + min_bet_colokjitu + "<br>";
		}
		if (parseInt(bet) > parseInt(max_bet_colokjitu)) {
			bet_colokjitu = max_bet_colokjitu;
			flag = false;
			msg_error += "Maximal Bet : " + max_bet_colokjitu + "<br>";
		}
		if (flag == true) {
			diskon = bet * disc_bet_colokjitu;
			diskonpercen = disc_bet_colokjitu;
			switch (posisi) {
				case "AS":
					win = winas_bet_colokjitu;
					break;
				case "KOP":
					win = winkop_bet_colokjitu;
					break;
				case "KEPALA":
					win = winkepala_bet_colokjitu;
					break;
				case "EKOR":
					win = winekor_bet_colokjitu;
					break;
			}
			bayar = parseInt(bet) - parseInt(Math.ceil(diskon));
			totalkeranjang = bayar + totalkeranjang;
			addKeranjang(
				nomor + "_" + posisi,
				nmgame,
				bet_colokjitu,
				diskonpercen,
				diskon,
				bayar,
				win,
				0,
				0,flag_fulldiskon
			);
			clearField()
		}
		if (msg_error != "") {
			isModalAlert = true
		}
	}
	function formpolacolok_add() {
		let flag = true;
		let diskon = 0;
		let diskonpercen = 0;
		let win = 0;
		let bayar = 0;
		let found = false;
		let msg = "";
		msg_error = "";
		if (nomor_polacolok == "") {
			nomor_polacolok.focus();
			flag = false;
		}
		if (nomor_polacolok.length<4 || nomor_polacolok.length>7) {
			nomor_polacolok_input.focus();
			flag = false;
			msg_error += "Minimal 4 Digit dan Maximal 7 Digit<br>"
		}
		
		if(parseInt(bet_polacolokbebas) > 1){
			if (parseInt(bet_polacolokbebas) < parseInt(min_bet_colokbebas)) {
				flag = false;
				bet_polacolokbebas = min_bet_colokbebas;
				msg_error +=  "Minimal Bet Colok Bebas : " + min_bet_colokbebas + "<br>";
			}
			if (parseInt(bet_polacolokbebas) > parseInt(max_bet_colokbebas)) {
				flag = false;
				bet_polacolokbebas = max_bet_colokbebas;
				msg_error +=  "Maximal Bet Colok Bebas : " + max_bet_colokbebas + "<br>";
			}
			if(flag){
				for(let i=0;i<nomor_polacolok.length;i++){
					diskon = bet_polacolokbebas * disc_bet_colokbebas;
					diskonpercen = disc_bet_colokbebas;
					win = win_bet_colokbebas;
					bayar = parseInt(bet_polacolokbebas) - parseInt(Math.ceil(diskon));
					totalkeranjang = bayar + totalkeranjang;
					addKeranjang(
						nomor_polacolok[i],
						"COLOK_BEBAS",
						bet_polacolokbebas,
						diskonpercen,
						diskon,
						bayar,
						win,
						0,
						0,flag_fulldiskon
					);
				}
			}
		}
		if(parseInt(bet_polacolokmacau) > 1){
			let temp2d = []
			if (parseInt(bet_polacolokmacau) < parseInt(min_bet_colokmacau)) {
				flag = false;
				bet_polacolokmacau = min_bet_colokmacau;
				msg_error +=  "Minimal Bet Colok Macau : " + min_bet_colokmacau + "<br>";
			}
			if (parseInt(bet_polacolokmacau) > parseInt(max_bet_colokmacau)) {
				flag = false;
				bet_polacolokmacau = max_bet_colokmacau;
				msg_error +=  "Maximal Bet Colok Macau : " + max_bet_colokmacau + "<br>";
			}
			if(flag){
				let dat = ""
				for(let i=0;i<nomor_polacolok.length;i++){
					for(let j=0;j<nomor_polacolok.length;j++){
						dat = ""
						found = false
						if(nomor_polacolok[i] != nomor_polacolok[j]){
							dat =nomor_polacolok[i]+nomor_polacolok[j];
							found = true
						}
						if(found){
							if(dat != ""){
								temp2d.push(dat)
							}
						}
					}
				}
				for(let i=0;i<temp2d.length;i++){
					diskon = bet_polacolokmacau * disc_bet_colokmacau;
					diskonpercen = disc_bet_colokmacau;
					win = win_bet_colokmacau;
					bayar = parseInt(bet_polacolokmacau) - parseInt(Math.ceil(diskon));
					totalkeranjang = bayar + totalkeranjang;
					addKeranjang(
						temp2d[i],
						"COLOK_MACAU",
						bet_polacolokmacau,
						diskonpercen,
						diskon,
						bayar,
						win,
						0,
						0,flag_fulldiskon
					);
				}
			}
		}
		if(parseInt(bet_polacoloknaga) > 1){
			let temp3d = []
			if (parseInt(bet_polacoloknaga) < parseInt(min_bet_coloknaga)) {
				flag = false;
				bet_polacoloknaga = min_bet_coloknaga;
				msg_error +=  "Minimal Bet Colok Naga : " + min_bet_coloknaga + "<br>";
			}
			if (parseInt(bet_polacoloknaga) > parseInt(max_bet_coloknaga)) {
				flag = false;
				bet_polacoloknaga = max_bet_coloknaga;
				msg_error +=  "Maximal Bet Colok Naga : " + max_bet_coloknaga + "<br>";
			}
			if(flag){
				let dat = ""
				let flagcompare = false
				for(let i=0;i<nomor_polacolok.length;i++){
					for(let j=0;j<nomor_polacolok.length;j++){
						for(let x=0;x<nomor_polacolok.length;x++){
							dat = ""
							found = false
							flagcompare = true
							
							if(nomor_polacolok[i] == nomor_polacolok[j]){
								flagcompare = false
							}
							if(nomor_polacolok[i] == nomor_polacolok[x]){
								flagcompare = false
							}
							if(nomor_polacolok[j] == nomor_polacolok[x]){
								flagcompare = false
							}
							if(flagcompare){
								dat =nomor_polacolok[i]+nomor_polacolok[j]+nomor_polacolok[x];
								found = true
							}
							if(found){
								if(dat != ""){
									temp3d.push(dat)
								}
							}
							
						}
					}
				}
				for(let i=0;i<temp3d.length;i++){
					diskon = bet_polacoloknaga * disc_bet_coloknaga;
					diskonpercen = disc_bet_coloknaga;
					win = win_bet_coloknaga;
					bayar = parseInt(bet_polacoloknaga) - parseInt(Math.ceil(diskon));
					totalkeranjang = bayar + totalkeranjang;
					addKeranjang(
						temp3d[i],
						"COLOK_NAGA",
						bet_polacoloknaga,
						diskonpercen,
						diskon,
						bayar,
						win,
						0,
						0,flag_fulldiskon
					);
				}
			}
		}
		if(msg_error != ""){
			isModalAlert = true
		}
		clearField();
	}
	inittogel_432d("colok");
	
 	const handleKeyboard_format = (e) => {
    	let numbera;
		for (let i = 0; i < nomor_colokbebas.length; i++) {
			numbera = parseInt(nomor_colokbebas[i]);
			if (isNaN(numbera)) {
				nomor_colokbebas = "";
			}
		}
		for (let i = 0; i < nomor_colokmacau_1.length; i++) {
			numbera = parseInt(nomor_colokmacau_1[i]);
			if (isNaN(numbera)) {
				nomor_colokmacau_1 = "";
			}
		}
		for (let i = 0; i < nomor_colokmacau_2.length; i++) {
			numbera = parseInt(nomor_colokmacau_2[i]);
			if (isNaN(numbera)) {
				nomor_colokmacau_2 = "";
			}
		}
		for (let i = 0; i < nomor_coloknaga_1.length; i++) {
			numbera = parseInt(nomor_coloknaga_1[i]);
			if (isNaN(numbera)) {
				nomor_coloknaga_1 = "";
			}
		}
		for (let i = 0; i < nomor_coloknaga_2.length; i++) {
			numbera = parseInt(nomor_coloknaga_2[i]);
			if (isNaN(numbera)) {
				nomor_coloknaga_2 = "";
			}
		}
		for (let i = 0; i < nomor_coloknaga_3.length; i++) {
			numbera = parseInt(nomor_coloknaga_3[i]);
			if (isNaN(numbera)) {
				nomor_coloknaga_3 = "";
			}
		}
		for (let i = 0; i < nomor_colokjitu.length; i++) {
			numbera = parseInt(nomor_colokjitu[i]);
			if (isNaN(numbera)) {
				nomor_colokjitu = "";
			}
		}
  	}
  	const handleKeyboard_number = (e) => {
    	let numbera;
		for (let i = 0; i < bet_colokbebas.length; i++) {
			numbera = parseInt(bet_colokbebas[i]);
			if (isNaN(numbera)) {
				bet_colokbebas = "";
			}
		}
		for (let i = 0; i < bet_colokmacau.length; i++) {
			numbera = parseInt(bet_colokmacau[i]);
			if (isNaN(numbera)) {
				bet_colokmacau = "";
			}
		}
		for (let i = 0; i < bet_coloknaga.length; i++) {
			numbera = parseInt(bet_coloknaga[i]);
			if (isNaN(numbera)) {
				bet_coloknaga = "";
			}
		}
		for (let i = 0; i < bet_colokjitu.length; i++) {
			numbera = parseInt(bet_colokjitu[i]);
			if (isNaN(numbera)) {
				bet_colokjitu = "";
			}
		}
		for (let i = 0; i < nomor_polacolok.length; i++) {
			numbera = parseInt(nomor_polacolok[i]);
			if (isNaN(numbera)) {
				nomor_polacolok = "";
			}
		}
		for (let i = 0; i < bet_polacolokbebas.length; i++) {
			numbera = parseInt(bet_polacolokbebas[i]);
			if (isNaN(numbera)) {
				bet_polacolokbebas = "";
			}
		}
		for (let i = 0; i < bet_polacolokmacau.length; i++) {
			numbera = parseInt(bet_polacolokmacau[i]);
			if (isNaN(numbera)) {
				bet_polacolokmacau = "";
			}
		}
		for (let i = 0; i < bet_polacoloknaga.length; i++) {
			numbera = parseInt(bet_polacoloknaga[i]);
			if (isNaN(numbera)) {
				bet_polacoloknaga = "";
			}
		}
  	}
  	const handleKeyboard_checkenter = (e) => {
		let keyCode = e.which || e.keyCode;
		if (keyCode === 13) {
			formcolokbebas_add();
		}
	};
	const handleKeyboardcolokmacau_checkenter = (e) => {
		let keyCode = e.which || e.keyCode;
		if (keyCode === 13) {
			formcolokmacau_add();
		}
	};
	const handleKeyboardcoloknaga_checkenter = (e) => {
		let keyCode = e.which || e.keyCode;
		if (keyCode === 13) {
			formcoloknaga_add();
		}
	};
	const handleKeyboardcolokjitu_checkenter = (e) => {
		let keyCode = e.which || e.keyCode;
		if (keyCode === 13) {
			formcolokjitu_add();
		}
	};
	const handleKeyboardpolacolok_checkenter = (e) => {
		let keyCode = e.which || e.keyCode;
		if (keyCode === 13) {
			formpolacolok_add();
		}
	};

	const clearField = () => {
		//COLOK BEBAS - INIT FORM
		nomor_colokbebas = "";
		bet_colokbebas = "";
		//COLOK MACAU - INIT FORM
		nomor_colokmacau_1 = "";
		nomor_colokmacau_2 = "";
		bet_colokmacau = "";
		//COLOK NAGA - INIT FORM
		nomor_coloknaga_1 = "";
		nomor_coloknaga_2 = "";
		nomor_coloknaga_3 = "";
		bet_coloknaga = "";
		//COLOK JITU - INIT FORM
		nomor_colokjitu = "";
		nomor_colokjitu_input;
		select_pilihancolokjitu = "";
		bet_colokjitu = "";
		//POLA COLOK - INIT FORM
		nomor_polacolok = "";
		bet_polacolokbebas = "";
		bet_polacolokmacau = "";
		bet_polacoloknaga = "";
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
		<div class="relative flex scrollbar-thin hover:scrollbar-thumb-green-300 hover:scrollbar-track-green-100 overflow-y-scroll h-16 cursor-pointer">
			<ul class="flex items-center">
				<li>
				  <span
					  on:click={() => {
					  changeTabs("colokbebas");
					  }} 
					  class="{class_tab_colokbebas} transition px-3 py-1.5 whitespace-nowrap inactive cursor-pointer text-sm">BEBAS</span>
				</li>
				<li>
				  <span
					  on:click={() => {
					  changeTabs("colokmacau");
					  }}
					  class="{class_tab_colokmacau} transition px-3 py-1.5 whitespace-nowrap inactive cursor-pointer text-sm">MACAU</span>
				</li>
				<li>
				  <span
					  on:click={() => {
						  changeTabs("coloknaga");
					  }}
					  class="{class_tab_coloknaga} transition px-3 py-1.5 whitespace-nowrap inactive cursor-pointer text-sm">NAGA</span>
				</li>
				<li>
				  <span 
					  on:click={() => {
						  changeTabs("colokjitu");
					  }}
					  class="{class_tab_colokjitu} transition px-3 py-1.5 whitespace-nowrap inactive cursor-pointer text-sm">JITU</span>
				</li>
				<li>
				  <span 
					  on:click={() => {
					  changeTabs("polacolok");
					  }}
					  class="{class_tab_polacolok} transition px-3 py-1.5 whitespace-nowrap inactive cursor-pointer text-sm">POLA COLOK</span>
				</li>
			</ul>
		</div>
        
        {#if panel_form_colokbebas}
			<div class="gap-2 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
				<div class="form-control">
					<label class="label">
						<span class="label-text {form_font_sizelabel_default}">Nomor (0-9)</span>
					</label>
					<input
						autofocus
						bind:this={nomor_colokbebas_input}
						bind:value={nomor_colokbebas}
						on:keyup={handleKeyboard_format}
						on:keypress={handleKeyboard_checkenter} 
						minlength="1"
						maxlength="1"
						type="text" 
						placeholder="Input 1 Digit" 
						class="input border-none text-center {form_font_sizeinput_default} placeholder:{form_font_sizeinput_default}"> 
				</div>
				<div class="form-control">
					<label class="label">
						<span class="label-text {form_font_sizelabel_default}">&nbsp;</span>
						<span class="label-text-alt {form_font_sizelabel_default}">
							Bet (
								min : {new Intl.NumberFormat().format(min_bet_colokbebas)} dan 
								max : {new Intl.NumberFormat().format(max_bet_colokbebas)}
							)
						</span>
					</label>
					<input
						bind:value={bet_colokbebas}
						on:keyup={handleKeyboard_number}
						on:keypress={handleKeyboard_checkenter} 
						minlength="3"
						maxlength="9"
						type="text" placeholder="Bet" 
						class="input border-none text-right {form_font_sizeinput_default} placeholder:{form_font_sizeinput_default}">
					<label class="label">
						<span class="label-text {form_font_sizelabel_default}">&nbsp;</span>
						<span class="label-text-alt {form_font_sizelabel_default}">{new Intl.NumberFormat().format(bet_colokbebas)}</span>
					</label>
				</div>
			</div>
			<Button_custom1 
				on:click={() => {
				handleTambah("colokbebas");
				}} 
			button_tipe=""
			button_title="Tambah" />
        {/if}
        {#if panel_form_colokmacau}
			<div class="gap-2 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
				<div class="form-control">
					<label class="label">
						<span class="label-text {form_font_sizelabel_default}">Nomor (0-9)</span>
					</label>
					<input
						autofocus
						bind:this={nomor_colokmacau_1_input}
						bind:value={nomor_colokmacau_1}
						on:keyup={handleKeyboard_format}
						on:keypress={handleKeyboard_checkenter} 
						minlength="1"
						maxlength="1"
						type="text" 
						placeholder="Input 1 Digit" 
						class="input border-none text-center {form_font_sizeinput_default} placeholder:{form_font_sizeinput_default}"> 
				</div>
				<div class="form-control">
					<label class="label">
						<span class="label-text {form_font_sizelabel_default}">Nomor (0-9)</span>
					</label>
					<input
						bind:this={nomor_colokmacau_2_input}
						bind:value={nomor_colokmacau_2}
						on:keyup={handleKeyboard_format}
						on:keypress={handleKeyboard_checkenter} 
						minlength="1"
						maxlength="1"
						type="text" 
						placeholder="Input 1 Digit" 
						class="input border-none text-center {form_font_sizeinput_default} placeholder:{form_font_sizeinput_default}"> 
				</div>
			</div>
			<div class="form-control">
				<label class="label">
					<span class="label-text {form_font_sizelabel_default}">&nbsp;</span>
					<span class="label-text-alt {form_font_sizelabel_default}">
						Bet (
							min : {new Intl.NumberFormat().format(min_bet_colokmacau)} dan 
							max : {new Intl.NumberFormat().format(max_bet_colokmacau)}
						)
					</span>
				</label>
				<input
					bind:value={bet_colokmacau}
					on:keyup={handleKeyboard_number}
					on:keypress={handleKeyboardcolokmacau_checkenter} 
					minlength="3"
					maxlength="9"
					type="text" placeholder="Bet" 
					class="input border-none text-right {form_font_sizeinput_default} placeholder:{form_font_sizeinput_default}">
				<label class="label">
					<span class="label-text {form_font_sizelabel_default}">&nbsp;</span>
					<span class="label-text-alt {form_font_sizelabel_default}">{new Intl.NumberFormat().format(bet_colokmacau)}</span>
				</label>
			</div>
			<Button_custom1 
				on:click={() => {
				handleTambah("colokmacau");
				}} 
			button_tipe=""
			button_title="Tambah" />
        {/if}
		{#if panel_form_coloknaga}
			<div class="gap-2 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3">
				<div class="form-control">
					<label class="label">
						<span class="label-text {form_font_sizelabel_default}">Nomor (0-9)</span>
					</label>
					<input
						autofocus
						bind:this={nomor_coloknaga_1_input}
						bind:value={nomor_coloknaga_1}
						on:keyup={handleKeyboard_format}
						on:keypress={handleKeyboard_checkenter} 
						minlength="1"
						maxlength="1"
						type="text" 
						placeholder="Input 1 Digit" 
						class="input border-none text-center {form_font_sizeinput_default} placeholder:{form_font_sizeinput_default}"> 
				</div>
				<div class="form-control">
					<label class="label">
						<span class="label-text {form_font_sizelabel_default}">Nomor (0-9)</span>
					</label>
					<input
						bind:this={nomor_coloknaga_2_input}
						bind:value={nomor_coloknaga_2}
						on:keyup={handleKeyboard_format}
						on:keypress={handleKeyboard_checkenter} 
						minlength="1"
						maxlength="1"
						type="text" 
						placeholder="Input 1 Digit" 
						class="input border-none text-center {form_font_sizeinput_default} placeholder:{form_font_sizeinput_default}"> 
				</div>
				<div class="form-control">
					<label class="label">
						<span class="label-text {form_font_sizelabel_default}">Nomor (0-9)</span>
					</label>
					<input
						bind:this={nomor_coloknaga_3_input}
						bind:value={nomor_coloknaga_3}
						on:keyup={handleKeyboard_format}
						on:keypress={handleKeyboard_checkenter} 
						minlength="1"
						maxlength="1"
						type="text" 
						placeholder="Input 1 Digit" 
						class="input border-none text-center {form_font_sizeinput_default} placeholder:{form_font_sizeinput_default}"> 
				</div>
			</div>
			<div class="form-control">
				<label class="label">
					<span class="label-text {form_font_sizelabel_default}">&nbsp;</span>
					<span class="label-text-alt {form_font_sizelabel_default}">
						Bet (
							min : {new Intl.NumberFormat().format(min_bet_coloknaga)} dan 
							max : {new Intl.NumberFormat().format(max_bet_coloknaga)}
						)
					</span>
				</label>
				<input
					bind:value={bet_coloknaga}
					on:keyup={handleKeyboard_number}
					on:keypress={handleKeyboardcoloknaga_checkenter} 
					minlength="3"
					maxlength="9"
					type="text" placeholder="Bet" 
					class="input border-none text-right {form_font_sizeinput_default} placeholder:{form_font_sizeinput_default}">
				<label class="label">
					<span class="label-text {form_font_sizelabel_default}">&nbsp;</span>
					<span class="label-text-alt {form_font_sizelabel_default}">{new Intl.NumberFormat().format(bet_coloknaga)}</span>
				</label>
			</div>
			<Button_custom1 
				on:click={() => {
				handleTambah("coloknaga");
				}} 
			button_tipe=""
			button_title="Tambah" />
        {/if}
		{#if panel_form_colokjitu}
			<div class="gap-2 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
				<div class="form-control">
					<label class="label">
						<span class="label-text {form_font_sizelabel_default}">Nomor (0-9)</span>
					</label>
					<input
						autofocus
						bind:this={nomor_colokjitu_input}
						bind:value={nomor_colokjitu}
						on:keyup={handleKeyboard_format}
						on:keypress={handleKeyboard_checkenter} 
						minlength="1"
						maxlength="1"
						type="text" 
						placeholder="Input 1 Digit" 
						class="input border-none text-center {form_font_sizeinput_default} placeholder:{form_font_sizeinput_default}"> 
				</div>
				<div class="form-control">
					<label class="label">
						<span class="label-text {form_font_sizelabel_default}">Posisi</span>
					</label>
					<select
						bind:value={select_pilihancolokjitu}
						bind:this={select_pilihancolokjitu_input} 
						class="select w-full max-w-full {form_font_sizeinput_default}">
						<option value="">--Pilih--</option>
						<option value="AS">AS</option>
						<option value="KECIL">KOP</option>
						<option value="KEPALA">KEPALA</option>
						<option value="EKOR">EKOR</option>
                  </select> 
				</div>
			</div>
			<div class="form-control">
				<label class="label">
					<span class="label-text {form_font_sizelabel_default}">&nbsp;</span>
					<span class="label-text-alt {form_font_sizelabel_default}">
						Bet (
							min : {new Intl.NumberFormat().format(min_bet_colokjitu)} dan 
							max : {new Intl.NumberFormat().format(max_bet_colokjitu)}
						)
					</span>
				</label>
				<input
					bind:value={bet_colokjitu}
					on:keyup={handleKeyboard_number}
					on:keypress={handleKeyboardcolokjitu_checkenter} 
					minlength="3"
					maxlength="9"
					type="text" placeholder="Bet" 
					class="input border-none text-right {form_font_sizeinput_default} placeholder:{form_font_sizeinput_default}">
				<label class="label">
					<span class="label-text {form_font_sizelabel_default}">&nbsp;</span>
					<span class="label-text-alt {form_font_sizelabel_default}">{new Intl.NumberFormat().format(bet_colokjitu)}</span>
				</label>
			</div>
			<Button_custom1 
				on:click={() => {
				handleTambah("colokjitu");
				}} 
			button_tipe=""
			button_title="Tambah" />
        {/if}
		{#if panel_form_polacolok}
			<div class="form-control">
				<label class="label">
					<span class="label-text {form_font_sizelabel_default}">Nomor (4 - 7 Digit)</span>
				</label>
				<input
					autofocus
					bind:this={nomor_polacolok_input}
					bind:value={nomor_polacolok}
					on:keyup={handleKeyboard_format}
					on:keypress={handleKeyboard_checkenter} 
					minlength="4"
					maxlength="7"
					type="text" 
					placeholder="Input 4 - 7 Digit" 
					class="input border-none text-center {form_font_sizeinput_default} placeholder:{form_font_sizeinput_default}"> 
			</div>
			<div class="gap-2 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3">
				<div class="form-control">
					<label class="label">
						<span class="label-text {form_font_sizelabel_default}">&nbsp;</span>
						<span class="label-text-alt {form_font_sizelabel_default}">Bet Colok Bebas</span>
					</label>
					<input
						bind:value={bet_polacolokbebas}
						on:keyup={handleKeyboard_number}
						on:keypress={handleKeyboardpolacolok_checkenter} 
						minlength="3"
						maxlength="9"
						type="text" placeholder="Bet" 
						class="input border-none text-right {form_font_sizeinput_default} placeholder:{form_font_sizeinput_default}">
					<label class="label">
						<span class="label-text {form_font_sizelabel_default}">&nbsp;</span>
						<span class="label-text-alt {form_font_sizelabel_default}">{new Intl.NumberFormat().format(bet_polacolokbebas)}</span>
					</label>
				</div>
				<div class="form-control">
					<label class="label">
						<span class="label-text {form_font_sizelabel_default}">&nbsp;</span>
						<span class="label-text-alt {form_font_sizelabel_default}">Bet Colok Macau</span>
					</label>
					<input
						bind:value={bet_polacolokmacau}
						on:keyup={handleKeyboard_number}
						on:keypress={handleKeyboardpolacolok_checkenter} 
						minlength="3"
						maxlength="9"
						type="text" placeholder="Bet" 
						class="input border-none text-right {form_font_sizeinput_default} placeholder:{form_font_sizeinput_default}">
					<label class="label">
						<span class="label-text {form_font_sizelabel_default}">&nbsp;</span>
						<span class="label-text-alt {form_font_sizelabel_default}">{new Intl.NumberFormat().format(bet_polacolokmacau)}</span>
					</label>
				</div>
				<div class="form-control">
					<label class="label">
						<span class="label-text {form_font_sizelabel_default}">&nbsp;</span>
						<span class="label-text-alt {form_font_sizelabel_default}">Bet Colok Naga</span>
					</label>
					<input
						bind:value={bet_polacoloknaga}
						on:keyup={handleKeyboard_number}
						on:keypress={handleKeyboardpolacolok_checkenter} 
						minlength="3"
						maxlength="9"
						type="text" placeholder="Bet" 
						class="input border-none text-right {form_font_sizeinput_default} placeholder:{form_font_sizeinput_default}">
					<label class="label">
						<span class="label-text {form_font_sizelabel_default}">&nbsp;</span>
						<span class="label-text-alt {form_font_sizelabel_default}">{new Intl.NumberFormat().format(bet_polacoloknaga)}</span>
					</label>
				</div>
			</div>
			<Button_custom1 
				on:click={() => {
				handleTambah("polacolok");
				}} 
			button_tipe=""
			button_title="Tambah" />
        {/if}
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
				<div class="mt-2 md:flex md:items-center md:justify-between md:space-x-8">
					<div class="relative flex items-center overflow-auto scrollbar-thin scrollbar-thumb-green-100 h-12">
						<ul class="flex items-center">
							<li>
							  <span
								  on:click={() => {
								  changeTabs("colokbebas");
								  }} 
								  class="{class_tab_colokbebas} inline-flex items-center transition text-xs lg:text-sm px-3 py-1.5 whitespace-nowrap inactive cursor-pointer ">BEBAS</span>
							</li>
							<li>
							  <span
								  on:click={() => {
								  changeTabs("colokmacau");
								  }}
								  class="{class_tab_colokmacau} inline-flex items-center transition text-xs lg:text-sm px-3 py-1.5 whitespace-nowrap inactive cursor-pointer">MACAU</span>
							</li>
							<li>
							  <span
								  on:click={() => {
									  changeTabs("coloknaga");
								  }}
								  class="{class_tab_coloknaga} inline-flex items-center transition text-xs lg:text-sm px-3 py-1.5 whitespace-nowrap inactive  cursor-pointer">NAGA</span>
							</li>
							<li>
							  <span 
								  on:click={() => {
									  changeTabs("colokjitu");
								  }}
								  class="{class_tab_colokjitu} inline-flex items-center transition text-xs lg:text-sm px-3 py-1.5 whitespace-nowrap inactive cursor-pointer">JITU</span>
							</li>
							<li>
							  <span 
								  on:click={() => {
								  changeTabs("polacolok");
								  }}
								  class="{class_tab_polacolok} inline-flex items-center transition text-xs lg:text-sm px-3 py-1.5 whitespace-nowrap inactive cursor-pointer">POLA COLOK</span>
							</li>
						</ul>
					</div>
				</div>
				
				{#if panel_form_colokbebas}
					<div class="mt-1 gap-1 grid grid-cols-1">
						<div class="form-control">
							<input
								bind:this={nomor_colokbebas_input}
								bind:value={nomor_colokbebas}
								on:keyup={handleKeyboard_format}
								on:keypress={handleKeyboard_checkenter} 
								minlength="1"
								maxlength="1"
								type="text" 
								placeholder="Nomor (0-9)" 
								class="input border-none text-center text-sm placeholder:text-sm"> 
						</div>
						<div class="form-control">
							<label class="label">
								<span class="label-text text-xs">&nbsp;</span>
								<span class="label-text-alt text-xs">
									Bet (
										min : {new Intl.NumberFormat().format(min_bet_colokbebas)} dan 
										max : {new Intl.NumberFormat().format(max_bet_colokbebas)}
									)
								</span>
							</label>
							<input
								bind:value={bet_colokbebas}
								on:keyup={handleKeyboard_number}
								on:keypress={handleKeyboard_checkenter} 
								minlength="3"
								maxlength="9"
								type="text" placeholder="Bet" 
								class="input border-none text-right text-sm placeholder:text-sm">
							<label class="label">
								<span class="label-text text-xs">&nbsp;</span>
								<span class="label-text-alt text-xs">{new Intl.NumberFormat().format(bet_colokbebas)}</span>
							</label>
						</div>
					</div>
					<div class="form-control ">
						<Button_custom1 
							on:click={() => {
							handleTambah("colokbebas");
							}} 
						button_tipe=""
						button_title="Tambah" />
					</div>
				{/if}
				{#if panel_form_colokmacau}
					<div class="mt-1 gap-1 grid grid-cols-2">
						<div class="form-control">
							<input
								bind:this={nomor_colokmacau_1_input}
								bind:value={nomor_colokmacau_1}
								on:keyup={handleKeyboard_format}
								on:keypress={handleKeyboard_checkenter} 
								minlength="1"
								maxlength="1"
								type="text" 
								placeholder="Nomor (0-9)" 
								class="input border-none text-center text-sm placeholder:text-sm"> 
						</div>
						<div class="form-control">
							<input
								bind:this={nomor_colokmacau_2_input}
								bind:value={nomor_colokmacau_2}
								on:keyup={handleKeyboard_format}
								on:keypress={handleKeyboard_checkenter} 
								minlength="1"
								maxlength="1"
								type="text" 
								placeholder="Nomor (0-9)" 
								class="input border-none text-center text-sm placeholder:text-sm"> 
						</div>
					</div>
					<div class="form-control">
						<label class="label">
							<span class="label-text text-xs">&nbsp;</span>
							<span class="label-text-alt text-xs">
								Bet (
									min : {new Intl.NumberFormat().format(min_bet_colokmacau)} dan 
									max : {new Intl.NumberFormat().format(max_bet_colokmacau)}
								)
							</span>
						</label>
						<input
							bind:value={bet_colokmacau}
							on:keyup={handleKeyboard_number}
							on:keypress={handleKeyboardcolokmacau_checkenter} 
							minlength="3"
							maxlength="9"
							type="text" placeholder="Bet" 
							class="input border-none text-right text-sm placeholder:text-sm">
						<label class="label">
							<span class="label-text text-xs">&nbsp;</span>
							<span class="label-text-alt text-xs">{new Intl.NumberFormat().format(bet_colokmacau)}</span>
						</label>
					</div>
					<div class="form-control ">
						<Button_custom1 
							on:click={() => {
							handleTambah("colokmacau");
							}} 
						button_tipe=""
						button_title="Tambah" />
					</div>
				{/if}
				{#if panel_form_coloknaga}
					<div class="mt-1 gap-2 grid grid-cols-3">
						<div class="form-control">
							<input
								bind:this={nomor_coloknaga_1_input}
								bind:value={nomor_coloknaga_1}
								on:keyup={handleKeyboard_format}
								on:keypress={handleKeyboard_checkenter} 
								minlength="1"
								maxlength="1"
								type="text" 
								placeholder="Nomor (0-9)" 
								class="input border-none text-center text-sm placeholder:text-sm"> 
						</div>
						<div class="form-control">
							<input
								bind:this={nomor_coloknaga_2_input}
								bind:value={nomor_coloknaga_2}
								on:keyup={handleKeyboard_format}
								on:keypress={handleKeyboard_checkenter} 
								minlength="1"
								maxlength="1"
								type="text" 
								placeholder="Nomor (0-9)" 
								class="input border-none text-center text-sm placeholder:text-sm"> 
						</div>
						<div class="form-control">
							<input
								bind:this={nomor_coloknaga_3_input}
								bind:value={nomor_coloknaga_3}
								on:keyup={handleKeyboard_format}
								on:keypress={handleKeyboard_checkenter} 
								minlength="1"
								maxlength="1"
								type="text" 
								placeholder="Nomor (0-9)" 
								class="input border-none text-center text-sm placeholder:text-sm"> 
						</div>
					</div>
					<div class="form-control">
						<label class="label">
							<span class="label-text text-xs">&nbsp;</span>
							<span class="label-text-alt text-xs">
								Bet (
									min : {new Intl.NumberFormat().format(min_bet_coloknaga)} dan 
									max : {new Intl.NumberFormat().format(max_bet_coloknaga)}
								)
							</span>
						</label>
						<input
							bind:value={bet_coloknaga}
							on:keyup={handleKeyboard_number}
							on:keypress={handleKeyboardcoloknaga_checkenter} 
							minlength="3"
							maxlength="9"
							type="text" placeholder="Bet" 
							class="input border-none text-right text-sm placeholder:text-sm">
						<label class="label">
							<span class="label-text text-xs">&nbsp;</span>
							<span class="label-text-alt text-xs">{new Intl.NumberFormat().format(bet_coloknaga)}</span>
						</label>
					</div>
					<div class="form-control ">
						<Button_custom1 
							on:click={() => {
							handleTambah("coloknaga");
							}} 
						button_tipe=""
						button_title="Tambah" />
					</div>
				{/if}
				{#if panel_form_colokjitu}
					<div class="mt-1 gap-2 grid grid-cols-2">
						<div class="form-control">
							<input
								bind:this={nomor_colokjitu_input}
								bind:value={nomor_colokjitu}
								on:keyup={handleKeyboard_format}
								on:keypress={handleKeyboard_checkenter} 
								minlength="1"
								maxlength="1"
								type="text" 
								placeholder="Nomor (0-9)" 
								class="input border-none text-center text-sm placeholder:text-sm"> 
						</div>
						<div class="form-control">
							<select
								bind:value={select_pilihancolokjitu}
								bind:this={select_pilihancolokjitu_input} 
								class="select w-full max-w-xs text-sm">
								<option value="">--Pilih--</option>
								<option value="AS">AS</option>
								<option value="KECIL">KOP</option>
								<option value="KEPALA">KEPALA</option>
								<option value="EKOR">EKOR</option>
							</select> 
						</div>
					</div>
					<div class="form-control">
						<label class="label">
							<span class="label-text text-xs">&nbsp;</span>
							<span class="label-text-alt text-xs">
								Bet (
									min : {new Intl.NumberFormat().format(min_bet_colokjitu)} dan 
									max : {new Intl.NumberFormat().format(max_bet_colokjitu)}
								)
							</span>
						</label>
						<input
							bind:value={bet_colokjitu}
							on:keyup={handleKeyboard_number}
							on:keypress={handleKeyboardcolokjitu_checkenter} 
							minlength="3"
							maxlength="9"
							type="text" placeholder="Bet" 
							class="input border-none text-right text-sm placeholder:text-sm">
						<label class="label">
							<span class="label-text text-xs">&nbsp;</span>
							<span class="label-text-alt text-xs">{new Intl.NumberFormat().format(bet_colokjitu)}</span>
						</label>
					</div>
					<div class="form-control ">
						<Button_custom1 
							on:click={() => {
							handleTambah("colokjitu");
							}} 
						button_tipe=""
						button_title="Tambah" />
					</div>
				{/if}
				{#if panel_form_polacolok}
					<div class="form-control">
						<input
							bind:this={nomor_polacolok_input}
							bind:value={nomor_polacolok}
							on:keyup={handleKeyboard_format}
							on:keypress={handleKeyboard_checkenter} 
							minlength="4"
							maxlength="7"
							type="text" 
							placeholder="Input 4 - 7 Digit" 
							class="input border-none text-center text-sm placeholder:text-sm"> 
					</div>
					<div class="mt-1 gap-2 grid grid-cols-3">
						<div class="form-control">
							<label class="label">
								<span class="label-text text-xs">&nbsp;</span>
								<span class="label-text-alt text-xs">Bet Bebas</span>
							</label>
							<input
								bind:value={bet_polacolokbebas}
								on:keyup={handleKeyboard_number}
								on:keypress={handleKeyboardpolacolok_checkenter} 
								minlength="3"
								maxlength="9"
								type="text" placeholder="Bet" 
								class="input border-none text-right text-sm placeholder:text-sm">
							<label class="label">
								<span class="label-text text-xs">&nbsp;</span>
								<span class="label-text-alt text-xs">{new Intl.NumberFormat().format(bet_polacolokbebas)}</span>
							</label>
						</div>
						<div class="form-control">
							<label class="label">
								<span class="label-text text-xs">&nbsp;</span>
								<span class="label-text-alt text-xs">Bet Macau</span>
							</label>
							<input
								bind:value={bet_polacolokmacau}
								on:keyup={handleKeyboard_number}
								on:keypress={handleKeyboardpolacolok_checkenter} 
								minlength="3"
								maxlength="9"
								type="text" placeholder="Bet" 
								class="input border-none text-right text-sm placeholder:text-sm">
							<label class="label">
								<span class="label-text text-xs">&nbsp;</span>
								<span class="label-text-alt text-xs">{new Intl.NumberFormat().format(bet_polacolokmacau)}</span>
							</label>
						</div>
						<div class="form-control">
							<label class="label">
								<span class="label-text text-xs">&nbsp;</span>
								<span class="label-text-alt text-xs">Bet Naga</span>
							</label>
							<input
								bind:value={bet_polacoloknaga}
								on:keyup={handleKeyboard_number}
								on:keypress={handleKeyboardpolacolok_checkenter} 
								minlength="3"
								maxlength="9"
								type="text" placeholder="Bet" 
								class="input border-none text-right text-sm placeholder:text-sm">
							<label class="label">
								<span class="label-text text-xs">&nbsp;</span>
								<span class="label-text-alt text-xs">{new Intl.NumberFormat().format(bet_polacoloknaga)}</span>
							</label>
						</div>
					</div>
					
					<div class="form-control ">
						<Button_custom1 
							on:click={() => {
							handleTambah("polacolok");
							}} 
						button_tipe=""
						button_title="Tambah" />
					</div>
				{/if}
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
	{count_line_colokbebas}
	{count_line_colokmacau}
	{count_line_coloknaga}
	{count_line_colokjitu}
	{keranjang}
	{totalkeranjang}
	{min_bet_colokbebas}
	{max_bet_colokbebas}
	{disc_bet_colokbebas}
	{win_bet_colokbebas}
	{min_bet_colokmacau}
	{max_bet_colokmacau}
	{disc_bet_colokmacau}
	{win_bet_colokmacau}
	{win3_bet_colokmacau}
	{win4_bet_colokmacau}
	{min_bet_coloknaga}
	{max_bet_coloknaga}
	{disc_bet_coloknaga}
	{win_bet_coloknaga}
	{win4_bet_coloknaga}
	{min_bet_colokjitu}
	{max_bet_colokjitu}
	{disc_bet_colokjitu}
	{winas_bet_colokjitu}
	{winkop_bet_colokjitu}
	{winkepala_bet_colokjitu}
	{winekor_bet_colokjitu}/>


{#if client_device !="WEBSITE"}
	<style>
		.scrollbar-thin::-webkit-scrollbar {
		width: 3px;
		height: 3px;
		}
	</style>
{/if}