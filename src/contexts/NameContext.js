import { createContext, useContext, useState } from "react";

const NameContext = createContext();

// Provider
export function NameProvider({ children }) {
  const [name, setName] = useState("Bread.One");
  return (
    <NameContext.Provider value={{ name, setName }}>
      {children}
    </NameContext.Provider>
  );
}

//커스텀 훅
export function useName() {
  return useContext(NameContext);
}
