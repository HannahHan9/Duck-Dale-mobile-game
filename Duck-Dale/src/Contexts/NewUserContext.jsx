import { createContext, useState } from "react";

export const NewUserContext = createContext();
export const NewUserProvider = ({ children }) => {
    const [newUser, setNewUser] = useState(null);

    return (
        <NewUserContext.Provider value={{ newUser, setNewUser }}>
            {children}
        </NewUserContext.Provider>
    );
};
