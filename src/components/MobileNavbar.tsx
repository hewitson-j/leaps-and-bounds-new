import { useState } from "react";
import "./MobileNavbar.css";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mobile-navbar">
      <div className="mobile-navbar-body">
        <button
          id="mobile-navbar-button"
          onClick={() => {
            setIsOpen(!isOpen);
            console.log("Is open? ", isOpen);
          }}
        >
          ☰
        </button>
      </div>
      {isOpen ? (
        <>
          <ul className="mobile-navbar-menu">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">My Program</a>
            </li>
            <li>
              <a href="#meet-teacher">Meet the Teacher</a>
            </li>
            <li>
              <a href="#reviews">Reviews</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
