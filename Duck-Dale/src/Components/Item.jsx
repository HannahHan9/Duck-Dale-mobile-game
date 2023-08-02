import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { getAllShopItems } from "../Lib/Api";
import { useContext, useEffect, useState } from "react";

const Item = ({ item_name, quantity, price, setChoices }) => {
	const [border, setBorder] = useState("transparent");
	const handleSelect = () => {
		setBorder((current) => {
			return current === "transparent" ? "white" : "transparent";
		});
		setChoices((current) => {
			if (current.includes(item_name)) {
				return current.filter((item) => item !== item_name);
			} else {
				return [...current, item_name];
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
				{/* <Button
					style={[styles.items, { width: 30 }]}
					title="Select"
					onPress={handleSelect}
				></Button> */}
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
