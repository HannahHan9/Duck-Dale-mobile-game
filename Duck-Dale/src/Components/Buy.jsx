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
						return <Text>{item.item_name}</Text>;
					}
				})}
			</ScrollView>
		</View>
	);
}

export default Buy;
