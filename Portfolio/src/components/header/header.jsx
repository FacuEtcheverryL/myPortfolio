import Logo from "../../img/2-removebg-preview.png";
import { Link } from "react-router-dom";
import "boxicons";
import "./header.css";

function Header() {
  const scrollTop = () => {
    window.scroll(0, 0);
  };

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
          contact
        </Link>
      </div>
      <div className="social">
        <Link
          className="link_social"
          to="/portfolio"
          onClick={() => scrollTop()}
        >
          <box-icon name="linkedin" type="logo" color="#fffefe"></box-icon>
        </Link>
        <Link className="link_social" to="/contact" onClick={() => scrollTop()}>
          <box-icon name="github" type="logo" color="#f2eee9"></box-icon>
        </Link>
      </div>
    </div>
  );
}

export default Header;
