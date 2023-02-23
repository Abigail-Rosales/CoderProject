// Eventos y DOM del Menu 
const toggleMenuElement=document.getElementById('toggle-menu');
const mainMenuElement= document.getElementById('main-menu');
toggleMenuElement.addEventListener('click',()=>{
    mainMenuElement.classList.toggle('main-menu--show')
})

//Perteneciente a HTML infoUni
//Constructor del objeto Universidad
class Universidad {
    constructor (nombre, promedioMinimo,ubicacion,arancel, facultades){
        this.nombre=nombre
        this.promedioMinimo= promedioMinimo
        this.ubicacion=ubicacion
        this.arancel=arancel
        this.facultades=facultades
     }
}
//Array de  universidades
const universidades=[];
universidades.push(new Universidad("Universidad A", "1-3", "Barcelona, España", "Privada","Facultades= Dercho, Humanidades, Turismo"))
universidades.push(new Universidad("Universidad D","9-10","Buenos Aires, Argentina", "Privada","Facultades: Humanidades, Ciencias economicas, Informatica, Cocina"))
universidades.push(new Universidad("Universidad C","7-8","La Plata, Argentina","Publica","Facultades: Humanidades, Ciencias economicas, matematicas"))
universidades.push(new Universidad("Universidad B", "4-6"," Madrid, España", "Publica","Facultades: CIencias economicas, Derecho, Ciencias de la computación"))

//Stringfy JSON
  const universidadesJSON= JSON.stringify(universidades)
 // console.log(universidadesJSON)

//Parse JSON
const devolverUniversidades= JSON.parse(universidadesJSON)
const muestraUniveridades=JSON.parse(localStorage.getItem(devolverUniversidades))

// Filtros por arancel y por pais
const uniPublicas= universidades.filter((el)=>el.arancel.includes('Publica'));
const uniPrivadas= universidades.filter((el)=>el.arancel.includes('Privada'));

const uniArg= universidades.filter((el)=>el.arancel.includes('Argentina'));
const uniEsp= universidades.filter((el)=>el.arancel.includes('España'));


// if (interes=="Si") {
//  let opcionInteres= prompt('Presiona: \n 1-Todas las Universidades \n 2-Universidades Publicas \n 3-Universidades privadas' )
//  switch (opcionInteres) {
//     case 1:
//         for (const Universidad of universidades) {
//             console.log(`Nombre: ${Universidad.nombre}`)
//             console.log(`Promedio minimo necesario: ${Universidad.promedioMinimo}`)
//             console.log(`Ubicación: ${Universidad.ubicacion}`)
//             console.log(`Arancelada: ${Universidad.arancel}`)
//             console.log(`Facultades: ${Universidad.facultades}`)
//         }
//         break;
//     case 2:
//       for (const uniPublicas of universidades) {
//         console.log(`Nombre: ${Universidad.nombre}`)
//         console.log(`Promedio minimo necesario: ${Universidad.promedioMinimo}`)
//         console.log(`Ubicación: ${Universidad.ubicacion}`)
//         console.log(`Arancelada: ${Universidad.arancel}`)
//         console.log(`Facultades: ${Universidad.facultades}`)
//       }
//       break
//       case 3:
//       for (const uniPrivadas of universidades) {
//         console.log(`Promedio minimo necesario: ${Universidad.promedioMinimo}`)
//         console.log(`Ubicación: ${Universidad.ubicacion}`)
//         console.log(`Arancelada: ${Universidad.arancel}`)
//         console.log(`Facultades: ${Universidad.facultades}`)
//       }
    
 
//     default:
//         break;
//     }
    
// }  

//PRIMERA PREENTREGA
//Perteneciente a HTML PROMEDIO
//Posibles universidades según tu promedio escolar
function sacarPromedio(notas, calcularPromedio) {
    let resulPromedio = notas/calcularPromedio;
    return resulPromedio;
}
let exit = false;
let promedio =parseInt(document.getElementById("promedio"));
//Storage
let promedioStorage=sessionStorage(promedio);

//Arreglar while while (promedio>3 || promedio <1){ }

//variable para innerHTML
let resultados= document.getElementById("contenedorResultados")
// Agregue algunos eventos y DOM
// switch (promedio) {
//     case 1:
//         let numPromedio = parseInt(document.getElementById('numPromedio'));
//         while (!exit) {
//                 switch (true) {
//                     case numPromedio >= 1 && numPromedio <= 3:
//                       resultados.innerHTML="<p>Con un promedio de 1 a 3 te recomendamos la  <a href=# class='aUniver'> Universidad A </a></p>"
//                         // console.log ('Con un promedio de 1 a 3 te recomendamos la Universidad A');
//                         exit = true;
//                         break;
//                     case numPromedio >= 4 && numPromedio <= 6:
//                       resultados.innerHTML="<p>Con un promedio de 4 a 6 te recomendamos la  <a href=# class='aUniver'> Universidad B </a></p>"
//                         // console.log ('Con un promedio de 4 a 6 te recomendamos la Universidad B');
//                         exit = true;
//                         break;
//                     case numPromedio >= 7 && numPromedio <= 8:
//                         resultados.innerHTML="<p>Con un promedio de 7 a 8 te recomendamos la  <a href=# class='aUniver'> Universidad C </a></p>"
//                         // console.log ('Con un promedio de 7 a 8 te recomendamos la Universidad C');
//                         exit = true;
//                         break;
//                     case numPromedio >= 9 && numPromedio <= 10:
//                       resultados.innerHTML="<p>Con un promedio de 9 a 10 te recomendamos la <a href=# class='aUniver'> Universidad D </a></p>"
//                         // console.log ('Con un promedio de 9 a 10 te recomendamos la Universidad D');
//                         exit = true;
//                         break;
//                     case numPromedio>10:
//                         exit = true;
//                         break
//                 }
//             }
//         break;
//     //No sabe promedio
//     case 2:
//         let calcularPromedio = parseInt(document.getElementById("materiasUltimoAño"));
//        let calculoStorage=sessionStorage(calcularPromedio);
//         let notas = 0;
//         let resulPromedio=0;
//         for (let i = 0; i < calcularPromedio; i++) {
//             notas += parseInt(document.getElementById('notas'));
//         }
//         let finalPromedio = sacarPromedio(notas, calcularPromedio);
    
//         while (!exit) {
//         switch (true) {
//             case finalPromedio >= 1 && finalPromedio <= 3:
//               resultados.innerHTML="<p>Con un promedio de 1 a 3 te recomendamos la  <a href=# class='aUniver'> Universidad A </a></p>";
//                 exit = true;
//                 break;
//             case finalPromedio >= 4 && finalPromedio <= 6:
//               resultados.innerHTML="<p>Con un promedio de 4 a 6 te recomendamos la  <a href=# class='aUniver'> Universidad B </a></p>"
//                 exit = true;
//                 break;
//             case finalPromedio >= 7 && finalPromedio <= 8:
//               resultados.innerHTML="<p>Con un promedio de 7 a 8 te recomendamos la  <a href=# class='aUniver'> Universidad C</a></p>"
//                 exit = true;
//                 break;
//             case finalPromedio >= 9 && finalPromedio <= 10:
//               resultados.innerHTML="<p>Con un promedio de 9 a 10 te recomendamos la  <a href=# class='aUniver'> Universidad D </a></p>"
//                 exit = true;
//                 break
//             }

//         }
//     break
//     default:
//         let incorrecto= alert('Aprete "ok" e ingrese un numero que este dentro de los parámetros')
//         let promedio =parseInt(document.getElementById("promedio"));
//         break;
//  }
