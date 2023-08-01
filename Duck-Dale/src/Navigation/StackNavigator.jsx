import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import LogInRegister from "../Screens/LogInRegister";
import Home from "../Screens/Home";
import Farm from "../Screens/Farm";
import Shop from "../Screens/Shop";
import { useContext, useState } from "react";
import { UserContext, UserProvider } from "../Contexts/UserContext";

const Stack = createStackNavigator();

export const AuthNavigator = () => {
	const { user } = useContext(UserContext);

	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			{user ? (
				<Stack.Screen name="HomeNavigator" component={HomeNavigator} />
			) : (
				<Stack.Screen name="LogInAndRegister" component={LogInRegister} />
			)}

			{/* <Stack.Screen name="CharacterCreation" component={LogInRegister} /> */}
		</Stack.Navigator>
	);
};

export const HomeNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="Farm" component={Farm} />
			<Stack.Screen name="Shop" component={Shop} />
		</Stack.Navigator>
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
