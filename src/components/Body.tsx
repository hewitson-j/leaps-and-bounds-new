import About from "./About";
import Banner from "./Banner";
import "./Body.css";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import MeetTeacher from "./MeetTeacher";
import Reviews from "./Reviews";

export default function Body() {
  return (
    <main className="body-container">
      <Banner
        dismissable
        message="Mark your calendars! Registration for the 2025-2026 Universal Preschool school year begins at noon on Dec. 17th!"
        link="https://upk.colorado.gov/"
        linkName="Register Here!"
        cookieName="hide-upk-banner"
      />
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
