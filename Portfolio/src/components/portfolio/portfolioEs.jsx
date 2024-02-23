import "./portfolio.css";
import Stack from "./stacks";

function Portfolio() {
  return (
    <>
      <main className="main">
        <section className="sectionAbout">
          <h1 className="section_h1">
            Portafolio<span className="span_title">.</span>
          </h1>
          <h2 className="section_h2">Trabajando para llenar este espacio</h2>
          <h4 className="section_h4">
            {"Los genios se hacen con un 1% de talento y un 99% de trabajo."}
            <br /> Trabajos, proyectos personales, experimentos, todo suma.
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
          <li>Mi Stack</li>
        </ul>

        <Stack />
      </section>
      <h3 className="title_footer">
        <span className="spam_home">P</span>ROJECTO
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

export default Portfolio;
