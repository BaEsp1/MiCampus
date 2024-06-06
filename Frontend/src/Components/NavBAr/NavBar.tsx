import React from 'react';
import Logo from "../../Imagenes/Mi campus/LogoC.png";
import LogoL from "../../Imagenes/Mi campus/LogoL.png";
import Menu from '../Menu-Burger/Menu';
import User from "../../Imagenes/Iconos/user.png"
import { useAuthStore } from '../../hooks';
import { Link } from 'react-router-dom';
// import { useEffect } from 'react';

const Navbar: React.FC = () => {

    const {isLogged} = useAuthStore();
    // useEffect(() => {
    //     const token = localStorage.getItem('token');
    //     setIsLoggedIn(!!token); 
    // }, []);

    return (
        <>
            <nav className="bg-white flex justify-between items-center" style={{ height: '80px' }}>
                <div className="container mx-auto">
                    <div className="flex items-center justify-between">
                        {isLogged ? (
                            <>
                                <div className='flex items-center flex-start' style={{ gap: '4em' }}>
                                    <Menu />
                                    <Link to="/">
                                        <img src={LogoL} alt="Logo" style={{ maxWidth: '25%' }} />
                                    </Link>
                                </div>
                                <ul className="flex items-center flex-end" style={{ gap: '4em', alignItems: 'center', width: '12rem' }}>
                                    <li className="mr-6"><a href="/dash" className="text-black font-semibold">Home</a></li>
                                    <li>
                                        <Link to="/alumno">
                                            <img src={User} style={{ maxWidth: '80%', borderRadius: '2em' }} />
                                        </Link>
                                        
                                    </li>
                                </ul>
                            </>
                        ) : (
                            <>
                                <a href='/'><img src={Logo} alt="Logo" style={{ maxWidth: '25%' }} /></a>
                                <ul className="flex  items-center">
                                    <li>
                                        <Link to="/login">
                                            <button className="text-black font-semibold">Iniciar sesión</button>
                                        </Link>
                                    </li>
                                </ul>
                            </>
                        )}
                    </div>
                </div>
            </nav>
            <hr style={{ borderColor: '#979797' }} />
        </>
    );
}

export default Navbar;
