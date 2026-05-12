import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { 
  FaShieldAlt, FaCode, FaServer, FaCloud, FaDatabase, 
  FaMobileAlt, FaLock, FaNetworkWired, FaLaptopCode, FaGlobe, 
  FaBrain, FaCogs, FaWifi, FaSatelliteDish, FaMicrochip 
} from 'react-icons/fa';

const SphereContainer = styled.div`
  position: relative;
  width: 100%;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin: 3rem 0;
`;

const IconWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  
  svg {
    width: 35px;
    height: 35px;
    filter: drop-shadow(0 0 8px rgba(0, 174, 239, 0.8));
  }
`;

// Math logic directly from your iOS algorithm!
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

// You can swap these with your own custom imported SVG images!
const svgsList =[
  <FaShieldAlt />, <FaCode />, <FaServer />, <FaCloud />, <FaDatabase />, 
  <FaMobileAlt />, <FaLock />, <FaNetworkWired />, <FaLaptopCode />, <FaGlobe />,
  <FaBrain />, <FaCogs />, <FaWifi />, <FaSatelliteDish />, <FaMicrochip />,
  <FaShieldAlt />, <FaCode />, <FaServer />, <FaCloud />, <FaDatabase />
];

export default function TechSphere() {
  const [rotation, setRotation] = useState(0);
  const requestRef = useRef();
  
  // Create 20 points
  const points = useRef(generatePoints(svgsList.length));

  const animate = time => {
    setRotation(time * 0.0005); // Controls the speed of the spin
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  },[]);

  return (
    <SphereContainer>
      {points.current.map((point, i) => {
        // Apply 3D Rotation Matrix
        const rotatedX = point.x * Math.cos(rotation) - point.z * Math.sin(rotation);
        const rotatedZ = point.x * Math.sin(rotation) + point.z * Math.cos(rotation);
        
        // Apply Perspective Projection
        const perspective = 300 / (300 + rotatedZ * 140); // 140 is the radius
        const screenX = rotatedX * 140 * perspective;
        const screenY = point.y * 140 * perspective;
        
        const scale = Math.max(0.1, perspective);
        const opacity = perspective > 1 ? 1 : 0.2 + (perspective * 0.5);
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
            {svgsList[i % svgsList.length]}
          </IconWrapper>
        );
      })}
    </SphereContainer>
  );
}