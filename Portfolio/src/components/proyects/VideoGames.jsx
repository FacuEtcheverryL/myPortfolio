import VideoGamesEs from "./VideoGamesEs";
import { useSelector } from "react-redux";

function VideoGames() {
  const language = useSelector((state) => state.languages.language);

  if (language === "es") {
    return (
      <div>
        <main>
          <section>
            <head>
              <h1>VIDEOGAMES</h1>
            </head>
            <article>
              <div>
                <p>
                  As an individual task, I was assigned to create the frontend
                  from scratch using a public API, and to add functions to a
                  parallel API to complement the existing one.
                </p>
                <p>
                  Following the guidelines given by my instructor, the website
                  was required to have a dashboard with access to the main page
                  displaying a catalog of games. Upon selecting a game, its
                  details would be shown. All its functionality is structured
                  using Express, React, Redux, JavaScript, and the design solely
                  with CSS.
                </p>
                <p>
                  The website features sections including an entry dashboard,
                  Home, Details of each game, various filters, and an
                  administrator section to upload new games.
                </p>
              </div>
            </article>
            <footer></footer>
          </section>
        </main>
      </div>
    );
  }

  if (language === "en") {
    return <VideoGamesEs />;
  }
}

export default VideoGames;
