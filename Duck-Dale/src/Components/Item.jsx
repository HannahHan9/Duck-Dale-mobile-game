import {
	Button,
	Image,
	Pressable,
	ScrollView,
	SectionList,
	StyleSheet,
	Text,
	View,
} from "react-native";
import { getAllShopItems } from "../Lib/Api";
import { useContext, useEffect, useState } from "react";

const Item = ({ item, setChoices, setCost }) => {
	const { item_name, price, quantity, item_img } = item;
	const [border, setBorder] = useState("transparent");
	const [chosenQuantity, setChosenQuantity] = useState(0);

	const handleSelect = () => {
		setBorder((current) => {
			return current === "transparent" ? "red" : "transparent";
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
		setCost((current) => {
			return border === "red"
				? current - price * chosenQuantity
				: current + price * chosenQuantity;
		});
	};
	useEffect(() => {
		item.chosenQuantity = chosenQuantity;
	}, [chosenQuantity]);
	console.log(item.chosenQuantity, "<==");
	return (
		<View>
			<View style={[styles.container, { borderColor: border }]}>
				{/* <Picker></Picker> */}
				<Button
					title={String(chosenQuantity)}
					onPress={() => {
						setChosenQuantity((current) => current + 1);
					}}
				></Button>
				<Text
					style={[styles.items, { textAlign: "left", flex: 0.1 }]}
					onPress={handleSelect}
				>
					/{quantity}
				</Text>
				<View style={{ flex: 0.1, justifyContent: "center" }}>
					<Image style={{ height: 30, width: 30 }} source={{ uri: item_img }} />
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
	container: {
		flexDirection: "row",
		borderWidth: 3,
		borderRadius: 10,
		backgroundColor: "white",
		marginVertical: 2,
	},
	items: {
		flex: 0.3,
		textAlign: "center",
		fontSize: 20,
	},
});

export default Item;
