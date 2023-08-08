import {
	ImageBackground,
	Text,
	View,
	TouchableOpacity,
	StyleSheet,
} from "react-native";
import { useContext } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { getUser } from "../Lib/Api";
import { UserContext } from "../Contexts/UserContext";
import * as ScreenOrientation from "expo-screen-orientation";

function Settings() {
	const { user, setUser } = useContext(UserContext);
	const nav = useNavigation();

	const logout = () => {
		// AsyncStorage.clear();
		// this.props.navigate.nav;
		lockOrientation();
		setUser(null);
	};

	const lockOrientation = async () => {
		await ScreenOrientation.lockAsync(
			ScreenOrientation.OrientationLock.PORTRAIT
		);
	};

	return (
		// <View
		//   style={{
		//     flex: 1,
		//     flexDirection: "row",
		//     flexWrap: "wrap",
		//     paddingHorizontal: 20,
		//   }}
		// >

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
						flexDirection: "row",
						justifyContent: "space-evenly",
						alignItems: "center",
					}}
				>
					<View
						style={[
							styles.container,
							{ flexDirection: "row", gap: 250, backgroundColor: "#ffffffdd" },
						]}
					>
						<Text style={styles.text}>Welcome {user}</Text>
					</View>
					<View>
						<TouchableOpacity
							onPress={() => nav.navigate("UpdateProfile")}
							style={styles.pressable}
						>
							{/* <Image
							source={require("../")} ///// could be a photo or text illustrating change in details
							style={{ maxWidth: 150, maxHeight: 150 }}
						/> */}
							<Text style={styles.text}>Update Profile</Text>
						</TouchableOpacity>

						<TouchableOpacity
							// onPress={Music} // music
							style={styles.pressable}
						>
							{/* <Image
							source={require("...")} ///// could be an image to switch on or off music
							style={{ maxWidth: 150, maxHeight: 150 }}
						/> */}
							<Text style={styles.text}> Music </Text>
						</TouchableOpacity>

						<TouchableOpacity
							// onPress={auto - save} ///
							style={styles.pressable}
						>
							{/* <Image
							source={require("...")} ///// could be an image / button of an autosave
							style={{ maxWidth: 150, maxHeight: 150 }}
						/> */}
							<Text style={styles.text}>Auto Save</Text>
						</TouchableOpacity>

						<TouchableOpacity onPress={logout} style={styles.pressable}>
							{/* <Image
							source={require("...")} ///// could be an image / button to SIGN OUT
							style={{ maxWidth: 150, maxHeight: 150 }}
						/> */}
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
		alignItems: "centre",
		justifyContent: "center",
	},
	text: {
		textAlign: "center",
		fontSize: 20,
		backgroundColor: "transparent",
	},
	img: {
		borderWidth: 2,
	},
	pressable: {
		borderColor: "white",
		borderWidth: 3,
		backgroundColor: "white",
	},
});

export default Settings;
