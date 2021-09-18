//
//  ShoppingListTwo
//  Greenhouse Designs 13-Sep-2021-145518
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class ShoppingListTwo extends React.Component {

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
						bottom: -3,
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
							source={require("./../../assets/images/shopping-list-background-mask.png")}
							style={styles.shoppingListBackgroundMaskImage}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 14,
							right: 16,
							top: 68,
							bottom: 117,
						}}>
						<View
							pointerEvents="box-none"
							style={{
								height: 18,
								marginLeft: 2,
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
								style={styles.nextText}>Next</Text>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								height: 28,
								marginLeft: 2,
								marginRight: 14,
								marginTop: 49,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Text
								style={styles.radioOptionHereText}>Eggs (2 Dozen)</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.xText}>x</Text>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								height: 28,
								marginLeft: 2,
								marginRight: 14,
								marginTop: 21,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Text
								style={styles.radioOptionHereTwoText}>Whole Wheat Bread (2 Loaves)</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.xSixText}>x</Text>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								height: 28,
								marginRight: 14,
								marginTop: 23,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Text
								style={styles.radioOptionHereThreeText}>Milk (1 Gallon)</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.xTwoText}>x</Text>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								height: 28,
								marginLeft: 2,
								marginRight: 14,
								marginTop: 17,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Text
								style={styles.radioOptionHereFourText}>Kiwis</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.xThreeText}>x</Text>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								height: 28,
								marginLeft: 2,
								marginRight: 14,
								marginTop: 20,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Text
								style={styles.radioOptionHereFiveText}>Bananas</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.xFourText}>x</Text>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								height: 28,
								marginLeft: 2,
								marginRight: 14,
								marginTop: 19,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Text
								style={styles.radioOptionHereSixText}>Apples</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.xFiveText}>x</Text>
						</View>
						<Text
							style={styles.radioOptionHereSevenText}>Enter Another Item...</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.iLoveItText}>Finish List</Text>
					</View>
				</View>
				<Text
					style={styles.userOptionsText}>Shopping List</Text>
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
		backgroundColor: "transparent",
		color: "rgb(93, 176, 117)",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	nextText: {
		backgroundColor: "transparent",
		color: "rgb(93, 176, 117)",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
	},
	radioOptionHereText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginTop: 8,
	},
	xText: {
		color: "rgb(95, 94, 95)",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	radioOptionHereTwoText: {
		color: "black",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginTop: 8,
	},
	xSixText: {
		color: "rgb(95, 94, 95)",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	radioOptionHereThreeText: {
		color: "black",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginTop: 8,
	},
	xTwoText: {
		backgroundColor: "transparent",
		color: "rgb(95, 94, 95)",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	radioOptionHereFourText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginTop: 8,
	},
	xThreeText: {
		backgroundColor: "transparent",
		color: "rgb(95, 94, 95)",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	radioOptionHereFiveText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginTop: 8,
	},
	xFourText: {
		backgroundColor: "transparent",
		color: "rgb(95, 94, 95)",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	radioOptionHereSixText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginTop: 8,
	},
	xFiveText: {
		backgroundColor: "transparent",
		color: "rgb(95, 94, 95)",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	radioOptionHereSevenText: {
		backgroundColor: "transparent",
		color: "rgb(189, 189, 189)",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		alignSelf: "flex-start",
		marginLeft: 2,
		marginTop: 35,
	},
	iLoveItText: {
		color: "white",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		alignSelf: "center",
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
