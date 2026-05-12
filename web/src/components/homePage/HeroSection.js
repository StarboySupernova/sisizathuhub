import React, { useState, useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { HeroSectionStyles } from "../../styles/homePage/HeroSectionStyles";
import ParagraphText from "../typography/ParagraphText";
import Button from "../buttons/Button";

function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  // Auto-rotate the images inside the SVG every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % 4);
    }, 3500);
    return () => clearInterval(timer);
  },[]);

  return (
    <HeroSectionStyles>
      <div className="container">
        <div className="hero__wrapper">
          {/* LEFT SIDE: Text */}
          <div className="left">
            <div className="badge">🚀 ENTERPRISE IT SOLUTIONS</div>
            <h1 className="hero__heading">
              Innovative IT Solutions Tailored for SMME Growth
            </h1>
            <ParagraphText className="hero__text">
              Sisizathu Hub is a premier provider of managed security, software
              development, and digital infrastructure. We empower enterprises
              with secure, scalable, and future-ready technology.
            </ParagraphText>
            <Button to="/spotlight" tag={Link} className="hero__button">
              Explore Our Latest Work
            </Button>
          </div>

          {/* RIGHT SIDE: 3D GLASSMORPHIC SVG CAROUSEL */}
          <div className="right">
            <div className="svg-carousel-container">
              <svg
                width="100%"
                viewBox="0 0 310 432"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Back Drop Shadow */}
                <path
                  d="M9.29688 0.958984L241.912 60.0358C274.03 68.1926 300.066 101.668 300.066 134.805V371.805C300.066 404.942 274.03 425.193 241.912 417.036L67.4507 372.728C35.3332 364.571 9.29688 331.096 9.29688 297.959V0.958984Z"
                  fill="black"
                  fillOpacity="0.6"
                />

                {/* The Tilted Cyan/Blue Gradient Card */}
                <path
                  d="M9.29688 0.958984L247.633 29.168C280.541 33.0628 307.217 63.0831 307.217 96.2202V333.22C307.217 366.357 280.541 390.063 247.633 386.168L68.881 365.011C35.9736 361.116 9.29688 331.096 9.29688 297.959V0.958984Z"
                  fill="url(#paint0_linear_sisizathu)"
                />

                {/* Glass Panel Masking the Images */}
                <foreignObject x="11" y="8" width="288" height="364">
                  <div className="carousel-mask">
                    <div
                      className={`carousel-image ${currentImage === 0 ? "active" : ""}`}
                    >
                      <StaticImage
                        src="../../images/hero1.jpg"
                        alt="Cybersecurity"
                        objectFit="fill"
                        imgStyle={{ objectFit: "fill" }}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <div
                      className={`carousel-image ${currentImage === 1 ? "active" : ""}`}
                    >
                      <StaticImage
                        src="../../images/hero2.png"
                        alt="Software Engineering"
                        objectFit="fill"
                        imgStyle={{ objectFit: "fill" }}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <div
                      className={`carousel-image ${currentImage === 2 ? "active" : ""}`}
                    >
                      <StaticImage
                        src="../../images/hero3.jpg"
                        alt="digital infrastructure"
                        objectFit="fill"
                        imgStyle={{ objectFit: "fill" }}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <div
                      className={`carousel-image ${currentImage === 3 ? "active" : ""}`}
                    >
                      <StaticImage
                        src="../../images/hero4.jpg"
                        alt="Web Hosting"
                        objectFit="fill"
                        imgStyle={{ objectFit: "fill" }}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>

                    <div className="glass-reflection-overlay"></div>
                  </div>
                </foreignObject>

                <defs>
                  <linearGradient
                    id="paint0_linear_sisizathu"
                    x1="9.29688"
                    y1="0.958984"
                    x2="-32.3731"
                    y2="353.027"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00AEEF" /> {/* Cyan */}
                    <stop offset="1" stopColor="#007BFF" /> {/* Blue */}
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </HeroSectionStyles>
  );
}

export default HeroSection;