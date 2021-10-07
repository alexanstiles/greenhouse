// This is a Custom Navigator that allows us to nest a BottomTabNavigator and a StackNavigator. This way, we do not have to display the
// SearchForFoodItem page in the Navbar

// In App.JS, the "Create new list" screen will now use the component SearchItemNavigator instead of the normal CreateShoppingList screen

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import SearchForFoodItem from './App/SearchForFoodItem/SearchForFoodItem';
import CreateShoppingList from './App/CreateShoppingList/CreateShoppingList';

const Stack = createStackNavigator()

const SearchItemNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
             name="Create New List" component={CreateShoppingList}
            />
            <Stack.Screen
             name="Search Item" component={SearchForFoodItem}
            />
        </Stack.Navigator>
    )
}

export {SearchItemNavigator}