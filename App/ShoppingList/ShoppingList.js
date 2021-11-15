//
//  ShoppingList
//  Greenhouse Designs 13-Sep-2021-145518
//

import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function ShoppingList({ data, navigation, route }) {
  return (
    <View style={styles.shoppingListView}>
      <Text style={styles.listTitle}>{route.params.title}</Text>
        {route.params.items.map((shoppingItem) => {
        return (
          <View key={shoppingItem.name} style={styles.listRow}>
            <View style={styles.flexbox}>
              <Text>{shoppingItem.name}</Text>
              <View style={[styles.flexbox, styles.alignRight]}>
                <Image
                  source={require("./../../assets/images/trash.png")}
                  style={styles.trashIcon}
                />
                <Image
                  source={require("./../../assets/images/silverware.png")}
                  style={styles.silverwareIcon}
                />
              </View>
            </View>
            <View style={styles.hr}></View>
          </View>
        )
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  listRow: {
    padding: 0,
  },
  hr: {
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
    marginTop: 30,
    marginBottom: 30,
  },
  shoppingListView: {
    padding: 20,
  },
  trashIcon: {
    height: 50,
    width: 44,
  },
  silverwareIcon: {
    height: 34,
    width: 24,
  },
  flexbox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  alignRight: {
	  marginLeft: 'auto',
  },
  listTitle: {
    fontSize: 20,
    textAlign: 'center'
  }
});
