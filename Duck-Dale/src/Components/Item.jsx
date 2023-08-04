import {
	Button,
	Image,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import { getAllShopItems } from "../Lib/Api";
import { useContext, useEffect, useState } from "react";

const Item = ({ item, setChoices }) => {
	const {
		item_name,
		price,
		quantity,
		item_img = require("../../assets/unicorn.png"),
	} = item;
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
					style={[styles.items, { textAlign: "left", flex: 0.1 }]}
					onPress={handleSelect}
				>
					{quantity}
				</Text>
				<View style={{ flex: 0.1, justifyContent: "center" }}>
					<Image
						style={{ height: 30, width: 30 }}
						source={require("../../assets/unicorn.png")}
					/>
				</View>

				<Text style={[styles.items, { flex: 0.5 }]} onPress={handleSelect}>
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
		flex: 0.3,
		textAlign: "center",
		fontSize: 20,
	},
});

export default Item;
