<script>
	import Card_placeholder from '../component/Placeholder.svelte'
	import Modal_alert from "../component/Modal_alert.svelte";
	import Button_custom1 from "../component/Button_custom1.svelte";
	import Tablekeranjang from "../permainan/Tablekeranjang5050.svelte";
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

	let class_tab_5050umum = "py-2 m-2 rounded-md outline outline-1 outline-offset-1 outline-green-600";
	let class_tab_5050special = "";
	let class_tab_5050kombinasi = "";
	let panel_form_5050umum = true;
	let panel_form_5050special = false;
	let panel_form_5050kombinasi = false;

  	let keranjang = [];
	let nomor_global = 0;
	let totalkeranjang = 0;
	let group_btn_beli = false;


	let min_bet_5050umum = 0;
	let max_bet_5050umum = 0;
	let max_buy_5050umum = 0;
	let keibesar_bet_5050umum = 0;
	let keikecil_bet_5050umum = 0;
	let keigenap_bet_5050umum = 0;
	let keiganjil_bet_5050umum = 0;
	let keitengah_bet_5050umum = 0;
	let keitepi_bet_5050umum = 0;
	let discbesar_bet_5050umum = 0;
	let disckecil_bet_5050umum = 0;
	let discgenap_bet_5050umum = 0;
	let discganjil_bet_5050umum = 0;
	let disctengah_bet_5050umum = 0;
	let disctepi_bet_5050umum = 0;
	let limittotal_bet_5050umum = 0;
	let min_bet_5050special = 0;
	let max_bet_5050special = 0;
	let max_buy_5050special = 0;
	let keiasganjil_bet_5050special = 0;
	let keiasgenap_bet_5050special = 0;
	let keiasbesar_bet_5050special = 0;
	let keiaskecil_bet_5050special = 0;
	let keikopganjil_bet_5050special = 0;
	let keikopgenap_bet_5050special = 0;
	let keikopbesar_bet_5050special = 0;
	let keikopkecil_bet_5050special = 0;
	let keikepalaganjil_bet_5050special = 0;
	let keikepalagenap_bet_5050special = 0;
	let keikepalabesar_bet_5050special = 0;
	let keikepalakecil_bet_5050special = 0;
	let keiekorganjil_bet_5050special = 0;
	let keiekorgenap_bet_5050special = 0;
	let keiekorbesar_bet_5050special = 0;
	let keiekorkecil_bet_5050special = 0;
	let discasganjil_bet_5050special = 0;
	let discasgenap_bet_5050special = 0;
	let discasbesar_bet_5050special = 0;
	let discaskecil_bet_5050special = 0;
	let disckopganjil_bet_5050special = 0;
	let disckopgenap_bet_5050special = 0;
	let disckopbesar_bet_5050special = 0;
	let disckopkecil_bet_5050special = 0;
	let disckepalaganjil_bet_5050special = 0;
	let disckepalagenap_bet_5050special = 0;
	let disckepalabesar_bet_5050special = 0;
	let disckepalakecil_bet_5050special = 0;
	let discekorganjil_bet_5050special = 0;
	let discekorgenap_bet_5050special = 0;
	let discekorbesar_bet_5050special = 0;
	let discekorkecil_bet_5050special = 0;
	let limittotal_bet_5050special = 0;
	let min_bet_5050kombinasi = 0;
	let max_bet_5050kombinasi = 0;
	let max_buy_5050kombinasi = 0;
	let kei_belakangmono_bet_5050kombinasi = 0;
	let kei_belakangstereo_bet_5050kombinasi = 0;
	let kei_belakangkembang_bet_5050kombinasi = 0;
	let kei_belakangkempis_bet_5050kombinasi = 0;
	let kei_belakangkembar_bet_5050kombinasi = 0;
	let kei_tengahmono_bet_5050kombinasi = 0;
	let kei_tengahstereo_bet_5050kombinasi = 0;
	let kei_tengahkembang_bet_5050kombinasi = 0;
	let kei_tengahkempis_bet_5050kombinasi = 0;
	let kei_tengahkembar_bet_5050kombinasi = 0;
	let kei_depanmono_bet_5050kombinasi = 0;
	let kei_depanstereo_bet_5050kombinasi = 0;
	let kei_depankembang_bet_5050kombinasi = 0;
	let kei_depankempis_bet_5050kombinasi = 0;
	let kei_depankembar_bet_5050kombinasi = 0;
	let disc_belakangmono_bet_5050kombinasi = 0;
	let disc_belakangstereo_bet_5050kombinasi = 0;
	let disc_belakangkembang_bet_5050kombinasi = 0;
	let disc_belakangkempis_bet_5050kombinasi = 0;
	let disc_belakangkembar_bet_5050kombinasi = 0;
	let disc_tengahmono_bet_5050kombinasi = 0;
	let disc_tengahstereo_bet_5050kombinasi = 0;
	let disc_tengahkembang_bet_5050kombinasi = 0;
	let disc_tengahkempis_bet_5050kombinasi = 0;
	let disc_tengahkembar_bet_5050kombinasi = 0;
	let disc_depanmono_bet_5050kombinasi = 0;
	let disc_depanstereo_bet_5050kombinasi = 0;
	let disc_depankembang_bet_5050kombinasi = 0;
	let disc_depankempis_bet_5050kombinasi = 0;
	let disc_depankembar_bet_5050kombinasi = 0;
	let limittotal_bet_5050kombinasi = 0;
	let count_line_5050umum = 0;
	let count_line_5050special = 0;
	let count_line_5050kombinasi = 0;
	let db_form5050_umum_count_temp = 0;
	let db_form5050_special_count_temp = 0;
	let db_form5050_kombinasi_count_temp = 0;
	let sum_5050umum = 0;
	let sum_5050special = 0;
	let sum_5050kombinasi = 0;
	let db_5050umum_sum_temp = 0;
	let db_5050special_sum_temp = 0;
	let db_5050kombinasi_sum_temp = 0;

	//5050 UMUM - INIT FORM
	let select_5050umum = "";
	let select_5050umum_input;
	let bet_5050umum = "";
	//5050 SPECIAL - INIT FORM
	let select_5050special_1 = "";
	let select_5050special_1_input;
	let select_5050special_2 = "";
	let select_5050special_2_input;
	let bet_5050special = "";
	//5050 KOMBINASI - INIT FORM
	let select_5050kombinasi_1 = "";
	let select_5050kombinasi_1_input;
	let select_5050kombinasi_2 = "";
	let select_5050kombinasi_2_input;
	let bet_5050kombinasi = "";

	let dispatch = createEventDispatcher();
	let isModalAlert = false
	let isModalAlertSystem = false
	let isModalLoading = false
	let isSkeleton = false
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
	const changeTabs = (e) => {
		switch(e){
			case "umum":
				class_tab_5050umum = "py-2 m-2 rounded-md outline outline-1 outline-offset-1 outline-green-600";
				class_tab_5050special = "";
				class_tab_5050kombinasi = "";
				panel_form_5050umum = true;
				panel_form_5050special = false;
				panel_form_5050kombinasi = false;
				clearField();
				break;
			case "special":
				class_tab_5050umum = "";
				class_tab_5050special = "py-2 m-2 rounded-md outline outline-1 outline-offset-1 outline-green-600";
				class_tab_5050kombinasi = "";
				panel_form_5050umum = false;
				panel_form_5050special = true;
				panel_form_5050kombinasi = false;
				clearField();
				break;
			case "kombinasi":
				class_tab_5050umum = "";
				class_tab_5050special = "";
				class_tab_5050kombinasi = "py-2 m-2 rounded-md outline outline-1 outline-offset-1 outline-green-600";
				panel_form_5050umum = false;
				panel_form_5050special = false;
				panel_form_5050kombinasi = true;
				clearField();
				break;
		}
	};
  	const handleTambah = (e) => {
		switch (e) {
			case "5050umum":
				if (select_5050umum == "" &&parseInt(bet_5050umum) < min_bet_5050umum) {
					select_5050special_1_input.focus();
				} else {
					form5050_add();
				}
				break;
			case "5050special":
				if (select_5050special_1 == "" && select_5050special_2 == "" &&parseInt(bet_5050umum) < min_bet_5050special) {
					select_5050special_1_input.focus();
				} else {
					form5050special_add();
				}
				break;
			case "5050kombinasi":
				if (select_5050kombinasi_1 == "" && select_5050kombinasi_2 == "" && parseInt(bet_5050kombinasi) < min_bet_5050kombinasi) {
					select_5050kombinasi_1_input.focus();
				} else {
					form5050kombinasi_add();
				}
				break;
		}
  	};
  	
  	
	function addKeranjang(nomor,game,bet,diskon_percen,diskon,bayar,win,kei_percen,kei,tipetoto) {
		let total_data = keranjang.length;
		let flag_data = false;
		if(total_data > 0){
			for (var i = 0; i < total_data; i++) {
				switch (game) {
					case "50_50_UMUM":
						if (nomor == keranjang[i].nomor.toString()) {
							let maxtotal_bayar5050umum = 0;
							for (var j = 0; j < keranjang.length; j++) {
								if ("50_50_UMUM" == keranjang[j].permainan) {
									if (nomor == keranjang[j].nomor) {
										maxtotal_bayar5050umum = parseInt(maxtotal_bayar5050umum) + parseInt(keranjang[j].bet);
									}
								}
							}
							if (parseInt(limittotal_bet_5050umum) < (parseInt(maxtotal_bayar5050umum)+parseInt(bet))) {
								msg_error += "Nomor ini : " +nomor +" sudah melebihi LIMIT TOTAL 50-50 UMUM<br />";
								flag_data = true;
							}
						}
						if((parseInt(bayar) + parseInt(sum_5050umum)) > max_buy_5050umum){
							msg_error += "Maaf, Anda sudah melebihi Maximum Pembelanjaan 5050 UMUM<br />";
							msg_error += "Nomor : "+nomor+" , Status Reject <br />";
							msg_error += "Maximum Pembelanjaan 5050 UMUM :"+ new Intl.NumberFormat().format(max_buy_5050umum) +" <br/>";
							flag_data = true;
						}
						break;
					case "50_50_SPECIAL":
						if (nomor == keranjang[i].nomor.toString()) {
							let maxtotal_bayar5050special = 0;
							for (var j = 0; j < keranjang.length; j++) {
								if ("50_50_SPECIAL" == keranjang[j].permainan) {
									if (nomor == keranjang[j].nomor) {
										maxtotal_bayar5050special = parseInt(maxtotal_bayar5050special) + parseInt(keranjang[j].bet);
									}
								}
							}
							if (parseInt(limittotal_bet_5050special) < (parseInt(maxtotal_bayar5050special)+parseInt(bet))) {
								msg_error += "Nomor ini : " + nomor + " sudah melebihi LIMIT TOTAL 50-50 SPECIAL<br />";
								flag_data = true;
							}
						}
						if((parseInt(bayar) + parseInt(sum_5050special)) > max_buy_5050special){
							msg_error += "Maaf, Anda sudah melebihi Maximum Pembelanjaan 5050 SPECIAL<br />";
							msg_error += "Nomor : "+nomor+" , Status Reject <br />";
							msg_error += "Maximum Pembelanjaan 5050 SPECIAL :"+ new Intl.NumberFormat().format(max_buy_5050special) +" <br/>";
							flag_data = true;
						}
						break;
					case "50_50_KOMBINASI":
						if (nomor == keranjang[i].nomor.toString()) {
							let maxtotal_bayar5050kombinasi = 0;
							for (var j = 0; j < keranjang.length; j++) {
								if ("50_50_KOMBINASI" == keranjang[j].permainan) {
									if (nomor == keranjang[j].nomor) {
										maxtotal_bayar5050kombinasi =parseInt(maxtotal_bayar5050kombinasi) +parseInt(keranjang[j].bet);
									}
								}
							}
							if (parseInt(limittotal_bet_5050kombinasi) < (parseInt(maxtotal_bayar5050kombinasi)+parseInt(bet))) {
								msg_error += "Nomor ini : " +nomor +" sudah melebihi LIMIT TOTAL 50-50 KOMBINASI<br />";
								flag_data = true;
							}
						}
						if((parseInt(bayar) + parseInt(sum_5050kombinasi)) > max_buy_5050kombinasi){
							msg_error += "Maaf, Anda sudah melebihi Maximum Pembelanjaan 5050 KOMBINASI<br />";
							msg_error += "Nomor : "+nomor+" , Status Reject <br />";
							msg_error += "Maximum Pembelanjaan 5050 KOMBINASI :"+ new Intl.NumberFormat().format(max_buy_5050kombinasi) +" <br/>";
							flag_data = true;
						}
						break;
				}
			}
		}else{
			switch (game) {
				case "50_50_UMUM":
					if((parseInt(bayar) + parseInt(sum_5050umum)) > max_buy_5050umum){
						msg_error += "Maaf, Anda sudah melebihi Maximum Pembelanjaan 5050 UMUM<br />";
						msg_error += "Nomor : "+nomor+" , Status Reject <br />";
						msg_error += "Maximum Pembelanjaan 5050 UMUM :"+ new Intl.NumberFormat().format(max_buy_5050umum) +" <br/>";
						flag_data = true;
					}
					break;
				case "50_50_SPECIAL":
					if((parseInt(bayar) + parseInt(sum_5050special)) > max_buy_5050special){
						msg_error += "Maaf, Anda sudah melebihi Maximum Pembelanjaan 5050 SPECIAL<br />";
						msg_error += "Nomor : "+nomor+" , Status Reject <br />";
						msg_error += "Maximum Pembelanjaan 5050 SPECIAL :"+ new Intl.NumberFormat().format(max_buy_5050special) +" <br/>";
						flag_data = true;
					}
					break;
				case "50_50_KOMBINASI":
					if((parseInt(bayar) + parseInt(sum_5050kombinasi)) > max_buy_5050kombinasi){
						msg_error += "Maaf, Anda sudah melebihi Maximum Pembelanjaan 5050 KOMBINASI<br />";
						msg_error += "Nomor : "+nomor+" , Status Reject <br />";
						msg_error += "Maximum Pembelanjaan 5050 KOMBINASI :"+ new Intl.NumberFormat().format(max_buy_5050kombinasi) +" <br/>";
						flag_data = true;
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

			switch (game) {
				case "50_50_UMUM":
					sum_5050umum = sum_5050umum + bayar;
					break;
				case "50_50_SPECIAL":
					sum_5050special = sum_5050special + bayar;
					break;
				case "50_50_KOMBINASI":
					sum_5050kombinasi = sum_5050kombinasi + bayar;
					break;
			}
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
		group_btn_beli = true;
		totalkeranjang = 0;
		count_line_5050umum = 0;
		count_line_5050special = 0;
		count_line_5050kombinasi = 0;
		sum_5050umum = 0;
		sum_5050special = 0;
		sum_5050kombinasi = 0;
		inittogel_432d("5050");
		limittogel("5050");
	}
  	async function inittogel_432d(e) {
		isSkeleton = true;
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
				min_bet_5050umum = parseInt(record[i]["min_bet_5050umum"]);
				max_bet_5050umum = parseInt(record[i]["max_bet_5050umum"]);
				keibesar_bet_5050umum = parseFloat(record[i]["keibesar_bet_5050umum"]);
				keikecil_bet_5050umum = parseFloat(record[i]["keikecil_bet_5050umum"]);
				keigenap_bet_5050umum = parseFloat(record[i]["keigenap_bet_5050umum"]);
				keiganjil_bet_5050umum = parseFloat(record[i]["keiganjil_bet_5050umum"]);
				keitengah_bet_5050umum = parseFloat(record[i]["keitengah_bet_5050umum"]);
				keitepi_bet_5050umum = parseFloat(record[i]["keitepi_bet_5050umum"]);
				discbesar_bet_5050umum = parseFloat(record[i]["discbesar_bet_5050umum"]);
				disckecil_bet_5050umum = parseFloat(record[i]["disckecil_bet_5050umum"]);
				discgenap_bet_5050umum = parseFloat(record[i]["discgenap_bet_5050umum"]);
				discganjil_bet_5050umum = parseFloat(record[i]["discganjil_bet_5050umum"]);
				disctengah_bet_5050umum = parseFloat(record[i]["disctengah_bet_5050umum"]);
				disctepi_bet_5050umum = parseFloat(record[i]["disctepi_bet_5050umum"]);
				limittotal_bet_5050umum = parseFloat(record[i]["limittotal_bet_5050umum"]);
				min_bet_5050special = parseFloat(record[i]["min_bet_5050special"]);
				max_bet_5050special = parseFloat(record[i]["max_bet_5050special"]);
				keiasganjil_bet_5050special = parseFloat(record[i]["keiasganjil_bet_5050special"]);
				keiasgenap_bet_5050special = parseFloat(record[i]["keiasgenap_bet_5050special"]);
				keiasbesar_bet_5050special = parseFloat(record[i]["keiasbesar_bet_5050special"]);
				keiaskecil_bet_5050special = parseFloat(record[i]["keiaskecil_bet_5050special"]);
				keikopganjil_bet_5050special = parseFloat(record[i]["keikopganjil_bet_5050special"]);
				keikopgenap_bet_5050special = parseFloat(record[i]["keikopgenap_bet_5050special"]);
				keikopbesar_bet_5050special = parseFloat(record[i]["keikopbesar_bet_5050special"]);
				keikopkecil_bet_5050special = parseFloat(record[i]["keikopkecil_bet_5050special"]);
				keikepalaganjil_bet_5050special = parseFloat(record[i]["keikepalaganjil_bet_5050special"]);
				keikepalagenap_bet_5050special = parseFloat(record[i]["keikepalagenap_bet_5050special"]);
				keikepalabesar_bet_5050special = parseFloat(record[i]["keikepalabesar_bet_5050special"]);
				keikepalakecil_bet_5050special = parseFloat(record[i]["keikepalakecil_bet_5050special"]);
				keiekorganjil_bet_5050special = parseFloat(record[i]["keiekorganjil_bet_5050special"]);
				keiekorgenap_bet_5050special = parseFloat(record[i]["keiekorgenap_bet_5050special"]);
				keiekorbesar_bet_5050special = parseFloat(record[i]["keiekorbesar_bet_5050special"]);
				keiekorkecil_bet_5050special = parseFloat(record[i]["keiekorkecil_bet_5050special"]);
				discasganjil_bet_5050special = parseFloat(record[i]["discasganjil_bet_5050special"]);
				discasgenap_bet_5050special = parseFloat(record[i]["discasgenap_bet_5050special"]);
				discasbesar_bet_5050special = parseFloat(record[i]["discasbesar_bet_5050special"]);
				discaskecil_bet_5050special = parseFloat(record[i]["discaskecil_bet_5050special"]);
				disckopganjil_bet_5050special = parseFloat(record[i]["disckopganjil_bet_5050special"]);
				disckopgenap_bet_5050special = parseFloat(record[i]["disckopgenap_bet_5050special"]);
				disckopbesar_bet_5050special = parseFloat(record[i]["disckopbesar_bet_5050special"]);
				disckopkecil_bet_5050special = parseFloat(record[i]["disckopkecil_bet_5050special"]);
				disckepalaganjil_bet_5050special = parseFloat(record[i]["disckepalaganjil_bet_5050special"]);
				disckepalagenap_bet_5050special = parseFloat(record[i]["disckepalagenap_bet_5050special"]);
				disckepalabesar_bet_5050special = parseFloat(record[i]["disckepalabesar_bet_5050special"]);
				disckepalakecil_bet_5050special = parseFloat(record[i]["disckepalakecil_bet_5050special"]);
				discekorganjil_bet_5050special = parseFloat(record[i]["discekorganjil_bet_5050special"]);
				discekorgenap_bet_5050special = parseFloat(record[i]["discekorgenap_bet_5050special"]);
				discekorbesar_bet_5050special = parseFloat(record[i]["discekorbesar_bet_5050special"]);
				discekorkecil_bet_5050special = parseFloat(record[i]["discekorkecil_bet_5050special"]);
				limittotal_bet_5050special = parseFloat(record[i]["limittotal_bet_5050special"]);
				min_bet_5050kombinasi = parseFloat(record[i]["min_bet_5050kombinasi"]);
				max_bet_5050kombinasi = parseFloat(record[i]["max_bet_5050kombinasi"]);
				kei_belakangmono_bet_5050kombinasi = parseFloat(record[i]["kei_belakangmono_bet_5050kombinasi"]);
				kei_belakangstereo_bet_5050kombinasi = parseFloat(record[i]["kei_belakangstereo_bet_5050kombinasi"]);
				kei_belakangkembang_bet_5050kombinasi = parseFloat(record[i]["kei_belakangkembang_bet_5050kombinasi"]);
				kei_belakangkempis_bet_5050kombinasi = parseFloat(record[i]["kei_belakangkempis_bet_5050kombinasi"]);
				kei_belakangkembar_bet_5050kombinasi = parseFloat(record[i]["kei_belakangkembar_bet_5050kombinasi"]);
				kei_tengahmono_bet_5050kombinasi = parseFloat(record[i]["kei_tengahmono_bet_5050kombinasi"]);
				kei_tengahstereo_bet_5050kombinasi = parseFloat(record[i]["kei_tengahstereo_bet_5050kombinasi"]);
				kei_tengahkembang_bet_5050kombinasi = parseFloat(record[i]["kei_tengahkembang_bet_5050kombinasi"]);
				kei_tengahkempis_bet_5050kombinasi = parseFloat(record[i]["kei_tengahkempis_bet_5050kombinasi"]);
				kei_tengahkembar_bet_5050kombinasi = parseFloat(record[i]["kei_tengahkembar_bet_5050kombinasi"]);
				kei_depanmono_bet_5050kombinasi = parseFloat(record[i]["kei_depanmono_bet_5050kombinasi"]);
				kei_depanstereo_bet_5050kombinasi = parseFloat(record[i]["kei_depanstereo_bet_5050kombinasi"]);
				kei_depankembang_bet_5050kombinasi = parseFloat(record[i]["kei_depankembang_bet_5050kombinasi"]);
				kei_depankempis_bet_5050kombinasi = parseFloat(record[i]["kei_depankempis_bet_5050kombinasi"]);
				kei_depankembar_bet_5050kombinasi = parseFloat(record[i]["kei_depankembar_bet_5050kombinasi"]);
				disc_belakangmono_bet_5050kombinasi = parseFloat(record[i]["disc_belakangmono_bet_5050kombinasi"]);
				disc_belakangstereo_bet_5050kombinasi = parseFloat(record[i]["disc_belakangstereo_bet_5050kombinasi"]);
				disc_belakangkembang_bet_5050kombinasi = parseFloat(record[i]["disc_belakangkembang_bet_5050kombinasi"]);
				disc_belakangkempis_bet_5050kombinasi = parseFloat(record[i]["disc_belakangkempis_bet_5050kombinasi"]);
				disc_belakangkembar_bet_5050kombinasi = parseFloat(record[i]["disc_belakangkembar_bet_5050kombinasi"]);
				disc_tengahmono_bet_5050kombinasi = parseFloat(record[i]["disc_tengahmono_bet_5050kombinasi"]);
				disc_tengahstereo_bet_5050kombinasi = parseFloat(record[i]["disc_tengahstereo_bet_5050kombinasi"]);
				disc_tengahkembang_bet_5050kombinasi = parseFloat(record[i]["disc_tengahkembang_bet_5050kombinasi"]);
				disc_tengahkempis_bet_5050kombinasi = parseFloat(record[i]["disc_tengahkempis_bet_5050kombinasi"]);
				disc_tengahkembar_bet_5050kombinasi = parseFloat(record[i]["disc_tengahkembar_bet_5050kombinasi"]);
				disc_depanmono_bet_5050kombinasi = parseFloat(record[i]["disc_depanmono_bet_5050kombinasi"]);
				disc_depanstereo_bet_5050kombinasi = parseFloat(record[i]["disc_depanstereo_bet_5050kombinasi"]);
				disc_depankembang_bet_5050kombinasi = parseFloat(record[i]["disc_depankembang_bet_5050kombinasi"]);
				disc_depankempis_bet_5050kombinasi = parseFloat(record[i]["disc_depankempis_bet_5050kombinasi"]);
				disc_depankembar_bet_5050kombinasi = parseFloat(record[i]["disc_depankembar_bet_5050kombinasi"]);
				limittotal_bet_5050kombinasi = parseFloat(record[i]["limittotal_bet_5050kombinasi"]);

				max_buy_5050umum = parseInt(record[i]["max_buy_5050umum"]);
				max_buy_5050special = parseInt(record[i]["max_buy_5050special"]);
				max_buy_5050kombinasi = parseInt(record[i]["max_buy_5050kombinasi"]);
			}
			isSkeleton = false;
		}
	}
  	function count_keranjang() {
		let count_umum = 0;
		let count_special = 0;
		let count_kombinasi = 0;
		for (let i = 0; i < keranjang.length; i++) {
			switch (keranjang[i].permainan.toString()) {
				case "50_50_UMUM":
					count_umum = count_umum + 1;
					break;
				case "50_50_SPECIAL":
					count_special = count_special + 1;
					break;
				case "50_50_KOMBINASI":
					count_kombinasi = count_kombinasi + 1;
					break;
			}
		}
		count_line_5050umum = count_umum + db_form5050_umum_count_temp;
		count_line_5050special = count_special + db_form5050_special_count_temp;
		count_line_5050kombinasi = count_kombinasi + db_form5050_kombinasi_count_temp;
	}
	async function limittogel(e) {
		db_form5050_umum_count_temp = 0;
		db_form5050_special_count_temp = 0;
		db_form5050_kombinasi_count_temp = 0;

		db_5050umum_sum_temp = 0;
		db_5050special_sum_temp = 0;
		db_5050kombinasi_sum_temp = 0;

		const res = await fetch(path_api+"api/limittogel", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				pasaran_idtransaction: parseInt(idtrxkeluaran),
				company: client_company,
				username: client_username,
				pasaran_code: pasaran_code,
				pasaran_periode: pasaran_periode,
				permainan: e,
			}),
		});
		if (!res.ok) {
			isModalAlertSystem = true;
		}else{
			const json = await res.json();
			let record = json.record;
			
			db_form5050_umum_count_temp = record.total_5050umum;
			db_form5050_special_count_temp = record.total_5050special;
			db_form5050_kombinasi_count_temp = record.total_5050kombinasi;

			db_5050umum_sum_temp = record.total_5050umum_sum;
			db_5050special_sum_temp = record.total_5050special_sum;
			db_5050kombinasi_sum_temp = record.total_5050kombinasi_sum;

			sum_5050umum = sum_5050umum + db_5050umum_sum_temp;
			sum_5050special = sum_5050special + db_5050special_sum_temp;
			sum_5050kombinasi = sum_5050kombinasi + db_5050kombinasi_sum_temp;

			count_line_5050umum = count_line_5050umum + db_form5050_umum_count_temp;
			count_line_5050special = count_line_5050special + db_form5050_special_count_temp;
			count_line_5050kombinasi = count_line_5050kombinasi + db_form5050_kombinasi_count_temp;
		}
	}
	function form5050_add() {
		let flag = true;
		let nomor = select_5050umum;
		let bet = bet_5050umum;
		let diskon = 0;
		let diskonpercen = 0;
		let kei = 0;
		let keipersen = 0;
		let bayar = 0;
		let win = 1;
		let nmgame = "50_50_UMUM";
		msg_error = "";
		if (nomor == "") {
			select_5050umum_input.focus();
			flag = false;
		}
		if (bet == "") {
			flag = false;
			msg_error += "Bet tidak boleh kosong<br>";
		}
		if (parseInt(bet) < parseInt(min_bet_5050umum) || parseInt(bet) > parseInt(max_bet_5050umum)) {
			bet_5050umum = min_bet_5050umum;
			flag = false;
			msg_error += "Minimal Bet : " + new Intl.NumberFormat().format(min_bet_5050umum) + "<br>";
			msg_error += "Maximal Bet : " + new Intl.NumberFormat().format(max_bet_5050umum) + "<br>";
		}
		if (flag == true) {
			switch (nomor) {
				case "BESAR":
					kei = keibesar_bet_5050umum;
					diskon = discbesar_bet_5050umum;
					break;
				case "KECIL":
					kei = keikecil_bet_5050umum;
					diskon = disckecil_bet_5050umum;
					break;
				case "GENAP":
					kei = keigenap_bet_5050umum;
					diskon = discgenap_bet_5050umum;
					break;
				case "GANJIL":
					kei = keiganjil_bet_5050umum;
					diskon = discganjil_bet_5050umum;
					break;
				case "TENGAH":
					kei = keitengah_bet_5050umum;
					diskon = disctengah_bet_5050umum;
					break;
				case "TEPI":
					kei = keitepi_bet_5050umum;
					diskon = disctepi_bet_5050umum;
					break;
			}
			keipersen = kei;
			diskonpercen = diskon;
			kei = parseInt(bet) * kei;
			diskon = parseInt(bet) * diskon;
			bayar = parseInt(bet) - parseInt(diskon) - parseInt(kei);
			totalkeranjang = bayar + totalkeranjang;
			addKeranjang(
				nomor,
				nmgame,
				bet_5050umum,
				diskonpercen,
				diskon,
				bayar,
				win,
				keipersen,
				kei,flag_fulldiskon
			);
			clearField()
		}
		if (msg_error != "") {
			isModalAlert = true
			loader_timeout();
		}
	}
	function form5050special_add() {
		let flag = true;
		let nomor = select_5050special_1;
		let nomor2 = select_5050special_2;
		let bet = bet_5050special;
		let diskon = 0;
		let diskonpercen = 0;
		let win = 1;
		let bayar = 0;
		let kei = 0;
		let keipersen = 0;
		let nmgame = "50_50_SPECIAL";
		msg_error = "";
		if (nomor == "") {
			select_5050umum_input.focus();
			flag = false;
		}
		if (nomor2 == "") {
			flag = false;
		}
		if (bet == "") {
			flag = false;
			msg_error += "Bet tidak boleh kosong<br>";
		}
		if (parseInt(bet) < parseInt(min_bet_5050special)) {
			bet_5050special = min_bet_5050special;
			flag = false;
			msg_error += "Minimal Bet : " + new Intl.NumberFormat().format(min_bet_5050special) + "<br>";
		}
		if (parseInt(bet) > parseInt(max_bet_5050special)) {
			bet_5050special = max_bet_5050special;
			flag = false;
			msg_error += " Maximal Bet : " + new Intl.NumberFormat().format(max_bet_5050special) + "<br>";
		}
		if (flag == true) {
			switch (nomor + nomor2) {
				case "ASGANJIL":
					kei = keiasganjil_bet_5050special;
					diskon = discasganjil_bet_5050special;
					break;
				case "ASGENAP":
					kei = keiasgenap_bet_5050special;
					diskon = discasgenap_bet_5050special;
					break;
				case "ASBESAR":
					kei = keiasbesar_bet_5050special;
					diskon = discasbesar_bet_5050special;
					break;
				case "ASKECIL":
					kei = keiaskecil_bet_5050special;
					diskon = discaskecil_bet_5050special;
					break;
				case "KOPGANJIL":
					kei = keikopganjil_bet_5050special;
					diskon = disckopganjil_bet_5050special;
					break;
				case "KOPGENAP":
					kei = keikopgenap_bet_5050special;
					diskon = disckopgenap_bet_5050special;
					break;
				case "KOPBESAR":
					kei = keikopbesar_bet_5050special;
					diskon = disckopbesar_bet_5050special;
					break;
				case "KOPKECIL":
					kei = keikopkecil_bet_5050special;
					diskon = disckopkecil_bet_5050special;
					break;
				case "KEPALAGANJIL":
					kei = keikepalaganjil_bet_5050special;
					diskon = disckepalaganjil_bet_5050special;
					break;
				case "KEPALAGENAP":
					kei = keikepalagenap_bet_5050special;
					diskon = disckepalagenap_bet_5050special;
					break;
				case "KEPALABESAR":
					kei = keikepalabesar_bet_5050special;
					diskon = disckepalabesar_bet_5050special;
					break;
				case "KEPALAKECIL":
					kei = keikepalakecil_bet_5050special;
					diskon = disckepalakecil_bet_5050special;
					break;
				case "EKORGANJIL":
					kei = keiekorganjil_bet_5050special;
					diskon = discekorganjil_bet_5050special;
					break;
				case "EKORGENAP":
					kei = keiekorgenap_bet_5050special;
					diskon = discekorgenap_bet_5050special;
					break;
				case "EKORBESAR":
					kei = keiekorbesar_bet_5050special;
					diskon = discekorbesar_bet_5050special;
					break;
				case "EKORKECIL":
					kei = keiekorkecil_bet_5050special;
					diskon = discekorkecil_bet_5050special;
					break;
			}
			keipersen = kei;
			diskonpercen = diskon;
			kei = parseInt(bet) * kei;
			diskon = parseInt(bet) * diskon;
			bayar = parseInt(bet) - parseInt(diskon) - parseInt(kei);
			totalkeranjang = bayar + totalkeranjang;
			addKeranjang(
				nomor + "_" + nomor2,
				nmgame,
				bet_5050special,
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
			loader_timeout();
		}
	}
	function form5050kombinasi_add() {
		let flag = true;
		let nomor = select_5050kombinasi_1;
		let nomor2 = select_5050kombinasi_2;
		let bet = bet_5050kombinasi;
		let diskon = 0;
		let diskonpercen = 0;
		let win = 1;
		let bayar = 0;
		let kei = 0;
		let keipersen = 0;
		let nmgame = "50_50_KOMBINASI";
		msg_error = "";
		if (nomor == "") {
			select_5050special_1_input.focus();
			flag = false;
		}
		if (nomor2 == "") {
			flag = false;
		}
		if (bet == "") {
			flag = false;
			msg_error += "Bet tidak boleh kosong<br>";
		}
		if (parseInt(bet) < parseInt(min_bet_5050kombinasi)) {
			bet_5050kombinasi = min_bet_5050kombinasi;
			flag = false;
			msg_error += "Minimal Bet : " + new Intl.NumberFormat().format(min_bet_5050kombinasi) + "<br>";
		}
		if (parseInt(bet) > parseInt(max_bet_5050kombinasi)) {
			bet_5050kombinasi = max_bet_5050kombinasi;
			flag = false;
			msg_error += " Maximal Bet : " + new Intl.NumberFormat().format(max_bet_5050kombinasi) + "<br>";
		}
		if (flag == true) {
			switch (nomor + nomor2) {
				case "BELAKANGMONO":
					kei = kei_belakangmono_bet_5050kombinasi;
					diskon = disc_belakangmono_bet_5050kombinasi;
					break;
				case "BELAKANGSTEREO":
					kei = kei_belakangstereo_bet_5050kombinasi;
					diskon = disc_belakangstereo_bet_5050kombinasi;
					break;
				case "BELAKANGKEMBANG":
					kei = kei_belakangkembang_bet_5050kombinasi;
					diskon = disc_belakangkembang_bet_5050kombinasi;
					break;
				case "BELAKANGKEMPIS":
					kei = kei_belakangkempis_bet_5050kombinasi;
					diskon = disc_belakangkempis_bet_5050kombinasi;
					break;
				case "BELAKANGKEMBAR":
					kei = kei_belakangkembar_bet_5050kombinasi;
					diskon = disc_belakangkembar_bet_5050kombinasi;
					break;
				case "TENGAHMONO":
					kei = kei_tengahmono_bet_5050kombinasi;
					diskon = disc_tengahmono_bet_5050kombinasi;
					break;
				case "TENGAHSTEREO":
					kei = kei_tengahstereo_bet_5050kombinasi;
					diskon = disc_tengahstereo_bet_5050kombinasi;
					break;
				case "TENGAHKEMBANG":
					kei = kei_tengahkembang_bet_5050kombinasi;
					diskon = disc_tengahkembang_bet_5050kombinasi;
					break;
				case "TENGAHKEMPIS":
					kei = kei_tengahkempis_bet_5050kombinasi;
					diskon = disc_tengahkempis_bet_5050kombinasi;
					break;
				case "TENGAHKEMBAR":
					kei = kei_tengahkembar_bet_5050kombinasi;
					diskon = disc_tengahkembar_bet_5050kombinasi;
					break;
				case "DEPANMONO":
					kei = kei_depanmono_bet_5050kombinasi;
					diskon = disc_depanmono_bet_5050kombinasi;
					break;
				case "DEPANSTEREO":
					kei = kei_depanstereo_bet_5050kombinasi;
					diskon = disc_depanstereo_bet_5050kombinasi;
					break;
				case "DEPANKEMBANG":
					kei = kei_depankembang_bet_5050kombinasi;
					diskon = disc_depankembang_bet_5050kombinasi;
					break;
				case "DEPANKEMPIS":
					kei = kei_depankempis_bet_5050kombinasi;
					diskon = disc_depankempis_bet_5050kombinasi;
					break;
				case "DEPANKEMBAR":
					kei = kei_depankembar_bet_5050kombinasi;
					diskon = disc_depankembar_bet_5050kombinasi;
					break;
			}
			keipersen = kei;
			diskonpercen = diskon;
			kei = parseInt(bet) * kei;
			diskon = parseInt(bet) * diskon;
			bayar = parseInt(bet) - parseInt(diskon) - parseInt(kei);
			totalkeranjang = bayar + totalkeranjang;
			addKeranjang(
				nomor + "_" + nomor2,
				nmgame,
				bet_5050kombinasi,
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
			loader_timeout();
		}
	}
	
	inittogel_432d("5050");
	limittogel("5050");
	
 	
  	const handleKeyboard_number = (e) => {
		let numbera;
		for (let i = 0; i < bet_5050umum.length; i++) {
			numbera = parseInt(bet_5050umum[i]);
			if (isNaN(numbera)) {
				bet_5050umum = "";
			}
		}
		for (let i = 0; i < bet_5050special.length; i++) {
			numbera = parseInt(bet_5050special[i]);
			if (isNaN(numbera)) {
				bet_5050special = "";
			}
		}
		for (let i = 0; i < bet_5050kombinasi.length; i++) {
			numbera = parseInt(bet_5050kombinasi[i]);
			if (isNaN(numbera)) {
				bet_5050kombinasi = "";
			}
		}
  	}
  	const handleKeyboard_checkenter = (e) => {
		let keyCode = e.which || e.keyCode;
		if (keyCode === 13) {
			form5050_add();
		}
	};
	const handleKeyboardspecial_checkenter = (e) => {
		let keyCode = e.which || e.keyCode;
		if (keyCode === 13) {
			form5050special_add();
		}
	};
	const handleKeyboardkombinasi_checkenter = (e) => {
		let keyCode = e.which || e.keyCode;
		if (keyCode === 13) {
			form5050kombinasi_add();
		}
	};
	const clearField = () => {
		//5050 UMUM - INIT FORM
		select_5050umum = "";
		bet_5050umum = "";
		//5050 SPECIAL - INIT FORM
		select_5050special_1 = "";
		select_5050special_2 = "";
		bet_5050special = "";
		//5050 KOMBINASI - INIT FORM
		select_5050kombinasi_1 = "";
		select_5050kombinasi_2 = "";
		bet_5050kombinasi = "";
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
			<div class="relative flex scrollbar-thin hover:scrollbar-thumb-green-300 overflow-x-scroll h-16 cursor-pointer">
				<ul class="flex items-center">
					<li>
					<span
						on:click={() => {
						changeTabs("umum");
						}} 
						class="{class_tab_5050umum} transition px-3 py-1.5 whitespace-nowrap inactive cursor-pointer text-sm">UMUM</span>
					</li>
					<li>
					<span
						on:click={() => {
						changeTabs("special");
						}}
						class="{class_tab_5050special} transition px-3 py-1.5 whitespace-nowrap inactive cursor-pointer text-sm">SPECIAL</span>
					</li>
					<li>
					<span
						on:click={() => {
							changeTabs("kombinasi");
						}}
						class="{class_tab_5050kombinasi} transition px-3 py-1.5 whitespace-nowrap inactive cursor-pointer text-sm">KOMBINASI</span>
					</li>
				</ul>
			</div>
        
			{#if panel_form_5050umum}
				<div class="gap-2 grid grid-cols-2">
					<div class="form-control">
						<label class="label">
							<span class="label-text {form_font_sizelabel_default}">TEBAK</span>
						</label>
						<select
							bind:value={select_5050umum}
							bind:this={select_5050umum_input} 
							class="select w-full max-w-xs {form_font_sizeinput_default}">
							<option value="">--Pilih--</option>
							<option value="BESAR">BESAR</option>
							<option value="KECIL">KECIL</option>
							<option value="GENAP">GENAP</option>
							<option value="GANJIL">GANJIL</option>
							<option value="TENGAH">TENGAH</option>
							<option value="TEPI">TEPI</option>
					</select> 
					</div>
					<div class="form-control">
						<label class="label">
							<span class="label-text {form_font_sizelabel_default}">&nbsp;</span>
							<span class="label-text-alt {form_font_sizelabel_default}">
								Bet (
									min : {new Intl.NumberFormat().format(min_bet_5050umum)} dan 
									max : {new Intl.NumberFormat().format(max_bet_5050umum)}
								)
							</span>
						</label>
						<input
							bind:value={bet_5050umum}
							on:keyup={handleKeyboard_number}
							on:keypress={handleKeyboard_checkenter} 
							minlength="3"
							maxlength="{max_bet_5050umum.toString().length}"
							type="text" placeholder="Bet" 
							class="input border-none text-right {form_font_sizeinput_default} placeholder:{form_font_sizeinput_default}">
						<label class="label">
							<span class="label-text {form_font_sizelabel_default}">&nbsp;</span>
							<span class="label-text-alt {form_font_sizelabel_default}">{new Intl.NumberFormat().format(bet_5050umum)}</span>
						</label>
					</div>
				</div>
				<Button_custom1 
					on:click={() => {
					handleTambah("5050umum");
					}} 
				button_tipe=""
				button_title="Tambah" />
			{/if}
			{#if panel_form_5050special}
				<div class="gap-2 grid grid-cols-2">
					<div class="form-control">
						<label class="label">
							<span class="label-text {form_font_sizelabel_default}">TEBAK</span>
						</label>
						<select
							bind:value={select_5050special_1}
							bind:this={select_5050special_1_input} 
							class="select w-full max-w-xs {form_font_sizeinput_default}">
							<option value="">--Pilih--</option>
							<option value="AS">AS</option>
							<option value="KOP">KOP</option>
							<option value="KEPALA">KEPALA</option>
							<option value="EKOR">EKOR</option>
						</select> 
					</div>
					<div class="form-control">
						<label class="label">
							<span class="label-text {form_font_sizelabel_default}">TEBAK</span>
						</label>
						<select
							bind:value={select_5050special_2}
							bind:this={select_5050special_2_input} 
							class="select w-full max-w-xs {form_font_sizeinput_default}">
							<option value="">--Pilih--</option>
							<option value="GENAP">GENAP</option>
							<option value="GANJIL">GANJIL</option>
							<option value="BESAR">BESAR</option>
							<option value="KECIL">KECIL</option>
						</select> 
					</div>
				</div>
				<div class="form-control">
					<label class="label">
						<span class="label-text {form_font_sizelabel_default}">&nbsp;</span>
						<span class="label-text-alt {form_font_sizelabel_default}">
							Bet (
								min : {new Intl.NumberFormat().format(min_bet_5050special)} dan 
								max : {new Intl.NumberFormat().format(max_bet_5050special)}
							)
						</span>
					</label>
					<input
						bind:value={bet_5050special}
						on:keyup={handleKeyboard_number}
						on:keypress={handleKeyboardspecial_checkenter} 
						minlength="3"
						maxlength="{max_bet_5050special.toString().length}"
						type="text" placeholder="Bet" 
						class="input border-none text-right {form_font_sizeinput_default} placeholder:{form_font_sizeinput_default}">
					<label class="label">
						<span class="label-text {form_font_sizelabel_default}">&nbsp;</span>
						<span class="label-text-alt {form_font_sizelabel_default}">{new Intl.NumberFormat().format(bet_5050special)}</span>
					</label>
				</div>
				<Button_custom1 
					on:click={() => {
					handleTambah("5050special");
					}} 
				button_tipe=""
				button_title="Tambah" />
			{/if}
			{#if panel_form_5050kombinasi}
				<div class="gap-2 grid grid-cols-2">
					<div class="form-control">
						<label class="label">
							<span class="label-text {form_font_sizelabel_default}">TEBAK</span>
						</label>
						<select
							bind:value={select_5050kombinasi_1}
							bind:this={select_5050kombinasi_1_input} 
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
							bind:value={select_5050kombinasi_2}
							bind:this={select_5050kombinasi_2_input} 
							class="select w-full max-w-xs {form_font_sizeinput_default}">
							<option value="">--Pilih--</option>
							<option value="MONO">MONO</option>
							<option value="STEREO">STEREO</option>
							<option value="KEMBANG">KEMBANG</option>
							<option value="KEMPIS">KEMPIS</option>
							<option value="KEMBAR">KEMBAR</option>
						</select> 
					</div>
				</div>
				<div class="form-control">
					<label class="label">
						<span class="label-text {form_font_sizelabel_default}">&nbsp;</span>
						<span class="label-text-alt {form_font_sizelabel_default}">
							Bet (
								min : {new Intl.NumberFormat().format(min_bet_5050kombinasi)} dan 
								max : {new Intl.NumberFormat().format(max_bet_5050kombinasi)}
							)
						</span>
					</label>
					<input
						bind:value={bet_5050kombinasi}
						on:keyup={handleKeyboard_number}
						on:keypress={handleKeyboardkombinasi_checkenter} 
						minlength="3"
						maxlength="{max_bet_5050kombinasi.toString().length}"
						type="text" placeholder="Bet" 
						class="input border-none text-right {form_font_sizeinput_default} placeholder:{form_font_sizeinput_default}">
					<label class="label">
						<span class="label-text {form_font_sizelabel_default}">&nbsp;</span>
						<span class="label-text-alt {form_font_sizelabel_default}">{new Intl.NumberFormat().format(bet_5050kombinasi)}</span>
					</label>
				</div>
				<Button_custom1 
					on:click={() => {
					handleTambah("5050kombinasi");
					}} 
				button_tipe=""
				button_title="Tambah" />
			{/if}
		
      	{:else}
		  	{#if isSkeleton}
		  		<Card_placeholder tipe="2" total_placeholder=1 />
			{:else}
				<h2 class="card-title bg-base-200 text-lg grid grid-cols-2 gap-1">
					<div class="place-content-start text-left text-xs">
						{pasaran_name} <br> {permainan_title}
					</div>
					<div class="place-content-end text-right text-xs -mt-4">PERIODE : #{pasaran_periode} - {pasaran_code}</div>
				</h2>
				<label for="my-modal-inputbet" class="modal-button font-semibold text-center text-xs m-2 h-[3rem] bg-base-200 rounded-md outline outline-1 outline-offset-1 outline-green-600 ">
					<div class="flex flex-col justify-center items-center">
						<span>Klik Area Ini Untuk Melakukan Transaksi</span>
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
						</svg>
					</div>
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
										changeTabs("umum");
										}} 
										class="{class_tab_5050umum} inline-flex items-center transition text-xs lg:text-sm px-3 py-1.5 whitespace-nowrap inactive cursor-pointer ">UMUM</span>
									</li>
									<li>
									<span
										on:click={() => {
										changeTabs("special");
										}}
										class="{class_tab_5050special} inline-flex items-center transition text-xs lg:text-sm px-3 py-1.5 whitespace-nowrap inactive cursor-pointer">SPECIAL</span>
									</li>
									<li>
									<span
										on:click={() => {
											changeTabs("kombinasi");
										}}
										class="{class_tab_5050kombinasi} inline-flex items-center transition text-xs lg:text-sm px-3 py-1.5 whitespace-nowrap inactive  cursor-pointer">KOMBINASI</span>
									</li>
								</ul>
							</div>
						</div>
						
						{#if panel_form_5050umum}
							<div class="form-control mt-2">
								<select
									bind:value={select_5050umum}
									bind:this={select_5050umum_input} 
									class="select w-full max-w-full {form_font_sizeinput_default}">
									<option value="">--Pilih--</option>
									<option value="BESAR">BESAR</option>
									<option value="KECIL">KECIL</option>
									<option value="GENAP">GENAP</option>
									<option value="GANJIL">GANJIL</option>
									<option value="TENGAH">TENGAH</option>
									<option value="TEPI">TEPI</option>
								</select> 
							</div>
							<div class="form-control">
								<label class="label">
									<span class="label-text {form_font_sizelabel_default}">&nbsp;</span>
									<span class="label-text-alt {form_font_sizelabel_default}">
										Bet (
											min : {new Intl.NumberFormat().format(min_bet_5050umum)} dan 
											max : {new Intl.NumberFormat().format(max_bet_5050umum)}
										)
									</span>
								</label>
								<input
									bind:value={bet_5050umum}
									on:keyup={handleKeyboard_number}
									on:keypress={handleKeyboard_checkenter} 
									minlength="3"
									maxlength="{max_bet_5050umum.toString().length}"
									type="text" placeholder="Bet" 
									class="input border-none text-right {form_font_sizeinput_default} placeholder:{form_font_sizeinput_default}">
								<label class="label">
									<span class="label-text {form_font_sizelabel_default}">&nbsp;</span>
									<span class="label-text-alt {form_font_sizelabel_default}">{new Intl.NumberFormat().format(bet_5050umum)}</span>
								</label>
							</div>
							<Button_custom1 
								on:click={() => {
								handleTambah("5050umum");
								}} 
							button_tipe=""
							button_block="btn-sm btn-block"
							button_title="Keranjang" />
						{/if}
						{#if panel_form_5050special}
							<div class="mt-2 gap-2 grid grid-cols-2">
								<div class="form-control">
									<select
										bind:value={select_5050special_1}
										bind:this={select_5050special_1_input} 
										class="select w-full max-w-full {form_font_sizeinput_default}">
										<option value="">--Pilih--</option>
										<option value="AS">AS</option>
										<option value="KOP">KOP</option>
										<option value="KEPALA">KEPALA</option>
										<option value="EKOR">EKOR</option>
									</select> 
								</div>
								<div class="form-control">
									<select
										bind:value={select_5050special_2}
										bind:this={select_5050special_2_input} 
										class="select w-full max-w-full {form_font_sizeinput_default}">
										<option value="">--Pilih--</option>
										<option value="GENAP">GENAP</option>
										<option value="GANJIL">GANJIL</option>
										<option value="BESAR">BESAR</option>
										<option value="KECIL">KECIL</option>
									</select> 
								</div>
							</div>
							<div class="form-control">
								<label class="label">
									<span class="label-text {form_font_sizelabel_default}">&nbsp;</span>
									<span class="label-text-alt {form_font_sizelabel_default}">
										Bet (
											min : {new Intl.NumberFormat().format(min_bet_5050special)} dan 
											max : {new Intl.NumberFormat().format(max_bet_5050special)}
										)
									</span>
								</label>
								<input
									bind:value={bet_5050special}
									on:keyup={handleKeyboard_number}
									on:keypress={handleKeyboardspecial_checkenter} 
									minlength="3"
									maxlength="{max_bet_5050special.toString().length}"
									type="text" placeholder="Bet" 
									class="input border-none text-right {form_font_sizeinput_default} placeholder:{form_font_sizeinput_default}">
								<label class="label">
									<span class="label-text {form_font_sizelabel_default}">&nbsp;</span>
									<span class="label-text-alt {form_font_sizelabel_default}">{new Intl.NumberFormat().format(bet_5050special)}</span>
								</label>
							</div>
							<Button_custom1 
								on:click={() => {
								handleTambah("5050special");
								}} 
								button_tipe=""
								button_block="btn-sm btn-block"
								button_title="Keranjang" />
						{/if}
						{#if panel_form_5050kombinasi}
							<div class="mt-2 gap-2 grid grid-cols-2">
								<div class="form-control">
									<select
										bind:value={select_5050kombinasi_1}
										bind:this={select_5050kombinasi_1_input} 
										class="select w-full max-w-full {form_font_sizeinput_default}">
										<option value="">--Pilih--</option>
										<option value="BELAKANG">BELAKANG</option>
										<option value="TENGAH">TENGAH</option>
										<option value="DEPAN">DEPAN</option>
									</select> 
								</div>
								<div class="form-control">
									<select
										bind:value={select_5050kombinasi_2}
										bind:this={select_5050kombinasi_2_input} 
										class="select w-full max-w-full {form_font_sizeinput_default}">
										<option value="">--Pilih--</option>
										<option value="MONO">MONO</option>
										<option value="STEREO">STEREO</option>
										<option value="KEMBANG">KEMBANG</option>
										<option value="KEMPIS">KEMPIS</option>
										<option value="KEMBAR">KEMBAR</option>
									</select> 
								</div>
							</div>
							<div class="form-control">
								<label class="label">
									<span class="label-text {form_font_sizelabel_default}">&nbsp;</span>
									<span class="label-text-alt {form_font_sizelabel_default}">
										Bet (
											min : {new Intl.NumberFormat().format(min_bet_5050kombinasi)} dan 
											max : {new Intl.NumberFormat().format(max_bet_5050kombinasi)}
										)
									</span>
								</label>
								<input
									bind:value={bet_5050kombinasi}
									on:keyup={handleKeyboard_number}
									on:keypress={handleKeyboardkombinasi_checkenter} 
									minlength="3"
									maxlength="{max_bet_5050kombinasi.toString().length}"
									type="text" placeholder="Bet" 
									class="input border-none text-right {form_font_sizeinput_default} placeholder:{form_font_sizeinput_default}">
								<label class="label">
									<span class="label-text {form_font_sizelabel_default}">&nbsp;</span>
									<span class="label-text-alt {form_font_sizelabel_default}">{new Intl.NumberFormat().format(bet_5050kombinasi)}</span>
								</label>
							</div>
							<Button_custom1 
								on:click={() => {
								handleTambah("5050kombinasi");
								}} 
							button_tipe=""
							button_block="btn-sm btn-block"
							button_title="Keranjang" />
						{/if}
						
					</div>
				</div>
      		{/if}
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
		Halaman <b>50-50</b> Terjadi Kesalahan Sistem Harap Hubungi Administrator
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
	{group_btn_beli}
	{count_line_5050umum}
	{count_line_5050special}
	{count_line_5050kombinasi}
	{sum_5050umum}
	{sum_5050special}
	{sum_5050kombinasi}
	{keranjang}
	{totalkeranjang}
	{min_bet_5050umum}
	{max_bet_5050umum}
	{keibesar_bet_5050umum}
	{keikecil_bet_5050umum}
	{keigenap_bet_5050umum}
	{keiganjil_bet_5050umum}
	{keitengah_bet_5050umum}
	{keitepi_bet_5050umum}
	{discbesar_bet_5050umum}
	{disckecil_bet_5050umum}
	{discgenap_bet_5050umum}
	{discganjil_bet_5050umum}
	{disctengah_bet_5050umum}
	{disctepi_bet_5050umum}
	{min_bet_5050special}
	{max_bet_5050special}
	{keiasganjil_bet_5050special}
	{keiasgenap_bet_5050special}
	{keiasbesar_bet_5050special}
	{keiaskecil_bet_5050special}
	{keikopganjil_bet_5050special}
	{keikopgenap_bet_5050special}
	{keikopbesar_bet_5050special}
	{keikopkecil_bet_5050special}
	{keikepalaganjil_bet_5050special}
	{keikepalagenap_bet_5050special}
	{keikepalabesar_bet_5050special}
	{keikepalakecil_bet_5050special}
	{keiekorganjil_bet_5050special}
	{keiekorgenap_bet_5050special}
	{keiekorbesar_bet_5050special}
	{keiekorkecil_bet_5050special}
	{discasganjil_bet_5050special}
	{discasgenap_bet_5050special}
	{discasbesar_bet_5050special}
	{discaskecil_bet_5050special}
	{disckopganjil_bet_5050special}
	{disckopgenap_bet_5050special}
	{disckopbesar_bet_5050special}
	{disckopkecil_bet_5050special}
	{disckepalaganjil_bet_5050special}
	{disckepalagenap_bet_5050special}
	{disckepalabesar_bet_5050special}
	{disckepalakecil_bet_5050special}
	{discekorganjil_bet_5050special}
	{discekorgenap_bet_5050special}
	{discekorbesar_bet_5050special}
	{discekorkecil_bet_5050special}
	{min_bet_5050kombinasi}
	{max_bet_5050kombinasi}
	{kei_belakangmono_bet_5050kombinasi}
	{kei_belakangstereo_bet_5050kombinasi}
	{kei_belakangkembang_bet_5050kombinasi}
	{kei_belakangkempis_bet_5050kombinasi}
	{kei_belakangkembar_bet_5050kombinasi}
	{kei_tengahmono_bet_5050kombinasi}
	{kei_tengahstereo_bet_5050kombinasi}
	{kei_tengahkembang_bet_5050kombinasi}
	{kei_tengahkempis_bet_5050kombinasi}
	{kei_tengahkembar_bet_5050kombinasi}
	{kei_depanmono_bet_5050kombinasi}
	{kei_depanstereo_bet_5050kombinasi}
	{kei_depankembang_bet_5050kombinasi}
	{kei_depankempis_bet_5050kombinasi}
	{kei_depankembar_bet_5050kombinasi}
	{disc_belakangmono_bet_5050kombinasi}
	{disc_belakangstereo_bet_5050kombinasi}
	{disc_belakangkembang_bet_5050kombinasi}
	{disc_belakangkempis_bet_5050kombinasi}
	{disc_belakangkembar_bet_5050kombinasi}
	{disc_tengahmono_bet_5050kombinasi}
	{disc_tengahstereo_bet_5050kombinasi}
	{disc_tengahkembang_bet_5050kombinasi}
	{disc_tengahkempis_bet_5050kombinasi}
	{disc_tengahkembar_bet_5050kombinasi}
	{disc_depanmono_bet_5050kombinasi}
	{disc_depanstereo_bet_5050kombinasi}
	{disc_depankembang_bet_5050kombinasi}
	{disc_depankempis_bet_5050kombinasi}
	{disc_depankembar_bet_5050kombinasi}/>




{#if client_device !="WEBSITE"}
	<style>
		.scrollbar-thin::-webkit-scrollbar {
		width: 3px;
		height: 3px;
		}
	</style>
{/if}