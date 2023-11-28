import { Link } from 'react-router-dom';
import styled from 'styled-components';
import img_arrow from '../../assets/shared/desktop/icon-right-arrow.svg';
import bg_web_design_desk from '../../assets/home/desktop/image-web-design-large.jpg';
import bg_app_design_desk from '../../assets/home/desktop/image-app-design.jpg';
import bg_graphic_design_desk from '../../assets/home/desktop/image-graphic-design.jpg';
import bg_web_design_tab from '../../assets/home/tablet/image-web-design.jpg';
import bg_app_design_tab from '../../assets/home/tablet/image-app-design.jpg';
import bg_graphic_design_tab from '../../assets/home/tablet/image-graphic-design.jpg';
import bg_web_design_mob from '../../assets/home/mobile/image-web-design.jpg';
import bg_app_design_mob from '../../assets/home/mobile/image-app-design.jpg';
import bg_graphic_design_mob from '../../assets/home/mobile/image-graphic-design.jpg';

const ProjectsNavigation = ({ pageName }) => {
  const list = [
    {
      name: 'web design',
      path: '/web-design',
    },
    {
      name: 'app design',
      path: '/app-design',
    },
    {
      name: 'graphic design',
      path: '/graphic-design',
    },
  ];
  return (
    <Wrapper>
      <div className="width-controller">
        <nav className="nav-content">
          {/* Render the navigation links */}
          {list.map((item, index) => {
            // Skip rendering the current page's link
            if (item.name === pageName) return null;
            // Determine the class name based on the pageName and item.name
            const className = `nav-content__item ${
              // Define a variable called 'className' and assign it a string value
              pageName !== 'app design' && // Check if the value of 'pageName' is not equal to 'app design'
              pageName !== 'graphic design' && // Check if the value of 'pageName' is not equal to 'graphic design'
              item.name === 'web design' // Check if the value of 'item.name' is equal to 'web design'
                ? 'span_2' // If all the conditions above are true, assign the string 'span_2' to 'className'
                : '' // If any of the conditions above are false, assign an empty string to 'className'
            }`;
            return (
              <Link
                to={item.path}
                className={className}
                key={index}
                data-content={item.name}
              >
                <h2 className="h2">{item.name}</h2>
                <div className="view">
                  <p>view projects</p>
                  <div className="img-container">
                    <img src={img_arrow} alt="arrow-right" />
                  </div>
                </div>
              </Link>
            );
          })}
        </nav>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 7.5rem;
  text-align: center;
  .nav-content {
    display: grid;
    gap: 1.5rem;
  }
  .nav-content__item {
    display: grid;
    align-content: center;
    justify-content: center;
    border-radius: var(--br-form);
    width: 100%;
    height: 15.625rem;
    color: var(--clr-white);
    gap: 0.75rem;
  }
  .img-container {
    width: 0.5rem;
    aspect-ratio: 1/1;
  }
  .view {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
  [data-content] {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    isolation: isolate;
    overflow: hidden;
    z-index: 1;
  }
  [data-content]:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
    background-color: var(--clr-black);
    opacity: 0.4;
  }
  [data-content]::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: var(--clr-peach);
    opacity: 0.7;
    visibility: hidden;
  }
  [data-content]:hover::after,
  [data-content]:focus::after {
    visibility: visible;
  }
  [data-content]:hover::before,
  [data-content]:focus::before {
    visibility: hidden;
  }
  p {
    font-size: var(--fs-btn-p);
    letter-spacing: var(--spacing-h3);
  }
  @media screen and (width < 768px) {
    .h2 {
      font-size: var(--fs-h4);
      line-height: var(--lh-subtitle);
      letter-spacing: var(--spacing-h4);
      font-weight: var(--fw-500);
    }
    [data-content='web design'] {
      background-image: url(${bg_web_design_mob});
    }
    [data-content='app design'] {
      background-image: url(${bg_app_design_mob});
    }
    [data-content='graphic design'] {
      background-image: url(${bg_graphic_design_mob});
    }
  }
  @media screen and (width > 768px) {
    .nav-content__item {
      gap: 1.5rem;
      height: 12.5rem;
    }
    .h2 {
    }
    [data-content='web design'] {
      background-image: url(${bg_web_design_tab});
    }
    [data-content='app design'] {
      background-image: url(${bg_app_design_tab});
    }
    [data-content='graphic design'] {
      background-image: url(${bg_graphic_design_tab});
    }
  }
  @media screen and (width > 1024px) {
    .nav-content {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.875rem;
    }
    .nav-content__item {
      height: 19.25rem;
    }
    [data-content='web design'] {
      background-image: url(${bg_web_design_desk});
    }
    [data-content='app design'] {
      background-image: url(${bg_app_design_desk});
    }
    [data-content='graphic design'] {
      background-image: url(${bg_graphic_design_desk});
    }
    .span_2 {
      grid-row: span 2;
      height: 100%;
    }
  }
`;

export default ProjectsNavigation;
