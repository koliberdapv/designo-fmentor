import { Link } from 'react-router-dom';
import styled from 'styled-components';
import hero_phone from '../../assets/home/desktop/image-hero-phone.png';
import bg_small_circle from '../../assets/shared/desktop/bg-pattern-small-circle.svg';

const Hero = () => {
  return (
    <Wrapper>
      <div className="width-controller">
        <div className="hero-content">
          <article className="hero-content__info">
            <header className="h1">
              Award-winning custom designs and digital branding solutions
            </header>
            <p className="p">
              With over 10 years in the industry, we are experienced in creating
              fully responsive websites, app design, and engaging brand
              experiences. Find out more about our services.
            </p>
            <Link to="/about" className="cta-btn btn">
              learn more
            </Link>
          </article>
          <figure className="hero-content__img img-container"></figure>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .hero-content {
    position: relative;
    display: grid;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: var(--br-form);
    background-color: var(--clr-peach);
    color: var(--clr-white);
    padding: 3.75rem 3.625rem 0;
    overflow: hidden;
    isolation: isolate;
  }
  .hero-content__info {
    display: grid;
  }
  .p {
    max-width: 446px;
    margin-top: 1.5rem;
    margin-bottom: 1.125rem;
    margin-inline: auto;
  }
  header {
    max-width: 480px;
    margin-inline: auto;
  }
  .hero-content::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-image: url(${bg_small_circle});
    background-repeat: no-repeat;
    background-size: 70%;
    background-position: 100% 50%;
    z-index: -1;
  }
  a {
    margin-inline: auto;
  }
  @media screen and (width < 768px) {
    header {
      font-size: var(--fs-subtitle);
      line-height: var(--lh-subtitle);
      max-width: 330px;
    }
    .width-controller {
      padding: 0;
    }
    .hero-content {
      border-radius: 0;
      padding: 5rem 1.4rem 0;
    }
    .p {
      margin-top: 0.875rem;
    }
    .hero-content::before {
      top: 8rem;
      background-size: cover;
      background-position: 0% 50%;
    }
  }
  .hero-content__img {
    height: 450px;
    width: 120%;
    transform: translateX(-10%);
    background-image: url(${hero_phone});
    background-repeat: no-repeat;
    background-position: 50% 15%;
  }
  @media screen and (width > 1024px) {
    .hero-content {
      grid-template-columns: 480px 1fr;
      padding: 9.5rem 5.9375rem;
    }
    .hero-content__info {
      text-align: left;
      justify-content: flex-start;
    }
    a {
      margin-inline: 0;
      margin-right: auto;
    }
    header,
    .p {
      margin-inline: 0;
    }
    .p {
      margin-bottom: 2.5rem;
    }
    .hero-content__img {
      height: 200%;
      width: 150%;
    }
    .hero-content::before {
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      rotate: 90deg;
      background-size: 55%;
      background-position: 50% 50%;
      transform: translateY(-37%);
    }
  }
`;

export default Hero;
