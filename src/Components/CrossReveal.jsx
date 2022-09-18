import { useRef, useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// 1. we need to register the plugin
// 2. target the element you want to animate by using useRef & useEffect
gsap.registerPlugin(ScrollTrigger);

const StyledRevealContainer = styled.section`
  position: relative;
  padding-bottom: 56.25%;

  .crossRevealImage {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;

      position: absolute;
      top: 0;
    }
  }
  .afterImage {
    position: absolute;
    overflow: hidden;
    top: 0;

    transform: translate(100%, 0);

    img {
      transform: translate(-100%, 0);
    }
  }

  .person__content {
    color: #080f0f;
    position: absolute;
    top: 45%;
    left: 15vw;
    .person__name {
      font-weight: 700;
      line-height: 1.3;
      font-size: 17px;
    }
    .person__job {
      line-height: 1.3;
      font-weight: 400;
      font-size: 17px;
      letter-spacing: -0.022em;
    }
  }

  .landscape__wrapper {
    position: absolute;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    margin: 0 0;
    .qoute__sentence {
      line-height: 1.03;
      font-weight: 700;
      font-size: 80px;
      letter-spacing: -0.015em;
      color: white;
    }
    .qoute__sentence {
      line-height: 1.03;
      font-weight: 700;
      font-size: 80px;
      letter-spacing: -0.015em;
      color: white;
    }
    .authorName {
      line-height: 1.14;
      font-weight: 700;
      font-size: 20px;
      letter-spacing: -0.015em;
      color: white;
      padding-top: 20px;
    }
  }
`;
const CrossReveal = ({
  face,
  landScape,
  name,
  job,
  sentanceOne,
  sentanceTwo,
  authorName,
}) => {
  // animate by container one way
  const containerRef = useRef();
  // animate the image the opposite way at the same time
  const imageRef = useRef();
  // specify the poin our animation start
  const trigerRef = useRef();
  // to target the person conariner
  const personRef = useRef();
  // to target the qoue container
  const qouteref = useRef();

  // in order to avoide targeting null elements
  useEffect(() => {
    // define timeline
    const crossRevealTween = gsap.timeline({
      defaults: { ease: "none" }, // no ease animation
      scrollTrigger: {
        // we set the trigger element that specift the point, we want our animation to start
        trigger: trigerRef.current,
        // we need to set the stop position when the middle trigger eleme is the middle of the view port
        start: "center center",
        end: () => "+=" + trigerRef.current?.offsetWidth,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        markers: true,
      },
    });

    // animate the container one way
    crossRevealTween
      .fromTo(
        // element we want to animate // and what we will aimate
        containerRef.current,
        { xPercent: 100, x: 0 },
        { xPercent: 0 }
      )
      // animate the image the opposite way at the same time
      // ,0 means animate this line to the same time of the above line
      .fromTo(imageRef.current, { xPercent: -100, x: 0 }, { xPercent: 0 }, 0)
      // fadeIn the name and the job
      .fromTo(personRef.current, { autoAlpha: 0 }, 0)
      // FadeIn the qoute
      .fromTo(qouteref.current, { autoAlpha: 0, delay: 0.26 }, 0);
  }, []);

  return (
    <StyledRevealContainer ref={trigerRef}>
      {/* This div is triger ref */}
      <div className="crossRevealImage">
        <img src={face} alt="" />
        <div className="person__content" ref={personRef}>
          <h3 className="person_Name">{name}</h3>
          <p className="person__job">{job}</p>
        </div>
      </div>
      <div className="crossRevealImage afterImage" ref={containerRef}>
        <img src={landScape} alt="" ref={imageRef} />
      </div>
      <div className="landscape__wrapper">
        <p className="qoute__sentence">{sentanceOne}</p>
        <p className="qoute__sentence">{sentanceTwo}</p>
        <p className="authorName">{authorName}</p>
      </div>
    </StyledRevealContainer>
  );
};
export default CrossReveal;
