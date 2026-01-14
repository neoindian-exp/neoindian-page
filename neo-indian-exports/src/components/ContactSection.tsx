const ContactSection = () => {
  const handleContactClick = () => {
    window.location.href = 'mailto:info@neoindianexports.com';
  };

  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="contact-heading">Get In Touch</h2>
        <p className="contact-subtitle">Connect with us to explore export opportunities</p>
        
        <div className="contact-wrapper">
          <div className="contact-info">
            <h3>Contact Details</h3>
            
            <div className="contact-item">
              <h4>Email</h4>
              <p>
                <a href="mailto:info@neoindianexports.com">info@neoindianexports.com</a>
              </p>
            </div>
            
            <div className="contact-item">
              <h4>Phone</h4>
              <p>
                <a href="tel:+91-9597818188">+91-9597818188</a>
              </p>
            </div>
            
            <div className="contact-item">
              <h4>Location</h4>
              <p>Neo-Indian Exports <br />
                Shanthi nivas, 116/39, Nachimuthu Pudur, near Bus Stand, Anna Nagar, Dharapuram, Tamil Nadu 638656
</p>
            </div>
            
            <div className="contact-item">
              <h4>Business Hours</h4>
              <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
              <p>Saturday: 10:00 AM - 4:00 PM IST</p>
            </div>

            <button className="cta-button" onClick={handleContactClick}>
              Start a Conversation
            </button>
          </div>

          <div className="contact-map">
            <h3>Our Location</h3>
            <iframe
              title="Neo-Indian Exports Location"
              width="100%"
              height="400"
              frameBorder="0"
              src="https://www.google.com/maps?q=10.733556017755278, 77.51968158192598&z=15&output=embed"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
