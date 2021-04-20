import React, { useState, useEffect } from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


export default Home = () => {

    const navigation = useNavigation();
    
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                <Button
                    onPress={() => {
                        console.log("appuie sur bouton");
                        navigation.navigate('AddRecette');
                    }}
                    title="Ajouter une recette "
                    color="#841584"
                />
            }
        });
    }, [navigation]);

    return (
        <View>


            <Text> Page d'accueil </Text>
        </View>

    );
};