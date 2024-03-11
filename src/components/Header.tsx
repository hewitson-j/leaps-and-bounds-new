import logo from "../assets/LogoPng.png";
import "./Header.css";
import MobileNavbar from "./MobileNavbar";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header>
      <div className="header-grid">
        <div id="header-whitespace"></div>
        <h1>
          <img
            src={logo}
            alt="Leaps and Bounds Preschool Logo"
            id="header-logo"
            title="Leaps and Bounds Preschool Logo"
          />
        </h1>
        <div id="header-contact-info">
          <p>
            <b>melonro143@yahoo.com</b>
          </p>
          <p>
            <b>719-439-0566</b>
          </p>
          <a
            href="https://www.facebook.com/MsMelanieTrujillo"
            title="Leaps and Bounds Preschool Facebook"
            role="link"
            aria-label="Link to Facebook Page"
          >
            <b>Facebook Page</b>
          </a>
        </div>
      </div>
      <Navbar />
      <MobileNavbar />
    </header>
  );
}
