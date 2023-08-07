import { useNavigation } from "@react-navigation/native";
import * as ScreenOrientation from "expo-screen-orientation";
import { useContext, useEffect } from "react";
import {
	Button,
	Image,
	Pressable,
	StyleSheet,
	Text,
	TextInput,
	View,
} from "react-native";
import { UserContext } from "../Contexts/UserContext";
import { CoinContext } from "../Contexts/CoinContext";
import Coin from "../Components/Coin";

export default function Home() {
	const nav = useNavigation();
	const { coins } = useContext(CoinContext);
	const { user } = useContext(UserContext);
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
			<View style={[styles.container, { flexDirection: "row", gap: 250 }]}>
				<Text style={styles.text}>Welcome {user}</Text>
				<Text>[Avatar]</Text>
				<Coin />
			</View>

			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-evenly",
					alignItems: "center",
				}}
			>
				<Pressable onPress={() => nav.navigate("Farm")}>
					<Image
						source={require("../../assets/buttons/button-farm.png")}
						style={{ maxWidth: 150, maxHeight: 150 }}
					/>
					<Text style={{ textAlign: "center", fontSize: 20 }}>Farm</Text>
				</Pressable>
				<Pressable onPress={() => nav.navigate("Shop")}>
					<Image
						source={require("../../assets/buttons/button-shop.png")}
						style={{ maxWidth: 150, maxHeight: 150 }}
					/>
					<Text style={{ textAlign: "center", fontSize: 20 }}>Shop</Text>
				</Pressable>
				<Pressable onPress={() => nav.navigate("Inventory")}>
					<Image
						source={require("../../assets/buttons/button-shop.png")}
						style={{ maxWidth: 150, maxHeight: 150 }}
					/>
					<Text style={{ textAlign: "center", fontSize: 20 }}>Inventory</Text>
				</Pressable>
				{/* <Button title="Farm" onPress={() => nav.navigate("Farm")}></Button> */}
				{/* <Button title="Shop" onPress={() => nav.navigate("Shop")}></Button> */}
				{/* <Button
					title="Inventory"
					onPress={() => nav.navigate("Inventory")}
				></Button> */}
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
	text: {
		fontSize: 20,
	},
});
