//
//  ShoppingList
//  Greenhouse Designs 13-Sep-2021-145518
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function ShoppingList({ data }) {
  const navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      header: null,
      headerLeft: null,
      headerRight: null,
    };
  };

  // replace this with real data later!
  const shoppingData = [
    { itemName: "Eggs (2 Dozen" },
    { itemName: "Whole Wheat Bread (2 Loaves)" },
    { itemName: "Milk (1 Gallon)" },
    { itemName: "Kiwis" },
    { itemName: "Bananas" },
    { itemName: "Apples" },
  ];

  return (
    <View style={styles.shoppingListView}>
      {shoppingData.map((shoppingItem) => {
        return (
          <View key={shoppingItem.itemName} style={styles.listRow}>
            <View style={styles.flexbox}>
              <Text>{shoppingItem.itemName}</Text>
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
  }
});
