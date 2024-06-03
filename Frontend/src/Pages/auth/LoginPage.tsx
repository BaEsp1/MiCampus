import { FormEvent } from 'react';
import { useForm, useAuthStore } from '../../hooks';
import './login.css';

const Login: React.FC = () => {

    const { starLogin } = useAuthStore()

    const { email, password, onInputChange, onResetForm } = useForm({
        email: '',
        password: ''
    })

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        starLogin({ email, password }).finally(onResetForm)
    }

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
                            <span>a nuestra</span>
                            <span>pagina web</span>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="form__inputGroup">
                                <input
                                    id="email"
                                    type="email"
                                    className="form__input"
                                    placeholder=""
                                    name='email'
                                    value={email}
                                    onChange={onInputChange}
                                />
                                <label htmlFor="email" className="form__label">Correo</label>
                            </div>
                            <div className="form__inputGroup">
                                <input
                                    id="password"
                                    type="password"
                                    className="form__input"
                                    placeholder=""
                                    name='password'
                                    value={password}
                                    onChange={onInputChange}
                                />
                                <label htmlFor="password" className="form__label">Contraseña</label>
                            </div>
                            <button type='submit' className="form__submit">Iniciar Sesión</button>
                            <p className='form__ref'>¿Olvidaste tu contraseña? Comunicate a <a target="_blank" href="mailto:intitucioneducativa@gmail.com">
                                intitucioneducativa@gmail.com
                            </a>
                            </p>
                        </form>
                    </section>
                </div>

                <div className="fondo__color"></div>
            </main>
        </>
    );
}

export default Login