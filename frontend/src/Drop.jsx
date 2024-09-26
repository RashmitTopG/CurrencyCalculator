import { useState, useContext, useEffect } from "react";
import { CurrencyContext } from "./context";
import { Swap } from "./Swap";

export function Drop() {
  const { selected1, setSelected1, selected2, setSelected2 } =
    useContext(CurrencyContext);
  const [inputValue1, setInputValue1] = useState("");
  const [displayValue, setDisplayValue] = useState("");

  const handleFirstSelect = (e) => {
    setSelected1(e.target.value);
  };

  const handleSecondSelect = (e) => {
    setSelected2(e.target.value);
  };

  useEffect(() => {
    const disVal = () => {
      const exchangeRates = {
        "Indian Rupee": {
          "American Dollar": 1 / 83,
          Euro: 1 / 88.5,
          "Pound Sterling": 1 / 102,
          Rand: 1 / 4.4,
        },
        "American Dollar": {
          "Indian Rupee": 83,
          Euro: 0.93,
          "Pound Sterling": 0.8,
          Rand: 19.1,
        },
        Euro: {
          "Indian Rupee": 88.5,
          "American Dollar": 1.07,
          "Pound Sterling": 0.86,
          Rand: 20.5,
        },
        "Pound Sterling": {
          "Indian Rupee": 102,
          "American Dollar": 1.25,
          Euro: 1.17,
          Rand: 23.8,
        },
        Rand: {
          "Indian Rupee": 4.4,
          "American Dollar": 1 / 19.1,
          Euro: 1 / 20.5,
          "Pound Sterling": 1 / 23.8,
        },
      };

      if (selected1 && selected2 && inputValue1) {
        const parsedInput = parseFloat(inputValue1);
        if (
          !isNaN(parsedInput) &&
          exchangeRates[selected1] &&
          exchangeRates[selected1][selected2]
        ) {
          const value = parsedInput * exchangeRates[selected1][selected2];
          setDisplayValue(value.toFixed(4));
        } else {
          setDisplayValue("Invalid input");
        }
      }
    };

    disVal();
  }, [inputValue1, selected1, selected2]);

  return (
    <div
      className="flex items-center justify-center"
      style={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="text-center text-2xl font-bold mb-4">
          Welcome To Currency Converter
        </div>
        {selected1 && selected2 && (
          <div className="text-center text-lg mb-4">
            {inputValue1} {selected1} equals {displayValue} {selected2}
          </div>
        )}
        <div className="mb-4">
          <input
            type="text"
            className="w-full p-2 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter Value"
            onChange={(e) => {
              setInputValue1(e.target.value);
            }}
          />
        </div>
        <div className="mb-4">
          <select
            id="options1"
            value={selected1}
            className="w-full p-2 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleFirstSelect}
          >
            <option value="">Select Currency</option>
            <option value="Indian Rupee">Indian Rupee</option>
            <option value="American Dollar">American Dollar</option>
            <option value="Euro">Euro</option>
            <option value="Pound Sterling">Pound Sterling</option>
            <option value="Rand">Rand</option>
          </select>
        </div>
        <div className="mb-4">
          <input
            type="text"
            value={displayValue}
            disabled
            className="w-full p-2 border rounded-lg bg-gray-100"
          />
        </div>
        <div className="mb-4">
          <select
            id="options2"
            value={selected2}
            className="w-full p-2 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleSecondSelect}
          >
            <option value="">Select Currency</option>
            <option value="Indian Rupee">Indian Rupee</option>
            <option value="American Dollar">American Dollar</option>
            <option value="Euro">Euro</option>
            <option value="Pound Sterling">Pound Sterling</option>
            <option value="Rand">Rand</option>
          </select>
        </div>
        <div className="flex justify-center">
          <Swap />
        </div>
      </div>
    </div>
  );
}
