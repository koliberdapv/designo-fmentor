import { Footer, Header, Sidebar } from './';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const SharedLayout = () => {
	return (
		<Wrapper>
			<Header />
			{/* <Sidebar /> */}
			<Outlet />
			<Footer />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: grid;
	grid-template-rows: auto 1fr auto;
	min-height: 100vh;
	min-height: 100svh;
`;

export default SharedLayout;
