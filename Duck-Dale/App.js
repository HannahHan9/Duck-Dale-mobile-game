import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AuthNavigator from "./src/Navigation/StackNavigator";
import { UserProvider } from "./src/Contexts/UserContext";
import { NavigationContainer } from "@react-navigation/native";
import React, { useContext } from "react";
import Home from './src/Screens/Home'

export default function App() {
    return (
        // <UserProvider>
        //     <NavigationContainer>
        //         <AuthNavigator style={styles.container} />
        //     </NavigationContainer>
        // </UserProvider>
        <Home />
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
