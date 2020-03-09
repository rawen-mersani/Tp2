import React from 'react';
import img_profil from './img_profil.jpg'

function Menu() {
  return (
    <div classNameName="menu">
        <div className="collapse navbar-collapse" >
            <ul className="navbar-nav">
                <li className="nav-item">
                    <img src={img_profil} className="profil"  alt=""/>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="#">Rawen</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="#">Accueil</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="#">Créer</a>
                </li>
               
            </ul>
        </div>
    </div>
  );
}

export default Menu;
