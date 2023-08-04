import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import {
	getAllShopItems,
	patchShopItems,
	patchUserCoins,
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

	const handleBuy = () => {
		setError(null);
		setIsLoading(true);
		setItems((current) => {
			return current.filter((item) => !buyChoices.includes(item));
		});

		const addPromises = [];
		const removePromises = [];
		let total = 0;
		buyChoices.forEach((item) => {
			addPromises.push(
				postUserItems(
					user,
					item.item_name,
					item.description,
					item.price,
					item.quantity
				)
			);
			removePromises.push(patchShopItems(item._id, 0));
			total += item.price * item.quantity;
		});
		if (coins - total >= 0) {
			Promise.all(addPromises)
				.then(() => {
					Promise.all(removePromises);
				})
				.then(() => {
					return patchUserCoins(user, coins - total);
				})
				.then((money) => {
					setCoins(money);
				})

				.catch(() => {
					console.log("it broked");
				})
				.finally(() => {
					setBuyChoices([]);
					setIsLoading(false);
				});
		} else {
			setError("U broke biatch");
		}

		//check user inventory
		//if exists => patch
		//patch user coins
	};
	console.log(buyChoices);
	useEffect(() => {
		getAllShopItems(user).then((items) => {
			setItems(items);
		});
	}, [coins]);
	return (
		<View style={{ flex: 1 }}>
			<View style={styles.container}>
				<Text style={[styles.titles, { textAlign: "left", flex: 0.2 }]}>
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
									<Item item={item} setChoices={setBuyChoices} />
								)}
							</View>
						);
					}
				})}
			</ScrollView>
			{buyChoices.length ? (
				<Button title="Buy" onPress={handleBuy}></Button>
			) : null}
			{error ? <Text>{error}</Text> : null}
		</View>
	);
}

const styles = StyleSheet.create({
	container: { flexDirection: "row" },
	titles: { flex: 0.4, textAlign: "center", fontSize: 20, fontWeight: "bold" },
});

export default Buy;
