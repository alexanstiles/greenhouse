//
//  ShoppingList
//  Greenhouse Designs 13-Sep-2021-145518
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class ShoppingList extends React.Component {

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
				style={styles.shoppingListView}>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: 0,
						right: 0,
						top: 0,
						height: 815,
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
							source={require("./../../assets/images/shopping-list-background-mask-2.png")}
							style={styles.shoppingListBackgroundMaskImage}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 15,
							right: 15,
							top: 68,
							height: 333,
							alignItems: "flex-start",
						}}>
						<View
							pointerEvents="box-none"
							style={{
								alignSelf: "stretch",
								height: 18,
								marginLeft: 1,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Text
								style={styles.backText}>Back</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.nextText}></Text>
						</View>
						<Text
							style={styles.radioOptionHereText}>Eggs (2 Dozen)</Text>
						<Text
							style={styles.radioOptionHereTwoText}>Whole Wheat Bread (2 Loaves)</Text>
						<Text
							style={styles.radioOptionHereThreeText}>Milk (1 Gallon)</Text>
						<Text
							style={styles.radioOptionHereFourText}>Kiwis</Text>
						<Text
							style={styles.radioOptionHereFiveText}>Bananas</Text>
						<Text
							style={styles.radioOptionHereSixText}>Apples</Text>
					</View>
				</View>
				<Text
					style={styles.userOptionsText}>List 1</Text>
			</View>
	}
}

const styles = StyleSheet.create({
	shoppingListView: {
		backgroundColor: "white",
		flex: 1,
	},
	shoppingListBackgroundMaskImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 815,
	},
	backText: {
		color: "rgb(93, 176, 117)",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	nextText: {
		color: "rgb(93, 176, 117)",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		backgroundColor: "transparent",
	},
	radioOptionHereText: {
		color: "black",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 1,
		marginTop: 57,
	},
	radioOptionHereTwoText: {
		color: "black",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 1,
		marginTop: 31,
	},
	radioOptionHereThreeText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginTop: 32,
	},
	radioOptionHereFourText: {
		color: "black",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 1,
		marginTop: 28,
	},
	radioOptionHereFiveText: {
		color: "black",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 1,
		marginTop: 30,
	},
	radioOptionHereSixText: {
		color: "black",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 1,
		marginTop: 29,
	},
	userOptionsText: {
		color: "black",
		fontSize: 30,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		top: 60,
	},
})
