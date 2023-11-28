import styled from 'styled-components';
import {
  DesignPageHeader,
  Projects,
  ProjectsNavigation,
} from '../components/ui';
import { useEffect } from 'react';
import scrollToTop from '../utils/scrollToTop';
import express from '../assets/web-design/desktop/image-express.jpg';
import transfer from '../assets/web-design/desktop/image-transfer.jpg';
import photon from '../assets/web-design/desktop/image-photon.jpg';
import builder from '../assets/web-design/desktop/image-builder.jpg';
import blogr from '../assets/web-design/desktop/image-blogr.jpg';
import camp from '../assets/web-design/desktop/image-camp.jpg';

const WebDesign = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  const header = {
    title: 'Web Design',
    description:
      'We build websites that serve as powerful marketing tools and bring memorable brand experiences.',
  };

  const projects = [
    {
      id: 1,
      title: 'express',
      description: 'A multi-carrier shipping website for ecommerce businesses',
      image: express,
    },
    {
      id: 2,
      title: 'transfer',
      description:
        'Site for low-cost money transfers and sending money within seconds',
      image: transfer,
    },
    {
      id: 3,
      title: 'photon',
      description:
        'A state-of-the-art music player with high-resolution audio and DSP effects',
      image: photon,
    },
    {
      id: 4,
      title: 'builder',
      description:
        'Connects users with local contractors based on their location',
      image: builder,
    },
    {
      id: 5,
      title: 'blogr',
      description:
        'Blogr is a platform for creating an online blog or publication',
      image: blogr,
    },
    {
      id: 6,
      title: 'camp',
      description:
        'Get expert training in coding, data, design, and digital marketing',
      image: camp,
    },
  ];
  return (
    <Wrapper>
      <DesignPageHeader header={header} />
      <Projects projects={projects} />
      <ProjectsNavigation pageName="web design" />
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default WebDesign;
