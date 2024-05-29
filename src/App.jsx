import "./app.scss"
import Hero from "./components/hero/Hero.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Parallax from "./components/parallax/Parallax.jsx";
import Portfiolio from "./components/portfolio/Portfiolio.jsx";
import Services from "./components/service/Services.jsx";
import Contact from "./components/contact/Contact.jsx";

const App = () => {
  return <div>
    <section id="HomePage">
      <Navbar/>
      <Hero/>
    </section>
   <section id="Services">
      <Parallax type = "services"/>
    </section>
     <section>
      <Services/>
    </section>
    <section id="Portfolio">
       < Parallax type ="Portfolio"/>
    </section>
    <Portfiolio/>
    <section id="Contact"><Contact/></section>
    
  </div>;
};

export default App;
