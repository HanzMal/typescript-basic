SOLID Principle
Single responsibility = 1 kelas atau 1 modul seharusnya hanya memiliki 1 tanggung jawab saja. 
Open-Closed = semua entitas (class, modul, fungsi) harus terbuka untuk ekstensi, namun tertutup untuk modifikasi

selalu pikirkan behavior yang dibutuhkan daripada memikirkan objek apa itu
jangan over-engineering
gunakan dependency injection sederhana 

Liskov Substitution
aturan yang mengharuskan subkelas (child class) dapat menggantikan kelas induknya (parent class) tanpa mengubah perilaku program. Dengan TypeScript, LSP memastikan subclass tidak melanggar kontrak interface/base class, mencegah error, dan menjaga konsistensi kode.

Interface Segregation = memecah interface yang besar menjadi interface dengan tanggung jawab yang lebih spesifik

Dependency Inversion Principle (DIP) dari SOLID:
"Bergantunglah pada abstraksi (interface), bukan pada implementasi konkret"
"Modul tingkat tinggi (logika bisnis) tidak boleh bergantung pada modul tingkat rendah (database, API eksternal). Keduanya harus bergantung pada abstraksi"