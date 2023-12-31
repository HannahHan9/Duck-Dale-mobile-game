import {
	Alert,
	Button,
	ImageBackground,
	Pressable,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import {
	getAllShopItems,
	patchShopItems,
	patchUserCoins,
	patchUserItems,
	postUserItems,
} from "../Lib/Api";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Contexts/UserContext";
import { CoinContext } from "../Contexts/CoinContext";
import Item from "./Item";

function Buy() {
	const { user } = useContext(UserContext);
	const { coins, setCoins } = useContext(CoinContext);
	const [items, setItems] = useState([]);
	const [buyChoices, setBuyChoices] = useState([]);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [cost, setCost] = useState(0);

	const handleBuy = () => {
		setError(null);
		setIsLoading(true);
		setItems((current) => {
			return current.filter((item) => !buyChoices.includes(item));
		});

		const addPromises = [];
		const removePromises = [];
		// let total = 0;
		buyChoices.forEach(({ item_name, quantity, price, chosenQuantity }) => {
			addPromises.push(patchUserItems(user, item_name, chosenQuantity));
			removePromises.push(patchShopItems(user, item_name, -chosenQuantity));
			// total += price * quantity;
		});
		// if (coins - total >= 0) {
		Promise.all(addPromises)
			.then(() => {
				Promise.all(removePromises);
			})
			.then(() => {
				return patchUserCoins(user, coins - cost);
			})
			.then((money) => {
				setCoins(money);
				Alert.alert("Yay!", "Added to inventory", [
					{
						text: "OK",
						onPress: () => {},
					},
				]);
			})

			.catch(() => {
				console.log("buy error");
			})
			.finally(() => {
				setBuyChoices([]);
				setIsLoading(false);
			});
		// } else {
		// 	setError("Not Enough Coins");
		// }

		//check user inventory
		//if exists => patch
		//patch user coins
	};
	useEffect(() => {
		getAllShopItems(user).then((items) => {
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
				<Text style={[styles.titles, { textAlign: "left", flex: 0.4 }]}>
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
										setChoices={setBuyChoices}
										setCost={setCost}
									/>
								)}
							</View>
						);
					}
				})}
			</ScrollView>
			{buyChoices.length ? (
				<Button
					title="Buy"
					onPress={handleBuy}
					accessibilityLabel="Not enough coins!"
					disabled={cost > coins}
					style={{ backgroundColor: "#83c5be", height: 30 }}
				>
					{/* <Text
						style={{
							textAlign: "center",
							fontWeight: "bold",
							fontSize: 25,
							flex: 1,
							color: "grey",
						}}
					>
						Buy
					</Text> */}
				</Button>
			) : null}
			{error ? <Text>{error}</Text> : null}
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

export default Buy;
