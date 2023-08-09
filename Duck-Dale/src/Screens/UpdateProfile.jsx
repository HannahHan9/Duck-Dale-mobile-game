import { useState, useContext } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  ImageBackground,
} from "react-native";
import { UserContext } from "../Contexts/UserContext";
import { patchUser } from "../Lib/Api";

const UpdateProfile = () => {
  const [error, setError] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newFirstname, setNewFirstname] = useState("");
  const [newLastname, setNewLastname] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdate = () => {
    // setIsLoading(true);
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

    if (
      !newFirstname.length ||
      !newLastname.length ||
      !newPassword.length ||
      !confirmPassword.length
    ) {
      Alert.alert("Something went wrong!", "Fields cannot be blank", [
        { text: "Try again", onPress: () => {} },
      ]);
    } else {
      patchUser(user, newPassword, newFirstname, newLastname)
        .then(() => {
          setNewPassword("");
          setNewFirstname("");
          setNewLastname("");
          setNewUsername("");
          setConfirmPassword("");
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
  };

  return (
    // <View style={styles.container}>
    <ImageBackground
      source={require("../../assets/backgrounds/image.png")}
      resizeMode="cover"
      style={[styles.container, { flex: 1 }]}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          backgroundColor: "#ffffffee",
          borderWidth: 20,
          borderColor: "#ffffff00",
          width: 300,
        }}
        // style={{
        //   backgroundColor: "#ffffffee",
        //   borderWidth: 20,
        //   borderColor: "#ffffff00",
        //   width: 300,
        //   alignItems: "center",
        // }}
      >
        {isLoading ? (
          <Text style={styles.text}>Loading...</Text>
        ) : (
          <View style={{ marginVertical: 20 }}>
            <Text style={[styles.text, { fontWeight: "bold", fontSize: 20 }]}>
              Update Profile
            </Text>
            <TextInput
              style={styles.text}
              value={newFirstname}
              onChangeText={(text) => setNewFirstname(text)}
              placeholder="Enter new first name"
            />
            <TextInput
              style={styles.text}
              value={newLastname}
              onChangeText={(text) => setNewLastname(text)}
              placeholder="Enter new last name"
            />
            <TextInput
              style={styles.text}
              title="Password"
              secureTextEntry={true}
              placeholder="Enter new password"
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
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
  },

});

export default UpdateProfile;
