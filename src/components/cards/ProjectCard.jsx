import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 330px;
  background-color: ${({ theme }) => theme.glass};
  cursor: pointer;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.border};
  backdrop-filter: blur(12px);
  overflow: hidden;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: translateY(-10px);
    background-color: rgba(255, 255, 255, 0.05);
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  }
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + "80"};
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Badge = styled.span`
  font-size: 10px;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.primary + "20"};
  color: ${({ theme }) => theme.primary};
  border: 1px solid ${({ theme }) => theme.primary + "40"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const Description = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Members = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  margin-top: auto;
`;

const Avatar = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: -10px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 3px solid ${({ theme }) => theme.card};
`;

const ProjectCard = ({ project }) => {
  return (
    <Card onClick={() => window.open(project.github, "_blank")}>
      <Details>
        <Title>
          {project.title}
          {project.isFreelance && <Badge>Freelance</Badge>}
        </Title>
        <Date>{project.date}</Date>
        <Description>{project.description}</Description>
      </Details>
      <Members>
        {project.member?.map((member) => (
          <Avatar src={member.img} />
        ))}
      </Members>
    </Card>
  );
};

export default ProjectCard;
