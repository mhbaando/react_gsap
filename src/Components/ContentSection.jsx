import styled from "styled-components";

const StyledContentSection = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .content__wrapper {
    max-width: 980px;
    h2,
    h3 {
      font-size: 5rem;
      line-height: 1.05;
      font-weight: 700;
      letter-spacing: -0.015em;
    }
    h2 {
      color: #acacac;
    }
    h3 {
      color: #080f0f;
    }
  }
`;

const ContentSection = ({ title, text }) => {
  return (
    <StyledContentSection>
      <div className="content__wrapper">
        <h2>{title}</h2>
        <h3>{text}</h3>
      </div>
    </StyledContentSection>
  );
};
export default ContentSection;
