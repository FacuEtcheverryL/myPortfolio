import "./about.css";
import AboutEs from "./aboutES";
import { useSelector } from "react-redux";

function About() {
  const language = useSelector((state) => state.languages.language);

  if (language === "es") {
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
            Since 2023 venturing into web development and adding tools to my
            stack. When I am not at the PC you will find me in my vegetableS
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
  if (language === "en") {
    return <AboutEs />;
  }
}

export default About;
