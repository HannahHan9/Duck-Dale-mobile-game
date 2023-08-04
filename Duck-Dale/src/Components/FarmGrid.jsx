import { Dimensions, StyleSheet, View } from "react-native";
import Crop from "./Crop";

const { width, height } = Dimensions.get("window");
const windowWidth = width / 1.5;
const itemsPerRow = 3;
const childWidth = windowWidth / itemsPerRow;
const childHeight = (height - 80) / itemsPerRow;
function FarmGrid(item) {
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
	];
	return (
		<View style={styles.itemsWrap}>
			{squares.map((square) => (
				<View key={square.id} style={styles.singleItem}>
					<Crop item={item} />
				</View>
			))}
		</View>
	);
}

export default FarmGrid;

const styles = StyleSheet.create({
	itemsWrap: {
		backgroundColor: "#7F5112",
		flex: 1,
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		height: height - 20,
	},
	singleItem: {
		backgroundColor: "transparent",
		minWidth: childWidth,
		maxWidth: childWidth,
		height: childHeight,
	},
});
