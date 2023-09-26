import { useContext } from "react";
import { Text } from "react-native";
import { HungerContext } from "../Contexts/HungerContext";

function Hunger() {
  const { hunger } = useContext(HungerContext);

  return (
    <Text
      style={{
        maxHeight: 50,
        fontSize: 20,
        fontWeight: "bold",
        backgroundColor: "transparent",
        textAlign: "right",
      }}
    >
      ❤️ {hunger}/100 {""}
    </Text>
  );
}

export default Hunger;
