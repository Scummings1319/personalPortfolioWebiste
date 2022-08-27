import "../styles/HomePage.css";
export default function HomePage() {
  return (
    <div id="home">
      <img src="me.jpg" className="selfie" />

      <div>
        <p className="MyNameIs">MY NAME IS </p>
        <p className="sam">SAMANTHA CUMMINGS</p>
      </div>
      <div className="lineBelowName" />
      <p className="jobTitle">SOFTWARE DEVELOPER</p>
    </div>
  );
}
