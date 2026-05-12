import React from 'react';
import styled, { keyframes } from 'styled-components';

const pulseGlow = keyframes`
  0% { box-shadow: 0 0 5px rgba(0, 174, 239, 0.1), 0 0 10px rgba(0, 174, 239, 0.1); opacity: 0.5; }
  100% { box-shadow: 0 0 15px rgba(0, 174, 239, 0.5), 0 0 25px rgba(0, 174, 239, 0.3); opacity: 1; }
`;

const DividerWrapper = styled.div`
  width: 80%;
  max-width: 800px;
  height: 2px;
  margin: 5rem auto;
  background: linear-gradient(90deg, transparent, var(--primary), var(--secondary), transparent);
  border-radius: 50%;
  animation: ${pulseGlow} 2s infinite alternate;
`;

export default function SectionDivider() {
  return <DividerWrapper />;
}