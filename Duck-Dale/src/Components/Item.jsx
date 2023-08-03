import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { getAllShopItems } from "../Lib/Api";
import { useContext, useEffect, useState } from "react";

const Item = ({ item, setChoices }) => {
	const { item_name, price, quantity } = item;
	const [border, setBorder] = useState("transparent");
	const handleSelect = () => {
		setBorder((current) => {
			return current === "transparent" ? "white" : "transparent";
		});
		setChoices((current) => {
			if (current.includes(item)) {
				return current.filter((choice) => {
					return choice !== item;
				});
			} else {
				return [...current, item];
			}
		});
	};

	return (
		<View>
			<View style={[styles.container, { backgroundColor: border }]}>
				<Text
					style={[styles.items, { textAlign: "left", flex: 0.2 }]}
					onPress={handleSelect}
				>
					{quantity}
				</Text>
				<Text style={styles.items} onPress={handleSelect}>
					{item_name}
				</Text>
				<Text style={styles.items} onPress={handleSelect}>
					{price}🪙
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

export default Item;
