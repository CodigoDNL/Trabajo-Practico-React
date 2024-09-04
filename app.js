//importar libreria
import express from "express";

//objetos para llamar los metodos de express

const app = express();

//ruta inicia
app.get("/", function(req,res){
        res.send("Ahora estas conectado");
})


//cofigurar el puerto usado para el servidor local
app.listen(3000, function(){
    console.log("El servidor es http://127.0.0.1:5500");
})