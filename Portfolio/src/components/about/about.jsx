import "./about.css";

function About() {
  return (
    <main className="main">
      <section className="sectionAbout">
        <h1 className="section_h1">
          About<span className="span_title">.</span>
        </h1>
        <h2 className="section_h2">
          I am a developer living in the city of Arrecifes, Buenos Aires,
          Argentina.
        </h2>
        <h4 className="section_h4">
          Since 2022 venturing into web development and adding tools to my
          stack. When I am not at the PC you will find me in my vegetable
          garden, with my beloved people or playing paddle tennis.
        </h4>
      </section>
      <section className="section_img">
        <img
          className="img_about"
          src="https://www.doghouse.co.uk/cdn/shop/products/image_71ddc529-e4fd-4cc0-894b-1c36e8b2d5b2.jpg?v=1679829190"
          alt="Imagen"
        />
      </section>
    </main>
  );
}

export default About;
