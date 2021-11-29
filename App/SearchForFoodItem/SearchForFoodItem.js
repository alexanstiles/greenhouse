//
//  SearchForFoodItem
//  Greenhouse Designs 13-Sep-2021-145518
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React, { useRef, useEffect, useState } from "react"
import { LogBox } from 'react-native';
import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
  Keyboard,
  Alert,
  Platform,
  ActivityIndicator
} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet"
import groceryService from "../../services/grocerySearch"

export default function SearchForFoodItem({ navigation, route }) {
  const [text, setText] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [groceryItems, setGroceryItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  LogBox.ignoreAllLogs() // Disables warning messages for demo purposes

  
  useEffect(() => {
    setTimeout(() => textInputSearchRef.current.focus(), 100);
  }, []);

  const styles = EStyleSheet.create({
    pageTitle: {
      fontSize: "2rem",
      textAlign: "center",
      fontWeight: "bold",
    },
    container: {
      flex: 1,
      flexDirection: "column",
      fontSize: "1rem",
      marginHorizontal: "1rem",
    },
    item: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "flex-start",

      paddingVertical: "1rem",

      borderBottomWidth: 1,
      borderBottomColor: "lightgray",
    },
    itemTitle: {
      fontWeight: "bold",
    },
    containerImageItem: {
      height: "8rem",
      width: "8rem",
      alignSelf: "center",
    },
    imageItem: {
      width: "100%",
      height: "100%",
      resizeMode: "contain",
    },
    textInputSearch: {
      borderWidth: 3,
      borderColor: "lightgray",
      borderRadius: 100,
      marginVertical: "1rem",
      marginHorizontal: "1.5rem",
      paddingVertical: "1rem",
      paddingHorizontal: "1rem",
    },
    buttonSelect: {
      backgroundColor: "#0071dbfa",
      borderRadius: 100,
      marginHorizontal: "2rem",

      paddingVertical: "1rem",
      marginVertical: "0.5rem",
      marginHorizontal: "1.5rem",
    },
    buttonSelectText: {
      color: "white",
      alignSelf: "center",
      fontSize: "1rem",
    },
    loadingAnimationContainer: {
      marginTop: "24rem",
      alignSelf: "center",
    },
    loadingAnimation: {
      width: 100,
      height: 100
    }
  });

  const selectItem = (item) => {
    const message = "Item selected: " + item["name"];
    if (Platform.OS === "web") {
      alert(message);
    } else {
      // Device is iOS or Android
      Alert.alert(message);
    }

    navigation.navigate({
      name: "Create New List",
      params: { itemName: item["name"], itemShelf: item.shelfLife },
    });
  };

  const ItemView = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.itemTitle}>{item.name}</Text>
        <Text>Shelf Life: {item.shelfLife} days</Text>
        <View style={styles.containerImageItem}>
          <Image style={styles.imageItem} source={{ uri: item.image }}></Image>
        </View>
        <TouchableOpacity
          style={styles.buttonSelect}
          onPress={() => selectItem(item)}
        >
          <Text style={styles.buttonSelectText}>Select</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderItem = ({ item }) => {
    return <ItemView item={item}></ItemView>;
  };

  const handleTextChange = async (text) => {
    // Retrieve search results
    // Set search results
    setText(text);
    if (text.length >= 3) {
      setIsLoading(true)
      groceryService.getGroceryItems(text).then(items => {
        setGroceryItems(items)
        setIsLoading(false)
      })
    }
    // Bind search results to ItemViews, update on text change
  };

  const textInputSearchRef = useRef(null);

  const SearchResults = (props) => {
    if (text.length < 3) {
      return <Text style={{fontWeight: "bold", alignSelf: "center", marginTop: 16}}>No results for current search</Text>
    } else if (isLoading) {
      return (
        <View style={styles.loadingAnimationContainer}>
          <ActivityIndicator size="large" />
        </View>
      )
    }
    return (
      <View>
        <FlatList data={groceryItems} renderItem={renderItem} />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.textInputSearch}
          onChangeText={handleTextChange}
          value={text}
          placeholder="Enter an item name..."
          ref={textInputSearchRef}
        />
      </View>
      <SearchResults />
    </View>
  )
}
