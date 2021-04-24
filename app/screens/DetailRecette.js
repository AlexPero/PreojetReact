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
        // Copie du tableau asynchrone
        console.log(displayRecette.id)
        console.log(route.params.id);
        recetteToRemove = displayRecette.filter(({id}) =>  id !== route.params.id);
        // On met dans le tableau tout ce qui est différent que l'id de la page (la recette actuelle n'est pas dedans ducoup)
        console.log(recetteToRemove);
        setDisplayRecette(recetteToRemove);
        // ON met le tableau copié dans le tableau normal
        AsyncStorage.setItem('@displayRecette', JSON.stringify(recetteToRemove));
        // On actualise le tableau asynchrone
        console.log(displayRecette)
        Alert.alert('La recette' + route.params.name + 'a bien été supprimé');
        navigation.navigate('Home');
        // Après l'appuie sur le bouton, pop-up + redirection sur 'Home'
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