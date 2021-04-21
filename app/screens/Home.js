import React, { useState, useEffect } from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';


export default Home = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Text>Add friends here!</Text>

            <Button
                title="Add recette"
                onPress={() =>
                    navigation.navigate('AddRecette')
                }
            />
        </View>
    );
}