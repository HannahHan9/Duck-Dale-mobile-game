import { useState, useContext } from "react";
import { Button, StyleSheet, Text, TextInput, View, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../Contexts/UserContext";
import { getAllUsers, getUser, postUser } from "../Lib/Api";
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
            firstname === "" ||
            lastname === "" ||
            newUsername === "" ||
            newPassword === "" ||
            confirmPassword === ""
        ) {
            Alert.alert("Oops!", "Please fill out all the fields", [
                { text: "OK", onPress: () => {} },
            ]);
        } else {
            getAllUsers().then((users) => {
                const usernames = users.map((user) => {
                    console.log(user.username);
                    return user.username;
                });
                if (usernames.includes(newUsername)) {
                    Alert.alert("Sorry!", "This username already exists", [
                        {
                            text: "OK",
                            onPress: () => {
                                setNewUsername("");
                            },
                        },
                    ]);
                } else {
                    postUser(newUsername, newPassword, firstname, lastname)
                        .then(() => {
                            console.log("user created");
                            setUser(newUsername);
                        })
                        .catch((err) => {
                            Alert.alert(
                                "Something went wrong!",
                                "The user couldn't be created",
                                [{ text: "Try again", onPress: () => {} }]
                            );
                        });
                }
            });
        }
    };

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
                    value={newPassword}
                    onChangeText={(text) => {
                        setError(false);
                        setNewPassword(text);
                    }}
                />
                <TextInput
                    title="Confirm password"
                    secureTextEntry={true}
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChangeText={(text) => {
                        setError(false);
                        setConfirmPassword(text);
                        if (confirmPassword !== newPassword) {
                            setError(true);
                            // <Text></Text>
                        }
                    }}
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
