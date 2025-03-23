import React from "react";
import "./Contact.css"; // Import the CSS file
import contactImage from "C:/Users/Samrudhi/Videos/Samrudhi/Portfolio/react-app/src/assets/blob.gif"; // Import the image (replace with your image path)

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <div className="contact-container">
        {/* Left Side: Contact Form and Info */}
        <div className="contact-box">
          {/* Contact Form */}
          <div className="contact-form">
            <h3>Send Me a Message</h3>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} required />
              </div>
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>
              <strong>Email:</strong> raosamrudhi2@gmail.com
            </p>
            <p>
              <strong>Phone:</strong> +49 15218134309
            </p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/samrudhi-rao/" rel="noopener noreferrer">
                <img
                  src="https://img.icons8.com/color/48/000000/linkedin.png"
                  alt="LinkedIn"
                />
              </a>
              <a href="https://github.com/SamrudhiRRao" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://img.icons8.com/color/48/000000/github.png"
                  alt="GitHub"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="image-container">
          <img
            src={contactImage} // Use the imported image
            alt="Decorative Image"
            className="contact-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
