// optional chaining
interface User {
    profile?: {
        bio?: string
    }
}

function getBio(user: User) {
    return user?.profile?.bio ?? "No bio Available"
}

// Seharusnya biarkan ts compiler yang melakukan inference tipe data
const name: string = "Ronaldo" // redundand
const number1: number = 9101 // redundand

// gunakan anotasi eksplisit untuk ini
function getDiscount(price: number): number {
    return price - (price * 0.15)
}