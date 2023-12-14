import styled from 'styled-components';
import australia from '../../assets/shared/desktop/illustration-australia.svg';
import canada from '../../assets/shared/desktop/illustration-canada.svg';
import uk from '../../assets/shared/desktop/illustration-united-kingdom.svg';
import bg_pattern_circle from '../../assets/shared/desktop/bg-pattern-small-circle.svg';
import { Link } from 'react-router-dom';

const LocationsNav = () => {
	const locations = [
		{
			name: 'canada',
			img: canada,
			link: '/locations',
		},
		{
			name: 'australia',
			img: australia,
			link: '/locations',
		},
		{
			name: 'united kingdom',
			img: uk,
			link: '/locations',
		},
	];

	return (
		<Wrapper>
			<div className="width-controller">
				<ul className="nav-container">
					{locations.map((location, index) => {
						const { name, img, link } = location;
						return (
							<li
								className="nav-item"
								key={index}
							>
								<picture
									className="img-container"
									data-type={name}
								>
									<img
										src={img}
										alt={name}
									/>
								</picture>
								<section className="item-info">
									<h3 className="h3">{name}</h3>
									<Link
										to={link}
										className="nav-link btn btn-light"
										autoFocus={false}
									>
										see location
									</Link>
								</section>
							</li>
						);
					})}
				</ul>
			</div>
		</Wrapper>
	);
};
const Wrapper = styled.nav`
	margin: 7.5rem 0;
	.nav-container {
		display: grid;
		gap: 3rem;
	}
	.nav-item {
		display: grid;
		place-items: center;
		text-align: center;
		gap: 3rem;
	}
	.item-info {
		display: grid;
		place-items: center;
		gap: 2rem;
	}
	.img-container {
		width: 202px;
		aspect-ratio: 1/1;
		position: relative;
		isolation: isolate;
	}
	.img-container:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		aspect-ratio: 1/1;
		background: url(${bg_pattern_circle}) no-repeat center center / cover;
		z-index: -1;
	}
	[data-type='canada']::before {
		transform: rotate(90deg);
	}
	[data-type='united kingdom']::before {
		transform: rotate(270deg);
	}
	@media screen and (width >= 768px) {
		margin: 0;
	}
	@media screen and (width >= 1024px) {
		.nav-container {
			grid-template-columns: repeat(3, 1fr);
		}
	}
`;

export default LocationsNav;
