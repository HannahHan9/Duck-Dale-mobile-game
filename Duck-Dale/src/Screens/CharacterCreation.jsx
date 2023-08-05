import { View, Image, Pressable } from "react-native";
import { patchUserImage } from "../Lib/Api";
import { Children, useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import { NewUserContext } from "../Contexts/NewUserContext";

const CharacterCreation = () => {
	const { newUser, setNewUser } = useContext(NewUserContext);
	const { setUser } = useContext(UserContext);
	const image1 = require("../../assets/unicorn.png");
	const handleSelect = (image) => {
		patchUserImage(newUser, image).then(() => {
			setUser(newUser);
			setNewUser("");
		});
	};
	return (
		<View>
			<Pressable
				onPress={() => {
					handleSelect(image1);
				}}
			>
				<Image source={image1} />
			</Pressable>
			<Pressable
				onPress={() => {
					handleSelect(image1);
				}}
			>
				<Image source={image1} />
			</Pressable>
			<Pressable
				onPress={() => {
					handleSelect(image1);
				}}
			>
				<Image source={image1} />
			</Pressable>
		</View>
	);
};

export default CharacterCreation;
