const argv = require("./config/yargs.js").argv
const {crear,getListado,actualizar,borrar} = require("./por-hacer/por-hacer")
const colors = require("colors")
console.log(argv)

let comando = argv._[0]

switch(comando)
{
    case "crear":
        console.log(crear(argv.descripcion))
    break;
    
    case "listar":
        let listado = getListado()

        for(let tarea of listado){
            console.log("==========Por hacer=====".green)
            console.log(tarea.descripcion)
            console.log("Estado : ",tarea.completado)
            console.log("========================".green)
        }
    break;
    case "actualizar":
        console.log(actualizar(argv.descripcion,argv.completado))
    break;
    case "borrar":
        console.log(borrar(argv.descripcion))       
    
    break;
    default:
        console.log("Comando no reconocido")
}