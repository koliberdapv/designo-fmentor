import styled from 'styled-components';
import { ContactInfoForm, LocationsNav } from '../components/ui';
import { useEffect } from 'react';
import scrollToTop from '../utils/scrollToTop';
import { useGlobalContext } from '../context/context';

const Contact = () => {
	const { setIsSidebarOpen } = useGlobalContext();
	useEffect(() => {
		scrollToTop();
		setIsSidebarOpen(false);
	}, []);
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
		padding-bottom: 7.5rem;
		gap: 7.5rem;
	}
	@media screen and (width >= 1024px) {
		gap: 10rem;
		padding-bottom: 10rem;
	}
`;

export default Contact;
