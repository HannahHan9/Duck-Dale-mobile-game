import { LogBox, StyleSheet } from "react-native";
import { AuthNavigator } from "./src/Navigation/StackNavigator";
import { UserContext, UserProvider } from "./src/Contexts/UserContext";
import { NavigationContainer } from "@react-navigation/native";
import { CoinProvider } from "./src/Contexts/CoinContext";
import { NewUserProvider } from "./src/Contexts/NewUserContext";

LogBox.ignoreLogs(["new NativeEventEmitter"]);
LogBox.ignoreAllLogs();

export default function App() {


//   React.useEffect(() => {
//     return sound
//       ? () => {
//           console.log("Unloading Sound");
//           sound.unloadAsync();
//         }
//       : undefined;
//   }, [sound]); // SOUND

// return (
//     <View style={styles.container}>
//       <Button title={status?'Pause Sound':'Play Sound'} onPress={onPressButton} />
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#ECF0F1',
//     padding: 10,
//   },
// });


    return (
        <NewUserProvider>
            <UserProvider>
                <CoinProvider>
                    <NavigationContainer>
                        <AuthNavigator style={styles.container} />
                    </NavigationContainer>
                </CoinProvider>
            </UserProvider>
        </NewUserProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
