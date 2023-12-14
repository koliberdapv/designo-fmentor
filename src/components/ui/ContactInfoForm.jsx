import styled from 'styled-components';
import ContactForm from './ContactForm';
import bg_two_circles from '../../assets/shared/desktop/bg-pattern-two-circles.svg';
import mobile_hero_bg from '../../assets/contact/mobile/bg-pattern-hero-contact-mobile.svg';
import desktop_hero_bg from '../../assets/contact/desktop/bg-pattern-hero-desktop.svg';

const ContactInfoForm = () => {
  return (
    <Wrapper>
      <div className="width-controller restricted">
        <div className="contact-container">
          <article className="info">
            <h1 className="h1">Contact Us</h1>
            <p className="p-light">
              Ready to take it to the next level? Let’s talk about your project
              or idea and find out how we can help your business grow. If you
              are looking for unique digital experiences that’s relatable to
              your users, drop us a line.
            </p>
          </article>
          <ContactForm />
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  .contact-container {
    display: grid;
    padding: 4.5rem 1.5rem;
    background-color: var(--clr-peach);
    color: var(--clr-white);
    gap: 3rem;
    position: relative;
    isolation: isolate;
    overflow: hidden;
  }
  .contact-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 250%;
    aspect-ratio: 1/1;
    background: url(${mobile_hero_bg});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: -75% 50%;
    z-index: -1;
  }
  .info {
    display: grid;
    gap: 2rem;
    text-align: center;
  }
  @media screen and (width <= 768px) {
    .h1 {
      font-size: var(--fs-subtitle);
      font-weight: var(--fw-500);
      line-height: var(--lh-subtitle);
    }
  }
  @media screen and (width >= 768px) {
    .contact-container {
      border-radius: var(--br-form);
      padding: 4.4375rem 3.625rem;
    }
    .info {
      text-align: left;
    }
    .contact-container::before {
      width: 100%;
      background: url(${desktop_hero_bg});
      background-repeat: no-repeat;
      background-size: contain;
      background-position: -10rem -7rem;
    }
  }
  @media screen and (width >= 1024px) {
    .contact-container {
      grid-template-columns: 445px 1fr;
    }
    .contact-container {
      padding: 3.375rem 6rem;
      align-items: center;
    }
    .contact-container::before {
      width: 60%;
      background: url(${desktop_hero_bg});
      background-repeat: no-repeat;
      background-size: contain;
      background-position: -1rem -7rem;
    }
  }
  @media screen and (width >= 1200px) {
    .contact-container {
      gap: 6rem;
    }
  }
`;
export default ContactInfoForm;
