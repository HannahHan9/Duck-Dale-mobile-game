import { StatusBar } from "expo-status-bar";
import * as ScreenOrientation from "expo-screen-orientation";
import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import Orientation from "react-native-orientation";

export default function Home() {
    useEffect(() => {
        lockOrientation();
      }, []);
    return <View>
        <Text>Hi Lucy!!</Text>
    </View>;
}






//   const [orientation, setOrientation] = useState(1);
//   useEffect(() => {
//     lockOrientation();
//   }, []);
//   const lockOrientation = async () => {
//     await ScreenOrientation.lockAsync(
//       ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
//     );
//   const o = await ScreenOrientation.getOrientationAsync();
//     setOrientation(o);
//   };
//   return (
//     <View style={styles.container}>
//       <Text>Locked Screen orientation: {orientation}</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });