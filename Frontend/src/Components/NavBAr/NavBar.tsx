import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Logo from "../../Imagenes/Mi campus/LogoC.png";
import LogoL from "../../Imagenes/Mi campus/LogoL.png";
import Menu from '../Menu-Burger/Menu';
import ProfileInitials from '../Iniciales/ProfileInitial';
import Off from "../../Imagenes/Iconos/deslogueo.png";
import { useAppSelector } from '../../Redux/hooks';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { notAuthenticated } from '../../Redux/auth';

const MySwal = withReactContent(Swal);

interface User {
    name: string;
    last_name: string;
    email: string;
}

const Navbar: React.FC = () => {
    const { isLogged } = useAppSelector((state) => state.auth);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [userData, setUserData] = useState<User | null>(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (isLogged === true) setIsLoggedIn(true);

        const userDataFromStorage = localStorage.getItem('user');
        if (userDataFromStorage) {
            setUserData(JSON.parse(userDataFromStorage));
        }
    }, [isLogged]);

    const logout = () => {
        MySwal.fire({
            title: '¿Quieres cerrar tu sesión?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí',
            cancelButtonText: 'No',
            reverseButtons: true,
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem('user');
                setIsLoggedIn(false);
                setUserData(null);
                dispatch(notAuthenticated("deslogueo"));
                MySwal.fire(
                    '¡Sesión cerrada!',
                    'Has cerrado tu sesión correctamente.',
                    'success'
                ).then(() => navigate('/'));
            }
        });
    };

    return (
        <>
            <nav className="bg-white flex justify-between items-center h-20">
                <div className="container mx-auto">
                    <div className="flex items-center justify-around" style={{ gap: '52em' }}>
                        {isLoggedIn ? (
                            <>
                                <div className="flex items-center w-48 justify-between">
                                    <Menu />
                                    <Link to="/user" className="ml-8"><img src={LogoL} alt="Logo" className='h-[3em]' /></Link>
                                </div>
                                <ul className="flex items-center" style={{ width: '21em' }}>
                                    <li className="mr-6"><Link to="/user" className="text-black font-semibold">Home</Link></li>
                                    <li className="mr-6">
                                        <Link to="/alumno">
                                            {userData && (
                                                <ProfileInitials name={userData.name} lastName={userData.last_name} />
                                            )}
                                        </Link>
                                    </li>
                                    <li style={{ marginLeft: '-1.3em' }}>
                                        <ul className="flex flex-col items-left">
                                            <li className='font-semibold text-sm'>{userData ? userData.email : ""}</li>
                                            <li className='text-sm'>{userData ? (userData.name + " " + userData.last_name) : ""}</li>
                                        </ul>
                                    </li>
                                    <li className="ml-4">
                                        <button onClick={logout}>
                                            <img src={Off} alt="Logout" className='h-8 w-8' />
                                        </button>
                                    </li>
                                </ul>
                            </>
                        ) : (
                            <>
                                <a href='/'><img src={Logo} alt="Logo" style={{ maxWidth: '25%' }} /></a>
                                <ul className="flex items-center">
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
            <hr className="border-gray-400" />
        </>
    );
};

export default Navbar;
