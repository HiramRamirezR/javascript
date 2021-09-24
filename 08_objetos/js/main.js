const person = {
    name: "Hiram",
    lastName: "Ramírez",
    gender: "Hombre",
    age: 31,
    status: "Married",
    hobbies: [
        "tocar guitarra",
        "programar",
        "jugar ajedrez"
    ],
    socialNetwork: {
        github: "@HiramRamirezR",
        facebook: "hiramramirez123"
    },
    saludar: function() {
        console.log("Hola!")
    }
}

console.log(person)

console.log(person.status)
console.log(person["gender"])
person.saludar()
console.log(person.socialNetwork.github)
person.socialNetwork.youtube = "Educación Montessori"
console.log(person.socialNetwork.youtube)

/* person.name = person.name.toUpperCase()
console.log(person.name)
person.lastName = person.lastName.toUpperCase()
console.log(person.lastName) */
console.log("Hola, mi nombre es " + person.name + " " + person.lastName + " y tengo " + person.age + " años.")

let name = "Lucy"
let lastName = "Martínez"
let age = 30

const lucyObject = {
    name,
    lastName,
    age,
    hola: function() {
        console.log("Hola a todos!")
    }
}

console.log(lucyObject)
lucyObject.hobbies = ["coser", "fb", "vestidos", "moños"]
lucyObject.hobbies.push("tejer")
lucyObject.hobbies.pop()
lucyObject.hobbies.shift()
lucyObject.hobbies.push("coser")
lucyObject.hobbies.shift()
lucyObject.hobbies.push("tejer")
lucyObject.gender = "Mujer"
lucyObject.hola()
console.log("Hola, soy " + name + " " + lastName + " y tengo " + age + " años.")