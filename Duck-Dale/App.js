import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LogInRegister from "./src/Screens/LogInRegister";

export default function App() {
	return <LogInRegister style={styles.container} />;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
