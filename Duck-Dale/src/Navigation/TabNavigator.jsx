import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home";

const Tab = createBottomTabNavigator();
export const AppNavigator = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Home" component={Home} />
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
