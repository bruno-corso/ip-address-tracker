import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import '../leaflet.css';

type Props = {};

function Mapa({}: Props) {
  return (
    <div>
      <MapContainer className="h-[calc(100vh_-_280px)] z-0" center={[51.505, -0.09]} zoom={11} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Mapa;
