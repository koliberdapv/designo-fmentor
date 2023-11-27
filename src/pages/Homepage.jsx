import styled from 'styled-components';
import { CompanyInfo, Hero, ProjectsNavigation } from '../components/ui/';
import { useEffect } from 'react';
import scrollToTop from '../utils/scrollToTop';

const Homepage = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
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
