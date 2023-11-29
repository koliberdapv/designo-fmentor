import styled from 'styled-components';
import { AboutUsHeader } from '../components/ui';
import { useEffect } from 'react';
import scrollToTop from '../utils/scrollToTop';

const About = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <Wrapper>
      <AboutUsHeader />
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default About;
