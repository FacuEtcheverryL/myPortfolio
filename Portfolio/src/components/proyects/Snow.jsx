import SnowEs from "./SnowEs";
import { useSelector } from "react-redux";

function Snow() {
  const language = useSelector((state) => state.languages.language);

  if (language === "es") {
    return (
      <main>
        <section>
          <head>
            <h1>SNOWPANDA C.O.</h1>
          </head>
          <article>
            <div>
              <p>
                Together with six fellow students, we were entrusted with the
                task of creating a functional web page while adhering to certain
                slogans. We decided to bring Snow Panda to life, an e-commerce
                platform for the sale of snowboarding supplies.
              </p>
              <p>
                In our initial meetings, we decided not only to create an
                e-commerce platform but also to choose the technologies and
                tools we would use. We opted to work with a SQL database,
                selecting PostgreSQL. For the backend, we chose Express along
                with Node.js, while for the frontend, we selected React,
                JavaScript, and Redux.
              </p>
              <p>
                The website features sections for home, categories, shopping
                cart, product details, search, filtering, sorting, payment
                gateway, and Google authentication.
              </p>
            </div>
          </article>
          <article></article>
          <footer></footer>
        </section>
      </main>
    );
  }
  if (language === "en") {
    return <SnowEs />;
  }
}
export default Snow;
