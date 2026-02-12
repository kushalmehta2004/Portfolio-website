import React from "react";
import styled from "styled-components";
import { skills } from "../../data/constants";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 52px;
  text-align: center;
  font-weight: 800;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  letter-spacing: -1px;
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 700px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 32px;
  margin-top: 40px;
  justify-items: center;
  align-items: stretch;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: ${({ theme }) => theme.glass};
  border: 1px solid ${({ theme }) => theme.border};
  backdrop-filter: blur(12px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  padding: 24px 36px;
  transition: all 0.3s ease-in-out;

  &:hover {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 20px 24px;
  }

  @media (max-width: 500px) {
    max-width: 330px;
    padding: 20px 16px;
  }
`;

const SkillTitle = styled.div`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 24px;
  text-align: center;
  color: ${({ theme }) => theme.text_primary};
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

const SkillItem = styled(motion.div)`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  background-color: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 10px 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: default;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.primary + "15"};
    border-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${({ theme }) => theme.primary + "30"};
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 14px;
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;

const Skills = () => {
  return (
    <Container id="Skills">
      <Wrapper>
        <Title>Technical Proficiencies</Title>
        <Desc>
          A comprehensive overview of the languages, frameworks, and tools I've mastered over years of development and research.
        </Desc>

        <SkillsContainer>
          {skills.map((skill, index) => (
            <Tilt key={`skill-tilt-${index}`} options={{ max: 15, scale: 1.02 }}>
              <Skill>
                <SkillTitle>{skill.title}</SkillTitle>
                <SkillList>
                  {skill.skills.map((item, index_x) => (
                    <SkillItem
                      key={`skill-x-${index_x}`}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index_x * 0.05 + index * 0.1 }}
                      title={`Experienced in ${item.name}`}
                    >
                      <SkillImage src={item.image} alt={item.name} />
                      {item.name}
                    </SkillItem>
                  ))}
                </SkillList>
              </Skill>
            </Tilt>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
