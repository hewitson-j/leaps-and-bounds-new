import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <ul role="navigation" aria-label="Navbar">
        <li>
          <a href="#home">
            <b>Home</b>
          </a>
        </li>
        <li>
          <a href="#about">
            <b>My Program</b>
          </a>
        </li>
        <li>
          <a href="#meet-teacher">
            <b>Meet the Teacher</b>
          </a>
        </li>
        <li>
          <a href="#reviews">
            <b>Reviews</b>
          </a>
        </li>
        <li>
          <a href="#contact">
            <b>Contact</b>
          </a>
        </li>
      </ul>
    </div>
  );
}
