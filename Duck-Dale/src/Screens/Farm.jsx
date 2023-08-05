import { ScrollView, Text, View } from "react-native";
import Crop from "../Components/Crop";
import { useContext, useEffect, useState } from "react";
import FarmItem from "../Components/FarmItem";
import { getAllUserItems, getAllUserSeeds } from "../Lib/Api";
import { UserContext } from "../Contexts/UserContext";
import FarmGrid from "../Components/FarmGrid";

function Farm() {
	const { user } = useContext(UserContext);
	const [plantChoice, setPlantChoice] = useState([]);
	const [items, setItems] = useState([]);
	const data = [{ item: plantChoice }];

	useEffect(() => {
		getAllUserSeeds(user, "Seed").then((items) => {
			setItems(items);
		});
	}, []);

	return (
		<View
			style={{
				flex: 1,
				flexDirection: "row",
				flexWrap: "wrap",
			}}
		>
			<View style={{ flex: 0.5, backgroundColor: "#c7c053" }}>
				<Text>Available Seeds</Text>
				<ScrollView>
					{items.map((item) => {
						if (item.username === user && item.quantity > 0) {
							return (
								<View key={item._id}>
									<FarmItem
										item={item}
										setPlantChoice={setPlantChoice}
										plantChoice={plantChoice}
									/>
								</View>
							);
						}
					})}
				</ScrollView>
			</View>
			<View style={{ flex: 1.5 }}>
				<FarmGrid item={plantChoice} />
			</View>
		</View>
	);
}

export default Farm;
