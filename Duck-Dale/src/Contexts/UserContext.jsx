import { createContext, useState } from "react";

export const UserContext = createContext({ hasUser: false, setUser: () => {} });
export const UserProvider = ({ children }) => {
	const [hasUser, setHasUser] = useState(false);

	return (
		<UserContext.Provider value={{ hasUser, setHasUser }}>
			{children}
		</UserContext.Provider>
	);
};
