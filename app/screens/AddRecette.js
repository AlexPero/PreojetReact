import React, { useEffect, useState } from 'react';
import { Text, View, Button, TextInput, StyleSheet,TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';

//lien pour les images:
// salade de riz : https://recette.supertoinette.com/154209/b/salade-de-riz-au-jambon.jpg 
// Poelée de panée : https://assets.afcdn.com/recipe/20180726/81588_w600.jpg

export default AddRecette = () => {
    const navigation = useNavigation();
    

    useEffect(() => {
        displayData();
    }, []);

    const displayData = async () => {
        const localStorageTasks = await AsyncStorage.getItem('@recette');
        return localStorageTasks != null
            ? setRecette(JSON.parse(localStorageTasks))
            : null;
    };
    const [recette, setRecette] = useState([]);
    const [NameValue, setNameValue] = useState('');
    const [urlValue, setUrlValue] = useState('');
    const [categorieValue, setCategorieValue] = useState('');
    const [ingredientValue, setIngredientValue] = useState('');
    const [descrValue, setDescrValue] = useState('');

    const saveRecette = async (name, url, categorie, ingredient, description) => {
        let newRecette = [...recette];
        let idRecette = idGenerator();
        console.log(idRecette);
        newRecette = [...recette, { id: idRecette, name: name, url: url, categorie: categorie, ingredient: ingredient, description: description }];
        setRecette(newRecette);
        await AsyncStorage.setItem('@recette', JSON.stringify(newRecette));
        console.log(recette)
        Alert.alert('La recette' + ' ' + name + ' ' + 'a été ajouté avec succés !');
        navigation.navigate('Home');
    }


    function idGenerator() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }

    return (
        <View style={styles.container}>

            <View style={styles.inputContainer}>
                <Text style={styles.label}> Nom de la recette</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setNameValue}
                    value={NameValue}
                    placeholder="Le nom de votre recette"
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}> URL de l'image</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setUrlValue}
                    value={urlValue}
                    placeholder="URL internet de votre image"
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}> Catégorie </Text>
                <Picker
                    selectedValue={categorieValue}
                    onValueChange={setCategorieValue}
                    style={styles.input}
                >
                    <Picker.Item label="Selectionnez une catégorie " value=" / " />
                    <Picker.Item label="Apero" value="Apéro" />
                    <Picker.Item label="Entrée" value="Entrée" />
                    <Picker.Item label="Plat" value="Plat" />
                    <Picker.Item label="Dessert" value="Dessert" />
                    <Picker.Item label="Goûter" value="Goûter" />
                </Picker>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}> Les ingrédients</Text>
                <TextInput
                    multiline
                    numberOfLines={4}
                    style={styles.input}
                    onChangeText={setIngredientValue}
                    value={ingredientValue}
                    placeholder="Les ingrédients de votre recette"
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}> Description </Text>
                <TextInput
                    multiline
                    numberOfLines={4}
                    style={styles.input}
                    onChangeText={setDescrValue}
                    value={descrValue}
                    placeholder="Décrivez votre recette"
                />
            </View>
            <View style={styles.inputContainer}>
                <TouchableOpacity
                    style={styles.appButtonContainer}
                    onPress={() => saveRecette(NameValue, urlValue, categorieValue, ingredientValue, descrValue)}
                >
                    <Text style={styles.appButtonText}> Ajouter votre recette</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    title: {
        textAlign: 'center',
        fontSize: 35
    },
    label: {
        paddingLeft: 10,
        color: '#003C62',
        fontWeight: 'bold'
    },
    inputContainer: {
        paddingTop: 15,
    },
    input: {
        borderRadius: 20,
        borderWidth: 3,
        padding: 10,
        borderColor: '#003C62'

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
    }

})
