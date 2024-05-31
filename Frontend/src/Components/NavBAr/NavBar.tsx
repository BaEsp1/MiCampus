import React, { useState } from 'react';
import Logo from "../../Imagenes/Mi campus/LogoC.png";
import LogoL from "../../Imagenes/Mi campus/LogoL.png";
import Menu from '../Menu-Burger/Menu';
import User from "../../Imagenes/Iconos/user.png"

const Navbar: React.FC = () => {
    // Estado provisorio , cuando tengamos token simplemente se modifica :
    const [isLoggedIn] = useState<boolean>(true); 

    return (
        <nav className="bg-white flex justify-between items-center" style={{height: '80px'}}>
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                {isLoggedIn ? (
                            <>
                            <div className='flex items-center flex-start' style={{gap: '4em'}}>
                            <Menu/>
                            <img src={LogoL} alt="Logo" style={{maxWidth: '25%'}} />
                            </div>
                            <ul className="flex items-center flex-end" style={{gap: '4em', alignItems: 'center', width: '12rem'}}>                             {/* <li className="mr-6"><a href="#" className="text-black">Perfil</a></li>
                                <li><a href="/"><button className="text-black">Cerrar sesión</button></a></li> */}
                                <li className="mr-6"><a href="#" className="text-black font-semibold">Home</a></li>
                                <li><a href="/">
                                    <img src={User} style={{maxWidth: '80%', borderRadius:'2em'}}/>
                                    </a></li>
                            </ul>
                            </>
                        ) : (
                            <>
                            <img src={Logo} alt="Logo" style={{maxWidth: '7%'}} />
                            <ul className="flex  items-center">
                            <li><a href="/login"><button className="text-black font-semibold">Iniciar sesión</button></a></li>
                    </ul>
                    </>
                )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
