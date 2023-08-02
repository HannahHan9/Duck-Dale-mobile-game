import { Switch, Text, View } from "react-native";
import Coin from "../Components/Coin";
import { ShopNavigator } from "../Navigation/TabNavigator";
import { NavigationContainer } from "@react-navigation/native";

function Shop() {
	return (
		<View style={{flex:1}}>
				<ShopNavigator />
			<View>
				<Coin />
				
			</View>
		
		</View>
		
	);
}

export default Shop;
