import { useNavigation } from "@react-navigation/native";
import * as ScreenOrientation from "expo-screen-orientation";
import { useEffect } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Home() {
	const nav = useNavigation();
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
			<Button title="Farm" onPress={() => nav.navigate("Farm")}></Button>
			<Button title="Shop" onPress={() => nav.navigate("Shop")}></Button>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
