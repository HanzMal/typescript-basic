tuple = mirip seperti array dimana tipe data di dalamnya bisa berbeda dan jumlah datanya sudah ditentukan sejak awal

enum = tipe data yang berisi himpunan nilai konstant yang sudah ditentukan dari awal

interface = sebuah kontrak yang dibuat untuk mendefinisikan struktur serta aturan dari objek
aliases = memberikan nama baru pada sebuah tipe data dan jauh lebih fleksibel dalam bentuknya
fitur unik interface apabila ada 2 interface yang memiliki nama yang sama di file yang sama maka akan melakukan Declaration Merging
type alias bisa berbentuk union 

Kapan menggunakannya ?
Gunakan interface untuk mendefinisikan struktur object, komponen UI, API Response
Gunakan Type Alias jika mau pakai union, tuple, memetakan tipe data primitif

SOLID PRINCIPLE
- Single Responsibility Principle (SRP): Sebuah kelas harus memiliki satu, dan hanya satu, alasan untuk berubah. Artinya, satu kelas hanya boleh menangani satu fungsionalitas spesifik.
- Open/Closed Principle (OCP): Entitas perangkat lunak (kelas, modul, fungsi) harus terbuka untuk ekstensi (penambahan fitur baru), tetapi tertutup untuk modifikasi (mengubah kode yang sudah ada).
- Liskov Substitution Principle (LSP): Objek dari kelas turunan (subclass) harus dapat menggantikan objek dari kelas induk (superclass) tanpa merusak fungsionalitas program.
- Interface Segregation Principle (ISP): Klien tidak boleh dipaksa bergantung pada antarmuka (interface) yang tidak mereka gunakan. Lebih baik membuat banyak interface spesifik daripada satu interface umum yang besar. dipecah menjadi lebih spesifik
- Dependency Inversion Principle (DIP): Modul tingkat atas tidak boleh bergantung pada modul tingkat rendah. Keduanya harus bergantung pada abstraksi (interface), bukan pada implementasi konkret. 

gunakan interface untuk modelling data yang didapat dari backend

Chapter 4 Fungsi dan Modularitas Kode
gunakan kontrak type annotation untuk parameter serta return type di fungsi agar kita tidak menebak nebak.