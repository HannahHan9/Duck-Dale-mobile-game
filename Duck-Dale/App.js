import { StyleSheet } from "react-native";
import { AuthNavigator } from "./src/Navigation/StackNavigator";
import { UserContext, UserProvider } from "./src/Contexts/UserContext";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import { CoinProvider } from "./src/Contexts/CoinContext";
import { NewUserProvider } from "./src/Contexts/NewUserContext";

export default function App() {
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
