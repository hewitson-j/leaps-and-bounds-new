import About from "./About";
import "./Body.css";
import Contact from "./Contact";
import Home from "./Home";
import MeetTeacher from "./MeetTeacher";
import Reviews from "./Reviews";

export default function Body() {
  return (
    <div className="body-container">
      <div className="body-content">
        <Home />
        <About />
        <MeetTeacher />
        <Reviews />
        <Contact />
      </div>
    </div>
  );
}
