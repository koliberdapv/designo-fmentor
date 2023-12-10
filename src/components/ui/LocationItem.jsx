import styled from 'styled-components';
import { LocationMap, LocationInfo } from './';

const LocationItem = () => {
  return (
    <Wrapper>
      <div className="width-controller">
        <div className="item-content">
          <LocationInfo />
          <LocationMap />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default LocationItem;
