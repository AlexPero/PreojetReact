import React, { useState, useEffect } from 'react';
import { Text, View, Button, TouchableOpacity, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import RenderItem from '../components/RenderRecette';


export default Home = () => {
    const navigation = useNavigation();
    const [displayRecette, setDisplayRecette] = useState([]);
    
    useEffect(() => {
        displayData();
    },[]);
    
    
    const displayData = async () => {
        const storageRecette = await AsyncStorage.getItem('@recette');
        //console.log(JSON.parse(storageRecette));
        return storageRecette != null
        ? setDisplayRecette(JSON.parse(storageRecette))
        : null;
    };
    return (
        <View>
            <Text>Vos recettes ici !</Text>

            <Button
                title="Add recette"
                onPress={() =>
                    navigation.navigate('AddRecette')
                }
            />
            <FlatList
                data={displayRecette}
                renderItem={({item}) => <RenderItem displayRecette={item} />}
                keyExtractor={item => item.id}
            />
        </View>
    );
}