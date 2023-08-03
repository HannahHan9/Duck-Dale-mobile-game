import { useContext, useEffect, useState } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { getAllUserItems } from "../Lib/Api";
import { UserContext } from "../Contexts/UserContext";
import Item from "./Item";

function Sell() {
	const { user } = useContext(UserContext);
	const [items, setItems] = useState([]);
	const [sellChoices, setSellChoices] = useState([]);

	useEffect(() => {
		getAllUserItems().then((items) => {
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
									setChoices={setSellChoices}
								/>
							</View>
						);
					}
				})}
			</ScrollView>
			{sellChoices.length ? <Button title="Sell"></Button> : null}
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
