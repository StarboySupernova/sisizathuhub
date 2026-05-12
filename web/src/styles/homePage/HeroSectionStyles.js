import styled from "styled-components";

export const HeroSectionStyles = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  .hero__wrapper {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    align-items: center;
    padding: 120px 0 60px 0;
  }

  .badge {
    display: inline-block;
    background: rgba(0, 174, 239, 0.1);
    border: 1px solid var(--primary);
    color: var(--primary);
    padding: 5px 12px;
    border-radius: 4px;
    font-weight: 700;
    font-size: 1.2rem;
    margin-bottom: 20px;
  }

  .hero__heading {
    font-size: 4.5rem;
    font-family: "Poppins", sans-serif;
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 20px;
    background: linear-gradient(to right, #ffffff, var(--primary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .hero__text {
    font-size: 1.6rem;
    color: var(--white-1);
    margin-bottom: 30px;
  }

  /* 3D SVG CAROUSEL STYLES */
  .right {
    display: flex;
    justify-content: center;
  }

  .svg-carousel-container {
    width: 100%;
    max-width: 355px;
    margin: 35px 0 40px 0;
    position: relative;
    animation: floatCard 6s ease-in-out infinite;
  }

  @keyframes floatCard {
    0% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-12px) rotate(1deg); }
    100% { transform: translateY(0px) rotate(0deg); }
  }

  .carousel-mask {
    width: 100%;
    height: 100%;
    border-radius: 26px;
    overflow: hidden;
    position: relative;
    background: var(--black-1);
  }

  .carousel-image {
    position: absolute;
    inset: 0;
    opacity: 0;
    transform: translateX(60px) scale(0.8) rotate(-4deg);
    transition: all 0.9s cubic-bezier(0.34, 1.56, 0.64, 1);
    z-index: 1;
  }

  .carousel-image.active {
    opacity: 1;
    transform: translateX(0px) scale(1) rotate(0deg);
    z-index: 2;
  }

  .glass-reflection-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 50%);
    border: 1.5px solid rgba(0, 174, 239, 0.5); /* Cyan border */
    border-radius: 26px;
    pointer-events: none;
    z-index: 3;
    box-shadow: inset 0 0 25px rgba(0,0,0,0.6);
  }

  @media only screen and (max-width: 768px) {
    .hero__wrapper {
      grid-template-columns: 1fr; 
      padding-top: 100px;
    }
    .hero__heading {
      font-size: 3.5rem;
    }
  }
`;