import React from 'react';  

function RegistrationForm() {  
  const handleSubmit = (e) => {  
    const form = e.target;  
    if (form.checkValidity() === false) {  
      e.preventDefault();  
      e.stopPropagation();  
      form.classList.add('was-validated');  
    }  
  };  

  return (  
    <>  
      <header>  
        <div className="holder">  
          <img src="img/dia mundial sin tabaci.jpg" alt="Imagen del día mundial sin tabaco" />  
          <h1>hablame</h1>  
        </div>  
      </header>  

      <nav>  
        <div className="holder">  
          <ul>  
            <li><a href="index.html">Home</a></li>  
            <li><a href="temas.html">Temas</a></li>  
            <li><a href="galeria.html">Galeria</a></li>  
            <li><a href="organizacion.html">Organizacion</a></li>  
            <li><a href="noticias.html">Noticias</a></li>  
            <li><a className="activo" href="Ingresar.html">Ingresar</a></li>  
          </ul>  
        </div>  
      </nav>  

      <div className="container">  
        <div className="title">Registro</div>  
        <form id="form-validation" noValidate onSubmit={handleSubmit}>  
          <div className="form-group">  
            <span>Nombre</span>  
            <input type="text" placeholder="ingrese Nombre" required />  
            <small>Por favor ingrese Nombre</small>  
          </div>  
          <div className="form-group">  
            <span>Usuario</span>  
            <input type="text" placeholder="Ingrese Usuario" required />  
            <small>Por favor ingrese Usuario</small>  
          </div>  
          <div className="form-group">  
            <span>Email</span>  
            <input type="email" placeholder="ingrese Email" required />  
            <small>Por favor ingrese Email</small>  
          </div>  
          <div className="form-group">  
            <span>Telefono</span>  
            <input type="number" placeholder="Ingrese Telefono" required />  
            <small>Por favor ingrese Telefono</small>  
          </div>  
          <div className="form-group">  
            <span>Contraseña</span>  
            <input type="password" placeholder="Ingrese Contraseña" required />  
            <small>Por favor ingrese Contraseña</small>  
          </div>  
          <div className="form-group">  
            <span>Confirmar contraseña</span>  
            <input type="password" placeholder="Ingrese Contraseña" required />  
            <small>Por favor confirme contraseña</small>  
          </div>  
          <div className="button">  
            <input type="submit" value="Registrarse" />  
          </div>  
        </form>  
      </div>  

      <footer>  
        <p>Diseño Por Daniel Diaz - &copy;2024</p>  
      </footer>  
    </>  
  );  
}  

export default RegistrationForm;  
