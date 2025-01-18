import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
import Consultancy from './Pages/Consultancy'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/laundry-consultancy-planning-service" element={<Consultancy/>}/>
        </Routes>
      <Footer />
    </>
  )
}

export default App
