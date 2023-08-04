import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";

const FarmItem = ({ item, setPlantChoice }) => {
	const { item_name, price, quantity } = item;
	const [color, setColor] = useState("transparent");
	const handleSelect = () => {
		setColor((current) => {
			return current === "transparent" ? "white" : "transparent";
		});
		setPlantChoice([item]);
	};

	return (
		<View>
			<View style={[styles.container, { backgroundColor: color }]}>
				<Text
					style={[styles.items, { textAlign: "left", flex: 0.2 }]}
					onPress={handleSelect}
				>
					{quantity}
				</Text>
				<Text style={styles.items} onPress={handleSelect}>
					{item_name}
				</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: { flexDirection: "row" },
	items: {
		flex: 0.4,
		textAlign: "center",
		fontSize: 20,
	},
});

export default FarmItem;
