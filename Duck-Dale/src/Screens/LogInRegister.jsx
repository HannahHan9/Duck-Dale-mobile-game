import { useState, useContext } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../Contexts/UserContext";
import { getAllUsers, getUser } from "../Lib/Api";

const LogInRegister = () => {
	const [name, setName] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const { setUser } = useContext(UserContext);

	// const nav = useNavigation();

	const handleSignUp = () => {
		setUser(true);
	};

	const handleSignIn = () => {
		getUser(username)
			.then((user) => {
				if (user.password === password) {
					setUser(user.username);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<View style={styles.container}>
			<View>
				<Text>Register</Text>
				<TextInput
					value={name}
					onChangeText={(text) => setName(text)}
					placeholder="Enter name"
				/>
				<TextInput title="Username" placeholder="Enter username" />
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
						setUsername(text);
					}}
				/>
				<TextInput
					title="Password"
					secureTextEntry={true}
					placeholder="Enter password"
					value={password}
					onChangeText={(text) => setPassword(text)}
				/>
				<Button title="Sign In" onPress={handleSignIn} />
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
