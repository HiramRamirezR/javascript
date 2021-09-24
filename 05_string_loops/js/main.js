/* function reverse(word) {
    let result = '';
    for (let i = word.length - 1; i >=0; i--) {
     result += word[i];
    }
    console.log(result);
   }
   
reverse('reloj'); */

/*-----------------------------------Ejercicio 1
Deducir:
input: anaconda
output: true
input: belzeebub
output: true
input: koder
output: false
input: cerveza
output: false

let test = "anaconda"
function deducir(word){

if (word[0] === word[word.length-1]) {
   return true
} else {
    return false
}
}

console.log(deducir("anaconda"))
console.log(deducir("belzeebub"))
console.log(deducir("koder"))
console.log(deducir("cerveza")) */

//-----------------------------------Ejercicio 2

/* let num = Number(prompt("Ingresa un número del 1 al 10"))

for (let i = 1 ; i <= 10 ; i ++) {
    console.log(num + " x " + i + " = " + num*i)
} */


//-----------------------------------Ejercicio 3
/* let num = Number(prompt("Ingresa un número del 10 al 100"))
if (num >= 10 && num <= 100) {
    for (let i = 1; i <= num; i++) {
        if (i%2===2){
            console.log(i)
        }
    }
} */

//-----------------------------------Ejercicio 4

/* let cantidad = 12
let i = 0
let suma = ""

while (i < cantidad.length) {
    suma += Number(cantidad[i])
    i++
}
console.log(suma) */

//-----------------------------------Ejercicio 5

/* let asterix = prompt("Ingresa un símbolo")
let two = asterix
    while (asterix.length <= 10) {
    console.log(asterix)
    asterix = asterix + two
} */

/* for (i = "*"; i.length < 11; i += "*"){
    console.log(i)
} */

