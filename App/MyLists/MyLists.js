//
//  MyLists
//  Greenhouse Designs 13-Sep-2021-145518
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class MyLists extends React.Component {

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
							source={require("./../../assets/images/my-lists-background-mask.png")}
							style={styles.myListsBackgroundMaskImage}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 16,
							right: 16,
							top: 68,
							height: 474,
						}}>
						<View
							pointerEvents="box-none"
							style={{
								height: 18,
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
						</View>
						<Text
							style={styles.searchText}>Search</Text>
						<View
							pointerEvents="box-none"
							style={{
								height: 19,
								marginLeft: 54,
								marginRight: 12,
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
								height: 19,
								marginLeft: 54,
								marginRight: 12,
								marginTop: 32,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
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
								height: 19,
								marginLeft: 54,
								marginRight: 12,
								marginTop: 32,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
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
								marginRight: 12,
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
				</View>
				<Text
					style={styles.feedText}>My Lists</Text>
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
	},
	filterText: {
		color: "rgb(93, 176, 117)",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		backgroundColor: "transparent",
	},
	searchText: {
		color: "rgb(189, 189, 189)",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		marginLeft: 16,
		marginTop: 58,
	},
	headerText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	mAgoText: {
		backgroundColor: "transparent",
		color: "rgb(189, 189, 189)",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		marginTop: 2,
	},
	heLlWantToUseYourYachtAndIDonTWantThisThingSmellingLikeFishText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		alignSelf: "flex-end",
		width: 269,
		marginRight: 20,
		marginTop: 8,
	},
	headerTwoText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	mAgoTwoText: {
		color: "rgb(189, 189, 189)",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		backgroundColor: "transparent",
		marginTop: 2,
	},
	heLlWantToUseYourYachtAndIDonTWantThisThingSmellingLikeFishTwoText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		alignSelf: "flex-end",
		width: 269,
		marginRight: 20,
		marginTop: 8,
	},
	headerThreeText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	mAgoThreeText: {
		color: "rgb(189, 189, 189)",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		backgroundColor: "transparent",
		marginTop: 2,
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
		marginRight: 20,
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
		backgroundColor: "transparent",
		color: "black",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		alignSelf: "flex-end",
		width: 269,
		marginRight: 20,
		marginTop: 8,
	},
	feedText: {
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
