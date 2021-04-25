import React, { useState, useEffect } from 'react';
import { Text, View, Button, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
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
            <Button
                title="Add recette"
                onPress={() =>
                    navigation.navigate('AddRecette')
                }
            />

            <Text style={styles.title}>Le listing des recettes, vous en avez {displayRecette.length} ! </Text>

            <FlatList
                data={displayRecette}
                renderItem={({item}) => <RenderItem displayRecette={item} />}
                keyExtractor={item => item.id}
            />
        </View>
    );
}
const styles = StyleSheet.create({    
    title:{
        fontSize: 15,
        textAlign: 'center',
        margin: 10,
    }
})

