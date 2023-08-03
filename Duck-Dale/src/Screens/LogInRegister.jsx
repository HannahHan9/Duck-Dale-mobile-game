import { useState, useContext } from "react";
import { Button, StyleSheet, Text, TextInput, View, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../Contexts/UserContext";
import { getAllUsers, getUser, postUser } from "../Lib/Api";
import { CoinContext } from "../Contexts/CoinContext";
import { NewUserContext } from "../Contexts/NewUserContext";

const LogInRegister = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(false);
	const { setUser } = useContext(UserContext);
	const { setCoins } = useContext(CoinContext);
	const { setNewUser } = useContext(NewUserContext);
	const [newUsername, setNewUsername] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [firstname, setFirstname] = useState("");
	const [lastname, setLastname] = useState("");
	const [passwordError, setPasswordError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	// const nav = useNavigation();

	const handleSignUp = () => {
		setIsLoading(true);
		if (
			firstname.length > 0 &&
			lastname.length > 0 &&
			newUsername.length > 0 &&
			newPassword.length > 0 &&
			confirmPassword.length > 0
		) {
			getAllUsers().then((users) => {
				const usernames = users.map((user) => {
					setIsLoading(false);
					return user.username;
				});
				if (!isLoading) {
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
								setNewUser(newUsername);
								Alert.alert("Yay!", "User created successfully", [
									{
										text: "OK",
										onPress: () => {},
									},
								]);
							})
							.catch((err) => {
								Alert.alert(
									"Something went wrong!",
									"The user couldn't be created",
									[{ text: "Try again", onPress: () => {} }]
								);
							});
					}
				}
			});
		} else {
			Alert.alert("Oops!", "Please fill out all the fields", [
				{ text: "OK", onPress: () => {} },
			]);
		}
	};

	const handleSignIn = () => {
		setIsLoading(true);
		getUser(username)
			.then((user) => {
				// if (user.password === password) {
				console.log(user.coins);
				setCoins(user.coins);
				setUser(user.username);
				// } else {
				// setError(true);
				// }
			})
			.catch((err) => {
				setError(true);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};
	return (
		<View style={styles.container}>
			{isLoading ? (
				<Text>Loading...</Text>
			) : (
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
						title="Sign Up"
						onPress={handleSignUp}
						disabled={passwordError}
					/>
				</View>
			)}
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
