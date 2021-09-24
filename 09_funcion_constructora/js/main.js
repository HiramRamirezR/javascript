const kodersCollection = [

    {

        name: 'Javier', 

        lastName: 'López',

        birthday: '1996/06/24',

        generation: 9,

        bootcamp: 'JavaScript',

        scores: [

            {

                module: 'Frontend',

                score: 90

            },

            {

                module: 'Backend',

                score: 80

            },

            {

                module: 'Cloud',

                score: 80

            },

        ]

    },

    {

        name: 'Ale', 

        lastName: 'Paez',

        birthday: '1998/05/12',

        generation: 1,

        bootcamp: 'Python',

        scores: [

            {

                module: 'Frontend',

                score: 90

            },

            {

                module: 'Backend',

                score: 100

            },

            {

                module: 'Cloud',

                score: 100

            },

        ]

    },

    {

        name: 'Juan Pablo', 

        lastName: 'Sánchez',

        birthday: '1994/10/26',

        generation: 10,

        bootcamp: 'JavaScript',

        scores: [

            {

                module: 'Frontend',

                score: 100

            },

            {

                module: 'Backend',

                score: 95

            },

            {

                module: 'Cloud',

                score: 80

            },

        ]

    },

    {

        name: 'Oscar', 

        lastName: 'Ruiz',

        birthday: '1996/06/24',

        generation: 1,

        bootcamp: 'Python',

        scores: [

            {

                module: 'Frontend',

                score: 98

            },

            {

                module: 'Backend',

                score: 100

            },

            {

                module: 'Cloud',

                score: 70

            },

        ]

    },

    {

        name: 'Mauro', 

        lastName: 'López',

        birthday: '1996/06/24',

        generation: 9,

        bootcamp: 'JavaScript',

        scores: [

            {

                module: 'Frontend',

                score: 80

            },

            {

                module: 'Backend',

                score: 90

            },

            {

                module: 'Cloud',

                score: 100

            },

        ]

    }

]


function Koder(name, lastName, birthday, generation, bootcamp, score_fe, score_be, score_cloud) {
    this.name = name
    this.lastName = lastName
    this.birthday = birthday
    this.generation = generation
    this.bootcamp = bootcamp
    this.score_fe = score_fe
    this.score_be = score_be
    this.score_cloud = score_cloud
}

    //Instancias
let Koder1 = new Koder('Hiram', 'Ramírez', '1989/11/23', 13, 'JavaScript', 80, 90, 100)
let Koder2 = new Koder('Javier', 'López', '1996/06/24', 9, 'Javascript', 90, 80, 80)
let Koder3 = new Koder('Ale', 'Paez', '1998/05/12', 1, 'Python', 90, 100, 100)
let Koder4 = new Koder('Juan Pablo', 'Sánchez', '1994/10/26', 10, 'Javascript', 100, 95, 80)
let Koder5 = new Koder('Oscar', 'Ruíz', '1996/06/24', 1, 'Python', 98, 100, 70)
let Koder6 = new Koder('Mauro', 'López', '1996/06/24', 9, 'Javascript', 80, 90, 100)


    function dateFormat(koderBirthday) {
        let arrDate = koderBirthday.split('/');
        let arrFormated = arrDate.forEach (num => parseInt(num));
        return arrFormated;
    }
    
    function calculate_age(dob) { 
        let diff_ms = Date.now() - dob.getTime();
        let age_dt = new Date(diff_ms); 
      
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }

    let dirtyDate = Koder1.birthday.split('/')

    parseInt(dirtyDate[0]), parseInt(dirtyDate[1]), parseInt(dirtyDate[2])

    console.log(calculate_age(new Date(parseInt(dirtyDate[0]), parseInt(dirtyDate[1]), parseInt(dirtyDate[2]))));
    
    
/*

Ejercicio en clase:

Teniendo la siguiente coleccion de Koders generar una coleccion de objetos de tipo Koder. Agregando además las siguientes funciones:

- Prototipo de tipo koder

Obtener la edad a partir de la fecha de nacimiento

Obtener promedio de sus scores

Colección de Koder que pertenezcan a JavaScript

Colección de Koder que pertenezcan a Python

*/




