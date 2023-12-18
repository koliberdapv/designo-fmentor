import styled from 'styled-components';
import background from '../../assets/shared/desktop/bg-pattern-call-to-action.svg';
import bg_circle from '../../assets/shared/desktop/bg-pattern-small-circle.svg';

const DesignPageHeader = ({ header }) => {
  const { title, description } = header;
  return (
    <Wrapper>
      <div className="width-controller">
        <div className="header-content obs-item">
          <h1 className="h1">{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  .header-content {
    background-color: var(--clr-peach);
    color: var(--clr-white);
    display: grid;
    padding: 6.5625rem 1.5rem;
    align-items: center;
    justify-items: center;
    text-align: center;
    gap: 1.5rem;
    position: relative;
    isolation: isolate;
    overflow: hidden;
  }
  .header-content::before {
    content: '';
    position: absolute;
    top: 0;
    right: 2.5rem;
    width: 100%;
    height: 100%;
    max-width: 800px;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-position: 100% 50%;
    background-size: 75%;
    background-size: cover;
    z-index: -1;
  }
  @media screen and (width < 768px) {
    .width-controller {
      padding: 0;
    }
    .h1 {
      font-size: var(--fs-subtitle);
      line-height: var(--lh-subtitle);
    }
    p {
      font-size: var(--fs-btn-p);
      line-height: var(--lh-btn-p);
    }
    .header-content::before {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      max-width: 800px;
      background-image: url(${background});
      background-repeat: no-repeat;
      background-position: 45% 0%;
      background-size: 250%;
    }
  }
  @media screen and (width > 768px) {
    .header-content {
      border-radius: var(--br-form);
      padding: 4rem 0;
    }
    p {
      max-width: 390px;
      margin-inline: auto;
    }
    .header-content::before {
      transform: scaleY(-1);
    }
  }
`;

export default DesignPageHeader;
