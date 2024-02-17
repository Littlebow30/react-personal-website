import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Work from './pages/Work';
import Home from './pages/Home';
import Navbar from './NavBar.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/work' element={<Work />} />
        <Route path='/about' element={<About />} />
      </Routes>     
    </BrowserRouter>
  )
}

export default App
