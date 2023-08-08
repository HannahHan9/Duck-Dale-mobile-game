import { useState, useContext } from "react";
import { Button, StyleSheet, Text, TextInput, View, Alert, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../Contexts/UserContext";
import { getAllUsers, getUser, patchUser } from "../Lib/Api";
import { CoinContext } from "../Contexts/CoinContext";
import { NewUserContext } from "../Contexts/NewUserContext";

const UpdateProfile = () => {
  const [error, setError] = useState(false);
  const { setUser } = useContext(UserContext);
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newFirstname, setNewFirstname] = useState("");
  const [newLastname, setNewLastname] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);



  const handleUpdate = () => {
    // setIsLoading(true);
    // if (
    //   newFirstname.length > 0 ||
    //   newLastname.length > 0 ||
    //   newUsername.length > 0 ||
    //   newPassword.length > 0 ||
    //   confirmPassword.length > 0
    // ) 
    // {
    //   getAllUsers().then((users) => {
    //     const usernames = users.map((user) => {
    //       setIsLoading(false);
    //       return user.username;
    //     });
    //     if (!isLoading) {
    //       if (usernames.includes(newUsername)) {
    //         Alert.alert("Sorry!", "This username already exists", [
    //           {
    //             text: "OK",
    //             onPress: () => {
    //               setNewUsername("");
    //             },
    //           },
    //         ]);
    //       } else 
        //   {
            patchUser(newUsername, newPassword, newFirstname, newLastname) 
              .then(() => {
                setNewUser(newUsername);
                Alert.alert("Yay!", "Your profile has been updated", [
                  {
                    text: "OK",
                    onPress: () => {},
                  },
                ]);
              })
              .catch((err) => {
                Alert.alert(
                  "Something went wrong!",
                  "Your profile has not been updated",
                  [{ text: "Try again", onPress: () => {} }]
                );
              });
          }
        
    //   });
    // } else {
    //   Alert.alert("Oops!", "Please fill out all the fields", [
    //     { text: "OK", onPress: () => {} },
    //   ]);
    // }
//   };

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
          {isLoading ? (
            <Text style={styles.text}>Loading...</Text>
          ) : (
            <View style={{ marginVertical: 20 }}>
              <Text style={[styles.text, { fontWeight: "bold", fontSize: 20 }]}>
                Register
              </Text>
              <TextInput
                style={styles.text}
                value={newFirstname}
                onChangeText={(text) => setNewFirstname(text)}
                placeholder="Enter first name"
              />
              <TextInput
                style={styles.text}
                value={newLastname}
                onChangeText={(text) => setNewLastname(text)}
                placeholder="Enter last name"
              />
              <TextInput
                style={styles.text}
                title="Username"
                placeholder="Enter username"
                value={newUsername}
                onChangeText={(text) => {
                  setError(false);
                  setNewUsername(text);
                }}
              />
              <TextInput
                style={styles.text}
                title="Password"
                secureTextEntry={true}
                placeholder="Enter password"
                value={newPassword}
                onChangeText={(text) => {
                  setError(false);
                  setNewPassword(text);
                }}
              />
              <TextInput
                style={styles.text}
                title="Confirm password"
                secureTextEntry={true}
                placeholder="Confirm password"
                value={confirmPassword}
                onChangeText={(text) => {
                  setConfirmPassword(text);
                  setPasswordError(() => {
                    if (text !== newPassword) {
                      return true;
                    } else return false;
                  });
                }}
              />
              {passwordError ? <Text>Password doesn't match!</Text> : null}
              <Button
                title="Update"
                onPress={handleUpdate}
                disabled={passwordError}
              />
            </View>
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		textAlign: "center",
	},
});

export default UpdateProfile;