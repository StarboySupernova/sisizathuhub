import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

// This wrapper uses a clearfix to ensure the floated elements don't collapse
const SectionWrapper = styled.div`
  margin: 2rem 0;
  &::after {
    content: "";
    display: table;
    clear: both;
  }
`;

// By setting float: left and shape-outside: circle, the text organically wraps around the 3D globe!
const SphereFloatContainer = styled.div`
  float: left;
  /* Use a fluid width that responds to screen size */
  width: 35%; 
  min-width: 250px;
  aspect-ratio: 1 / 1;
  
  /* Update these two properties for perfect padding! */
  shape-outside: circle(50%); 
  shape-margin: 2rem; /* <-- This pushes the text away from the SVGs */
  
  margin-right: 3rem;
  margin-bottom: 1rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  
  /* Reduce size slightly for tablet/smaller screens to keep text legible */
  @media (max-width: 900px) {
    width: 40%;
    min-width: 200px;
    margin-right: 2rem;
  }

  /* On very small phones, we keep the float but shrink the sphere significantly */
  @media (max-width: 480px) {
    width: 45%;
    min-width: 150px;
    margin-right: 1.5rem;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: clamp(18px, 4vw, 28px);  /* Will automatically shrink between 18px and 28px */
    height: clamp(18px, 4vw, 28px);
    filter: drop-shadow(0 0 5px rgba(0, 174, 239, 0.6));
    opacity: 0.8;
  }
`;

const MarketingCopy = styled.div`
  font-size: 1.65rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.85);
  text-align: justify;

  h2 {
    font-family: 'Poppins', sans-serif;
    font-size: 3.5rem;
    color: var(--primary);
    margin-bottom: 1.5rem;
    font-weight: 800;
    line-height: 1.2;
    background: linear-gradient(to right, #ffffff, var(--primary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  p {
    margin-bottom: 1.8rem;
  }

  strong {
    color: var(--white);
    font-weight: 700;
  }
  
  .highlight {
    color: var(--primary);
    font-weight: 600;
  }

  @media (max-width: 900px) {
    text-align: left;
  }
`;

// Math logic for sphere distribution
const generatePoints = (count) => {
  const points =[];
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const yRatio = 1 - (i / Math.max(1, count - 1)) * 2;
    const radiusAtY = Math.sqrt(1 - yRatio * yRatio);
    const theta = goldenAngle * i;
    const x = radiusAtY * Math.cos(theta);
    const z = radiusAtY * Math.sin(theta);
    points.push({ x, y: yRatio, z });
  }
  return points;
};

export default function TechSphere() {
  const [rotation, setRotation] = useState(0);
  const [iconPaths, setIconPaths] = useState([]);
  const requestRef = useRef();

  // Load all SVGs from your local folder
  useEffect(() => {
    try {
      const context = require.context('../images/svgs', false, /\.svg$/);
      const paths = context.keys().map(context);
      setIconPaths(paths);
    } catch (err) {
      console.error("Could not find SVGs in folder. Ensure path is correct.", err);
    }
  }, []);

  const points = useRef([]);
  if (points.current.length !== iconPaths.length) {
    points.current = generatePoints(iconPaths.length);
  }

  const animate = time => {
    setRotation(time * 0.0002); // Elegant, slow rotation
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  },[]);

  if (iconPaths.length === 0) return null;

  return (
    <SectionWrapper>
      <SphereFloatContainer>
        {points.current.map((point, i) => {
          const rotatedX = point.x * Math.cos(rotation) - point.z * Math.sin(rotation);
          const rotatedZ = point.x * Math.sin(rotation) + point.z * Math.cos(rotation);
          
          const radius =
            window.innerWidth > 900 ? 180 : window.innerWidth > 480 ? 120 : 80;

          const perspective = 350 / (350 + rotatedZ * radius);
          const screenX = rotatedX * radius * perspective;
          const screenY = point.y * radius * perspective;
          
          const scale = Math.max(0.1, perspective);
          const opacity = perspective > 1 ? 1 : 0.1 + (perspective * 0.6);
          const zIndex = Math.floor(perspective * 100);

          return (
            <IconWrapper
              key={i}
              style={{
                transform: `translate3d(${screenX}px, ${screenY}px, 0) scale(${scale})`,
                opacity: opacity,
                zIndex: zIndex
              }}
            >
              <img src={iconPaths[i].default || iconPaths[i]} alt="tech icon" />
            </IconWrapper>
          );
        })}
      </SphereFloatContainer>
      
      <MarketingCopy>
        <h2>Architecting the Digital Dominance of Tomorrow.</h2>
        <p>
          In today's hyper-accelerated digital economy, mere survival is an obsolete metric—your enterprise must dominate. The digital frontier is ruthless to the unprepared, yet it serves as a landscape of limitless potential for the strategically equipped. Every operational bottleneck is lost revenue; every security vulnerability is a looming catastrophe. At <strong>Sisizathu Hub</strong>, we do not merely provide IT support; we engineer the technological backbone of your future empire, transforming digital complexity into your ultimate competitive advantage.
        </p>
        <p>
          Imagine a technological ecosystem so robust and meticulously calibrated that your absolute focus remains solely on scaling your vision. Our military-grade cybersecurity protocols—powered by <span className="highlight">battle-tested threat detection</span> and exhaustive vulnerability assessments—stand as an impenetrable fortress around your most valuable corporate assets. But defensive architecture is merely the baseline of our offering.
        </p>
        <p>
          To truly outpace market competition, you require bespoke software solutions that breathe life into your operational workflows, eliminating friction and unlocking exponential workforce productivity. From high-availability, lightning-fast web hosting that ensures your brand's digital presence never sleeps, to enterprise-tier commercial printing that makes your physical footprint as commanding as your virtual one, we are the catalyst for your aggressive evolution.
        </p>
        <p>
          We understand that behind every data point, server node, and line of code lies the living heartbeat of your business. Our multidisciplinary team of elite engineers, cybersecurity veterans, and strategic visionaries partner intimately with you to navigate the unknown with absolute mathematical certainty. Command your market. Secure your legacy. Welcome to the new global standard of enterprise excellence.
        </p>
      </MarketingCopy>
    </SectionWrapper>
  );
}