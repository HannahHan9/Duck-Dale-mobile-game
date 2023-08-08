import { useContext, useEffect, useState } from "react";
import {
	Image,
	ImageBackground,
	Pressable,
	ScrollView,
	Text,
	View,
} from "react-native";
import { getAllUserItems, getUser } from "../Lib/Api";
import { UserContext } from "../Contexts/UserContext";
import Coin from "../Components/Coin";

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
			<Coin />
			<View
				style={{
					flexDirection: "row",
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<ImageBackground
					source={require("../../assets/backgrounds/wood-background.png")}
					resizeMode="cover"
					style={{ flex: 1, justifyContent: "center" }}
				>
					<ScrollView style={{ flex: 0.5 }}>
						{items.map((item) => {
							return item.quantity > 0 ? (
								<Pressable
									key={item._id}
									onPress={() => {
										setSelected([item]);
									}}
								>
									<View
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
												fontSize: 30,
												textAlign: "center",
											}}
										>
											{item.quantity}
										</Text>
										<Text
											style={{
												flex: 0.6,
												fontSize: 30,
												textAlign: "right",
											}}
										>
											{item.item_name}
										</Text>
									</View>
								</Pressable>
							) : null;
						})}
					</ScrollView>
				</ImageBackground>
				<ImageBackground
					source={{ uri: avatar }}
					resizeMode="cover"
					// style={{ flex: 0.75 }}
				>
					<View style={{ flex: 1, alignItems: "bottom" }}>
						{selected.length > 0 ? (
							<View style={{ flex: 0.5 }}>
								<Image
									source={{ uri: selected[0].item_img }}
									style={{ height: 80, width: 80 }}
								/>
							</View>
						) : null}
					</View>
				</ImageBackground>
			</View>
		</View>
	);
}

export default Inventory;
