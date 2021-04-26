import React from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./screens/Home.js";
import AddRecette from './screens/AddRecette.js';
import DetailRecette from './screens/DetailRecette.js'
import {useNavigation} from '@react-navigation/native';
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
            <Stack.Navigator 
                initialRouteName="Home"
                screenOptions={{
                    headerTintColor: '#003c62',
                    headerStyle: { backgroundColor: '#f0faff' },
                    headerTitleAlign: 'center',
                }}
                >
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{title: 'Liste des recettes'}}
                />
                <Stack.Screen 
                    name="AddRecette" 
                    component={AddRecette}
                    options={{title: 'Ajouter une recette'}}
                />
                <Stack.Screen 
                    name="DetailRecette" 
                    component={DetailRecette}
                    options={({route}) => ({title: route.params.title + ' (' + route.params.categorie + ')'})}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};