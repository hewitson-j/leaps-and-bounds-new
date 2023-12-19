import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
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
    </div>
  );
}
