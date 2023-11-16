import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo_light from '../../assets/shared/desktop/logo-light.png';
import logo_dark from '../../assets/shared/desktop/logo-dark.png';
const Logo = ({ isDark }) => {
	return (
		<Wrapper className="logo">
			<Link to="/home">
				<div className="img-container">
					<img
						src={isDark ? logo_dark : logo_light}
						alt="designo logo"
					/>
				</div>
			</Link>
		</Wrapper>
	);
};

const Wrapper = styled.article`
	width: 12.625rem;
	display: flex;
`;

export default Logo;
