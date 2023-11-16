import Footer from './Footer';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const SharedLayout = () => {
	return (
		<Wrapper>
			<Header />
			<Outlet />
			<Footer />
		</Wrapper>
	);
};

const Wrapper = styled.div``;

export default SharedLayout;
