import styled from 'styled-components';
import { DesignPageHeader, ProjectsNavigation } from '../components/ui';
import { useEffect } from 'react';
import scrollToTop from '../utils/scrollToTop';

const GraphicDesign = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  const header = {
    title: 'Graphic Design',
    description:
      'We deliver eye-catching branding materials that are tailored to meet your business objectives.',
  };
  return (
    <Wrapper>
      <DesignPageHeader header={header} />
      <ProjectsNavigation pageName="graphic design" />
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default GraphicDesign;
