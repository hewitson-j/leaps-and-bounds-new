import "./Contact.css";

interface ContactInfoProps {
  title: string;
  href: string;
  text: string;
  id?: string;
  role?: string;
  ariaLabel?: string;
}

const contactInfo: ContactInfoProps[] = [
  {
    title: "Email",
    href: "mailto:melonro143@yahoo.com",
    text: "melonro143@yahoo.com",
    id: "contact-email",
    role: "link",
    ariaLabel: "Open your Mailing App to send an email to melonro143@yahoo.com",
  },
  {
    title: "Phone",
    href: "tel:719-439-0566",
    text: "719-439-0566",
    id: "contact-phone",
    role: "link",
    ariaLabel: "Open your phone app to call",
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com/MsMelanieTrujillo",
    text: "Click here!",
    id: "contact-facebook",
    role: "link",
    ariaLabel: "Redirect to Facebook",
  },
];

export default function Contact() {
  return (
    <div id="contact" className="contact">
      <h2>Contact us!</h2>
      <div className="contact-body">
        {contactInfo.map((contact) => {
          return (
            <div className="contact-child" key={contact.title}>
              <h3>{contact.title}</h3>
              <p>
                <a
                  href={contact.href}
                  id={contact.id}
                  role={contact.role}
                  aria-label={contact.ariaLabel}
                >
                  {contact.text}
                </a>
              </p>
            </div>
          );
        })}
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
