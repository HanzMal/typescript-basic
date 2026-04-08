class UserValidator {
    public validate(userData: UserData) {
        if (!userData.email.includes("@")) {
            throw new Error("Email tidak valid");
        }
    }
}

class UserRepository {
    public save(userData: UserData) {
        console.log(`${userData.name} Menyimpan user ke database...`);
    }
}

class EmailService {
    public sendWelcomeEmail(email: string) {
        console.log("Mengirim email ke " + email);
    }
}

// Sekarang, UserService hanya berperan sebagai 'koordinator'
class UserService {
    constructor(
        private validator: UserValidator,
        private repository: UserRepository,
        private emailService: EmailService,
    ) {
    }

    public register(userData: UserData) {
        this.validator.validate(userData);
        this.repository.save(userData);
        this.emailService.sendWelcomeEmail(userData.email);
    }
}

interface UserData {
    email: string;
    name?: string;
}

// const userService1 = new UserService()
// userService1

// Cara pakainya:
const validator = new UserValidator();
const repo = new UserRepository();
const email = new EmailService();

// Masukkan semua ke dalam UserService
const userService1 = new UserService(validator, repo, email);
userService1.register({ email: "hanz@dev.id", name: "Hanz" });

// const userService2 = new UserService(validator, repo, email);
// userService2.register({ email: "hanzdev.id", name: "Hanz" });

interface DiscountStrategy {
    getDiscount(amount: number): number;
}

class RegularDiscount implements DiscountStrategy {
    getDiscount(amount: number): number {
        return amount * 0.05;
    }
}

class PremiumDiscount implements DiscountStrategy {
    getDiscount(amount: number): number {
        return amount * 0.1;
    }
}

class VIPDiscount implements DiscountStrategy {
    getDiscount(amount: number): number {
        return amount * 0.2;
    }
}

// nambah class baru dan behavior baru
class MemberBaru implements DiscountStrategy {
    getDiscount(amount: number): number {
        return amount * 0.2;
    }
}

// Sekarang, DiscountCalculator tidak perlu tahu jenis pelanggan apa saja yang ada
class DiscountCalculator {
    public calculate(strategy: DiscountStrategy, amount: number): number {
        return strategy.getDiscount(amount);
    }
}

const calculator = new DiscountCalculator();
const totalBelanja = 100000;

// 1. Hitung diskon untuk Regular (5%)
const regularUser = new RegularDiscount();
console.log("Diskon Regular:", calculator.calculate(regularUser, totalBelanja)); // 5000

// 2. Hitung diskon untuk VIP (20%)
const vipUser = new VIPDiscount();
console.log("Diskon VIP:", calculator.calculate(vipUser, totalBelanja)); // 20000

// Liskov substitution
interface AnimalForest {
    run(): void
}

interface Karnivora extends AnimalForest {
    eatMeat(): void
}

class KarnivoraFour implements Karnivora {
    constructor(public spesies: string) {}
    run() {
        console.log(`${this.spesies} Run Fast`);
    }

    eatMeat(){
        console.log(`Eat Meat Now`);
    }
}

class Monkey implements AnimalForest {
    run(): void {
        console.log();
    }
} // solusi yang benar tanpa mengubah kontrak

// class Monkey2 implements 

const harimau1 = new KarnivoraFour("Harimau")
harimau1.run()
harimau1.eatMeat()

// merancang ulang hierarki kelas berdasarkan perilaku (behavior)

// Interface segregation
interface Machine {
    name: string
}

interface Printer extends Machine {
    
    print(): void;
}

interface Scanner extends Machine {
    name: string
    scan(): void;
}

interface FaxMachine extends Machine {
    name: string
    fax(): void;
}

// Printer jadul hanya butuh interface Printer
class BasicPrinter implements Printer {
    constructor (public name: string) {
    }
    print() {
        console.log("Mencetak dokumen...");
    }
}

const print1 = new BasicPrinter("Canon IP2770")

// Printer modern bisa mengimplementasikan banyak interface
class ModernOfficePrinter implements Printer, Scanner, FaxMachine {
    constructor(public name: string) {
    }
    print() {
        console.log("Mencetak dokumen dengan kualitas tinggi...");
    }

    scan() {
        console.log("Memindai dokumen ke PDF...");
    }

    fax() {
        console.log("Mengirim dokumen melalui faks...");
    }
}

// dependency inversion
// Abstraksi (Interface)
interface UserRepository {
    getById(id: number): Promise<User | null>;
    save(user: User): Promise<void>;
}

// Implementasi low-level (bisa diganti kapan saja)
class MySQLUserRepository implements UserRepository {
    async getById(id: number): Promise<User | null> {}
    async save(user: User): Promise<void> {}
}

class MongoUserRepository implements UserRepository {
    async getById(id: number): Promise<User | null> { }
    // ...
}

// High-level module (logika bisnis) hanya bergantung ke abstraksi
class UserServiceAPI {
    constructor(private repository: UserRepository) { }  // Dependency Injection

    async getUser(id: number) {
        return this.repository.getById(id);
    }
}