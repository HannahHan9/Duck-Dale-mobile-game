import {
  View,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Text,
} from "react-native";

import { useContext, useState } from "react";
import { UserContext } from "../Contexts/UserContext";

const CharacterCreation = () => {
  const [current, setCurrent] = useState(0);
  const { user } = useContext(UserContext);

  const instructions = [
    `Hello ${user}, and welcome to Duck Dale! Here are some instructions to remind you how to play this game !`,

    "1. Once you create an account and select your personal avatar, you are directed to the homepage where there are four tabs which you can access (Farm, Shop, Inventory & Trophies).",

    "2. In your farm, you have the ability to plant your seeds and witness your crops grow from the germination stage to its final maturation stage. \n \n Here, you must select the seed you wish to plant and select the fields available to you. Now steady, it will take time for your crops to harvest. Once this is complete, you will be able to add this to your inventory.",

    "3. You are also provided with an initial 100 coins, giving you the ability to buy additional crops to grow, or buy items for your inventory from the market place.",

    "4. You can also sell your existing items to the market place to generate extra revenue and complete your weekly objectives!",

    "5. The inventory tab shows you all the items you own. The more the merrier!",

    "6. The trophies cabinet shows which accomplishments you have achieved, and yet to achieve. All the best of luck trying to complete your missions!",

    "7. That is all you will need to be able to play this game! Have fun farming away!",
  ];

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
            flex: 1,
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 620,
              height: 140,
              backgroundColor: "white",

              alignItems: "center",
              opacity: 0.8,
              borderRadius: 4,
              display: "flex",
            }}
          >
            <Text style={{ padding: 10 }}>{instructions[current]}</Text>
          </View>
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
              style={[
                {
                  backgroundColor: "white",
                  marginBottom: 80,
                  height: 30,
                  width: 80,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 4,
                  display: "flex",
                },
                !current ? styles.buttoninvalid : styles.buttonvalid,
              ]}
              onPress={() => {
                setCurrent((current) => current - 1);
              }}
              disabled={!current ? true : false}
            >
              <Text>Previous</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={[
              {
                backgroundColor: "white",
                marginBottom: 80,
                height: 30,
                width: 80,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 4,
                display: "flex",
              },
              current === instructions.length - 1
                ? styles.buttoninvalid
                : styles.buttonvalid,
            ]}
            onPress={() => {
              setCurrent((current) => current + 1);
            }}
            disabled={current === instructions.length - 1 ? true : false}
          >
            <Text>Next</Text>
          </TouchableOpacity>
        </View>
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
  buttonvalid: {
    display: "flex",
  },
  buttoninvalid: {
    display: "none",
  },
});

export default CharacterCreation;
