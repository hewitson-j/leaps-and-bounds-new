import logo from "./assets/Logo.jpg";
import "./Header.css";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <>
      <div className="header-grid">
        <div id="header-whitespace"></div>
        <img
          src={logo}
          alt="Leaps and Bounds Preschool Logo"
          id="header-logo"
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
          >
            <b>Facebook Page</b>
          </a>
        </div>
      </div>
      <Navbar />
    </>
  );
}
