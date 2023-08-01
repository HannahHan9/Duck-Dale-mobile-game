import { StyleSheet } from "react-native";
import { AuthNavigator } from "./src/Navigation/StackNavigator";
import { UserContext, UserProvider } from "./src/Contexts/UserContext";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import { CoinProvider } from "./src/Contexts/CoinContext";

export default function App() {
	return (
		<UserProvider>
			<CoinProvider>
				<NavigationContainer>
					<AuthNavigator style={styles.container} />
				</NavigationContainer>
			</CoinProvider>
		</UserProvider>
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
