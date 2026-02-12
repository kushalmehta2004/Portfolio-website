import React from "react";
import styled from "styled-components";
import { research } from "../../data/constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 80px 0px;
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
  margin-bottom: 40px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 28px;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 500px;
  background-color: ${({ theme }) => theme.glass};
  border: 1px solid ${({ theme }) => theme.border};
  backdrop-filter: blur(12px);
  border-radius: 20px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-8px);
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 24px;
  }
`;

const PaperTitle = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.4;
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`;

const Badge = styled.span`
  font-size: 10px;
  font-weight: 700;
  padding: 2px 10px;
  border-radius: 10px;
  background-color: rgba(255, 215, 0, 0.1);
  color: #FFD700;
  border: 1px solid #FFD700;
  box-shadow: 0 0 12px rgba(255, 215, 0, 0.3);
  text-transform: uppercase;
  letter-spacing: 0.8px;
`;

const Date = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
`;

const Description = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.6;
`;

const Button = styled.button`
  width: fit-content;
  padding: 10px 24px;
  background-color: transparent;
  color: ${({ theme }) => theme.primary};
  border: 1.8px solid ${({ theme }) => theme.primary};
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: auto;
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
`;

const Research = () => {
  return (
    <Container id="Research">
      <Wrapper>
        <Title>Research</Title>
        <Desc>
          Exploring the frontiers of AI, AR, and Deep Learning through rigorous academic research and publication.
        </Desc>
        <CardContainer>
          {research.map((paper) => (
            <Card key={paper.id}>
              <Date>{paper.date}</Date>
              <PaperTitle>
                {paper.title}
                {paper.status && <Badge>{paper.status}</Badge>}
              </PaperTitle>
              <Description>{paper.description}</Description>
              <Button onClick={() => window.open(paper.url, "_blank")}>
                View Paper
              </Button>
            </Card>
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Research;