import styled from 'styled-components';
import { CTA, CompanyInfo, Hero, ProjectsNavigation } from '../components/ui/';
import { useEffect } from 'react';
import scrollToTop from '../utils/scrollToTop';
import { useGlobalContext } from '../context/context';

const Homepage = () => {
  const { setIsSidebarOpen, smoothRender } = useGlobalContext();
  useEffect(() => {
    scrollToTop();
    setIsSidebarOpen(false);
    smoothRender();
  }, []);
  return (
    <Wrapper>
      <Hero />
      <ProjectsNavigation />
      <CompanyInfo />
      <CTA />
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default Homepage;
