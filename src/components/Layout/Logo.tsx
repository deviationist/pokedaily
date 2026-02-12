import PokeballIcon from "../PokeballIcon";

export function Logo() {
  return (
    <div className="w-10 h-10 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-red-500 rounded-xl flex items-center justify-center shadow-lg shadow-red-200">
      <PokeballIcon className="w-7 h-7 md:w-5 md:h-5 lg:w-7 lg:h-7 text-white" />
    </div>
  );
};