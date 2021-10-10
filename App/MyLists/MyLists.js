//
//  ShoppingList
//  Greenhouse Designs 13-Sep-2021-145518
//

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Button,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ShoppingList({ data }) {
  const navigation = useNavigation();

  // replace this with real data later!
  let staticData = [
    {
      title: "Sunday Lunch",
      dateCreated: "10/27/2021",
      items: [
        { itemName: "Eggs (2 Dozen)" },
        { itemName: "Whole Wheat Bread (2 Loaves)" },
        { itemName: "Milk (1 Gallon)" },
        { itemName: "Kiwis" },
        { itemName: "Bananas" },
        { itemName: "Apples" },
      ],
    },
    {
      title: "Monday Dinner",
      dateCreated: "10/28/2021",
      items: [
        { itemName: "Eggs (2 Dozen)" },
        { itemName: "Whole Wheat Bread (2 Loaves)" },
        { itemName: "Milk (1 Gallon)" },
        { itemName: "Kiwis" },
        { itemName: "Bananas" },
        { itemName: "Apples" },
      ],
    },
    {
      title: "Friday Party",
      dateCreated: "10/29/2021",
      items: [
        { itemName: "Eggs (2 Dozen)" },
        { itemName: "Whole Wheat Bread (2 Loaves)" },
        { itemName: "Milk (1 Gallon)" },
        { itemName: "Kiwis" },
        { itemName: "Bananas" },
        { itemName: "Apples" },
      ],
    },
  ];

  const [listData, setListData] = useState(staticData);

  // Delete list item function
  const onDelete = (title) => {
    const toDeleteIndex = listData.findIndex((list) => list.title === title);
    listData.splice(toDeleteIndex, 1);
    setListData([...listData]);
  };

  if (listData.length === 0) {
    return (
      <View style={styles.shoppingListView}>
        <TouchableOpacity
          style={styles.buttonFinished}
          onPress={() => {
            navigation.navigate("Create new list");
          }}
        >
          <Text style={styles.buttonFinishedText}>Add a list...</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.shoppingListView}>
      {listData.map((shoppingItem) => {
        return (
          <View key={shoppingItem.title} style={styles.listRow}>
            <View style={styles.flexbox}>
              <Text style={styles.titlestyles}>{shoppingItem.title}</Text>
              <Text style={{ marginLeft: "auto" }}>
                {shoppingItem.dateCreated}
              </Text>
            </View>
            <View style={styles.flexbox}>
              <Text style={{ width: "80%" }}>
                {shoppingItem.items.map((item) => {
                  return (
                    <View key={item.itemName}>
                      <Text>{item.itemName}, </Text>
                    </View>
                  );
                })}
              </Text>
              <TouchableOpacity onPress={() => onDelete(shoppingItem.title)}>
                <Image
                  source={require("./../../assets/images/trash.png")}
                  style={styles.trashIcon}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.hr}></View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  listRow: {
    padding: 0,
  },
  buttonFinished: {
    backgroundColor: "green",
    borderRadius: 100,
    marginTop: "auto",
    marginBottom: "2rem",

    paddingVertical: "1rem",
    marginVertical: "1rem",
    marginHorizontal: "1.5rem",
  },
  buttonFinishedText: {
    color: "white",
    alignSelf: "center",
    fontSize: "1.1rem",
  },
  trashIcon: {
    height: 50,
    width: 44,
    marginLeft: "auto",
  },
  titlestyles: {
    fontWeight: 600,
    fontSize: 18,
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
  flexbox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  alignRight: {
    marginLeft: "auto",
  },
  deleteButton: {
    width: 50,
  },
});
