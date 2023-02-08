//Menu 
const toggleMenuElement=document.getElementById('toggle-menu');
const mainMenuElement= document.getElementById('main-menu');
toggleMenuElement.addEventListener('click',()=>{
    mainMenuElement.classList.toggle('main-menu--show')
})
//Constructor del objeto
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


/*for(const Universidad of universidades){
    console.log(`Nombre: ${Universidad.nombre}`);
}*/
//Filtros
const uniPublicas= universidades.filter((el)=>el.arancel.includes('Publica'));
const uniPrivadas= universidades.filter((el)=>el.arancel.includes('Privada'));
//console.log(uniPublicas);
const uniArg= universidades.filter((el)=>el.arancel.includes('Argentina'));
const uniEsp= universidades.filter((el)=>el.arancel.includes('España'));

//Pregunta al usuario sobre su interes y mostrar por consola(que luego sera en DOM)
let interes= prompt('¿Se encuentra interesado en conocer sobre nuestras diferentes universidades?');

if (interes=="Si") {
 let opcionInteres= prompt('¿Deseas obtener más información sobre nuestras universidades publicas, nuestras universidades privadas o de todas?')
 switch (opcionInteres) {
    case opcionInteres=='Todas':
        for (const Universidad of universidades) {
            console.log(`Nombre: ${Universidad.nombre}`)
            console.log(`Promedio minimo necesario: ${Universidad.promedioMinimo}`)
            console.log(`Ubicación: ${Universidad.ubicacion}`)
            console.log(`Arancelada: ${Universidad.arancel}`)
            console.log(`Facultades: ${Universidad.facultades}`)
        }
        break;
    case opcionInteres=='Publica':
      for (const uniPublicas of universidades) {
        console.log(`Nombre: ${Universidad.nombre}`)
        console.log(`Promedio minimo necesario: ${Universidad.promedioMinimo}`)
        console.log(`Ubicación: ${Universidad.ubicacion}`)
        console.log(`Arancelada: ${Universidad.arancel}`)
        console.log(`Facultades: ${Universidad.facultades}`)
      }
      break
      case opcionInteres =='Privada':
      for (const uniPrivadas of universidades) {
        console.log(`Promedio minimo necesario: ${Universidad.promedioMinimo}`)
        console.log(`Ubicación: ${Universidad.ubicacion}`)
        console.log(`Arancelada: ${Universidad.arancel}`)
        console.log(`Facultades: ${Universidad.facultades}`)
      }
    
 
    default:
        break;
    }
    
} 
//Posibles universidades según tu promedio escolar
let promedio = prompt('¿Sabes tu promedio de secundaria? Responde "Si" o "No"?');

if (promedio !== "Si") {
    let calcularPromedio = parseInt(prompt("Coloca el numero de cantidad de materias que tuviste en ultimo año"));
    let notas = 0;
    let resulPromedio=0;
    for (let i = 0; i < calcularPromedio; i++) {
        notas += parseInt(prompt('Ingresa tus notas'));
    }
    function sacarPromedio(notas, calcularPromedio) {
        let resulPromedio = notas/calcularPromedio;
        return resulPromedio;
    }
    let finalPromedio = sacarPromedio(notas, calcularPromedio);
    let exit = false;
    while (!exit) {
    switch (true) {
        case finalPromedio >= 1 && finalPromedio <= 3:
            console.log ('Con un promedio de 1 a 3 te recomendamos la Universidad A');
            exit = true;
            break;
        case finalPromedio >= 4 && finalPromedio <= 6:
            console.log ('Con un promedio de 4 a 6 te recomendamos la Universidad B');
            exit = true;
            break;
        case finalPromedio >= 7 && finalPromedio <= 8:
            console.log ('Con un promedio de 7 a 8 te recomendamos la Universidad C');
            exit = true;
            break;
        case finalPromedio >= 9 && finalPromedio <= 10:
            console.log ('Con un promedio de 9 a 10 te recomendamos la Universidad D');
            exit = true;
            break;
        default:
            finalPromedio = parseInt(prompt('Escribe un valor entre 1 a 10 o escribe "Salir" para salir'));
            break;
    }
}
}else {
    let numPromedio = (prompt('Coloca tu promedio  o escribe "Salir" para salir'));
    let exit = false;
    while (!exit) {
            switch (true) {
                case numPromedio >= 1 && numPromedio <= 3:
                    console.log ('Con un promedio de 1 a 3 te recomendamos la Universidad A');
                    exit = true;
                    break;
                case numPromedio >= 4 && numPromedio <= 6:
                    console.log ('Con un promedio de 4 a 6 te recomendamos la Universidad B');
                    exit = true;
                    break;
                case numPromedio >= 7 && numPromedio <= 8:
                    console.log ('Con un promedio de 7 a 8 te recomendamos la Universidad C');
                    exit = true;
                    break;
                case numPromedio >= 9 && numPromedio <= 10:
                    console.log ('Con un promedio de 9 a 10 te recomendamos la Universidad D');
                    exit = true;
                    break;
                case numPromedio=="Salir":
                    exit = true;
                    break
                default:
                    numPromedio = parseInt(prompt('Escribe un valor entre 1 a 10 o escribe "Salir" para salir'));
                    break;
            }
        }
    }
