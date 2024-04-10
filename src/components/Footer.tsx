import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <hr />
      <p id="copyright-line">
        Leaps and Bounds Preschool is owned and operated by Melanie Trujillo.
      </p>
      <div className="legal-links">
        <Link to='/terms-of-service'>Terms of Service (Updated 4/10/2024)</Link>
      </div>
    </footer>
  );
}
