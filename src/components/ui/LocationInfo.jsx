import styled from 'styled-components';
import bg_circles from '../../assets/shared/desktop/bg-pattern-three-circles.svg';

const LocationInfo = ({ location }) => {
	const { name, address, contact } = location;
	return (
		<Wrapper>
			<div className="info-content">
				<h2 className="subtitle">{name}</h2>
				<div className="address">
					<header className="p-light">{address.title}</header>
					{address.address.map((line, index) => {
						return (
							<p
								key={index}
								className="p-light"
							>
								{line}
							</p>
						);
					})}
				</div>
				<div className="contact">
					<header className="p-light">{contact.title}</header>
					{contact.phone.map((line, index) => {
						return (
							<p
								key={index}
								className="p-light"
							>
								{line}
							</p>
						);
					})}
				</div>
			</div>
		</Wrapper>
	);
};
const Wrapper = styled.article`
	overflow: hidden;
	.info-content {
		display: grid;
		gap: 1.5rem;
		text-align: center;
		padding: 5rem 0;
		background-color: var(--clr-light-peach-card);
		position: relative;
		isolation: isolate;
		overflow: hidden;
	}
	.subtitle {
		color: var(--clr-peach);
	}
	header {
		font-weight: var(--fw-700);
	}
	.info-content::before {
		position: absolute;
		content: '';
		top: 0;
		left: 0;
		width: 100%;
		aspect-ratio: 1/1.25;
		background-image: url(${bg_circles});
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		z-index: -1;
	}
	@media screen and (width >= 768px) {
		.info-content {
			border-radius: var(--br-form);
			overflow: hidden;
			text-align: left;
			padding: 5.5rem 4.6875rem;
			grid-template-columns: repeat(2, 1fr);
		}
		.subtitle {
			font-size: var(--fs-h2);
			grid-column: 1 / -1;
		}
	}
	@media screen and (width >= 1024px) {
		.info-content {
			min-height: 326px;
		}
	}
`;
export default LocationInfo;
