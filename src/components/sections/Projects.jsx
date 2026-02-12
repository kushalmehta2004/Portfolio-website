import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProjectCard from "../cards/ProjectCard";
import { projects, showcaseProjects } from "../../data/constants";

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  padding: 0 16px;
  align-items: center;
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

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 28px;
  flex-wrap: wrap;
`;

const Projects = ({ openModal, setOpenModal }) => {
  const [githubProjects, setGithubProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/kushalmehta2004/repos?sort=updated&per_page=50"
        );
        const data = await response.json();
        
        const formattedProjects = data
          .filter(repo => !repo.fork && (showcaseProjects.length === 0 || showcaseProjects.includes(repo.name)))
          .map(repo => ({
            id: repo.id,
            title: repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
            description: repo.description || "No description available for this project.",
            image: `https://raw.githubusercontent.com/${repo.full_name}/${repo.default_branch}/screenshot.png`,
            tags: repo.language ? [repo.language, ...repo.topics] : repo.topics,
            category: repo.language?.toLowerCase() || "other",
            github: repo.html_url,
            webapp: repo.homepage,
          }));

        // Use static data for specific projects if they exist in constants
        const finalProjects = formattedProjects.map(p => {
          const staticProject = projects.find(sp => sp.github?.toLowerCase() === p.github?.toLowerCase());
          return staticProject ? { ...p, ...staticProject, description: staticProject.description || p.description } : p;
        });
        
        setGithubProjects(finalProjects);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching repos:", error);
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <Container id="Projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc style={{ marginBottom: "28px" }}>
          Explore my latest open-source contributions and personal projects, fetched dynamically from GitHub.
        </Desc>
        <CardContainer>
          {loading ? (
            <Desc>Loading projects from GitHub...</Desc>
          ) : (
            githubProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))
          )}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
