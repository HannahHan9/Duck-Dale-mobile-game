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