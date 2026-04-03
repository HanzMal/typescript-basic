console.log("contract interface");

// Interface
interface Seller {
    idSeller: number
    name: string
    email: string
}

const newSeller1: Seller = {
    idSeller: 1,
    name: "Joko Wi",
    email: "jokowi@gmail.com"
}
console.log(newSeller1);

enum Brand{
    nike = "NIKE",
    adidas = "ADIDAS",
    puma = "PUMA"
}

interface Product {
    readonly id: number
    name: string
    price: number
    brand?: Brand
    desc?: string // pakai ? jadi bisa diisi bisa ga
}

interface ProductElectronic extends Product {
    import: boolean
    importing(): void
}

let shoes1: Product = {
    id: 123,
    name: "Adidas Adizero",
    price: 1500000,
    brand: Brand.adidas,
    desc: "Running everytime"
}
console.log(shoes1);
shoes1.name = "Adidas Adizero Black 1"
// console.log(shoes1.id=1234); ga bisa diganti karena readonly
console.log(shoes1);

let televition1: ProductElectronic = {
    id: 987,
    name: "Coocaa Android TV 32 Inch",
    price: 2500000,
    import: true,
    importing: () => console.log("Import from China")
}
console.log(televition1.importing());

// Aliases
type City = {
    readonly id: number
    name: string
}

type Coordinate = {
    area: number
    province: string
    x: number
    y: number
}

type CityCoordinate = City & Coordinate
const city1: CityCoordinate = {
    id: 756,
    name: "Magelang",
    area: 18.56,
    province: "Jawa Tengah",
    x: 10004.5,
    y: 65743.5
}
console.log("city1", city1);

type StatusAPI1 = "success" | "loading"
type StatusAPI2 = "error"
type StatusAPI = StatusAPI1 & StatusAPI2

let data1: StatusAPI1 = "success"
console.log(data1);

type StatusSuccess = string | number
let data1a: StatusSuccess = "SUCCESS"