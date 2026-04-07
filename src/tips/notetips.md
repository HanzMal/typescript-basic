Tips Typescript
1. Menguasai Utility types = mengubah tipe data yang sudah ada menjadi tipe data baru
    - Partial<T> mengubah semua properti dari T menjadi optional
    - Pick <Type, Keys> memilih properti yang mau diambil dan membuat tipe data baru
    - Omit<Type, Keys> mengambil semua properti dan membuang yang tidak diperlukan

2. Tipe narrowing = mempersempit kemungkinan misal ada yang string | number, nah tugasnya narrwoing itu memilih tipe data yang akan digunakan di dalam suatu blok kode tertentu.

discriminated Union = penambahan properti literal yang unik pada setiap tipe dalam union yang berguna sebagai pembeda antar tipe
