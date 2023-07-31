import React, { createContext, useContext, useState } from "react";

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
    const [hasUser, setHasUser] = useState(false);

    return (
        <UserContext.Provider
            value={{ hasUser, setHasUser }}
        >{children}</UserContext.Provider>
    );
};
