import {
	View,
	Image,
	TouchableOpacity,
	ImageBackground,
	StyleSheet,
	Button,
	Text,
	Alert,
} from "react-native";
import { patchUserImage } from "../Lib/Api";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Contexts/UserContext";
import { NewUserContext } from "../Contexts/NewUserContext";
import { CoinContext } from "../Contexts/CoinContext";
import * as ScreenOrientation from "expo-screen-orientation";

const CharacterCreation = () => {
	const { newUser, setNewUser } = useContext(NewUserContext);
	const { setUser } = useContext(UserContext);
	const { setCoins } = useContext(CoinContext);
	const [current, setCurrent] = useState(0);
	const [alertIndex, setAlertIndex] = useState(0);
	const images = [
		"https://drive.google.com/uc?export=view&id=1wvBu5oPWGNti8IGBUV8Ng8NEboUFJrVK",
		"https://drive.google.com/uc?export=view&id=1fz2QR-srrHSP1FWyLxxppwNqy_Vx_xoS",
		"https://drive.google.com/uc?export=view&id=1IMsW5297niJENXRg0uLmax4seWLEHNY8",
	];

	const alerts = [
		{
			message: "Hello and welcome to DuckDale!",
		},
		{
			message:
				"This is your homepage where you can access your Farm, Shop, Inventory and Trophies",
		},
		{
			message:
				"In your farm, you have the ability to plant your seeds and witness your crops grow from the germination stage to its final maturation stage. Here, you must select the seed you with to plant and select the fields available to you. Now steady, it will take time for your crops to harvest. Once this is complete, you will be able to add this to your inventory of food and saplings.",
		},
		{
			message:
				"You are provided with an initial 100 coins, giving you the ability to buy additional crops to grow, or buy food for your inventory from the market place.",
		},
		{
			message:
				"You can sell your existing food and crops to the market place to generate extra revenue and complete your weekly objectives!",
		},
		{
			message:
				"The inventory tab shows you your complete list of items your avatar owns. The more the merrier!",
		},
		{
			message:
				"The trophy’s cabinet shows the user which accomplishments they have achieved, and yet to achieve. All the best of luck trying to complete your missions!",
		},
		{
			message:
				"You can find these instructions in the How To Play tab in the Settings",
		},
		{
			message:
				"That’s all you’ll need to be able to play this game! Have fun farming away!",
		},

		// Add more alerts as needed
	];

	const showAlert = () => {
		const currentAlert = alerts[alertIndex];
		if (currentAlert) {
			Alert.alert("Tutorial", currentAlert.message, [
				{
					text: "OK",
					onPress: () => {
						// console.log(alertIndex);
						setAlertIndex((current) => {
							console.log(current);
							return current + 1;
						});
						showAlert(); // Chain the next alert
					},
				},
			]);
		}
	};
	const handleSelect = (image) => {
		patchUserImage(newUser, image)
			// .then(() => {
			// Alert.alert(
			// 	"Tutorial",
			// 	"That’s all you’ll need to be able to play this game! Have fun farming away!",
			// 	[
			// 		{
			// 			text: "OK",
			// 			onPress: () => {},
			// 		},
			// 	]
			// );
			// Alert.alert(
			// 	"Tutorial",
			// 	"You can find these instructions in the How To Play tab in the Settings",
			// 	[
			// 		{
			// 			text: "Next",
			// 			onPress: () => {},
			// 		},
			// 	]
			// );
			// Alert.alert(
			// 	"Tutorial",
			// 	"",
			// 	[
			// 		{
			// 			text: "Next",
			// 			onPress: () => {},
			// 		},
			// 	]
			// );
			// Alert.alert(
			// 	"Tutorial",
			// 	"The inventory tab shows you your complete list of items your avatar owns. The more the merrier! The trophy’s cabinet shows the user which accomplishments they have achieved, and yet to achieve. All the best of luck trying to complete your missions!",
			// 	[
			// 		{
			// 			text: "Next",
			// 			onPress: () => {},
			// 		},
			// 	]
			// );

			// Alert.alert(
			// 	"Tutorial",
			// 	"You are provided with an initial 100 coins, giving you the ability to buy additional crops to grow, or buy food for your inventory from the market place. You can sell your existing food and crops to the market place to generate extra revenue and complete your weekly objectives!",
			// 	[
			// 		{
			// 			text: "Next",
			// 			onPress: () => {},
			// 		},
			// 	]
			// );
			// Alert.alert(
			// 	"Tutorial",
			// 	"In your farm, you have the ability to plant your seeds and witness your crops grow from the germination stage to its final maturation stage. Here, you must select the seed you with to plant and select the fields available to you. Now steady, it will take time for your crops to harvest. Once this is complete, you will be able to add this to your inventory of food and saplings.",
			// 	[
			// 		{
			// 			text: "Next",
			// 			onPress: () => {},
			// 		},
			// 	]
			// );
			// Alert.alert(
			// 	"Tutorial",
			// 	`Hello and welcome to DuckDale! This is your homepage where you can access your Farm, Shop, Inventory and Trophies`,
			// 	[
			// 		{
			// 			text: "Next",
			// 			onPress: () => {},
			// 		},
			// 	]
			// );
			// })
			.then(() => {
				if (alertIndex < 1) {
					showAlert();
				}
			})
			.then(() => {
				if (alertIndex === 7) {
					setUser(newUser);
					setCoins(100);
					setNewUser("");
				}
			});
	};
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
			<ImageBackground
				source={require("../../assets/backgrounds/calm-anime-countryside.png")}
				resizeMode="cover"
				style={{
					flex: 1,
					justifyContent: "center",
				}}
			>
				<View
					style={{
						flex: 1,
						justifyContent: "center",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Image
						source={{
							uri: images[current],
						}}
						style={{ width: 200, height: 256, borderRadius: 4 }}
					/>
				</View>
				<View
					style={{
						flex: 0,
						justifyContent: "center",
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 10,
					}}
				>
					<View
						style={{
							marginRight: 10,
						}}
					>
						<TouchableOpacity
							style={{
								backgroundColor: "white",
								marginBottom: 20,
								height: 30,
								width: 80,
								justifyContent: "center",
								alignItems: "center",
								borderRadius: 4,
							}}
							onPress={() => {
								setCurrent((current) => current - 1);
								if (current <= 0) {
									setCurrent(2);
								}
							}}
						>
							<Text>Previous</Text>
						</TouchableOpacity>
					</View>
					<TouchableOpacity
						style={{
							backgroundColor: "white",
							marginBottom: 20,
							height: 30,
							width: 80,
							justifyContent: "center",
							alignItems: "center",
							borderRadius: 4,
						}}
						onPress={() => {
							setCurrent((current) => current + 1);
							if (current >= 2) {
								setCurrent(0);
							}
						}}
					>
						<Text>Next</Text>
					</TouchableOpacity>
				</View>
				<Button
					onPress={() => {
						handleSelect(images[current]);
					}}
					title="Confirm"
				/>
			</ImageBackground>
		</View>
	);
};

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
	},
	img: {
		width: 150,
		height: 150,
		borderRadius: 10,
	},
});

export default CharacterCreation;
