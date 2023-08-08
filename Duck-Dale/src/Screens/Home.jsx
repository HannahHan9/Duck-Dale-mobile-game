import { useNavigation } from "@react-navigation/native";
import * as ScreenOrientation from "expo-screen-orientation";
import { useContext, useEffect, useState } from "react";
import {
	Image,
	Pressable,
	StyleSheet,
	Text,
	View,
	ImageBackground,
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
	return (
		<View style={styles.container}>
			<ImageBackground
				source={require("../../assets/backgrounds/calm-anime-countryside.png")}
				resizeMode="cover"
				style={{
					flex: 1,
					justifyContent: "center",
				}}
			>
				<View style={{ flex: 1 }}>
					<View
						style={[
							styles.container,
							{ flexDirection: "row", gap: 250, backgroundColor: "#ffffffdd" },
						]}
					>
						<Text style={styles.text}>Welcome {user}</Text>
						<Coin />
					</View>

					<View
						style={[
							styles.container,
							{ flexDirection: "row", gap: 250, backgroundColor: "#ffffffdd" },
						]}
					>
						<Text style={styles.text}>
							⭐This week's challenge: Sell items worth 500 coins⭐
						</Text>
					</View>

					<View
						style={{
							flex: 5,
							flexDirection: "row",
							justifyContent: "space-evenly",
							alignItems: "center",
						}}
					>
						<Pressable
							onPress={() => nav.navigate("Farm")}
							style={styles.pressable}
						>
							<Image
								source={require("../../assets/buttons/button-farm.png")}
								style={styles.img}
							/>
							<Text style={styles.text}>Farm</Text>
						</Pressable>
						<Pressable
							onPress={() => nav.navigate("Shop")}
							style={styles.pressable}
						>
							<Image
								source={require("../../assets/buttons/button-shop.png")}
								style={styles.img}
							/>
							<Text style={styles.text}>Shop</Text>
						</Pressable>
						<Pressable
							onPress={() => nav.navigate("Inventory")}
							style={styles.pressable}
						>
							<Image source={{ uri: avatar }} style={styles.img} />
							<Text style={styles.text}>Inventory</Text>
						</Pressable>
						<Pressable
							onPress={() => nav.navigate("Trophies")}
							style={styles.pressable}
						>
							<Image
								source={require("../../assets/buttons/button-trophies.png")}
								style={styles.img}
							/>
							<Text style={styles.text}>Trophies</Text>
						</Pressable>
					</View>
				</View>
			</ImageBackground>
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
		textAlign: "center",
		fontSize: 20,
		backgroundColor: "transparent",
	},
	img: {
		width: 150,
		height: 150,
		borderRadius: 10,
	},
	pressable: {
		borderColor: "white",
		borderWidth: 3,
		backgroundColor: "white",
		borderRadius: 10,
	},
});
