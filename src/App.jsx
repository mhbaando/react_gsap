import styled from "styled-components";
import Logo from "./assets/logo.svg";
import ParallaxHeroSection from "./Components/ParallaxHeroSection/";

const StyledHeroSection = styled.section`
  width: 100vw;
  height: 100vh;

  position: relative;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  img {
    height: 25vmin;
    pointer-events: none;
  }
`;

const StyledTitle = styled.h1`
  color: black;
  padding-top: 4rem;

  font-size: 2rem;
  font-weight: 400;

  text-align: center;
  letter-spacing: 4px;
  text-transform: uppercase;
`;

function App() {
  return (
    <StyledHeroSection>
      <img src={Logo} alt="Logo" />
      <StyledTitle>Back to smoot and firm skins</StyledTitle>
      <ParallaxHeroSection />
    </StyledHeroSection>
  );
}
export default App;
