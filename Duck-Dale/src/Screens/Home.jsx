import { useNavigation } from "@react-navigation/native";
import * as ScreenOrientation from "expo-screen-orientation";
import { useContext, useEffect, useState } from "react";
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
import Coin from "../Components/Coin";
import { getUser } from "../Lib/Api";

export default function Home() {
	const nav = useNavigation();
	const { user } = useContext(UserContext);
	const [avatar, setAvatar] = useState("../../assets/buttons/button-farm.png");
	useEffect(() => {
		lockOrientation();
		getUser(user).then((user) => {
			setAvatar(user.character_img);
		});
	}, []);
	const lockOrientation = async () => {
		await ScreenOrientation.lockAsync(
			ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
		);
	};
	console.log(avatar);
	return (
		<View style={styles.container}>
			<View style={[styles.container, { flexDirection: "row", gap: 250 }]}>
				<Text style={styles.text}>Welcome {user}</Text>
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
					<Image source={{ uri: avatar }} style={{ width: 150, height: 150 }} />
					<Text style={{ textAlign: "center", fontSize: 20 }}>Inventory</Text>
				</Pressable>
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
	img: {
		borderWidth: 2,
	},
});
