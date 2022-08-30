import React from "react";
import CardWidget from "./cardtWidget/CardWidget";
import logo from "./images/logo.jpg";


const Header = () => {
    return(
            <div className="container">
                <ul className="nav d-flex align-items-center">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#"><img src={logo} width="48" alt="Logo" /></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link link-nav" href="#">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link link-nav" href="#">Mascotas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link link-nav">Alimentos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link link-nav">Servicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link link-nav">Contacto</a>
                    </li>
                    <div>
                    <CardWidget />
                    </div>
                    
                </ul>
            </div>
    )
}

export default Header;