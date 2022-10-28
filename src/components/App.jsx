import React from "react";
import About from './about/About'
import Contact from './contact/Contact'
import Experience from './experience/Experience'
import Footer from './footer/Footer'
import Header from './header/Header'
import Portifolio from './portifolio/Portifolio'
import Testimonials from './testmonials/Testimonials'


const App = () => {
   return (
      <>
         <Header />
         <About />
         <Experience />
         <Portifolio />
         <Testimonials />
         <Contact />
         <Footer />
      </>
   )
}
export default App;