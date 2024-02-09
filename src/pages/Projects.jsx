import "./Projects.css";
import recipesApp from "../assets/images/recipes-app.png";
import socialMediaApp from "../assets/images/social-media-app.png";
import portfolio from "../assets/images/portfolio.png";

export default function Projects(props) {
  console.log(props.mode);
  return (
    <>
      <div className="projects-container">
        <div
          className="project projects-1"
          id={props.mode === "light" ? "" : "darkmode"}
        >
          <img className="project-image" src={recipesApp} alt="" />
          <h1
            className="project-name"
            id={props.mode === "light" ? "" : "darkmode"}
          >
            Recipes app
          </h1>
          <h5 className="tech-stack">
            Tech stack used: Reactjs, NodeJs, ExpressJs, MongoDB, Mongoose{" "}
          </h5>
          <p className="project-description">
            Unleash your inner chef! Welcome to your one-stop shop for delicious
            culinary adventures! We offer a diverse range of recipes, from the
            quick and easy to the gourmet and adventurous, catering to every
            skill level and dietary preference.
          </p>
          <div className="button-container">
            <a href="https://fluffy-kataifi-31a9c1.netlify.app/">
              <button className="button" id="live-link">
                Live Link
              </button>
            </a>
            <a href="https://github.com/sharabhh/MERN-recipes-app">
              <button className="button" id="github">
                Github
              </button>
            </a>
          </div>
        </div>
        <div className="project projects-2" id={props.mode==='light' ? '' : 'darkmode'}>
          <img className="project-image" src={socialMediaApp} alt="" />
          <h1 className="project-name">Social Media App</h1>
          <h5 className="tech-stack">
            Tech stack used: Reactjs, NodeJs, ExpressJs, MongoDB, Mongoose, MUI
          </h5>
          <p className="project-description">
            Tired of the same old social media experience? Join sociopedia, the
            innovative platform where tech nerds can talk endlessly about their
            hobbies.
          </p>
          <div className="button-container">
            <a href="https://leafy-malasada-0c596c.netlify.app/">
              <button className="button" id="live-link">
                Live Link
              </button>
            </a>
            <a href="https://github.com/sharabhh/MERN-social-media">
              <button className="button" id="github">
                Github
              </button>
            </a>
          </div>
        </div>
        <div className="project projects-3" id={props.mode==='light' ? '' : 'darkmode'}>
          <img className="project-image" src={portfolio} alt="" />
          <h1 className="project-name">Portfolio website</h1>
          <h5 className="tech-stack">Tech stack used: Reactjs</h5>
          <p className="project-description">
            This portfolio is a window into my world as a full-stack developer,
            where I seamlessly blend front-end creativity with back-end power.
            Explore my diverse projects, each showcasing my ability to design
            captivating user experiences while building robust and scalable web
            applications.
          </p>
          <div className="button-container">
            <a href="#">
              <button className="button" id="live-link">
                Live Link
              </button>
            </a>
            <a href="#">
              <button className="button" id="github">
                Github
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
