import InputBusca from './Components/InputBusca';
import Mapa from './Components/Mapa';
import PainelInfo from './Components/PainelInfo';

function App() {
  return (
    <>
      <picture className="relative z-0">
        <source media="(min-width: 640px)" srcSet="/pattern-bg-desktop.png" />
        <img className="bg-repeat w-full max-h-72" src="/pattern-bg-mobile.png" alt="background azul" />
      </picture>
      <h1 className="text-white text-2xl font-padrao text-center w-full absolute top-8 z-20">IP Address Tracker</h1>
      <InputBusca />
      <PainelInfo />
      <Mapa />
    </>
  );
}

export default App;
