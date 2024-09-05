import React from 'react';  

const Galeria = () => {  
  return (  
      <div>
      <header>  
        <div className="holder">  
          <img src="public/images/dia mundial sin tabaci.jpg" alt="Imagen del día mundial sin tabaco" />  
          <h1>No es bueno</h1>  
        </div>  
      </header>  

      <nav>  
        <div className="holder">  
          <ul>  
            <li><a href="public/pages/index.html">Home</a></li>  
            <li><a href="public/pages/temas.html">Temas</a></li>  
            <li><a className="activo" href="public/pages/galeria.html">Galeria</a></li>  
            <li><a href="public/pages/organizacion.html">Organizacion</a></li>  
            <li><a href="publib/pages/noticias.html">Noticias</a></li>  
            <li><a href="public/pages/Ingresar.html">Ingresar</a></li>  
          </ul>  
        </div>  
      </nav>  

      <div className="row">  
        <div className="column">  
          <img src="public/images/fumando1jpg.jpg" width="200" height="250" alt="Imagen fumando 1" />  
          <img src="images/fumando2.jpg" width="200" height="250" alt="Imagen fumando 2" />  
          <img src="images/fumando3.jpg" width="200" height="250" alt="Imagen fumando 3" />  
          <img src="images/fumando4.jpg" width="200" height="250" alt="Imagen fumando 4" />  
          <img src="images/fumando5.jpg" width="200" height="250" alt="Imagen fumando 5" />  
          <img src="images/fumando5.jpg" width="200" height="250" alt="Imagen fumando 6" />  
        </div>  

        <div className="column">  
          <img src="images/fumando1jpg.jpg" width="200" height="250" alt="Imagen fumando 1" />  
          <img src="images/fumando2.jpg" width="200" height="250" alt="Imagen fumando 2" />  
          <img src="images/fumando3.jpg" width="200" height="250" alt="Imagen fumando 3" />  
          <img src="images/fumando4.jpg" width="200" height="250" alt="Imagen fumando 4" />  
          <img src="images/fumando5.jpg" width="200" height="250" alt="Imagen fumando 5" />  
          <img src="images/fumando5.jpg" width="200" height="250" alt="Imagen fumando 6" />  
        </div> 
        
        <div className="column">  
          <img src="images/fumando1jpg.jpg" width="200" height="250" alt="Imagen fumando 1" />  
          <img src="images/fumando2.jpg" width="200" height="250" alt="Imagen fumando 2" />  
          <img src="images/fumando3.jpg" width="200" height="250" alt="Imagen fumando 3" />  
          <img src="images/fumando4.jpg" width="200" height="250" alt="Imagen fumando 4" />  
          <img src="images/fumando5.jpg" width="200" height="250" alt="Imagen fumando 5" />  
          <img src="images/fumando5.jpg" width="200" height="250" alt="Imagen fumando 6" />  
        </div> 

      <footer>  
        <p>Diseño Por Daniel Diaz - &copy;2024</p>  
      </footer>  
      </div>  
      </div>
    
  )  
} 


export default Galeria;  