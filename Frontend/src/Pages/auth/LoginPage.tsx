import { useAuthStore } from '../../hooks';
import CheckingLogin from './CheckingLogin';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IoMdAlert } from "react-icons/io";
import './login.css';

type FormFields = {
    email: string;
    password: string;
};

const Login: React.FC = () => {

    const { isLoading, startLogin, errorMessage } = useAuthStore();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormFields>();

    const onSubmit: SubmitHandler<FormFields> = data => startLogin(data);

    return (
        <>
            <main className="fondo">
                <div className="fondo__img" style={{ backgroundImage: `url(./login/fondo-login.jpg)` }}>
                    <section className="content">
                        <h2 className="content__title">Revisa tus calificaciones y progreso</h2>
                        <p className="content__description">
                            Monitorea tu rendimiento académico con acceso instantáneo a tus calificaciones y reportes de progreso.
                        </p>
                    </section>

                    {/* fomr section */}
                    <section className="form">
                        <div className="form__title">
                            <span>Bienvenido!</span>
                            <span>a MiCampus</span>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form__inputGroup">
                                <input
                                    id="email"
                                    type="email"
                                    className={`form__input ${errors.email ? ' form__input--error' : ''}`}
                                    placeholder=""
                                    {...register('email', {
                                        required: 'El correo es obligatorio',
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                            message: 'El correo no es valido',
                                        },
                                    })}
                                />
                                <label htmlFor="email" className="form__label">Correo</label>
                                {errors.email && (
                                    <div className="form__inputHelper">
                                        <IoMdAlert size={16} />
                                        {errors.email.message}
                                    </div>
                                )}
                            </div>
                            <div className="form__inputGroup">
                                <input
                                    id="password"
                                    type="password"
                                    className={`form__input ${errors.password ? ' form__input--error' : ''}`}
                                    placeholder=""
                                    {...register('password', {
                                        required: 'La contraseña es obligatoria',
                                        minLength: {
                                            value: 6,
                                            message: 'Debe tener más de 6 caracteres',
                                        },
                                    })}
                                />
                                <label htmlFor="password" className="form__label">Contraseña</label>
                                {errors.password && (
                                    <div className="form__inputHelper">
                                        <IoMdAlert size={16} />
                                        {errors.password.message} </div>
                                )}

                            </div>
                            <button type='submit' className="form__submit" disabled={isLoading}>Iniciar Sesión</button>


                            <p className='form__ref'>¿Olvidaste tu contraseña? Comunicate a <a target="_blank" href="mailto:intitucioneducativa@gmail.com">
                                intitucioneducativa@gmail.com
                            </a>
                            </p>
                        </form>
                    </section>
                </div>
                <div className='alertsContainer'>
                    {/* Alert */}
                    {errorMessage && (<div className='form__alertServer'>{errorMessage} </div>)}
                </div>
                <div className="fondo__color"></div>
            </main>
            {isLoading && <CheckingLogin />}
        </>
    );
}

export default Login