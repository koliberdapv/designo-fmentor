import styled from 'styled-components';
import { ContactInfoForm, LocationsNav } from '../components/ui';

const Contact = () => {
  return (
    <Wrapper className="contact-page">
      <ContactInfoForm />
      <LocationsNav />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  @media screen and (width >= 768px) {
    gap: 7.5rem;
  }
  @media screen and (width >= 1024px) {
    gap: 10rem;
  }
`;

export default Contact;
