// Eventos del Menu 
const toggleMenuElement=document.getElementById('toggle-menu');
const mainMenuElement= document.getElementById('main-menu');
toggleMenuElement.addEventListener('click',()=>{
    mainMenuElement.classList.toggle('main-menu--show')
})
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

//Filtros por arancel y por pais
const uniPublicas= universidades.filter((el)=>el.arancel.includes('Publica'));
const uniPrivadas= universidades.filter((el)=>el.arancel.includes('Privada'));

const uniArg= universidades.filter((el)=>el.arancel.includes('Argentina'));
const uniEsp= universidades.filter((el)=>el.arancel.includes('España'));

//Pregunta al usuario sobre su interes y mostrar por consola
let interes= prompt('¿Se encuentra interesado en conocer sobre nuestras diferentes universidades?');

if (interes=="Si") {
 let opcionInteres= prompt('Presiona: \n 1-Todas las Universidades \n 2-Universidades Publicas \n 3-Universidades privadas' )
 switch (opcionInteres) {
    case 1:
        for (const Universidad of universidades) {
            console.log(`Nombre: ${Universidad.nombre}`)
            console.log(`Promedio minimo necesario: ${Universidad.promedioMinimo}`)
            console.log(`Ubicación: ${Universidad.ubicacion}`)
            console.log(`Arancelada: ${Universidad.arancel}`)
            console.log(`Facultades: ${Universidad.facultades}`)
        }
        break;
    case 2:
      for (const uniPublicas of universidades) {
        console.log(`Nombre: ${Universidad.nombre}`)
        console.log(`Promedio minimo necesario: ${Universidad.promedioMinimo}`)
        console.log(`Ubicación: ${Universidad.ubicacion}`)
        console.log(`Arancelada: ${Universidad.arancel}`)
        console.log(`Facultades: ${Universidad.facultades}`)
      }
      break
      case 3:
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
  
