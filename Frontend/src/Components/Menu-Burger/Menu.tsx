import React, { useState } from 'react';
import './Menu.css';
import Vector from "../../Imagenes/Iconos/vector.png";
import { Link } from 'react-router-dom';

const Menu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    // const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // const toggleSubMenu = () => {
    //     setIsSubMenuOpen(!isSubMenuOpen);
    // };

    return (
        <div>
            <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <div className={`navbar ${isOpen ? 'open' : ''}`} style={{ paddingTop: '1.2em' }}>
                <Link to="/dash">
                    Menu Principal <img src={Vector} style={{ width: '10px', height: '14px' }} />
                </Link>
                <Link to="/materias">
                    Materias <img src={Vector} style={{ width: '10px', height: '14px' }} />
                </Link>

                {/* {isSubMenuOpen && (
                    <div className="submenu">
                        <a href="/dash">General</a>
                        <a href="/materias">Materias</a>
                    </div>
                )} */}
                <Link to="/alumno">
                    Perfil <img src={Vector} style={{ width: '10px', height: '14px' }} />
                </Link>
                <Link to="/profesor/notas">
                    Gestión de notas <img src={Vector} style={{ width: '10px', height: '14px' }} />
                </Link>
                {/* <a href="#services">Notas <img src={Vector} style={{ width:'10px', height: '14px'}}/></a> */}
            </div>
        </div>
    );
};

export default Menu;
