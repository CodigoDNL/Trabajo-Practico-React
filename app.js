import {BrouserRouter, Routes, Route} from "React-router-dom";
import React from 'react';

const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();
const Index = require('./public/pages/index');
const Temas = require('./public/pages/temas'); 
const Galeria = require('./public/pages/galeria'); 
const Organizacion = require('./public/pages/organizacion');
const Ingresar = require('./public/pages/ingresar');
const Noticias = require('./public/pages/noticias');


function app(){
    return (
        <div className='App'>
            <Index/>;
            <Temas/>;
            <Galeria/>;
            <Organizacion/>;
            <Ingresar/>;
            <Noticias/>;
        </div>
    )
}

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render('index', {
        favicon: '/path/to/favicon.ico',
        title: 'Reacttemplate',
        headerImage: 'public/images/dia mundial sin tabaci.jpg',
        headerTitle: 'Deja de fumar',
        menuItems: [
            { name: 'Index', url: '/public/pages/index.js', active: true },
            { name: 'Galeria', url: '/public/pages/galeria.js', active: false },
            { name: 'Noticias', url: '/public/pages/noticias.js', active: false },
            { name: 'organizacion', url: '/public/pages/organizacion.js', active: false },
            { name: 'Temas', url: '/public/pages/temas.js', active: false },
            { name: 'Ingresar', url: '/public/pages/ingresar.js', active: false },

        ],
        mainImage: '/public/images/dia mundial sin tabaci.jpg',
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
app.listen(newFunction(), () => {
    console.log('Servidor escuchando en el puerto 3000');
});

function newFunction() {
    return 3000;
}
