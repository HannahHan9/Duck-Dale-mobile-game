import { useContext, useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { getAllUserItems } from "../Lib/Api";
import { UserContext } from "../Contexts/UserContext";

function Sell() {
	const { user } = useContext(UserContext);
	const [items, setItems] = useState([]);
	useEffect(() => {
		getAllUserItems().then((items) => {
			setItems(items);
		});
	}, []);
	return (
		<View>
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

export default Sell;
