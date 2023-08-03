import { Switch, Text, View } from "react-native";
import Coin from "../Components/Coin";
import { ShopNavigator } from "../Navigation/TabNavigator";

function Shop() {
	return (
		<View
			style={{
				flex: 1,
				flexDirection: "row",
				flexWrap: "wrap",
				paddingHorizontal: 20,
			}}
		>
			<ShopNavigator />
			<View style={{ flex: 1, flexDirection: "row-reverse" }}>
				<Coin />
			</View>
		</View>
	);
}

export default Shop;
