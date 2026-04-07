let date = new Date();

// Penerapan Partial
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
}
 
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}
 
const todo1 = {
  title: "organize desk",
  description: "clear clutter",
  completed: true,
  createdAt: date
};
 
const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});
console.log(todo2); // { title: 'organize desk', description: 'throw out trash' }


// Pick
type TodoPreview = Pick<Todo, "title" | "completed">;
 
const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};

// omit
type TodoInfo = Omit<Todo, "completed" | "createdAt">;
 
const todoInfo: TodoInfo = {
  title: "Pick up kids",
  description: "Kindergarten closes at 5pm",
};
console.log(todoInfo);

// narrowing
function padLeft(padding: number | string, input: string): string {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }
  return padding + input;
}
console.log(padLeft(10, "makan"));

// function printAll(strs: string | string[] | null) {
//   if (typeof strs === "object") {
//     for (const s of strs) {
// 'strs' is possibly 'null'.
//       console.log(s);
//     }
//   } else if (typeof strs === "string") {
//     console.log(strs);
//   } else {
//     // do nothing
//   }
// }
// // const string1 = ["string", "string"]
// // printAll(string1)
// printAll("string")

// Menangani library eksternal tanpa tipe
// 1. cari definitely typed

// user defined type guards
interface Bird {
  name?: string,
  fly: () => void;
}

interface Fish {
  swim: () => void;
}

// Predikat tipe: 'pet is Fish'
function isFish(pet: Bird | Fish): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function move(pet: Bird | Fish) {
  if (isFish(pet)) {
    // Di dalam blok ini, TypeScript tahu 'pet' adalah Fish
    pet.swim();
  } else {
    // Di sini, TypeScript otomatis tahu 'pet' pasti Bird
    pet.fly();
  }
}

const pet1: Bird = {
  name: "Kakaktua", fly: function () {
    console.log(`${this.name || "Burung"} sedang terbang tinggi!`);
  }
}
move(pet1)

// type guard and narrowing
// typeof untuk tipe data primitif
function cetakNama(name: string | string[] | null) {
  if (typeof name === "string" && name !== null) {
    console.log(name);
  } else if (typeof name === "object" && name !== null) {
    for (let index = 0; index < name.length; index++) {
      console.log(`index ${index}-${name[index]}`)
    }
  } else {
    console.log("Harus string atau array string");
  }
}

cetakNama("Mohammed Salah")
cetakNama(["Mohammed Salah", "Firmino", "Sadio Mane"])

class Task {
  title: string = "Tugas Baru";
}

class Pengingat {
  waktu: Date = new Date();
}

// instanceof sangat cocok untuk class
function eksekusiItem(item: Task | Pengingat) {
  if (item instanceof Task) {
    // TypeScript menjamin 'item' memiliki properti 'title'
    console.log(item.title);
  } else {
    // TypeScript menjamin 'item' adalah 'Pengingat'
    console.log(item.waktu.toISOString());
  }
}

// operator in memeriksa properti
interface Admin {
  name: string;
  privileges: string[];
}

interface Karyawan {
  name: string;
  startDate: Date;
}

type Staf = Admin | Karyawan;

function cetakInfoStaf(staf: Staf) {
  console.log("Nama: " + staf.name);

  if ("privileges" in staf) {
    // staf otomatis dianggap sebagai Admin
    console.log("Hak Akses: " + staf.privileges.join(", "));
  }

  if ("startDate" in staf) {
    // staf otomatis dianggap sebagai Karyawan
    console.log("Mulai Bekerja: " + staf.startDate.toLocaleDateString());
  }
}

const staf1 = {
  name: "Han",
  privileges: ["admin1"],
  startDate: date
}
cetakInfoStaf(staf1)

// discriminated union
interface Tabung {
  kind: "Tabung"; // Discriminant
  radius: number;
  tinggi: number
}

interface Kubus {
  kind: "Kubus"; // Discriminant
  sisi: number;
}

type Bentuk = Tabung | Kubus;

function hitungLuas(bentuk: Bentuk) {
  switch (bentuk.kind) {
    case "Tabung":
      // TypeScript tahu pasti ini adalah Tabung
      return Math.PI * bentuk.radius ** 2 * bentuk.tinggi;
    case "Kubus":
      // TypeScript tahu pasti ini adalah Persegi
      return bentuk.sisi * bentuk.sisi * bentuk.sisi;
  }
}
console.log("luas Tabung:",hitungLuas({ kind: "Tabung", radius: 10, tinggi: 10 }));

// Exhaustive Checking
type Transportasi = "Mobil" | "Motor" | "Sepeda";

function hitungPajak(kendaraan: Transportasi) {
  switch (kendaraan) {
    case "Mobil":
      return 1000;
    case "Motor":
      return 500;
    case "Sepeda":
      return 0;
    default:
      // Jika Anda menambah tipe baru di 'Transportasi' tapi lupa menambah case di sini,
      // baris di bawah ini akan menyebabkan error saat kompilasi.
      const _exhaustiveCheck: never = kendaraan;
      return _exhaustiveCheck;
  }
}
hitungPajak("Motor")