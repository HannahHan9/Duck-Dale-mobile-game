import { ScrollView, Text, View } from "react-native";
import Crop from "../Components/Crop";
import { useContext, useEffect, useState } from "react";
import FarmItem from "../Components/FarmItem";
import { getAllUserItems, getAllUserSeeds } from "../Lib/Api";
import { UserContext } from "../Contexts/UserContext";
import FarmGrid from "../Components/FarmGrid";

function Farm() {
	const { user } = useContext(UserContext);
	const [plantChoice, setPlantChoice] = useState(null);
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
			<View style={{ flex: 0.5 }}>
				<Text>Available Seeds</Text>
				<ScrollView>
					{items.map((item) => {
						if (item.username === user && item.quantity > 0) {
							return (
								<View key={item._id}>
									<FarmItem item={item} setPlantChoice={setPlantChoice} />
								</View>
							);
						}
					})}
				</ScrollView>
			</View>
			<View style={{ flex: 1 }}>
				<FarmGrid item={plantChoice} />
			</View>
		</View>
	);
}

export default Farm;

// Make Crop component
// inside crop:
// back-end: gridSquare and userItems
// front-end: getUserItems
// once selected => post selected item to gridSquare
// start setTimeout (possibly with grow time value from back-end)
// every 1/3rd of the grow time => change state of image src (from back-end data possibly)

// scrollview
// grid of touchable squares => handle planting/harvesting
