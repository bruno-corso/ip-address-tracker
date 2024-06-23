type Props = {
  ipaddress: string
  local: string
  timezone: string
  isp: string
};

function PainelInfo({ipaddress,isp,local,timezone}: Props) {
  return (
    <div className="z-10 px-4 py-8 bg-white rounded-lg sm:w-3/4 w-5/6 absolute top-48 inset-x-0 mx-auto inline-block">
      <ul className="flex flex-col md:flex-row justify-around">
        <li className="md:w-1/5 md:border-e-2 border-r-slate-200">
          <label className="uppercase text-sm font-bold text-cinza-claro tracking-wider">Ip Address</label>
          <p className="font-bold text-2xl break-words">{ipaddress}</p>
        </li>
        <li className="md:w-1/5 md:border-e-2 border-r-slate-200">
          <label className="uppercase text-sm font-bold text-cinza-claro tracking-wider">Location</label>
          <p className="font-bold text-2xl">{local}</p>
        </li>
        <li className="md:w-1/5 md:border-e-2 border-r-slate-200">
          <label className="uppercase text-sm font-bold text-cinza-claro tracking-wider">Timezone</label>
          <p className="font-bold text-2xl">{timezone}</p>
        </li>
        <li className="md:w-1/5 ">
          <label className="uppercase text-sm font-bold text-cinza-claro tracking-wider">ISP</label>
          <p className="font-bold text-2xl">{isp}</p>
        </li>
      </ul>
    </div>
  );
}

export default PainelInfo;
