import { useContext, useEffect } from "react";
import { CoinContext } from "../Contexts/CoinContext";
import { Text } from "react-native";
import { UserContext } from "../Contexts/UserContext";
import { getUser } from "../Lib/Api";

function Coin() {
	const { coins } = useContext(CoinContext);
	// const { user } = useContext(UserContext);
	// useEffect(() => {
	// 	getUser(user).then(setCoins);
	// }, []);
	return <Text style={{ fontSize: 20 }}>{coins}🪙</Text>;
}

export default Coin;
