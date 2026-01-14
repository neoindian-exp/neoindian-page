const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-brand">Neo-Indian Exports</h2>
        <div className="footer-details">
          <span className="footer-email">
            <a href="mailto:info@neoindianexports.com">info@neoindianexports.com</a>
          </span>
          <span className="footer-location">India</span>
        </div>
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} Neo-Indian Exports. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
