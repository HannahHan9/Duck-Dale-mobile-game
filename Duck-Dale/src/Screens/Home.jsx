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

import { Audio } from "expo-av"; // SOUND
import { SeasonContext } from "../Contexts/SeasonContext";

export default function Home() {
	const nav = useNavigation();
	const { user } = useContext(UserContext);
	const [avatar, setAvatar] = useState("../../assets/buttons/button-farm.png");

	const [sound, setSound] = useState();
	const [status, setStatus] = useState(false); // SOUND

	const { season, setSeason } = useContext(SeasonContext)

    // const makeTimer = () => {
    //   setInterval(() => {
    //     setSeason((curr) => {
    //       console.log(curr, "<---- curr");
    //       curr++;
    //     });
    //   }, 10000);
    // };

    // makeTimer();

	if (season >= 120) {
    setSeason(0);
  	}

	// async function playSound() {
	// 	console.log("Loading Sound");
	// 	const { sound } = await Audio.Sound.createAsync(
	// 		require("../../assets/sounds/mama-s-not-here.mp3")
	// 	);
	// 	setSound(sound);
	// 	console.log("Playing Sound");
	// 	sound.setIsLoopingAsync(true);
	// 	await sound.playAsync();
	// } // SOUND

	useEffect(() => {
		setInterval(() => {
      		setSeason(curr => curr + 10)}, 10000);
		// playSound();
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
        source={
          season >= 30 && season < 60
            ? require("../../assets/backgrounds/calm-anime-countryside.png")
            : season >= 60 && season < 90
            ? require("../../assets/backgrounds/calm-anime-farmyard.png")
            : season >= 90 && season < 120
            ? require("../../assets/backgrounds/calm-anime-field.png")
            : require("../../assets/backgrounds/calm-countryside.png")
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
            <View style={{ flex: 0.2, flexDirection: "row" }}>
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
                  source={require("../../assets/buttons/cog.png")}
                  style={{ height: 40, width: 40, marginHorizontal: 10 }}
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
