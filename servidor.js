const express = require('express');
const app = express();
const hdbs = require('express-handlebars');


app.listen(3005, () => {
    console.log('Servidor http://localhost:3005');
});

app.engine("Handlebars",hdbs.engine({
    layoutsDir: __dirname + "/views" ,
    partialsDir: __dirname + "/views/componentes",
} ))
app.set("view engine", "Handlebars");

app.use('/css', express.static(__dirname + "/node_modules/bootstrap/dist/css"));
app.use('/public', express.static(__dirname + "/public"));
app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js"));
app.use("/js", express.static(__dirname + "/node_modules/jquery/dist"));
app.use("/js", express.static(__dirname + "/js/script.js"))


app.get('/', (req, res) => {
    res.render('Dashboard',{
         layout: 'Dashboard',
         
    productos: [
        { 
            articulo: "Banana", 
            precio: "1000",
            medida: "1", 
            cantidad: "kg" 
        },
        { articulo: "Cebollas", precio: "1200", medida: "1", cantidad: "kg" },
        { articulo: "Lechuga", precio: "500", medida: "1", cantidad: "unidad" },
        { articulo: "Papas", precio: "1500", medida: "1", cantidad: "kg" },
        { articulo: "Pimenton", precio: "1500", medida: "3", cantidad: "unidad" },
        { articulo: "Tomate", precio: "800", medida: "1", cantidad: "kg" },
      ],

        
    }
    )
});



