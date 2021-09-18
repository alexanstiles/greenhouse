//
//  SearchForFoodItem
//  Greenhouse Designs 13-Sep-2021-145518
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class SearchForFoodItem extends React.Component {

	static navigationOptions = ({ navigation }) => {
	
		const { params = {} } = navigation.state
		return {
				header: null,
				headerLeft: null,
				headerRight: null,
			}
	}

	constructor(props) {
		super(props)
	}

	componentDidMount() {
	
	}

	render() {
	
		return <View
				style={styles.searchForFoodItemView}>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: 0,
						right: 0,
						top: 0,
						height: 813,
					}}>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 0,
							right: 0,
							top: 0,
							bottom: 0,
							justifyContent: "center",
						}}>
						<Image
							source={require("./../../assets/images/search-for-food-item-background-mask.png")}
							style={styles.searchForFoodItemBackgroundMaskImage}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 16,
							width: 126,
							top: 68,
							height: 258,
							alignItems: "flex-start",
						}}>
						<Text
							style={styles.backText}>Back</Text>
						<Text
							style={styles.searchText}>Bananas</Text>
						<Text
							style={styles.searchResultText}>Banana (1 Ct)</Text>
						<Text
							style={styles.searchResultTwoText}>Bananas (6 Ct)</Text>
						<Text
							style={styles.searchResultThreeText}>Dried Bananas</Text>
					</View>
				</View>
				<Text
					style={styles.contentText}>Search</Text>
			</View>
	}
}

const styles = StyleSheet.create({
	searchForFoodItemView: {
		backgroundColor: "white",
		flex: 1,
	},
	searchForFoodItemBackgroundMaskImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: 813,
	},
	backText: {
		color: "rgb(93, 176, 117)",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	searchText: {
		color: "black",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 16,
		marginTop: 58,
	},
	searchResultText: {
		color: "black",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 17,
		marginTop: 48,
	},
	searchResultTwoText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 17,
		marginTop: 31,
	},
	searchResultThreeText: {
		color: "black",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 17,
		marginTop: 31,
	},
	contentText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 30,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		position: "absolute",
		alignSelf: "center",
		top: 60,
	},
})
