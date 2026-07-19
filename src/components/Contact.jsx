import "./Contact.css";

const items = [
  {
    icon: "fa-solid fa-envelope",
    label: "Email",
    value: "sarvin.sukhe@gmail.com",
    href: "mailto:sarvin.sukhe@gmail.com",
  },
  {
    icon: "fa-solid fa-phone",
    label: "Phone",
    value: "513-200-8803",
    href: "tel:+15132008803",
  },
  {
    icon: "fa-brands fa-github",
    label: "GitHub",
    value: "DaEpickid540",
    href: "https://github.com/DaEpickid540",
  },
  {
    icon: "fa-solid fa-robot",
    label: "Hugging Face",
    value: "Xx-Vexento-xX",
    href: "https://huggingface.co/Xx-Vexento-xX",
  },
];

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-header">
        <span className="logo-dot" />
        <h2 className="contact-heading">Let's Connect</h2>
        <p className="contact-sub">
          Reach out — I'm always up for talking through a build.
        </p>
      </div>

      <div className="contact-grid">
        {items.map((item) => (
          <a
            className="contact-card"
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noreferrer" : undefined}
            key={item.label}
          >
            <div className="contact-card-top">
              <span className="contact-card-icon">
                <i className={item.icon} />
              </span>
              <i className="fa-solid fa-arrow-up-right contact-card-arrow" />
            </div>
            <div className="contact-card-label">{item.label}</div>
            <div className="contact-card-value">{item.value}</div>
          </a>
        ))}
      </div>

      <p className="contact-footer-copy">&copy; {new Date().getFullYear()} Sarvin Sukhe.</p>
    </section>
  );
}
