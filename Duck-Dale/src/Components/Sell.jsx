import { useContext, useEffect, useState } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { getAllUserItems } from "../Lib/Api";
import { UserContext } from "../Contexts/UserContext";
import Item from "./Item";

function Sell() {
    const { user } = useContext(UserContext);
    const [items, setItems] = useState([]);
    useEffect(() => {
        getAllUserItems().then((items) => {
            setItems(items);
        });
    }, []);
    return (
        <View>
            <View style={styles.container}>
                <Text style={[styles.titles, { textAlign: "left" }]}>Item</Text>
                <Text style={styles.titles}>Price</Text>
                <Text style={styles.titles}>Quantity</Text>
            </View>

            <ScrollView>
                {items.map((item) => {
                    if (item.username === user && item.quantity > 0) {
                        return (
							<View key={item._id}>
                            <Item
                                item_name={item.item_name}
                                price={item.price}
                                quantity={item.quantity}
                                id={item._id}
                            />
							</View>
                        );
                    }
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flexDirection: "row" },
    titles: { flex: 0.2, textAlign: "center" },
    items: { flex: 0.25, textAlign: "center" },
});

export default Sell;
