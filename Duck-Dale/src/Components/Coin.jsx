import { useContext } from "react";
import { CoinContext } from "../Contexts/CoinContext";
import { Text } from "react-native";

function Coin() {
	const { coins } = useContext(CoinContext);
	return <Text>{coins}🪙</Text>;
}

export default Coin;
