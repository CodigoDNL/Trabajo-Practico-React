const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();
const Index = require('./public/pages/index');  // Importa las rutas específicas para manejar las operaciones CRUD de noticias.
const Temas = require('./public/pages/temas'); const noticiasRoutes = require('./routes/Noticia');  // Importa las rutas específicas para manejar las operaciones CRUD de noticias.
const Galeria = require('./public/pages/galeria'); 
const Organizacion = require('./public/pages/organizacion');
const Ingresar = require('./public/pages/ingresar');
const Noticias = require('./public/pages/noticias');



app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


app.get('/', (req, res) => {
    res.render('home', {
        favicon: '/path/to/favicon.ico',
        title: 'Reacttemplate',
        headerImage: 'public/image/dia mundial sin tabaci.jpg',
        headerTitle: 'Deja de fumar',
        menuItems: [
            { name: 'Index', url: '/public/pages/index', active: true },
            { name: 'Galeria', url: '/public/pages/galeria', active: false },
            { name: 'Noticias', url: '/public/pages/noticias', active: false },
            { name: 'organizacion', url: '/public/pages/organizacion', active: false },
            { name: 'Temas', url: '/public/pages/temas', active: false },
            { name: 'Ingresar', url: '/public/pages/ingresar', active: false },

        ],
        mainImage: '/public/image/dia mundial sin tabaci.jpg',
        welcomeText: 'Este es mi proyecto en React.',
        testimonio: {
            cita: 'Este es el mejor servicio que he usado.',
            autor: 'Cliente Satisfecho'
        },
        footerAuthor: 'Daniel Diaz',
        year: new Date().getFullYear()
    });
});

app.use(express.static('public/images'));
app.use(express.static('public/stylesheet/normalize.css'));
app.use(express.static('public/stylesheets/notobaco.css'));

// Iniciar el servidor
app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});