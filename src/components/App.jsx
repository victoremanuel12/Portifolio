import React from "react";
import About from './about/About'
import Contact from './contact/Contact'
import Experience from './experience/Experience'
import Footer from './footer/Footer'
import Header from './header/Header'
import Portifolio from './portifolio/Portifolio'
import Testimonials from './testmonials/Testimonials'
import Nav from "./nav/Nav";
import Services from './services/Services'


const App = () => {
   return (
      <>
         <Header />
         <Nav/>
         <About />
         <Experience />
         <Services/>
         <Portifolio />
         <Testimonials />
         <Contact />
         <Footer />
      </>
   )
}
export default App;