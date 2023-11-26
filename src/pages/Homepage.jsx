import styled from 'styled-components';
import { CompanyInfo, Hero, ProjectsNavigation } from '../components/ui/';

const Homepage = () => {
  return (
    <Wrapper>
      <Hero />
      <ProjectsNavigation />
      <CompanyInfo />
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default Homepage;
