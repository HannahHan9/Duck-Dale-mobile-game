import { Dimensions, StyleSheet, View } from "react-native";
import Crop from "./Crop";
const { height } = Dimensions.get("window");
const windowWidth = height;
const gap = 12;
const itemsPerRow = 3;
const totalGapSize = (itemsPerRow - 1) * gap;
const childWidth = (windowWidth - totalGapSize) / itemsPerRow;
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
		backgroundColor: "red",
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		marginVertical: -(gap / 2),
		marginHorizontal: -(gap / 2),
	},
	singleItem: {
		marginHorizontal: gap / 2,
		minWidth: childWidth,
		maxWidth: childWidth,
	},
});
