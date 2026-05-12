import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

const SphereContainer = styled.div`
  position: relative;
  width: 100%;
  height: 450px; /* Increased height for 60 icons */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin: 4rem 0;
`;

const IconWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 28px; /* Optimized size for 60 items */
    height: 28px;
    filter: drop-shadow(0 0 5px rgba(0, 174, 239, 0.6));
    opacity: 0.8;
  }
`;

// Math logic for sphere distribution
const generatePoints = (count) => {
  const points = [];
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

  // 1. AUTOMATICALLY LOAD ALL 60 SVGS
  useEffect(() => {
    try {
      // This line grabs all .svg files from your images/svgs folder
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
    setRotation(time * 0.0002); // Slow, premium rotation
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  if (iconPaths.length === 0) return null;

  return (
    <SphereContainer>
      {points.current.map((point, i) => {
        const rotatedX = point.x * Math.cos(rotation) - point.z * Math.sin(rotation);
        const rotatedZ = point.x * Math.sin(rotation) + point.z * Math.cos(rotation);
        
        // 180 is the radius of the sphere
        const perspective = 350 / (350 + rotatedZ * 180); 
        const screenX = rotatedX * 180 * perspective;
        const screenY = point.y * 180 * perspective;
        
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
    </SphereContainer>
  );
}