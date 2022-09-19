const express = require('express');//importa express
const app = express();//inicializa express o crea una instancia de él.

const tipoEquipos=[
{
    nombre:'Computo',
    Estado:true,
    fechaCreacion: new Date()
},
{
    nombre:'Computo',
    Estado:true,
    fechaCreacion: new Date()
}
]

app.get('/',(req,res)=>{
    return res.json(tipoEquipos)
});

//inicializa el servidor en el puerto 3000
app.listen(3000,()=>{
    console.log('Escuchando en el puerto 3000')
})