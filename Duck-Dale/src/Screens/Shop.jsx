import {
	Image,
	ImageBackground,
	Pressable,
	SectionList,
	Switch,
	Text,
	View,
} from "react-native";
import Coin from "../Components/Coin";
import { ShopNavigator } from "../Navigation/TabNavigator";

function Shop() {
	return (
		<View
			style={{
				flex: 1,
				flexDirection: "row",
				flexWrap: "wrap",
			}}
		>
			<ShopNavigator />
			<ImageBackground
				source={require("../../assets/backgrounds/cute-anime-fox-female-npc-shopkeeper-594500145.png")}
				resizeMode="stretch"
				style={{ flex: 0.4, justifyContent: "left" }}
			>
				<View
					style={{
						flex: 0.12,
						// backgroundColor: "#ffffffdd",
					}}
				>
					<Coin />
				</View>
			</ImageBackground>
		</View>
	);
}

export default Shop;
