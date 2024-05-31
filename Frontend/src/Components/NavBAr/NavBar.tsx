import React, { useState } from 'react';
import Logo from "../../Imagenes/Mi campus/LogoC.png";
import LogoL from "../../Imagenes/Mi campus/LogoL.png";
import Menu from '../Menu-Burger/Menu';
import User from "../../Imagenes/Iconos/user.png"
import { useEffect } from 'react';

const Navbar: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token); 
    }, []);

    return (
        <nav className="bg-white flex justify-between items-center" style={{height: '80px'}}>
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                {isLoggedIn ? (
                            <>
                            <div className='flex items-center flex-start' style={{gap: '4em'}}>
                                <Menu/>
                                <a href="/"><img src={LogoL} alt="Logo" style={{maxWidth: '25%'}} /></a>
                            </div>
                            <ul className="flex items-center flex-end" style={{gap: '4em', alignItems: 'center', width: '12rem'}}>                            
                                <li className="mr-6"><a href="/" className="text-black font-semibold">Home</a></li>
                                <li>
                                    <a href="/perfil">
                                        <img src={User} style={{maxWidth: '80%', borderRadius:'2em'}}/>
                                    </a>
                                </li>
                            </ul>
                            </>
                        ) : (
                            <>
                            <a href='/'><img src={Logo} alt="Logo" style={{maxWidth: '25%'}} /></a>
                            <ul className="flex  items-center">
                                <li>
                                    <a href="/login">
                                        <button className="text-black font-semibold">Iniciar sesión</button>
                                    </a>
                                </li>
                            </ul>
                            </>
                )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
