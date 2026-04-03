import { StatusLevel, hitungDiscount } from './disc-service.js'

const keranjang = [
    {nama: "Sepatu Nike Venom", harga: 500000},
    {nama: "Sepatu Adidas Adizero", harga: 1500000}
]

const prosesPembayaran = (total: number, status: StatusLevel): void => {
    const potongan = hitungDiscount(total, status)
    const totalPembayaran = total - potongan

    console.log("Total Harga", total);
    console.log("Total Diskon", potongan);
    console.log("Total Pembayaran", totalPembayaran);
    
}

const totalHargaReduce = keranjang.reduce((acc, curr) => acc + curr.harga, 0)
prosesPembayaran(totalHargaReduce, "GOLDEN")