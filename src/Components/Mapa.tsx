import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const myIcon = L.icon({
  iconUrl: '/icon-location.svg',
});

type Props = {
  lat: number;
  long: number;
};

function Mapa({ lat, long }: Props) {
  return (
    <MapContainer className="h-[calc(100vh_-_150px)] z-0" center={[lat, long]} zoom={12} scrollWheelZoom={true} key={lat+long}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        key={lat+long}
      />
      <Marker position={[lat, long]} icon={myIcon}>
        <Popup>Here!</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Mapa;
