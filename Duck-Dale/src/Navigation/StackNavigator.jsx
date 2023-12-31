import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import LogInRegister from "../Screens/LogInRegister";
import Home from "../Screens/Home";
import Farm from "../Screens/Farm";
import Shop from "../Screens/Shop";
import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import CharacterCreation from "../Screens/CharacterCreation";
import { NewUserContext } from "../Contexts/NewUserContext";
import Inventory from "../Screens/Inventory";
import Trophies from "../Screens/Trophies";
import Settings from "../Screens/Settings";
import UpdateProfile from "../Screens/UpdateProfile";
import HowToPlay from "../Screens/HowToPlay";

const Stack = createStackNavigator();

export const AuthNavigator = () => {
	const { user } = useContext(UserContext);
	const { newUser } = useContext(NewUserContext);

	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			{!user && !newUser ? (
				<Stack.Screen name="LogInRegister" component={LogInRegister} />
			) : null}

			{user ? (
				<Stack.Screen name="HomeNavigator" component={HomeNavigator} />
			) : null}

			{newUser ? (
				<Stack.Screen name="CharacterCreation" component={CharacterCreation} />
			) : null}
		</Stack.Navigator>
	);
};

export const HomeNavigator = () => {
	return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Farm" component={Farm} />
      <Stack.Screen name="Shop" component={Shop} />
      <Stack.Screen name="Inventory" component={Inventory} />
      <Stack.Screen name="Trophies" component={Trophies} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
      <Stack.Screen name="HowToPlay" component={HowToPlay} />
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
