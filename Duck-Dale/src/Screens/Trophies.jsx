import { useContext, useEffect, useState } from "react";
import { Image, StyleSheet, Text, View, ImageBackground } from "react-native";
import { getAchievements, getUser } from "../Lib/Api";
import { UserContext } from "../Contexts/UserContext";

function Trophies() {
	const { user } = useContext(UserContext);
	const [achievements, setAchievements] = useState([]);

	useEffect(() => {
		console.log("1");
		getUser(user)
			.then((user) => {
				console.log("2");
				return getAchievements(user.username);
			})
			.then((achievements) => {
				console.log("3");
				setAchievements(achievements);
			});
	}, []);

	return (
		<ImageBackground
			source={require("../../assets/backgrounds/shelf4.png")}
			resizeMode="stretch"
			style={{
				flexDirection: "row",
				flex: 1,
				justifyContent: "center",
				flexWrap: "wrap",
			}}
		>
			{achievements.map(
				({
					_id,
					achievement_name,
					description,
					image,
					progress,
					acquired,
					date,
					username,
				}) => {
					return (
						<View
							key={_id}
							style={{
								alignItems: "center",
								marginTop: 55,
								marginHorizontal: 10,
							}}
						>
							<Image
								source={{ uri: image }}
								style={
									acquired
										? { width: 56, height: 56 }
										: { width: 56, height: 56, opacity: 0.2 }
								}
							></Image>
							<Text style={{ fontWeight: "bold", textAlign: "center" }}>
								{achievement_name}
							</Text>
							<Text style={{ textAlign: "center" }}>{description}</Text>
						</View>
					);
				}
			)}
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexWrap: "wrap",
		marginTop: 8,
		backgroundColor: "aliceblue",
		maxHeight: 400,
		padding: 36,
		justifyContent: "space-evenly",
	},
});

export default Trophies;
