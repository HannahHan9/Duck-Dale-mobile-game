import { useContext, useEffect, useState } from "react";
import {
	Image,
	ImageBackground,
	Pressable,
	ScrollView,
	Text,
	View,
	StyleSheet,
} from "react-native";
import { getAllUserItems, getUser } from "../Lib/Api";
import { UserContext } from "../Contexts/UserContext";
import Coin from "../Components/Coin";
import InventoryGrid from "../Components/InventoryGrid";

function Inventory() {
	const [items, setItems] = useState([]);
	const [avatar, setAvatar] = useState("../../assets/buttons/button-farm.png");
	const [selected, setSelected] = useState([]);
	const { user } = useContext(UserContext);
	useEffect(() => {
		getUser(user)
			.then((user) => {
				setAvatar(user.character_img);
				return getAllUserItems(user.username);
			})
			.then((items) => {
				setItems(items);
			});
	}, []);
	return (
		<View style={{ flex: 1 }}>
			<View
				style={[
					styles.container,
					{
						flexDirection: "row",
						flex: 1,
						// justifyContent: "center",
						alignItems: "center",
					},
				]}
			>
				<ImageBackground
					source={require("../../assets/backgrounds/wood-background.png")}
					resizeMode="cover"
					style={{ flex: 1.5 }}
				>
					<InventoryGrid items={items} setSelected={setSelected} />
				</ImageBackground>
				<ImageBackground
					source={{ uri: avatar }}
					resizeMode="cover"
					style={{ flex: 1 }}
				>
					<Coin />
					<View style={styles.rightSide}>
						{selected.length > 0 ? (
							<View>
								<View style={{flexDirection: "row"}}>
								<Image
									source={{ uri: selected[0].item_img }}
									style={{ height: 80, width: 80 }}
								/>
								<Text>{selected[0].item_name}</Text>
								</View>
								<Text>{selected[0].description}</Text>
								<Text>Quantity: {selected[0].quantity}</Text>
								<Text>Type: {selected[0].item_type}</Text>
							</View>
						) : null}
					</View>
				</ImageBackground>
			</View>
		</View>
	);
}

export default Inventory;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		// padding: 10,
	},
	leftSide: {
		flex: 1,
	},
	rightSide: {
		flex: 0.3,
		backgroundColor: "white",
		justifyContent: "center",
		alignItems: "center",
		
	},
});
