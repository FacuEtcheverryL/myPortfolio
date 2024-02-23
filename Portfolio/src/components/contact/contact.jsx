import "boxicons";
import { Link } from "react-router-dom";
import "./contact.css";
import GithubLogo from "../../img/github-100.png";
import linkedinLogo from "../../img/linkedin-100.png";
import correoLogo from "../../img/googleplus.png";

import ContactEs from "./contactEs";
import { useSelector } from "react-redux";

function enviarCorreo() {
  var destinatario = "faculetcheverry@gmail.com";
  var asunto = "From your portfolio";

  // Generar el enlace del correo con el destinatario y asunto predefinidos
  var enlaceCorreo =
    "mailto:" + destinatario + "?subject=" + encodeURIComponent(asunto);

  // Abrir el cliente de correo electrónico
  window.location.href = enlaceCorreo;
}

function Contact() {
  const language = useSelector((state) => state.languages.language);

  if (language === "es") {
    return (
      <div>
        <main className="main_contact">
          <section className="section_contact">
            <h1 className="contact_h1">
              Contact
              <span className="span_title">.</span>
            </h1>
            <article className="section_article">
              Get in touch with me via social media or email.
            </article>
            <article className="article_social">
              <div>
                <Link
                  className="box_name"
                  target="_blank"
                  to="https://www.linkedin.com/in/facundo-lopez-etcheverry/"
                >
                  <img className="img_social" src={linkedinLogo}></img>
                  <h4>LinkedIn</h4>
                </Link>
              </div>
              <div>
                <Link onClick={enviarCorreo} className="box_name">
                  <img className="img_social" src={correoLogo}></img>
                  <h4>Gmail</h4>
                </Link>
              </div>

              <div className="div_social">
                <Link
                  className="box_name"
                  target="_blank"
                  to="https://github.com/FacuEtcheverryL"
                >
                  <img className="img_social" src={GithubLogo}></img>

                  <h4>GitHub</h4>
                </Link>
              </div>
            </article>
          </section>
          <aside className="aside_img">
            <img
              className="img_contact"
              src="https://cdn.britannica.com/15/234215-050-140D3D84/Wirehaired-dachshund-dog.jpg"
              alt="Foto Contacto"
            />
          </aside>
        </main>

        {/* <footer className="footer">
        <h1 className="footer_h1_contact">Send me an email</h1>
        <div className="footer_contact">
          <div>
            <div className="send_email_name">
              <label className="label_email_contact" htmlFor="email">
                Email
              </label>
              <input className="input_email_name" type="email" />
            </div>
            <div className="send_email_name">
              <label className="label_email_contact" htmlFor="name">
                Name
              </label>
              <input className="input_email_name" type="text" />
            </div>
          </div>
          <div className="box_message">
            <div className="send_message">
              <label className="label_email_contact" htmlFor="message">
                Message
              </label>
              <input className="input_message" type="text" />
            </div>
            <div className="send_button_contact">
              <button className="button_contact">Send email</button>
            </div>
          </div>
        </div>
      </footer> */}
      </div>
    );
  }

  if (language === "en") {
    return <ContactEs />;
  }
}
export default Contact;
