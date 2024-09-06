import React from 'react';

const Index = () => {
        return(
        <div className='home'>
            <header>
        <div className="holder">
            <img src="public/images/dia mundial sin tabaci.jpg" alt="" />

            <h1>Deja de Fumar</h1>
        </div>
    </header>

    <nav>  
        <div className="holder">  
          <ul>  
            <li><a href="public/pages/index.html">Home</a></li>  
            <li><a href="public/pages/temas.html">Temas</a></li>  
            <li><a className="activo" href="public/pages/galeria.html">Galeria</a></li>  
            <li><a href="public/pages/organizacion.html">Organizacion</a></li>  
            <li><a href="public/pages/noticias.html">Noticias</a></li>  
            <li><a href="public/pages/Ingresar.html">Ingresar</a></li>  
          </ul>  
        </div>  
      </nav>

    <main className="holder">
        <div>
            <img class="mano" src="public/images/shutterstock_735154426-1200x797.jpg" alt="" />
        </div>
        <div className="columnas">
            <section className="Bienvenidos">
                <h2>Bienvenidos</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas vel animi impedit repellendus illo
                    dolores nihil blanditiis expedita corporis fugiat non accusamus doloribus deserunt aut iure, quae
                    tempore ipsa at?</p>
            </section>
            <section className="testimonios">
                <h2>Testimonios</h2>
                <div class="testimonio">
                    <span className="cita">No podia dejarlo hasta que llegue aca</span>
                    <span className="autor"> Juan Moreira - deairefresco.com</span>

                </div>
            </section>
        </div>

    </main>

    <footer>
        <p>Diseño Por Daniel Diaz - &copy;2024</p>
    </footer>

        </div>
        );
    };

export default Index;