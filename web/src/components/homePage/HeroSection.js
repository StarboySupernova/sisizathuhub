import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { HeroSectionStyles } from '../../styles/homePage/HeroSectionStyles';
import ParagraphText from '../typography/ParagraphText';
import Button from '../buttons/Button';
import { SectionTitle } from '../typography/Title';

function HeroSection() {
  return (
    <HeroSectionStyles>
      <div className="container">
        <div className="hero__wrapper">
          <div className="left">
            <h1 className="hero__heading">
              Empowering rural communities to sustainability through
              grassroots-driven environmentally friendly intervention methods
            </h1>
            <ParagraphText className="hero__text">
              We actively leverage cutting edge solutions & collective effort to
              compliment and augment vulnerable rural communities' ability to
              envision and build a resilient tomorrow, one community at a time
            </ParagraphText>
            <SectionTitle>Our Vision</SectionTitle>
            <ParagraphText className="hero__text">
              Creating resilient and sustainably developed communities
            </ParagraphText>
            <SectionTitle>Our Mission</SectionTitle>
            <ParagraphText className="hero__text">
              Strengthening the capabilities of grassroots communities to
              collectively strategize, mitigate, and respond to a spectrum of
              natural and anthropogenic shocks and hazards.
            </ParagraphText>
            <Button to="/spotlight" tag={Link} className="hero__button">
              Explore Our Work
            </Button>
          </div>
          <div className="right">
            <StaticImage
              className="hero__image"
              src="../../images/demtMalnutrition.jpg"
              alt="DEMT hero image"
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
