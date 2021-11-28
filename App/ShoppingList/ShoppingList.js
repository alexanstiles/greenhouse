//
//  ShoppingList
//  Greenhouse Designs 13-Sep-2021-145518
//

import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function ShoppingList({ route }) {
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
    if(difference_in_days > shelfLife) {
      return true
    } else {
      return false
    }
  }

  return (
    <View style={styles.shoppingListView}>
      <Text style={styles.listTitle}>{route.params.title}</Text>
      <Text style={styles.listsubheader}>Created on {route.params.dateCreated}</Text>
      {route.params.items.map((shoppingItem) => {
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
              <View style={styles.centerAlign}>
                <View style={styles.imageAlign}>
                  <Image
                    source={require("./../../assets/images/trash.png")}
                    style={styles.trashIcon}
                  />
                </View>
                <Text>Thrown out / Expired</Text>
              </View>
              {!boolIsExpired(shoppingItem.shelfLife) && 
              <View style={styles.centerAlign}>
                <View style={styles.imageAlign}>
                  <Image
                    source={require("./../../assets/images/silverware.png")}
                    style={styles.silverwareIcon}
                  />
                </View>
                <Text>Consumed</Text>
              </View>
              }
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
    justifyContent: 'center',
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
    fontWeight: 'bold',
    textAlign: "center",
  },
  listsubheader: {
    fontSize: 18,
    fontWeight: '400',
    textAlign: "center",
  },
});
