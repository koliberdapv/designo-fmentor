import styled from 'styled-components';
import { Logo, Navigation, Socials } from './';
const Footer = () => {
  return (
    <Wrapper>
      <div className="width-controller">
        <section className="footer-content">
          <Logo />
          <div className="divider"></div>
          <article className="footer-content__nav">
            <Navigation isFooter={true} />
          </article>
          <article className="footer-content__info">
            <div>
              <header>Designo Central Office</header>
              <p>3886 Wellington Street</p>
              <p>Toronto, Ontario M9C 3J5</p>
            </div>
            <div>
              <header>Contact Us (Central Office)</header>
              <div className="contact">
                <p>P :</p>
                <a href="tel:+">+1 253-863-8967</a>
              </div>
              <div className="contact">
                <p>M :</p>
                <a href="mailto:contact@designo.co">contact@designo.co</a>
              </div>
            </div>
          </article>
          <Socials />
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background-color: var(--clr-black);
  color: var(--clr-white);
  position: relative;
  z-index: 1;
  .footer-content {
    z-index: 1;
    padding: 4rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 2.5rem;
  }
  .footer-nav-layout {
    flex-direction: column;
    gap: 2rem;
    a {
      color: var(--clr-white);
    }
    a:hover,
    a:focus {
      box-shadow: inset 0 -1px 0 hsl(0, 0%, 100%, 0.5);
    }
  }
  .contact {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    a {
      color: var(--clr-white);
      text-transform: unset;
      letter-spacing: unset;
      font-size: var(--fs-p);
    }
  }
  .footer-content__info {
    opacity: 0.5;
    display: grid;
    gap: 2.5rem;
    header {
      font-weight: var(--fw-700);
    }
  }
  .divider {
    width: 100%;
    height: 1px;
    background-color: var(--clr-white);
    opacity: 0.1;
  }
  @media screen and (width > 768px) {
    .footer-content {
      flex-direction: row;
      text-align: left;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    .footer-nav-layout {
      flex-direction: row;
      gap: 2.625rem;
    }
    .logo {
      order: -3;
    }
    .divider {
      order: -1;
      grid-column: span 2;
      margin-bottom: -1rem;
    }
    .footer-content__nav {
      order: -2;
    }
    .footer-content__info {
      grid-template-columns: repeat(2, 1fr);
      justify-content: space-between;
    }
    .contact {
      justify-content: flex-start;
    }
  }
  @media screen and (width > 1024px) {
    .footer-content__info {
      gap: 12rem;
    }
  }
`;
export default Footer;
