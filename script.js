function pesanMenu(namaMenu, harga){

    // Membuat nomor pesanan random
    let nomorPesanan = "ORD-" + Math.floor(Math.random() * 100000);

    // Format rupiah
    let formatHarga = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR'
    }).format(harga);

    // Popup pesanan
    alert(
        "PESANAN BERHASIL! ☕\n\n" +
        "Nomor Pesanan : " + nomorPesanan + "\n" +
        "Menu : " + namaMenu + "\n" +
        "Harga : " + formatHarga + "\n\n" +
        "Terima kasih sudah memesan di RynCafe!"
    );
}