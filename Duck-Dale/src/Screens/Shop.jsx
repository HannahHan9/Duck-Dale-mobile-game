import { Switch, Text, View } from "react-native";
import Coin from "../Components/Coin";
import { ShopNavigator } from "../Navigation/TabNavigator";
import { NavigationContainer } from "@react-navigation/native";

function Shop() {
	return (
		// <NavigationContainer independent={true}>
		<View style={{ flexDirection: "row" }}>
			<View style={{ flex: 1 }}>
				<Coin />
				<Text>Shop</Text>
			</View>
			<ShopNavigator />
		</View>
		// </NavigationContainer>
	);
}

export default Shop;
