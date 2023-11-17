import styled from 'styled-components';
import facebook from '../../assets/shared/desktop/icon-facebook.svg';
import instagram from '../../assets/shared/desktop/icon-instagram.svg';
import pinterest from '../../assets/shared/desktop/icon-pinterest.svg';
import twitter from '../../assets/shared/desktop/icon-twitter.svg';
import youtube from '../../assets/shared/desktop/icon-youtube.svg';
import { Link } from 'react-router-dom';

const Socials = () => {
	const socials = [
		{
			id: 1,
			name: 'Facebook',
			icon: facebook,
			link: 'https://www.facebook.com',
		},
		{
			id: 2,
			name: 'Youtube',
			icon: youtube,
			link: 'https://www.youtube.com',
		},
		{
			id: 3,
			name: 'Twitter',
			icon: twitter,
			link: 'https://www.twitter.com',
		},
		{
			id: 4,
			name: 'Pinterest',
			icon: pinterest,
			link: 'https://www.pinterest.com',
		},
		{
			id: 5,
			name: 'Instagram',
			icon: instagram,
			link: 'https://www.instagram.com',
		},
	];
	return (
		<Wrapper>
			{socials.map((social) => {
				const { id, name, icon, link } = social;
				return (
					<li key={id}>
						<Link
							to={link}
							target="_blank"
						>
							<div className="img-container">
								<img
									src={icon}
									alt={name}
								/>
							</div>
						</Link>
					</li>
				);
			})}
		</Wrapper>
	);
};

const Wrapper = styled.ul`
	display: flex;
	gap: 1rem;
	align-items: center;
	justify-content: center;
	.img-container {
		width: 1.5rem;
	}
	@media screen and (width > 768px) {
		justify-content: flex-end;
		align-self: flex-end;
	}
	a:hover {
		filter: brightness(150%);
	}
`;

export default Socials;
