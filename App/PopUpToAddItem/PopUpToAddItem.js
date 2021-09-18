//
//  PopUpToAddItem
//  Greenhouse Designs 13-Sep-2021-145518
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class PopUpToAddItem extends React.Component {

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
				style={styles.popUpToAddItemView}>
				<View
					style={styles.bgView}/>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						alignSelf: "center",
						width: 327,
						top: 16,
						height: 260,
						alignItems: "center",
					}}>
					<Image
						source={require("./../../assets/images/header-elements.png")}
						style={styles.headerElementsImage}/>
					<Text
						style={styles.banana1CtText}>Banana (1 Ct)</Text>
					<View
						style={styles.actionsView}>
						<View
							style={styles.buttonPrimaryView}>
							<Text
								style={styles.clickMeText}>Add To List</Text>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.expiresIn2WeeksText}>Expires in 2 Weeks</Text>
					</View>
				</View>
				<Image
					source={require("./../../assets/images/banana-free-download-png-1.png")}
					style={styles.bananaFreeDownloadPng1Image}/>
			</View>
	}
}

const styles = StyleSheet.create({
	popUpToAddItemView: {
		backgroundColor: "white",
		flex: 1,
	},
	bgView: {
		backgroundColor: "white",
		shadowColor: "rgba(0, 0, 0, 0.25)",
		shadowRadius: 20,
		shadowOpacity: 1,
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 295,
	},
	headerElementsImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 32,
		height: 4,
	},
	banana1CtText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	actionsView: {
		backgroundColor: "transparent",
		width: 327,
		height: 86,
		marginTop: 142,
	},
	buttonPrimaryView: {
		backgroundColor: "rgb(93, 176, 117)",
		height: 51,
		justifyContent: "center",
		alignItems: "center",
	},
	clickMeText: {
		backgroundColor: "transparent",
		color: "white",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	expiresIn2WeeksText: {
		backgroundColor: "transparent",
		color: "rgb(93, 176, 117)",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		marginLeft: 95,
		marginRight: 95,
		marginBottom: 1,
	},
	bananaFreeDownloadPng1Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 155,
		top: 46,
		height: 152,
	},
})
