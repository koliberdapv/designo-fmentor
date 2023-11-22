import styled from 'styled-components';

const Figure = ({ images }) => {
  const [mobile, tablet, desktop, name] = images;
  return (
    <Wrapper>
      <img src={mobile} alt={name} data-resolution="mobile" />
      <img src={tablet} alt={name} data-resolution="tablet" />
      <img src={desktop} alt={name} data-resolution="desktop" />
    </Wrapper>
  );
};

const Wrapper = styled.figure`
  [data-resolution='tablet'] {
    display: none;
  }
  [data-resolution='desktop'] {
    display: none;
  }
  @media (min-width: 768px) {
    [data-resolution='mobile'] {
      display: none;
    }
    [data-resolution='tablet'] {
      display: block;
    }
    [data-resolution='desktop'] {
      display: none;
    }
  }
  @media (min-width: 1024px) {
    [data-resolution='mobile'] {
      display: none;
    }
    [data-resolution='tablet'] {
      display: none;
    }
    [data-resolution='desktop'] {
      display: block;
    }
  }
`;

export default Figure;
