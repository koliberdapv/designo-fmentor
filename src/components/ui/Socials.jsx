import styled from 'styled-components';
import facebook from '../../assets/shared/desktop/icon-facebook.svg';
import instagram from '../../assets/shared/desktop/icon-instagram.svg';
import pinterest from '../../assets/shared/desktop/icon-pinterest.svg';
import twitter from '../../assets/shared/desktop/icon-twitter.svg';
import youtube from '../../assets/shared/desktop/icon-youtube.svg';
import { Link } from 'react-router-dom';

const Socials = () => {
	return (
		<Wrapper>
			<li>
				<Link to="https://www.facebook.com">
					<div className="img-container">
						<img
							src={facebook}
							alt="Facebook"
						/>
					</div>
				</Link>
			</li>
			<li>
				<Link to="https://www.youtube.com">
					<div className="img-container">
						<img
							src={youtube}
							alt="Youtube"
						/>
					</div>
				</Link>
			</li>
			<li>
				<Link to="https://www.twitter.com">
					<div className="img-container">
						<img
							src={twitter}
							alt="Twitter"
						/>
					</div>
				</Link>
			</li>
			<li>
				<Link to="https://www.pinterest.com">
					<div className="img-container">
						<img
							src={pinterest}
							alt="Pinterest"
						/>
					</div>
				</Link>
			</li>
			<li>
				<Link to="https://www.instagram.com">
					<div className="img-container">
						<img
							src={instagram}
							alt="Instagram"
						/>
					</div>
				</Link>
			</li>
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
