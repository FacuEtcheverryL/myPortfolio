import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import About from "./components/about/about";
import Snowpanda from "./components/proyects/Snow";
import Videogames from "./components/proyects/VideoGames";
import Portfolio from "./components/portfolio/portfolio";
import Home from "./components/home/home";
import Resume from "./components/curriculum/curriculum";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route extct path="/about" element={<About />} />
        <Route extct path="/portfolio" element={<Portfolio />} />
        <Route extct path="/snowpanda" element={<Snowpanda />} />
        <Route extct path="/videogames" element={<Videogames />} />
        <Route extct path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
