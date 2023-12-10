import styled from 'styled-components';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import { Marker, Popup } from 'react-leaflet';
const LocationMap = () => {
  const position = [43.644544255510866, -79.39427856551758];

  return (
    <Wrapper>
      <MapContainer
        center={[43.644544255510866, -79.39427856551758]}
        zoom={12}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            We are here! <br /> Come visit us.
          </Popup>
        </Marker>
      </MapContainer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 30rem;
  height: 30rem;
  display: grid;
  margin: 0 auto;
  #map {
    height: 300px;
  }
`;

export default LocationMap;
