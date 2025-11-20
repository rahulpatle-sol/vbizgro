import { useState } from 'react'


import RouteAll from './Components/Routes.jsx'
import Hero from './Pages/Hero'
import Services from './Pages/Services.jsx'
import WhyUs from './Pages/WhyUs.jsx'
import Navbar from './Pages/Nav.jsx'
import Sidebar from './Pages/Sidebar.jsx'
import AboutUs from './Pages/About.jsx'
import Footer from './Pages/Footer.jsx'
function App() {


  return (
    <>
      
<Navbar/>

<Sidebar/>
<Hero></Hero>
<WhyUs/>
<Services/>
<AboutUs/>
<Footer/>
    </>
  )
}

export default App
