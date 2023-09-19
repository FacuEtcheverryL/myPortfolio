import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import About from "./components/about/about";
import Proyect from "./components/proyects/proyects";
import Portfolio from "./components/portfolio/portfolio";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/contact" element={<Contact />} />
        <Route extct path="/about" element={<About />} />
        <Route extct path="/proyects" element={<Proyect />} />
        <Route extct path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
