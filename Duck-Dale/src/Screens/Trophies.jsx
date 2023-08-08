import { useContext, useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { getAchievements, getUser } from "../Lib/Api";
import { UserContext } from "../Contexts/UserContext";

function Trophies() {
  const { user } = useContext(UserContext);
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    getUser(user)
      .then((user) => {
        return getAchievements(user.username);
      })
      .then((achievements) => {
        setAchievements(achievements);
      });
  }, []);

  return (
    <View style={[styles.container]}>
      {achievements.map(
        ({
          _id,
          achievement_name,
          description,
          image,
          progress,
          acquired,
          date,
          username,
        }) => {
          return (
            <View key={_id}>
              <Image
                source={{ uri: image }}
                style={
                  acquired
                    ? { width: 56, height: 56 }
                    : { width: 56, height: 56, opacity: 0.2 }
                }
              ></Image>
              <Text style={{ fontWeight: 700 }}>{achievement_name}</Text>
              <Text>{description}</Text>
            </View>
          );
        }
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: "wrap",
    marginTop: 8,
    backgroundColor: "aliceblue",
    maxHeight: 400,
    padding: 36,
    justifyContent: "space-between",
  },
});

export default Trophies;
