//
//  ShoppingList
//  Greenhouse Designs 13-Sep-2021-145518
//

import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ShoppingList({ route }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(route.params.items);
  }, []);

  function isExpired(shelfLife) {
    if (!shelfLife) {
      return <Text style={styles.maxWidth}>This item does not expire</Text>;
    }
    var currentDate = new Date();
    var prevDate = new Date(route.params.dateCreated);
    var difference_in_time = currentDate.getTime() - prevDate.getTime();
    var difference_in_days = difference_in_time / (1000 * 3600 * 24);
    let days_left = shelfLife - difference_in_days;
    let hours_left = Math.floor((days_left % 1) * 24);
    if (difference_in_days > shelfLife) {
      return <Text style={styles.expired}>This item has expired!</Text>;
    }
    return (
      <Text style={styles.maxWidth}>
        {" "}
        {Math.floor(days_left)} day(s), {hours_left} hour(s) left before
        expiration.
      </Text>
    );
  }

  function boolIsExpired(shelfLife) {
    var currentDate = new Date();
    var prevDate = new Date(route.params.dateCreated);
    var difference_in_time = currentDate.getTime() - prevDate.getTime();
    var difference_in_days = difference_in_time / (1000 * 3600 * 24);
    if (difference_in_days > shelfLife) {
      return true;
    } else {
      return false;
    }
  }

  const getWasteData = async () => {
    try {
      return await AsyncStorage.getItem("my-waste");
    } catch (e) {
      return e;
    }
  };

  const onTrash = async (index, shoppingItem) => {
    let newList = items.splice(index, 1);
    setItems(newList);

    // store info about wasted item
    try {
      const formatted = {
        name: shoppingItem.name,
        dateWasted: shoppingItem.shelfLife,
      };
      let storedItems = [];
      getWasteData().then((res) => {
        const parsed = JSON.parse(res);
        if (parsed !== "" && parsed) {
          storedItems = parsed;
        }
        storedItems.push(formatted);
        const stringItems = JSON.stringify(storedItems);
        AsyncStorage.setItem("my-waste", stringItems);
      });
    } catch (e) {
      console.log(e);
    }

    //update local storage with deleted item 
    // ADD CODE HERE ....
  };

  return (
    <View style={styles.shoppingListView}>
      <Text style={styles.listTitle}>{route.params.title}</Text>
      <Text style={styles.listsubheader}>
        Created on {new Date(route.params.dateCreated).toDateString()}
      </Text>
      {items.map((shoppingItem, index) => {
        return (
          <View key={shoppingItem.name} style={styles.listRow}>
            <View style={styles.hr}></View>
            <View style={styles.flexbox}>
              <Text style={{ fontWeight: "bold" }}>{shoppingItem.name}</Text>
            </View>
            <View style={{ marginTop: 20 }}>
              {isExpired(shoppingItem.shelfLife, shoppingItem.name)}
            </View>
            <View style={[styles.flexbox, styles.wasteIcons]}>
              <TouchableOpacity
                onPress={() => onTrash(index, shoppingItem)}
                style={styles.centerAlign}
              >
                <View style={styles.imageAlign}>
                  <Image
                    source={require("./../../assets/images/trash.png")}
                    style={styles.trashIcon}
                  />
                </View>
                <Text>Thrown out / Expired</Text>
              </TouchableOpacity>
              {!boolIsExpired(shoppingItem.shelfLife) && (
                <TouchableOpacity style={styles.centerAlign}>
                  <View style={styles.imageAlign}>
                    <Image
                      source={require("./../../assets/images/silverware.png")}
                      style={styles.silverwareIcon}
                    />
                  </View>
                  <Text>Consumed</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  imageAlign: {
    display: "flex",
    justifyContent: "center",
    height: 60,
  },
  listRow: {
    padding: 0,
  },
  centerAlign: {
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
  },
  maxWidth: {
    maxWidth: 250,
  },
  expired: {
    maxWidth: 250,
    color: "red",
    fontWeight: "bold",
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
    marginLeft: "auto",
  },
  listTitle: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  listsubheader: {
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
  },
});
