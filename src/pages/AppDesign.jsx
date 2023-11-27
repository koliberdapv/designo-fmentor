import styled from 'styled-components';
import { DesignPageHeader, ProjectsNavigation } from '../components/ui';
import { useEffect } from 'react';
import scrollToTop from '../utils/scrollToTop';

const AppDesign = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  const header = {
    title: 'App Design',
    description:
      'Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.',
  };
  return (
    <Wrapper>
      <DesignPageHeader header={header} />
      <ProjectsNavigation pageName="app design" />
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default AppDesign;
