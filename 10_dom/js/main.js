/* let h1 = document.createElement('h1')
let text = document.createTextNode('Hola mundo')

h1.appendChild(text)
document.body.appendChild(h1) */

/*  createElement('') para crear elementos
 createTextNode('') para crear los textos
 appendChild(variable) para relacionar  */




 let mentorsArray = [
     {
         name: "Angel Resendiz",
         scores: [
             {
                 signature:  "HTML",
                 score: 10
             },
             {
                 signature:  "CSS",
                 score: 10
             },
             {
                 signature:  "JS",
                 score: 9
             },
         ]
     },
     {
         name: "Elda Corona",
         scores: [
             {
                 signature:  "HTML",
                 score: 10
             },
             {
                 signature:  "CSS",
                 score: 9
             },
             {
                 signature:  "JS",
                 score: 10
             },
         ]
     },
     {
         name: "Alfred Altamirando",
         scores: [
             {
                 signature:  "HTML",
                 score: 9
             },
             {
                 signature:  "CSS",
                 score: 10
             },
             {
                 signature:  "JS",
                 score: 10
             },
         ]
     },
     {
         name: "Tux Tuxtla",
         scores: [
             {
                 signature:  "HTML",
                 score: 10
             },
             {
                 signature:  "CSS",
                 score: 8
             },
             {
                 signature:  "JS",
                 score: 10
             },
         ]
     },
     {
         name: "Fernanda Palacios",
         scores: [
             {
                 signature:  "HTML",
                 score: 10
             },
             {
                 signature:  "CSS",
                 score: 9
            },
            {
                 signature:  "JS",
                 score: 10
             },
         ]
     }
 ]

/* <table>
<thead>
  <tr>
    <td>Mentor</td>
    <td>HTML</td>
    <td>CSS</td>
    <td>JS</td>
    <td>Promedio</td>
  </tr>
</thead>
<tbody>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</tbody>
</table> */

/* --------------------------------------------------------------------------------------------Notas de Fer -------------------------------------------------------------------*/

 let namesArray = [
    "Elias",
    "Pao",
    "Nan",
    "Adolfo"
]

let ul = document.createElement("ul")

namesArray.forEach(name=> {
    let li = document.createElement("li")
    let text = document.createTextNode(name)

    li.appendChild(text)
    ul.appendChild(li)
})

article.appendChild(ul)

/* --------------------------------------------------------------------------------------------Fin notas de Fer -------------------------------------------------------------------*/

let table = document.createElement ("table")
let thead = document.createElement ("name")


