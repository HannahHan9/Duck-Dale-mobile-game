import { createContext, useState } from "react";

export const CoinContext = createContext();
export const CoinProvider = ({ children }) => {
	const [coins, setCoins] = useState(null);

	return (
		<CoinContext.Provider value={{ coins, setCoins }}>
			{children}
		</CoinContext.Provider>
	);
};
