import { useState, useContext } from "react";
import { Button, StyleSheet, Text, TextInput, View, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../Contexts/UserContext";
import { getAllUsers, getUser } from "../Lib/Api";
import { CoinContext } from "../Contexts/CoinContext";

const LogInRegister = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const { setUser } = useContext(UserContext);
    const { setCoins } = useContext(CoinContext);
    const [newUsername, setNewUsername] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");

    // const nav = useNavigation();

    const handleSignUp = () => {
        if (
            !firstname ||
            !lastname ||
            !newUsername ||
            !newPassword ||
            !confirmPassword
        ) {
            Alert.alert("Oops!", "Please fill out all the fields", [
                { text: "OK", onPress: () => console.log("okay button pressed") },
            ]);
        }
    };
    // getUser(username).then((user) => {
    // if (user.username === newUsername) {
    // 	<Text>This username already exists</Text>
    // 	setUser(false);

    const handleSignIn = () => {
        getUser(username)
            .then((user) => {
                // if (user.password === password) {
                setUser(user.username);
                setCoins(user.coins);
                // } else {
                // setError(true);
                // }
            })
            .catch((err) => {
                setError(true);
            });
    };
    console.log(username);
    return (
        <View style={styles.container}>
            <View>
                <Text>Register</Text>
                <TextInput
                    value={firstname}
                    onChangeText={(text) => setFirstname(text)}
                    placeholder="Enter first name"
                />
                <TextInput
                    value={lastname}
                    onChangeText={(text) => setLastname(text)}
                    placeholder="Enter last name"
                />
                <TextInput
                    title="Username"
                    placeholder="Enter username"
                    value={newUsername}
                    onChangeText={(text) => {
                        setError(false);
                        setNewUsername(text);
                    }}
                />
                <TextInput
                    title="Password"
                    secureTextEntry={true}
                    placeholder="Enter password"
                />
                <TextInput
                    title="Confirm password"
                    secureTextEntry={true}
                    placeholder="Confirm password"
                />
                <Button title="Sign Up" onPress={handleSignUp} />
            </View>
            <Text>----------- OR -----------</Text>
            <View>
                <Text>Log In</Text>
                <TextInput
                    title="Username"
                    placeholder="Enter username"
                    value={username}
                    onChangeText={(text) => {
                        setError(false);
                        setUsername(text);
                    }}
                />
                <TextInput
                    title="Password"
                    secureTextEntry={true}
                    placeholder="Enter password"
                    value={password}
                    onChangeText={(text) => {
                        setError(false);
                        setPassword(text);
                    }}
                />
                <Button title="Sign In" onPress={handleSignIn} />
                {error ? <Text>Username or password not found</Text> : null}
            </View>
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
});

export default LogInRegister;
