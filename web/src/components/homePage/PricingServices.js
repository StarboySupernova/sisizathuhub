import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const PricingStyles = styled.section`
  position: relative;
  width: 100%;
  padding: 4rem 2rem;
  margin: 5rem 0;
  background: rgba(10, 17, 40, 0.4); /* Matches your dark tech theme */
  border-radius: 40px;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.05);

  /* Abstract Glowing Background Blobs */
  .blob {
    position: absolute;
    filter: blur(100px);
    z-index: 0;
    border-radius: 50%;
  }
  .blob-1 {
    top: -10%;
    left: -10%;
    width: 450px;
    height: 450px;
    background: var(--secondary); /* Tech Blue */
    opacity: 0.5;
  }
  .blob-2 {
    bottom: -10%;
    right: -10%;
    width: 500px;
    height: 500px;
    background: var(--primary); /* Cyan */
    opacity: 0.4;
  }
  .blob-3 {
    top: 40%;
    left: 20%;
    width: 400px;
    height: 400px;
    background: #491EB8; /* Deep Indigo for depth */
    opacity: 0.3;
  }

  .content {
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }

  header {
    text-align: center;
  }
  header h2 {
    font-size: 1.4rem;
    letter-spacing: 5px;
    text-transform: uppercase;
    color: var(--primary);
    margin-bottom: 1rem;
    font-weight: 800;
  }
  header h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 3.8rem;
    line-height: 1.2;
    font-weight: 800;
    margin-bottom: 1.5rem;
    background: linear-gradient(to right, #ffffff, var(--primary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  header p {
    font-size: 1.6rem;
    color: var(--gray);
    max-width: 800px;
    margin: 0 auto;
  }

  .tiers {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2.5rem;
  }

  /* Glassmorphic Cards */
  .glass-card {
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(25px);
    -webkit-backdrop-filter: blur(25px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 24px;
    padding: 3rem 2rem;
    display: flex;
    flex-direction: column;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    position: relative;
    overflow: hidden;
  }
  .glass-card:hover {
    transform: translateY(-12px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  }
  .glass-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(90deg, var(--primary), var(--secondary));
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  .glass-card:hover::before {
    opacity: 1;
  }

  .card-badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 0.4rem 1rem;
    border-radius: 20px;
    font-size: 1rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  .card-badge.cyan {
    background: rgba(0, 174, 239, 0.15);
    color: var(--primary);
    border: 1px solid rgba(0, 174, 239, 0.3);
  }
  .card-badge.blue {
    background: rgba(0, 123, 255, 0.15);
    color: var(--secondary);
    border: 1px solid rgba(0, 123, 255, 0.3);
  }
  .card-badge.gold {
    background: rgba(243, 190, 79, 0.15);
    color: #F3BE4F;
    border: 1px solid rgba(243, 190, 79, 0.3);
  }

  .glass-card h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 2.2rem;
    margin-bottom: 0.5rem;
    margin-top: 1.5rem;
    font-weight: 700;
  }
  .glass-card .target-audience {
    font-size: 1.4rem;
    color: var(--primary);
    margin-bottom: 1.5rem;
    font-weight: 600;
    min-height: 4rem;
  }
  .glass-card .price {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 2rem;
    display: flex;
    align-items: baseline;
    gap: 8px;
    font-family: 'Poppins', sans-serif;
  }
  .glass-card .price span {
    font-size: 1.4rem;
    color: var(--gray);
    font-weight: 400;
  }

  .glass-card ul {
    list-style: none;
    margin-bottom: 3rem;
    flex-grow: 1;
  }
  .glass-card ul li {
    margin-bottom: 1.2rem;
    display: flex;
    align-items: flex-start;
    gap: 12px;
    font-size: 1.4rem;
    color: var(--white-1);
    line-height: 1.5;
  }
  .glass-card ul li::before {
    content: '✓';
    color: var(--primary);
    font-weight: 900;
  }
  .glass-card ul li strong {
    color: white;
  }

  .btn {
    display: inline-block;
    padding: 1.2rem 2rem;
    text-align: center;
    border-radius: 8px;
    font-size: 1.4rem;
    font-weight: 700;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease;
    border: none;
  }
  .btn-outline {
    background: transparent;
    color: white;
    border: 2px solid var(--primary);
  }
  .btn-outline:hover {
    background: rgba(0, 174, 239, 0.1);
  }
  .btn-solid {
    background: linear-gradient(90deg, var(--secondary), var(--primary));
    color: white;
    box-shadow: 0 4px 15px rgba(0, 174, 239, 0.4);
  }
  .btn-solid:hover {
    box-shadow: 0 6px 20px rgba(0, 174, 239, 0.6);
    transform: translateY(-2px);
  }

  /* Marketing CTA Banner */
  .marketing-banner {
    background: linear-gradient(135deg, rgba(10, 17, 40, 0.8), rgba(0, 174, 239, 0.3));
    border-radius: 24px;
    padding: 4rem;
    text-align: center;
    border: 1px solid rgba(0, 174, 239, 0.4);
    box-shadow: 0 20px 40px rgba(0,0,0,0.5);
    backdrop-filter: blur(15px);
  }
  .marketing-banner h2 {
    font-family: 'Poppins', sans-serif;
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
  }
  .marketing-banner p {
    font-size: 1.6rem;
    margin-bottom: 2.5rem;
    color: rgba(255,255,255,0.9);
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 900px) {
    padding: 2rem;
    header h1 { font-size: 3rem; }
    header p { font-size: 1.4rem; }
    .glass-card .price { font-size: 2.5rem; }
    .marketing-banner h2 { font-size: 2.2rem; }
  }
`;

function PricingServices() {
  return (
    <PricingStyles>
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>

      <div className="content">
        <header>
          <h2>Sisizathu Hub Architecture</h2>
          <h1>DOMINATE YOUR DIGITAL LANDSCAPE.</h1>
          <p>
            In the modern economy, robust IT infrastructure isn't optional—it's your ultimate competitive advantage. We build highly scalable, secure assets that work 24/7 so you don't have to.
          </p>
        </header>

        <div className="tiers">
          {/* Tier 1: Web Hosting */}
          <div className="glass-card">
            <div className="card-badge cyan">Starter</div>
            <h3>Digital Foundation</h3>
            <p className="target-audience">For SMMEs ready to establish a reliable digital footprint.</p>
            <div className="price">R 100 <span>/ mo</span></div>
            <ul>
              <li><strong>High-Availability Hosting</strong> ensuring 99.9% uptime for your enterprise.</li>
              <li><strong>2GB - 10GB Scalable Storage</strong> to grow seamlessly alongside your business.</li>
              <li><strong>Commercial Printing Support</strong> for aligned physical and digital branding.</li>
              <li><strong>Continuous Maintenance</strong> keeping your foundation rock-solid.</li>
            </ul>
            {/* Smooth scroll to the contact form at the bottom */}
            <a href="#contact-section" className="btn btn-outline">Deploy Foundation</a>
          </div>

          {/* Tier 2: Custom Software */}
          <div className="glass-card">
            <div className="card-badge blue">Most Popular</div>
            <h3>The Growth Engine</h3>
            <p className="target-audience">For businesses ready to automate and scale operations.</p>
            <div className="price">Custom <span>Quote</span></div>
            <ul>
              <li><strong>Bespoke Software Solutions</strong> perfectly tailored to your unique workflows.</li>
              <li><strong>CRM & ERP Modules</strong> (HR Payroll, Bulk Email, Invoice Management).</li>
              <li><strong>Web & Mobile App Development</strong> reaching clients on every platform.</li>
              <li><strong>Cloud Integrations</strong> that eliminate operational friction.</li>
            </ul>
            <a href="#contact-section" className="btn btn-solid">Architect Your Software</a>
          </div>

          {/* Tier 3: Cybersecurity */}
          <div className="glass-card">
            <div className="card-badge gold">Elite Power</div>
            <h3>Enterprise Security</h3>
            <p className="target-audience">For ambitious brands requiring impenetrable defenses.</p>
            <div className="price">Custom <span>Quote</span></div>
            <ul>
              <li><strong>AI-Driven Threat Detection</strong> monitoring your networks 24/7/365.</li>
              <li><strong>Vulnerability Assessments</strong> & ethical hacking to patch cracks early.</li>
              <li><strong>Rapid Incident Response</strong> to instantly contain and neutralize breaches.</li>
              <li><strong>GDPR/POPIA Compliance</strong> ensuring complete legal data protection.</li>
            </ul>
            <a href="#contact-section" className="btn btn-outline">Secure Your Legacy</a>
          </div>
        </div>

        {/* Marketing Banner */}
        <div className="marketing-banner">
          <h2>DON'T LEAVE YOUR ENTERPRISE VULNERABLE.</h2>
          <p>
            Whether it's scalable web hosting, automated CRM systems, or military-grade cybersecurity protocols, Sisizathu Hub gives you the ultimate unfair advantage.
          </p>
          <a href="#contact-section" className="btn btn-solid" style={{ background: 'white', color: 'var(--darkBlue)', boxShadow: '0 5px 20px rgba(255,255,255,0.3)' }}>
            Initialize Consultation Today
          </a>
        </div>
      </div>
    </PricingStyles>
  );
}

export default PricingServices;