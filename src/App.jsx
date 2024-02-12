import { BrowserRouter } from "react-router-dom";
import { Navbar, Hero, Experience, Feedbacks, Contact, Tech, Works, About } from "./components";
import { StarsCanvas } from "./components/canvas";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />

          <div className='relative z-0'>
            <About />
          </div>
          
          <Experience />
          <Works />
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
