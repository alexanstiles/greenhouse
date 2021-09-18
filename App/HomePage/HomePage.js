//
//  HomePage
//  Greenhouse Designs 13-Sep-2021-145518
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class HomePage extends React.Component {

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
				style={styles.homePageView}>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: 0,
						right: 0,
						top: 0,
						bottom: -1,
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
							source={require("./../../assets/images/home-page-background-mask.png")}
							style={styles.homePageBackgroundMaskImage}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 16,
							right: 71,
							top: 68,
							bottom: 108,
							alignItems: "flex-start",
						}}>
						<Text
							style={styles.backText}></Text>
						<View
							pointerEvents="box-none"
							style={{
								alignSelf: "stretch",
								height: 27,
								marginLeft: 53,
								marginTop: 49,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Text
								style={styles.body1Text}>Food Waste</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.body1TwoText}>in lbs</Text>
						</View>
						<Text
							style={styles.body2Text}>June-July</Text>
						<Text
							style={styles.textText}>70%</Text>
						<Text
							style={styles.spentText}>70% spent</Text>
						<Text
							style={styles.body1ThreeText}>Food Waste by Item</Text>
						<Text
							style={styles.buyLessOfTheseText}>Buy Less of These</Text>
						<Text
							style={styles.textThreeText}>10%</Text>
						<Text
							style={styles.textTwoText}>10%</Text>
						<Text
							style={styles.textFourText}>70%</Text>
						<Text
							style={styles.textFiveText}>10%</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.captionText}>Fish</Text>
						<Text
							style={styles.captionThreeText}>Milk</Text>
					</View>
				</View>
				<Text
					style={styles.insightsText}>GreenHouse</Text>
			</View>
	}
}

const styles = StyleSheet.create({
	homePageView: {
		backgroundColor: "white",
		flex: 1,
	},
	homePageBackgroundMaskImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: 813,
	},
	backText: {
		backgroundColor: "transparent",
		color: "rgb(93, 176, 117)",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	body1Text: {
		backgroundColor: "transparent",
		color: "rgb(38, 50, 56)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 27,
		letterSpacing: 0.5,
	},
	body1TwoText: {
		backgroundColor: "transparent",
		color: "rgb(93, 176, 117)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		lineHeight: 27,
		letterSpacing: 0.5,
	},
	body2Text: {
		backgroundColor: "transparent",
		color: "rgb(96, 125, 139)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 23,
		letterSpacing: 0.28,
		marginLeft: 53,
	},
	textText: {
		color: "rgb(93, 176, 117)",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		alignSelf: "center",
		marginTop: 27,
	},
	spentText: {
		backgroundColor: "transparent",
		color: "rgb(189, 189, 189)",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		alignSelf: "center",
		width: 50,
		marginTop: 9,
	},
	body1ThreeText: {
		color: "rgb(38, 50, 56)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 27,
		letterSpacing: 0.5,
		backgroundColor: "transparent",
		marginLeft: 18,
		marginTop: 73,
	},
	buyLessOfTheseText: {
		color: "black",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "stretch",
		marginRight: 99,
		marginTop: 8,
	},
	textThreeText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		alignSelf: "flex-end",
		marginRight: 58,
		marginTop: 56,
	},
	textTwoText: {
		color: "white",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		marginRight: 19,
		marginTop: 26,
	},
	textFourText: {
		color: "white",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		marginLeft: 106,
		marginTop: 22,
	},
	textFiveText: {
		color: "white",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		marginRight: 22,
		marginTop: 1,
	},
	captionText: {
		color: "rgb(38, 50, 56)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 18,
		letterSpacing: 0.45,
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		marginRight: 19,
	},
	captionThreeText: {
		color: "rgb(38, 50, 56)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 18,
		letterSpacing: 0.45,
		backgroundColor: "transparent",
		marginLeft: 53,
	},
	insightsText: {
		color: "rgb(75, 148, 96)",
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
