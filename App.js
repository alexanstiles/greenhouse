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
import CreateShoppingList from "./App/CreateShoppingList/CreateShoppingList"
import { AppLoading, DangerZone } from "expo"
import { createAppContainer, createStackNavigator, StackRouter } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import { AntDesign } from '@expo/vector-icons'
import {Ionicons} from '@expo/vector-icons'

import EStyleSheet from 'react-native-extended-stylesheet';

// const PushRouteOne = createBottomTabNavigator({
// 	HomePage: {
// 		screen: HomePage,
// 	},
// }, {
// 	initialRouteName: "HomePage",
// })

// const RootNavigator = createStackNavigator({
// 	PushRouteOne: {
// 		screen: PushRouteOne,
// 	},
// }, {
// 	mode: "modal",
// 	headerMode: "none",
// 	initialRouteName: "PushRouteOne",
// })

const rootStack = createBottomTabNavigator()

EStyleSheet.build() // Should be executed in App.js so that the EStyleSheet library functions properly

// const AppContainer = createAppContainer(RootNavigator)



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
		return (
			<NavigationContainer>
				<rootStack.Navigator
					screenOptions={({route}) => ({
						tabBarIcon: ({ focused, color, size }) => {
							let iconName
							if (route.name === "Home") {
								iconName = "home"
							}
							else if (route.name === "Shopping List") {
								iconName = "shoppingcart"
							}
							else if (route.name === "My Lists") {
								return <Ionicons name="list" size={size} color={color} />
							}
							return <AntDesign name={iconName} size={size} color={color} />
						},
						"tabBarActiveTintColor": "green",
					})}
					initialRouteName="Home">
					<rootStack.Screen name="Home" component={HomePage} />
					<rootStack.Screen name="My Lists" component={MyLists} />
					<rootStack.Screen name="Create new list"component={CreateShoppingList} />
					<rootStack.Screen name="Search Item"component={SearchForFoodItem} />
					<rootStack.Screen name="Manage List"component={ShoppingList} />
				</rootStack.Navigator>
			</NavigationContainer>
		);
		
	}
}
