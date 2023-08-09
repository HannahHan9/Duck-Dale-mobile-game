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
import { Picker } from "@react-native-picker/picker";

const Item = ({ item, setChoices, setCost }) => {
	const { item_name, price, quantity, item_img } = item;
	const [border, setBorder] = useState("transparent");
	const [chosenQuantity, setChosenQuantity] = useState(0);
	const [prevQuantity, setPrevQuantity] = useState(0);

	const handleSelect = () => {
		setBorder("#f25c54");
		setChoices((current) => {
			return [...current, item];
		});
		setCost((current) => {
			return current + price * chosenQuantity;
		});
	};
	const handleDeselect = () => {
		setBorder("transparent");
		setChoices((current) => {
			return current.filter((choice) => {
				return choice !== item;
			});
		});
		setCost((current) => {
			return current - price * prevQuantity;
		});
	};
	const data = [];
	for (let i = 0; i <= quantity; i++) {
		data.push(i);
	}
	useEffect(() => {
		item.chosenQuantity = chosenQuantity;
		if (chosenQuantity > 0) {
			handleSelect();
		} else {
			handleDeselect();
		}
	}, [chosenQuantity]);
	console.log(item.chosenQuantity, "<==");

	return (
		<View>
			<View
				style={[
					styles.container,
					{ borderColor: border, backgroundColor: "#f0ead2" },
				]}
			>
				<Picker
					style={{ flex: 0.25 }}
					itemStyle={{ backgroundColor: "red" }}
					selectedValue={chosenQuantity}
					onValueChange={(value) => {
						setChosenQuantity((current) => {
							setPrevQuantity(current);
							return value;
						});
					}}
				>
					{data.map((value) => {
						return (
							<Picker.Item key={value} label={String(value)} value={value} />
						);
					})}
				</Picker>
				{/* <Button
					title={String(chosenQuantity)}
					onPress={() => {
						setChosenQuantity((current) => current + 1);
					}}
				></Button> */}
				{/* <Text
					style={[styles.items, { textAlign: "left", flex: 0.1 }]}
					onPress={handleSelect}
				>
					/{quantity}
				</Text> */}
				<View style={{ flex: 0.1, justifyContent: "center" }}>
					<Image style={{ height: 30, width: 30 }} source={{ uri: item_img }} />
				</View>
				<Text style={[styles.items, { flex: 0.5 }]} onPress={handleSelect}>
					{item_name}
				</Text>
				<Text
					style={[styles.items, { textAlign: "right", paddingRight: 70 }]}
					onPress={handleSelect}
				>
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
		alignItems: "center",
	},
	items: {
		flex: 0.1,
		textAlign: "center",
		fontSize: 20,
	},
});

export default Item;
