import styled from 'styled-components';
import close from '../../assets/shared/mobile/icon-close.svg';
import hamburger from '../../assets/shared/mobile/icon-hamburger.svg';
import toggleSidebar from '../../utils/toggleSidebar';
import { useEffect, useState } from 'react';
import { Logo, Navigation, Sidebar } from './';

const Header = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const handleClick = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	useEffect(() => {
		toggleSidebar(isSidebarOpen);
	}, [isSidebarOpen]);

	return (
		<Wrapper>
			<div className="width-controller">
				<section className="header-content">
					<Logo isDark={true} />
					<article className="header-content__nav">
						<Navigation />
					</article>
					<button
						type="button"
						className="menu-btn"
						onClick={handleClick}
					>
						<img
							src={isSidebarOpen ? close : hamburger}
							alt="Menu"
						/>
					</button>
				</section>
				<Sidebar />
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.header`
	.header-content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 2.18rem 0;
		position: relative;
	}
	.menu-btn {
		display: none;
		border: none;
		background-color: transparent;
		cursor: pointer;
		padding: 1rem;
		margin: -1rem;
	}
	@media (width < 768px) {
		.menu-btn {
			display: grid;
		}
		.header-content__nav {
			display: none;
		}
	}
`;

export default Header;
