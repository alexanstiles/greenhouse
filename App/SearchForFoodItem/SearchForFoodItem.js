//
//  SearchForFoodItem
//  Greenhouse Designs 13-Sep-2021-145518
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React, {useRef, useEffect} from "react"
import { Image, StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput, Keyboard } from "react-native"
import EStyleSheet from 'react-native-extended-stylesheet';



export default function SearchForFoodItem(props) {

	const [text, setText] = React.useState("Useless Text")

	// const [searchResults, setSearchResults] = React.useState([])

	const styles = EStyleSheet.create({
		container: {
			flex: 1,
			flexDirection: 'column',
			fontSize: '1rem',
			marginHorizontal: '1rem',
		},
		item: {
			flex: 1,
			flexDirection: 'row',
			justifyContent: 'flex-start',
			paddingVertical: '1rem',

			borderBottomWidth: 1,
			borderBottomColor: 'lightgray',
		},
		textInputSearch: {
			borderWidth: 3,
			borderColor: 'lightgray',
			borderRadius: 100,
			marginVertical: '1rem',
			marginHorizontal: '1.5rem',
			paddingVertical: '1rem',
			paddingHorizontal: '1rem'
		},
		pageTitle: {
			fontSize: '2rem',
			textAlign: 'center',
			fontWeight: 'bold'
		},
	})

	const searchResults = [
		{ itemName: "Bananas" },
		{ itemName: "Bananas (1 dozen)" },
		{ itemName: "Banana mashed" },
		{ itemName: "Banana sliced" },
	];

	const ItemView = ({ item }) => {
		return (
			<View style={styles.item}>
				<Text style={styles.itemTitle}>{item.itemName}</ Text>
				<TouchableOpacity style={styles.deleteButton} onPress={() => alert('Hello, world!')}>
				</TouchableOpacity>
			</View>
		)
	}

	const renderItem = ({ item }) => {
		return (
			<ItemView item={item}></ItemView>
		)
	}

	const handleTextChange = ({target}) => {
		// Retrieve search results
		// Set search results

		// Bind search results to ItemViews, update on text change
	}

	return (
		<View style={styles.container}>
			<Text style={styles.pageTitle}>Create List</Text>
			<View>
				<TextInput
					style={styles.textInputSearch}
					placeholder="Search for an item"
					
				/>
			</View>
			<FlatList
				data={searchResults}
				renderItem={renderItem} />
		</View>
	)
}
