import "../styles/Skills.css";
export default function Skills() {
  return (
    <div id="skills">
      <h1 id="skillsHeader">SKILLS</h1>
      <div id="allIconsDiv">
        <div className="awesomeFontIcons">
          <div className="skillsAndName">
            <i className="fa-brands fa-html5"></i>
            <p className="skillsText">HTML</p>
          </div>
          <div className="skillsAndName">
            <i className="fa-brands fa-css3"></i>
            <p className="skillsText">CSS</p>
          </div>
          <div className="skillsAndName">
            <i className="fa-brands fa-js"></i>
            <p className="skillsText">JavaScript</p>
          </div>
          <div className="skillsAndName">
            <i className="fa-brands fa-react"></i>
            <p className="skillsText">React</p>
          </div>
          <div className="skillsAndName">
            <i className="fa-brands fa-github"></i>
            <p className="skillsText">Git/Github</p>
          </div>
          <div className="skillsAndName">
            <i className="fa-solid fa-database"></i>
            <p className="skillsText">Databases</p>
          </div>
        </div>
        <div className="icons">
          <div className="skillsAndName">
            <img className="Iconimage" src="TSicon.png" alt="" />
            <p className="skillsText">MongoDB</p>
          </div>
          <div className="skillsAndName">
            <img className="Iconimage" src="typescript.png" alt="" />
            <p className="skillsText">TypeScript</p>
          </div>
          <div className="skillsAndName">
            <img className="Iconimage" src="rest.png" alt="" />
            <p className="skillsText">REST API</p>
          </div>
          <div className="skillsAndName">
            <img className="Iconimage" src="postgres.png" alt="" />
            <p className="skillsText">Postgres SQL</p>
          </div>
          <div className="skillsAndName">
            <img className="Iconimage" src="nodejs.png" alt="" />
            <p className="skillsText">JSON</p>
          </div>
          <div className="skillsAndName">
            <img className="Iconimage" src="firebase2.png" alt="" />
            <p className="skillsText">Firebase</p>
          </div>
        </div>
      </div>
    </div>
  );
}
