import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import HeroImg from "../../images/HeroImage.jpg";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
} from "../../utils/motion";

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  z-index: 1;

  @media (max-width: 960px) {
    padding: 66px 16px;
  }

  @media (max-width: 640px) {
    padding: 32px 16px;
  }
`;
const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    gap: 6px;
    flex-direction: column;
    align-items: center;
  }
`;
const HeroRightContainer = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: end;
  @media (max-width: 960px) {
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-contents: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

const Title = styled.div`
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 800;
  font-size: 56px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.1;
  margin-bottom: 12px;
  letter-spacing: -1px;

  @media (max-width: 960px) {
    text-align: center;
    font-size: 40px;
  }
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 28px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.5;

  @media (max-width: 960px) {
    text-align: center;
    font-size: 20px;
    justify-content: center;
  }
`;

const Span = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
`;

const SubTitle = styled.div`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 600px;

  @media (max-width: 960px) {
    text-align: center;
    margin: 0 auto 42px;
  }
`;

const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;

  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;

  background: ${({ theme }) => theme.primary};
  box-shadow: 0 4px 20px rgba(59, 130, 246, 0.3);
  border-radius: 12px;
  font-weight: 600;
  font-size: 18px;
  color: white;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 25px rgba(59, 130, 246, 0.4);
    filter: brightness(1.1);
  }

  @media (max-width: 640px) {
    padding: 12px 0;
    font-size: 16px;
  }
`;

const Img = styled.img`
  border-radius: 24px;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

const Hero = () => {
  return (
    <div id="About">
      <HeroContainer>
        <motion.div {...headContainerAnimation}>
          <HeroInnerContainer>
            <HeroLeftContainer>
              <motion.div {...headTextAnimation}>
                <Title>
                  Hi, I am <br /> {Bio.name}
                </Title>
                <TextLoop>
                  I am a
                  <Span>
                    <Typewriter
                      options={{
                        strings: Bio.roles,
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </Span>
                </TextLoop>
              </motion.div>

              <motion.div {...headContentAnimation}>
                <SubTitle>{Bio.description}</SubTitle>
              </motion.div>

              <ResumeButton href={Bio.resume} target="_blank">
                Check Resume
              </ResumeButton>
            </HeroLeftContainer>
            <HeroRightContainer>
              <motion.div {...headContentAnimation}>
                <Tilt>
                  <Img src={HeroImg} alt="Kushal Mehta" />
                </Tilt>
              </motion.div>
            </HeroRightContainer>
          </HeroInnerContainer>
        </motion.div>
      </HeroContainer>
    </div>
  );
};

export default Hero;
