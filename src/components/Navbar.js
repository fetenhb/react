import React from 'react'
import logo from "../components/img/logo.png";


const navbar = () => {
    return (
   
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      
      <a className="navbar-brand" href="#"><img src={logo} className="logo"></img></a>
      <div className="container">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Accueil <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#aPropos">Découvrir</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Evènements
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#marathon">Marathon COMAR</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Plus des évènements</a>
            </div>
          </li>
          
        </ul>
        
      </div>
      </div>
    </nav>
     
    


       
    )
}

export default navbar
