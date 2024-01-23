import Logo from "../../img/2-removebg-preview.png";
import { Link, useLocation } from "react-router-dom";
import "boxicons";
import "./header.css";

function Header() {
  const scrollTop = () => {
    window.scroll(0, 0);
  };

  //!
  const location = useLocation();

  const ContactPage = () => {
    return location.pathname === "/contact";
  };
  //!

  return (
    <div className="header">
      <div className="logo">
        <Link to="/" onClick={() => scrollTop()}>
          <img src={Logo} alt="" className="imgLogo" />
        </Link>
      </div>
      <div className="links">
        <Link className="link" to="/about" onClick={() => scrollTop()}>
          About
        </Link>
        <Link className="link" to="/portfolio" onClick={() => scrollTop()}>
          Portfolio
        </Link>
        <Link className="link" to="/contact" onClick={() => scrollTop()}>
          Contact
        </Link>
      </div>
      {ContactPage() ? null : (
        <div className="social">
          <Link
            className="link_social"
            target="_blank"
            to="https://www.linkedin.com/in/facundo-lopez-etcheverry/"
            onClick={() => scrollTop()}
          >
            <box-icon name="linkedin" type="logo" color="#fffefe"></box-icon>
          </Link>
          <Link
            className="link_social"
            target="_blank"
            to="https://github.com/FacuEtcheverryL"
            onClick={() => scrollTop()}
          >
            <box-icon name="github" type="logo" color="#f2eee9"></box-icon>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
