import "./Contact.css";

export default function Contact() {
  return (
    <div id="contact" className="contact">
      <h2>Contact us!</h2>
      <div className="contact-body">
        <div className="contact-child">
          <h3>Email</h3>
          <p>
            <a
              href="mailto:melonro143@yahoo.com"
              id="contact-email"
              role="link"
              aria-label="Open your Mailing App to send an email to melonro143@yahoo.com"
            >
              melonro143@yahoo.com
            </a>
          </p>
        </div>
        <div className="contact-child">
          <h3>Phone</h3>
          <p>
            <a
              href="tel:719-439-0566"
              role="link"
              aria-label="Open your phone app to call"
            >
              719-439-0566
            </a>
          </p>
        </div>
        <div className="contact-child">
          <h3>Facebook</h3>
          <p>
            <a href="https://www.facebook.com/MsMelanieTrujillo">Click here!</a>
          </p>
        </div>
      </div>
      <a
        className="buttons"
        id="schedule-button"
        href="mailto:melonro143@yahoo.com"
        role="link"
        aria-label="Open your Mailing App to send an email to melonro143@yahoo.com"
      >
        Schedule a Tour!
      </a>
    </div>
  );
}
