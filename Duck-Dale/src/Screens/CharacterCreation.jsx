import { View, Image, Pressable, ImageBackground } from "react-native";
import { patchUserImage } from "../Lib/Api";
import { Children, useContext, useEffect } from "react";
import { UserContext } from "../Contexts/UserContext";
import { NewUserContext } from "../Contexts/NewUserContext";
import { CoinContext } from "../Contexts/CoinContext";
import * as ScreenOrientation from "expo-screen-orientation";

const CharacterCreation = () => {
	const { newUser, setNewUser } = useContext(NewUserContext);
	const { setUser } = useContext(UserContext);
	const { setCoins } = useContext(CoinContext);
	const image1 =
		"https://drive.google.com/uc?export=view&id=1wvBu5oPWGNti8IGBUV8Ng8NEboUFJrVK";
	const image2 =
		"https://drive.google.com/uc?export=view&id=1fz2QR-srrHSP1FWyLxxppwNqy_Vx_xoS";
	const image3 =
		"https://drive.google.com/uc?export=view&id=1IMsW5297niJENXRg0uLmax4seWLEHNY8";
	const handleSelect = (image) => {
		patchUserImage(newUser, image).then(() => {
			setUser(newUser);
			setCoins(100);
			setNewUser("");
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
		<ImageBackground
			source={require("../../assets/backgrounds/calm-countryside.png")}
			style={{
				flex: 1,
				flexDirection: "row",
				justifyContent: "space-evenly",
				alignItems: "center",
			}}
		>
			<Pressable
				onPress={() => {
					handleSelect(image1);
				}}
			>
				<Image
					source={{
						uri: image1,
					}}
					style={{
						width: 150,
						height: 150,
					}}
				/>
			</Pressable>
			<Pressable
				onPress={() => {
					handleSelect(image2);
				}}
			>
				<Image
					source={{
						uri: image2,
					}}
					style={{ width: 150, height: 150 }}
				/>
			</Pressable>
			<Pressable
				onPress={() => {
					handleSelect(image3);
				}}
			>
				<Image
					source={{
						uri: image3,
					}}
					style={{ width: 150, height: 150 }}
				/>
			</Pressable>
		</ImageBackground>
	);
};

export default CharacterCreation;
