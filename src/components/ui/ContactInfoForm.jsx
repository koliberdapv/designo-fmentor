import styled from 'styled-components';
import ContactForm from './ContactForm';
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
  }
  .info {
    display: grid;
    gap: 2rem;
    text-align: center;
  }
  .h1 {
    font-size: var(--fs-subtitle);
    font-weight: var(--fw-500);
    line-height: var(--lh-subtitle);
  }
`;
export default ContactInfoForm;
