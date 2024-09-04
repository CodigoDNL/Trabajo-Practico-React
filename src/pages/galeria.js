import React from 'react';  

const galeria = () => {  
  return (  
      <div>
      <header>  
        <div className="holder">  
          <img src="assets/img/dia mundial sin tabaci.jpg" alt="Imagen del día mundial sin tabaco" />  
          <h1>No es bueno</h1>  
        </div>  
      </header>  

      <nav>  
        <div className="holder">  
          <ul>  
            <li><a href="src/pages/index.html">Home</a></li>  
            <li><a href="src/pages/temas.html">Temas</a></li>  
            <li><a className="activo" href="src/pages/galeria.html">Galeria</a></li>  
            <li><a href="src/pages/organizacion.html">Organizacion</a></li>  
            <li><a href="src/pages/noticias.html">Noticias</a></li>  
            <li><a href="src/pages/Ingresar.html">Ingresar</a></li>  
          </ul>  
        </div>  
      </nav>  

      <div className="row">  
        <div className="column">  
          <img src="assets/img/fumando1jpg.jpg" width="200" height="250" alt="Imagen fumando 1" />  
          <img src="assets/img/fumando2.jpg" width="200" height="250" alt="Imagen fumando 2" />  
          <img src="assets/img/fumando3.jpg" width="200" height="250" alt="Imagen fumando 3" />  
          <img src="assets/img/fumando4.jpg" width="200" height="250" alt="Imagen fumando 4" />  
          <img src="assets/img/fumando5.jpg" width="200" height="250" alt="Imagen fumando 5" />  
          <img src="assets/img/fumando5.jpg" width="200" height="250" alt="Imagen fumando 6" />  
        </div>  

        <div className="row">  
        <div className="column">  
          <img src="assets/img/fumando1jpg.jpg" width="200" height="250" alt="Imagen fumando 1" />  
          <img src="assets/img/fumando2.jpg" width="200" height="250" alt="Imagen fumando 2" />  
          <img src="assets/img/fumando3.jpg" width="200" height="250" alt="Imagen fumando 3" />  
          <img src="assets/img/fumando4.jpg" width="200" height="250" alt="Imagen fumando 4" />  
          <img src="assets/img/fumando5.jpg" width="200" height="250" alt="Imagen fumando 5" />  
          <img src="assets/img/fumando5.jpg" width="200" height="250" alt="Imagen fumando 6" />  
        </div>   

        <div className="row">  
        <div className="column">  
          <img src="assets/img/fumando1jpg.jpg" width="200" height="250" alt="Imagen fumando 1" />  
          <img src="assets/img/fumando2.jpg" width="200" height="250" alt="Imagen fumando 2" />  
          <img src="assets/img/fumando3.jpg" width="200" height="250" alt="Imagen fumando 3" />  
          <img src="assets/img/fumando4.jpg" width="200" height="250" alt="Imagen fumando 4" />  
          <img src="assets/img/fumando5.jpg" width="200" height="250" alt="Imagen fumando 5" />  
          <img src="assets/img/fumando5.jpg" width="200" height="250" alt="Imagen fumando 6" />  
        </div>  
        

      <footer>  
        <p>Diseño Por Daniel Diaz - &copy;2024</p>  
      </footer>  
      </div>  
      </div>
      </div>
      </div>
  )  
} 


export default galeria;  