import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/context';

const Navigation = ({ isFooter }) => {
	const { setIsSidebarOpen } = useGlobalContext();
	const links = [
		{
			id: 1,
			name: 'our company',
			link: '/about-us',
		},
		{
			id: 2,
			name: 'locations',
			link: '/locations',
		},
		{
			id: 3,
			name: 'contact',
			link: '/contact-us',
		},
	];

	return (
		<Wrapper className={isFooter ? 'footer-nav-layout' : ''}>
			{links.map((link) => {
				const { id, name, link: url } = link;
				return (
					<li key={id}>
						<Link
							to={url}
							onClick={() => setIsSidebarOpen(false)}
						>
							{name}
						</Link>
					</li>
				);
			})}
		</Wrapper>
	);
};

const Wrapper = styled.ul`
	z-index: 999;
	display: flex;
	align-items: center;
	gap: 2.625rem;
	a:focus-visible,
	a:hover {
		transition: 200ms all ease-in-out;
		box-shadow: inset 0 -1px 0 hsl(270, 4%, 11%, 0.5);
	}
`;

export default Navigation;
