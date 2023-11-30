import styled from 'styled-components';
import pattern_mobile from '../../assets/about/mobile/bg-pattern-hero-about-mobile.svg';
import pattern_desktop from '../../assets/about/desktop/bg-pattern-hero-about-desktop.svg';
import image_real_deal_mobile from '../../assets/about/mobile/image-real-deal.jpg';
import image_real_deal_tablet from '../../assets/about/tablet/image-real-deal.jpg';
import image_real_deal_desktop from '../../assets/about/desktop/image-real-deal.jpg';
// import image_talent_mobile from '../../assets/about/mobile/image-world-class-talent.jpg';
// import image_talent_tablet from '../../assets/about/tablet/image-world-class-talent.jpg';
// import image_talent_desktop from '../../assets/about/desktop/image-world-class-talent.jpg';

const AboutInfo = ({ info }) => {
  const { title, text } = info;
  return (
    <Wrapper>
      <div className="width-controller">
        <div className="info-content">
          <div className="img-container" data-type={title} />
          <div className="text-container">
            <h1 className="h1">{title}</h1>
            {text.map((paragraph, index) => {
              return <p key={index}>{paragraph}</p>;
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .info-content {
    display: grid;
    grid-template-columns: 1fr;
    overflow: hidden;
  }
  .text-container {
    overflow: hidden;
    display: grid;
    align-content: center;
    justify-items: center;
    text-align: center;
    padding: 5rem 1.5rem;
    background-color: var(--clr-light-peach);
    color: var(--clr-white);
    gap: 1.5rem;
    position: relative;
    isolation: isolate;
  }
  .text-container::before {
    content: '';
    position: absolute;
    width: 225%;
    aspect-ratio: 1/1;
    background-image: url(${pattern_mobile});
    background-size: contain;
    top: -20%;
    left: -110%;
    z-index: -2;
  }
  .img-container {
    width: 100%;
    height: 320px;
    background-image: url(${image_real_deal_mobile});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  @media screen and (width < 768px) {
    .width-controller {
      padding: 0;
    }
    .h1 {
      font-size: var(--fs-subtitle);
      line-height: var(--lh-subtitle);
    }
    p {
      font-size: var(--fs-btn-p);
      line-height: var(--lh-btn-p);
    }
  }
  @media screen and (width > 500px) {
    .img-container {
      background-image: url(${image_real_deal_tablet});
    }
  }
  @media screen and (width >= 768px) {
    .info-content {
      border-radius: var(--br-form);
    }
    .text-container {
      gap: 2rem;
      padding: 4rem 3.625rem;
    }
  }
  @media screen and (width > 1024px) {
    .img-container {
      width: 100%;
      height: 320px;
      background-image: url(${image_real_deal_desktop});
    }
    .info-content {
      grid-template-columns: 60% 40%;
    }
    .img-container {
      order: 2;
      height: 100%;
      width: unset;
      aspect-ratio: 1/1;
    }
    .text-container {
      text-align: left;
      justify-items: flex-start;
      padding: 8.4375rem 0 8.4375rem 5.9375rem;
      padding: 8.4375rem 5.9375rem;
    }
    p {
      max-width: 458px;
    }
    .text-container::before {
      width: 100%;
      aspect-ratio: 1/2;
      background-image: url(${pattern_desktop});
      background-size: 85%;
      top: -15%;
      left: 15%;
    }
  }
`;
export default AboutInfo;
