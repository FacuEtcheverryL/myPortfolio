import { Link } from "react-router-dom";
import "boxicons";
import "./footer.css";

function Footer() {
  const scrollTop = () => {
    window.scroll(0, 0);
  };

  return (
    <main>
      <section className="section">
        <article className="article_name">
          <h4>2023 Facundo Lopez Etcheverry</h4>
        </article>
        <article className="article_links">
          <div className="conteiner_links">
            <Link
              className="link_footer"
              to="/about"
              onClick={() => scrollTop()}
            >
              About
            </Link>
            <Link
              className="link_footer"
              to="/portfolio"
              onClick={() => scrollTop()}
            >
              Portfolio
            </Link>
            <Link
              className="link_footer"
              to="/contact"
              onClick={() => scrollTop()}
            >
              contact
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}

export default Footer;
