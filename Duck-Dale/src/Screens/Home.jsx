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
import { getUser, patchUserHunger } from "../Lib/Api";

import { SeasonContext } from "../Contexts/SeasonContext";
import Hunger from "../Components/Hunger";
import { HungerContext } from "../Contexts/HungerContext";
import { hungerTimer } from "./LogInRegister";

export default function Home() {
	const nav = useNavigation();
	const { user } = useContext(UserContext);
	const [avatar, setAvatar] = useState("../../assets/buttons/button-farm.png");

	const { season, setSeason } = useContext(SeasonContext);
	const { hunger, setHunger } = useContext(HungerContext);

	if (season >= 120) {
		setSeason(1);
	}

	if (hunger <= 0) {
		setHunger(0);
		clearInterval(hungerTimer);
	}

	useEffect(() => {
		lockOrientation();
		getUser(user).then((user) => {
			setAvatar(user.character_img);
		});
		if (!season) {
			setInterval(() => {
				setSeason((curr) => curr + 10);
			}, 10000);
		}
		if (hunger <= 0) {
			setHunger(0);
		}
	}, []);

	useEffect(() => {
		patchUserHunger(user, hunger);
	}, [hunger]);

	const lockOrientation = async () => {
		await ScreenOrientation.lockAsync(
			ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
		);
	};
	return (
		<View style={styles.container}>
			<ImageBackground
				source={
					season >= 30 && season < 60
						? require("../../assets/backgrounds/season-summer.png")
						: season >= 60 && season < 90
						? require("../../assets/backgrounds/season-autumn.png")
						: season >= 90 && season < 120
						? require("../../assets/backgrounds/season-winter.png")
						: require("../../assets/backgrounds/season-spring.png")
				}
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
							{
								// justifyContent: "center",
								flexDirection: "row",
								backgroundColor: "#ffffff55",
							},
						]}
					>
						<Text
							style={[
								styles.text,
								{ fontSize: 30, textAlign: "left", flex: 0.8 },
							]}
						>
							Welcome {user}
						</Text>
						<View style={{ flex: 0.3, flexDirection: "row" }}>
							<Hunger />
							<Coin />
							<Pressable
								onPress={() => {
									nav.navigate("Settings");
								}}
							>
								{/* <Text

									style={{
										fontWeight: "bold",
										fontSize: 30,
										textAlign: "right",
										marginHorizontal: 10,
									}}
								>
									⚙️
								</Text> */}

								<Image
									source={require("../../assets/buttons/gear(1).png")}
									style={{ height: 30, width: 30, marginHorizontal: 10 }}
								/>
							</Pressable>
						</View>
					</View>

					<View
						style={[
							styles.container,
							{ flexDirection: "row", gap: 250, backgroundColor: "#ffffff55" },
						]}
					>
						<Text style={styles.text}>
							⭐Today's challenge: Sell items worth 500 coins⭐
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
								source={require("../../assets/buttons/111.png")}
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
