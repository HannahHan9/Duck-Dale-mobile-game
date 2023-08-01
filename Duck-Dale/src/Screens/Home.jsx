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
		<View style={[styles.container, {flexDirection: "row", gap: 250}]}>
			<Text style={{textAlign: 'left'}}>Welcome message</Text>
			<Text>Avatar</Text>
			<Text>Monay</Text>
		</View>

		<View style={{flexDirection: "row", justifyContent: "center"}}>
			<Button title="Farm" onPress={() => nav.navigate("Farm")}></Button>
			<Button title="Shop" onPress={() => nav.navigate("Shop")}></Button>
		</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "centre",
		justifyContent: "center",
	},
});
