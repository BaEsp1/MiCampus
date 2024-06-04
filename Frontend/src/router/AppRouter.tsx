import { Navigate, Route, Routes } from 'react-router-dom'
import { useAppSelector } from '../Redux/hooks'
import LandingPage from '../Pages/LandingPage'
import Login from '../Pages/auth/LoginPage'
import DashboardUser from '../Pages/Dashboard-Alumno'
import Materias from '../Pages/CursosAlumno'
import Calificaciones from '../Pages/CalificacionesAlumnos'
import DashboardAlumno from '../Pages/Dashboard-Alumno'
import PerfilAlumno from '../Pages/Perfil-Alumno'
import Asistencias from '../Pages/AsistenciasAlumno'
import VistaPerfilProfesor from '../Pages/VistaInfoProf'

const AppRouter = () => {

    const { status } = useAppSelector((state) => state.auth)

    return (
        <Routes>
            {
                status === 'authenticated'
                    ? (
                        <>
                            <Route path="/user" element={<DashboardUser />} />
                            <Route path='/*' element={<DashboardUser />} />
                            <Route path="/dash" element={<DashboardAlumno />} />
                            <Route path="/alumno" element={<PerfilAlumno />} />
                            <Route path="/materias" element={<Materias />} />
                            <Route path="/profesor/:profesor/:materia/asistencias" element={<Asistencias />} />
                            <Route path="/profesor/:profesor/:materia/calificaciones" element={<Calificaciones />} />
                            <Route path="/profesor/:profesor" element={<VistaPerfilProfesor />} />
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
