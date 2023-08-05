import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { useState } from "react";

const FarmItem = ({ item, setPlantChoice }) => {
	const { item_name, quantity } = item;
	const [color, setColor] = useState("transparent");
	const handleSelect = () => {
		setColor((current) => {
			return current === "white" ? "#8e9f45" : "white";
		});
		setPlantChoice([item]);
	};

	return (
		<View>
			<TouchableWithoutFeedback onPress={handleSelect}>
				<View style={[styles.container, { borderColor: color }]}>
					<Text style={styles.items}>{item_name}</Text>
					<Text style={[styles.items, { flex: 0.2, textAlign: "left" }]}>
						{quantity}
					</Text>
				</View>
			</TouchableWithoutFeedback>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		borderWidth: 3,
		borderRadius: 20,
		backgroundColor: "#8e9f45",
		marginVertical: 2,
	},
	items: {
		flex: 0.8,
		textAlign: "center",
		fontSize: 20,
	},
});

export default FarmItem;
