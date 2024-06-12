import { Navigate, Route, Routes } from 'react-router-dom'
import { useAppSelector } from '../Redux/hooks'
import Login from '../Pages/auth/LoginPage'
import LandingPage from '../Pages/LandingPage'
import Materias from '../Pages/CursosAlumno'
import Calificaciones from '../Pages/CalificacionesAlumnos'
import DashboardAlumno from '../Pages/Dashboard-Alumno'
import PerfilAlumno from '../Pages/Perfil-Alumno'
import Asistencias from '../Pages/AsistenciasAlumno'
import VistaPerfilProfesor from '../Pages/VistaInfoProf'
import GestionNotas from '../Pages/teacher/GestionNotas'
import { useEffect } from 'react'
import { useAuthStore } from '../hooks'
import CoursesTeacher from '../Pages/teacher/CoursesTeacher'
import ProfileTeacher from '../Pages/teacher/ProfileTeacher'
import DashboarTeacher from '../Pages/teacher/DashboardTeacher'

const AppRouter = () => {

    const { isLogged } = useAppSelector((state) => state.auth);
    const { user } = useAppSelector((state) => state.user);
    const { checkAuthToken } = useAuthStore();

    useEffect(() => {
        checkAuthToken();
    }, [])

    return (
        <Routes>
            {
                isLogged
                    ? (
                        <>
                            {
                                (user?.role === 'STUDENT')
                                    ?
                                    <>
                                        <Route path="/user" element={<DashboardAlumno />} />
                                        <Route path="/alumno" element={<PerfilAlumno />} />
                                        <Route path="/materias" element={<Materias />} />
                                        <Route path="/profesor/:profesor/:materia/asistencias" element={<Asistencias />} />
                                        <Route path="/profesor/:profesor/:materia/calificaciones" element={<Calificaciones />} />
                                        <Route path="/profesor/:profesor/:materia" element={<VistaPerfilProfesor />} />
                                        <Route path="/*" element={<Navigate to={'/user'} />} />
                                    </>
                                    :
                                    <>
                                        <Route path="/profesor" element={<DashboarTeacher />} />
                                        <Route path="/profesor/materias" element={<CoursesTeacher />} />
                                        <Route path="/profesor/notas/" element={< GestionNotas />} />
                                        <Route path="/profesor/perfil" element={<ProfileTeacher />} />
                                        <Route path="/*" element={<Navigate to={'/profesor'} />} />
                                    </>
                            }

                        </>
                    ) :
                    <>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/login" element={<Login />} />
                        <Route path='/*' element={<Navigate to={'/'} />} />
                    </>
            }

        </Routes>

    )
}

export default AppRouter
