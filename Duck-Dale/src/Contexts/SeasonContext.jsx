import { createContext, useState } from "react";

export const SeasonContext = createContext();
export const SeasonProvider = ({ children }) => {
  const [season, setSeason] = useState(0);
  
  return (
    <SeasonContext.Provider value={{ season, setSeason }}>
      {children}
    </SeasonContext.Provider>
  );
};
