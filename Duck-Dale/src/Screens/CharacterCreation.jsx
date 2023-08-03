import { View, Image, TouchableOpacity } from "react-native";

const CharacterCreation = () => {
	return (
		<View>
			<TouchableOpacity onPress={() => {}}>
				<Image source={require("../../assets/unicorn.png")} />
			</TouchableOpacity>
		</View>
	);
};

export default CharacterCreation;
