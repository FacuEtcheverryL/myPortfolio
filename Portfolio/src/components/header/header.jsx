import Logo from "../../img/2-removebg-preview.png";
import { Link } from "react-router-dom";
// import { Link, useLocation } from "react-router-dom";
import "boxicons";
import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import ReactCountryFlag from "react-country-flag";

function Header() {
  const scrollTop = () => {
    window.scroll(0, 0);
  };

  //!

  // Ubicacion para saber si es Contact
  // const location = useLocation();

  // const ContactPage = () => {
  //   return location.pathname === "/contact";
  // };

  const language = useSelector((state) => state.languages.language);

  const dispatch = useDispatch();

  const changeLanguage = () => {
    if (language === "es") {
      dispatch({ type: "en" });
      console.log(language);
    }
    if (language === "en") {
      dispatch({ type: "es" });
      console.log(language);
    }
  };

  //!

  return (
    <div className="header">
      <div className="logo">
        <Link to="/" onClick={() => scrollTop()}>
          <img src={Logo} alt="" className="imgLogo" />
        </Link>
      </div>
      {language === "es" ? (
        <div className="links">
          <Link className="link" to="/about" onClick={() => scrollTop()}>
            About me
          </Link>
          <Link className="link" to="/portfolio" onClick={() => scrollTop()}>
            Portfolio
          </Link>
          <Link className="link" to="/contact" onClick={() => scrollTop()}>
            Contact
          </Link>
        </div>
      ) : (
        <div className="links">
          <Link className="link" to="/about" onClick={() => scrollTop()}>
            Sobre Mi
          </Link>
          <Link className="link" to="/portfolio" onClick={() => scrollTop()}>
            Portafolio
          </Link>
          <Link className="link" to="/contact" onClick={() => scrollTop()}>
            Contacto
          </Link>
        </div>
      )}

      <div className="social">
        <Link className="link_social" onClick={() => changeLanguage()}>
          {language === "es" ? (
            <ReactCountryFlag countryCode="ES" />
          ) : (
            <ReactCountryFlag countryCode="US" />
          )}

          {language === "es" ? " Español" : " English"}
        </Link>
      </div>
    </div>
  );
}

export default Header;
