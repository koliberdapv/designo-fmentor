import styled from 'styled-components';
import { Navigation } from './';
const Sidebar = () => {
	return (
		<Wrapper
			id="sidebar"
			className="sidebar-dialog"
		>
			<div className="width-controller">
				<Navigation />
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.dialog`
	z-index: 998 !important;
	top: 96px;
	left: 0;
	width: 100%;
	background-color: var(--clr-black);
	padding: 3rem 0;
	border: none;
	transition: 250ms transform ease-in-out, 250ms opacity ease-in-out;
	transform: translateX(100%);
	opacity: 0;

	@media (min-width: 768px) {
		display: none;
	}
	ul {
		flex-direction: column;
		align-items: flex-start;
		gap: 2rem;
		a {
			color: var(--clr-white);
			font-size: var(--fs-title);
		}
		a:hover,
		a:focus {
			box-shadow: inset 0 -1px 0 hsl(0, 0%, 100%, 0.5);
		}
	}
`;

export default Sidebar;
