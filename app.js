const express = require("express");
const app = express();


app.get("/", function(req,res){
        res.send("Ahora estas conectado");
})


app.listen(3000, function(){
    console.log("El servidor es http:\\localhost:3000");
})
