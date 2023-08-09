import {
	ImageBackground,
  Image,
	Text,
	View,
	TouchableOpacity,
	StyleSheet,
} from "react-native";
import { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../Contexts/UserContext";
import * as ScreenOrientation from "expo-screen-orientation";
import { getUser } from "../Lib/Api";


function Settings() {
	const { user, setUser } = useContext(UserContext);
	const nav = useNavigation();
  const [avatar, setAvatar] = useState("../../assets/buttons/button-farm.png");

	const logout = () => {
		lockOrientation();
		setUser(null);
	};

	const lockOrientation = async () => {
		await ScreenOrientation.lockAsync(
			ScreenOrientation.OrientationLock.PORTRAIT
		);
	};

  useEffect(() => {
		// playSound();
		lockOrientation();
		getUser(user).then((user) => {
			setAvatar(user.character_img);
		});
	}, []);

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
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-evenly",
						alignItems: "center",
					}}
				>
					{/* <View
						style={[
							styles.container,
							{ flexDirection: "row", gap: 250, backgroundColor: "#ffffffdd" },
						]}
					>
						<Text style={styles.text}>Welcome {user}</Text>
					</View> */}

					<View>
						<TouchableOpacity
							onPress={() => nav.navigate("UpdateProfile")}
							style={styles.pressable}
						>
             <Image source={{ uri: avatar }} style={styles.img} />
							<Text style={styles.text}>Update Profile</Text>
						</TouchableOpacity>

						<TouchableOpacity
							//   onPress={Music} // music
							style={styles.pressable}
						>
							<Text style={styles.text}> Music </Text>
						</TouchableOpacity>

						<TouchableOpacity
							//   onPress={auto - save} ///
							style={styles.pressable}
						>
              {/* <Image source={require("../../assets/how-to-play.png")} style={styles.img} /> */}
							<Text style={styles.text}>How To Play</Text>
						</TouchableOpacity>

						<TouchableOpacity onPress={logout} style={styles.pressable}>
							<Text style={styles.text}>Sign Out</Text>
						</TouchableOpacity>
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
		alignItems: "center",
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
	},
});

export default Settings;
