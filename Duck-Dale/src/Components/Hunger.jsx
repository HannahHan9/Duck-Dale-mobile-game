import { useContext, useEffect } from "react";

import { Text } from "react-native";
import { UserContext } from "../Contexts/UserContext";
import { getUser } from "../Lib/Api";
import { HungerContext } from "../Contexts/HungerContext";

function Hunger() {
  const { hunger } = useContext(HungerContext);
  // const { user } = useContext(UserContext);
  // useEffect(() => {
  // 	getUser(user).then(setHungers);
  // }, []);
  return (
    <Text
      style={{
        maxHeight: 50,
        fontSize: 10,
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
