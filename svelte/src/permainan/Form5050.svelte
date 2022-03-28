<script>
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
	let isModalAlertTabPermainan = false
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
  	const handleTambah = (e,path) => {
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
		msg_error = "";
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
			<h2 class="card-title text-lg grid grid-cols-2 gap-2">
				<div class="text-left text-xs lg:text-lg md:text-sm">
					{pasaran_name} - {permainan_title}
				</div>
				<div class="text-right text-xs lg:text-lg md:text-sm">PERIODE : #{pasaran_periode} - {pasaran_code}</div>
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
  	</div>
</div>

<input type="checkbox" id="my-modal-alert" class="modal-toggle" bind:checked={isModalAlert}>
<div class="modal " on:click|self={()=>isModalAlert = false}>
    <div class="modal-box relative bg-content">
        <label for="my-modal-alert" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 class="text-xs lg:text-lg font-bold">INFORMASI</h3>
		<progress class="progress w-full" value="{barWidth}" max="100"></progress>
        <p class="p-3 italic text-xs lg:text-sm bg-base-200 rounded-md mb-4 mt-4">
			{@html msg_error}
		</p>
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
        <h3 class="text-xs lg:text-sm font-bold capitalize text-center mb-4">Saat Ini Anda Memiliki Transaksi:</h3>
        <p class="p-3 italic text-xs lg:text-sm bg-base-200 rounded-md mb-4 mt-4">
            Total Transaksi : <span class="text-xs lg:text-sm link-accent">{new Intl.NumberFormat().format(totalkeranjang)}</span>
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
	{count_line_5050umum}
	{count_line_5050special}
	{count_line_5050kombinasi}
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