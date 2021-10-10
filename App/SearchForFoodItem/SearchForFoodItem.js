//
//  SearchForFoodItem
//  Greenhouse Designs 13-Sep-2021-145518
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React, { useRef, useEffect } from "react"
import { Image, StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput, Keyboard } from "react-native"
import EStyleSheet from 'react-native-extended-stylesheet';



export default function SearchForFoodItem(props) {

	const [text, setText] = React.useState("Useless Text")

	// const [searchResults, setSearchResults] = React.useState([])

	const styles = EStyleSheet.create({
		pageTitle: {
			fontSize: '2rem',
			textAlign: 'center',
			fontWeight: 'bold'
		},
		container: {
			flex: 1,
			flexDirection: 'column',
			fontSize: '1rem',
			marginHorizontal: '1rem',
		},
		item: {
			flex: 1,
			flexDirection: 'column',
			justifyContent: 'flex-start',

			paddingVertical: "1rem",

			borderBottomWidth: 1,
			borderBottomColor: 'lightgray',
		},
		itemTitle: {
			fontWeight: "bold"
		},
		containerImageItem: {
			height: "8rem",
			width: "8rem",
			alignSelf: "center"
		},
		imageItem: {
			width: "100%",
			height: "100%",
			resizeMode: "contain",
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
		buttonSelect: {
			backgroundColor: '#0071dbfa',
			borderRadius: 100,
			marginHorizontal: '2rem',

			paddingVertical: '1rem',
			marginVertical: '1rem',
			marginHorizontal: '1.5rem',
		},
		buttonSelectText: {
			color: 'white',
			alignSelf: 'center',
			fontSize: '1rem'
		}
	})

	const searchResults = [
		{ itemName: "Apple", image: require("./../../assets/images/apple.png") },
		{ itemName: "Bananas", image: require("./../../assets/images/banana.png") },
	];

	const ItemView = ({ item }) => {
		return (
			<View style={styles.item}>
				<Text style={styles.itemTitle}>{item.itemName}</ Text>
				<View style={styles.containerImageItem}>
					<Image style={styles.imageItem} source={item.image}></Image>
				</View>
				<TouchableOpacity style={styles.buttonSelect} onPress={() => alert('Hello, world!')}>
					<Text style={styles.buttonSelectText}>Select</Text>
				</TouchableOpacity>
			</View>
		)
	}

	const renderItem = ({ item }) => {
		return (
			<ItemView item={item}></ItemView>
		)
	}

	const handleTextChange = ({ target }) => {
		// Retrieve search results
		// Set search results

		// Bind search results to ItemViews, update on text change
	}

	const textInputSearchRef = useRef(null)

	useEffect(() => {
		setTimeout(() => textInputSearchRef.current.focus(), 100)
	}, []);

	return (
		<View style={styles.container}>
			<Text style={styles.pageTitle}>Create List</Text>
			<View>
				<TextInput
					style={styles.textInputSearch}
					placeholder="Search for an item"
					ref={textInputSearchRef}
				/>
			</View>
			<FlatList
				data={searchResults}
				renderItem={renderItem} />
		</View>
	)
}
