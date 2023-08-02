import { ScrollView, Text, View } from "react-native";
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
			<Text>Buy</Text>
			<ScrollView>
				{items.map((item) => {
					if (item.username === user) {
						return (
							<View style={{ flexDirection: "row", gap: 30 }}>
								<Text style={{ flex: 0.5 }}>{item.item_name}</Text>
								<Text>{item.price}</Text>
								<Text>{item.quantity}</Text>
							</View>
						);
					}
				})}
			</ScrollView>
		</View>
	);
}

export default Buy;
