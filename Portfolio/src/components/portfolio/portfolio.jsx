import "./portfolio.css";
import Stack from "./stacks";
import PortfolioEs from "./portfolioEs";
import { useSelector } from "react-redux";

function Portfolio() {
  const language = useSelector((state) => state.languages.language);

  if (language === "es") {
    return (
      <>
        <main className="main">
          <section className="sectionAbout">
            <h1 className="section_h1">
              Portfolio<span className="span_title">.</span>
            </h1>
            <h2 className="section_h2">Working to fill this space</h2>
            <h4 className="section_h4">
              {"Genius is made with 1% talent and 99% work."}
              <br /> Jobs, personal projects, playroom, everything adds up.
            </h4>
          </section>
          <section className="section_img">
            <img
              className="img_portfolio"
              src="https://i.pinimg.com/736x/a6/54/ce/a654ced90948113f263ec06a9bb3715e--long-haired-dachshund-dachshund-love.jpg"
              alt="Imagen"
            />
          </section>
        </main>
        <section>
          <ul>
            <li>My Stack</li>
          </ul>

          <Stack />
        </section>
        <h3 className="title_footer">
          <span className="spam_home">P</span>ROJECT
          <span className="spam_home">S</span>
        </h3>
        <hr />
        <section className="section_proyects">
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
      </>
    );
  }
  if (language === "en") {
    return <PortfolioEs />;
  }
}

export default Portfolio;
