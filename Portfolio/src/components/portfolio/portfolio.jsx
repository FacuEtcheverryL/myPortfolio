import "./portfolio.css";

function Portfolio() {
  return (
    <>
      <main className="main">
        <section className="sectionAbout">
          <h1 className="section_h1">
            Portfolio<span className="span_title">.</span>
          </h1>
          <h2 className="section_h2">Working every day to fill this space</h2>
          <h4 className="section_h4">
            {"Genius is made with 1% talent and 99% work."}
            <br /> Jobs, personal projects, playroom, everything adds up.
          </h4>
        </section>
        <img
          className="img_about"
          src="https://www.hepper.com/wp-content/uploads/2022/09/dachshund-dog-sitting-on-the-couch_zoschfrosch_Pixabay.jpg"
          alt="Imagen"
        />
      </main>
      <hr />
      <section className="section_proyects">
        <article className="proyects_box">
          <img
            className="img_proyects"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9psjN5s4Q239I2vPagg149nXH8uqmXP3UXQ"
            alt="Proyect IMG"
          />
          <h3 className="name_proyects">Name</h3>
          <h3 className="type_proyects">Proyects Type</h3>
        </article>
        <article className="proyects_box">
          <img
            className="img_proyects"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9psjN5s4Q239I2vPagg149nXH8uqmXP3UXQ"
            alt="Proyect IMG"
          />
          <h3 className="name_proyects">Name</h3>
          <h3 className="type_proyects">Proyect Type</h3>
        </article>
        <article className="proyects_box">
          <img
            className="img_proyects"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9psjN5s4Q239I2vPagg149nXH8uqmXP3UXQ"
            alt="Proyect IMG"
          />
          <h3 className="name_proyects">Name</h3>
          <h3 className="type_proyects">Proyect Type</h3>
        </article>
      </section>
    </>
  );
}

export default Portfolio;
