import { Navigate, Route, Routes } from 'react-router-dom'
import LandingPage from '../Pages/LandingPage'
import Login from '../Pages/auth/LoginPage'
import DashboardUser from '../Pages/Dashboar-User'
import { useAppSelector } from '../Redux/hooks'

const AppRouter = () => {

    const {status} = useAppSelector((state) => state.auth)

    return (
        <Routes>
            {
                status === 'authenticated'
                    ? (
                        <>
                            <Route path="/user" element={<DashboardUser />} />
                            <Route path='/*' element={<DashboardUser />} />
                        </>
                    ) :
                    <>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/login" element={<Login />} />
                        <Route path='/*' element={<Navigate to={'/'}/>} />
                    </>
            }

        </Routes>

    )
}

export default AppRouter
