import styled from 'styled-components';
import { LocationMap, LocationInfo } from './';

const LocationItem = ({ location }) => {
  return (
    <Wrapper id={location.name}>
      <div className="width-controller restricted">
        <div className="item-content obs-item" data-country={location.name}>
          <LocationMap coordinates={location.coordinates} />
          <LocationInfo location={location} />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .item-content {
    display: grid;
  }
  @media screen and (width >= 768px) {
    .item-content {
      gap: 1.5rem;
    }
  }
  @media screen and (width >= 1024px) {
    .item-content {
      grid-template-columns: 1fr 350px;
    }
    [data-country='Australia'] {
      grid-template-columns: 350px 1fr;
    }
    .item-content:not([data-country='Australia']) article:nth-child(2) {
      order: -1;
    }
  }
`;

export default LocationItem;
