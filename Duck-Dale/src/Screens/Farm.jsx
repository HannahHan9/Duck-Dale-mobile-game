import { ImageBackground, ScrollView, Text, View } from "react-native";
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
		<ImageBackground
			source={require("../../assets/backgrounds/background-farm-soil.png")}
			resizeMode="cover"
			style={{ flex: 1, justifyContent: "center" }}
		>
			<View
				style={{
					flex: 1,
					flexDirection: "row",
					flexWrap: "wrap",
				}}
			>
				<View style={{ flex: 0.5, backgroundColor: "#c7c053dd" }}>
					<Text style={{ fontSize: 20, textAlign: "center" }}>
						Available Seeds
					</Text>
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
		</ImageBackground>
	);
}

export default Farm;
