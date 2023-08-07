import { Dimensions, StyleSheet, Text, View } from "react-native";
import Crop from "./Crop";

// const { width, height } = Dimensions.get("window");
// const windowWidth = width / 1.5;
// const itemsPerRow = 4;
// const childWidth = windowWidth / itemsPerRow;
// const childHeight = height / itemsPerRow;

const { width, height } = Dimensions.get("window");
const itemsPerRow = 5;
function FarmGrid({ item }) {
	const squares = [
		{ id: 1, title: "grid 1" },
		{ id: 2, title: "grid 2" },
		{ id: 3, title: "grid 3" },
		{ id: 4, title: "grid 4" },
		{ id: 5, title: "grid 5" },
		{ id: 6, title: "grid 6" },
		{ id: 7, title: "grid 7" },
		{ id: 8, title: "grid 8" },
		{ id: 9, title: "grid 9" },
		{ id: 10, title: "grid 10" },
		{ id: 11, title: "grid 11" },
		{ id: 12, title: "grid 12" },
		{ id: 13, title: "grid 13" },
		{ id: 14, title: "grid 14" },
		{ id: 15, title: "grid 15" },
		{ id: 16, title: "grid 16" },
		{ id: 17, title: "grid 17" },
		{ id: 18, title: "grid 18" },
	];
	return (
		<View style={styles.itemsWrap}>
			{item.length > 0 ? (
				squares.map((square) => (
					<View key={square.id}>
						<Crop item={item} />
					</View>
				))
			) : (
				<Text
					style={{
						flex: 1,
						fontSize: 40,
						textAlign: "center",
						backgroundColor: "white",
						maxHeight: 50,
					}}
				>
					Select Seed
				</Text>
			)}
		</View>
	);
}

export default FarmGrid;

const styles = StyleSheet.create({
	itemsWrap: {
		flex: 1,
		backgroundColor: "transparent",
		display: "flex",
		flexWrap: "wrap",
		height: "fit-content",
	},
});
