import styled from 'styled-components';
import { Hero, ProjectsNavigation } from '../components/ui/';

const Homepage = () => {
  return (
    <Wrapper>
      <Hero />
      <ProjectsNavigation />
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default Homepage;
