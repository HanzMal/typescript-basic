function getFirstItem<T>(items:T[]) {
    return items[0]
}

function getRandomItem<T>(items: T[]) {
    const randomIndex = Math.floor(Math.random() * items.length)
    return items[randomIndex]
}

// pakai di dua tipe data yang berbeda
const listNumbers = [1,940,865]
const firstListNumbers = getFirstItem<number>(listNumbers)
console.log("firstListNumbers", firstListNumbers);

const randomIndexNumbers = getRandomItem<number>(listNumbers)
console.log("randomIndexNumbers", randomIndexNumbers);

const listMonth = ["January", "February", "March"]
const firstListMonth = getFirstItem<string>(listMonth)
console.log("firstListMonth", firstListMonth);

interface ApiResponse<T> {
    status: number
    message: string
    data: T
}

interface User {
    id: number
    username: string
}

interface Product {
    id: number
    name: string
    price: number
}

const getUserResponse: ApiResponse<User> = {
    status: 200,
    message: "success",
    data: {
        id: 123,
        username: "Jokowi"
    }
}

const getProductResponse: ApiResponse<Product> = {
    status: 200,
    message: "success",
    data: {
        id: 123,
        name: "Meja",
        price: 1500000
    }
}

// generic constraint
interface LengthItem {
    length: number
}

function getLengthItem<T extends LengthItem>(item:T): void {
    console.log(item.length);
}
getLengthItem("Halo")
getLengthItem(listMonth)
// getLengthItem(10) error karena number ga ada length nya

// generic dan class
class DataPlayer<T> {
    private data: T[] = []

    addItem(item: T) {
        this.data.push(item)
    }

    deleteItem(item: T){
        this.data.splice(this.data.indexOf(item), 1)
    }

    getItems() {
        return [...this.data]
    }
}

const LiverpoolLegend = new DataPlayer<string>()
LiverpoolLegend.addItem("Robbie Fowler")
LiverpoolLegend.addItem("Kuyt")
console.log(LiverpoolLegend.getItems())
LiverpoolLegend.deleteItem("Kuyt")
console.log(LiverpoolLegend.getItems())

// contoh kasus nyata wrapper fetch
async function apiRequest<T>(url: string): Promise<T> {
  const response = await fetch(url);
  console.log("isi response", response.status);
  
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}

// Penggunaan
async function getProfile() {
  const user = await apiRequest<User>("https://api.sampleapis.com/coffee/hot");
  console.log(user); // Type-safe!
}
getProfile()

// keyof mengambil value dari object dengan kunci yang valid
function getPropertyValue<T, K extends keyof T>(obj: T, key: K) {
    return obj[key]
}

const user1: User = { 
    id: 12345678,
    username: "user1jo"
}

const getPropertyValue1 = getPropertyValue(user1, "username")
console.log("getPropertyValue1 value", getPropertyValue1);
console.log("getPropertyValue1 type", typeof getPropertyValue1);
