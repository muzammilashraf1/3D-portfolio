import { BrowserRouter } from "react-router-dom";
import { Navbar, Hero, Experience, Feedbacks, Contact, Tech, Works, About } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-gradient-to-r from-cyan-700 to-blue-600 bg-cover bg-no-repeat bg-center">
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




