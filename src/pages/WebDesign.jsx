import styled from 'styled-components';
import { DesignPageHeader, ProjectsNavigation } from '../components/ui';
import { useEffect } from 'react';
import scrollToTop from '../utils/scrollToTop';

const WebDesign = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  const header = {
    title: 'Web Design',
    description:
      'We build websites that serve as powerful marketing tools and bring memorable brand experiences.',
  };
  return (
    <Wrapper>
      <DesignPageHeader header={header} />
      <ProjectsNavigation pageName="web design" />
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default WebDesign;
