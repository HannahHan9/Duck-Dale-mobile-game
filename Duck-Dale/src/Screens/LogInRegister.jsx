import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const LogInRegister = () => {
        const [name, setName] = useState("");
        return (
            <View style={styles.container}>
                <Text>Register</Text>
                <TextInput
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter name"
                />
                <TextInput title="Username" placeholder="Enter username" />
                <TextInput
                    title="Password"
                    secureTextEntry={true}
                    placeholder="Enter password"
                />
                <TextInput
                    title="Confirm password"
                    secureTextEntry={true}
                    placeholder="Confirm password"
                />
                <Button title="Submit" />
            </View>
        );
        };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default {LogInRegister};