import { LogBox, StyleSheet } from "react-native";
import { AuthNavigator } from "./src/Navigation/StackNavigator";
import { UserContext, UserProvider } from "./src/Contexts/UserContext";
import { NavigationContainer } from "@react-navigation/native";
import { CoinProvider } from "./src/Contexts/CoinContext";
import { NewUserProvider } from "./src/Contexts/NewUserContext";
import { SeasonContext, SeasonProvider } from "./src/Contexts/SeasonContext";
import { useContext } from "react";

LogBox.ignoreLogs(["new NativeEventEmitter"]);
LogBox.ignoreAllLogs();

export default function App() {

    return (
      <NewUserProvider>
        <UserProvider>
          <CoinProvider>
            <SeasonProvider>
              <NavigationContainer>
                <AuthNavigator style={styles.container} />
              </NavigationContainer>
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
