import { useContext, useEffect, useState } from "react";
import {
	Image,
	ImageBackground,
	Pressable,
	ScrollView,
	Text,
	View,
} from "react-native";

function InventoryGrid({ items, setSelected }) {
	return (
		<ScrollView>
			<View style={{ flex: 0.25, flexWrap: "wrap", flexDirection: "row" }}>
				{items.map((item) => {
					return item.quantity > 0 ? (
						<Pressable
							style={{
								flexDirection: "row",
								flexWrap: "wrap",
								// flex: 5,
								height: 150,
								width: 150,
								alignItems: "center",
								margin: 5,
								// justifyContent: "space-evenly",
							}}
							key={item._id}
							onPress={() => {
								setSelected([item]);
							}}
						>
							<View
								style={{
									// flexWrap: "wrap",
									height: 150,
									// width: 150,
									// justifyContent: "space-evenly",
									flex: 1,

									alignItems: "center",
									borderWidth: 3,
									borderRadius: 20,
									borderColor: "transparent",
									backgroundColor: "#8e9f45",
									marginVertical: 2,
								}}
							>
								<Image
									source={{ uri: item.item_img }}
									style={{ height: 50, width: 50 }}
								/>
								<Text
									style={{
										fontSize: 30,
										textAlign: "center",
									}}
								>
									{item.item_name}
								</Text>
							</View>
						</Pressable>
					) : null;
				})}
			</View>
		</ScrollView>
	);
}

export default InventoryGrid;
