import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Coordenadas } from '../types/types';

const myIcon = L.icon({
  iconUrl: '/icon-location.svg',
});

type Props = {
  coordenadas: Coordenadas
};

function Mapa({ coordenadas }: Props) {
  return (
    <MapContainer className="h-[calc(100vh_-_150px)] z-0" center={[coordenadas.lat, coordenadas.long]} zoom={12} scrollWheelZoom={true} key={coordenadas.lat+coordenadas.long}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        key={coordenadas.lat+coordenadas.long}
      />
      <Marker position={[coordenadas.lat, coordenadas.long]} icon={myIcon}>
        <Popup>Here!</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Mapa;
