import { Text, TouchableHighlight, View } from "react-native";

function Crop({ item }) {
	return (
		<View>
			<Text>HI!</Text>
		</View>
	);
	// image state initial = dirt picture
	// isPlanted?
	// handlePlant => {
	//     isPlanted => true
	//     item.item_name => patch to decrease userItem quantity
	//     (post => gridSquare back-end to add the seed to the square)
	//     setTimeout(() => {
	//         after 1/3 time => set image state to be image 1
	//         after 2/3 time => set image state to be image 2
	//         after full time => set image state to image 3
	//     }, time)
	// }
	// return <TouchableHighlight onPress={handlePlant} disabled={isPlanted}><image source={image state}></image></TouchableHighlight>;
}

export default Crop;
