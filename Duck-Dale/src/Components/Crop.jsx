import { useState } from "react";
import { Button, Image, Text, TouchableHighlight, View } from "react-native";
import { patchUserItems } from "../Lib/Api";

function Crop({ item }) {
	const [imageUrl, setImageUrl] = useState("");
	const [isPlanted, setIsPlanted] = useState(false);
	const [isGrown, setIsGrown] = useState(false);
	const { _id, quantity } = item[0];

	const handlePlanted = () => {
		patchUserItems(_id, quantity - 1).then(() => {
			setIsPlanted(true);
			setImageUrl("");
			setTimeout(() => {
				setImageUrl("");
				setTimeout(() => {
					setImageUrl("");
					setIsGrown(true);
				}, 10_000);
			}, 10_000);
		});
	};

	const handleHarvest = () => {};
	return (
		<View>
			<TouchableHighlight onPress={handlePlanted} disabled={isPlanted}>
				<Image
					source={require("../../assets/free-crop/free-crop/land-n-tile/soil_big.png")}
					style={{ height: 100, width: 100 }}
				/>
			</TouchableHighlight>
			{isGrown ? <Button title="Harvest!" onPress={handleHarvest} /> : null}
		</View>
	);

	// isPlanted?
	// handlePlant => {
	//     isPlanted => true
	//     item.item_name => patch to decrease userItem quantity
	// }
	// return <TouchableHighlight onPress={handlePlant} disabled={isPlanted}><image source={image state}></image></TouchableHighlight>;
}

export default Crop;
