//
//  ShoppingListTwo
//  Greenhouse Designs 13-Sep-2021-145518
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput } from "react-native"
import EStyleSheet from 'react-native-extended-stylesheet';
import { useNavigation } from "@react-navigation/native";

/* 
TODO: Fix TextInput error when opening this page on Android:

Invariant Violation: "outlineWidth" is not a valid style property.
StyleSheet textInputAddItem: {
  "outlineWidth": 0
}

*/
export default function CreateShoppingList(props) {

	const styles = EStyleSheet.create({
		// TODO: Change the font used
		container: {
			flex: 1,
			flexDirection: 'column',
			fontSize: '1rem',
			marginHorizontal: '1rem',
		},
		pageTitle: {
			fontSize: '2rem',
			textAlign: 'center',
			fontWeight: 'bold'
		},
		item: {
			flex: 1,
			flexDirection: 'row',
			justifyContent: 'flex-start',
			paddingVertical: '1rem',

			borderBottomWidth: 1,
			borderBottomColor: 'lightgray',
		},
		itemTitle: {
		},
		deleteButton: {
			position: 'absolute',
			right: '0rem',

			padding: '1rem',
			alignSelf:'center'
		},
		deleteButtonText: {
			textAlignVertical: 'center',
		},
		textInputAddItem: {
			borderWidth: 3,
			borderColor: 'lightgray',
			borderRadius: 100,
			marginVertical: '1rem',
			marginHorizontal: '1.5rem',
			paddingVertical: '1rem',
			paddingHorizontal: '1rem'
		},
		buttonFinished: {
			backgroundColor: 'green',
			borderRadius: 100,
			marginTop: 'auto',
			marginBottom: '2rem',

			paddingVertical: '1rem',
			marginVertical: '1rem',
			marginHorizontal: '1.5rem',

		},
		buttonFinishedText: {
			color: 'white',
			alignSelf: 'center',
			fontSize: '1.1rem'
		}
	});

	const shoppingData = [
		{ itemName: "Eggs (2 Dozen)" },
		{ itemName: "Whole Wheat Bread (2 Loaves)" },
		{ itemName: "Milk (1 Gallon)" },
		{ itemName: "Kiwis" },
		{ itemName: "Bananas" },
		{ itemName: "Apples" },
	];
	console.log(shoppingData)

	const ItemView = ({ item }) => {
		return (
			<View style={styles.item}>
				<Text style={styles.itemTitle}>{item.itemName}</ Text>
				<TouchableOpacity style={styles.deleteButton} onPress={() => alert('Hello, world!')}>
					<Text style={styles.deleteButtonText}>X</Text>
				</TouchableOpacity>
			</View>
		)
	}

	const renderItem = ({ item }) => {
		return (
			<ItemView item={item}></ItemView>
		)
	}

	const navigation = useNavigation(); // useNavigation hook

	return (
		<View style={styles.container}>
			<Text style={styles.pageTitle}>Create List</Text>
			<View>
				<TouchableOpacity>
					<TextInput
						style={styles.textInputAddItem}
						placeholder="Search for an item"
					/>
				</TouchableOpacity>
			</View>
			<FlatList
				data={shoppingData}
				renderItem={renderItem}
			/>
			<TouchableOpacity style={styles.buttonFinished}>
				<Text style={styles.buttonFinishedText}>Open Search Page</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.buttonFinished} onPress={() => alert('Hello, world!')}>
				<Text style={styles.buttonFinishedText}>Finish List</Text>
			</TouchableOpacity>
		</View>
	)
}