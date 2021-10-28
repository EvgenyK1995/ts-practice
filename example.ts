const newArr: number[] = [1, 2, 3]

const sum: number = newArr.reduce((one: number, two: number) => {
    return one + two
})

console.log(sum)

interface Human {
    firstName: string
    lastName: string
    age?: number
}

let newUser: Human = { firstName: 'John', lastName: 'Do'}

console.log(newUser)
newUser.lastName = 'Doe'
console.log(newUser)
newUser.age = 30
console.log(newUser)