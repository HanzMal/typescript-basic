// type aliases
export type StatusLevel = "GOLDEN" | "SILVER" | "BRONZE" 

export function hitungDiscount(price: number, statusLevel: StatusLevel): number {
    switch(statusLevel){
        case "GOLDEN":
            return price * 0.3
        case "SILVER":
            return price * 0.2
        default:
            return price * 0.1
    }
}
