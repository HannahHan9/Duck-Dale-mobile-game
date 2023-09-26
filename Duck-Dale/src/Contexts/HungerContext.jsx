import { createContext, useState } from "react";


export const HungerContext = createContext();
export const HungerProvider = ({ children }) => {

  const [hunger, setHunger] = useState(0);

  return (
    <HungerContext.Provider value={{ hunger, setHunger }}>
      {children}
    </HungerContext.Provider>
  );
};
