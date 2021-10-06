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


export default function CreateShoppingList({ data }) {

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
			marginLeft: 'auto',
			marginRight: '1rem'
		},
		deleteButtonText: {
		},
		textInputAddItem: {
			outlineWidth: 0,
		},
		buttonFinished: {
			backgroundColor: 'green',
			borderRadius: 100,
			marginTop: 'auto',
			marginBottom: '2rem',

			paddingVertical: '1rem',
			marginVertical: '1rem',
			marginHorizontal: '1.5rem'
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

	return (
		<View style={styles.container}>
			<Text style={styles.pageTitle}>Create List</Text>
			<FlatList
				data={shoppingData}
				renderItem={renderItem}
				ListFooterComponent={() => {
					return (
						<View>
							<TextInput
								style={[styles.item, styles.textInputAddItem]}
								placeholder="Enter another item"
							/>
						</View>
					)
				}}
			/>
			<TouchableOpacity style={styles.buttonFinished}>
				<Text style={styles.buttonFinishedText}>Finish List</Text>
			</TouchableOpacity>
		</View>
	)
}