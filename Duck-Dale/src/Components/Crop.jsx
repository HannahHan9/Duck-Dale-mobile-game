import { useContext, useState } from "react";
import {
	Alert,
	Image,
	Pressable,
	Text,
	TouchableHighlight,
	View,
} from "react-native";
import { patchGarden, patchUserItems } from "../Lib/Api";
import { UserContext } from "../Contexts/UserContext";

function Crop({ item, id, setNumPlanted }) {
	const { user } = useContext(UserContext);
	const [imageUrl, setImageUrl] = useState(
		"https://drive.google.com/uc?export=view&id=1UotkwssyRo8aV3dwbTHImD9xiG3fw-sF"
	);
	const [isPlanted, setIsPlanted] = useState(false);
	const [isGrown, setIsGrown] = useState(false);
	const { item_name, stage_1_img, stage_2_img, stage_3_img, reference } =
		item[0];

	const handlePlanted = () => {
		setIsPlanted(true);
		setNumPlanted((current) => {
			return current + 1;
		});
		patchGarden({
			username: user,
			planted: isPlanted,
			state: reference,
			stage: 1,
			grid_square: id,
		})
			.then(() => {
				patchUserItems(user, item_name, -1);
			})
			.then(() => {
				setImageUrl(stage_1_img);
				setTimeout(() => {
					patchGarden({ username: user, grid_square: id, stage: 2 });
					setImageUrl(stage_2_img);
					setTimeout(() => {
						patchGarden({ username: user, grid_square: id, stage: 3 });
						setImageUrl(stage_3_img);
						setIsGrown(true);
					}, 5_000);
				}, 5_000);
			});
	};

	const handleHarvest = () => {
		setIsGrown(false);
		setIsPlanted(false);
		setNumPlanted((current) => {
			return current - 1;
		});
		setImageUrl(
			"https://drive.google.com/uc?export=view&id=1UotkwssyRo8aV3dwbTHImD9xiG3fw-sF"
		);
		patchUserItems(user, reference, 1);
		Alert.alert("Yay!", `Crop harvested!`, [
			{
				text: "OK",
				onPress: () => {},
			},
		]);
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
			{/* {isPlanted && !isGrown ? (
				<Text>Growing...</Text>
			) : (
				<Text>Select Plot</Text>
			)} */}
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
						style={{
							color: "white",
							fontWeight: "bold",
							textAlign: "center",
						}}
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
