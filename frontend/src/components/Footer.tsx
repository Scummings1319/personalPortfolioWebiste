import "../styles/Footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <div
        className="footerText"
        onClick={() => {
          const el = document.getElementById("home");
          el?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        HOME
      </div>
      <p className="footerText">|</p>
      <div
        className="footerText"
        onClick={() => {
          const el = document.getElementById("about");
          el?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        ABOUT
      </div>
      <p className="footerText">|</p>
      <div
        className="footerText"
        onClick={() => {
          const el = document.getElementById("skills");
          el?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        SKILLS
      </div>
      <p className="footerText">|</p>
      <div
        className="footerText"
        onClick={() => {
          const el = document.getElementById("projects");
          el?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        PROJECTS
      </div>
      <p className="footerText">|</p>
      <div
        className="footerText"
        onClick={() => {
          const el = document.getElementById("links");
          el?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        LINKS
      </div>
    </div>
  );
}
