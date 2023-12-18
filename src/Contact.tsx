import "./Contact.css";

export default function Contact() {
  return (
    <>
      <h2 id="contact">Contact us!</h2>
      <div className="contact-body">
        <div className="contact-child">
          <h3>Email</h3>
          <p>
            <a href="mailto:melonro143@yahoo.com">melonro143@yahoo.com</a>
          </p>
        </div>
        <div className="contact-child">
          <h3>Phone</h3>
          <p>
            <a href="tel:719-439-0566">719-439-0566</a>
          </p>
        </div>
        <div className="contact-child">
          <h3>Facebook</h3>
          <p>
            <a href="https://www.facebook.com/MsMelanieTrujillo">Click here!</a>
          </p>
        </div>
      </div>
      <button>
        <a href="mailto:melonro143@yahoo.com">Schedule a Tour!</a>
      </button>
    </>
  );
}
