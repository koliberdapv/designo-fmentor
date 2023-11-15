import Footer from './Footer';
import Header from './Header';
import Wrapper from './Wrappers/SharedLayoutWrapper';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
	return (
		<Wrapper>
			<Header />
			<Outlet />
			<Footer />
		</Wrapper>
	);
};

export default SharedLayout;
