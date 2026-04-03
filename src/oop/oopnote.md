class adalah blue print/cetakan
object adalah instance atau hasil cetakannya

constructor adalah method khusus yang otomatis dipanggil ketika object dibuat

access modifier = typescript menyediakan jenis akses bagi programmer untuk mengakses data.ini berkaitan dengan encapsulation(menyembunyikan detail internal dan hanya diizinkan mengakses nya melalui akses khusus)
- public = data bisa diakses dari mana saja
- private = data hanya bisa diakses oleh class itu sendiri
- protected = hampir mirip private namun data masih bisa diakses oleh class turunannya

inheritance = membuat class baru berdasarkan class yang sudah ada. class baru ini bisa mewarisi properti dan sifat class sebelumnya. ini berkaitan dengan DRY(Dont Repeat Yourself). Misal kita sudah membuat class PlayerFootball. Lalu kita mau membuat class GoalKeeper. maka kita bisa mewarisi dari class PlayerFootball. 