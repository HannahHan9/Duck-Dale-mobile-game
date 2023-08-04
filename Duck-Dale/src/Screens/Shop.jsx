import { Image, ImageBackground, Switch, Text, View } from "react-native";
import Coin from "../Components/Coin";
import { ShopNavigator } from "../Navigation/TabNavigator";

function Shop() {
	return (
		<View
			style={{
				flex: 1,
				flexDirection: "row",
				flexWrap: "wrap",
				paddingHorizontal: 20,
			}}
		>
			<ShopNavigator />

			<ImageBackground
				source={require("../../assets/shop-owner-woman.png")}
				resizeMode="cover"
				style={{ flex: 1, justifyContent: "center" }}
			>
				<View style={{ flex: 1, flexDirection: "row-reverse" }}>
					<Coin />
				</View>
			</ImageBackground>
		</View>
	);
}

export default Shop;
