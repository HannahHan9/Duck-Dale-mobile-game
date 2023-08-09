import { createContext, useState } from "react";
export const SoundContext = createContext();
export const SoundProvider = ({ children }) => {
  const [sound, setSound] = useState(null);
  return (
    <SoundContext.Provider value={{ sound, setSound }}>
      {children}
    </SoundContext.Provider>
  );
};
