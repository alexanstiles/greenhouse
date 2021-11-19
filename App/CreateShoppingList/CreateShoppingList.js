//
//  ShoppingListTwo
//  Greenhouse Designs 13-Sep-2021-145518
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React, { useState, useEffect, useRef } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
  Keyboard,
  SafeAreaView,
  Alert,
} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

/* 
TODO: Fix TextInput error when opening this page on Android:

Invariant Violation: "outlineWidth" is not a valid style property.
StyleSheet textInputAddItem: {
  "outlineWidth": 0
}

*/
export default function CreateShoppingList({ route }) {
  const styles = EStyleSheet.create({
    // TODO: Change the font used
    container: {
      flex: 1,
      flexDirection: "column",
      fontSize: "1rem",
      marginHorizontal: "1rem",
    },
    pageTitle: {
      fontSize: "2rem",
      textAlign: "center",
      fontWeight: "bold",
    },
    item: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "flex-start",
      paddingVertical: "1rem",

      borderBottomWidth: 1,
      borderBottomColor: "lightgray",
    },
    itemTitle: {},
    buttonDelete: {
      position: "absolute",
      right: "0rem",

      padding: "0.5rem",
      alignSelf: "center",
      alignItems: "center",
    },
    buttonDeleteText: {},
    textInputAddItem: {
      color: "gray",
      borderWidth: 3,
      borderColor: "lightgray",
      borderRadius: 100,
      marginVertical: "1rem",
      marginHorizontal: "1.5rem",
      paddingVertical: "1rem",
      paddingHorizontal: "1rem",
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
    input: {
      fontSize: 24,
      margin: "auto",
      marginTop: 20,
      backgroundColor: "white",
      borderRadius: 8,
      padding: 20,
    },
  });

  // TODO: Items in the array should all have an ID property assigned to them. Refactor the deleteItem() as needed.
  var startingItems = [];

  const [items, setItems] = useState([...startingItems]);
  const [title, setTitle] = useState(null);
  const navigation = useNavigation(); // useNavigation hook

  useEffect(() => {
    if (route.params?.itemName) {
      items.push({ name: route.params.itemName });
      setItems([...items]);
    }
  }, [route.params?.itemName]);

  const deleteItem = (name) => {
    const i = items.findIndex((item) => item.name === name);
    items.splice(i, 1);
    setItems([...items]);
  };


  // custom alert
  const customAlert = (title, message, destination = false) =>
    Alert.alert(title, message, [
      { text: "OK", onPress: () => destination? navigation.navigate(destination): null },
    ]);

  const ItemView = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.itemTitle}>{item.name}</Text>
        <TouchableOpacity
          style={styles.buttonDelete}
          onPress={() => deleteItem(item.name)}
        >
          <Text style={styles.buttonDeleteText}>X</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderItem = ({ item }) => {
    return <ItemView item={item}></ItemView>;
  };

  const getListData = async () => {
    try {
      return await AsyncStorage.getItem('my-list')
    } catch (e) {
      return e
    }
  }

  const listToMemory = async () => {
    if (!title || items.length === 0) {
      customAlert(
        "Fields required",
        "Please make sure you have entered a title and selected items for your list"
      );
    } else {
      try {
        const formatted = {
          title: title,
          dateCreated: new Date().toDateString(),
          items: items,
        };
        let firstSet = false
        let storedItems = []
        getListData().then((res) => {
          const parsed = JSON.parse(res)
          if(parsed !== "" && parsed) {
            storedItems = parsed
          }
          storedItems.push(formatted)
        })
        await AsyncStorage.setItem("my-lists", storedItems);
        customAlert("List saved!", 'Click OK to visit your lists', "My Lists");
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={(e) => setTitle(e)}
          value={title}
          placeholder="Enter title here..."
        />
      </SafeAreaView>
      <FlatList data={items} renderItem={renderItem} />
      <TouchableOpacity
        style={styles.buttonFinished}
        onPress={() => {
          navigation.navigate("Search Item");
        }}
      >
        <Text style={styles.buttonFinishedText}>Open Search Page</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonFinished}
        onPress={() => listToMemory()}
      >
        <Text style={styles.buttonFinishedText}>Finish List</Text>
      </TouchableOpacity>
    </View>
  );
}
