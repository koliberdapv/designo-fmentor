import styled from 'styled-components';
import { Link } from 'react-router-dom';
const ProjectCard = ({ title, description, image }) => {
	return (
		<Wrapper>
			<Link>
				<div className="card-content obs-item">
					<div className="img-container">
						<img
							src={image}
							alt="blogr website"
						/>
					</div>
					<header className="card-info">
						<h3 className="h3">{title}</h3>
						<p>{description}</p>
					</header>
				</div>
			</Link>
		</Wrapper>
	);
};

const Wrapper = styled.article`
	.card-content {
		border-radius: var(--br-form);
		overflow: hidden;
		display: grid;
	}
	.card-info {
		background-color: var(--clr-light-peach-card);
		display: grid;
		align-content: center;
		justify-items: center;
		text-align: center;
		padding: 2rem 1.875rem;
		gap: 1rem;
		transition: 150ms all ease-in;
	}
	p {
		text-transform: none;
	}
	.h3 {
		transition: 150ms all ease-in;
		color: var(--clr-peach);
	}
	a:hover .card-info {
		background-color: var(--clr-peach);
		color: var(--clr-white);
	}
	a:hover .h3 {
		color: var(--clr-white);
	}
	@media screen and (width > 768px) {
		.card-content {
			grid-template-columns: 50% 50%;
		}
		.card-info {
			padding: 2rem 2.56rem;
		}
	}
	@media screen and (width > 1024px) {
		.card-content {
			grid-template-columns: 1fr;
			max-width: 350px;
		}
		.card-info {
			padding: 2rem;
			min-height: 184px;
			align-content: flex-start;
		}
	}
`;

export default ProjectCard;
