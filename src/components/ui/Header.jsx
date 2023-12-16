import styled from 'styled-components';
import { Logo, Navigation, Sidebar } from './';
import { useGlobalContext } from '../../context/context';

const Header = () => {
  const { handleMenuBtnClick, isSidebarOpen } = useGlobalContext();

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
            onClick={handleMenuBtnClick}
          >
            <div
              className={isSidebarOpen ? 'hamburger cross' : 'hamburger'}
              alt="Menu"
            ></div>
          </button>
        </section>
        <Sidebar />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  .hamburger,
  .hamburger::before,
  .hamburger::after {
    width: 1.5rem;
    height: 4px;
    background-color: var(--clr-black);
    transition: transform 350ms ease-in-out, opacity 200ms linear;
  }
  .hamburger {
    position: relative;
    transform: translateX(0);
  }
  .hamburger::before,
  .hamburger::after {
    content: '';
    position: absolute;
    left: 0;
    transform-origin: center;
  }
  .hamburger::before {
    top: -0.5rem;
  }
  .hamburger::after {
    top: 0.5rem;
  }
  .cross {
    transform: rotate(45deg);
  }
  .cross::before {
    opacity: 0;
  }
  .cross::after {
    transform: rotateZ(90deg) translate(-0.5rem);
    transform: rotateZ(-90deg) translate(0.5rem);
  }
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
  @media (width >= 768px) {
    .header-content {
      padding: 4.375rem 0;
    }
  }
`;

export default Header;
