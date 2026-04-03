class adalah blue print/cetakan
object adalah instance atau hasil cetakannya

constructor adalah method khusus yang otomatis dipanggil ketika object dibuat

access modifier = typescript menyediakan jenis akses bagi programmer untuk mengakses data.ini berkaitan dengan encapsulation(menyembunyikan detail internal dan hanya diizinkan mengakses nya melalui akses khusus)
- public = data bisa diakses dari mana saja
- private = data hanya bisa diakses oleh class itu sendiri
- protected = hampir mirip private namun data masih bisa diakses oleh class turunannya

inheritance = membuat class baru berdasarkan class yang sudah ada. class baru ini bisa mewarisi properti dan sifat class sebelumnya. ini berkaitan dengan DRY(Dont Repeat Yourself). Misal kita sudah membuat class PlayerFootball. Lalu kita mau membuat class GoalKeeper. maka kita bisa mewarisi dari class PlayerFootball. 

Abstract Class ibarat class yang belum jadi dan menjadi kerangka dasar bagi class yang lain. Kita juga tidak bisa membuat instance / object dari Abstract Class

single responsibility class yaitu class hanya memiliki 1 tanggung jawab. misal class karyawan berarti hanya bertugas menampilkan data karyawan. kalau mau tugas email karyawan berarti harus bikin class baru class EmailService. 

Gunakan class untuk object yang memiliki perilaku/method. kalau hanya struktur data tanpa method bisa pakai interface atau Type alias
selalu gunakan prinsip enkapsulasi = protected dan private agar mencegah data bisa diakses serta berubah tiba tiba/mutasi side effect
jangan menggunakan inheritance terlalu dalam cukup 1 - 2 turunan saja. misal membuat class A lalu kemudian membuat class B hasil dari warisan class A. 