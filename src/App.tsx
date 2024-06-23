import { useState } from 'react';
import InputBusca from './Components/InputBusca';
import Mapa from './Components/Mapa';
import PainelInfo from './Components/PainelInfo';
import axios from 'axios';

function App() {
  const [dominio, setDominio] = useState('');
  const [lat, setLat] = useState(-24.0058);
  const [long, setLong] = useState(-46.4132);
  const [ipaddress, setIpaddress] = useState('-');
  const [local, setLocal] = useState('-');
  const [timezone, setTimezone] = useState('-');
  const [isp, setIsp] = useState('-');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDominio(event.target.value);
  };

  const handleButtonClick = async () => {
    if (/^[0-9]/.test(dominio)) {
      try {
        const response = await axios.get(
          `https://geo.ipify.org/api/v2/country,city?apiKey=at_N26b8PB4KYE7W8280AIbNKfmET6Bd&ipAddress=${dominio}`
        );
        const vLat = response.data.location.lat;
        const vLong = response.data.location.lng;
        const vIp = response.data.ip;
        setLat(vLat);
        setLong(vLong);
        setIpaddress(vIp);
        setLocal(
          response.data.location.city + ', ' + response.data.location.region + ' - ' + response.data.location.country
        );
        setTimezone(response.data.location.timezone);
        setIsp(response.data.isp);
      } catch (error) {
        console.log('Error fetching IP geolocation:', error);
      }
    } else {
      try {
        const response = await axios.get(
          `https://geo.ipify.org/api/v2/country,city?apiKey=at_N26b8PB4KYE7W8280AIbNKfmET6Bd&domain=${dominio}`
        );
        const vLat = response.data.location.lat;
        const vLong = response.data.location.lng;
        const vIp = response.data.ip;
        setLat(vLat);
        setLong(vLong);
        setIpaddress(vIp);
        setLocal(
          response.data.location.city + ', ' + response.data.location.region + ' - ' + response.data.location.country
        );
        setTimezone(response.data.location.timezone);
        setIsp(response.data.isp);
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
      <PainelInfo ipaddress={ipaddress} isp={isp} local={local} timezone={timezone} />
      <Mapa lat={lat} long={long} />
    </>
  );
}

export default App;
