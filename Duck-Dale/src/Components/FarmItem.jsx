import { Pressable, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";

const FarmItem = ({ item, setPlantChoice, plantChoice }) => {
	const { item_name, quantity } = item;
	const [color, setColor] = useState("transparent");
	const handleSelect = () => {
		setPlantChoice([item]);
	};

	useEffect(() => {
		setColor(() => {
			return plantChoice[0] === item ? "#f25c54" : "#D7EFF9";
		});
	}, [plantChoice]);
	return (
		<View>
			<Pressable onPress={handleSelect}>
				<View style={[styles.container, { borderColor: color }]}>
					<Text style={styles.items}>{item_name}</Text>
					<Text style={[styles.items, { flex: 0.2, textAlign: "left" }]}>
						{quantity}
					</Text>
				</View>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		borderWidth: 3,
		borderRadius: 10,
		backgroundColor: "#f0ead2",
		marginVertical: 2,
	},
	items: {
		flex: 0.8,
		textAlign: "center",
		fontSize: 20,
	},
});

export default FarmItem;
