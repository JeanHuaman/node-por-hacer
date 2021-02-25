const argv = require("yargs").command("crear","Crear un elemento por hacer",{
            descripcion:{
                alias:"d",
                demand : true,
                desc: "Descripcion de la tarea por hacer"
            }
            })
            .command("actualizar","Actualizar las tareas por hacer",{
                descripcion:{
                    alias:"d",
                    demand : true,
                    desc: "Descripcion de la tarea por hacer"
                },
                completado:{
                    alias:"c",
                    default:true,
                    desc:"Marca como compleato o pendiente la tarea"
                }
            })
            .command("borrar","Borrar una tarea por hacer",{
                descripcion:{
                    alias:"d",
                    demand : true,
                    desc: "Descripcion de la tarea por hacer" 
                }
            })
            .help()
            .argv

module.exports ={
    argv
}