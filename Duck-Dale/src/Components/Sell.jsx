import { useContext, useEffect, useState } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { getAllUserItems, patchUserItems, postShopItems } from "../Lib/Api";
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

	const handleSell = () => {
		setError(null);
		setIsLoading(true);
		setItems((current) => {
			return current.filter((item) => !sellChoices.includes(item));
		});

		const addPromises = [];
		const removePromises = [];
		let total = coins;
		sellChoices.forEach((item) => {
			addPromises.push(
				postShopItems(
					user,
					item.item_name,
					item.description,
					item.price,
					item.quantity
				)
			);
			removePromises.push(patchUserItems(item.item_id, 0));
			total += item.price * item.quantity;
		});

		Promise.all(addPromises)
			.then(() => {
				Promise.all(removePromises);
			})
			.then(() => {
				console.log("here");
				return patchUserCoins(user, total);
			})
			.then((coins) => {
				setCoins(coins);
				setIsLoading(false);
			})

			.catch(() => {
				console.log("it broked");
			});

		//check user inventory
		//if exists => patch
		//patch user coins
	};

	useEffect(() => {
		getAllUserItems().then((items) => {
			setItems(items);
		});
	}, [coins]);
	console.log(sellChoices.length);
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
					if (item.username === user && item.quantity > 0) {
						return (
							<View key={item._id}>
								<Item item={item} setChoices={setSellChoices} />
							</View>
						);
					}
				})}
			</ScrollView>
			{sellChoices.length ? (
				<Button title="Sell" onPress={handleSell}></Button>
			) : null}
		</View>
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
