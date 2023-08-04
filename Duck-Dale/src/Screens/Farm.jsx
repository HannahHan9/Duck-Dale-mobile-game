import { View } from "react-native";

function Farm() {
	return <View></View>;
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
