export default async function savetransaksi(path,idtrxkeluaran,idcomppasaran,pasaran_code,pasaran_periode,
    client_token,client_company,client_username,client_ipaddress,client_device,
    client_timezone,totalkeranjang,keranjang) {
    
    const res = await fetch(path, {
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
    if (!res.ok) {
        const message = res.status;
        return message;
    }else{
        const json = await res.json();
        return json;
    }
}