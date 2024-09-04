import React from 'react';  

function temas() {  
  return (  
    <main>  
      <header>  
        <div className="holder">  
          <img src="assets/img/dia mundial sin tabaci.jpg" alt="Imagen del día mundial sin tabaco" />  
          <h1>Deci que no</h1>  
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

      <main className="holder">  
        <h2>Temas</h2>  
        <div className="temas">  
          <img src="assets/img/CAMPAÑA.jpg" alt="Campaña" />  
          <div className="info">  
            <h4>Lorem ipsum dolor sit amet.</h4>  
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque quaerat quas voluptate explicabo, nobis qui assumenda animi exercitationem adipisci quis.</p>  
          </div>  
        </div>  
      </main>  

      <main className="holder">  
        <h2>Temas</h2>  
        <div className="temas">  
          <img src="assets/img/cigarrillo.jpg" alt="Cigarrillo" />  
          <div className="info">  
            <h4>Lorem ipsum dolor sit amet.</h4>  
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque quaerat quas voluptate explicabo, nobis qui assumenda animi exercitationem adipisci quis.</p>  
          </div>  
        </div>  
      </main>  

      <main className="holder">  
        <h2>Temas</h2>  
        <div className="temas">  
          <img src="assets/img/manos ayuda.jpg" alt="Manos de ayuda" />  
          <div className="info">  
            <h4>Lorem ipsum dolor sit amet.</h4>  
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque quaerat quas voluptate explicabo, nobis qui assumenda animi exercitationem adipisci quis.</p>  
          </div>  
        </div>  
      </main>  

      <footer>  
        <p>Diseño Por Daniel Diaz - &copy;2024</p>  
      </footer>  
      
    </main>  
  );  
}  

export default temas;  
