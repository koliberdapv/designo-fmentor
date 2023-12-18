import styled from 'styled-components';
import {
  CTA,
  DesignPageHeader,
  Projects,
  ProjectsNavigation,
} from '../components/ui';
import { useEffect } from 'react';
import scrollToTop from '../utils/scrollToTop';

import airfilter from '../assets/app-design/desktop/image-airfilter.jpg';
import eyecam from '../assets/app-design/desktop/image-eyecam.jpg';
import faceit from '../assets/app-design/desktop/image-faceit.jpg';
import todo from '../assets/app-design/desktop/image-todo.jpg';
import loopstudios from '../assets/app-design/desktop/image-loopstudios.jpg';
import { useGlobalContext } from '../context/context';

const AppDesign = () => {
  const { setIsSidebarOpen, smoothRender } = useGlobalContext();
  useEffect(() => {
    scrollToTop();
    setIsSidebarOpen(false);
    smoothRender();
  }, []);
  const header = {
    title: 'App Design',
    description:
      'Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.',
  };

  const projects = [
    {
      id: 1,
      title: 'airfilter',
      description:
        'Solving the problem of poor indoor air quality by filtering the air',
      image: airfilter,
    },
    {
      id: 2,
      title: 'eyecam',
      description:
        'Product that lets you edit your favorite photos and videos at any time',
      image: eyecam,
    },
    {
      id: 3,
      title: 'faceit',
      description:
        'Get to meet your favorite internet superstar with the faceit app',
      image: faceit,
    },
    {
      id: 4,
      title: 'todo',
      description:
        'A todo app that features cloud sync with light and dark mode',
      image: todo,
    },
    {
      id: 5,
      title: 'loopstudios',
      description: 'A VR experience app made for Loopstudios',
      image: loopstudios,
    },
  ];
  return (
    <Wrapper>
      <DesignPageHeader header={header} />
      <Projects projects={projects} />
      <ProjectsNavigation pageName="app design" />
      <CTA />
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default AppDesign;
