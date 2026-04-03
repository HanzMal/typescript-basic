// Mendeklarasikan tuple dengan tiga elemen bertipe string, number, dan boolean
let player: [string, number, boolean] = ["Ronaldo", 40, true];

// Mendeklarasikan tuple dengan nama elemen
let coordinat: [x: number, y: number] = [10010202, 2003030202];

// Mendeklarasikan tuple dengan elemen opsional
let person: [name: string, age?: number] = ["Andi"];

// Mendeklarasikan tuple dengan elemen sisa bertipe number
let numbers: [first: number, second: number, ...rest: number[]] = [
    1, 2, 3, 4, 5,
];

console.log("tipe tuple1", player);
console.log("tipe tuple2", coordinat);
console.log("tipe tuple3", person);
console.log("tipe tuple4", numbers);

// enum
// Mendeklarasikan enum string
enum Partai {
    pdip = "PDIP",
    demokrat = "DEMOKRAT",
    pkb = "PKB",
}

// Mendeklarasikan enum heterogen
enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES",
}

// menggunakan enum
let partaiPKB: Partai = Partai.pkb
console.log("partai: ", partaiPKB);

////////////////////////////////////////////////////////

// task enum, tuple, array
enum TaskStatus {
    Todo = "TODO",
    InProgress = "IN_PROGRESS",
    Done = "DONE",
    Revisi = "REVISI"
}
// contoh struktur task
const task1: [number, string, TaskStatus] = [1, "Belajar Typescript", TaskStatus.Todo]
// const myListTaskToday: Array<[number, string, TaskStatus]> = [
//     [1, "Belajar TS Object", TaskStatus.Done],
//     [2, "Belajar TS Design Pattern", TaskStatus.Todo]
// ]

const myListTaskToday: Array<[number, string, TaskStatus]> = []

// fungsi untuk memasukkan data tuple baru ke list myListTaskToday
function makeNewTask(title: string): Array<[number, string, TaskStatus]> {
    const id = parseInt(Date.now().toString().slice(-6) + Math.floor(Math.random() * 10))
    myListTaskToday.push([id, title, TaskStatus.Todo])
    return myListTaskToday
}
makeNewTask("Belajar TS Basic");
makeNewTask("Belajar TS Basic 2");
console.log(myListTaskToday);
