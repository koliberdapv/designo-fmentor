import styled from 'styled-components';
import { Navigation } from './';
const Sidebar = () => {
  return (
    <Wrapper id="sidebar" className="sidebar-dialog">
      <div className="width-controller">
        <Navigation />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.dialog`
  z-index: 999 !important;
  top: 96px;
  left: 0;
  width: 100%;
  background-color: var(--clr-black);
  padding: 3rem 0;
  border: none;
  transition: 200ms all ease-in-out;
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
