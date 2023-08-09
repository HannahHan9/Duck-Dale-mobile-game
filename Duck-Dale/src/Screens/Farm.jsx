import { ImageBackground, ScrollView, Text, View } from "react-native";
import Crop from "../Components/Crop";
import { useContext, useEffect, useState } from "react";
import FarmItem from "../Components/FarmItem";
import { getAllUserItems, getAllUserSeeds } from "../Lib/Api";
import { UserContext } from "../Contexts/UserContext";
import FarmGrid from "../Components/FarmGrid";

function Farm() {
	const { user } = useContext(UserContext);
	const [plantChoice, setPlantChoice] = useState([]);
	const [items, setItems] = useState([]);
	const [numPlanted, setNumPlanted] = useState(0);

	useEffect(() => {
		getAllUserSeeds(user, "Seed").then((items) => {
			setItems(items);
		});
	}, [numPlanted]);

	return (
    <ImageBackground
      source={require("../../assets/backgrounds/calm-anime-field.png")}
      resizeMode="cover"
      style={{ flex: 1, justifyContent: "center" }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <View style={{ flex: 0.5 }}>
          <Text
            style={{
              fontSize: 20,
              textAlign: "center",
              backgroundColor: "#D7EFF9",
            }}
          >
            Available Seeds
          </Text>
          <ScrollView>
            {items.map((item) => {
              if (item.username === user && item.quantity > 0) {
                return (
                  <View key={item._id}>
                    <FarmItem
                      item={item}
                      setPlantChoice={setPlantChoice}
                      plantChoice={plantChoice}
                    />
                  </View>
                );
              }
            })}
          </ScrollView>
        </View>
        <View style={{ flex: 1.5 }}>
          <FarmGrid item={plantChoice} setNumPlanted={setNumPlanted} />
        </View>
      </View>
    </ImageBackground>
  );
}

export default Farm;
