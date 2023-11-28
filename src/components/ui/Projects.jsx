import styled from 'styled-components';
import ProjectCard from './ProjectCard';

const Projects = ({ projects }) => {
  return (
    <Wrapper>
      <div className="width-controller">
        <div className="projects-content">
          {projects.map((project) => {
            return <ProjectCard key={project.id} {...project} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 6rem;
  .projects-content {
    display: grid;
    gap: 2.5rem;
  }
  @media screen and (width > 1024px) {
    margin-top: 10rem;
    .projects-content {
      grid-template-columns: repeat(3, 1fr);
      gap: unset;
      row-gap: 2rem;
      column-gap: 1.875rem;
    }
  }
`;

export default Projects;
