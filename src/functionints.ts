// menggunakan type annotation untuk tipe data parameter dan return typenya
enum TimeGreet {
    morning = "MORNING",
    afternoon = "AFTERNOON",
    night = "NIGHT"
}

// optional parameter with ?.
function greeting(name: string, timeGreet?: TimeGreet, message: string = "Have a Nice Day"): void {
    console.log(`Good ${timeGreet || "Job"} ${name} ${message}`);  
}
greeting("Lionel Messi", TimeGreet.night)
greeting("Ronaldo")
// console.log(greeting("Lionel Messi", TimeGreet.afternoon));

// mengkombinasikan type aliases dan fungsi agar ketika mendefinisikan fungsi tidak perlu terllau panjang
type GetArea = (sisi: number, tinggi?: number, jarijari?: number) => number

const areaTriangle: GetArea = (sisi, tinggi = 1) => sisi * tinggi / 2
const areaRectangle: GetArea = (sisi) => sisi * sisi

const rect1 = areaRectangle(10)
console.log(rect1);
