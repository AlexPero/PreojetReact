import React, {useEffect, useState} from 'react';
import { Text, View, Button, TextInput, StyleSheet, Picker, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import Router from '../Router';

export default DetailRecette = ({route}) => {

    const [displayRecette, setDisplayRecette] = useState([]);
    const navigation = useNavigation();
    
    const removeRecette = () => {
        console.log('Fonction relmove')
        recetteToRemove = [...displayRecette];
        recetteToRemove = displayRecette.filter(({id}) =>  id !== route.params.id);
        console.log(recetteToRemove);
        setDisplayRecette(recetteToRemove);
        console.log(displayRecette);
        AsyncStorage.setItem('@recette', JSON.stringify(recetteToRemove));
        console.log(displayRecette)
        Alert.alert('La recette ' + route.params.title + ' a bien été supprimé');
        navigation.navigate('Home');
    }

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


    return(
        <View>
            <Text> Je suis sur la page Détail</Text>
            <Text> {route.params.description}</Text>
            <Text> {route.params.id}</Text>
            <Text> {route.params.categorie}</Text>
            <Text> {route.params.ingredient}</Text>
            <Text> {route.params.name}</Text>
            <View style={styles.inputContainer}>
                <TouchableOpacity 
                    style={styles.appButtonContainer}
                    onPress={() => removeRecette()}   
                >
                    <Text style={styles.appButtonText}> Supprimer votre recette</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    inputContainer: {
        paddingTop: 30
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "red",
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
    }
    
})