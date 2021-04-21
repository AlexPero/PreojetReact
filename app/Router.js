import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from "./screens/Home.js";
import AddRecette from './screens/AddRecette.js';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 const Stack = createStackNavigator();

export default Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="AddRecette" component={AddRecette}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};