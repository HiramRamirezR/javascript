/* console.log("Ejercicio 1")
let nombre = prompt("Ingresa tu nombre")
let apellidos = prompt("Ingresa tus apellidos")
nombre = nombre.toLowerCase()
apellidos = apellidos.toUpperCase()
console.log(nombre + " " + apellidos) */

// ---------------------------------------------------------------------------------------------

/* console.log("Ejercicio 2")
let nombreCompleto = prompt("Ingresa tu nombre completo")
console.log("Tu nombre tiene " + nombreCompleto.length + " caracteres.") */

// ---------------------------------------------------------------------------------------------

/* console.log("Ejercicio 3")
    function contarVocales(nombre){
        let nombre = prompt("Ingresa tu nombre completo")
        let vocales = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
        console.log(nombre.includes(""a", "e", "i", "o", "u", "A", "E", "I", "O", "U""))       
        return nombre() 
    }
      
nombre(nombre) */

/* let vowels = ['a', 'e', 'i', 'o', 'u'];

let text1 = 'pupi pupi';
let text2 = 'Ahora'
let text3 = 'Algunas pupis sOn mejorEs que otras dijo Hiram.'

function vowelCounter(str) {
  let counter = 0;
  let standardText = str.toLowerCase();
  for (let i = 0; i < standardText.length; i++) {
    if (vowels.includes(standardText[i])) counter ++;
  }
  return counter;
}

console.log(vowelCounter(text1));
console.log(vowelCounter(text2));
console.log(vowelCounter(text3)); */

// ---------------------------------------------------------------------------------------------

/* console.log("Ejercicio 4")
function students(str) {
    let counter = 0;
    let words = str.split(' ');
    
    for (let i = 0; i < words.length; i++) 
      if (words[i] === 'estudiante') counter ++;
    
    return `la palabra estudiante se repite ${counter} veces.`;
  }
  
  console.log(students(text));
  
  function coders(str) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++)
      if (words[i] === 'estudiante') words[i] = 'koder';
    let coderStr = words.join(' ');
    return coderStr;
  } 
  
  console.log(coders(text)); */

// ---------------------------------------------------------------------------------------------

/* console.log("Ejercicio 5")
let string1 = "String 1"
let string2 = "Some large string"
if (string1.length > string2.length) {
    console.log("el string " + string1 + " es el más largo")
} else {
    console.log("el string " + string2 + " es el más largo")
} */

// ---------------------------------------------------------------------------------------------

/* console.log("Ejercicio 6")
let str = "Programación Javascript"
function longestWord(){
    for 
} */

/* let text1 = 'buenas noches';
let text2 = 'feliz cumpleaños';

function longestWord(str) {
  let words = str.split(' ')
  let longest = '';
  words[0].length > words[1].length 
    ? longest = words[0] 
    : longest = words[1];
  return `la palabra mas larga es: ${longest}`;
}

console.log(longestWord(text1));
console.log(longestWord(text2)); */

// ---------------------------------------------------------------------------------------------

