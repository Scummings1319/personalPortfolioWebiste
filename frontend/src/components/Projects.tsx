import "../styles/Projects.css";
export default function Projects() {
  return (
    <div id="projects">
      <h1 id="portfolioHeader">RECENT PROJECTS</h1>
      <div id="gamerMotherDiv">
        <div id="gamerDepot">
          <p className="gamerTitle">Gamer Depot</p>
          <img src="GamerDepot.png" alt="" className="gameImg" />
          <a className="links" href="https://final-project-f8e73.web.app/">
            Click here to go to webpage
          </a>
        </div>
        <div id="notYourMothers">
          <p className="notYourMothersTitle">Not Your Mothers Recipes</p>
          <img className="notYourMothersImg" src="NotYourMothers.png" alt="" />
          <a className="links" href="https://youtu.be/h0t2gUYNbTQ">
            View Demo
          </a>
        </div>
      </div>
      <div className="espressoYourselfDiv">
        <p id="espressoTitle">Espresso Yourself</p>
        <img src="espressoyourselfimg.png" alt="" id="espressoImg" />
        <a className="links" href="https://youtu.be/mLTDJ1F07kg">
          View Demo
        </a>
      </div>
    </div>
  );
}
