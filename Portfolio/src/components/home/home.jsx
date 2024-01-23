import "./home.css";
import looper from "../../img/Looper.jpeg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <body className="main_home">
        <section className="img_home">
          <div className="box_banner">
            <div className="box_button_name">
              <div className="name_banner">
                <span>FACUNDO</span>
                <span>LOPEZ</span>
                <span>ETCHEVERRY</span>
                <span className="span_coder">&lt;Full stack developer&gt;</span>
              </div>

              <Link className="button_banner from-left" to="/resume" href="">
                <span>CV</span>
              </Link>
            </div>
            <div className="box_img">
              <a href="">
                <img className="img_banner" src={looper} alt="Looper" />
              </a>
            </div>
          </div>
        </section>
      </body>
      <footer className="footer_">
        <h3 className="title_footer">
          <span className="spam_home">L</span>AST PROJECT
          <span className="spam_home">S</span>
        </h3>
        <section className="section_home">
          <div></div>
          <a href="/videogames">
            <article className="proyects_box">
              <img
                className="img_proyects"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9psjN5s4Q239I2vPagg149nXH8uqmXP3UXQ"
                alt="Proyect IMG"
              />
              <h3 className="name_proyects">Videogames - PI</h3>
              <h3 className="type_proyects">Dashboard</h3>
            </article>
          </a>
          <a href="/snowpanda">
            <article className="proyects_box">
              <img
                className="img_proyects"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9psjN5s4Q239I2vPagg149nXH8uqmXP3UXQ"
                alt="Proyect IMG"
              />
              <h3 className="name_proyects">SnowPanda Co.</h3>
              <h4 className="type_proyects">E-Commerce</h4>
            </article>
          </a>
        </section>
      </footer>
    </main>
  );
}

export default Home;

//title_footer
//section_home
//proyects_box
//img_proyects
//name_proyects
//type_proyects
