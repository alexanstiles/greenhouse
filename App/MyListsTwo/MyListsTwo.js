//
//  MyListsTwo
//  Greenhouse Designs 13-Sep-2021-145518
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class MyListsTwo extends React.Component {

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
				style={styles.myListsView}>
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
							source={require("./../../assets/images/my-lists-background-mask-2.png")}
							style={styles.myListsBackgroundMaskImage}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 16,
							right: 15,
							top: 67,
							height: 475,
						}}>
						<View
							pointerEvents="box-none"
							style={{
								height: 19,
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
								style={styles.filterText}>Filter</Text>
							<Text
								style={styles.nextText}></Text>
						</View>
						<Text
							style={styles.searchText}>Search</Text>
						<View
							pointerEvents="box-none"
							style={{
								height: 19,
								marginLeft: 54,
								marginRight: 13,
								marginTop: 40,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Text
								style={styles.headerText}>List 1</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.mAgoText}>10/27/2021</Text>
						</View>
						<Text
							style={styles.heLlWantToUseYourYachtAndIDonTWantThisThingSmellingLikeFishText}>Banana, Whole Wheat Bread, Milk, Kiwis, Apples</Text>
						<View
							pointerEvents="box-none"
							style={{
								height: 27,
								marginRight: 13,
								marginTop: 24,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Text
								style={styles.radioOptionHereFourText}>Kiwis</Text>
							<Text
								style={styles.headerTwoText}>List 2</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.mAgoTwoText}>10/5/2021</Text>
						</View>
						<Text
							style={styles.heLlWantToUseYourYachtAndIDonTWantThisThingSmellingLikeFishTwoText}>Potato Chips, Sprite, Chicken Breast, Buffalo Hot Sauce</Text>
						<View
							pointerEvents="box-none"
							style={{
								height: 25,
								marginRight: 13,
								marginTop: 26,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Text
								style={styles.radioOptionHereSixText}>Apples</Text>
							<Text
								style={styles.headerThreeText}>List 3</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.mAgoThreeText}>9/30/2021</Text>
						</View>
						<Text
							style={styles.heLlWantToUseYourYachtAndIDonTWantThisThingSmellingLikeFishThreeText}>All-Purpose Flour, Table Salt, Granulated Sugar, Baking Soda</Text>
						<View
							pointerEvents="box-none"
							style={{
								height: 19,
								marginLeft: 54,
								marginRight: 13,
								marginTop: 32,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Text
								style={styles.headerFourText}>List 4</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.mAgoFourText}>9/15/2021</Text>
						</View>
						<Text
							style={styles.heLlWantToUseYourYachtAndIDonTWantThisThingSmellingLikeFishFourText}>White Onion, Salmon Filet, Mayonnaise, Romaine Lettuce, Spinach</Text>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 15,
							width: 226,
							top: 67,
							height: 192,
							alignItems: "flex-start",
						}}>
						<Text
							style={styles.backTwoText}>Back</Text>
						<Text
							style={styles.radioOptionHereText}>Eggs (2 Dozen)</Text>
						<Text
							style={styles.radioOptionHereTwoText}>Whole Wheat Bread (2 Loaves)</Text>
						<Text
							style={styles.radioOptionHereThreeText}>Milk (1 Gallon)</Text>
					</View>
					<Text
						style={styles.radioOptionHereFiveText}>Bananas</Text>
				</View>
				<Text
					style={styles.feedText}>My Lists</Text>
				<Text
					style={styles.userOptionsText}>List 1</Text>
			</View>
	}
}

const styles = StyleSheet.create({
	myListsView: {
		backgroundColor: "white",
		flex: 1,
	},
	myListsBackgroundMaskImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
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
		marginTop: 1,
	},
	filterText: {
		color: "rgb(93, 176, 117)",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		backgroundColor: "transparent",
		marginRight: 1,
		marginTop: 1,
	},
	nextText: {
		color: "rgb(93, 176, 117)",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		backgroundColor: "transparent",
	},
	searchText: {
		backgroundColor: "transparent",
		color: "rgb(189, 189, 189)",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		alignSelf: "flex-start",
		marginLeft: 16,
		marginTop: 58,
	},
	headerText: {
		color: "black",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	mAgoText: {
		color: "rgb(189, 189, 189)",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		backgroundColor: "transparent",
		marginTop: 2,
	},
	heLlWantToUseYourYachtAndIDonTWantThisThingSmellingLikeFishText: {
		color: "black",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		width: 269,
		marginRight: 21,
		marginTop: 8,
	},
	radioOptionHereFourText: {
		color: "black",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	headerTwoText: {
		color: "black",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 16,
		marginTop: 8,
	},
	mAgoTwoText: {
		color: "rgb(189, 189, 189)",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		backgroundColor: "transparent",
		marginTop: 10,
	},
	heLlWantToUseYourYachtAndIDonTWantThisThingSmellingLikeFishTwoText: {
		color: "black",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		width: 269,
		marginRight: 21,
		marginTop: 8,
	},
	radioOptionHereSixText: {
		color: "black",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	headerThreeText: {
		color: "black",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 4,
		marginTop: 6,
	},
	mAgoThreeText: {
		color: "rgb(189, 189, 189)",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		backgroundColor: "transparent",
		marginTop: 8,
	},
	heLlWantToUseYourYachtAndIDonTWantThisThingSmellingLikeFishThreeText: {
		color: "black",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		width: 269,
		marginRight: 21,
		marginTop: 8,
	},
	headerFourText: {
		color: "black",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	mAgoFourText: {
		color: "rgb(189, 189, 189)",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		backgroundColor: "transparent",
		marginTop: 2,
	},
	heLlWantToUseYourYachtAndIDonTWantThisThingSmellingLikeFishFourText: {
		color: "black",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		width: 269,
		marginRight: 21,
		marginTop: 8,
	},
	backTwoText: {
		color: "rgb(93, 176, 117)",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 1,
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
		color: "black",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginTop: 32,
	},
	radioOptionHereFiveText: {
		color: "black",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		left: 16,
		top: 335,
	},
	feedText: {
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
	userOptionsText: {
		color: "black",
		fontSize: 30,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		top: 59,
	},
})
