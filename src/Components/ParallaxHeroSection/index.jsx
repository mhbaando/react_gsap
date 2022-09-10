import styled from "styled-components";
import BackgroundHero from "./BackgroundHero";
import ForegroundHero from "./ForegroundHero";
import MidgroundHero from "./MidgroundHero";

// to make all the svgs sit on top of each other
const StyledSVGWrapper = styled.div`
  width: 50vw;
  height: 30vh;
  position: relative;
  border: 1px solid red;
`;

function ParallaxHero() {
  return (
    <StyledSVGWrapper>
      <BackgroundHero />
      <MidgroundHero />
      <ForegroundHero />
    </StyledSVGWrapper>
  );
}
export default ParallaxHero;
