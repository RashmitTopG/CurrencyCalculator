import { createContext, useState } from "react";

export const CurrencyContext = createContext();

export function CurrencyProvider({ children }) {
  const [selected1, setSelected1] = useState("");
  const [selected2, setSelected2] = useState("");

  return (
    <CurrencyContext.Provider
      value={{ selected1, setSelected1, selected2, setSelected2 }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}
