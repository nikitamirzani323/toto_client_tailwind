<script>
 
  import Button_custom1 from "../component/Button_custom1.svelte";
  import Tablekeranjang from "../permainan/Tablekeranjang.svelte";
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

  let class_tab_432 = "btn btn-sm rounded btn-outline btn-error";
  let class_tab_432set = "";
  let class_tab_432bolakbalik = "";
  let class_tab_432wap = "";
  let class_tab_432polatarung = "";
  let class_tab_432quick2d = "";
  let class_tab_4323DD = "";
  let class_tab_4322DD = "";
  let class_tab_4322DT = "";
  let panel_form_432 = true;
  let panel_form_432set = false;
  let panel_form_432bolakbalik = false;
  let panel_form_432wap = false;
  let panel_form_432polatarung = false;
  let panel_form_432quick2d = false;
  let panel_form_4323dd = false;
  let panel_form_4322dd = false;
  let panel_form_4322dt = false;

  let keranjang = [];
	let nomor_global = 0;
	let totalkeranjang = 0;
	let group_btn_beli = false;
	let minimal_bet = 0;
	let max4d_bet = 0;
	let max3d_bet = 0;
	let max3dd_bet = 0;
	let max2d_bet = 0;
	let max2dd_bet = 0;
	let max2dt_bet = 0;
	let disc4d_bet = 0;
	let disc3d_bet = 0;
	let disc3dd_bet = 0;
	let disc2d_bet = 0;
	let disc2dd_bet = 0;
	let disc2dt_bet = 0;
	let win4d_bet = 0;
	let win3d_bet = 0;
	let win3dd_bet = 0;
	let win2d_bet = 0;
	let win2dd_bet = 0;
	let win2dt_bet = 0;
	let win4dnodiskon_bet = 0;
	let win3dnodiskon_bet = 0;
	let win3ddnodiskon_bet = 0;
	let win2dnodiskon_bet = 0;
	let win2ddnodiskon_bet = 0;
	let win2dtnodiskon_bet = 0;
	let win4dbb_kena_bet = 0;
	let win3dbb_kena_bet = 0;
	let win3ddbb_kena_bet = 0;
	let win2dbb_kena_bet = 0;
	let win2ddbb_kena_bet = 0;
	let win2dtbb_kena_bet = 0;
	let win4dbb_bet = 0;
	let win3dbb_bet = 0;
	let win3ddbb_bet = 0;
	let win2dbb_bet = 0;
	let win2ddbb_bet = 0;
	let win2dtbb_bet = 0;
	let limittotal4d_bet = 0;
	let limittotal3d_bet = 0;
	let limittotal3dd_bet = 0;
	let limittotal2d_bet = 0;
	let limittotal2dd_bet = 0;
	let limittotal2dt_bet = 0;
	let limitline_4d = 0;
	let limitline_3d = 0;
	let limitline_3dd = 0;
	let limitline_2d = 0;
	let limitline_2dd = 0;
	let limitline_2dt = 0;
	let bbfs = 0;
	let count_line_4d = 0;
	let count_line_3d = 0;
	let count_line_3dd = 0;
	let count_line_2d = 0;
	let count_line_2dd = 0;
	let count_line_2dt = 0;
	let db_form4d_4d_count_temp = 0;
	let db_form4d_3d_count_temp = 0;
	let db_form4d_3dd_count_temp = 0;
	let db_form4d_2d_count_temp = 0;
	let db_form4d_2dd_count_temp = 0;
	let db_form4d_2dt_count_temp = 0;
  let generate2D = [];
	let generate2DD = [];
	let generate2DT = [];
	let generate3D = [];
	let generate3DD = [];
	let generate4D = [];
	let data_bbfs = [];
	let nol = 0;
	let satu = 0;
	let dua = 0;
	let tiga = 0;
	let empat = 0;
	let lima = 0;
	let enam = 0;
	let tujuh = 0;
	let delapan = 0;
	let sembilan = 0;

  //432 - INIT FORM
	let nomor_432 = "";
	let nomor_432_input;
	let bet_432 = "";
  //SET - INIT FORM
	let nomorset = "";
	let nomorset_input;
	let betset_1 = "";
	let betset_2 = "";
	let betset_3 = "";
	let betset_4 = "";
	let betset_5 = "";
	let betset_6 = "";
  //BBFS - INIT FORM
	let nomorbbfs = "";
	let nomorbbfs_input;
	let bet_1 = "";
	let bet_2 = "";
	let bet_3 = "";
	let bet_4 = "";
	let bet_5 = "";
	let bet_6 = "";
  //WAP
	let nomorwap = "";
	let nomorwap_input;
	//pola tarung
	let nomoras = "";
	let nomoras_input;
	let nomorkop = "";
	let nomorkop_input;
	let nomorkepala = "";
	let nomorekor = "";
	let bet_tarung = "";
	let bet_tarung_input;
	//3DD - INIT FORM
	let nomor3dd = "";
	let nomor3dd_input;
	let bet_3dd = "";
	//2DD - INIT FORM
	let nomor2dd = "";
	let nomor2dd_input;
	let bet_2dd = "";
	//2DT - INIT FORM
	let nomor2dt = "";
	let nomor2dt_input;
	let bet_2dt = "";
	//QUICK 2D
	let quick_pilihan1;
	let quick_pilihan2;
	let quick_bet = "";
	let quick_pilihan1_input;
	let quick_pilihan2_input;
	let quick_bet_input;

  let dispatch = createEventDispatcher();
  let isModalAlert = false
  let isModalAPilihan = false
  let flag_fulldiskon = "DISC"
  let msg_error = ""
  let path_432 = ""

  let card_custom = ""
  if(client_device == "MOBILE"){
    card_custom = "mx-2"
  }
  const changeTabs = (e) => {
    switch(e){
      case "432":
        class_tab_432 = "btn btn-sm rounded btn-outline btn-error";
        class_tab_432set = "";
        class_tab_432bolakbalik = "";
        class_tab_432wap = "";
        class_tab_432polatarung = "";
        class_tab_432quick2d = "";
        class_tab_4323DD = "";
        class_tab_4322DD = "";
        class_tab_4322DT = "";
        panel_form_432 = true;
        panel_form_432set = false;
        panel_form_432bolakbalik = false;
        panel_form_432wap = false;
        panel_form_432polatarung = false;
        panel_form_432quick2d = false;
        panel_form_4323dd = false;
        panel_form_4322dd = false;
        panel_form_4322dt = false;
        clearField();
        break;
      case "432SET":
        class_tab_432set = "btn btn-sm rounded btn-outline btn-error";
        class_tab_432 = "";
        class_tab_432bolakbalik = "";
        class_tab_432wap = "";
        class_tab_432polatarung = "";
        class_tab_432quick2d = "";
        class_tab_4323DD = "";
        class_tab_4322DD = "";
        class_tab_4322DT = "";
        panel_form_432set = true;
        panel_form_432 = false;
        panel_form_432bolakbalik = false;
        panel_form_432wap = false;
        panel_form_432polatarung = false;
        panel_form_432quick2d = false;
        panel_form_4323dd = false;
        panel_form_4322dd = false;
        panel_form_4322dt = false;
        clearField();
        break;
      case "432BOLAKBALIK":
        class_tab_432bolakbalik = "btn btn-sm rounded btn-outline btn-error";
        class_tab_432 = "";
        class_tab_432set = "";
        class_tab_432wap = "";
        class_tab_432polatarung = "";
        class_tab_432quick2d = "";
        class_tab_4323DD = "";
        class_tab_4322DD = "";
        class_tab_4322DT = "";
        panel_form_432bolakbalik = true;
        panel_form_432set = false;
        panel_form_432 = false;
        panel_form_432wap = false;
        panel_form_432polatarung = false;
        panel_form_432quick2d = false;
        panel_form_4323dd = false;
        panel_form_4322dd = false;
        panel_form_4322dt = false;
        clearField();
        break;
      case "432WAP":
        class_tab_432wap = "btn btn-sm rounded btn-outline btn-error";
        class_tab_432 = "";
        class_tab_432set = "";
        class_tab_432bolakbalik = "";
        class_tab_432polatarung = "";
        class_tab_432quick2d = "";
        class_tab_4323DD = "";
        class_tab_4322DD = "";
        class_tab_4322DT = "";
        panel_form_432wap = true;
        panel_form_432bolakbalik = false;
        panel_form_432set = false;
        panel_form_432 = false;
        panel_form_432polatarung = false;
        panel_form_432quick2d = false;
        panel_form_4323dd = false;
        panel_form_4322dd = false;
        panel_form_4322dt = false;
        clearField();
        break;
      case "432POLATARUNG":
        class_tab_432polatarung = "btn btn-sm rounded btn-outline btn-error";
        class_tab_432 = "";
        class_tab_432set = "";
        class_tab_432bolakbalik = "";
        class_tab_432wap = "";
        class_tab_432quick2d = "";
        class_tab_4323DD = "";
        class_tab_4322DD = "";
        class_tab_4322DT = "";
        panel_form_432polatarung = true;
        panel_form_432wap = false;
        panel_form_432bolakbalik = false;
        panel_form_432set = false;
        panel_form_432 = false;
        panel_form_432quick2d = false;
        panel_form_4323dd = false;
        panel_form_4322dd = false;
        panel_form_4322dt = false;
        clearField();
        break;
      case "432QUICK2D":
        class_tab_432quick2d = "btn btn-sm rounded btn-outline btn-error";
        class_tab_4323DD = "";
        class_tab_4322DD = "";
        class_tab_4322DT = "";
        class_tab_432polatarung = "";
        class_tab_432 = "";
        class_tab_432set = "";
        class_tab_432bolakbalik = "";
        class_tab_432wap = "";
        panel_form_432quick2d = true;
        panel_form_432polatarung = false;
        panel_form_432wap = false;
        panel_form_432bolakbalik = false;
        panel_form_432set = false;
        panel_form_432 = false;
        panel_form_4323dd = false;
        panel_form_4322dd = false;
        panel_form_4322dt = false;
        clearField();
        break;
      case "4323DD":
        class_tab_4323DD = "btn btn-sm rounded btn-outline btn-error";
        class_tab_4322DD = "";
        class_tab_4322DT = "";
        class_tab_432polatarung = "";
        class_tab_432 = "";
        class_tab_432set = "";
        class_tab_432bolakbalik = "";
        class_tab_432wap = "";
        class_tab_432quick2d = "";
        panel_form_4323dd = true;
        panel_form_432quick2d = false;
        panel_form_432polatarung = false;
        panel_form_432wap = false;
        panel_form_432bolakbalik = false;
        panel_form_432set = false;
        panel_form_432 = false;
        panel_form_4322dd = false;
        panel_form_4322dt = false;
        clearField();
        break;
      case "4322DD":
        class_tab_4322DD = "btn btn-sm rounded btn-outline btn-error";
        class_tab_4323DD = "";
        class_tab_4322DT = "";
        class_tab_432polatarung = "";
        class_tab_432 = "";
        class_tab_432set = "";
        class_tab_432bolakbalik = "";
        class_tab_432wap = "";
        class_tab_432quick2d = "";
        panel_form_4322dd = true;
        panel_form_4323dd = false;
        panel_form_432quick2d = false;
        panel_form_432polatarung = false;
        panel_form_432wap = false;
        panel_form_432bolakbalik = false;
        panel_form_432set = false;
        panel_form_432 = false;
        panel_form_4322dt = false;
        clearField();
        break;
      case "4322DT":
        class_tab_4322DT = "btn btn-sm rounded btn-outline btn-error";
        class_tab_4322DD = "";
        class_tab_4323DD = "";
        class_tab_432polatarung = "";
        class_tab_432 = "";
        class_tab_432set = "";
        class_tab_432bolakbalik = "";
        class_tab_432wap = "";
        class_tab_432quick2d = "";
        panel_form_4322dt = true;
        panel_form_4322dd = false;
        panel_form_4323dd = false;
        panel_form_432quick2d = false;
        panel_form_432polatarung = false;
        panel_form_432wap = false;
        panel_form_432bolakbalik = false;
        panel_form_432set = false;
        panel_form_432 = false;
        clearField();
        break;
    }     
  };
  const handleTambah = (e,path) => {
    let flag = true;
    switch (e) {
      case "4-3-2":
				if (nomor_432 == "" && (parseInt(bet_432) < minimal_bet)) {
					nomor_432_input.focus();
				} else {
					form4d_add();
				}
			  break;
      case "432SET":
				if (nomorset == "") {
					nomorset_input.focus();
				} else {
					if (isNaN(nomorset)) {
						nomorset = "";
						flag = false;
					}
					if (isNaN(betset_1)) {
						betset_1 = 0;
						flag = false;
					}
					if (isNaN(betset_2)) {
						betset_2 = 0;
						flag = false;
					}
					if (isNaN(betset_3)) {
						betset_3 = 0;
						flag = false;
					}
					if (isNaN(betset_4)) {
						betset_4 = 0;
						flag = false;
					}
					if (isNaN(betset_5)) {
						betset_5 = 0;
						flag = false;
					}
					if (flag) {
						form4dset_add();
					}
				}
				break;
      case "BBFS":
				if (nomorbbfs == "") {
					nomorbbfs_input.focus();
				} else {
					if (isNaN(nomorbbfs)) {
						nomorbbfs = "";
						flag = false;
					}
					if (isNaN(bet_1)) {
						bet_1 = 0;
						flag = false;
					}
					if (isNaN(bet_2)) {
						bet_2 = 0;
						flag = false;
					}
					if (isNaN(bet_3)) {
						bet_3 = 0;
						flag = false;
					}
					if (isNaN(bet_4)) {
						bet_4 = 0;
						flag = false;
					}
					if (isNaN(bet_5)) {
						bet_5 = 0;
						flag = false;
					}
					if (flag) {
						formbbfs_add();
					}
				}
				break;
      case "wap":
				if (nomorwap == "") {
					nomorwap_input.focus();
				} else {
					formwap_add();
				}
				break;
      case "polatarung":
				if (nomoras == "") {
					nomoras_input.focus();
					flag = false
				} 
				if (nomorkop == "") {
					nomorkop_input.focus();
					flag = false
				} 
				if(flag){
					formpolatarung_add();
				}
				break;
      case "quick2D":
				if (quick_bet == "" && parseInt(quick_bet) < minimal_bet) {
					quick_bet_input.focus();
				} else {
					if (isNaN(quick_bet)) {
						quick_bet = 0;
						flag = false;
					}
					if (flag) {
						formquick2d_add();
					}
				}
				break;
      case "3DD":
				if (nomor3dd == "" && parseInt(bet_3dd) < minimal_bet) {
					nomor3dd_input.focus();
				} else {
					if (nomor3dd.length < 3){
						nomor3dd = "";
						bet_3dd = 0;
						flag = false;
					}
					if (isNaN(nomor3dd)) {
						nomor3dd = "";
						flag = false;
					}
					if (isNaN(bet_3dd)) {
						bet_3dd = 0;
						flag = false;
					}
					if (flag) {
						form3dd_add();
					}
				}
				break;
        case "2DD":
				if (nomor2dd == "" && parseInt(bet_2dd) < minimal_bet) {
					nomor2dd_input.focus();
				} else {
					if (nomor2dd.length < 2){
						nomor2dd = "";
						bet_2dd = 0;
						flag = false;
					}
					if (isNaN(nomor2dd)) {
						nomor2dd = "";
						flag = false;
					}
					if (isNaN(bet_2dd)) {
						bet_2dd = 0;
						flag = false;
					}
					if (flag) {
						form2dd_add();
					}
				}
				break;
			case "2DT":
				if (nomor2dt == "" && parseInt(bet_2dt) < minimal_bet) {
					nomor2dt_input.focus();
				} else {
					if (nomor2dt.length < 2){
						nomor2dt = "";
						bet_2dt = 0;
						flag = false;
					}
					if (isNaN(nomor2dt)) {
						nomor2dt = "";
						flag = false;
					}
					if (isNaN(bet_2dt)) {
						bet_2dt = 0;
						flag = false;
					}
					if (flag) {
						form2dt_add();
					}
				}
				break;
      case "pilihan":
				path_432 = path
				isModalAPilihan = true;
				break;
    }
  };
  const handlePilihan = (e) => {
		flag_fulldiskon = e
		switch (path_432) {
			case "4-3-2":
				handleTambah('4-3-2')
				break;
			case "432SET":
				handleTambah('432SET');
				break;
			case "BBFS":
				handleTambah('BBFS');
				break;
			case "wap":
				handleTambah('wap');
				break;
			case "polatarung":
				handleTambah('polatarung');
				break;
			case "3DD":
				handleTambah('3DD');
				break;
			case "2DD":
				handleTambah('2DD');
				break;
			case "2DT":
				handleTambah('2DT');
				break;
			case "quick2D":
				handleTambah('quick2D');
				break;
		}
		isModalAPilihan = false
	};
  async function savetransaksi() {
		if (client_device == "WEBSITE") {
			css_loader = "position:absolute;z-index: 1000;left: 50%;top: 35%;display:inline;";
		} else {
			css_loader = "position:absolute;z-index: 1000;left: 40%;top: 50%;display:inline;";
		}
    msg_error = "";
		group_btn_beli = false;
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
			dispatch("handleInvoice", "call");
			reset();
		} else {
			if (json.status == "500" || json.status == "404") {
				group_btn_beli = true;
				isModalAlert = true;
			}
		}
	}
  function addKeranjang(
		nomor,game,
		bet,diskon_percen,diskon,bayar,win,kei,
		kei_percen,tipetoto) {
		let total_data = keranjang.length;
		let flag_data = false;
		msg_error = "";
		
		for (var i = 0; i < total_data; i++) {
			switch (game) {
				case "4D":
					if (nomor == keranjang[i].nomor.toString()) {
						let maxtotal_bayar4d = 0;
						for (var j = 0; j < keranjang.length; j++) {
							if ("4D" == keranjang[j].permainan) {
								if (nomor ==keranjang[j].nomor) {
									maxtotal_bayar4d =parseInt(maxtotal_bayar4d) +parseInt(keranjang[j].bet);
								}
							}
						}
						if (parseInt(limittotal4d_bet) < (parseInt(maxtotal_bayar4d)+parseInt(bet))) {
							msg_error = "Nomor ini : " +nomor +" sudah melebihi LIMIT TOTAL 4D<br />";
							flag_data = true;
						}
            console.log("Limit Total :",limittotal4d_bet)
					}
					break;
				case "3D":
					if (nomor == keranjang[i].nomor.toString()) {
						let maxtotal_bayar3d = 0;
						for (var j = 0; j < keranjang.length; j++) {
							if ("3D" == keranjang[j].permainan) {
								if (nomor ==keranjang[j].nomor) {
									maxtotal_bayar3d =parseInt(maxtotal_bayar3d) + parseInt(keranjang[j].bet);
								}
							}
						}
						if (parseInt(limittotal3d_bet) < (parseInt(maxtotal_bayar3d)+parseInt(bet))) {
							msg_error ="Nomor ini : " +nomor +" sudah melebihi LIMIT TOTAL 3D<br />";
							flag_data = true;
						}
					}
					break;
				case "3DD":
					if (nomor == keranjang[i].nomor.toString()) {
						let maxtotal_bayar3dd = 0;
						for (var j = 0; j < keranjang.length; j++) {
							if ("3DD" == keranjang[j].permainan) {
								if (nomor ==keranjang[j].nomor) {
									maxtotal_bayar3dd = parseInt(maxtotal_bayar3dd) + parseInt(keranjang[j].bet);
								}
							}
						}
						if (parseInt(limittotal3dd_bet) < (parseInt(maxtotal_bayar3dd)+parseInt(bet))) {
							msg_error = "Nomor ini : " +nomor +" sudah melebihi LIMIT TOTAL 3DD<br />";
							flag_data = true;
						}
					}
					break;
				case "2D":
					if (nomor == keranjang[i].nomor.toString()) {
						let maxtotal_bayar2d = 0;
						for (var j = 0; j < keranjang.length; j++) {
							if ("2D" == keranjang[j].permainan) {
								if (nomor ==keranjang[j].nomor) {
									maxtotal_bayar2d =parseInt(maxtotal_bayar2d) + parseInt(keranjang[j].bet);
								}
							}
						}
						if (parseInt(limittotal2d_bet) < (parseInt(maxtotal_bayar2d)+parseInt(bet))) {
							msg_error ="Nomor ini : " +nomor +" sudah melebihi LIMIT TOTAL 2D<br />";
							flag_data = true;
						}
					}
					break;
				case "2DD":
					if (nomor == keranjang[i].nomor.toString()) {
						let maxtotal_bayar2dd = 0;
						for (var j = 0; j < keranjang.length; j++) {
							if ("2DD" == keranjang[j].permainan) {
								if (nomor ==keranjang[j].nomor) {
									maxtotal_bayar2dd = parseInt(maxtotal_bayar2dd) + parseInt(keranjang[j].bet);
								}
							}
						}
						if (parseInt(limittotal2dd_bet) < (parseInt(maxtotal_bayar2dd)+parseInt(bet))) {
							msg_error = "Nomor ini : " +nomor + " sudah melebihi LIMIT TOTAL 2DD<br />";
							flag_data = true;
						}
					}
					break;
				case "2DT":
					if (nomor == keranjang[i].nomor.toString()) {
						let maxtotal_bayar2dt = 0;
						for (var j = 0; j < keranjang.length; j++) {
							if ("2DT" == keranjang[j].permainan) {
								if (nomor ==keranjang[j].nomor) {
									maxtotal_bayar2dt =parseInt(maxtotal_bayar2dt) + parseInt(keranjang[j].bet);
								}
							}
						}
						if (parseInt(limittotal2dt_bet) < (parseInt(maxtotal_bayar2dt)+parseInt(bet))) {
							msg_error = "Nomor ini : " + nomor +" sudah melebihi LIMIT TOTAL 2DT<br />";
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
				kei_percen,
				tipetoto,
			};
			keranjang = [data, ...keranjang];
			count_keranjang();
		}else{
			totalkeranjang = totalkeranjang  - bayar;
		}
    if (msg_error != "") {
			isModalAlert = true
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
		count_line_4d = 0;
		count_line_3d = 0;
		count_line_3dd = 0;
		count_line_2d = 0;
		count_line_2dd = 0;
		count_line_2dt = 0;
		limittogel("4-3-2");
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
		// group_btn_beli = true;
		const json = await res.json();
		let record = json.record;
		minimal_bet = record[0]["min_bet"];
		for (var i = 0; i < record.length; i++) {
			minimal_bet = parseInt(record[i]["min_bet"]);
			max4d_bet = parseInt(record[i]["max4d_bet"]);
			max3d_bet = parseInt(record[i]["max3d_bet"]);
			max3dd_bet = parseInt(record[i]["max3dd_bet"]);
			max2d_bet = parseInt(record[i]["max2d_bet"]);
			max2dd_bet = parseInt(record[i]["max2dd_bet"]);
			max2dt_bet = parseInt(record[i]["max2dt_bet"]);
			disc4d_bet = parseFloat(record[i]["disc4d_bet"]);
			disc3d_bet = parseFloat(record[i]["disc3d_bet"]);
			disc3dd_bet = parseFloat(record[i]["disc3dd_bet"]);
			disc2d_bet = parseFloat(record[i]["disc2d_bet"]);
			disc2dd_bet = parseFloat(record[i]["disc2dd_bet"]);
			disc2dt_bet = parseFloat(record[i]["disc2dt_bet"]);
			win4d_bet = parseInt(record[i]["win4d_bet"]);
			win3d_bet = parseInt(record[i]["win3d_bet"]);
			win3dd_bet = parseInt(record[i]["win3dd_bet"]);
			win2d_bet = parseInt(record[i]["win2d_bet"]);
			win2dd_bet = parseInt(record[i]["win2dd_bet"]);
			win2dt_bet = parseInt(record[i]["win2dt_bet"]);
			win4dnodiskon_bet = parseInt(record[i]["win4dnodiskon_bet"]);
			win3dnodiskon_bet = parseInt(record[i]["win3dnodiskon_bet"]);
			win3ddnodiskon_bet = parseInt(record[i]["win3ddnodiskon_bet"]);
			win2dnodiskon_bet = parseInt(record[i]["win2dnodiskon_bet"]);
			win2ddnodiskon_bet = parseInt(record[i]["win2ddnodiskon_bet"]);
			win2dtnodiskon_bet = parseInt(record[i]["win2dtnodiskon_bet"]);
			win4dbb_kena_bet = parseInt(record[i]["win4dbb_kena_bet"]);
			win3dbb_kena_bet = parseInt(record[i]["win3dbb_kena_bet"]);
			win3ddbb_kena_bet = parseInt(record[i]["win3ddbb_kena_bet"]);
			win2dbb_kena_bet = parseInt(record[i]["win2dbb_kena_bet"]);
			win2ddbb_kena_bet = parseInt(record[i]["win2ddbb_bet"]);
			win2dtbb_kena_bet = parseInt(record[i]["win2dtbb_kena_bet"]);
			win4dbb_bet = parseInt(record[i]["win4dbb_bet"]);
			win3dbb_bet = parseInt(record[i]["win3dbb_bet"]);
			win3ddbb_bet = parseInt(record[i]["win3dd_bet"]);
			win2dbb_bet = parseInt(record[i]["win2dbb_bet"]);
			win2ddbb_bet = parseInt(record[i]["win2ddbb_bet"]);
			win2dtbb_bet = parseInt(record[i]["win2dtbb_bet"]);
			limittotal4d_bet = parseInt(record[i]["limittotal4d_bet"]);
			limittotal3d_bet = parseInt(record[i]["limittotal3d_bet"]);
			limittotal3dd_bet = parseInt(record[i]["limittotal3dd_bet"]);
			limittotal2d_bet = parseInt(record[i]["limittotal2d_bet"]);
			limittotal2dd_bet = parseInt(record[i]["limittotal2dd_bet"]);
			limittotal2dt_bet = parseInt(record[i]["limittotal2dt_bet"]);
			limitline_4d = parseInt(record[i]["limitline_4d"]);
			limitline_3d = parseInt(record[i]["limitline_3d"]);
			limitline_3dd = parseInt(record[i]["limitline_3dd"]);
			limitline_2d = parseInt(record[i]["limitline_2d"]);
			limitline_2dd = parseInt(record[i]["limitline_2dd"]);
			limitline_2dt = parseInt(record[i]["limitline_2dt"]);
			bbfs = parseInt(record[i]["bbfs"]);
		}
	}
  async function limittogel(e) {
		db_form4d_4d_count_temp = 0;
		db_form4d_3d_count_temp = 0;
		db_form4d_3dd_count_temp = 0;
		db_form4d_2d_count_temp = 0;
		db_form4d_2dd_count_temp = 0;
		db_form4d_2dt_count_temp = 0;
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
		const json = await res.json();
		let record = json.record;
		db_form4d_4d_count_temp = record.total_4d;
		db_form4d_3d_count_temp = record.total_3d;
		db_form4d_3dd_count_temp = record.total_3dd;
		db_form4d_2d_count_temp = record.total_2d;
		db_form4d_2dd_count_temp = record.total_2dd;
		db_form4d_2dt_count_temp = record.total_2dt;
		count_line_4d = count_line_4d + db_form4d_4d_count_temp;
		count_line_3d = count_line_3d + db_form4d_3d_count_temp;
		count_line_3dd = count_line_3dd + db_form4d_3dd_count_temp;
		count_line_2d = count_line_2d + db_form4d_2d_count_temp;
		count_line_2dd = count_line_2dd + db_form4d_2dd_count_temp;
		count_line_2dt = count_line_2dt + db_form4d_2dt_count_temp;
	}
  function checkLimitLine(game) {
		let flag = false;
		let limit4d = 0;
		let limit3d = 0;
		let limit3dd = 0;
		let limit2d = 0;
		let limit2dd = 0;
		let limit2dt = 0;
		switch (game.toString()) {
			case "4D":
				limit4d = parseInt(count_line_4d);
				if (parseInt(limit4d) < parseInt(limitline_4d)) {
					flag = true;
				}
				break;
			case "3D":
				limit3d = parseInt(count_line_3d);
				if (parseInt(limit3d) < parseInt(limitline_3d)) {
					flag = true;
				}
				break;
			case "3DD":
				limit3dd = parseInt(count_line_3dd);
				if (parseInt(limit3dd) < parseInt(limitline_3dd)) {
					flag = true;
				}
				break;
			case "2D":
				limit2d = parseInt(count_line_2d);
				if (parseInt(limit2d) < parseInt(limitline_2d)) {
					flag = true;
				}
				break;
			case "2DD":
				limit2dd = parseInt(count_line_2dd);
				if (parseInt(limit2dd) < parseInt(limitline_2dd)) {
					flag = true;
				}
				break;
			case "2DT":
				limit2dt = parseInt(count_line_2dt);
				if (parseInt(limit2dt) < parseInt(limitline_2dt)) {
					flag = true;
				}
				break;
		}
		return flag;
	}
  function count_keranjang() {
		let count_4d = 0;
		let count_3d = 0;
		let count_3dd = 0;
		let count_2d = 0;
		let count_2dd = 0;
		let count_2dt = 0;
		for (let i = 0; i < keranjang.length; i++) {
			switch (keranjang[i].permainan.toString()) {
				case "4D":
					count_4d = count_4d + 1;
					break;
				case "3D":
					count_3d = count_3d + 1;
					break;
				case "3DD":
					count_3dd = count_3dd + 1;
					break;
				case "2D":
					count_2d = count_2d + 1;
					break;
				case "2DD":
					count_2dd = count_2dd + 1;
					break;
				case "2DT":
					count_2dt = count_2dt + 1;
					break;
			}
		}
		count_line_4d = count_4d + db_form4d_4d_count_temp;
		count_line_3d = count_3d + db_form4d_3d_count_temp;
		count_line_3dd = count_3dd + db_form4d_3dd_count_temp;
		count_line_2d = count_2d + db_form4d_2d_count_temp;
		count_line_2dd = count_2dd + db_form4d_2dd_count_temp;
		count_line_2dt = count_2dt + db_form4d_2dt_count_temp;
	}
  function countangkabbfs(x) {
		for (let i = 0; i < x.length; i++) {
			data_bbfs.push(x[i]);
			switch (x[i]) {
				case "0":
					nol = nol + 1;
					break;
				case "1":
					satu = satu + 1;
					break;
				case "2":
					dua = dua + 1;
					break;
				case "3":
					tiga = tiga + 1;
					break;
				case "4":
					empat = empat + 1;
					break;
				case "5":
					lima = lima + 1;
					break;
				case "6":
					enam = enam + 1;
					break;
				case "7":
					tujuh = tujuh + 1;
					break;
				case "8":
					delapan = delapan + 1;
					break;
				case "9":
					sembilan = sembilan + 1;
					break;
			}
		}
	}
  function checkcountangka(x) {
		//TEMP
		let nol_temp = 0;
		let satu_temp = 0;
		let dua_temp = 0;
		let tiga_temp = 0;
		let empat_temp = 0;
		let lima_temp = 0;
		let enam_temp = 0;
		let tujuh_temp = 0;
		let delapan_temp = 0;
		let sembilan_temp = 0;
		let flag = true;
		for (let i = 0; i < x.length; i++) {
			switch (x[i]) {
				case "0":
					nol_temp = nol_temp + 1;
					break;
				case "1":
					satu_temp = satu_temp + 1;
					break;
				case "2":
					dua_temp = dua_temp + 1;
					break;
				case "3":
					tiga_temp = tiga_temp + 1;
					break;
				case "4":
					empat_temp = empat_temp + 1;
					break;
				case "5":
					lima_temp = lima_temp + 1;
					break;
				case "6":
					enam_temp = enam_temp + 1;
					break;
				case "7":
					tujuh_temp = tujuh_temp + 1;
					break;
				case "8":
					delapan_temp = delapan_temp + 1;
					break;
				case "9":
					sembilan_temp = sembilan_temp + 1;
					break;
			}
		}
		if (nol_temp > nol) {
			flag = false;
		}
		if (satu_temp > satu) {
			flag = false;
		}
		if (dua_temp > dua) {
			flag = false;
		}
		if (tiga_temp > tiga) {
			flag = false;
		}
		if (empat_temp > empat) {
			flag = false;
		}
		if (lima_temp > lima) {
			flag = false;
		}
		if (enam_temp > enam) {
			flag = false;
		}
		if (tujuh_temp > tujuh) {
			flag = false;
		}
		if (delapan_temp > delapan) {
			flag = false;
		}
		if (sembilan_temp > sembilan) {
			flag = false;
		}
		return flag;
	}
  function checkbulkdata(datatot) {
		let res_money = datatot.split("#");
		let flag_checkcharacter = false;
		let flag_running = false;
		let count_checkcharacter = 0;
		let money = res_money[1];
		let bet = 0;
		let datanomor = res_money[0];
		let resnomor = datanomor.split("*");
		let total_resnomor = resnomor.length;
		let diskon = 0;
		let diskonpercen = 0;
		let win = 0;
		let kei = 0;
		let kei_percen = 0;
		let bayar = 0;
		let nmgame = "";
		for (let i = 0; i < datanomor.length; i++) {
			if (datanomor[i] == "*") {
				flag_checkcharacter = true;
				count_checkcharacter = count_checkcharacter + 1;
			}
		}
		if (flag_checkcharacter == true && count_checkcharacter > 0) {
			flag_running = true;
		}
		if (flag_running == false) {
			let flag_checkdata = true;
			
			flag_checkdata = checkdata_432d(datanomor, datanomor.length, money);
			
			if (flag_checkdata == true) {
				let flag_push = false;
				let game = datanomor.length;
				
				switch (game.toString()) {
					case "4":
						if (checkLimitLine("4D") == true) {
							nmgame = "4D";
							switch(flag_fulldiskon){
								case "FULL":
									diskon = 0
									diskonpercen = 0
									win = win4dnodiskon_bet;
									break;
								case "BB":
									diskon = 0
									diskonpercen = 0
									win = win4dbb_kena_bet;
									break;
								default:
									diskon = money * disc4d_bet;
									diskonpercen = disc4d_bet;
									win = win4d_bet;
									break;
							}
							
							flag_push = true;
						}
						break;
					case "3":
						if (checkLimitLine("3D") == true) {
							nmgame = "3D";
							switch(flag_fulldiskon){
								case "FULL":
									diskon = 0
									diskonpercen = 0
									win = win3dnodiskon_bet;
									break;
								case "BB":
									diskon = 0
									diskonpercen = 0
									win = win3dbb_kena_bet;
									break;
								default:
									diskon = money * disc3d_bet;
									diskonpercen = disc3d_bet;
									win = win3d_bet;
									break;
							}
							
							flag_push = true;
						}
						break;
					case "2":
						if (checkLimitLine("2D") == true) {
							nmgame = "2D";
							switch(flag_fulldiskon){
								case "FULL":
									diskon = 0
									diskonpercen = 0
									win = win2dnodiskon_bet;
									break;
								case "BB":
									diskon = 0
									diskonpercen = 0
									win = win2dbb_kena_bet;
									break;
								default:
									diskon = money * disc2d_bet;
									diskonpercen = disc2d_bet;
									win = win2d_bet;
									break;
							}
							flag_push = true;
						}
						break;
				}
				if (flag_push == true) {
					bet = money;
					bayar = parseInt(bet) - parseInt(Math.ceil(diskon));
					totalkeranjang = bayar + totalkeranjang;
					addKeranjang(
						datanomor,
						nmgame,
						bet,
						diskonpercen,
						diskon,
						bayar,
						win,
						0,
						0,flag_fulldiskon
					);
					clearField();
				}
			}
		} else {
			for (let i = 0; i < total_resnomor; i++) {
				let nomor = resnomor[i];
				let game = resnomor[i].length;
				let flag = true;
				flag = checkdata_432d(nomor, game, money);
				if (flag == true) {
					let flag_push = false;
					switch (game.toString()) {
						case "4":
							if (checkLimitLine("4D") == true) {
								nmgame = "4D";
								switch(flag_fulldiskon){
									case "FULL":
										diskon = 0
										diskonpercen = 0
										win = win4dnodiskon_bet;
										break;
									case "BB":
										diskon = 0
										diskonpercen = 0
										win = win4dbb_kena_bet;
										break;
									default:
										diskon = money * disc4d_bet;
										diskonpercen = disc4d_bet;
										win = win4d_bet;
										break;
								}
								flag_push = true;
							}
							break;
						case "3":
							if (checkLimitLine("3D") == true) {
								nmgame = "3D";
								switch(flag_fulldiskon){
									case "FULL":
										diskon = 0
										diskonpercen = 0
										win = win3dnodiskon_bet;
										break;
									case "BB":
										diskon = 0
										diskonpercen = 0
										win = win3dbb_kena_bet;
										break;
									default:
										diskon = money * disc3d_bet;
										diskonpercen = disc3d_bet;
										win = win3d_bet;
										break;
								}
								flag_push = true;
							}
							break;
						case "2":
							if (checkLimitLine("2D") == true) {
								nmgame = "2D";
								switch(flag_fulldiskon){
									case "FULL":
										diskon = 0
										diskonpercen = 0
										win = win2dnodiskon_bet;
										break;
									case "BB":
										diskon = 0
										diskonpercen = 0
										win = win2dbb_kena_bet;
										break;
									default:
										diskon = money * disc2d_bet;
										diskonpercen = disc2d_bet;
										win = win2d_bet;
										break;
								}
								
								flag_push = true;
							}
							break;
					}
					if (flag_push == true) {
						bet = money;
						bayar = parseInt(bet) - parseInt(Math.ceil(diskon));
						totalkeranjang = bayar + totalkeranjang;
						addKeranjang(
							nomor,
							nmgame,
							bet,
							diskonpercen,
							diskon,
							bayar,
							win,
							0,
							0,flag_fulldiskon
						);
						clearField();
					}
				}
			}
		}
	}
  function checkdata_432d(nomor, game, money) {
		let flag = true;
    msg_error = "";
		if (money == undefined) {
			flag = false;
		} else {
			if (parseInt(money) < parseInt(minimal_bet)) {
				clearField();
				flag = false;
				msg_error += "Data Tidak Valid: " +nomor +"-" +game +"D-" +money +" | Minimal Bet : " + new Intl.NumberFormat().format(minimal_bet) +"<br />";
			}
			if (parseInt(nomor.length) < 2 || parseInt(nomor.length) > 4) {
				flag = false;
				clearField();
				msg_error +="Data Tidak Valid: " +nomor +"-" +game +"D-" +money +" | Nomor harus 2 - 4 Digit<br />";
			}
			if (game.toString() == "4") {
				if (parseInt(money) > parseInt(max4d_bet)) {
					clearField();
					flag = false;
					msg_error += "Data Tidak Valid: " +nomor +"-" +game +"D-" +money +" | Maximal Bet 4D : " +max4d_bet +"<br />";
				}
				if (parseInt(count_line_4d)+parseInt(db_form4d_4d_count_temp) >= parseInt(limitline_4d)) {
					flag = false;
				}
			}
			if (game.toString() == "3") {
				if (parseInt(money) > parseInt(max3d_bet)) {
					clearField();
					flag = false;
				}
				if (parseInt(count_line_3d) + parseInt(db_form4d_3d_count_temp) > parseInt(limitline_3d)) {
					flag = false;
				}
			}
			if (game.toString() == "2") {
				if (parseInt(money) > parseInt(max2d_bet)) {
					clearField();
					flag = false;
					msg_error += "Data Tidak Valid: " +nomor +"-" +game +"D-" +money +" | Maximal Bet 2D : " +new Intl.NumberFormat().format(max2d_bet) +"<br />";
				}
				if (parseInt(count_line_2d) + parseInt(db_form4d_2d_count_temp) >= parseInt(limitline_2d)) {
					flag = false;
				}
			}
		}
    if(msg_error != ""){
      isModalAlert = true;
    }
		return flag;
	}
  function form4d_add() {
		let flag = true;
		let game = nomor_432.length;
		let diskon = 0;
		let diskonpercen = 0;
		let win = 0;
		let bayar = 0;
		let nmgame = "";
		msg_error = "";
		if (nomor_432 == "") {
			nomor_432_input.focus();
			flag = false;
		}
		let tempbintang = 0;
		let tempnumber = 0;
		for (let i = 0; i <= 3; i++) {
			if (nomor_432[i] == "*") {
				tempbintang = tempbintang + 1;
			}
			let numbera = parseInt(nomor_432[i])
			if (!isNaN(numbera)) {
				tempnumber = tempnumber + 1;
			}
		}
		
		if (tempbintang > 2) {
			flag = false;
			clearField();
			nomor_input.focus();
			msg_error += "Format Salah<br>Contoh:<br>4D: 1234<br>3D: 123<br>3DD: 123*<br>2D: 12 atau **10<br>2DD: 10**<br>2DT: *10*<br>";
		}
		if (nomor_432[3] == "*" && parseInt(tempnumber) == 3) {
			nomor_432 = String(nomor_432[0]) + String(nomor_432[1])+ String(nomor_432[2]);
			game = "3DD";
		}
		if (nomor_432[0] == "*" && parseInt(tempnumber) == 3) {
			nomor_432 = String(nomor_432[1]) + String(nomor_432[2])+ String(nomor_432[3]);
			game = "3";
		}
		if (nomor_432[0] == "*" && nomor_432[1] == "*" && parseInt(tempnumber) == 2) {
			nomor_432 = String(nomor_432[2]) + String(nomor_432[3]);
			game = "2";
		}
		if (nomor_432[2] == "*" && nomor_432[3] == "*" && parseInt(tempnumber) == 2) {
			nomor_432 = String(nomor_432[0]) + String(nomor_432[1]);
			game = "2DD";
		}
		if (nomor_432[0] == "*" && nomor_432[3] == "*" && parseInt(tempnumber) == 2) {
			nomor_432 = String(nomor_432[1]) + String(nomor_432[2]);
			game = "2DT";
		}
		if (nomor_432.length < 2) {
			flag = false;
			nomor_432_input.focus();
			nomor_432 = "";
			msg_error += "Minimal Nomor 2 Digit<br>";
		}
		if (bet_432 == "") {
			flag = false;
			msg_error += "Bet tidak boleh kosong<br>";
		}
		if (parseInt(bet_432) < parseInt(minimal_bet)) {
			bet_432 = minimal_bet;
			flag = false;
			msg_error += "Minimal Bet : " + new Intl.NumberFormat().format(minimal_bet)+"<br>";
		}
		if (game.toString() == "4") {
			if (parseInt(bet_432) > parseInt(max4d_bet)) {
				bet_432 = minimal_bet;
				flag = false;
				msg_error += "Maximal Bet 4D : " +new Intl.NumberFormat().format(max4d_bet)+"<br>";
			}
			if (checkLimitLine("4D") == false) {
				flag = false;
				msg_error += "Maximal Line 4D : " + limitline_4d+"<br>";
				clearField();
			}
		}
		if (game.toString() == "3") {
			if (parseInt(bet_432) > parseInt(max3d_bet)) {
				bet_432 = minimal_bet;
				flag = false;
				msg_error += "Maximal Bet 3D : " +new Intl.NumberFormat().format(max3d_bet)+"<br>";
			}
			if (checkLimitLine("3D") == false) {
				flag = false;
				msg_error += "Maximal Line 3D : " + limitline_3d+"<br>";
				clearField();
			}
			if(parseInt(tempnumber) != 3){
				flag = false;
				msg_error += "Format Nomor 3D Salah \n";
				clearField();
			}
		}
		if (game.toString() == "3DD") {
			if (parseInt(bet_432) > parseInt(max3dd_bet)) {
				bet_432 = minimal_bet;
				flag = false;
				msg_error += "Maximal Bet 3DD : " +new Intl.NumberFormat().format(max3dd_bet)+"<br>";
			}
			if (checkLimitLine("3DD") == false) {
				flag = false;
				msg_error += "Maximal Line 3DD : " + limitline_3dd+"<br>";
				clearField();
			}
			if(parseInt(tempnumber) != 3){
				flag = false;
				msg_error += "Format Nomor 3D Salah <br>";
				clearField();
			}
		}
		if (game.toString() == "2") {
			if (parseInt(bet_432) > parseInt(max2d_bet)) {
				bet_432 = minimal_bet;
				flag = false;
				msg_error += "Maximal Bet 2D : " + new Intl.NumberFormat().format(max2d_bet)+"<br>";
			}
			if (checkLimitLine("2D") == false) {
				flag = false;
				msg_error +="Maximal Line 2D : " + limitline_2d+"<br>";
				clearField();
			}
			if(parseInt(tempnumber) != 2){
				flag = false;
				msg_error += "Format Nomor 2D Salah <br>";
				clearField();
			}
		}
		if (game.toString() == "2DD") {
			if (parseInt(bet_432) > parseInt(max2dd_bet)) {
				bet_432 = minimal_bet;
				flag = false;
				msg_error += "Maximal Bet 2D : " +new Intl.NumberFormat().format(max2dd_bet)+"<br>";
			}
			if (checkLimitLine("2DD") == false) {
				flag = false;
				msg_error += "Maximal Line 2DD : " + limitline_2dd;
				clearField();
			}
			if(parseInt(tempnumber) != 2){
				flag = false;
				msg_error += "Format Nomor 2D Salah <br>";
				clearField();
			}
		}
		if (game.toString() == "2DT") {
			if (parseInt(bet_432) > parseInt(max2dt_bet)) {
				bet = minimal_bet;
				flag = false;
				msg_error += "Maximal Bet 2DT : " +new Intl.NumberFormat().format(max2dt_bet)+"<br>";
			}
			if (checkLimitLine("2DT") == false) {
				flag = false;
				msg_error += "Maximal Line 2DT : " + limitline_2dt+"<br>";
				clearField();
			}
		}
		if (flag) {
			switch (game.toString()) {
				case "4":
					nmgame = "4D";
					switch(flag_fulldiskon){
						case "FULL":
							diskon = 0
							diskonpercen = 0
							win = win4dnodiskon_bet;
							break;
						case "BB":
							diskon = 0
							diskonpercen = 0
							win = win4dbb_kena_bet;
							break;
						default:
							diskon = bet_432 * disc4d_bet;
							diskonpercen = disc4d_bet;
							win = win4d_bet;
							break;
					}
					break;
				case "3":
					nmgame = "3D";
					switch(flag_fulldiskon){
						case "FULL":
							diskon = 0
							diskonpercen = 0
							win = win3dnodiskon_bet;
							break;
						case "BB":
							diskon = 0
							diskonpercen = 0
							win = win3dbb_kena_bet;
							break;
						default:
							diskon = bet_432 * disc3d_bet;
							diskonpercen = disc3d_bet;
							win = win3d_bet;
							break;
					}
					break;
				case "3DD":
					nmgame = "3DD";
					switch(flag_fulldiskon){
						case "FULL":
							diskon = 0
							diskonpercen = 0
							win = win3ddnodiskon_bet;
							break;
						case "BB":
							diskon = 0
							diskonpercen = 0
							win = win3ddbb_kena_bet;
							break;
						default:
							diskon = bet_432 * disc3dd_bet;
							diskonpercen = disc3dd_bet;
							win = win3dd_bet;
							break;
					}
					break;
				case "2":
					nmgame = "2D";
					switch(flag_fulldiskon){
						case "FULL":
							diskon = 0
							diskonpercen = 0
							win = win2dnodiskon_bet;
							break;
						case "BB":
							diskon = 0
							diskonpercen = 0
							win = win2dbb_kena_bet;
							break;
						default:
							diskon = bet_432 * disc2d_bet;
							diskonpercen = disc2d_bet;
							win = win2d_bet;
							break;
					}
					break;
				case "2DD":
					nmgame = "2DD";
					switch(flag_fulldiskon){
						case "FULL":
							diskon = 0
							diskonpercen = 0
							win = win2ddnodiskon_bet;
							break;
						case "BB":
							diskon = 0
							diskonpercen = 0
							win = win2ddbb_kena_bet;
							break;
						default:
							diskon = bet_432 * disc2dd_bet;
							diskonpercen = disc2dd_bet;
							win = win2dd_bet;
							break;
					}
					break;
				case "2DT":
					nmgame = "2DT";
					switch(flag_fulldiskon){
						case "FULL":
							diskon = 0
							diskonpercen = 0
							win = win2dtnodiskon_bet;
							break;
						case "BB":
							diskon = 0
							diskonpercen = 0
							win = win2dtbb_kena_bet;
							break;
						default:
							diskon = bet_432 * disc2dt_bet;
							diskonpercen = disc2dt_bet;
							win = win2dt_bet;
							break;
					}
					break;
			}
			bayar = parseInt(bet_432) - parseInt(Math.ceil(diskon));
			totalkeranjang = bayar + totalkeranjang;
			addKeranjang(
				nomor_432,
				nmgame,
				bet_432,
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
			isModalAlert = true
		}
	}
  function form4dset_add() {
		let flag = true;
		let flagfinish = false;
		let game = nomorset.length;
		let bet = 0;
		let diskon = 0;
		let diskonpercen = 0;
		let win = 0;
		let bayar = 0;
		let nomor = "";
		msg_error = "";
		if (nomorset == "") {
			nomorset_input.focus();
			flag = false;
		}
		if (parseInt(betset_1) > 0) {
			if (parseInt(betset_1) < parseInt(minimal_bet)) {
				betset_1 = minimal_bet;
				flag = false;
				msg_error += "Minimal Bet 4D : " +new Intl.NumberFormat().format(minimal_bet)+"<br>";
			}
			if (parseInt(betset_1) > parseInt(max4d_bet)) {
				betset_1 = max4d_bet;
				flag = false;
				msg_error += "Maximal Bet 4D : " +new Intl.NumberFormat().format(max4d_bet)+"<br>";
			}
			if (flag == true) {
				if (game.toString() == "4") {
					switch(flag_fulldiskon){
						case "FULL":
							diskon = 0
							diskonpercen = 0
							win = win4dnodiskon_bet;
							break;
						case "BB":
							diskon = 0
							diskonpercen = 0
							win = win4dbb_kena_bet;
							break;
						default:
							diskon = Math.ceil(betset_1 * disc4d_bet);
							diskonpercen = disc4d_bet;
							win = win4d_bet;
							break;
					}
					bayar = parseInt(betset_1) - parseInt(Math.ceil(diskon));
					if (checkLimitLine("4D") == true) {
						nomor = nomorset;
						totalkeranjang = bayar + totalkeranjang;
						bet = betset_1;
						addKeranjang(
							nomor,
							"4D",
							bet,
							diskonpercen,
							diskon,
							bayar,
							win,
							0,
							0,flag_fulldiskon
						);
						flagfinish = true
					} else {
						msg_error = "Line 4D sudah melebihi limit";
					}
				}
			}
		}
		if (parseInt(betset_2) > 0) {
			if (parseInt(betset_2) < parseInt(minimal_bet)) {
				betset_2 = minimal_bet;
				flag = false;
				msg_error += "Minimal Bet 3D : " +new Intl.NumberFormat().format(minimal_bet)+"<br>";
			}
			if (parseInt(betset_2) > parseInt(max3d_bet)) {
				betset_2 = max3d_bet;
				flag = false;
				msg_error += "Maximal Bet 3D : " +new Intl.NumberFormat().format(max3d_bet)+"<br>";
			}
			if (flag == true) {
				if (game.toString() == "4" || game.toString() == "3") {
					switch(flag_fulldiskon){
						case "FULL":
							diskon = 0
							diskonpercen = 0
							win = win3dnodiskon_bet;
							break;
						case "BB":
							diskon = 0
							diskonpercen = 0
							win = win3dbb_kena_bet;
							break;
						default:
							diskon = Math.ceil(betset_2 * disc3d_bet);
							diskonpercen = disc3d_bet;
							win = win3d_bet;
							break;
					}
					bayar = parseInt(betset_2) - parseInt(Math.ceil(diskon));
					if (checkLimitLine("3D") == true) {
						switch(game.toString()){
							case "4":
								nomor = nomorset[1]+nomorset[2]+nomorset[3];
								break;
							case "3":
								nomor = nomorset[0]+nomorset[1]+nomorset[2];
								break;
						}
						totalkeranjang = bayar + totalkeranjang;
						bet = betset_2;
						addKeranjang(
							nomor,
							"3D",
							bet,
							diskonpercen,
							diskon,
							bayar,
							win,
							0,
							0,flag_fulldiskon
						);
						flagfinish = true
					} else {
						msg_error = "Line 3D sudah melebihi limit";
					}
				}
			}
		}
		if (parseInt(betset_3) > 0) {
			if (parseInt(betset_3) < parseInt(minimal_bet)) {
				betset_3 = minimal_bet;
				flag = false;
				msg_error += "Minimal Bet 2D : " +new Intl.NumberFormat().format(minimal_bet)+"<br>";
			}
			if (parseInt(betset_3) > parseInt(max2d_bet)) {
				betset_3 = max2d_bet;
				flag = false;
				msg_error += "Maximal Bet 2D : " +new Intl.NumberFormat().format(max2d_bet)+"<br>";
			}
			if (flag == true) {
				if (game.toString() == "4" || game.toString() == "3" || game.toString() == "2") {
					switch(flag_fulldiskon){
						case "FULL":
							diskon = 0
							diskonpercen = 0
							win = win2dnodiskon_bet;
							break;
						case "BB":
							diskon = 0
							diskonpercen = 0
							win = win2dbb_kena_bet;
							break;
						default:
							diskon = Math.ceil(betset_3 * disc2d_bet);
							diskonpercen = disc2d_bet;
							win = win2d_bet;
							break;
					}
					
					bayar = parseInt(betset_3) - parseInt(Math.ceil(diskon));
					if (checkLimitLine("2D") == true) {
						switch(game.toString()){
							case "4":
								nomor = nomorset[2]+nomorset[3];
								break;
							case "3":
								nomor = nomorset[1]+nomorset[2];
								break;
							case "2":
								nomor = nomorset[0]+nomorset[1];
								break;
						}
						totalkeranjang = bayar + totalkeranjang;
						bet = betset_3;
						addKeranjang(
							nomor,
							"2D",
							bet,
							diskonpercen,
							diskon,
							bayar,
							win,
							0,
							0,flag_fulldiskon
						);
						flagfinish = true
					} else {
						msg_error = "Line 2D sudah melebihi limit";
					}
				}
			}
		}
		if (parseInt(betset_4) > 0) {
			if (parseInt(betset_4) < parseInt(minimal_bet)) {
				betset_4 = minimal_bet;
				flag = false;
				msg_error += "Minimal Bet 2DD : " +new Intl.NumberFormat().format(minimal_bet)+"<br>";
			}
			if (parseInt(betset_4) > parseInt(max2dd_bet)) {
				betset_4 = max2dd_bet;
				flag = false;
				msg_error += "Maximal Bet 2DD : " +new Intl.NumberFormat().format(max2dd_bet)+"<br>";
			}
			if (flag == true) {
				if (game.toString() == "4" || game.toString() == "3" || game.toString() == "2") {
					switch(flag_fulldiskon){
						case "FULL":
							diskon = 0
							diskonpercen = 0
							win = win2ddnodiskon_bet;
							break;
						case "BB":
							diskon = 0
							diskonpercen = 0
							win = win2ddbb_kena_bet;
							break;
						default:
							diskon = Math.ceil(betset_4 * disc2dd_bet);
							diskonpercen = disc2dd_bet;
							win = win2dd_bet;
							break;
					}
					
					bayar = parseInt(betset_4) - parseInt(Math.ceil(diskon));
					if (checkLimitLine("2DD") == true) {
						switch(game.toString()){
							case "4":
								nomor = nomorset[2]+nomorset[3];
								break;
							case "3":
								nomor = nomorset[1]+nomorset[2];
								break;
							case "2":
								nomor = nomorset[0]+nomorset[1];
								break;
						}
						totalkeranjang = bayar + totalkeranjang;
						bet = betset_4;
						addKeranjang(
							nomor,
							"2DD",
							bet,
							diskonpercen,
							diskon,
							bayar,
							win,
							0,
							0,flag_fulldiskon
						);
						flagfinish = true
					} else {
						msg_error = "Line 2DD sudah melebihi limit";
					}
				}
			}
		}
		if (parseInt(betset_5) > 0) {
			if (parseInt(betset_5) < parseInt(minimal_bet)) {
				betset_5 = minimal_bet;
				flag = false;
				msg_error += "Minimal Bet 2DT : " +new Intl.NumberFormat().format(minimal_bet)+"<br>";
			}
			if (parseInt(betset_5) > parseInt(max2dt_bet)) {
				betset_5 = max2dt_bet;
				flag = false;
				msg_error += "Maximal Bet 2DT : " +new Intl.NumberFormat().format(max2dt_bet)+"<b>";
			}
			if (flag == true) {
				if (game.toString() == "4" || game.toString() == "3" || game.toString() == "2") {
					switch(flag_fulldiskon){
						case "FULL":
							diskon = 0
							diskonpercen = 0
							win = win2dtnodiskon_bet;
							break;
						case "BB":
							diskon = 0
							diskonpercen = 0
							win = win2dtbb_kena_bet;
							break;
						default:
							diskon = Math.ceil(betset_5 * disc2dt_bet);
							diskonpercen = disc2dt_bet;
							win = win2dt_bet;
							break;
					}
					
					bayar = parseInt(betset_5) - parseInt(Math.ceil(diskon));
					if (checkLimitLine("2DT") == true) {
						switch(game.toString()){
							case "4":
								nomor = nomorset[2]+nomorset[3];
								break;
							case "3":
								nomor = nomorset[1]+nomorset[2];
								break;
							case "2":
								nomor = nomorset[0]+nomorset[1];
								break;
						}
						totalkeranjang = bayar + totalkeranjang;
						bet = betset_5;
						addKeranjang(
							nomor,
							"2DT",
							bet,
							diskonpercen,
							diskon,
							bayar,
							win,
							0,
							0,flag_fulldiskon
						);
						flagfinish = true
					} else {
						msg_error = "Line 2DT sudah melebihi limit";
					}
				}
			}
		}
		if (parseInt(betset_6) > 0) {
			if (parseInt(betset_6) < parseInt(minimal_bet)) {
				betset_6 = minimal_bet;
				flag = false;
				msg_error += "Minimal Bet 3DD : " +new Intl.NumberFormat().format(minimal_bet)+"<br>";
			}
			if (parseInt(betset_6) > parseInt(max3dd_bet)) {
				betset_6 = max3dd_bet;
				flag = false;
				msg_error += "Maximal Bet 3DD : " +new Intl.NumberFormat().format(max3dd_bet)+"<br>";
			}
			if (flag == true) {
				if (game.toString() == "4" || game.toString() == "3") {
					switch(flag_fulldiskon){
						case "FULL":
							diskon = 0
							diskonpercen = 0
							win = win3ddnodiskon_bet;
							break;
						case "BB":
							diskon = 0
							diskonpercen = 0
							win = win3ddbb_kena_bet;
							break;
						default:
							diskon = Math.ceil(betset_6 * disc3d_bet);
							diskonpercen = disc3dd_bet;
							win = win3dd_bet;
							break;
					}
					bayar = parseInt(betset_6) - parseInt(Math.ceil(diskon));
					if (checkLimitLine("3DD") == true) {
						switch(game.toString()){
							case "4":
								nomor = nomorset[0]+nomorset[1]+nomorset[2];
								break;
							case "3":
								nomor = nomorset[0]+nomorset[1]+nomorset[2];
								break;
						}
						totalkeranjang = bayar + totalkeranjang;
						bet = betset_6;
						addKeranjang(
							nomor,
							"3DD",
							bet,
							diskonpercen,
							diskon,
							bayar,
							win,
							0,
							0,flag_fulldiskon
						);
						flagfinish = true
					} else {
						msg_error = "Line 3DD sudah melebihi limit";
					}
				}
			}
		}
		if(msg_error != ""){
			isModalAlert = true
		}
		if(flagfinish){
			clearField();
		}
	}
  function formbbfs_add() {
		generate4D = [];
		generate3D = [];
		generate3DD = [];
		generate2D = [];
		generate2DD = [];
		generate2DT = [];
		data_bbfs = [];
		nol = 0;
		satu = 0;
		dua = 0;
		tiga = 0;
		empat = 0;
		lima = 0;
		enam = 0;
		tujuh = 0;
		delapan = 0;
		sembilan = 0;
		let found = false;
		let flag = true;
		let bet = 0;
		let game = nomorbbfs.length;
		let nmgame = "";
		let nomor = "";
		let code_alert = 0;
		let note_alert = "";
		let diskon = 0;
		let diskonpercen = 0;
		let win = 0;
		let kei = 0;
		let kei_percen = 0;
		let bayar = 0;
    msg_error = ""
		data_bbfs = [];
		if (nomorbbfs == "") {
			nomorbbfs_input.focus();
			flag = false;
			msg_error += "Nomor Tidak Boleh Kosong<br>";
		}
		if (nomorbbfs.length < 2 || nomorbbfs.length > bbfs) {
			flag = false;
			nomorbbfs_input.focus();
			msg_error += "Nomor 2 - " + bbfs + " Digit<br>";
		} else {
			countangkabbfs(nomorbbfs);
		}
		if (parseInt(bet_1) > 0) {
			if (parseInt(bet_1) < parseInt(minimal_bet)) {
				bet_1 = minimal_bet;
				flag = false;
				msg_error += "Minimal Bet 4D : " + minimal_bet +"<br>";
			}
			if (parseInt(bet_1) > parseInt(max4d_bet)) {
				bet_1 = max4d_bet;
				flag = false;
				msg_error += "Maximal Bet 4D : " +new Intl.NumberFormat().format(max4d_bet) + "<br>";
			}
			if (flag == true) {
				switch(flag_fulldiskon){
					case "FULL":
						diskon = 0
						diskonpercen = 0
						win = win4dnodiskon_bet;
						break;
					case "BB":
						diskon = 0
						diskonpercen = 0
						win = win4dbb_kena_bet;
						break;
					default:
						diskon = Math.ceil(bet_1 * disc4d_bet);
						diskonpercen = disc4d_bet;
						win = win4d_bet;
						break;
				}
				bayar = parseInt(bet_1) - parseInt(Math.ceil(diskon));
				for (let a = 0; a < data_bbfs.length; a++) {
					for (let b = 0; b < data_bbfs.length; b++) {
						for (let c = 0; c < data_bbfs.length; c++) {
							for (let d = 0; d < data_bbfs.length; d++) {
								let dat =data_bbfs[a] +data_bbfs[b] +data_bbfs[c] +data_bbfs[d];
								if (generate4D.length > 0) {
									for (let x = 0;x < generate4D.length;x++) {
										if (dat == generate4D[x]) {
											found = true;
										}
									}
									if (found == false) {
										generate4D.push(dat);
									}
								} else {
									generate4D.push(dat);
								}
								found = false;
								dat = "";
							}
						}
					}
				}
				for (let x = 0; x < generate4D.length; x++) {
					if (checkcountangka(generate4D[x]) == true) {
						if (checkLimitLine("4D") == true) {
							nomor = generate4D[x];
							totalkeranjang = bayar + totalkeranjang;
							bet = bet_1;
							addKeranjang(
								nomor,
								"4D",
								bet,
								diskonpercen,
								diskon,
								bayar,
								win,
								0,
								0,flag_fulldiskon
							);
						} else {
							msg_error = "Line 4D sudah melebihi limit";
							break;
						}
					}
				}
			}
		}
		if (parseInt(bet_2) > 0) {
			if (parseInt(bet_2) < parseInt(minimal_bet)) {
				bet_2 = minimal_bet;
				flag = false;
				msg_error += "Minimal Bet 3D : " + minimal_bet + "<br>";
			}
			if (parseInt(bet_2) > parseInt(max3d_bet)) {
				bet_2 = max3d_bet;
				flag = false;
				msg_error += "Maximal Bet 3D : " +new Intl.NumberFormat().format(max3d_bet) + "<br>";
			}
			if (flag == true) {
				switch(flag_fulldiskon){
					case "FULL":
						diskon = 0
						diskonpercen = 0
						win = win3dnodiskon_bet;
						break;
					case "BB":
						diskon = 0
						diskonpercen = 0
						win = win3dbb_kena_bet;
						break;
					default:
						diskon = Math.ceil(bet_2 * disc3d_bet);
						diskonpercen = disc3d_bet;
						win = win3d_bet;
						break;
				}
				bayar = parseInt(bet_2) - parseInt(Math.ceil(diskon));
				for (let a = 0; a < data_bbfs.length; a++) {
					for (let b = 0; b < data_bbfs.length; b++) {
						for (let c = 0; c < data_bbfs.length; c++) {
							let dat =
								data_bbfs[a] + data_bbfs[b] + data_bbfs[c];
							if (generate3D.length > 0) {
								for (let x = 0; x < generate3D.length; x++) {
									if (dat == generate3D[x]) {
										found = true;
									}
								}
								if (found == false) {
									generate3D.push(dat);
								}
							} else {
								generate3D.push(dat);
							}
							found = false;
							dat = "";
						}
					}
				}
				for (let x = 0; x < generate3D.length; x++) {
					if (checkcountangka(generate3D[x]) == true) {
						if (checkLimitLine("3D") == true) {
							nomor = generate3D[x];
							totalkeranjang = bayar + totalkeranjang;
							bet = bet_2;
							addKeranjang(
								nomor,
								"3D",
								bet,
								diskonpercen,
								diskon,
								bayar,
								win,
								0,
								0,flag_fulldiskon
							);
						} else {
							msg_error = "Line 3D sudah melebihi limit";
							break;
						}
					}
				}
			}
		}
		if (parseInt(bet_3) > 0) {
			if (parseInt(bet_3) < parseInt(minimal_bet)) {
				bet_3 = minimal_bet;
				flag = false;
				msg_error += "Minimal Bet 2D : " + minimal_bet + "<br>";
			}
			if (parseInt(bet_3) > parseInt(max2d_bet)) {
				bet_3 = max2d_bet;
				flag = false;
				msg_error += "Maximal Bet 2D : " + new Intl.NumberFormat().format(max2d_bet) + "<br>";
			}
			if (flag == true) {
				switch(flag_fulldiskon){
					case "FULL":
						diskon = 0
						diskonpercen = 0
						win = win2dnodiskon_bet;
						break;
					case "BB":
						diskon = 0
						diskonpercen = 0
						win = win2dbb_kena_bet;
						break;
					default:
						diskon = Math.ceil(bet_3 * disc2d_bet);
						diskonpercen = disc2d_bet;
						win = win2d_bet;
						break;
				}
				bayar = parseInt(bet_3) - parseInt(Math.ceil(diskon));
				for (let a = 0; a < data_bbfs.length; a++) {
					for (let b = 0; b < data_bbfs.length; b++) {
						let dat = data_bbfs[a] + data_bbfs[b];
						if (generate2D.length > 0) {
							for (let x = 0; x < generate2D.length; x++) {
								if (dat == generate2D[x]) {
									found = true;
								}
							}
							if (found == false) {
								generate2D.push(dat);
							}
						} else {
							generate2D.push(dat);
						}
						found = false;
						dat = "";
					}
				}
				for (let x = 0; x < generate2D.length; x++) {
					if (checkcountangka(generate2D[x]) == true) {
						if (checkLimitLine("2D") == true) {
							nomor = generate2D[x];
							totalkeranjang = bayar + totalkeranjang;
							bet = bet_3;
							addKeranjang(
								nomor,
								"2D",
								bet,
								diskonpercen,
								diskon,
								bayar,
								win,
								0,
								0,flag_fulldiskon
							);
						} else {
							msg_error = "Line 2D sudah melebihi limit";
							break;
						}
					}
				}
			}
		}
		if (parseInt(bet_4) > 0) {
			if (parseInt(bet_4) < parseInt(minimal_bet)) {
				bet_4 = minimal_bet;
				flag = false;
				msg_error += "Minimal Bet 2DD : " + minimal_bet + "<br>";
			}
			if (parseInt(bet_4) > parseInt(max2dd_bet)) {
				bet_4 = max2dd_bet;
				flag = false;
				msg_error += "Maximal Bet 2DD : " +new Intl.NumberFormat().format(max2dd_bet) + "<br>";
			}
			if (flag == true) {
				switch(flag_fulldiskon){
					case "FULL":
						diskon = 0
						diskonpercen = 0
						win = win2ddnodiskon_bet;
						break;
					case "BB":
						diskon = 0
						diskonpercen = 0
						win = win2ddbb_kena_bet;
						break;
					default:
						diskon = Math.ceil(bet_4 * disc2dd_bet);
						diskonpercen = disc2dd_bet;
						win = win2dd_bet;
						break;
				}
				bayar = parseInt(bet_4) - parseInt(Math.ceil(diskon));
				for (let a = 0; a < data_bbfs.length; a++) {
					for (let b = 0; b < data_bbfs.length; b++) {
						let dat = data_bbfs[a] + data_bbfs[b];
						if (generate2DD.length > 0) {
							for (let x = 0; x < generate2DD.length; x++) {
								if (dat == generate2DD[x]) {
									found = true;
								}
							}
							if (found == false) {
								generate2DD.push(dat);
							}
						} else {
							generate2DD.push(dat);
						}
						found = false;
						dat = "";
					}
				}
				for (let x = 0; x < generate2DD.length; x++) {
					if (checkcountangka(generate2DD[x]) == true) {
						if (checkLimitLine("2DD") == true) {
							nomor = generate2DD[x];
							totalkeranjang = bayar + totalkeranjang;
							bet = bet_4;
							addKeranjang(
								nomor,
								"2DD",
								bet,
								diskonpercen,
								diskon,
								bayar,
								win,
								0,
								0,flag_fulldiskon
							);
						} else {
							msg_error = "Line 2DD sudah melebihi limit";
							break;
						}
					}
				}
			}
		}
		if (parseInt(bet_5) > 0) {
			if (parseInt(bet_5) < parseInt(minimal_bet)) {
				bet_5 = minimal_bet;
				flag = false;
				msg_error += "Minimal Bet 2DT : " + minimal_bet + "<br>";
			}
			if (parseInt(bet_5) > parseInt(max2dt_bet)) {
				bet_5 = max2dt_bet;
				flag = false;
				msg_error += "Maximal Bet 2DT : " +new Intl.NumberFormat().format(max2dt_bet) + "<br>";
			}
			if (flag == true) {
				switch(flag_fulldiskon){
					case "FULL":
						diskon = 0
						diskonpercen = 0
						win = win2dtnodiskon_bet;
						break;
					case "BB":
						diskon = 0
						diskonpercen = 0
						win = win2dtbb_kena_bet;
						break;
					default:
						diskon = Math.ceil(bet_5 * disc2dt_bet);
						diskonpercen = disc2dt_bet;
						win = win2dd_bet;
						break;
				}
				bayar = parseInt(bet_5) - parseInt(Math.ceil(diskon));
				for (let a = 0; a < data_bbfs.length; a++) {
					for (let b = 0; b < data_bbfs.length; b++) {
						let dat = data_bbfs[a] + data_bbfs[b];
						if (generate2DT.length > 0) {
							for (let x = 0; x < generate2DT.length; x++) {
								if (dat == generate2DT[x]) {
									found = true;
								}
							}
							if (found == false) {
								generate2DT.push(dat);
							}
						} else {
							generate2DT.push(dat);
						}
						found = false;
						dat = "";
					}
				}
				for (let x = 0; x < generate2DT.length; x++) {
					if (checkcountangka(generate2DT[x]) == true) {
						if (checkLimitLine("2DT") == true) {
							nomor = generate2DT[x];
							totalkeranjang = bayar + totalkeranjang;
							bet = bet_5;
							addKeranjang(
								nomor,
								"2DT",
								bet,
								diskonpercen,
								diskon,
								bayar,
								win,
								0,
								0,flag_fulldiskon
							);
						} else {
							msg_error = "Line 2DT sudah melebihi limit";
							break;
						}
					}
				}
			}
		}
		if (parseInt(bet_6) > 0) {
			if (parseInt(bet_6) < parseInt(minimal_bet)) {
				bet_6 = minimal_bet;
				flag = false;
				msg_error += "Minimal Bet 3DD : " + minimal_bet + "<br>";
			}
			if (parseInt(bet_6) > parseInt(max3dd_bet)) {
				bet_6 = max3dd_bet;
				flag = false;
				msg_error += "Maximal Bet 3DD : " +new Intl.NumberFormat().format(max3dd_bet) + "<br>";
			}
			if (flag == true) {
				switch(flag_fulldiskon){
					case "FULL":
						diskon = 0
						diskonpercen = 0
						win = win3ddnodiskon_bet;
						break;
					case "BB":
						diskon = 0
						diskonpercen = 0
						win = win3ddbb_kena_bet;
						break;
					default:
						diskon = Math.ceil(bet_6 * disc3dd_bet);
						diskonpercen = disc3dd_bet;
						win = win3dd_bet;
						break;
				}
				bayar = parseInt(bet_6) - parseInt(Math.ceil(diskon));
				for (let a = 0; a < data_bbfs.length; a++) {
					for (let b = 0; b < data_bbfs.length; b++) {
						for (let c = 0; c < data_bbfs.length; c++) {
							let dat = data_bbfs[a] + data_bbfs[b] + data_bbfs[c];
							if (generate3DD.length > 0) {
								for (let x = 0; x < generate3DD.length; x++) {
									if (dat == generate3DD[x]) {
										found = true;
									}
								}
								if (found == false) {
									generate3DD.push(dat);
								}
							} else {
								generate3DD.push(dat);
							}
							found = false;
							dat = "";
						}
					}
				}
				for (let x = 0; x < generate3DD.length; x++) {
					if (checkcountangka(generate3DD[x]) == true) {
						if (checkLimitLine("3DD") == true) {
							nomor = generate3DD[x];
							totalkeranjang = bayar + totalkeranjang;
							bet = bet_6;
							addKeranjang(
								nomor,
								"3DD",
								bet,
								diskonpercen,
								diskon,
								bayar,
								win,
								0,
								0,flag_fulldiskon
							);
						} else {
							msg_error = "Line 3DD sudah melebihi limit";
							break;
						}
					}
				}
			}
		}
		clearField();
	}
  function formwap_add() {
		let pemisah = nomorwap.split(",");
		let res_money = nomorwap.split("#");
		let totalpemisah = pemisah.length;
		let totalres_money = res_money.length;
		let flag_checkdata = true;
    msg_error = "";
		for (let i = 0; i < nomorwap.length; i++) {
			let numbera = parseInt(nomorwap[i]);
			if (isNaN(numbera)) {
				if (nomorwap[i] != "*" && nomorwap[i] != "#" && nomorwap[i] != ",") {
					clearField();
					flag_checkdata = false;
				}
			}
		}
		if (flag_checkdata == false) {
			msg_error += "Format Salah, hanya boleh karakter angka * # ,<br>";
		} else {
			if (totalpemisah < 2) {
				//jika tidak ada pemisah
				if (totalres_money < 2) {
					msg_error += "Format Salah" + "<br>";
				} else {
					checkbulkdata(nomorwap);
				}
			} else {
				for (var i = 0; i < totalpemisah; i++) {
					checkbulkdata(pemisah[i]);
				}
			}
		}
		if (msg_error != "") {
			isModalAlert = true;
		}
	}
  function formpolatarung_add() {
		let flag = true;
		let nomoras_game = nomoras.length;
		let nomorkop_game = nomorkop.length;
		let nomorkepala_game = nomorkepala.length;
		let nomorekor_game = nomorekor.length;
		let pola = ""
		let count = 0
		let diskon = 0;
		let diskonpercen = 0;
		let win = 0;
		let bayar = 0;
		let msg = "";
    msg_error = "";
		if (nomoras == "") {
			nomoras_input.focus();
			flag = false;
			pola += "-"
		}else{
			pola += "1"
		}
		if (nomorkop == "") {
			nomorkop_input.focus();
			flag = false;
			pola += "-"
		}else{
			pola += "1"
		}
		if (nomorkepala != "") {
			pola += "1"
		}else{
			pola += "-"
		}
		if (nomorekor != "") {
			pola += "1"
		}else{
			pola += "-"
		}
		if(bet_tarung == ""){
			bet_tarung_input.focus();
			msg += "Bet Wajib diisi"
			flag = false;
		}
		if (parseInt(bet_tarung) < parseInt(minimal_bet)) {
			bet_tarung = minimal_bet;
			flag = false;
			msg_error += "Minimal Bet : " + minimal_bet + "<br>";
		}
		if (flag) {
			let nomor = ""
			switch(pola){
				case "11--":
					for(let i=0;i<nomoras_game;i++){
						for(let j=0;j<nomorkop_game;j++){
							if (checkLimitLine("2D") == true) {
								nomor = nomoras[i] + nomorkop[j]
								count = count + 1
								switch(flag_fulldiskon){
									case "FULL":
										diskon = 0
										diskonpercen = 0
										win = win2dnodiskon_bet;
										break;
									case "BB":
										diskon = 0
										diskonpercen = 0
										win = win2dbb_kena_bet;
										break;
									default:
										diskon = bet_tarung * disc2d_bet;
										diskonpercen = disc2d_bet;
										win = win2d_bet;
										break;
								}
								
								bayar = parseInt(bet_tarung) - parseInt(Math.ceil(diskon));
								totalkeranjang = bayar + totalkeranjang;
								addKeranjang(
									nomor,
									"2D",
									bet_tarung,
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
					clearField();
				  break;
				case "111-":
					for(let i=0;i<nomoras_game;i++){
						for(let j=0;j<nomorkop_game;j++){
							for(let x=0;x<nomorkepala_game;x++){
								if (checkLimitLine("3D") == true) {
									nomor = nomoras[i]+nomorkop[j]+nomorkepala[x]
									count = count + 1
									switch(flag_fulldiskon){
										case "FULL":
											diskon = 0
											diskonpercen = 0
											win = win3dnodiskon_bet;
											break;
										case "BB":
											diskon = 0
											diskonpercen = 0
											win = win3dbb_kena_bet;
											break;
										default:
											diskon = bet_tarung * disc3d_bet;
											diskonpercen = disc3d_bet;
											win = win3d_bet;
											break;
									}
									
									bayar = parseInt(bet_tarung) - parseInt(Math.ceil(diskon));
									totalkeranjang = bayar + totalkeranjang;
									addKeranjang(
										nomor,
										"3D",
										bet_tarung,
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
					}
					clearField();
				  break;
				case "1111":
					for(let i=0;i<nomoras_game;i++){
						for(let j=0;j<nomorkop_game;j++){
							for(let x=0;x<nomorkepala_game;x++){
								for(let y=0;y<nomorekor_game;y++){
									if (checkLimitLine("4D") == true) {
										nomor = nomoras[i]+nomorkop[j]+nomorkepala[x]+nomorekor[y]
										count = count + 1
										switch(flag_fulldiskon){
											case "FULL":
												diskon = 0
												diskonpercen = 0
												win = win4dnodiskon_bet;
												break;
											case "BB":
												diskon = 0
												diskonpercen = 0
												win = win4dbb_kena_bet;
												break;
											default:
												diskon = bet_tarung * disc4d_bet;
												diskonpercen = disc4d_bet;
												win = win4d_bet;
												break;
										}
										
										bayar = parseInt(bet_tarung) - parseInt(Math.ceil(diskon));
										totalkeranjang = bayar + totalkeranjang;
										addKeranjang(
											nomor,
											"4D",
											bet_tarung,
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
						}
					}
					clearField();
					break;
				default:
          msg_error = "Format Pola Tarung Salah"
				break;
			}
		}
		if(msg_error != ""){
			isModalAlert = true;
			clearField();
		}
	}
  function formquick2d_add() {
		let flag = true;
		let diskon = 0;
		let diskonpercen = 0;
		let bet = 0;
		let win = 0;
		let kei = 0;
		let kei_percen = 0;
		let bayar = 0;
		let nmgame = "";
		let data_temp = [];
		let data_quick = [];
		msg_error = "";
		if (quick_pilihan1 == "") {
			quick_pilihan1_input.focus();
			flag = false;
			msg_error += "Besar/Kecil/Genap/Ganjil tidak boleh kosong<br>";
		}
		if (quick_pilihan2 == "") {
			quick_pilihan2_input.focus();
			flag = false;
			msg_error += "2D/2D Depan/2D Tengah tidak boleh kosong<br>";
		}
		if (quick_bet == "") {
			quick_bet_input.focus();
			flag = false;
			msg_error += "Bet tidak boleh kosong<br>";
		}
		if (parseInt(quick_bet) < parseInt(minimal_bet)) {
			quick_bet = minimal_bet;
			flag = false;
			msg_error += "Minimal Bet : " + minimal_bet + "<br>";
		}
		if (quick_pilihan2 != "") {
			switch (quick_pilihan2) {
				case "2D":
					if (parseInt(quick_bet) > parseInt(max2d_bet)) {
						quick_bet = minimal_bet;
						flag = false;
						msg_error += "Maximal Bet 2D  : " + max2d_bet + "<br>";
					}
					break;
				case "2DD":
					if (parseInt(quick_bet) > parseInt(max2dd_bet)) {
						quick_bet = minimal_bet;
						flag = false;
						msg_error += "Maximal Bet 2D Depan : " + max2dd_bet + "<br>";
					}
					break;
				case "2DT":
					if (parseInt(quick_bet) > parseInt(max2dt_bet)) {
						quick_bet = minimal_bet;
						flag = false;
						msg_error += "Maximal Bet 2D Tengah : " + max2dt_bet + "<br>";
					}
					break;
			}
		}
		if (flag == true) {
			for (let x = 0; x < 10; x++) {
				for (let y = 0; y < 10; y++) {
					data_temp.push(x.toString() + y.toString());
				}
			}
			if (data_temp.length > 0) {
				switch (quick_pilihan1) {
					case "BESAR":
						for (let i = 0; i <= data_temp.length; i++) {
							if (parseInt(data_temp[i]) > 49) {
								data_quick.push(data_temp[i]);
							}
						}
						break;
					case "KECIL":
						for (let i = 0; i <= data_temp.length; i++) {
							if (parseInt(data_temp[i]) < 50) {
								data_quick.push(data_temp[i]);
							}
						}
						break;
					case "GANJIL":
						for (let i = 0; i < data_temp.length; i++) {
							if (parseInt(data_temp[i]) % 2 !== 0) {
								data_quick.push(data_temp[i]);
							}
						}
						break;
					case "GENAP":
						for (let i = 0; i < data_temp.length; i++) {
							if (parseInt(data_temp[i]) % 2 == 0) {
								data_quick.push(data_temp[i]);
							}
						}
						break;
				}
			}
			if (data_quick.length > 0) {
				switch (quick_pilihan2) {
					case "2D":
						bet = quick_bet;
						nmgame = "2D";
						switch(flag_fulldiskon){
							case "FULL":
								diskon = 0
								diskonpercen = 0
								win = win2dnodiskon_bet;
								break;
							case "BB":
								diskon = 0
								diskonpercen = 0
								win = win2dbb_kena_bet;
								break;
							default:
								diskon = quick_bet * disc2d_bet;
								diskonpercen = disc2d_bet;
								win = win2d_bet;
								break;
						}
						
						bayar = parseInt(quick_bet) - parseInt(Math.ceil(diskon));
						for (let i = 0; i < data_quick.length; i++) {
							if (checkLimitLine("2D") == false) {
								msg_error = "Line 2D sudah melebihi limit";
								break;
							} else {
								totalkeranjang = bayar + totalkeranjang;
								addKeranjang(
									data_quick[i],
									nmgame,
									bet,
									diskonpercen,
									diskon,
									bayar,
									win,
									0,
									0,flag_fulldiskon
								);
							}
						}
						break;
					case "2DD":
						bet = quick_bet;
						nmgame = "2DD";
						switch(flag_fulldiskon){
							case "FULL":
								diskon = 0
								diskonpercen = 0
								win = win2ddnodiskon_bet;
								break;
							case "BB":
								diskon = 0
								diskonpercen = 0
								win = win2ddbb_kena_bet;
								break;
							default:
								diskon = quick_bet * disc2dd_bet;
								diskonpercen = disc2dd_bet;
								win = win2dd_bet;
								break;
						}
						
						bayar = parseInt(quick_bet) - parseInt(Math.ceil(diskon));
						for (let i = 0; i < data_quick.length; i++) {
							if (checkLimitLine("2DD") == false) {
								msg_error = "Line 2DD sudah melebihi limit";
								break;
							} else {
								totalkeranjang = bayar + totalkeranjang;
								const data = {
									id: Math.floor(Math.random() * 5000) + 3,
									nomor: data_quick[i],
									permainan: nmgame,
									bet,
									diskon,
									diskonpercen,
									bayar,
									win,
									kei,
									kei_percen,
								};
								addKeranjang(
									data_quick[i],
									nmgame,
									bet,
									diskonpercen,
									diskon,
									bayar,
									win,
									0,
									0,flag_fulldiskon
								);
							}
						}
						break;
					case "2DT":
						bet = quick_bet;
						nmgame = "2DT";
						switch(flag_fulldiskon){
							case "FULL":
								diskon = 0
								diskonpercen = 0
								win = win2dtnodiskon_bet;
								break;
							case "BB":
								diskon = 0
								diskonpercen = 0
								win = win2dtbb_kena_bet;
								break;
							default:
								diskon = quick_bet * disc2dt_bet;
								diskonpercen = disc2dt_bet;
								win = win2dt_bet;
								break;
						}
						
						bayar = parseInt(quick_bet) - parseInt(Math.ceil(diskon));
						for (let i = 0; i < data_quick.length; i++) {
							if (checkLimitLine("2DT") == false) {
								msg_error = "Line 2DT sudah melebihi limit";
								break;
							} else {
								totalkeranjang = bayar + totalkeranjang;
								addKeranjang(
									data_quick[i],
									nmgame,
									bet,
									diskonpercen,
									diskon,
									bayar,
									win,
									0,
									0,flag_fulldiskon
								);
							}
						}
						break;
				}
        if (msg_error != "") {
          isModalAlert = true;
        }
				clearField();
			}
		}
	}
  function form3dd_add() {
		let flag = true;
		let game = nomor3dd.length;
		let bet = 0;
		let diskon = 0;
		let diskonpercen = 0;
		let win = 0;
		let bayar = 0;
		let nomor = "";
		let nmgame = "";
		msg_error = ""
		if (nomor3dd == "") {
			nomor3dd_input.focus();
			flag = false;
      msg_error += "Nomor tidak boleh kosong <br>";
		}
		if (bet_3dd == "") {
			flag = false;
			msg_error += "Bet tidak boleh kosong <br>";
		}
		if (parseInt(bet_3dd) < parseInt(minimal_bet)) {
			bet_3dd = minimal_bet;
			flag = false;
			msg_error += "Minimal Bet : " + minimal_bet;
		}
		if (game.toString() == "3") {
			if (parseInt(bet_3dd) > parseInt(max3dd_bet)) {
				bet_3dd = minimal_bet;
				flag = false;
				msg_error += "Maximal Bet 3D Depan : " + max3dd_bet + "<br>";
			}
			if (checkLimitLine("3DD") == false) {
				flag = false;
				msg_error += "Maximal Line 3D Depan : " + limitline_3dd + "<br>";
			}
		}else{
			flag = false;
			msg_error += "Minimal 3 Digit<br>";
		}
		for (var i = 0; i < nomor3dd.length; i++) {
			let numbera = parseInt(nomor3dd[i]);
			if (isNaN(numbera)) {
				flag = false;
				msg_error +="Nomor harus angka <br>";
			}
		}
		
		if (flag == true) {
			nmgame = "3DD";
			switch(flag_fulldiskon){
				case "FULL":
					diskon = 0
					diskonpercen = 0
					win = win3ddnodiskon_bet;
					break;
				case "BB":
					diskon = 0
					diskonpercen = 0
					win = win3ddbb_kena_bet;
					break;
				default:
					diskon = bet_3dd * disc3dd_bet;
					diskonpercen = disc3dd_bet;
					win = win3dd_bet;
					break;
			}
			
			nomor = nomor3dd;
			bet = bet_3dd;
			bayar = parseInt(bet_3dd) - parseInt(Math.ceil(diskon));
			totalkeranjang = bayar + totalkeranjang;
			addKeranjang(
				nomor,
				nmgame,
				bet,
				diskonpercen,
				diskon,
				bayar,
				win,
				0,
				0,flag_fulldiskon
			);
			clearField();
		}
		if(msg_error != ""){
			isModalAlert = true;
		}
	}
  function form2dd_add() {
		let flag = true;
		let game = nomor2dd.length;
		let bet = 0;
		let diskon = 0;
		let diskonpercen = 0;
		let win = 0;
		let kei = 0;
		let kei_percen = 0;
		let bayar = 0;
		let nmgame = "";
		let nomor = "";
	  msg_error = "";
		if (nomor2dd == "") {
			nomor2dd_input.focus();
			flag = false;
		}
		if (bet_2dd == "") {
			flag = false;
			msg_error += "Bet tidak boleh kosong<br>";
		}
		if (parseInt(bet_2dd) < parseInt(minimal_bet)) {
			bet_2dd = minimal_bet;
			flag = false;
			msg_error += "Minimal Bet : " + minimal_bet + "<br>";
		}
		if (game.toString() == "2") {
			if (parseInt(bet_2dd) > parseInt(max2dd_bet)) {
				bet_2dd = minimal_bet;
				flag = false;
        msg_error += "Maximal Bet 2D Depan : " + max2dd_bet + "<br>";
			}
			if (checkLimitLine("2DD") == false) {
				flag = false;
        msg_error += "Maximal Line 2D Depan : " + limitline_2dd + "<br>";
			}
		}else{
			flag = false;
      msg_error += "Minimal 2 Digit<br>";
		}
		for (var i = 0; i < nomor2dd.length; i++) {
			let numbera = parseInt(nomor2dd[i]);
			if (isNaN(numbera)) {
				flag = false;
				msg_error += "ERROR<br>";
			}
		}
		if (flag == true) {
			nmgame = "2DD";
			switch(flag_fulldiskon){
				case "FULL":
					diskon = 0
					diskonpercen = 0
					win = win2ddnodiskon_bet;
					break;
				case "BB":
					diskon = 0
					diskonpercen = 0
					win = win2ddbb_kena_bet;
					break;
				default:
					diskon = bet_2dd * disc2dd_bet;
					diskonpercen = disc2dd_bet;
					win = win2dd_bet;
					break;
			}
			
			nomor = nomor2dd;
			bet = bet_2dd;
			bayar = parseInt(bet_2dd) - parseInt(Math.ceil(diskon));
			totalkeranjang = bayar + totalkeranjang;
			addKeranjang(
				nomor,
				nmgame,
				bet,
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
		}
	}
	function form2dt_add() {
		let flag = true;
		let game = nomor2dt.length;
		let bet = 0;
		let diskon = 0;
		let diskonpercen = 0;
		let win = 0;
		let kei = 0;
		let kei_percen = 0;
		let bayar = 0;
		let nmgame = "";
		let nomor = "";
    msg_error = "";
		if (nomor2dt == "") {
			nomor2dt_input.focus();
			flag = false;
		}
		if (bet_2dt == "") {
			flag = false;
			msg_error += "Bet tidak boleh kosong<br>";
		}
		if (parseInt(bet_2dt) < parseInt(minimal_bet)) {
			bet_2dt = minimal_bet;
			flag = false;
			msg_error += "Minimal Bet : " + minimal_bet + "<br>";
		}
		if (game.toString() == "2") {
			if (parseInt(bet_2dt) > parseInt(max2dt_bet)) {
				bet_2dt = minimal_bet;
				flag = false;
        msg_error += "Maximal Bet 2D Tengah : " + max2dt_bet + "<br>";
			}
			if (checkLimitLine("2DT") == false) {
				flag = false;
        msg_error += "Maximal Line 2T Tengah : " + limitline_2dd + "<br>";
			}
		}else{
			flag = false;
      msg_error += "Minimal 2 Digit<br>";
		}
		for (var i = 0; i < nomor2dt.length; i++) {
			let numbera = parseInt(nomor2dt[i]);
			if (isNaN(numbera)) {
				flag = false;
				msg_error += "Error";
			}
		}
		if (flag == true) {
			nmgame = "2DT";
			switch(flag_fulldiskon){
				case "FULL":
					diskon = 0
					diskonpercen = 0
					win = win2dtnodiskon_bet;
					break;
				case "BB":
					diskon = 0
					diskonpercen = 0
					win = win2dtbb_kena_bet;
					break;
				default:
					diskon = bet_2dt * disc2dt_bet;
					diskonpercen = disc2dt_bet;
					win = win2dt_bet;
					break;
			}
			
			nomor = nomor2dt;
			bet = bet_2dt;
			bayar = parseInt(bet_2dt) - parseInt(Math.ceil(diskon));
			totalkeranjang = bayar + totalkeranjang;
			addKeranjang(
				nomor,
				nmgame,
				bet,
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
		}
	}
  inittogel_432d("4-3-2");
  limittogel("4-3-2");
  const handleKeyboard_format = (e) => {
    let numbera;
		for (let i = 0; i < nomor_432.length; i++) {
			numbera = parseInt(nomor_432[i]);
			if (isNaN(numbera)) {
				if (nomor_432[i] != "*") {
					nomor_432 = "";
				}
			}
		}
    for (let i = 0; i < nomor3dd.length; i++) {
			numbera = parseInt(nomor3dd[i]);
			if (isNaN(numbera)) {
				nomor3dd = "";
			}
		}
		for (let i = 0; i < nomor2dd.length; i++) {
			numbera = parseInt(nomor2dd[i]);
			if (isNaN(numbera)) {
				nomor2dd = "";
			}
		}
		for (let i = 0; i < nomor2dt.length; i++) {
			numbera = parseInt(nomor2dt[i]);
			if (isNaN(numbera)) {
				nomor2dt = "";
			}
		}
		for (let i = 0; i < nomorbbfs.length; i++) {
			numbera = parseInt(nomorbbfs[i]);
			if (isNaN(nomorbbfs)) {
				nomorbbfs = "";
			}
		}
		for (let i = 0; i < nomorset.length; i++) {
			numbera = parseInt(nomorset[i]);
			if (isNaN(nomorset)) {
				nomorset = "";
			}
		}
  }
  const handleKeyboard_number = (e) => {
    let numbera;
		for (let i = 0; i < bet_432.length; i++) {
			numbera = parseInt(bet_432[i]);
			if (isNaN(numbera)) {
				bet_432 = "";
			}
		}
    for (let i = 0; i < bet_3dd.length; i++) {
			numbera = parseInt(bet_3dd[i]);
			if (isNaN(numbera)) {
				bet_3dd = "";
			}
		}
		for (let i = 0; i < betset_1.length; i++) {
			numbera = parseInt(betset_1[i]);
			if (isNaN(numbera)) {
				betset_1 = "";
			}
		}
		for (let i = 0; i < betset_2.length; i++) {
			numbera = parseInt(betset_2[i]);
			if (isNaN(numbera)) {
				betset_2 = "";
			}
		}
		for (let i = 0; i < betset_3.length; i++) {
			numbera = parseInt(betset_3[i]);
			if (isNaN(numbera)) {
				betset_3 = "";
			}
		}
		for (let i = 0; i < betset_4.length; i++) {
			numbera = parseInt(betset_4[i]);
			if (isNaN(numbera)) {
				betset_4 = "";
			}
		}
		for (let i = 0; i < betset_5.length; i++) {
			numbera = parseInt(betset_5[i]);
			if (isNaN(numbera)) {
				betset_5 = "";
			}
		}
		for (let i = 0; i < betset_6.length; i++) {
			numbera = parseInt(betset_6[i]);
			if (isNaN(numbera)) {
				betset_6 = "";
			}
		}
		for (let i = 0; i < bet_1.length; i++) {
			numbera = parseInt(bet_1[i]);
			if (isNaN(numbera)) {
				bet_1 = "";
			}
		}
		for (let i = 0; i < bet_2.length; i++) {
			numbera = parseInt(bet_2[i]);
			if (isNaN(numbera)) {
				bet_2 = "";
			}
		}
		for (let i = 0; i < bet_3.length; i++) {
			numbera = parseInt(bet_3[i]);
			if (isNaN(numbera)) {
				bet_3 = "";
			}
		}
		for (let i = 0; i < bet_4.length; i++) {
			numbera = parseInt(bet_4[i]);
			if (isNaN(numbera)) {
				bet_4 = "";
			}
		}
		for (let i = 0; i < bet_5.length; i++) {
			numbera = parseInt(bet_5[i]);
			if (isNaN(numbera)) {
				bet_5 = "";
			}
		}
		for (let i = 0; i < bet_2dd.length; i++) {
			numbera = parseInt(bet_2dd[i]);
			if (isNaN(numbera)) {
				bet_2dd = "";
			}
		}
		for (let i = 0; i < bet_2dt.length; i++) {
			numbera = parseInt(bet_2dt[i]);
			if (isNaN(numbera)) {
				bet_2dt = "";
			}
		}
		for (let i = 0; i < nomorbbfs.length; i++) {
			numbera = parseInt(nomorbbfs[i]);
			if (isNaN(numbera)) {
				nomorbbfs = "";
			}
		}
		for (let i = 0; i < nomor2dd.length; i++) {
			numbera = parseInt(nomor2dd[i]);
			if (isNaN(numbera)) {
				nomor2dd = "";
			}
		}
		for (let i = 0; i < nomor2dt.length; i++) {
			numbera = parseInt(nomor2dt[i]);
			if (isNaN(numbera)) {
				nomor2dt = "";
			}
		}
		for (let i = 0; i < quick_bet.length; i++) {
			numbera = parseInt(quick_bet[i]);
			if (isNaN(numbera)) {
				quick_bet = "";
			}
		}
		for (let i = 0; i < nomoras.length; i++) {
			numbera = parseInt(nomoras[i]);
			if (isNaN(nomoras)) {
				nomoras = "";
			}
		}
		for (let i = 0; i < nomorkop.length; i++) {
			numbera = parseInt(nomorkop[i]);
			if (isNaN(nomorkop)) {
				nomorkop = "";
			}
		}
		for (let i = 0; i < nomorkepala.length; i++) {
			numbera = parseInt(nomorkepala[i]);
			if (isNaN(nomorkepala)) {
				nomorkepala = "";
			}
		}
		for (let i = 0; i < nomorekor.length; i++) {
			numbera = parseInt(nomorekor[i]);
			if (isNaN(nomorekor)) {
				nomorekor = "";
			}
		}
		for (let i = 0; i < bet_tarung.length; i++) {
			numbera = parseInt(bet_tarung[i]);
			if (isNaN(bet_tarung)) {
				bet_tarung = "";
			}
		}
  }
  const handleKeyboard_checkenter = (e) => {
		let keyCode = e.which || e.keyCode;
		if (keyCode === 13) {
			handleTambah("pilihan","4-3-2")
		}
	};
  const handleKeyboard432set_checkenter = (e) => {
		let keyCode = e.which || e.keyCode;
		if (keyCode === 13) {
			handleTambah("pilihan","432SET")
		}
	};
  const handleKeyboardbbfs_checkenter = (e) => {
		let keyCode = e.which || e.keyCode;
		if (keyCode === 13) {
			handleTambah("pilihan","BBFS")
		}
	};
  const handleKeyboardpolatarung_checkenter = (e) => {
		let keyCode = e.which || e.keyCode;
		if (keyCode === 13) {
			handleTambah("pilihan","polatarung")
		}
	};
  const handleKeyboardquick2d_checkenter = (e) => {
		let keyCode = e.which || e.keyCode;
		if (keyCode === 13) {
			handleTambah("pilihan","quick2D")
		}
	};
  const handleKeyboard3dd_checkenter = (e) => {
		let keyCode = e.which || e.keyCode;
		if (keyCode === 13) {
			handleTambah("pilihan","3DD")
		}
	};
	const handleKeyboard2dd_checkenter = (e) => {
		let keyCode = e.which || e.keyCode;
		if (keyCode === 13) {
			handleTambah("pilihan","2DD")
		}
	};
	const handleKeyboard2dt_checkenter = (e) => {
		let keyCode = e.which || e.keyCode;
		if (keyCode === 13) {
			handleTambah("pilihan","2DT")
		}
	};
  const clearField = () => {
    nomor_432 = "";
    bet_432 = "";
    nomorset = "";
    betset_1 = "";
    betset_2 = "";
    betset_3 = "";
    betset_4 = "";
    betset_5 = "";
    betset_6 = "";
    nomorbbfs = "";
    bet_1 = "";
    bet_2 = "";
    bet_3 = "";
    bet_4 = "";
    bet_5 = "";
    bet_6 = "";
    nomorwap = "";
    nomoras = "";
    nomorkop = "";
    nomorkepala = "";
    nomorekor = "";
    bet_tarung = "";
    quick_pilihan1;
    quick_pilihan2;
    quick_bet = "";
    nomor3dd = "";
    bet_3dd = "";
    nomor2dd = "";
    bet_2dd = "";
    nomor2dt = "";
    bet_2dt = "";
    isModalAlert = false
  }
</script>
<div class="card bg-base-200 shadow-xl rounded-md {card_custom}">
  <div class="card-body p-3">
      {#if client_device == "WEBSITE"}
        <h2 class="card-title text-lg grid grid-cols-2 gap-2">
            <div class="place-content-start text-left">
                {pasaran_name} - {permainan_title}
            </div>
            <div class="place-content-end text-right">PERIODE : #{pasaran_periode} - {pasaran_code}</div>
        </h2>
        <div class="mt-6 md:flex md:items-center md:justify-between md:space-x-8">
          <div class="flex items-center space-x-2 overflow-y-auto md:max-w-lg xl:max-w-5xl 2xl:max-w-7xl lg:max-w-3xl whitespace-nowrap">
            <span
                on:click={() => {
                  changeTabs("432");
                }} 
                class="{class_tab_432} px-3 py-1.5 cursor-pointer  ">4D/3D/2D</span> 
            <span
              on:click={() => {
                changeTabs("432SET");
              }}
              class="{class_tab_432set} px-3 py-1.5 cursor-pointer ">4D/3D/2D SET</span> 
            <span
              on:click={() => {
                changeTabs("432BOLAKBALIK");
              }}
              class="{class_tab_432bolakbalik} px-3 cursor-pointer  ">BOLAK BALIK</span> 
            <span 
              on:click={() => {
                changeTabs("432WAP");
              }}
              class="{class_tab_432wap} px-3 py-1.5 cursor-pointer ">WAP</span> 
            <span 
              on:click={() => {
                changeTabs("432POLATARUNG");
              }}
              class="{class_tab_432polatarung} px-3 py-1.5 cursor-pointer ">POLA TARUNG</span> 
            <span 
              on:click={() => {
                changeTabs("432QUICK2D");
              }}
              class="{class_tab_432quick2d} px-3 py-1.5 cursor-pointer ">QUICK 2D</span>
            <span 
              on:click={() => {
                changeTabs("4323DD");
              }}
              class="{class_tab_4323DD} px-3 py-1.5 cursor-pointer ">3DD /3D DEPAN</span>
            <span 
              on:click={() => {
                changeTabs("4322DD");
              }}
              class="{class_tab_4322DD} px-3 py-1.5 cursor-pointer ">2DD /2D DEPAN</span>
            <span 
              on:click={() => {
                changeTabs("4322DT");
              }}
              class="{class_tab_4322DT} px-3 py-1.5 cursor-pointer ">2DT /2D TENGAH</span>
          </div>
        </div>
        
        {#if panel_form_432}
          <div class="mt-1 gap-2 grid grid-cols-3">
              <div class="form-control">
                  <label class="label">
                      <span class="label-text">Nomor (2-4)</span>
                  </label>
                  <input
                    autofocus
                    bind:this={nomor_432_input}
                    bind:value={nomor_432}
                    on:keyup={handleKeyboard_format}
                    on:keypress={handleKeyboard_checkenter} 
                    minlength="4"
                    maxlength="4"
                    type="text" 
                    placeholder="Input 4D/3D/2D Digit" 
                    class="input border-none text-center text-3xl placeholder:text-sm"> 
              </div>
              <div class="form-control">
                  <label class="label">
                      <span class="label-text">&nbsp;</span>
                      <span class="label-text-alt">Bet (min : {new Intl.NumberFormat().format(minimal_bet)})</span>
                  </label>
                  <input
                    bind:value={bet_432}
                    on:keyup={handleKeyboard_number}
                    on:keypress={handleKeyboard_checkenter} 
                    minlength="3"
                    maxlength="7"
                    type="text" placeholder="Bet" 
                    class="input border-none text-right text-3xl placeholder:text-sm">
                  <label class="label">
                      <span class="label-text">&nbsp;</span>
                      <span class="label-text-alt">{new Intl.NumberFormat().format(bet_432)}</span>
                  </label>
              </div>
              <div class="form-control mt-9">
                  <Button_custom1 
                    on:click={() => {
                      handleTambah("pilihan","4-3-2");
                    }} 
                  button_tipe=""
                  button_title="Tambah" />
              </div>
          </div>
        {/if}
        {#if panel_form_432set}
          <div class="mt-1 gap-2 grid grid-cols-4">
              <div class="form-control">
                  <label class="label">
                      <span class="label-text">Nomor (2-4)</span>
                  </label>
                  <input
                    bind:this={nomorset_input}
                    bind:value={nomorset}
                    on:keyup={handleKeyboard_format}
                    on:keypress={handleKeyboard432set_checkenter} 
                    minlength="4"
                    maxlength="4"
                    type="text" placeholder="Input 4D/3D/2D Digit" 
                    class="input border-none text-center text-3xl placeholder:text-sm"> 
              </div>
              <div class="form-control">
                  <label class="label">
                      <span class="label-text">&nbsp;</span>
                      <span class="label-text-alt">4D Bet (min : {new Intl.NumberFormat().format(minimal_bet)})</span>
                  </label>
                  <input 
                    bind:value={betset_1}
                    on:keyup={handleKeyboard_number}
                    on:keypress={handleKeyboard432set_checkenter}
                    minlength="3"
                    maxlength="7"
                    type="text" 
                    placeholder="Bet" 
                    class="input border-none text-right text-3xl placeholder:text-sm">
                  <label class="label">
                      <span class="label-text">&nbsp;</span>
                      <span class="label-text-alt">{new Intl.NumberFormat().format(betset_1)}</span>
                  </label>
              </div>
              <div class="form-control">
                <label class="label">
                    <span class="label-text">&nbsp;</span>
                    <span class="label-text-alt">3D Bet (min : {new Intl.NumberFormat().format(minimal_bet)})</span>
                </label>
                <input 
                  bind:value={betset_2}
                  on:keyup={handleKeyboard_number}
                  on:keypress={handleKeyboard432set_checkenter}
                  minlength="3"
                  maxlength="7"
                  type="text" placeholder="Bet" 
                  class="input border-none text-right text-3xl placeholder:text-sm">
                <label class="label">
                    <span class="label-text">&nbsp;</span>
                    <span class="label-text-alt">{new Intl.NumberFormat().format(betset_2)}</span>
                </label>
              </div>
              <div class="form-control">
                <label class="label">
                    <span class="label-text">&nbsp;</span>
                    <span class="label-text-alt">3DD Bet (min : {new Intl.NumberFormat().format(minimal_bet)})</span>
                </label>
                <input 
                  bind:value={betset_6}
                  on:keyup={handleKeyboard_number}
                  on:keypress={handleKeyboard432set_checkenter}
                  minlength="3"
                  maxlength="7"
                  type="text" placeholder="Bet" 
                  class="input border-none text-right text-3xl placeholder:text-sm">
                <label class="label">
                    <span class="label-text">&nbsp;</span>
                    <span class="label-text-alt">{new Intl.NumberFormat().format(betset_6)}</span>
                </label>
              </div>
              <div class="form-control">&nbsp;
              </div>
              <div class="form-control">
                <label class="label">
                    <span class="label-text">&nbsp;</span>
                    <span class="label-text-alt">2D Bet (min : {new Intl.NumberFormat().format(minimal_bet)})</span>
                </label>
                <input 
                  bind:value={betset_3}
                  on:keyup={handleKeyboard_number}
                  on:keypress={handleKeyboard432set_checkenter}
                  minlength="3"
                  maxlength="7"
                  type="text" placeholder="Bet" 
                  class="input border-none text-right text-3xl placeholder:text-sm">
                <label class="label">
                    <span class="label-text">&nbsp;</span>
                    <span class="label-text-alt">{new Intl.NumberFormat().format(betset_3)}</span>
                </label>
              </div>
              <div class="form-control">
                <label class="label">
                    <span class="label-text">&nbsp;</span>
                    <span class="label-text-alt">2DD Bet (min : {new Intl.NumberFormat().format(minimal_bet)})</span>
                </label>
                <input 
                  bind:value={betset_4}
                  on:keyup={handleKeyboard_number}
                  on:keypress={handleKeyboard432set_checkenter}
                  minlength="3"
                  maxlength="7"
                  type="text" placeholder="Bet" 
                  class="input border-none text-right text-3xl placeholder:text-sm">
                <label class="label">
                    <span class="label-text">&nbsp;</span>
                    <span class="label-text-alt">{new Intl.NumberFormat().format(betset_4)}</span>
                </label>
              </div>
              <div class="form-control">
                <label class="label">
                    <span class="label-text">&nbsp;</span>
                    <span class="label-text-alt">2DT Bet (min : {new Intl.NumberFormat().format(minimal_bet)})</span>
                </label>
                <input 
                  bind:value={betset_5}
                  on:keyup={handleKeyboard_number}
                  on:keypress={handleKeyboard432set_checkenter}
                  minlength="3"
                  maxlength="7"
                  type="text" placeholder="Bet" 
                  class="input border-none text-right text-3xl placeholder:text-sm">
                <label class="label">
                    <span class="label-text">&nbsp;</span>
                    <span class="label-text-alt">{new Intl.NumberFormat().format(betset_5)}</span>
                </label>
              </div>
          </div>
          <div class="flex items-stretch">
            <Button_custom1 
                on:click={() => {
                  handleTambah("pilihan","432SET");
                }} 
              button_title="Tambah"
              button_block="btn-block" />
          </div>
        {/if}
        {#if panel_form_432bolakbalik}
          <div class="mt-1 gap-2 grid grid-cols-4">
              <div class="form-control">
                  <label class="label">
                      <span class="label-text">Nomor (2-4)</span>
                  </label>
                  <input
                    bind:this={nomorbbfs_input}
                    bind:value={nomorbbfs}
                    on:keyup={handleKeyboard_format}
                    on:keypress={handleKeyboardbbfs_checkenter} 
                    minlength="4"
                    maxlength={bbfs}
                    type="text" placeholder="Input 4D/3D/2D Digit" 
                    class="input border-none text-center text-3xl placeholder:text-sm">
              </div>
              <div class="form-control">
                  <label class="label">
                      <span class="label-text">&nbsp;</span>
                      <span class="label-text-alt">4D Bet (min : {new Intl.NumberFormat().format(minimal_bet)})</span>
                  </label>
                  <input 
                    bind:value={bet_1}
                    on:keyup={handleKeyboard_number}
                    on:keypress={handleKeyboardbbfs_checkenter}
                    minlength="3"
                    maxlength="7"
                    type="text" 
                    placeholder="Bet" 
                    class="input border-none text-right text-3xl placeholder:text-sm">
                  <label class="label">
                      <span class="label-text">&nbsp;</span>
                      <span class="label-text-alt">{new Intl.NumberFormat().format(bet_1)}</span>
                  </label>
              </div>
              <div class="form-control">
                <label class="label">
                    <span class="label-text">&nbsp;</span>
                    <span class="label-text-alt">3D Bet (min : {new Intl.NumberFormat().format(minimal_bet)})</span>
                </label>
                <input 
                    bind:value={bet_2}
                    on:keyup={handleKeyboard_number}
                    on:keypress={handleKeyboardbbfs_checkenter}
                    minlength="3"
                    maxlength="7"
                    type="text" 
                    placeholder="Bet" 
                    class="input border-none text-right text-3xl placeholder:text-sm">
                  <label class="label">
                      <span class="label-text">&nbsp;</span>
                      <span class="label-text-alt">{new Intl.NumberFormat().format(bet_2)}</span>
                  </label>
              </div>
              <div class="form-control">
                <label class="label">
                    <span class="label-text">&nbsp;</span>
                    <span class="label-text-alt">3DD Bet (min : {new Intl.NumberFormat().format(minimal_bet)})</span>
                </label>
                <input 
                    bind:value={bet_6}
                    on:keyup={handleKeyboard_number}
                    on:keypress={handleKeyboardbbfs_checkenter}
                    minlength="3"
                    maxlength="7"
                    type="text" 
                    placeholder="Bet" 
                    class="input border-none text-right text-3xl placeholder:text-sm">
                  <label class="label">
                      <span class="label-text">&nbsp;</span>
                      <span class="label-text-alt">{new Intl.NumberFormat().format(bet_6)}</span>
                  </label>
              </div>
              <div class="form-control">&nbsp;
              </div>
              <div class="form-control">
                <label class="label">
                    <span class="label-text">&nbsp;</span>
                    <span class="label-text-alt">2D Bet (min : {new Intl.NumberFormat().format(minimal_bet)})</span>
                </label>
                <input 
                    bind:value={bet_3}
                    on:keyup={handleKeyboard_number}
                    on:keypress={handleKeyboardbbfs_checkenter}
                    minlength="3"
                    maxlength="7"
                    type="text" 
                    placeholder="Bet" 
                    class="input border-none text-right text-3xl placeholder:text-sm">
                  <label class="label">
                      <span class="label-text">&nbsp;</span>
                      <span class="label-text-alt">{new Intl.NumberFormat().format(bet_3)}</span>
                  </label>
              </div>
              <div class="form-control">
                <label class="label">
                    <span class="label-text">&nbsp;</span>
                    <span class="label-text-alt">2DD Bet (min : {new Intl.NumberFormat().format(minimal_bet)})</span>
                </label>
                <input 
                    bind:value={bet_4}
                    on:keyup={handleKeyboard_number}
                    on:keypress={handleKeyboardbbfs_checkenter}
                    minlength="3"
                    maxlength="7"
                    type="text" 
                    placeholder="Bet" 
                    class="input border-none text-right text-3xl placeholder:text-sm">
                  <label class="label">
                      <span class="label-text">&nbsp;</span>
                      <span class="label-text-alt">{new Intl.NumberFormat().format(bet_4)}</span>
                  </label>
              </div>
              <div class="form-control">
                <label class="label">
                    <span class="label-text">&nbsp;</span>
                    <span class="label-text-alt">2DT Bet (min : {new Intl.NumberFormat().format(minimal_bet)})</span>
                </label>
                <input 
                    bind:value={bet_5}
                    on:keyup={handleKeyboard_number}
                    on:keypress={handleKeyboardbbfs_checkenter}
                    minlength="3"
                    maxlength="7"
                    type="text" 
                    placeholder="Bet" 
                    class="input border-none text-right text-3xl placeholder:text-sm">
                  <label class="label">
                      <span class="label-text">&nbsp;</span>
                      <span class="label-text-alt">{new Intl.NumberFormat().format(bet_5)}</span>
                  </label>
              </div>
          </div>
          <div class="flex items-stretch">
            <Button_custom1 
                on:click={() => {
                  handleTambah("pilihan","BBFS");
                }} 
              button_title="Tambah"
              button_block="btn-block" />
          </div>
        {/if}
        {#if panel_form_432wap}
          <div class="mt-1 grid grid-cols-1">
            <textarea
              bind:this={nomorwap_input}
              bind:value={nomorwap}
              rows="100" cols="100"
              maxlength=1000  
              class="textarea textarea-bordered h-24 resize-none" placeholder="Input Format"></textarea>
          </div>
          <div class="flex items-stretch">
            <Button_custom1 
                on:click={() => {
                  handleTambah("pilihan","wap");
                }} 
              button_title="Tambah"
              button_block="btn-block" />
          </div>
          <p class="text-left text-sm">
            <b>Contoh (WAP) :</b><br />
                1234*234*34#1000,34*235*35#5000<br />
          </p>
        {/if}
        {#if panel_form_432polatarung}
          <div class="mt-1 gap-2 grid grid-cols-5">
              <div class="form-control">
                  <label class="label">
                      <span class="label-text">Nomor AS</span>
                  </label>
                  <input
                    bind:this={nomoras_input}
                    bind:value={nomoras}
                    on:keyup={handleKeyboard_number}
                    minlength="4"
                    maxlength="4"
                    type="text" 
                    placeholder="AS" 
                    class="input border-none text-center text-3xl placeholder:text-sm"> 
              </div>
              <div class="form-control">
                <label class="label">
                    <span class="label-text">Nomor KOP</span>
                </label>
                <input
                    bind:this={nomorkop_input}
                    bind:value={nomorkop}
                    on:keyup={handleKeyboard_number}
                    minlength="4"
                    maxlength="4"
                    type="text" 
                    placeholder="KOP" 
                    class="input border-none text-center text-3xl placeholder:text-sm">  
              </div>
              <div class="form-control">
                <label class="label">
                    <span class="label-text">Nomor KEPALA</span>
                </label>
                <input
                    bind:value={nomorkepala}
                    on:keyup={handleKeyboard_number}
                    minlength="4"
                    maxlength="4"
                    type="text" 
                    placeholder="KEPALA" 
                    class="input border-none text-center text-3xl placeholder:text-sm">
              </div>
              <div class="form-control">
                <label class="label">
                    <span class="label-text">Nomor EKOR</span>
                </label>
                <input
                    bind:value={nomorekor}
                    on:keyup={handleKeyboard_number}
                    minlength="4"
                    maxlength="4"
                    type="text" 
                    placeholder="EKOR" 
                    class="input border-none text-center text-3xl placeholder:text-sm">
              </div>
              <div class="form-control">
                  <label class="label">
                      <span class="label-text">&nbsp;</span>
                      <span class="label-text-alt">Bet (min : {new Intl.NumberFormat().format(minimal_bet)})</span>
                  </label>
                  <input 
                    bind:this={bet_tarung_input}
                    bind:value={bet_tarung}
                    on:keyup={handleKeyboard_number}
                    on:keypress={handleKeyboardpolatarung_checkenter}
                    minlength="3"
                    maxlength="7"
                    type="text" 
                    placeholder="Bet" 
                    class="input border-none text-right text-3xl placeholder:text-sm">
                  <label class="label">
                      <span class="label-text">&nbsp;</span>
                      <span class="label-text-alt">{new Intl.NumberFormat().format(bet_tarung)}</span>
                  </label>
              </div>
          </div>
          <div class="flex items-stretch">
            <Button_custom1 
              on:click={() => {
                handleTambah("pilihan","polatarung");
              }} 
            button_title="Tambah"
            button_block="btn-block" />
          </div>
          <p class="text-left text-sm">
            POLA TARUNG : AS KOP KEPALA EKOR <br>
            <b>Contoh (POLA TARUNG) :</b><br />
            - AS:123 &nbsp;&nbsp;KOP:456 &nbsp;&nbsp;KEPALA:789 &nbsp;&nbsp;EKOR:012 => 4D<br>
            - AS:12 &nbsp;&nbsp;KOP:45 &nbsp;&nbsp;KEPALA:78 => 3D<br>
            - AS:12 &nbsp;&nbsp;KOP:45  => 2D<br>
          </p>
        {/if}
        {#if panel_form_432quick2d}
          <div class="mt-1 gap-2 grid grid-cols-4">
              <div class="form-control">
                  <label class="label">
                      <span class="label-text">Besar/Kecil/Genap/Ganjil</span>
                  </label>
                  <select
                    bind:value={quick_pilihan1}
                    bind:this={quick_pilihan1_input} 
                    class="select w-full max-w-xs">
                    <option value="BESAR">BESAR</option>
                    <option value="KECIL">KECIL</option>
                    <option value="GENAP">GENAP</option>
                    <option value="GANJIL">GANJIL</option>
                  </select> 
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">2D/2DD/2DT</span>
                </label>
                <select
                  bind:value={quick_pilihan2}
                  bind:this={quick_pilihan2_input}
                  class="select w-full max-w-xs">
                  <option value="2D">2D</option>
                  <option value="2DD">2D DEPAN</option>
                  <option value="2DT">2D TENGAH</option>
                </select> 
              </div>
              <div class="form-control">
                  <label class="label">
                      <span class="label-text">&nbsp;</span>
                      <span class="label-text-alt">Bet (min : {new Intl.NumberFormat().format(minimal_bet)})</span>
                  </label>
                  <input 
                    bind:value={quick_bet}
                    bind:this={quick_bet_input}
                    on:keyup={handleKeyboard_number}
                    on:keypress={handleKeyboardquick2d_checkenter}
                    minlength="3"
                    maxlength="7"
                    type="text" 
                    placeholder="Bet" 
                    class="input border-none text-right text-3xl placeholder:text-sm">
                  <label class="label">
                      <span class="label-text">&nbsp;</span>
                      <span class="label-text-alt">{new Intl.NumberFormat().format(quick_bet)}</span>
                  </label>
              </div>
              <div class="form-control mt-9">
                <Button_custom1 
                  on:click={() => {
                    handleTambah("pilihan","quick2D");
                  }} 
                button_tipe=""
                button_title="Tambah" />
            </div>
          </div>
        {/if}
        {#if panel_form_4323dd}
          <div class="mt-1 gap-2 grid grid-cols-3">
            <div class="form-control">
                <label class="label">
                    <span class="label-text">Nomor (3 Digit)</span>
                </label>
                <input
                  bind:this={nomor3dd_input}
                  bind:value={nomor3dd}
                  on:keyup={handleKeyboard_format}
                  on:keypress={handleKeyboard3dd_checkenter}
                  minlength="3"
                  maxlength="3"
                  type="text" 
                  placeholder="Input 3D DEPAN Digit" 
                  class="input border-none text-center text-3xl placeholder:text-sm"> 
            </div>
            <div class="form-control">
                <label class="label">
                    <span class="label-text">&nbsp;</span>
                    <span class="label-text-alt">Bet (min : {new Intl.NumberFormat().format(minimal_bet)})</span>
                </label>
                <input
                  bind:value={bet_3dd}
                  on:keyup={handleKeyboard_number}
                  on:keypress={handleKeyboard3dd_checkenter}
                  minlength="3"
                  maxlength="7"
                  type="text" placeholder="Bet" 
                  class="input border-none text-right text-3xl placeholder:text-sm">
                <label class="label">
                    <span class="label-text">&nbsp;</span>
                    <span class="label-text-alt">{new Intl.NumberFormat().format(bet_3dd)}</span>
                </label>
            </div>
            <div class="form-control mt-9">
                <Button_custom1 
                  on:click={() => {
                    handleTambah("pilihan","3DD");
                  }} 
                button_tipe=""
                button_title="Tambah" />
            </div>
          </div>
        {/if}
        {#if panel_form_4322dd}
          <div class="mt-1 gap-2 grid grid-cols-3">
            <div class="form-control">
                <label class="label">
                    <span class="label-text">Nomor (2 Digit)</span>
                </label>
                <input
                  bind:this={nomor2dd_input}
                  bind:value={nomor2dd}
                  on:keyup={handleKeyboard_format}
                  on:keypress={handleKeyboard2dd_checkenter}
                  minlength="2"
                  maxlength="2"
                  type="text" 
                  placeholder="Input 2D DEPAN Digit" 
                  class="input border-none text-center text-3xl placeholder:text-sm"> 
            </div>
            <div class="form-control">
                <label class="label">
                    <span class="label-text">&nbsp;</span>
                    <span class="label-text-alt">Bet (min : {new Intl.NumberFormat().format(minimal_bet)})</span>
                </label>
                <input
                  bind:value={bet_2dd}
                  on:keyup={handleKeyboard_number}
                  on:keypress={handleKeyboard2dd_checkenter}
                  minlength="3"
                  maxlength="7"
                  type="text" placeholder="Bet" 
                  class="input border-none text-right text-3xl placeholder:text-sm">
                <label class="label">
                    <span class="label-text">&nbsp;</span>
                    <span class="label-text-alt">{new Intl.NumberFormat().format(bet_2dd)}</span>
                </label>
            </div>
            <div class="form-control mt-9">
                <Button_custom1 
                  on:click={() => {
                    handleTambah("pilihan","2DD");
                  }} 
                button_tipe=""
                button_title="Tambah" />
            </div>
          </div>
        {/if}
        {#if panel_form_4322dt}
          <div class="mt-1 gap-2 grid grid-cols-3">
            <div class="form-control">
                <label class="label">
                    <span class="label-text">Nomor (2 Digit)</span>
                </label>
                <input
                  bind:this={nomor2dt_input}
                  bind:value={nomor2dt}
                  on:keyup={handleKeyboard_format}
                  on:keypress={handleKeyboard2dt_checkenter}
                  minlength="2"
                  maxlength="2"
                  type="text" 
                  placeholder="Input 2D TENGAH Digit" 
                  class="input border-none text-center text-3xl placeholder:text-sm"> 
            </div>
            <div class="form-control">
                <label class="label">
                    <span class="label-text">&nbsp;</span>
                    <span class="label-text-alt">Bet (min : {new Intl.NumberFormat().format(minimal_bet)})</span>
                </label>
                <input
                  bind:value={bet_2dt}
                  on:keyup={handleKeyboard_number}
                  on:keypress={handleKeyboard2dt_checkenter}
                  minlength="3"
                  maxlength="7"
                  type="text" placeholder="Bet" 
                  class="input border-none text-right text-3xl placeholder:text-sm">
                <label class="label">
                    <span class="label-text">&nbsp;</span>
                    <span class="label-text-alt">{new Intl.NumberFormat().format(bet_2dt)}</span>
                </label>
            </div>
            <div class="form-control mt-9">
                <Button_custom1 
                  on:click={() => {
                    handleTambah("pilihan","2DT");
                  }} 
                button_tipe=""
                button_title="Tambah" />
            </div>
          </div>
        {/if}
      {:else}
        <h2 class="card-title text-lg grid grid-cols-2 gap-2">
          <div class="place-content-start text-left text-sm">
              {pasaran_name} <br> {permainan_title}
          </div>
          <div class="place-content-end text-right text-sm">PERIODE : #{pasaran_periode} - {pasaran_code}</div>
        </h2>
        <div class="mt-6 md:flex md:items-center md:justify-between md:space-x-8">
          <div class="flex items-center space-x-2 overflow-y-auto md:max-w-lg xl:max-w-5xl 2xl:max-w-7xl lg:max-w-3xl whitespace-nowrap">
            <span
                on:click={() => {
                  changeTabs("432");
                }} 
                class="{class_tab_432} px-3 py-1.5 cursor-pointer  ">4D/3D/2D</span> 
            <span
              on:click={() => {
                changeTabs("432SET");
              }}
              class="{class_tab_432set} px-3 py-1.5 cursor-pointer ">4D/3D/2D SET</span> 
            <span
              on:click={() => {
                changeTabs("432BOLAKBALIK");
              }}
              class="{class_tab_432bolakbalik} px-3 cursor-pointer  ">BOLAK BALIK</span> 
            <span 
              on:click={() => {
                changeTabs("432WAP");
              }}
              class="{class_tab_432wap} px-3 py-1.5 cursor-pointer ">WAP</span> 
            <span 
              on:click={() => {
                changeTabs("432POLATARUNG");
              }}
              class="{class_tab_432polatarung} px-3 py-1.5 cursor-pointer ">POLA TARUNG</span> 
            <span 
              on:click={() => {
                changeTabs("432QUICK2D");
              }}
              class="{class_tab_432quick2d} px-3 py-1.5 cursor-pointer ">QUICK 2D</span>
            <span 
              on:click={() => {
                changeTabs("4323DD");
              }}
              class="{class_tab_4323DD} px-3 py-1.5 cursor-pointer ">3DD /3D DEPAN</span>
            <span 
              on:click={() => {
                changeTabs("4322DD");
              }}
              class="{class_tab_4322DD} px-3 py-1.5 cursor-pointer ">2DD /2D DEPAN</span>
            <span 
              on:click={() => {
                changeTabs("4322DT");
              }}
              class="{class_tab_4322DT} px-3 py-1.5 cursor-pointer ">2DT /2D TENGAH</span>
          </div>
        </div>
        {#if panel_form_432}
          <div class="mt-1 gap-2 grid grid-cols-2">
              <div class="form-control">
                  <label class="label">
                      <span class="label-text">Nomor (2-4)</span>
                  </label>
                  <input
                    autofocus
                    bind:this={nomor_432_input}
                    bind:value={nomor_432}
                    on:keyup={handleKeyboard_format}
                    on:keypress={handleKeyboard_checkenter} 
                    minlength="4"
                    maxlength="4"
                    type="text" 
                    placeholder="Input 4D/3D/2D Digit" 
                    class="input border-none text-center text-2xl placeholder:text-sm"> 
              </div>
              <div class="form-control">
                  <label class="label">
                      <span class="label-text">&nbsp;</span>
                      <span class="label-text-alt">Bet (min : {new Intl.NumberFormat().format(minimal_bet)})</span>
                  </label>
                  <input
                    bind:value={bet_432}
                    on:keyup={handleKeyboard_number}
                    on:keypress={handleKeyboard_checkenter} 
                    minlength="3"
                    maxlength="7"
                    type="text" placeholder="Bet" 
                    class="input border-none text-right text-3xl placeholder:text-sm">
                  <label class="label">
                      <span class="label-text">&nbsp;</span>
                      <span class="label-text-alt">{new Intl.NumberFormat().format(bet_432)}</span>
                  </label>
              </div>
          </div>
          <div class="form-control mt-1">
            <Button_custom1 
              on:click={() => {
                handleTambah("pilihan","4-3-2");
              }} 
            button_tipe=""
            button_title="Tambah" />
          </div>
        {/if}
        {#if panel_form_432set}
          <div class="mt-1 gap-2 grid grid-cols-1">
            <div class="form-control">
              <label class="label">
                  <span class="label-text">Nomor (2-4)</span>
              </label>
              <input
                bind:this={nomorset_input}
                bind:value={nomorset}
                on:keyup={handleKeyboard_format}
                on:keypress={handleKeyboard432set_checkenter} 
                minlength="4"
                maxlength="4"
                type="text" placeholder="Input 4D/3D/2D Digit" 
                class="input border-none text-center text-3xl placeholder:text-sm"> 
            </div>
          </div>
          <div class="mt-1 gap-2 grid grid-cols-2">
              <div class="form-control">
                  <label class="label">
                      <span class="label-text">&nbsp;</span>
                      <span class="label-text-alt">4D Bet (min : {new Intl.NumberFormat().format(minimal_bet)})</span>
                  </label>
                  <input 
                    bind:value={betset_1}
                    on:keyup={handleKeyboard_number}
                    on:keypress={handleKeyboard432set_checkenter}
                    minlength="3"
                    maxlength="7"
                    type="text" 
                    placeholder="Bet" 
                    class="input border-none text-right text-3xl placeholder:text-sm">
                  <label class="label">
                      <span class="label-text">&nbsp;</span>
                      <span class="label-text-alt">{new Intl.NumberFormat().format(betset_1)}</span>
                  </label>
              </div>
              <div class="form-control">
                <label class="label">
                    <span class="label-text">&nbsp;</span>
                    <span class="label-text-alt">3D Bet (min : {new Intl.NumberFormat().format(minimal_bet)})</span>
                </label>
                <input 
                  bind:value={betset_2}
                  on:keyup={handleKeyboard_number}
                  on:keypress={handleKeyboard432set_checkenter}
                  minlength="3"
                  maxlength="7"
                  type="text" placeholder="Bet" 
                  class="input border-none text-right text-3xl placeholder:text-sm">
                <label class="label">
                    <span class="label-text">&nbsp;</span>
                    <span class="label-text-alt">{new Intl.NumberFormat().format(betset_2)}</span>
                </label>
              </div>
              <div class="form-control">
                <label class="label">
                    <span class="label-text">&nbsp;</span>
                    <span class="label-text-alt">3DD Bet (min : {new Intl.NumberFormat().format(minimal_bet)})</span>
                </label>
                <input 
                  bind:value={betset_6}
                  on:keyup={handleKeyboard_number}
                  on:keypress={handleKeyboard432set_checkenter}
                  minlength="3"
                  maxlength="7"
                  type="text" placeholder="Bet" 
                  class="input border-none text-right text-3xl placeholder:text-sm">
                <label class="label">
                    <span class="label-text">&nbsp;</span>
                    <span class="label-text-alt">{new Intl.NumberFormat().format(betset_6)}</span>
                </label>
              </div>
              
              <div class="form-control">
                <label class="label">
                    <span class="label-text">&nbsp;</span>
                    <span class="label-text-alt">2D Bet (min : {new Intl.NumberFormat().format(minimal_bet)})</span>
                </label>
                <input 
                  bind:value={betset_3}
                  on:keyup={handleKeyboard_number}
                  on:keypress={handleKeyboard432set_checkenter}
                  minlength="3"
                  maxlength="7"
                  type="text" placeholder="Bet" 
                  class="input border-none text-right text-3xl placeholder:text-sm">
                <label class="label">
                    <span class="label-text">&nbsp;</span>
                    <span class="label-text-alt">{new Intl.NumberFormat().format(betset_3)}</span>
                </label>
              </div>
              <div class="form-control">
                <label class="label">
                    <span class="label-text">&nbsp;</span>
                    <span class="label-text-alt">2DD Bet (min : {new Intl.NumberFormat().format(minimal_bet)})</span>
                </label>
                <input 
                  bind:value={betset_4}
                  on:keyup={handleKeyboard_number}
                  on:keypress={handleKeyboard432set_checkenter}
                  minlength="3"
                  maxlength="7"
                  type="text" placeholder="Bet" 
                  class="input border-none text-right text-3xl placeholder:text-sm">
                <label class="label">
                    <span class="label-text">&nbsp;</span>
                    <span class="label-text-alt">{new Intl.NumberFormat().format(betset_4)}</span>
                </label>
              </div>
              <div class="form-control">
                <label class="label">
                    <span class="label-text">&nbsp;</span>
                    <span class="label-text-alt">2DT Bet (min : {new Intl.NumberFormat().format(minimal_bet)})</span>
                </label>
                <input 
                  bind:value={betset_5}
                  on:keyup={handleKeyboard_number}
                  on:keypress={handleKeyboard432set_checkenter}
                  minlength="3"
                  maxlength="7"
                  type="text" placeholder="Bet" 
                  class="input border-none text-right text-3xl placeholder:text-sm">
                <label class="label">
                    <span class="label-text">&nbsp;</span>
                    <span class="label-text-alt">{new Intl.NumberFormat().format(betset_5)}</span>
                </label>
              </div>
          </div>
          <div class="flex items-stretch">
            <Button_custom1 
                on:click={() => {
                  handleTambah("pilihan","432SET");
                }} 
              button_title="Tambah"
              button_block="btn-block" />
          </div>
        {/if}
        {#if panel_form_432bolakbalik}
          <div class="mt-1 gap-2 grid grid-cols-1">
            <div class="form-control">
              <label class="label">
                  <span class="label-text">Nomor (2-4)</span>
              </label>
              <input
                bind:this={nomorbbfs_input}
                bind:value={nomorbbfs}
                on:keyup={handleKeyboard_format}
                on:keypress={handleKeyboardbbfs_checkenter} 
                minlength="4"
                maxlength={bbfs}
                type="text" placeholder="Input 4D/3D/2D Digit" 
                class="input border-none text-center text-3xl placeholder:text-sm">
            </div>
          </div>
          <div class="mt-1 gap-2 grid grid-cols-2">
              <div class="form-control">
                  <label class="label">
                      <span class="label-text">&nbsp;</span>
                      <span class="label-text-alt">4D Bet (min : {new Intl.NumberFormat().format(minimal_bet)})</span>
                  </label>
                  <input 
                    bind:value={bet_1}
                    on:keyup={handleKeyboard_number}
                    on:keypress={handleKeyboardbbfs_checkenter}
                    minlength="3"
                    maxlength="7"
                    type="text" 
                    placeholder="Bet" 
                    class="input border-none text-right text-3xl placeholder:text-sm">
                  <label class="label">
                      <span class="label-text">&nbsp;</span>
                      <span class="label-text-alt">{new Intl.NumberFormat().format(bet_1)}</span>
                  </label>
              </div>
              <div class="form-control">
                <label class="label">
                    <span class="label-text">&nbsp;</span>
                    <span class="label-text-alt">3D Bet (min : {new Intl.NumberFormat().format(minimal_bet)})</span>
                </label>
                <input 
                    bind:value={bet_2}
                    on:keyup={handleKeyboard_number}
                    on:keypress={handleKeyboardbbfs_checkenter}
                    minlength="3"
                    maxlength="7"
                    type="text" 
                    placeholder="Bet" 
                    class="input border-none text-right text-3xl placeholder:text-sm">
                  <label class="label">
                      <span class="label-text">&nbsp;</span>
                      <span class="label-text-alt">{new Intl.NumberFormat().format(bet_2)}</span>
                  </label>
              </div>
              <div class="form-control">
                <label class="label">
                    <span class="label-text">&nbsp;</span>
                    <span class="label-text-alt">3DD Bet (min : {new Intl.NumberFormat().format(minimal_bet)})</span>
                </label>
                <input 
                    bind:value={bet_6}
                    on:keyup={handleKeyboard_number}
                    on:keypress={handleKeyboardbbfs_checkenter}
                    minlength="3"
                    maxlength="7"
                    type="text" 
                    placeholder="Bet" 
                    class="input border-none text-right text-3xl placeholder:text-sm">
                  <label class="label">
                      <span class="label-text">&nbsp;</span>
                      <span class="label-text-alt">{new Intl.NumberFormat().format(bet_6)}</span>
                  </label>
              </div>
              <div class="form-control">
                <label class="label">
                    <span class="label-text">&nbsp;</span>
                    <span class="label-text-alt">2D Bet (min : {new Intl.NumberFormat().format(minimal_bet)})</span>
                </label>
                <input 
                    bind:value={bet_3}
                    on:keyup={handleKeyboard_number}
                    on:keypress={handleKeyboardbbfs_checkenter}
                    minlength="3"
                    maxlength="7"
                    type="text" 
                    placeholder="Bet" 
                    class="input border-none text-right text-3xl placeholder:text-sm">
                  <label class="label">
                      <span class="label-text">&nbsp;</span>
                      <span class="label-text-alt">{new Intl.NumberFormat().format(bet_3)}</span>
                  </label>
              </div>
              <div class="form-control">
                <label class="label">
                    <span class="label-text">&nbsp;</span>
                    <span class="label-text-alt">2DD Bet (min : {new Intl.NumberFormat().format(minimal_bet)})</span>
                </label>
                <input 
                    bind:value={bet_4}
                    on:keyup={handleKeyboard_number}
                    on:keypress={handleKeyboardbbfs_checkenter}
                    minlength="3"
                    maxlength="7"
                    type="text" 
                    placeholder="Bet" 
                    class="input border-none text-right text-3xl placeholder:text-sm">
                  <label class="label">
                      <span class="label-text">&nbsp;</span>
                      <span class="label-text-alt">{new Intl.NumberFormat().format(bet_4)}</span>
                  </label>
              </div>
              <div class="form-control">
                <label class="label">
                    <span class="label-text">&nbsp;</span>
                    <span class="label-text-alt">2DT Bet (min : {new Intl.NumberFormat().format(minimal_bet)})</span>
                </label>
                <input 
                    bind:value={bet_5}
                    on:keyup={handleKeyboard_number}
                    on:keypress={handleKeyboardbbfs_checkenter}
                    minlength="3"
                    maxlength="7"
                    type="text" 
                    placeholder="Bet" 
                    class="input border-none text-right text-3xl placeholder:text-sm">
                  <label class="label">
                      <span class="label-text">&nbsp;</span>
                      <span class="label-text-alt">{new Intl.NumberFormat().format(bet_5)}</span>
                  </label>
              </div>
          </div>
          <div class="flex items-stretch">
            <Button_custom1 
                on:click={() => {
                  handleTambah("pilihan","BBFS");
                }} 
              button_title="Tambah"
              button_block="btn-block" />
          </div>
        {/if}
        {#if panel_form_432wap}
          <div class="mt-1 grid grid-cols-1">
            <textarea
              bind:this={nomorwap_input}
              bind:value={nomorwap}
              rows="100" cols="100"
              maxlength=1000  
              class="textarea textarea-bordered h-24 resize-none" placeholder="Input Format"></textarea>
          </div>
          <div class="flex items-stretch">
            <Button_custom1 
                on:click={() => {
                  handleTambah("pilihan","wap");
                }} 
              button_title="Tambah"
              button_block="btn-block" />
          </div>
          <p class="text-left text-sm">
            <b>Contoh (WAP) :</b><br />
                1234*234*34#1000,34*235*35#5000<br />
          </p>
        {/if}
        {#if panel_form_432polatarung}
          <div class="mt-1 gap-2 grid grid-cols-2">
              <div class="form-control">
                  <label class="label">
                      <span class="label-text">Nomor AS</span>
                  </label>
                  <input
                    bind:this={nomoras_input}
                    bind:value={nomoras}
                    on:keyup={handleKeyboard_number}
                    minlength="4"
                    maxlength="4"
                    type="text" 
                    placeholder="AS" 
                    class="input border-none text-center text-3xl placeholder:text-sm"> 
              </div>
              <div class="form-control">
                <label class="label">
                    <span class="label-text">Nomor KOP</span>
                </label>
                <input
                    bind:this={nomorkop_input}
                    bind:value={nomorkop}
                    on:keyup={handleKeyboard_number}
                    minlength="4"
                    maxlength="4"
                    type="text" 
                    placeholder="KOP" 
                    class="input border-none text-center text-3xl placeholder:text-sm">  
              </div>
              <div class="form-control">
                <label class="label">
                    <span class="label-text">Nomor KEPALA</span>
                </label>
                <input
                    bind:value={nomorkepala}
                    on:keyup={handleKeyboard_number}
                    minlength="4"
                    maxlength="4"
                    type="text" 
                    placeholder="KEPALA" 
                    class="input border-none text-center text-3xl placeholder:text-sm">
              </div>
              <div class="form-control">
                <label class="label">
                    <span class="label-text">Nomor EKOR</span>
                </label>
                <input
                    bind:value={nomorekor}
                    on:keyup={handleKeyboard_number}
                    minlength="4"
                    maxlength="4"
                    type="text" 
                    placeholder="EKOR" 
                    class="input border-none text-center text-3xl placeholder:text-sm">
              </div>
          </div>
          <div class="form-control">
            <label class="label">
                <span class="label-text">&nbsp;</span>
                <span class="label-text-alt">Bet (min : {new Intl.NumberFormat().format(minimal_bet)})</span>
            </label>
            <input 
              bind:this={bet_tarung_input}
              bind:value={bet_tarung}
              on:keyup={handleKeyboard_number}
              on:keypress={handleKeyboardpolatarung_checkenter}
              minlength="3"
              maxlength="7"
              type="text" 
              placeholder="Bet" 
              class="input border-none text-right text-3xl placeholder:text-sm">
            <label class="label">
                <span class="label-text">&nbsp;</span>
                <span class="label-text-alt">{new Intl.NumberFormat().format(bet_tarung)}</span>
            </label>
          </div>
          <div class="flex items-stretch">
            <Button_custom1 
              on:click={() => {
                handleTambah("pilihan","polatarung");
              }} 
            button_title="Tambah"
            button_block="btn-block" />
          </div>
          <p class="text-left text-sm">
            POLA TARUNG : AS KOP KEPALA EKOR <br>
            <b>Contoh (POLA TARUNG) :</b><br />
            - AS:123 &nbsp;&nbsp;KOP:456 &nbsp;&nbsp;KEPALA:789 &nbsp;&nbsp;EKOR:012 => 4D<br>
            - AS:12 &nbsp;&nbsp;KOP:45 &nbsp;&nbsp;KEPALA:78 => 3D<br>
            - AS:12 &nbsp;&nbsp;KOP:45  => 2D<br>
          </p>
        {/if}
        {#if panel_form_432quick2d}
          <div class="mt-1 gap-2 grid grid-cols-2">
              <div class="form-control">
                  <label class="label">
                      <span class="label-text">Besar/Kecil/Genap/Ganjil</span>
                  </label>
                  <select
                    bind:value={quick_pilihan1}
                    bind:this={quick_pilihan1_input} 
                    class="select w-full max-w-xs">
                    <option value="BESAR">BESAR</option>
                    <option value="KECIL">KECIL</option>
                    <option value="GENAP">GENAP</option>
                    <option value="GANJIL">GANJIL</option>
                  </select> 
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">2D/2DD/2DT</span>
                </label>
                <select
                  bind:value={quick_pilihan2}
                  bind:this={quick_pilihan2_input}
                  class="select w-full max-w-xs">
                  <option value="2D">2D</option>
                  <option value="2DD">2D DEPAN</option>
                  <option value="2DT">2D TENGAH</option>
                </select> 
              </div>
          </div>
          <div class="form-control">
            <label class="label">
                <span class="label-text">&nbsp;</span>
                <span class="label-text-alt">Bet (min : {new Intl.NumberFormat().format(minimal_bet)})</span>
            </label>
            <input 
              bind:value={quick_bet}
              bind:this={quick_bet_input}
              on:keyup={handleKeyboard_number}
              on:keypress={handleKeyboardquick2d_checkenter}
              minlength="3"
              maxlength="7"
              type="text" 
              placeholder="Bet" 
              class="input border-none text-right text-3xl placeholder:text-sm">
            <label class="label">
                <span class="label-text">&nbsp;</span>
                <span class="label-text-alt">{new Intl.NumberFormat().format(quick_bet)}</span>
            </label>
          </div>
          <div class="flex items-stretch">
            <Button_custom1 
              on:click={() => {
                handleTambah("pilihan","quick2D");
              }} 
            button_title="Tambah"
            button_block="btn-block" />
          </div>
        {/if}
        {#if panel_form_4323dd}
          <div class="mt-1 gap-2 grid grid-cols-2">
            <div class="form-control">
                <label class="label">
                    <span class="label-text">Nomor (3 Digit)</span>
                </label>
                <input
                  bind:this={nomor3dd_input}
                  bind:value={nomor3dd}
                  on:keyup={handleKeyboard_format}
                  on:keypress={handleKeyboard3dd_checkenter}
                  minlength="3"
                  maxlength="3"
                  type="text" 
                  placeholder="Input 3D DEPAN Digit" 
                  class="input border-none text-center text-3xl placeholder:text-sm"> 
            </div>
            <div class="form-control">
              <label class="label">
                  <span class="label-text">&nbsp;</span>
                  <span class="label-text-alt">Bet (min : {new Intl.NumberFormat().format(minimal_bet)})</span>
              </label>
              <input
                bind:value={bet_3dd}
                on:keyup={handleKeyboard_number}
                on:keypress={handleKeyboard3dd_checkenter}
                minlength="3"
                maxlength="7"
                type="text" placeholder="Bet" 
                class="input border-none text-right text-3xl placeholder:text-sm">
              <label class="label">
                  <span class="label-text">&nbsp;</span>
                  <span class="label-text-alt">{new Intl.NumberFormat().format(bet_3dd)}</span>
              </label>
            </div>
          </div>
          <div class="flex items-stretch">
            <Button_custom1 
              on:click={() => {
                handleTambah("pilihan","3DD");
              }} 
            button_title="Tambah"
            button_block="btn-block" />
          </div>
        {/if}
        {#if panel_form_4322dd}
          <div class="mt-1 gap-2 grid grid-cols-2">
            <div class="form-control">
                <label class="label">
                    <span class="label-text">Nomor (2 Digit)</span>
                </label>
                <input
                  bind:this={nomor2dd_input}
                  bind:value={nomor2dd}
                  on:keyup={handleKeyboard_format}
                  on:keypress={handleKeyboard2dd_checkenter}
                  minlength="2"
                  maxlength="2"
                  type="text" 
                  placeholder="Input 2D DEPAN Digit" 
                  class="input border-none text-center text-3xl placeholder:text-sm"> 
            </div>
            <div class="form-control">
                <label class="label">
                    <span class="label-text">&nbsp;</span>
                    <span class="label-text-alt">Bet (min : {new Intl.NumberFormat().format(minimal_bet)})</span>
                </label>
                <input
                  bind:value={bet_2dd}
                  on:keyup={handleKeyboard_number}
                  on:keypress={handleKeyboard2dd_checkenter}
                  minlength="3"
                  maxlength="7"
                  type="text" placeholder="Bet" 
                  class="input border-none text-right text-3xl placeholder:text-sm">
                <label class="label">
                    <span class="label-text">&nbsp;</span>
                    <span class="label-text-alt">{new Intl.NumberFormat().format(bet_2dd)}</span>
                </label>
            </div>
          </div>
          <div class="flex items-stretch">
            <Button_custom1 
              on:click={() => {
                handleTambah("pilihan","2DD");
              }} 
            button_title="Tambah"
            button_block="btn-block" />
          </div>
        {/if}
        {#if panel_form_4322dt}
          <div class="mt-1 gap-2 grid grid-cols-2">
            <div class="form-control">
                <label class="label">
                    <span class="label-text">Nomor (2 Digit)</span>
                </label>
                <input
                  bind:this={nomor2dt_input}
                  bind:value={nomor2dt}
                  on:keyup={handleKeyboard_format}
                  on:keypress={handleKeyboard2dt_checkenter}
                  minlength="2"
                  maxlength="2"
                  type="text" 
                  placeholder="Input 2D TENGAH Digit" 
                  class="input border-none text-center text-3xl placeholder:text-sm"> 
            </div>
            <div class="form-control">
                <label class="label">
                    <span class="label-text">&nbsp;</span>
                    <span class="label-text-alt">Bet (min : {new Intl.NumberFormat().format(minimal_bet)})</span>
                </label>
                <input
                  bind:value={bet_2dt}
                  on:keyup={handleKeyboard_number}
                  on:keypress={handleKeyboard2dt_checkenter}
                  minlength="3"
                  maxlength="7"
                  type="text" placeholder="Bet" 
                  class="input border-none text-right text-3xl placeholder:text-sm">
                <label class="label">
                    <span class="label-text">&nbsp;</span>
                    <span class="label-text-alt">{new Intl.NumberFormat().format(bet_2dt)}</span>
                </label>
            </div>
          </div>
          <div class="flex items-stretch">
            <Button_custom1 
              on:click={() => {
                handleTambah("pilihan","2DT");
              }} 
            button_title="Tambah"
            button_block="btn-block" />
          </div>
        {/if}
      {/if}
      
      
  </div>
</div>
<Tablekeranjang
  on:removekeranjang={removekeranjang}
  on:removekeranjangall={removekeranjangall}
  on:handleSave={handleSave}
  {card_custom}
  {client_device}
  {group_btn_beli}
  {count_line_4d}
  {count_line_3d}
  {count_line_3dd}
  {count_line_2d}
  {count_line_2dd}
  {count_line_2dt}
  {keranjang}
  {totalkeranjang}
  {minimal_bet}
  {max4d_bet}
  {max3d_bet}
  {max3dd_bet}
  {max2d_bet}
  {max2dd_bet}
  {max2dt_bet}
  {disc4d_bet}
  {disc3d_bet}
  {disc3dd_bet}
  {disc2d_bet}
  {disc2dd_bet}
  {disc2dt_bet}
  {win4d_bet}
  {win3d_bet}
  {win3dd_bet}
  {win2d_bet}
  {win2dd_bet}
  {win2dt_bet}
  {win4dnodiskon_bet}
  {win3dnodiskon_bet}
  {win3ddnodiskon_bet}
  {win2dnodiskon_bet}
  {win2ddnodiskon_bet}
  {win2dtnodiskon_bet}
  {win4dbb_kena_bet}
  {win3dbb_kena_bet}
  {win3ddbb_kena_bet}
  {win2dbb_kena_bet}
  {win2ddbb_kena_bet}
  {win2dtbb_kena_bet}
  {win4dbb_bet}
  {win3dbb_bet}
  {win3ddbb_bet}
  {win2dbb_bet}
  {win2ddbb_bet}
  {win2dtbb_bet}
  {limitline_4d}
  {limitline_3d}
  {limitline_3dd}
  {limitline_2d}
  {limitline_2dd}
  {limitline_2dt}/>


<input type="checkbox" id="my-modal-pilihanpermainan" class="modal-toggle" bind:checked={isModalAPilihan}>
<div class="modal" on:click|self={()=>isModalAPilihan = false}>
  <div class="modal-box">
    <h3 class="font-bold text-lg text-center">Pilih Permainan dibawah ini :</h3>
    <div class="flex justify-center gap-2">
      <button
        on:click={() => {
          handlePilihan("DISC");
        }}  
        class="btn btn-primary rounded-md">DISKON</button>
      <button
        on:click={() => {
          handlePilihan("FULL");
        }} 
        class="btn btn-secondary rounded-md">NON DISKON / FULL</button>
      <button
        on:click={() => {
          handlePilihan("BB");
        }} 
        class="btn btn-accent rounded-md">BOLAK BALIK / BB</button>
    </div>
  </div>
</div>

<input type="checkbox" id="my-modal-alert" class="modal-toggle" bind:checked={isModalAlert}>
<div class="modal" on:click|self={()=>isModalAlert = false}>
    <div class="modal-box relative">
        <label for="my-modal-alert" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 class="text-lg font-bold">INFORMATION</h3>
        <p class="py-4">{@html msg_error}</p>
    </div>
</div>