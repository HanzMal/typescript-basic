import { getPositionOfLineAndCharacter } from "typescript";

class Laptop {
    merk: string;
    seri: string;
    warna: string

    constructor(merk: string, seri: string, warna: string){
        this.merk = merk
        this.warna = warna
        this.seri = seri
    }

    feature(): void {
        console.log(`Laptop baru ${this.merk} dengan warna`);
    }
}

// constructor dengan parameter properties
class Employee {
    constructor(public name: string, public position: string, private salary: number) {}

    greeting(): void {
        console.log(`Selamat ${this.name}, posisi anda saat ini sebagai ${this.position}`);
    }
}

class FootballPlayer {
    constructor(public name: string, protected salary: number) { }

    salaryInfo(){
        console.log(`${this.name}, Gaji: ${this.salary}`);
    }
} 

class GoalKeeper extends FootballPlayer {
    appearances: number = 1
    private bonus: number = 1000000
    private position: string = "GoalKeeper"

    constructor(name: string, salary: number, apps: number){
        super(name, salary)
        this.appearances = apps
    }

    // override
    salaryInfo(): void {
        const totalSalary = this.salary + (this.appearances * this.bonus)
        console.log(`Name: ${this.name}, position: ${this.position} with appearance: ${this.appearances}. He has salary: ${totalSalary}`);
    }
}

const player1 = new GoalKeeper("Van Der Sar", 20000000, 10 )
player1.salaryInfo()

// getter dan setter
class Product {
    private _price: number = 0

    get makePrice(): string{
        return `Rp${this._price}`
    }

    set makePrice(newPrice: number) {
        if (newPrice < 0) {
            console.log("Harga tidak boleh dibawah 0");
            return ;
        }
        this._price = newPrice
    }
}

const TV1 = new Product()
TV1.makePrice = 1000000
TV1.makePrice = -1000000
console.log(TV1.makePrice);

