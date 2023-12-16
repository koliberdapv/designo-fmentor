import { Link } from 'react-router-dom';
import styled from 'styled-components';
import background from '../../assets/shared/desktop/bg-pattern-call-to-action.svg';

const CTA = () => {
  return (
    <Wrapper data-type="CTA">
      <div className="width-controller">
        <div className="cta-container">
          <div className="cta-container__info">
            <header>
              Let's talk about <br /> your project
            </header>
            <p>
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </p>
          </div>
          <Link to="/contact-us" className="cta-btn btn">
            get in touch
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  isolation: isolate;
  overflow: hidden;
  .cta-container {
    position: relative;
    display: grid;
    justify-content: center;
    color: var(--clr-white);
    padding: 4rem 1.5rem;
    background-color: var(--clr-peach);
    border-radius: var(--br-form);
    text-align: center;
    gap: 1.625rem;
    isolation: isolate;
    overflow: hidden;
  }
  .cta-container::before {
    content: '';
    position: absolute;
    top: 0;
    right: 2.5rem;
    width: 100%;
    height: 100%;
    max-width: 800px;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-position: 100% 50%;
    background-size: 75%;
    background-size: cover;
    z-index: -1;
  }
  .cta-container__info {
    display: grid;
    gap: 0.375rem;
  }
  p {
    max-width: 450px;
  }
  header {
    font-size: var(--fs-subtitle);
    line-height: var(--lh-subtitle);
  }
  .cta-btn {
    justify-self: center;
  }
  .cta-btn:hover,
  .cta-btn:focus {
    color: var(--clr-white);
  }
  @media screen and (width < 768px) {
    p {
      font-size: var(--fs-btn-p);
    }
    .cta-container::before {
      right: 0rem;
      background-size: 250%;
    }
    margin-top: 7.5rem;
  }
  @media screen and (width > 768px) {
    header {
      font-size: var(--fs-h2);
      line-height: var(--lh-title);
    }
  }
  @media screen and (width > 1024px) {
    .cta-container {
      padding: 4.5rem 5.9375rem;
      grid-template-columns: 1fr auto;
      justify-content: space-between;
      text-align: left;
    }
    .cta-btn {
      justify-self: flex-end;
      align-self: center;
    }
    .cta-container__info {
      gap: 1rem;
    }
    margin-top: 10rem;
  }
  .width-controller {
    position: relative;
  }
  .width-controller::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: -50%;
    width: 200%;
    height: 50%;
    background-color: var(--clr-black);
    z-index: -1;
  }
`;

export default CTA;
