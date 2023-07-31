import { createStackNavigator } from "@react-navigation/stack";
import { LogInRegister } from "../Screens/LogInRegister";
import { Home } from "../Screens/Home";
import { StyleSheet } from "react-native";

const Stack = createStackNavigator();
export const AuthNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="LogInAndRegister" component={LogInRegister} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="CharacterCreation" component={LogInRegister} />
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#abc",
        alignItems: "center",
        justifyContent: "center",
    },
});
