import styled from 'styled-components';
import Logo from './Logo';
import hamburger from '../../assets/shared/mobile/icon-hamburger.svg';
const Header = () => {
	return (
		<Wrapper>
			<div className="width-controller">
				<section className="header-content">
					<Logo isDark={true} />
					<article className="header-content__menu">
						<ul>
							<li>
								<a href="/">our company</a>
							</li>
							<li>
								<a href="/">locations</a>
							</li>
							<li>
								<a href="/">contact</a>
							</li>
						</ul>
					</article>
					<button
						type="button"
						className="menu-btn"
					>
						<img
							src={hamburger}
							alt="Menu"
						/>
					</button>
				</section>
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
	}
	.menu-btn {
		display: none;
		border: none;
		background-color: transparent;
		cursor: pointer;
		padding: 1rem;
		margin: -1rem;
	}
	.header-content__menu ul {
		display: flex;
	}
	@media (max-width: 768px) {
		.menu-btn {
			display: block;
		}
	}
`;

export default Header;
