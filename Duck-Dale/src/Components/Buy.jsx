import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { getAllShopItems } from "../Lib/Api";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Contexts/UserContext";
import { CoinContext } from "../Contexts/CoinContext";
import Item from "./Item";

function Buy() {
	const { user } = useContext(UserContext);
	const { setCoins } = useContext(CoinContext);
	const [items, setItems] = useState([]);
	const [buyChoices, setBuyChoices] = useState([]);

	useEffect(() => {
		getAllShopItems().then((items) => {
			setItems(items);
		});
	}, []);
	return (
		<View>
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
								<Item
									item_name={item.item_name}
									price={item.price}
									quantity={item.quantity}
									setChoices={setBuyChoices}
								/>
							</View>
						);
					}
				})}
			</ScrollView>
			{buyChoices.length ? <Button title="Buy"></Button> : null}
		</View>
	);
}

const styles = StyleSheet.create({
	container: { flexDirection: "row" },
	titles: { flex: 0.4, textAlign: "center", fontSize: 20, fontWeight: "bold" },
});

export default Buy;
