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
import { getUser } from "../Lib/Api";

//---For Sound
import { MusicPlayContext } from "../Contexts/MusicPlayContext";
import { SoundContext } from "../Contexts/SoundContext";
import { Audio } from "expo-av";
//---For Sound

export default function Settings() {
	const nav = useNavigation();
	const { user, setUser } = useContext(UserContext);
	const [avatar, setAvatar] = useState("../../assets/buttons/button-farm.png");

	//---For Sound
	const { sound, setSound } = useContext(SoundContext);
	//const [playStatus, setPlayStatus] = useState(false) //useContext(MusicPlayContext);
	const { playStatus, setPlayStatus } = useContext(MusicPlayContext);
	//const [textTitle, setTextTitle]= useState("Music On");
	async function playSound() {
		const { sound } = await Audio.Sound.createAsync(
			require("../../assets/sounds/mama-s-not-here.mp3")
		);
		setSound(sound);
		sound.setIsLoopingAsync(true);
		await sound.playAsync();
	}
	const onPressMusicTouchableOpacity = () => {
		//playStatus ? playStatus.unloadAsync() : playSound()
		if (playStatus === false) {
			setPlayStatus(true);
			//setTextTitle("Music Off")
			playSound();
		} else {
			setPlayStatus(false);
			//setTextTitle("Music On")
			sound.unloadAsync();
		}
	};
	//---For Sound

	const logout = () => {
		lockOrientation();
		// sound.unloadAsync();
		setUser(null);
	};

	useEffect(() => {
		getUser(user).then((user) => {
			setAvatar(user.character_img);
		});
	}, []);

	const lockOrientation = async () => {
		await ScreenOrientation.lockAsync(
			ScreenOrientation.OrientationLock.PORTRAIT
		);
	};

	return (
		<View style={styles.container}>
			<ImageBackground
				source={require("../../assets/backgrounds/image.png")}
				resizeMode="cover"
				style={{
					flex: 1,
					justifyContent: "center",
				}}
			>
				<View style={{ flex: 1 }}>
					<View
						style={{
							flex: 5,
							flexDirection: "row",
							justifyContent: "space-evenly",
							alignItems: "center",
						}}
					>
						<Pressable
							onPress={() => nav.navigate("UpdateProfile")}
							style={styles.pressable}
						>
							<Image source={{ uri: avatar }} style={styles.img} />
							<Text style={styles.text}>Update Profile</Text>
						</Pressable>
						<Pressable
							onPress={() => {
								onPressMusicTouchableOpacity();
							}}
							style={styles.pressable}
						>
							<Image
								source={require("../../assets/buttons/anime-girl-listening-to-headphones-236667266.png")}
								style={styles.img}
							/>
							<Text style={styles.text}>
								{" "}
								{playStatus ? "Music Off" : "Music On"}{" "}
							</Text>
						</Pressable>
						<Pressable
							onPress={() => nav.navigate("HowToPlay")}
							style={styles.pressable}
						>
							<Image
								source={require("../../assets/buttons/anime-girl-reading-book-670591613(1).png")}
								style={styles.img}
							/>
							<Text style={styles.text}>How To Play</Text>
						</Pressable>
						<Pressable onPress={logout} style={styles.pressable}>
							<Image
								source={require("../../assets/buttons/anime-man-waving-goodbye-happy-548729121.png")}
								style={styles.img}
							/>
							<Text style={styles.text}>Log Out</Text>
						</Pressable>
					</View>
				</View>
			</ImageBackground>
		</View>
	);
}

{
	/* <TouchableOpacity onPress={logout} style={styles.pressable}>

  <Text style={styles.text}>Sign Out</Text>
</TouchableOpacity>; */
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
