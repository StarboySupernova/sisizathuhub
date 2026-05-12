import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { HeroSectionStyles } from "../../styles/homePage/HeroSectionStyles";
import ParagraphText from "../typography/ParagraphText";
import Button from "../buttons/Button";

function HeroSection() {
  return (
    <HeroSectionStyles>
      <div className="container">
        <div className="hero__wrapper">
          <div className="left">
            <h1 className="hero__heading">
              Innovative IT Solutions Tailored for SMME Growth
            </h1>
            <ParagraphText className="hero__text">
              Sisizathu Hub is a premier provider of managed security, software
              development, and digital infrastructure. We empower Small and
              Medium Enterprises with enterprise-grade technology, from
              cybersecurity and web hosting to custom software and commercial
              printing solutions."
            </ParagraphText>
            <Button to="/spotlight" tag={Link} className="hero__button">
              Explore Our Latest Work
            </Button>
          </div>
          <div className="right">
            <StaticImage
              className="hero__image"
              src="../../images/demtMalnutrition.jpg"
              alt="Sisizathu Hub hero image"
              placeholder="blurred"
              objectPosition="50% 30%"
            />
          </div>
        </div>
      </div>
    </HeroSectionStyles>
  );
}

export default HeroSection;
