import { createContext, useState } from "react";
export const MusicPlayContext = createContext();
export const MusicPlayProvider = ({ children }) => {
  const [playStatus, setPlayStatus] = useState(false);
  return (
    <MusicPlayContext.Provider value={{ playStatus, setPlayStatus }}>
      {children}
    </MusicPlayContext.Provider>
  );
};
