import { Switch, Text, View } from "react-native";
import Coin from "../Components/Coin";
import { ShopNavigator } from "../Navigation/TabNavigator";
import { NavigationContainer } from "@react-navigation/native";

function Shop() {
	return (
		<View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
			<ShopNavigator />
			<View style={{ flex: 1 }}>
				<Coin />
				<Text>Shop</Text>
			</View>
		</View>
	);
}

export default Shop;
