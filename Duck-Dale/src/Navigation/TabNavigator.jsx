import { createBottomTabNavigator, createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Home from "../Screens/Home";
import Buy from "../Components/Buy";
import Sell from "../Components/Sell";
import { StyleSheet } from "react-native";

const Tab = createMaterialTopTabNavigator();
export const ShopNavigator = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Buy" component={Buy} />
			<Tab.Screen name="Sell" component={Sell} />
		</Tab.Navigator>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#abc",
		alignItems: "center",
		justifyContent: "center",
	},
});
