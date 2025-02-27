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
        message="Enrollment for the 2025-2026 Colorado UPK school year is open!"
        link="https://upk.colorado.gov/"
        linkName="Enroll Here!"
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
