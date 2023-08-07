import { useContext, useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { getAllUserItems } from "../Lib/Api";
import { UserContext } from "../Contexts/UserContext";
import Coin from "../Components/Coin";

function Inventory() {
	const [items, setItems] = useState([]);
	const { user } = useContext(UserContext);
	useEffect(() => {
		getAllUserItems(user).then((items) => {
			setItems(items);
		});
	}, []);
	return (
		<View style={{ flex: 1 }}>
			<Coin />
			<ScrollView>
				{items.map(({ quantity, item_name, _id, item_img }) => {
					return quantity > 0 ? (
						<View
							key={_id}
							style={{
								flexDirection: "row",
								justifyContent: "center",
								alignItems: "center",
								paddingHorizontal: 100,
								borderWidth: 3,
								borderRadius: 20,
								borderColor: "transparent",
								backgroundColor: "#8e9f45",
								marginVertical: 2,
							}}
						>
							<Text
								style={{
									flex: 0.2,
									fontSize: 40,
									textAlign: "right",
								}}
							>
								{quantity}
							</Text>
							<View style={{ alignItems: "center", flex: 0.2 }}>
								<Image
									source={{ uri: item_img }}
									style={{ height: 80, width: 80 }}
								/>
							</View>
							<Text
								style={{
									flex: 0.6,
									fontSize: 40,
									textAlign: "left",
								}}
							>
								{item_name}
							</Text>
						</View>
					) : null;
				})}
			</ScrollView>
		</View>
	);
}

export default Inventory;
