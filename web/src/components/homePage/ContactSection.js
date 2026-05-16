import React, { useState } from "react";
import styled from "styled-components";
import { FaCheckCircle, FaChevronDown } from "react-icons/fa";
import { SectionTitle } from "../typography/Title";
import ParagraphText from "../typography/ParagraphText";

const ContactSectionStyles = styled.div`
  padding: 8rem 0;
  display: flex;
  justify-content: center;

  .quote-form-container {
    width: 100%;
    max-width: 800px;
    background: rgba(10, 17, 40, 0.4);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    padding: 50px;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-top: 1px solid rgba(0, 174, 239, 0.4);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1);

    .form-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }

    .full-width {
      grid-column: 1 / -1;
    }

    input, textarea {
      width: 100%;
      padding: 16px 20px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      background: rgba(0, 0, 0, 0.4);
      color: var(--white);
      font-size: 1.5rem;
      font-family: "Inter", sans-serif;
      transition: all 0.3s ease;
      outline: none;
      &:focus {
        border-color: var(--primary);
        background: rgba(0, 0, 0, 0.6);
        box-shadow: 0 0 15px rgba(0, 174, 239, 0.2);
      }
    }

    .custom-select-container {
      position: relative;
      width: 100%;
      cursor: pointer;
      font-size: 1.5rem;
    }

    .select-trigger {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 20px;
      background: rgba(0, 0, 0, 0.4);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      color: var(--white);
      transition: 0.3s;

      /* Constraint for the dropdown chevron SVG */
      svg {
        width: 16px;
        height: 16px;
        min-width: 16px;
      }
    }

    .select-trigger.active {
      border-color: var(--primary);
    }

    .dropdown-menu {
      position: absolute;
      top: calc(100% + 8px);
      left: 0;
      width: 100%;
      background: rgba(10, 17, 40, 0.95);
      backdrop-filter: blur(20px);
      border: 1px solid var(--primary);
      border-radius: 12px;
      z-index: 100;
      overflow: hidden;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.8);
    }

    .dropdown-item {
      padding: 14px 20px;
      color: var(--white-1);
      transition: 0.2s;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      &:hover {
        background: var(--primary);
        color: var(--black);
        font-weight: 600;
      }
    }

    .submit-btn {
      width: 100%;
      background: linear-gradient(135deg, var(--secondary), var(--primary));
      color: var(--white);
      padding: 18px;
      border: none;
      border-radius: 8px;
      font-size: 1.6rem;
      font-weight: 800;
      cursor: pointer;
      transition: 0.3s;
      letter-spacing: 1px;
      margin-top: 10px;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 25px rgba(0, 174, 239, 0.4);
      }
    }

    .success-message {
      text-align: center;
      padding: 40px 0;
      .success-icon { font-size: 6rem; color: #00AEEF; margin-bottom: 20px; }
      h3 { font-size: 2.5rem; margin-bottom: 10px; color: var(--white); }
      p { font-size: 1.6rem; color: var(--gray); margin-bottom: 30px; }
      .reset-btn {
        background: transparent; color: var(--primary); border: 1px solid var(--primary);
        padding: 10px 20px; border-radius: 6px; cursor: pointer; font-size: 1.4rem;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .quote-form-container {
      padding: 30px 20px;
      .form-grid { grid-template-columns: 1fr; }
    }
  }
`;

function ContactSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Select Required Service...");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    "Cybersecurity / MSSP",
    "Custom Software Development",
    "Web Hosting & Cloud",
    "Commercial Printing",
    "General IT Consultation",
  ];

  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "it-inquiry", ...data })
    })
      .then(() => setIsSubmitted(true))
      .catch(error => alert(error));
  };

  return (
    <ContactSectionStyles id="contact-section">
      <div className="quote-form-container">
        {isSubmitted ? (
          <div className="success-message">
            <FaCheckCircle className="success-icon" />
            <h3>Inquiry Received</h3>
            <p>Our technical team will review your requirements and reach out shortly.</p>
            <button onClick={() => setIsSubmitted(false)} className="reset-btn">Submit another inquiry</button>
          </div>
        ) : (
          <>
            <SectionTitle style={{marginBottom: "1rem"}}>Request a Technical Consultation</SectionTitle>
            <ParagraphText style={{marginBottom: "3rem"}}>
              Share your project details, and our engineers will architect a solution tailored to your enterprise.
            </ParagraphText>
            
            <form name="it-inquiry" method="POST" data-netlify="true" onSubmit={handleSubmit}>
              <input type="hidden" name="form-name" value="it-inquiry" />
              
              <div className="form-grid">
                <input type="text" name="name" placeholder="Full Name" required />
                <input type="text" name="company" placeholder="Company Name" required />
                <input type="email" name="email" placeholder="Corporate Email" required />
                <input type="tel" name="phone" placeholder="Phone Number" required />
                
                <div className="custom-select-container full-width">
                  <div className={`select-trigger ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                    <span>{selectedService}</span>
                    <FaChevronDown className="arrow" />
                  </div>
                  {isOpen && (
                    <div className="dropdown-menu">
                      {services.map((service) => (
                        <div key={service} className="dropdown-item" onClick={() => { setSelectedService(service); setIsOpen(false); }}>
                          {service}
                        </div>
                      ))}
                    </div>
                  )}
                  <input type="hidden" name="service" value={selectedService} />
                </div>

                <div className="full-width">
                  <textarea name="message" placeholder="Project details, technical requirements, or current infrastructure challenges..." rows="5" required></textarea>
                </div>
              </div>

              <button type="submit" className="submit-btn full-width">Initialize Consultation</button>
            </form>
          </>
        )}
      </div>
    </ContactSectionStyles>
  );
}

export default ContactSection;