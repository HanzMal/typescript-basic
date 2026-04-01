let username: string = "Hanz"
let age: number = 29
let username1: string = "Paijo"
let age1: number = 45

let months: string[] = ["January", "February", "March"]
// array number with generic
let evenNumbers: Array<number> = [10, 20, 30]

// tuple = array yang jumlah element dan tipe datanya sudah ditentukan
const userResponseSuccess: [number, string] = [200, "success"]

// enum = Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

enum Role {
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST"
}
let userRole3: Role = Role.Guest
console.log("userRole3", userRole3);

// tipe data unknown lebih aman dari any tapi baru bisa digunakan setelah memastikan tipe datanya
let greetingMorning: unknown = "Good Morning"
// console.log(greetingMorning.length); // error karena belum jelas apakah ini string beneran atau nggak

if (typeof greetingMorning === "string") {
    console.log("greetingMorning.length ", greetingMorning.length);
}


function greeting(name: string, age: number): string {
    return `Halo saya ${name}, dan berusia ${age} tahun`
}

console.log(greeting(username, age));
console.log(greeting(username1, age1));
