const hewan = [
    {nama: 'zebra', umur: 20},
    {nama: 'jerapah', umur: 41},
    {nama: 'elang', umur: 72},
];

for (let i = 0; i < hewan.length ; i++) {

    const binatang = hewan[i];

    console.log(`Nama saya adalah $ {binatang.nama}`);

    console.log(`saya berusia $ {binatang.umur}tahun`);
}