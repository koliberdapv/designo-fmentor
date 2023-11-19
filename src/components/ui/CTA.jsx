import { Link } from 'react-router-dom';
import styled from 'styled-components';
const CTA = () => {
	return (
		<Wrapper>
			<div>
				<header>
					Let's talk about <br /> your project
				</header>
				<p>
					Ready to take it to the next level? Contact us today and find out how
					our expertise can help your business grow.
				</p>
			</div>
			<button className="cta-btn btn">
				<Link to="/contact-us">get in touch</Link>
			</button>
		</Wrapper>
	);
};

const Wrapper = styled.article`
	position: absolute;
	top: -10rem;

	display: grid;
	justify-content: center;
	color: var(--clr-white);
	padding: 4rem 1.5rem;
	background-color: var(--clr-peach);
	border-radius: var(--br-form);
	text-align: center;
	gap: 1.625rem;
	div {
		display: grid;
		gap: 0.375rem;
	}
	p {
		max-width: 450px;
	}
	header {
		font-size: var(--fs-subtitle);
		line-height: var(--lh-subtitle);
	}
	.cta-btn {
		justify-self: center;
	}
	.cta-btn:hover a {
		color: var(--clr-white);
		transition: 200ms all ease-in-out;
	}
	@media screen and (width < 768px) {
		width: calc(100% - 3rem);
		p {
			font-size: var(--fs-btn-p);
		}
	}
	@media screen and (width > 768px) {
		padding: 3.5625rem 0;
		header {
			font-size: var(--fs-h2);
			line-height: var(--lh-title);
		}
	}
	@media screen and (width > 1024px) {
		padding: 4.5rem 5.9375rem;
		grid-template-columns: 1fr 1fr;
		justify-content: space-between;
		text-align: left;
		.cta-btn {
			justify-self: flex-end;
			align-self: center;
		}
		div {
			gap: 1rem;
		}
	}
`;

export default CTA;
