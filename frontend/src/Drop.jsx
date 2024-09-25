import { useState } from "react";

export function Drop() {
  const [inputValue1, setInputValue1] = useState(0);
  const [selected1, setSelected1] = useState(""); // State for the first dropdown
  const [selected2, setSelected2] = useState(""); // State for the second dropdown
  const [displayValue, setDisplayValue] = useState("");

  const handleFirstSelect = (e) => {
    setSelected1(e.target.value);
    // Dummy logic for displayValue (you can replace this with real conversion logic)
  };

  const handleSecondSelect = (e) => {
    setSelected2(e.target.value);
    // You can add additional logic for the second select here if needed
  };

  return (
    <div>
      <div>Welcome To Currency Converter</div>

      {/* First input field to enter the value */}
      <input
        type="text"
        placeholder="Enter Value"
        onChange={(e) => {
          setInputValue1(e.target.value);
        }}
      />

      {/* First dropdown */}
      <select id="options1" value={selected1} onChange={handleFirstSelect}>
        <option value="">Select...</option>
        <option value="IndianRupee1">Indian Rupee</option>
        <option value="AmericanDollar1">American Dollar</option>
        <option value="Euro1">Euro</option>
        <option value="PoundSterling1">Pound Sterling</option>
        <option value="Rand1">Rand</option>
      </select>

      <br />
      <br />

      {/* Second input field that displays result but is disabled */}
      <input type="text" value={displayValue} disabled />

      {/* Second dropdown */}
      <select id="options2" value={selected2} onChange={handleSecondSelect}>
        <option value="">Select...</option>
        <option value="IndianRupee2">Indian Rupee</option>
        <option value="AmericanDollar2">American Dollar</option>
        <option value="Euro2">Euro</option>
        <option value="PoundSterling2">Pound Sterling</option>
        <option value="Rand2">Rand</option>
      </select>

      {/* Display selected currency information */}
      {selected1 === "IndianRupee1" && <p>You Selected Indian Rupee</p>}
      {selected1 === "AmericanDollar1" && <p>You Selected American Dollar</p>}
      {selected1 === "Euro1" && <p>You Selected Euro</p>}
      {selected1 === "PoundSterling1" && <p>You Selected Pound Sterling</p>}
      {selected1 === "Rand1" && <p>You Selected Rand</p>}

      {console.log(inputValue1)}
    </div>
  );
}
