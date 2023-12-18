import styled from 'styled-components';
import image_about_hero_mobile from '../../assets/about/mobile/image-about-hero.jpg';
import image_about_hero_tablet from '../../assets/about/tablet/image-about-hero.jpg';
import image_about_hero_desktop from '../../assets/about/desktop/image-about-hero.jpg';
import pattern_mobile from '../../assets/about/mobile/bg-pattern-hero-about-mobile.svg';
import pattern_desktop from '../../assets/about/desktop/bg-pattern-hero-about-desktop.svg';

const AboutUsHeader = () => {
  return (
    <Wrapper>
      <div className="width-controller">
        <div className="header-content obs-item">
          <div className="img-container" />
          <div className="text-container">
            <h1 className="h1">About Us</h1>
            <p>
              Founded in 2010, we are a creative agency that produces lasting
              results for our clients. We've partnered with many startups,
              corporations, and nonprofits alike to craft designs that make real
              impact. We're always looking forward to creating brands, products,
              and digital experiences that connect with our clients' audiences.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  .header-content {
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
    background-color: var(--clr-peach);
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
    background-image: url(${image_about_hero_mobile});
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
      background-image: url(${image_about_hero_tablet});
    }
  }
  @media screen and (width >= 768px) {
    .header-content {
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
      background-image: url(${image_about_hero_desktop});
    }
    .header-content {
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
export default AboutUsHeader;
