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
	top: 96px;
	left: 0;
	width: 100%;
	background-color: var(--clr-black);
	padding: 3rem 0;
	border: none;
	transition: 200ms all ease-in-out;
	ul {
		flex-direction: column;
		align-items: flex-start;
		gap: 2rem;
		a {
			color: var(--clr-white);
			font-size: var(--fs-title);
		}
	}
`;

export default Sidebar;
