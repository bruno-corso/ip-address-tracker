import { useState } from 'react';
import InputBusca from './Components/InputBusca';
import Mapa from './Components/Mapa';
import PainelInfo from './Components/PainelInfo';
import axios from 'axios';
import { Coordenadas, CoordenadasState, PainelData, PainelDataState } from './types/types';

function App() {

  const [dominio, setDominio] = useState('');
  const [coordenadas, setCoordenadas]: CoordenadasState = useState<Coordenadas>({
    lat: -24.0058,
    long: -46.4132
  }
  );

  const [painelValues, setPainelValues]: PainelDataState = useState<PainelData>({
    ipaddress: '-',
    local: '-',
    timezone: '-',
    isp: '-'
  });


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDominio(event.target.value);
  };

  const handleButtonClick = async () => {
    if (/^[0-9]/.test(dominio)) {
      try {
        const response = await axios.get(
          `https://geo.ipify.org/api/v2/country,city?apiKey=at_N26b8PB4KYE7W8280AIbNKfmET6Bd&ipAddress=${dominio}`
        );
        const vLatLong: Coordenadas = {
          lat: response.data.location.lat,
          long: response.data.location.lng
        }
        setCoordenadas(vLatLong);

        const values: PainelData = {
          ipaddress: response.data.ip,
          local: response.data.location.city + ', ' + response.data.location.region + ' - ' + response.data.location.country,
          timezone: response.data.location.timezone,
          isp: response.data.isp
        }
        setPainelValues(values)

      } catch (error) {
        console.log('Error fetching IP geolocation:', error);
      }
    } else {
      try {
        const response = await axios.get(
          `https://geo.ipify.org/api/v2/country,city?apiKey=at_N26b8PB4KYE7W8280AIbNKfmET6Bd&domain=${dominio}`
        );
        const vLatLong: Coordenadas = {
          lat: response.data.location.lat,
          long: response.data.location.lng
        }
        setCoordenadas(vLatLong);

        const values: PainelData = {
          ipaddress: response.data.ip,
          local: response.data.location.city + ', ' + response.data.location.region + ' - ' + response.data.location.country,
          timezone: response.data.location.timezone,
          isp: response.data.isp
        }
        setPainelValues(values)
        
      } catch (error) {
        console.log('Error fetching IP geolocation:', error);
      }
    }
  };

  return (
    <>
      <picture className="relative z-0">
        <source media="(min-width: 640px)" srcSet="/pattern-bg-desktop.png" />
        <img className="bg-repeat w-full max-h-72" src="/pattern-bg-mobile.png" alt="background azul" />
      </picture>
      <h1 className="text-white text-2xl font-padrao text-center w-full absolute top-8 z-20">IP Address Tracker</h1>
      <InputBusca valorDominio={dominio} mudarDominio={handleInputChange} clique={handleButtonClick} />
      <PainelInfo values={painelValues} />
      <Mapa coordenadas={coordenadas} />
    </>
  );
}

export default App;
