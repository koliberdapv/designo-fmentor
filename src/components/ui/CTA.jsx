import { Link } from 'react-router-dom';
import styled from 'styled-components';
import background from '../../assets/shared/desktop/bg-pattern-call-to-action.svg';

const CTA = () => {
  return (
    <Wrapper>
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
          <button className="cta-btn btn">
            <Link to="/contact-us">get in touch</Link>
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  transform: translateY(50%);
  z-index: 2;
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
  .cta-btn:hover a {
    color: var(--clr-white);
    transition: 200ms all ease-in-out;
  }
  @media screen and (width < 768px) {
    p {
      font-size: var(--fs-btn-p);
    }
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
  }
`;

export default CTA;
