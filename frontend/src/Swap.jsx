import { useContext } from "react";
import { CurrencyContext } from "./context";

export function Swap() {
  const { selected1, setSelected1, selected2, setSelected2 } =
    useContext(CurrencyContext);

  const handleSwap = () => {
    const temp = selected1;
    setSelected1(selected2);
    setSelected2(temp);
  };

  return (
    <button
      onClick={handleSwap}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4"
    >
      Swap
    </button>
  );
}
