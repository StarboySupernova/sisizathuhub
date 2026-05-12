import styled from 'styled-components';

export const CategoryItemStyles = styled.div`
  /* PREMIUM FROSTED GLASS CARDS */
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  padding: 3rem 2rem;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-top: 1px solid rgba(0, 174, 239, 0.3); /* Cyan edge highlight */
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
  transition: transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;
  
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
    border-color: rgba(0, 174, 239, 0.6); /* Glowing cyan border on hover */
  }

  .title {
    margin-bottom: 1.5rem;
    color: var(--white);
  }
  
  .text-wrap-container, .text {
    margin-bottom: 2.5rem;
    color: var(--white-1);
    flex-grow: 1;
  }

  .card-image-wrapper, .custom-image {
    width: 160px !important;
    height: 160px !important;
    float: left;
    margin: 0 2rem 1rem 0;
    border-radius: 10px;
    overflow: hidden;
    shape-outside: inset(0%);
    border: 1px solid rgba(0, 174, 239, 0.3);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
  }

  .button-container {
    margin-top: auto; 
    clear: both;
    align-self: flex-start;
  }

  @media only screen and (max-width: 768px) {
    padding: 2.5rem 1.5rem;
    .card-image-wrapper, .custom-image {
      width: 130px !important;
      height: 130px !important;
      margin: 0 1.5rem 0.5rem 0;
    }
  }
`;