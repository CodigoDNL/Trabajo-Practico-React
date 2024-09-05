import React from 'react';  

const NoTabacoPage = ({ pageTitle, iconSrc, headerImageSrc, headerTitle, navLinks, columns, footerText }) => {  
  return (  
    <div>  
      <head>  
        <title>{pageTitle}</title>  
        <link rel="stylesheet" href="notabaco.css" />  
        <link rel="stylesheet" href="normalize.css" />  
        <link rel="icon" href={iconSrc} type="image/x-icon" />  
      </head>  
      <body>  
        <header className="holder">  
          <img src={headerImageSrc} alt="" />  
          <h1>{headerTitle}</h1>  
        </header>  
        <nav className="holder">  
          <ul>  
            {navLinks.map((link, index) => (  
              <li key={index}>  
                <a href={link.href} className={link.active ? 'activo' : ''}>{link.text}</a>  
              </li>  
            ))}  
          </ul>  
        </nav>  
        <div className="row">  
          {columns.map((col, colIndex) => (  
            <div className="column" key={colIndex}>  
              {col.images.map((img, imgIndex) => (  
                <img src={img.src} width="200px" height="250px" alt="" key={imgIndex} />  
              ))}  
            </div>  
          ))}  
        </div>  
        <footer>  
          <p>{footerText}</p>  
        </footer>  
      </body>  
    </div>  
  );  
};  

export default NoTabacoPage;