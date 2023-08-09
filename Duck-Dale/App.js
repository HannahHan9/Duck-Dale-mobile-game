import { LogBox, StyleSheet } from "react-native";
import { AuthNavigator } from "./src/Navigation/StackNavigator";
import { UserContext, UserProvider } from "./src/Contexts/UserContext";
import { NavigationContainer } from "@react-navigation/native";
import { CoinProvider } from "./src/Contexts/CoinContext";
import { NewUserProvider } from "./src/Contexts/NewUserContext";
import { SeasonProvider } from "./src/Contexts/SeasonContext";
import { useContext } from "react";
import { SoundProvider } from "./src/Contexts/SoundContext";
import { MusicPlayProvider } from "./src/Contexts/MusicPlayContext";

LogBox.ignoreLogs(["new NativeEventEmitter"]);
LogBox.ignoreAllLogs();

export default function App() {

    return (
      <NewUserProvider>
        <UserProvider>
          <CoinProvider>
            <SeasonProvider>
              <SoundProvider>
                <MusicPlayProvider>
                  <NavigationContainer>
                    <AuthNavigator style={styles.container} />
                  </NavigationContainer>
                </MusicPlayProvider>
              </SoundProvider>
            </SeasonProvider>
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
