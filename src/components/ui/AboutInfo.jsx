import styled from 'styled-components';
import pattern_mobile from '../../assets/about/mobile/bg-pattern-hero-about-mobile.svg';
import pattern_desktop from '../../assets/about/desktop/bg-pattern-hero-about-desktop.svg';
import image_real_deal_mobile from '../../assets/about/mobile/image-real-deal.jpg';
import image_real_deal_tablet from '../../assets/about/tablet/image-real-deal.jpg';
import image_real_deal_desktop from '../../assets/about/desktop/image-real-deal.jpg';
import image_talent_mobile from '../../assets/about/mobile/image-world-class-talent.jpg';
import image_talent_tablet from '../../assets/about/tablet/image-world-class-talent.jpg';
import image_talent_desktop from '../../assets/about/desktop/image-world-class-talent.jpg';
import pattern_3_circles from '../../assets/shared/desktop/bg-pattern-three-circles.svg';
import pattern_2_circles from '../../assets/shared/desktop/bg-pattern-two-circles.svg';

const AboutInfo = ({ info }) => {
  const { title, text, dataType } = info;
  return (
    <Wrapper>
      <div className="width-controller">
        <div className={`info-content obs-item ${dataType}`}>
          <div className="img-container" data-type={dataType} />
          <div className="text-container">
            <h2 className="h2">{title}</h2>
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
    background-color: var(--clr-light-peach-card);
    gap: 1.5rem;
    position: relative;
    isolation: isolate;
  }
  .text-container::before {
    content: '';
    position: absolute;
    width: 150%;
    aspect-ratio: 1/1;
    background-image: url(${pattern_3_circles});
    background-size: contain;
    top: 0%;
    left: 0;
    z-index: -2;
  }
  .img-container {
    width: 100%;
    height: 320px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  [data-type='talent'] {
    background-image: url(${image_talent_mobile});
  }
  [data-type='real-deal'] {
    background-image: url(${image_real_deal_mobile});
  }
  .h2 {
    color: var(--clr-peach);
  }
  @media screen and (width < 768px) {
    .width-controller {
      padding: 0;
    }
    .h2 {
      font-size: var(--fs-subtitle);
      line-height: var(--lh-subtitle);
    }
    p {
      font-size: var(--fs-btn-p);
      line-height: var(--lh-btn-p);
    }
  }
  @media screen and (width > 500px) {
    [data-type='real-deal'] {
      background-image: url(${image_real_deal_tablet});
    }

    [data-type='talent'] {
      background-image: url(${image_talent_tablet});
    }
  }
  @media screen and (width >= 768px) {
    .info-content {
      border-radius: var(--br-form);
    }
    .text-container {
      padding: 4.25rem 3.625rem;
    }
    .text-container::before {
      width: 80%;
      top: -30%;
      left: 10%;
    }
    .h2 {
      font-size: var(--fs-h2);
      letter-spacing: normal;
    }
  }
  @media screen and (width > 1024px) {
    .img-container {
      width: 100%;
      height: 320px;
    }
    [data-type='talent'] {
      background-image: url(${image_talent_desktop});
    }
    [data-type='real-deal'] {
      background-image: url(${image_real_deal_desktop});
    }
    .info-content {
      grid-template-columns: 60% 40%;
    }
    .img-container {
      order: 2;
      height: 100%;
      aspect-ratio: 1/1;
      background-size: cover;
    }
    .text-container {
      text-align: left;
      justify-items: flex-start;
      padding: 8.4375rem 5.9375rem;
    }
    p {
      max-width: 455px;
    }
    .text-container::before {
      width: 100%;
      aspect-ratio: 1/1;
      background-image: url(${pattern_2_circles});
      background-size: 80%;
      background-repeat: no-repeat;
      top: 55%;
      left: 0%;
    }
    .talent .img-container {
      order: -1;
    }
    .talent {
      grid-template-columns: 40% 60%;
    }
  }
`;
export default AboutInfo;
