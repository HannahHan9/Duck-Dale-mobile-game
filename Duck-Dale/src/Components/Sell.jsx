import { useContext, useEffect, useState } from "react";
import {
	Alert,
	Button,
	ImageBackground,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import {
	getAllUserItems,
	patchShopItems,
	patchUserCoins,
	patchUserItems,
	postShopItems,
} from "../Lib/Api";
import { UserContext } from "../Contexts/UserContext";
import Item from "./Item";
import { CoinContext } from "../Contexts/CoinContext";

function Sell() {
	const { user } = useContext(UserContext);
	const { coins, setCoins } = useContext(CoinContext);
	const [items, setItems] = useState([]);
	const [sellChoices, setSellChoices] = useState([]);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [cost, setCost] = useState(0);

	const handleSell = () => {
		setError(null);
		setIsLoading(true);
		// setItems((current) => {
		// 	return current.filter((item) => !sellChoices.includes(item));
		// });

		const addPromises = [];
		const removePromises = [];
		let total = coins;
		sellChoices.forEach(({ item_name, quantity, price, chosenQuantity }) => {
			addPromises.push(patchShopItems(user, item_name, chosenQuantity));
			removePromises.push(patchUserItems(user, item_name, -chosenQuantity));
			total += price * chosenQuantity;
		});

		Promise.all(addPromises)
			.then(() => {
				Promise.all(removePromises);
			})

			.then(() => {
				return patchUserCoins(user, total);
			})
			.then((money) => {
				setCoins(money);
				Alert.alert("Cha-ching!", "Sold", [
					{
						text: "OK",
						onPress: () => {},
					},
				]);
			})
			.catch(() => {
				console.log("sell error");
			})
			.finally(() => {
				setSellChoices([]);
				setIsLoading(false);
			});
	};

	useEffect(() => {
		getAllUserItems(user).then((items) => {
			setItems(items);
		});
	}, [coins]);
	return (
		<ImageBackground
			source={require("../../assets/backgrounds/wood-background.png")}
			resizeMode="cover"
			style={{ flex: 1, justifyContent: "center" }}
		>
			<View style={[styles.container, { backgroundColor: "white" }]}>
				<Text style={[styles.titles, { textAlign: "left", flex: 1.2 }]}>
					Quantity
				</Text>
				<Text style={styles.titles}>Item</Text>
				<Text style={styles.titles}>Price</Text>
			</View>

			<ScrollView>
				{items.map((item) => {
					if (item.quantity > 0) {
						return (
							<View key={item._id}>
								{isLoading ? (
									<Text>Loading</Text>
								) : (
									<Item
										item={item}
										setChoices={setSellChoices}
										setCost={setCost}
									/>
								)}
							</View>
						);
					}
				})}
			</ScrollView>
			{sellChoices.length ? (
				<Button title="Sell" onPress={handleSell}></Button>
			) : null}
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	container: { flexDirection: "row" },
	titles: {
		flex: 0.4,
		textAlign: "center",
		fontSize: 20,
		fontWeight: "bold",
	},
});

export default Sell;
