import "../styles/Skills.css";
export default function Skills() {
  return (
    <div id="skills">
      <div className="awesomeFontIcons">
        <i className="fa-brands fa-html5"></i>
        <p className="skillsText">HTML</p>
        <i className="fa-brands fa-css3"></i>
        <p className="skillsText">CSS</p>
        <i className="fa-brands fa-js"></i>
        <p className="skillsText">JavaScript</p>
        <i className="fa-brands fa-react"></i>
        <p className="skillsText">React</p>
        <i className="fa-brands fa-github"></i>
        <p className="skillsText">Git/Github</p>
        <i className="fa-solid fa-database"></i>
        <p className="skillsText">Databases</p>
      </div>
      <div className="icons">
        <img className="Iconimage" src="TSicon.png" alt="" />
        <p className="skillsText">MongoDB</p>
        <img className="Iconimage" src="typescript.png" alt="" />
        <p className="skillsText">TypeScript</p>
        <img className="Iconimage" src="rest.png" alt="" />
        <p className="skillsText">REST API</p>
        <img className="Iconimage" src="postgres.png" alt="" />
        <p className="skillsText">Postgres SQL</p>
        <img className="Iconimage" src="nodejs.png" alt="" />
        <p className="skillsText">JSON</p>
        <img className="Iconimage" src="firebase2.png" alt="" />
        <p className="skillsText">Firebase</p>
      </div>
    </div>
  );
}
