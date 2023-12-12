import styled from 'styled-components';
import { ContactInfoForm, LocationsNav } from '../components/ui';

const Contact = () => {
  return (
    <Wrapper>
      <ContactInfoForm />
      <LocationsNav />
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default Contact;
