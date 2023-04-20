import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Menu from './pages/Menu/Menu'
import Delivery from './pages/Delivery/Delivery'
import Navbar from './components/Navbar/Navbar'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import { LoginForm } from './pages/Home/login/login'
import { SignUpForm } from './pages/Home/signup/signup'
import Footer from './components/Footer/Footer'



function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/signup" element={<SignUpForm/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
