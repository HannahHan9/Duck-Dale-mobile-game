import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { LogInRegister} from '../Screens/LogInRegister'

const Tab = createBottomTabNavigator();
export const AppNavigator = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen name="LogInAndRegister" component={LogInRegister} />
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