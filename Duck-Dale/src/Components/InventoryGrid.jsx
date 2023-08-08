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
								flexWrap: "wrap",
								flex: 1,
								height: 500,
								width: 500,
								alignItems: "center",
								justifyContent: "center",
							}}
							key={item._id}
							onPress={() => {
								setSelected([item]);
							}}
						>
							<View
								style={{
									flexWrap: "wrap",
									height: 250,
									width: 250,
									justifyContent: "center",
									// flex: 0.5,
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
										flex: 0.6,
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
