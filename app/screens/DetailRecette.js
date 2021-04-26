import React, {useEffect, useState} from 'react';
import { Text, View, Button, TextInput, StyleSheet, Picker, TouchableOpacity, Alert, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

export default DetailRecette = ({route}) => {

    const [displayRecette, setDisplayRecette] = useState([]);
    const navigation = useNavigation();
    
    const removeRecette = () => {
        recetteToRemove = [...displayRecette];
        recetteToRemove = displayRecette.filter(({id}) =>  id !== route.params.id);
        setDisplayRecette(recetteToRemove);
        AsyncStorage.setItem('@recette', JSON.stringify(recetteToRemove));
        console.log(displayRecette)
        Alert.alert('La recette ' + route.params.title + ' a bien été supprimé');
        navigation.navigate('Home');
    }

    const confirmationAlert = () => {
        Alert.alert(
            "ATTENTION SUPPRESSION",
            "Voulez vous définitevement supprimer " + route.params.title + " ? ",
            [
                {
                    text: "Annuler",
                    onPress: () => console.log("Cancel Pressed"),
                },
                { text: "Oui je le veux", onPress: () => removeRecette() }
            ]
        );
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
            <Image
                style={{
                    height: 280,
                    width: '100%'
                }}
                source={{
                    uri: route.params.urlImage
                }}
            />
            <View style={styles.container}>
                <Text style={styles.title}> {route.params.title}</Text>
                <Text style={styles.titleCateg}> ( {route.params.categorie} ) </Text>
            </View>
            <View style={styles.containerText}>
                <View style={styles.categContainer}>
                    {/* <Image
                        style={{
                            height: 30,
                            width: 30
                        }}
                        source={{
                            uri: urlIngredient
                        }}
                    /> */}
                    <Text style={styles.categTitle}> Ingrédients : </Text>
                    <Text> {route.params.ingredient} </Text>
                </View>
                <View style={styles.categContainer}>
                    {/* <Image
                        style={{
                            height: 30,
                            width: 30
                        }}
                        source={{
                            uri: 'https://www.flaticon.com/svg/vstatic/svg/3521/3521879.svg?token=exp=1619382860~hmac=2f1264680e6574d751e0baf38db6200a'
                        }}
                    /> */}
                    <Text style={styles.categTitle}> Description :</Text>
                    <Text> {route.params.description}</Text>
                </View>
            
                <View style={styles.inputContainer}>
                    <TouchableOpacity 
                        style={styles.appButtonContainer}
                        onPress={() => confirmationAlert()}   
                    >
                        <Text style={styles.appButtonText}> Supprimer votre recette</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        marginTop: -20,
        backgroundColor: '#003C62',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        maxWidth: 300,
        padding: 5,
        paddingBottom: 15,
        fontSize: 30,
    },
    containerText:{
        padding: 20
    },
    title: {
        marginTop: 5,
        textAlignVertical: 'center',
        textAlign: 'center',
        fontSize: 20,
        color: '#EEEEEE'
    },
    titleCateg:{
        marginTop: 5,
        textAlignVertical: 'center',
        textAlign: 'center',
        fontSize: 18,
        color: '#c9c9c9'
    },
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
    },
    categTitle:{
        fontSize: 25,
        color: '#497191',
        fontWeight: 'bold'
    }
    
})