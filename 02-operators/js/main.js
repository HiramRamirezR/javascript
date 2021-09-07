/* console.log("Ejercicio 1")
let num1 = parseInt(prompt("Ingresa un número, por favor."))
let num2 = parseInt(prompt("Ingresa otro número."))

console.log("Ingresaste: " + num1 + " y " + num2)
console.log("Suma: " + (num1 + num2))
console.log("Resta: " + (num1 - num2))
console.log("Multiplicación: " + (num1 * num2))
console.log("División: " + (num1 / num2))
console.log("Módulo: " + (num1 % num2)) */

// --------------------------------

/* console.log("Ejercicio 2")
let number1 = parseInt(prompt("Ingresa un número, por favor."))
let number2 = parseInt(prompt("Ingresa otro número."))
console.log("Ingresaste: " + number1 + " y " + number2)

if (number1 > number2){
    console.log("El primer número es mayor")
} else {
    console.log("El primer número no es mayor.")
} */

// --------------------------------

/* console.log("Ejercicio 3")
let letter1 = prompt("Ingresa una letra, por favor.")
let letter2 = prompt("Ingresa otra letra.")
console.log("Ingresaste: " + letter1 + " y " + letter2)

if (letter1 > letter2){
    console.log("La segunda letra aparece antes en el alfabeto.")
} else {
    console.log("La primer letra aparece antes en el alfabeto.")
} */

// --------------------------------

/* console.log("Ejercicio 4")
let var1 = parseInt(prompt("Ingresa un número"))
let var2 = parseInt(prompt("Ingresa otro número"))
console.log("Ingresaste: " + var1 + " y " + var2)
let resultado = 0
if (var1 > var2){
    resultado = var1 / var2
} else if ( var1 < var2) {
    resultado = var1 + var2
} else {
    resultado = var1 * var2
}
console.log(resultado) */

// --------------------------------

/* console.log("Ejercicio 5")
let var1E5 = parseInt(prompt("Ingresa un número entre 1 y 100"))
let var2E5 = var1E5 % 2 */

/* num % 2 === 0 */

/* if (var1E5 < 1 || var1E5 > 100) {
    var1E5 = parseInt(prompt("Ingresa un número entre 1 y 100"))
}

elseif (var2E5 === 0) {
    console.log("El residuo de " + var1E5 + " / " + "2 es: " + var2E5 + " Entonces, el número es par.")
}

if (var2E5 === 1) {
    console.log("El residuo de " + var1E5 + " / " + "2 es: " + var2E5 + " Entonces, el número es impar.")
} */

// --------------------------------

/* console.log("Ejercicio 6")
let var1E6 = parseInt(prompt("Ingresa un número"))
let var2E6 = parseInt(prompt("Ingresa otro número"))
console.log("Ingresaste " + var1E6 + " y " + var2E6)

if (var1E6 > var2E6) {
    console.log("El primer número es mayor")
    console.log("El segundo número es menor")
} else if (var1E6 < var2E6) {
    console.log("El primer número es menor")
    console.log("El segundo número es mayor")
} else {
    console.log("Los números son iguales.")
} */

// --------------------------------

/* console.log("Ejercicio 7")
let nombre = prompt("Ingresa tu nombre")
let peso = parseInt(prompt("Ingresa tu peso en kg"))
let pesoLunar = 0
let pesoJupiter = 0
let pesoMarte = 0

pesoLunar = (peso * 1.62) / 9.81
pesoJupiter = (peso * 34.79) / 9.81
pesoMarte = (peso * 3.7) / 9.81
console.log("Tu nombre es: " + nombre + " y tu peso en la luna sería: " + pesoLunar + " kg.")
console.log("Tu peso en la Jupiter sería: " + pesoJupiter + " kg.")
console.log("Tu peso en Marte sería: " + pesoMarte + " kg.") */

// --------------------------------

/* console.log("Ejercicio 8")
let calificacion = parseInt(prompt("Ingresa tu calificación (0 a 100)"))
console.log("Tuviste " + calificacion + " puntos.")
if (calificacion >= 90) {
    console.log("Tienes una A")
} else if (calificacion >= 80 && calificacion < 90) {
    console.log("Tienes una B")
} else if (calificacion >= 70 && calificacion < 80) {
    console.log("Tienes una C")
} else if (calificacion >= 60 && calificacion < 70) {
    console.log("Tienes una D")
} else {
    console.log("Tienes una F")
} */