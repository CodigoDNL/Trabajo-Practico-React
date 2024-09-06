import React from 'react'; 

function Temas() {  
  return (  
    <main>  
      <header>  
        <div className="holder">  
          <img src="public/images/dia mundial sin tabaci.jpg" alt="Imagen del día mundial sin tabaco" />  
          <h1>Deci que no</h1>  
        </div>  
      </header>  

      <nav>  
        <div className="holder">  
          <ul>  
            <li><a href="public/pages/index.js">Home</a></li>  
            <li><a href="public/pages/temas.js">Temas</a></li>  
            <li><a className="activo" href="public/pages/galeria.js">Galeria</a></li>  
            <li><a href="public/pages/organizacion.js">Organizacion</a></li>  
            <li><a href="public/pages/noticias.js">Noticias</a></li>  
            <li><a href="public/pages/Ingresar.js">Ingresar</a></li>  
          </ul>  
        </div>  
      </nav>

      <main className="holder">  
        <h2>Temas</h2>  
        <div className="temas">  
          <img src="public/images/CAMPAÑA.jpg" alt="Campaña" />  
          <div className="info">  
            <h4>Lorem ipsum dolor sit amet.</h4>  
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque quaerat quas voluptate explicabo, nobis qui assumenda animi exercitationem adipisci quis.</p>  
          </div>  
        </div>  
      </main>  

      <main className="holder">  
        <h2>Temas</h2>  
        <div className="temas">  
          <img src="piblic/images/cigarrillo.jpg" alt="Cigarrillo" />  
          <div className="info">  
            <h4>Lorem ipsum dolor sit amet.</h4>  
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque quaerat quas voluptate explicabo, nobis qui assumenda animi exercitationem adipisci quis.</p>  
          </div>  
        </div>  
      </main>  

      <main className="holder">  
        <h2>Temas</h2>  
        <div className="temas">  
          <img src="public/images/manos ayuda.jpg" alt="Manos de ayuda" />  
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

export default Temas;  
