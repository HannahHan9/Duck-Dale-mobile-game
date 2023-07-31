import * as ScreenOrientation from "expo-screen-orientation";
import { useEffect } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Home() {
	useEffect(() => {
		lockOrientation();
	}, []);
	const lockOrientation = async () => {
		await ScreenOrientation.lockAsync(
			ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
		);
	};
	return (
		<View style={styles.container}>
			<Text>Welcome message</Text>
			<Text>Avatar</Text>
			<Text>Monay</Text>
			{/* <HomeNavigator /> */}
		</View>
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
