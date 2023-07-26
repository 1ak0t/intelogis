import {polyline} from '../../test';
import {MapContainer, Marker, Polyline, Popup, TileLayer, useMap} from 'react-leaflet'
import {rotateLatLng} from '../../utils/rotateCoordinates';
import './map.scss'

const colorOptions = { color: 'blue' };
const coordinates = rotateLatLng(polyline);

function Map() {
  return (
    <section className='map'>
      <MapContainer center={[59.84660399, 30.29496392]} zoom={13} scrollWheelZoom={true} className='map__container'>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[59.84660399, 30.29496392]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <Marker position={[59.82934196, 30.42423701]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <Polyline pathOptions={colorOptions} positions={coordinates} />
      </MapContainer>
    </section>
  );
}

export default Map;