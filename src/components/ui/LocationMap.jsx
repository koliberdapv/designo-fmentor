import styled from 'styled-components';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import { Marker, Popup } from 'react-leaflet';
const LocationMap = ({ coordinates }) => {
  return (
    <Wrapper>
      <MapContainer center={coordinates} zoom={11} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coordinates}>
          <Popup>
            We are here! <br /> Come visit us.
          </Popup>
        </Marker>
      </MapContainer>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  height: 320px;
  width: 100vw;
  display: grid;
  @media screen and (width >= 768px) {
    height: 326px;
    width: calc(100vw - (2.625rem * 2));
    border-radius: var(--br-form);
    overflow: hidden;
  }
  @media screen and (width >= 1024px) {
    width: 350px;
  }
`;

export default LocationMap;
