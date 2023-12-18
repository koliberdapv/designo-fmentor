import styled from 'styled-components';
import img_passionate from '../../assets/home/desktop/illustration-passionate.svg';
import img_resourceful from '../../assets/home/desktop/illustration-resourceful.svg';
import img_friendly from '../../assets/home/desktop/illustration-friendly.svg';
import bg_pattern_circle from '../../assets/shared/desktop/bg-pattern-small-circle.svg';
import bg_leaf from '../../assets/shared/desktop/bg-pattern-leaf.svg';

const CompanyInfo = () => {
  const infoList = [
    {
      title: 'passionate',
      content: `Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.`,
      img: img_passionate,
      img_alt: 'a man with a laptop',
    },
    {
      title: 'resourceful',
      content: `Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients' needs.`,
      img: img_resourceful,
      img_alt: 'a girl drawing on a whiteboard',
    },
    {
      title: 'friendly',
      content: `We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.`,
      img: img_friendly,
      img_alt: 'two people working together',
    },
  ];
  return (
    <Wrapper>
      <div className="width-controller">
        <div className="info-content">
          {infoList.map((info, index) => {
            const { title, content, img } = info;
            return (
              <article className="info-item obs-item" key={index}>
                <div className="img-container" data-type={title}>
                  <img src={img} alt={title} />
                </div>
                <div className="description">
                  <h3 className="h3">{title}</h3>
                  <p>{content}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  margin-top: 7.5rem;
  .info-content {
    display: grid;
    text-align: center;
    align-content: center;
    justify-content: center;
    gap: 5rem;
  }
  .img-container {
    width: 12.625rem;
    aspect-ratio: 1/1;
    margin-inline: auto;
    position: relative;
    isolation: isolate;
  }
  .img-container:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    aspect-ratio: 1/1;
    background: url(${bg_pattern_circle}) no-repeat center center / cover;
    z-index: -1;
  }
  [data-type='resourceful']::before {
    transform: rotate(270deg);
  }
  [data-type='friendly']::before {
    transform: rotate(90deg);
  }
  .info-item {
    display: grid;
    gap: 3rem;
  }
  .description {
    display: grid;
    gap: 2rem;
  }
  @media screen and (768px < width < 1024px) {
    .info-item {
      grid-template-columns: auto 1fr;
      gap: 3rem;
    }
    .info-content {
      display: grid;
      text-align: left;
      justify-content: flex-start;
      gap: 5rem;
    }
    .description {
      align-content: center;
      gap: 1rem;
    }
  }
  @media screen and (width > 1024px) {
    margin-top: 10rem;
    .info-content {
      grid-template-columns: repeat(3, 1fr);
      gap: 1.875rem;
    }
    .width-controller {
      position: relative;
      isolation: isolate;
    }
    .width-controller:before {
      content: '';
      position: absolute;
      top: -110%;
      right: -10%;
      width: 100%;
      aspect-ratio: 1/1;
      background: url(${bg_leaf}) no-repeat;
      transform: rotate(180deg);
      z-index: -3;
    }
    .description {
      align-content: flex-start;
      min-height: 188px;
      max-width: 350px;
    }
  }
`;

export default CompanyInfo;
