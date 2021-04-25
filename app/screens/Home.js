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
    }, [displayRecette]);
    
    
    const displayData = async () => {
        const storageRecette = await AsyncStorage.getItem('@recette');
        //console.log(JSON.parse(storageRecette));
        return storageRecette != null
        ? setDisplayRecette(JSON.parse(storageRecette))
        : null;
    };
    return (
        <View>
            <View style={styles.inputContainer}>
                <TouchableOpacity 
                    style={styles.appButtonContainer}
                    onPress={() => navigation.navigate('AddRecette')}   
                >
                    <Text style={styles.appButtonText}> Ajouter une recette</Text>
                </TouchableOpacity>
            </View>

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
    },
    inputContainer: {
        padding: 10
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#003C62",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
})

