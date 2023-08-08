import { useState, useContext } from "react";
import { Button, StyleSheet, Text, TextInput, View, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../Contexts/UserContext";
import { getAllUsers, getUser, postUser } from "../Lib/Api";
import { CoinContext } from "../Contexts/CoinContext";
import { NewUserContext } from "../Contexts/NewUserContext";

const LogInRegister = () => {
    
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
		setIsLoading(true);
		if (
			newFirstname.length > 0 &&
			newLastname.length > 0 &&
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
						postUser(newUsername, newPassword, newFirstname, newLastname)        // PATCH
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
				}
			});
		} else {
			Alert.alert("Oops!", "Please fill out all the fields", [
				{ text: "OK", onPress: () => {} },
			]);
		}
	};

}