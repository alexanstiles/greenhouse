//
//  ShoppingList
//  Greenhouse Designs 13-Sep-2021-145518
//

import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  Button,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import EStyleSheet from "react-native-extended-stylesheet";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ShoppingList({ data, navigation }) {
  // const navigation = useNavigation();


  const getListData = async () => {
    try {
      return await AsyncStorage.getItem("my-lists");
    } catch (e) {
      return e;
    }
  };
  

  useEffect(() => {
    getListData().then((res) => {
      let parsed = JSON.parse(res);
      if(!parsed || parsed.length === undefined) {
        parsed = []
      }
      setListData(parsed);
    });
  }, []);

  const [listData, setListData] = useState([]);

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
            navigation.navigate("Create List");
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
          <TouchableOpacity
            onPress={() => navigation.navigate("Manage List", shoppingItem)}
          >
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
                      <View key={item.name}>
                        <Text>{item.name}, </Text>
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
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = EStyleSheet.create({
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
    fontSize: 20,
  },
  trashIcon: {
    height: 50,
    width: 44,
    marginLeft: "auto",
  },
  titlestyles: {
    fontWeight: "600",
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
