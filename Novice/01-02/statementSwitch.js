const rank = 2;
// Cara lain untuk menggunakan pengontrolan alur, adalah statement switch. 
switch (rank) {
    case 1:
        console.log("saya meraih medali emas")
        break;
// menjalankan code yang berbeda, tergantung pada nilai color. 
    case 2:
        console.log("saya meraih medali perak")
        break;
// menambahkan case setiap nilai yang ditambahkan
    case 3:
        console.log("sata meraih medali perunggu")
        break;
}
// break adalah perintah untuk mengakhiri setiap case di statement switch.
// Jika tidak ada break, code dari case berikutnya yang cocok juga akan terpanggil. Jangan lupa dengan break saat menggunakan statement switch.