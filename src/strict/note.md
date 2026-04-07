Strict : true di tsconfig.json
mencegah ts compiler untuk memberikan tipe any ke variabel yang tidak bisa ditebak tipe datanya
developer harus menangani null secara eksplisit

memindahkan kesalahan ketika runtime /  waktu eksekusi di aplikasi ke waktu kompilasi (menulis kode)

<!-- Menulis Eksplisit Tipe data -->
Kita harus tahu kapan menulis tipe data secara eksplisit dan kapan percaya kepada typescript compiler untuk menulis tipe data (inference)

<!-- Gunakan Anotasi eksplisit -->
 - parameter fungsi
 - return type
 - Public API / Interface

<!-- Immutability -->
 - readonly = mencegah perubahan value properti setelah inisialisasi
 - ReadonlyArray<T> = mencegah metode mutasi seperti push atau pop
 - as const = mengubah seluruh object menjadi literal yang tidak bisa diubah sama sekali

<!-- Perbedaan interface dengan type -->
- Declaration merging fitur bermata dua dimana ini hanya satu satunya di interface yang bisa menggabungkan properti dari interface yang sama menjadi 1 definisi tunggal. Bisa untuk melakukan augmentasi. menambahkan properti baru ke object global. 

- Type memungkinkan kita menggunakan union types dan fleksibilitas yang lebih luas. nama panggilan untuk tipe data apapun

<!-- Gunakan Interface -->
 - mendefinisikan Objek yang dapat diperluas
 - cocok untuk OOP = membutuhkan class yang memiliki kontrak tertentu
 - konsistensi

<!-- Gunakan type -->
 - Membutuhkan Union dan Intersection = misal string | number
 - mendefinisikan fungsi dan tuple lebih jelas
 - transformasi type = conditional types, mapped types, template literal types
 - data yang bersifat immutable

<!-- Narrowing -->
Tipe narrowing = mempersempit kemungkinan misal ada yang string | number, nah tugasnya narrwoing itu memilih tipe data yang akan digunakan di dalam suatu blok kode tertentu.
 - Type Guards (operator typeof dan instanceof)
 - User-defined type guards = fungsi kustom untuk validasi tipe
 - 