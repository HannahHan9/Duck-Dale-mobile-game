import {
  View,
  Image,
  Pressable,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Button,
  Text,
} from "react-native";
import { patchUserImage } from "../Lib/Api";
import { Children, useContext, useEffect, useState } from "react";
import { UserContext } from "../Contexts/UserContext";
import { NewUserContext } from "../Contexts/NewUserContext";
import { CoinContext } from "../Contexts/CoinContext";
import * as ScreenOrientation from "expo-screen-orientation";

const CharacterCreation = () => {
  const { newUser, setNewUser } = useContext(NewUserContext);
  const { setUser } = useContext(UserContext);
  const { setCoins } = useContext(CoinContext);
  const [current, setCurrent] = useState(0);
  const images = [
    "https://drive.google.com/uc?export=view&id=1wvBu5oPWGNti8IGBUV8Ng8NEboUFJrVK",
    "https://drive.google.com/uc?export=view&id=1fz2QR-srrHSP1FWyLxxppwNqy_Vx_xoS",
    "https://drive.google.com/uc?export=view&id=1IMsW5297niJENXRg0uLmax4seWLEHNY8",
  ];
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
            style={{ width: 200, height: 256 }}
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
                setCurrent((current) => current + 1);
                if (current >= 2) {
                  setCurrent(0);
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
              setCurrent((current) => current - 1);
              if (current <= 0) {
                setCurrent(2);
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
