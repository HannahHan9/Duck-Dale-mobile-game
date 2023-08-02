import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { getAllShopItems } from "../Lib/Api";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Contexts/UserContext";

function Buy() {
	const { user } = useContext(UserContext);
	const [items, setItems] = useState([]);
	useEffect(() => {
		getAllShopItems().then((items) => {
			setItems(items);
		});
	}, []);
	return (
		<View>
			<View style={styles.container}>
				<Text style={[styles.titles, { textAlign: "left" }]}>Item</Text>
				<Text style={styles.titles}>Price</Text>
				<Text style={styles.titles}>Quantity</Text>
			</View>

			<ScrollView>
				{items.map((item) => {
					if (item.username === user && item.quantity > 0) {
						return (
							<View key={item._id}>
								<View style={styles.container}>
									<Text style={[styles.items, { textAlign: "left" }]}>
										{item.item_name}
									</Text>
									<Text style={styles.items}>{item.price}</Text>
									<Text style={styles.items}>{item.quantity}</Text>
									<Button
										style={[styles.items, { width: 30 }]}
										title="Inc"
									></Button>
									<Button
										style={[styles.items, { width: 30 }]}
										title="Sell"
									></Button>
								</View>
							</View>
						);
					}
				})}
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: { flexDirection: "row" },
	titles: { flex: 0.2, textAlign: "center" },
	items: { flex: 0.25, textAlign: "center" },
});

export default Buy;
