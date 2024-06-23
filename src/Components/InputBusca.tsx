
type Props = {};

function InputBusca({}: Props) {
  return (
    <div className="z-20 absolute top-16 mt-8 w-full flex justify-center">
      <input
        className="md:w-2/6 w-4/6 px-2 py-3 rounded-l-lg"
        type="text"
        placeholder="Search fon any IP address or domain"
      />
      <button className="px-4 py-3 bg-cinza-escuro rounded-r-lg">
        <img src="/icon-arrow.svg" alt="arrow icon" />
      </button>
    </div>
  );
}

export default InputBusca;
