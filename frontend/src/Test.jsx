import { useState } from "react";

export function Test() {
  const [selected, setSelected] = useState();

  const handle = (e) => {
    setSelected(e.target.value);
  };
  return (
    <div>
      <div>This is a Random Thing</div>
      <label htmlFor="options">Choose an option:</label>
      <select id="options" value={selected} onChange={handle}>
        <option value="">Select...</option> {/* Default placeholder */}
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>

      {selected == "option1" && <p>You selected option 1</p>}
      {selected == "option2" && <p>You selected option 2</p>}
      {selected == "option3" && <p>You selected option 3</p>}
    </div>
  );
}
