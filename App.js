//
//  App.js
//  Greenhouse Designs 13-Sep-2021-145518
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import * as Font from "expo-font"
import HomePage from "./App/HomePage/HomePage"
import MyLists from "./App/MyLists/MyLists"
import MyListsTwo from "./App/MyListsTwo/MyListsTwo"
import PopUpToAddItem from "./App/PopUpToAddItem/PopUpToAddItem"
import React from "react"
import SearchForFoodItem from "./App/SearchForFoodItem/SearchForFoodItem"
import ShoppingList from "./App/ShoppingList/ShoppingList"
import ShoppingListTwo from "./App/ShoppingListTwo/ShoppingListTwo"
import { AppLoading, DangerZone } from "expo"
import { createAppContainer, createStackNavigator } from "react-navigation"

const PushRouteOne = createStackNavigator({
	ShoppingList: {
		screen: ShoppingList,
	},
}, {
	initialRouteName: "ShoppingList",
})

const RootNavigator = createStackNavigator({
	PushRouteOne: {
		screen: PushRouteOne,
	},
}, {
	mode: "modal",
	headerMode: "none",
	initialRouteName: "PushRouteOne",
})

const AppContainer = createAppContainer(RootNavigator)



export default class App extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			fontsReady: false,
		}
	}

	componentDidMount() {
	
		// THE BELOW WAS CRASHING STUFF

		// this.initProjectFonts()
	}

	async initProjectFonts() {
	
		await Font.loadAsync({
			".AppleSystemUIFont": require("./assets/fonts/SFNS.ttf"),
		})
		this.setState({
			fontsReady: true,
		})
	}

	render() {
	
		// if (!this.state.fontsReady) { return (<AppLoading />); }
		return <AppContainer/>
	}
}
