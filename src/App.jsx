import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Resume from "./components/Resume/Resume";
import Skills from "./components/Skills/Skills";
import Proyects from "./components/Proyects/Proyects";
import NavBar from "./components/NavBar/NavBar";
import ParticlesBackground from "./components/Particles/ParticlesBackground";
import Contact from './components/Contact/Contact'


const App = () => {
  // const location = useLocation();
  // console.log(location);

  // const renderParticlesHomePage = location.pathname === '/';
  return (
    <div className="App">
      {/* {
        renderParticlesHomePage && (<ParticlesBackground/>)
      } */}
      <ParticlesBackground />
      <NavBar />
      <div className="App__main-page-content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/proyects" element={<Proyects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
