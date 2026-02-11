import PokeballIcon from "../PokeballIcon";

export function Logo() {
  return (
    <div className="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center shadow-lg shadow-red-200">
      <PokeballIcon className="w-7 h-7 text-white" />
    </div>
  );
};