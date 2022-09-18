import styled from "styled-components";
import Logo from "./assets/logo.svg";
import ContentSection from "./Components/ContentSection";
import CrossReveal from "./Components/CrossReveal";
import ParallaxHeroSection from "./Components/ParallaxHeroSection/";
import FaceOne from "./assets/images/faceOne.png";
import LandScapeOne from "./assets/images/landscapeOne.png";
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
    <>
      <StyledHeroSection>
        <img src={Logo} alt="Logo" />
        <StyledTitle>Back to smoot and firm skins</StyledTitle>
        <ParallaxHeroSection />
      </StyledHeroSection>
      <ContentSection
        title="Take Care"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex beatae enim temporibus ut ipsum error assumenda, illo quidem non, "
      />
      <CrossReveal
        face={FaceOne}
        landScape={LandScapeOne}
        name="Mohamud Abshir"
        job="Front End Developer"
        sentanceOne="Only Lunch"
        sentanceTwo="What We Love"
        authorName="Jaamac Geedi"
      />
    </>
  );
}
export default App;
