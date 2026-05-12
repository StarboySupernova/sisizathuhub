import styled from 'styled-components';

export const BlogItemStyles = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  
  /* PREMIUM FROSTED GLASS BASE */
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  padding: 2rem;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-top: 1px solid rgba(0, 174, 239, 0.3); /* Cyan Edge */
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05);
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
  z-index: 1;

  /* HOVER EFFECTS */
  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.7), 0 0 20px rgba(0, 174, 239, 0.2);
    border-color: rgba(0, 174, 239, 0.5);

    .img [data-main-image] {
      transform: scale(1.08);
    }
  }

  .img {
    height: 220px;
    margin-bottom: 2rem;
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    overflow: hidden;
    [data-main-image] {
      transition: 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
  }

  .title-link { text-decoration: none; }
  .title {
    font-size: 2.2rem;
    margin-bottom: 1.5rem;
    color: var(--white);
    line-height: 1.3;
  }

  .meta-container {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    flex-grow: 1;
  }

  .publishedAt, .categoriesText {
    font-size: 1.3rem;
    color: rgba(255, 255, 255, 0.6);
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin: 0;
    
    a {
      color: rgba(255, 255, 255, 0.8);
      &:hover { color: var(--primary); text-decoration: underline;}
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 1.5rem;
    .title { font-size: 1.8rem; }
    .img { height: 180px; }
  }
`;