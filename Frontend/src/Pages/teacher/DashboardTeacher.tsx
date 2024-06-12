import React, { useState, useEffect } from 'react';
import Loader from "../../Imagenes/Loading/loading.gif"
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import { loadGrade } from '../../Redux/Actions/userActions';

interface User {
    name: string;
    last_name: string;
    id: string;
}

const DashboarTeacher: React.FC = () => {
    const [userData, setUserData] = useState<User | null>(null);
    const { loading} = useAppSelector(state => state.user)
    const dispatch = useAppDispatch();

    useEffect(() => {
        const userDataFromStorage = localStorage.getItem('user');
        if (userDataFromStorage) {
            const parsedUserData: User = JSON.parse(userDataFromStorage);
            setUserData(parsedUserData);
            dispatch(loadGrade(parsedUserData.id));
        }
        // dispatch(ready())
    }, []);

    return (<>
        {loading
            ? (<div className='flex justify-center flex-col items-center p-[14em]'>
                <img src={Loader} className='h-[13em] w-[13em]' />
                <h1 className='text-3xl'>Cargando</h1>
            </div>
            )
            : (<div className="flex flex-row">
                <div className="w-72 hidden sm:block" ></div>
                <div className="m-8 gap-8 flex flex-col">
                    <div className="Bienvenida">
                        <h1 className="p-3 font-semibold text-3xl">
                            ¡Bienvenido profesor {userData ? `${userData.name} ${userData.last_name}` : 'Alumn@'}!
                        </h1>
                    </div>

                    <hr className='mt-2' />
                    <img src="/welcome.png" alt="Bienvenido" width={600} height={500} />

                </div>
            </div>)}
    </>
    );
}

export default DashboarTeacher;
