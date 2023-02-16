function krediHesapla() {
    var txtKredi = document.getElementById("txtKredi").value ;
    var txtVadeList = document.getElementById("txtVadeList");
    vadeSayisi=txtVadeList.options[txtVadeList.selectedIndex].value;
    var faizliTutar,aylikTutar;

    if (vadeSayisi == 12) {
        faizliTutar = txtKredi*1.1;
        aylikTutar = faizliTutar/vadeSayisi;
    }
    else if (vadeSayisi == 24) {
        faizliTutar = txtKredi*1.2;
        aylikTutar = faizliTutar/vadeSayisi;
    }
    else if (vadeSayisi == 36) {
        faizliTutar = txtKredi*1.3;
        aylikTutar = faizliTutar/vadeSayisi;
    }
    else {
        faizliTutar = txtKredi*1.4;
        aylikTutar = faizliTutar/vadeSayisi;
    }

    document.getElementById('sonuc').innerHTML = "Ödenecek Tutar : " + faizliTutar +"<br>" + "Aylik ödeme tutarı : " + aylikTutar.toFixed(2); 
}








