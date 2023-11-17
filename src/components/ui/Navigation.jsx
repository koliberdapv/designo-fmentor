import { Link } from 'react-router-dom';
import styled from 'styled-components';
import toggleSidebar from '../../utils/toggleSidebar';

const Navigation = ({ isFooter }) => {
	return (
		<Wrapper className={isFooter ? 'footer-nav-layout' : ''}>
			<li>
				<Link
					to="/about-us"
					onClick={() => toggleSidebar(false)}
				>
					our company
				</Link>
			</li>
			<li>
				<Link
					to="/locations"
					onClick={() => toggleSidebar(false)}
				>
					locations
				</Link>
			</li>
			<li>
				<Link
					to="/contact-us"
					onClick={() => toggleSidebar(false)}
				>
					contact
				</Link>
			</li>
		</Wrapper>
	);
};

const Wrapper = styled.ul`
	display: flex;
	align-items: center;
	gap: 2.625rem;
`;

42 / 16;
export default Navigation;
