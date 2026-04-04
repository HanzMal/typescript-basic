let username = "Hanz";
let age = 29;
let username1 = "Paijo";
let age1 = 45;
let months = ["January", "February", "March"];
// array number with generic
let evenNumbers = [10, 20, 30];
// tuple = array yang jumlah element dan tipe datanya sudah ditentukan
const userResponseSuccess = [200, "success"];
// enum = Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
var Role;
(function (Role) {
    Role["Admin"] = "ADMIN";
    Role["User"] = "USER";
    Role["Guest"] = "GUEST";
})(Role || (Role = {}));
let userRole3 = Role.Guest;
console.log("userRole3", userRole3);
// tipe data unknown lebih aman dari any tapi baru bisa digunakan setelah memastikan tipe datanya
let greetingMorning = "Good Morning";
// console.log(greetingMorning.length); // error karena belum jelas apakah ini string beneran atau nggak
if (typeof greetingMorning === "string") {
    console.log("greetingMorning.length ", greetingMorning.length);
}
function greeting(name, age) {
    return `Halo saya ${name}, dan berusia ${age} tahun`;
}
console.log(greeting(username, age));
console.log(greeting(username1, age1));
export {};
//# sourceMappingURL=index.js.map