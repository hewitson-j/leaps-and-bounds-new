import logo from "../assets/LogoPng.png";
import "./Header.css";
import MobileNavbar from "./MobileNavbar";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header>
      <div className="header-grid">
        <div id="header-whitespace"></div>
        <img
          src={logo}
          alt="Leaps and Bounds Preschool Logo"
          id="header-logo"
          title="Leaps and Bounds Preschool Logo"
        />
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
      <p id="header-tagline">
        <i>Growing young minds by leaps & bounds.</i>
      </p>
      <Navbar />
      <MobileNavbar />
    </header>
  );
}
