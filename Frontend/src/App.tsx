import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import LandingPage from './Pages/LandingPage'
import DashboardUser from './Pages/Dashboar-User'
import Navbar from './Components/NavBAr/NavBar'

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<DashboardUser />} />

      </Routes>
    </Router>
  )
}

export default App
