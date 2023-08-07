import { useState } from "react";
import {
	Button,
	Image,
	Pressable,
	Text,
	TouchableHighlight,
	View,
} from "react-native";
import { patchUserItems } from "../Lib/Api";

function Crop({ item }) {
	const [imageUrl, setImageUrl] = useState(
		"https://drive.google.com/uc?export=view&id=1UotkwssyRo8aV3dwbTHImD9xiG3fw-sF"
	);
	const [isPlanted, setIsPlanted] = useState(false);
	const [isGrown, setIsGrown] = useState(false);
	const { _id, quantity, stage_1_img, stage_2_img, stage_3_img, reference } =
		item[0];

	const handlePlanted = () => {
		setIsPlanted(true);

		patchUserItems(_id, -1).then(() => {
			setImageUrl(stage_1_img);
			setTimeout(() => {
				setImageUrl(stage_2_img);
				setTimeout(() => {
					setImageUrl(stage_3_img);
					setIsGrown(true);
				}, 10_000);
			}, 10_000);
		});
	};

	const handleHarvest = () => {
		setImageUrl(
			"https://drive.google.com/uc?export=view&id=1UotkwssyRo8aV3dwbTHImD9xiG3fw-sF"
		);
		patchUserItems(reference, 1);
	};
	return (
		<View>
			<TouchableHighlight
				onPress={handlePlanted}
				disabled={isPlanted}
				style={{ alignItems: "center" }}
			>
				<Image source={{ uri: imageUrl }} style={{ height: 90, width: 90 }} />
			</TouchableHighlight>
			{/* {isPlanted ? <Text>Growing...</Text> : <Text>Select Plot</Text>} */}
			{isGrown ? (
				<Pressable
					onPress={handleHarvest}
					style={{
						height: 20,
						borderWidth: 1,
						borderRadius: 20,
						backgroundColor: "#8e9f45",
					}}
				>
					<Text
						style={{ color: "white", fontWeight: "bold", textAlign: "center" }}
					>
						Harvest!
					</Text>
				</Pressable>
			) : (
				<View style={{ height: 20 }}></View>
			)}
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
