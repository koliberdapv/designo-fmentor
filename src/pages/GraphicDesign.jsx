import styled from 'styled-components';
import {
  DesignPageHeader,
  Projects,
  ProjectsNavigation,
} from '../components/ui';
import { useEffect } from 'react';
import scrollToTop from '../utils/scrollToTop';

import tim_brown from '../assets/graphic-design/desktop/image-change.jpg';
import boxed_water from '../assets/graphic-design/desktop/image-boxed-water.jpg';
import science from '../assets/graphic-design/desktop/image-science.jpg';

const GraphicDesign = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  const header = {
    title: 'Graphic Design',
    description:
      'We deliver eye-catching branding materials that are tailored to meet your business objectives.',
  };

  const projects = [
    {
      id: 1,
      title: 'tim brown',
      description:
        'A book cover designed for Tim Brown’s new release, ‘Change’',
      image: tim_brown,
    },
    {
      id: 2,
      title: 'boxed water',
      description: 'A simple packaging concept made for Boxed Water',
      image: boxed_water,
    },
    {
      id: 3,
      title: 'science!',
      description:
        'A poster made in collaboration with the Federal Art Project',
      image: science,
    },
  ];
  return (
    <Wrapper>
      <DesignPageHeader header={header} />
      <Projects projects={projects} />
      <ProjectsNavigation pageName="graphic design" />
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default GraphicDesign;
