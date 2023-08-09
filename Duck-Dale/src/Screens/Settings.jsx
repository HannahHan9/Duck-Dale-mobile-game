import {
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
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

<<<<<<< HEAD
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
=======
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
>>>>>>> fec72168c0f6cc998c0dcd60c8fda8c0bd4dc03f

          <View>
            <TouchableOpacity
              onPress={() => nav.navigate("UpdateProfile")}
              style={styles.pressable}
            >
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
            style={styles.pressable}>
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
    borderWidth: 2,
  },
  pressable: {
    borderColor: "white",
    borderWidth: 3,
    backgroundColor: "white",
  },
});

export default Settings;
