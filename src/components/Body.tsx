import About from "./About";
import "./Body.css";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import MeetTeacher from "./MeetTeacher";
import Reviews from "./Reviews";

export default function Body() {
  return (
    <main className="body-container">
      <div className="body-content">
        <Home />
        <About />
        <MeetTeacher />
        <Reviews />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
