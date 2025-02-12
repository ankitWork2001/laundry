import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
import Consultancy from './Pages/Consultancy'
import Services from './Pages/Services'
import Dry from './Pages/Dry'
import Jacket from './Pages/Jacket'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/jacket-dry-cleaning-services" element={<Jacket/>}/>
        <Route path="/laundry-dryclean-rate" element={<Dry/>}/>
        <Route path="/premium-dryclean-rate" element={<Services/>}/>
        <Route path="/laundry-consultancy-planning-service" element={<Consultancy/>}/>
        </Routes>
      <Footer />
    </>
  )
}

export default App
