import { useContext, useEffect, useState } from "react";
import {
  Image,
  ImageBackground,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {
  getAllUserItems,
  getUser,
  patchUserHunger,
  patchUserItems,
} from "../Lib/Api";
import { UserContext } from "../Contexts/UserContext";
import Coin from "../Components/Coin";
import InventoryGrid from "../Components/InventoryGrid";

import { HungerContext } from "../Contexts/HungerContext";
import { hungerTimer } from "./LogInRegister";

function Inventory() {
  const [items, setItems] = useState([]);
  const [avatar, setAvatar] = useState("../../assets/buttons/button-farm.png");
  const [selected, setSelected] = useState([]);
  const { user } = useContext(UserContext);

  const { hunger, setHunger } = useContext(HungerContext);

  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    getUser(user)
      .then((user) => {
        setAvatar(user.character_img);
        return getAllUserItems(user.username);
      })
      .then((items) => {
        setItems(items);
      });
  }, [quantity]);

  const eatFood = (hungerAmount, item_name, quantity) => {
    patchUserHunger(user, hungerAmount);
    quantity = -1;
    patchUserItems(user, item_name, quantity);
    setHunger((curr) => {
      return curr + hungerAmount;
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={[
          styles.container,
          {
            flexDirection: "row",
            flex: 1,
            // justifyContent: "center",
            alignItems: "center",
          },
        ]}
      >
        <ImageBackground
          source={require("../../assets/backgrounds/wood-background.png")}
          resizeMode="cover"
          style={{ flex: 1.5 }}
        >
          <InventoryGrid
            items={items}
            setSelected={setSelected}
            setQuantity={setQuantity}
          />
        </ImageBackground>
        <ImageBackground
          source={{ uri: avatar }}
          resizeMode="cover"
          style={{ flex: 1 }}
        >
          <Coin />
          <View style={styles.rightSide}>
            {selected.length > 0 ? (
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  width: 300,
                  backgroundColor: "#f0ead2",
                  justifyContent: "space-between",
                  padding: 10,
                  marginTop: 100,
                }}
                onPress={() => {
                  selected[0].item_type === "Food" &&
                  hunger + selected[0].hunger <= 100
                    ? eatFood(
                        selected[0].hunger,
                        selected[0].item_name,
                        selected[0].quantity
                      )
                    : null;
                  selected[0].item_type === "Food" &&
                  hunger + selected[0].hunger <= 100
                    ? setQuantity((curr) => curr + 1)
                    : null;

                  if (
                    hunger <= 0 &&
                    selected[0].item_type === "Food" &&
                    hunger + selected[0].hunger <= 100
                  ) {
                    hungerTimer(setHunger);
                  }
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <Image
                    source={{ uri: selected[0].item_img }}
                    style={{ height: 80, width: 80 }}
                  />
                  <Text>{selected[0].item_name}</Text>
                </View>
                <View>
                  {/* <Text style={{ textAlign: "right" }}>
                    {selected[0].description}
                  </Text> */}
                  <Text style={{ textAlign: "right" }}>
                    Quantity: {selected[0].quantity - quantity}
                  </Text>
                  <Text style={{ textAlign: "right" }}>
                    Type: {selected[0].item_type}
                  </Text>
                </View>
              </TouchableOpacity>
            ) : null}
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}

export default Inventory;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    // padding: 10,
  },
  leftSide: {
    flex: 1,
  },
  rightSide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
