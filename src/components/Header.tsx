import { useEffect, useState } from "react";
import logo from "../assets/LogoPng.png";
import "./Header.css";
import MobileNavbar from "./MobileNavbar";
import Navbar from "./Navbar";

export default function Header() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        <i>
          Growing young minds by
          {screenWidth > 490 ? (
            " leaps & bounds."
          ) : (
            <>
              <br />
              leaps & bounds.
            </>
          )}
        </i>
      </p>
      <Navbar />
      <MobileNavbar />
    </header>
  );
}
