const InquiryForm = () => {
  return (
    <section className="inquiry-section">
      <div className="inquiry-container">
        <h2 className="inquiry-heading">Export Inquiry Form</h2>
        <div className="inquiry-form-wrapper">
          <iframe
            title="Neo-Indian Exports Inquiry Form"
            src="https://docs.google.com/forms/d/e/1FAIpQLSesB9_6UuoycqkWxqbcMI2ulmOWZFtY4pY4WK2dXkcR8EakGw/viewform?embedded=true"
            width="100%"
            height={480}
            style={{ border: "none", aspectRatio: "1 / 1", maxWidth: 480 }}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default InquiryForm;
