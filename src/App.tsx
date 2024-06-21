function App() {
  return (
    <>
      <h1 className="text-yellow-600 font-padrao">IP Address Tracker</h1>
      <input className="bg-cinza-escuro text-white" type="text" placeholder="Insira seu IP" />
      <div className="z-20 p-8 bg-cinza-claro lg:w-3/4">
        <ul className="flex gap-8">
          <li className="bg-amber-200">
            <label htmlFor="">Teste</label>
            <p>Info</p>
          </li>
          <li className="bg-amber-200">
            <label htmlFor="">Teste</label>
            <p>Info</p>
          </li>
          <li className="bg-amber-200">
            <label htmlFor="">Teste</label>
            <p>Info</p>
          </li>
          <li className="bg-amber-200">
            <label htmlFor="">Teste</label>
            <p>Info</p>
          </li>
        </ul>
      </div>
      <div className="z-0 flex items-center place-content-between h-96 w-full bg-amber-500">
        <p className="text-center w-full">MAP</p>
      </div>
    </>
  );
}

export default App;
