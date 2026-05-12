import { createGlobalStyle } from 'styled-components';
import bgImage from '../images/background.svg'; 

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary: #00AEEF;
    --secondary: #007BFF;
    --darkBlue: #0A1128;
    --darkPurple: #1A0B2E;
    --black-1: #060910;
    --black-2: #0B1325;
    --white-1: #E2E8F0;
    --gray: #8A98B0;
    --grey: var(--gray);
    --white: white;
    --black: black;
  }

  html {
    font-size: 10px;
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;
    line-height: 1.5;
    width: 100%;
    font-family: 'Inter', sans-serif;
    color: var(--white);

    /* 2. THE MULTI-LAYERED BACKGROUND */
    background-color: #060910;
    background-image: 
      /* Top Layer: The Tech Grid */
      linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
      /* Second Layer: Cyan/Blue Radial Glows */
      radial-gradient(at 0% 0%, rgba(0, 174, 239, 0.15) 0px, transparent 50%),
      radial-gradient(at 100% 0%, rgba(0, 123, 255, 0.15) 0px, transparent 50%),
      /* Third Layer: Dark Gradient Overlay to ensure white text remains readable over the bright bottom of your SVG */
      linear-gradient(to bottom, rgba(6, 9, 16, 0.6), rgba(6, 9, 16, 0.95)),
      /* Bottom Layer: Your SVG Image */
      url(${bgImage});
      
    background-size: 
      40px 40px, 40px 40px, /* Sizing for the grid */
      100% 100%, 100% 100%, /* Sizing for the glows */
      100% 100%,            /* Sizing for the dark overlay */
      cover;                /* 'cover' ensures the SVG stretches and compresses perfectly to the screen */
      
    background-attachment: fixed;
    background-position: center center;
    background-repeat: no-repeat;
  }

  a {
    text-decoration: none;
    color: var(--white);
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
  }

  img,
  svg {
    height: 100%;
    width: 100%;
  }

  li,
  ul {
    list-style: none;
  }

  /* Global Animations */
  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes glowPulse {
    0% {
      box-shadow: 0 0 5px rgba(0, 210, 255, 0.2);
    }
    50% {
      box-shadow: 0 0 20px rgba(0, 210, 255, 0.6);
    }
    100% {
      box-shadow: 0 0 5px rgba(0, 210, 255, 0.2);
    }
  }
`;

export default GlobalStyles;