import { CTA, Footer, Header } from './';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SharedLayout = ({}) => {
  return (
    <Wrapper>
      <Header />
      <Outlet />
      <CTA />
      <Footer />
      <ToastContainer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  min-height: 100svh;
  overflow: hidden;
`;

export default SharedLayout;
