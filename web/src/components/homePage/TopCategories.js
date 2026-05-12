import { graphql, useStaticQuery } from "gatsby";
import React, { useState, useEffect, useRef } from "react";
import { TopCategoriesStyles } from "../../styles/homePage/TopCategoriesStyles";
import ActivityGrid from "../category/ActivityGrid";
import ParagraphText from "../typography/ParagraphText";
import { SectionTitle } from "../typography/Title";
import ValueGrid from "../category/ValueGrid";
import ObjectiveGrid from "../category/ObjectiveGrid";
import { FaShieldAlt, FaCode, FaServer, FaSync } from "react-icons/fa"; 

const initialCards =[
  {
    id: "security",
    title: "Uncompromising Security",
    text: "We deploy AI-driven threat detection and robust endpoint protection to ensure your enterprise data remains impervious to modern cyber threats.",
    theme: "theme-cyan",
    icon: <FaShieldAlt />
  },
  {
    id: "software",
    title: "Bespoke Development",
    text: "Our software architectures are engineered for scale. From CRM modules to high-performance web apps, we translate your business logic into code.",
    theme: "theme-dark",
    icon: <FaCode />
  },
  {
    id: "infrastructure",
    title: "Scalable Infrastructure",
    text: "High-availability web hosting packages tailored for SMMEs, providing the 99.9% uptime and bandwidth required for continuous digital operations.",
    theme: "theme-slate",
    icon: <FaServer />
  }
];

function TopCategories() {
  const data = useStaticQuery(graphql`
    {
      allSanitySpotlight(filter: { _id: { eq: "spotlightItems" } }) {
        nodes {
          activity {
            id
            title
            slug { current }
            _rawDescription
          }
        }
      }
      allSanityObjective { nodes { id, _rawDescription } }
      allSanityValue { nodes { id, _rawDescription } }
    }
  `);

  const spotlightNode = data.allSanitySpotlight.nodes[0];
  const activities = spotlightNode?.activity ||[];
  const objectives = data.allSanityObjective?.nodes ||[];
  const DiginotiveValues = data.allSanityValue?.nodes || [];

  const [stackedCards, setStackedCards] = useState(initialCards);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef();

  const shuffle = () => {
    setStackedCards((prev) => {
      const newCards = [...prev];
      const firstCard = newCards.shift();
      newCards.push(firstCard);
      return newCards;
    });
  };

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(shuffle, 4000);
    }
    return () => clearInterval(autoPlayRef.current);
  }, [isAutoPlaying]);

  const handleManualClick = (id, e) => {
    e.stopPropagation();
    setIsAutoPlaying(false);
    setStackedCards((prev) => {
      const index = prev.findIndex((c) => c.id === id);
      if (index === prev.length - 1) return prev;
      const newCards = [...prev];
      const [clickedCard] = newCards.splice(index, 1);
      newCards.push(clickedCard);
      return newCards;
    });
  };

  return (
    <TopCategoriesStyles>
      
      <div className="card-stack-wrapper">
        <div className="card-stack-container">
          {stackedCards.map((card, index) => {
            const isTop = index === stackedCards.length - 1;
            const offset = stackedCards.length - 1 - index;
            
            return (
              <div
                key={card.id}
                className={`stacked-card ${card.theme} card-depth-${offset} ${isTop && isAutoPlaying ? 'pulse-hint' : ''}`}
                onClick={(e) => handleManualClick(card.id, e)}
                style={{
                  zIndex: index,
                  '--card-offset': offset,
                  opacity: isTop ? 1 : 0.8,
                }}
              >
                <div className="card-header">
                  <h3>{card.title}</h3>
                  <div className="card-icon">{card.icon}</div>
                </div>
                <div className="card-body">
                  <p>{card.text}</p>
                </div>
                {isTop && (
                  <div className="interaction-hint">
                    <FaSync /> <span>{isAutoPlaying ? "Auto-Cycling" : "Interactive Mode"}</span>
                  </div>
                )}
                {!isTop && <div className="card-click-overlay"></div>}
              </div>
            );
          })}
        </div>
      </div>

      <SectionTitle className="centre__text">Our Values</SectionTitle>
      <ValueGrid DiginotiveValues={DiginotiveValues} />

      <SectionTitle className="centre__text">Our Objectives</SectionTitle>
      <ObjectiveGrid objectives={objectives} />

      <div style={{marginTop: "5rem"}}>
        <SectionTitle className="centre__text">Core Capabilities</SectionTitle>
        <ParagraphText className="centre__text" style={{maxWidth: "600px", margin: "0 auto"}}>
          Catalyzing digital transformation through our impactful core technology pillars.
        </ParagraphText>
        <ActivityGrid activities={activities} />
      </div>
      
    </TopCategoriesStyles>
  );
}

export default TopCategories;