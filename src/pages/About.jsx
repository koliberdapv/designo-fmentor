import styled from 'styled-components';
import { AboutInfo, AboutUsHeader } from '../components/ui';
import { useEffect } from 'react';
import scrollToTop from '../utils/scrollToTop';

const About = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  const info = [
    {
      title: 'World-class talent',
      text: [
        'We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms. ',
        'Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand`s story and mission.',
      ],
    },
    {
      title: 'The real deal',
      text: [
        'As strategic partners in our clients` businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.',
        'We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results',
      ],
    },
  ];

  return (
    <Wrapper>
      <AboutUsHeader />
      {info.map((item, index) => {
        return <AboutInfo key={index} info={item} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default About;
