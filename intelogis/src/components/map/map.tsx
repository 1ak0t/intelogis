import {MapContainer, Marker, Polyline, Popup, TileLayer, useMap} from 'react-leaflet'
import './map.scss'
import {useAppSelector} from '../../hooks';
import {nanoid} from 'nanoid';
import {latLngBounds} from 'leaflet';
import {coordinatesType, coordinatesArrayType} from '../../types/coordinatesType';

const colorOptions = { color: 'blue' };

type ChangeViewType = {
  center: coordinatesType;
  markers: coordinatesArrayType;
}
function ChangeView({center, markers}: ChangeViewType) {
  const map = useMap();
  map.setView(center, 14);

  let markerBounds = latLngBounds([]);
  markers.forEach(marker => markerBounds.extend(marker));
  markerBounds.isValid() && map.fitBounds(markerBounds);
  return null;
}

function Map() {
  const pins = useAppSelector(state => state.pins);
  const route = useAppSelector(state => state.polyline);

  return (
    <section className='map'>
      <MapContainer center={[59.847278, 30.295984]} scrollWheelZoom={true} className='map__container'>
        <ChangeView center={[59.847278, 30.295984]} markers={pins} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {pins.map(pin => <Marker position={pin} key={nanoid()}>
          <Popup>
            {pin}
          </Popup>
        </Marker>)}

        <Polyline pathOptions={colorOptions} positions={route} />
      </MapContainer>
    </section>
  );
}

export default Map;