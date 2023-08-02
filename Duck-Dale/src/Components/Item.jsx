import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { getAllShopItems } from "../Lib/Api";
import { useContext, useEffect, useState } from "react";

const Item = ({ item_name, quantity, price, id }) => {
    const [choices, setChoices] = useState([]);

    const handleSelect = (itemName) => {
        if (choices.includes(itemName)) {
        }
    };

    return (
        <View>
            <View style={styles.container}>
                <Text style={[styles.items, { textAlign: "left" }]}>
                    {item_name}
                </Text>
                <Text style={styles.items}>{price}</Text>
                <Text style={styles.items}>{quantity}</Text>
                <Button
                    style={[styles.items, { width: 30 }]}
                    title="Select"
                ></Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flexDirection: "row" },
    titles: { flex: 0.2, textAlign: "center" },
    items: { flex: 0.25, textAlign: "center" },
});

export default Item;
