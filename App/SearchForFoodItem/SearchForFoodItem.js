//
//  SearchForFoodItem
//  Greenhouse Designs 13-Sep-2021-145518
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React, { useRef, useEffect, useState } from "react"
import { Image, StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput, Keyboard } from "react-native"
import EStyleSheet from 'react-native-extended-stylesheet';
import DateTimePicker from '@react-native-community/datetimepicker';
import imageService from '../../services/imageSearch'
import groceryService from '../../services/grocerySearch'

const searchResults = [
	{ itemName: "Apple", image: require("./../../assets/images/apple.png") },
	{ itemName: "Bananas", image: require("./../../assets/images/banana.png") },
	{ itenName: "Oranges", image: require("./../../assets/images/orange.png") }
];

export default function SearchForFoodItem(props) {

	const [text, setText] = useState("Useless Text")
	const [showDatePicker, setShowDatePicker] = useState(false)
	const [expireDate, setExpireDate] = useState(new Date())

	useEffect(() => {
		setTimeout(() => textInputSearchRef.current.focus(), 100)
	}, [])

	const query = "banana"
	imageService.getImage(query).then((imageUrl) => {
    	console.log("🚀 ~ file: SearchForFoodItem.js ~ line 33 ~ imageService.getImage ~ imageUrl", imageUrl)
	})
	groceryService.getGroceryItems(query).then((matches) => {
        console.log("🚀 ~ file: SearchForFoodItem.js ~ line 36 ~ groceryService.getGroceryItems ~ items", matches)
		groceryService.getShelfLife(matches[0].id).then((shelfLife) => {
            console.log("🚀 ~ file: SearchForFoodItem.js ~ line 39 ~ groceryService.getShelfLife ~ shelfLife", shelfLife)
		})
	})

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

	const popupDatePicker = () => {

	}

	const ItemView = ({ item }) => {
		return (
			<View style={styles.item}>
				<Text style={styles.itemTitle}>{item.itemName}</ Text>
				<View style={styles.containerImageItem}>
					<Image style={styles.imageItem} source={item.image}></Image>
				</View>
				<TouchableOpacity style={styles.buttonSelect} onPress={() => setShowDatePicker(!showDatePicker)}>
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

	const handleDateSelect = (event, selectedDate) => {
		const date = selectedDate || expireDate
		setExpireDate(date)
		setShowDatePicker(false)
		console.log("🚀 ~ file: SearchForFoodItem.js ~ line 126 ~ handleDateSelect ~ expireDate", date)
	}

	const textInputSearchRef = useRef(null)

	return (
		<View style={styles.container}>
			<View>
				<TextInput
					style={styles.textInputSearch}
					placeholder="Search for an item (feature not yet available)"
					ref={textInputSearchRef}
				/>
			</View>
			<FlatList
				data={searchResults}
				renderItem={renderItem} />
			{showDatePicker && (
				<DateTimePicker
					value={expireDate}
					mode="date"
					is24Hour={true}
					display="default"
					onChange={handleDateSelect}
				/>
			)}
		</View>
	)
}
