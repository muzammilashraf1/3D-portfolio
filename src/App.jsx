import { BrowserRouter } from "react-router-dom";
import {Navbar, Hero, Experience, Feedbacks, Contact, Tech, Works, About } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          Hello
          <Navbar/>
          <Hero />
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
