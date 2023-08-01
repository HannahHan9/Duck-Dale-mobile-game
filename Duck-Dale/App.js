import { StyleSheet } from "react-native";
import { AuthNavigator } from "./src/Navigation/StackNavigator";
import { UserContext, UserProvider } from "./src/Contexts/UserContext";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";

export default function App() {
	const [user, setUser] = useState(false);
	return (
		<UserContext.Provider value={{ user, setUser }}>
			<NavigationContainer>
				<AuthNavigator style={styles.container} />
			</NavigationContainer>
		</UserContext.Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
