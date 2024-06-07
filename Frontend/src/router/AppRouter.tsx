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

const AppRouter = () => {

    const { isLogged } = useAppSelector((state) => state.auth)

    return (
        <Routes>
            {
                isLogged
                    ? (
                        <>
                            <Route path="/user" element={<DashboardAlumno />} />
                            <Route path="/alumno" element={<PerfilAlumno />} />
                            <Route path="/materias" element={<Materias />} />
                            <Route path="/profesor/:profesor/:materia/asistencias" element={<Asistencias />} />
                            <Route path="/profesor/:profesor/:materia/calificaciones" element={<Calificaciones />} />
                            <Route path="/profesor/:profesor/:materia" element={<VistaPerfilProfesor />} />
                            <Route path="/profesor/notas/" element={< GestionNotas />} />
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
