import React, {useEffect, useState} from 'react';
import { Text, View, Button, TextInput, StyleSheet, Picker, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import saveRecette from '../components/LocalStorage'


export default AddRecette = () => {
    //const navigation = useNavigation();

    useEffect(() => {
        displayData();
    })

    const displayData = async () => {
        const localStorageTasks = await AsyncStorage.getItem('@recette');
        return localStorageTasks != null
            ? setRecette(JSON.parse(localStorageTasks))
            : null;
    };

    const [recette, setRecette] = useState([
        {
            id:0,
            nom:'gaufres',
            url:'gaufre.png',
            categorie: 'Dessert',
            ingredient:'Un peu de tout',
            description: 'Des gaufres normales'
        }
    ]);
    const [NameValue, setNameValue] = useState('');
    const [urlValue, setUrlValue] = useState('');
    const [categorieValue, setCategorieValue] = useState('');
    const [ingredientValue, setIngredientValue] = useState('');
    const [descrValue, setDescrValue] = useState('');

    const saveRecette = async (name, url, categorie, ingredient, description) => {
        let newRecette = [...recette];
        newRecette = [...recette, {id: recette.length, name: name, url: url, categorie:categorie, ingredient: ingredient, description:description}];
        setRecette(newRecette);
        await AsyncStorage.setItem('@recette', JSON.stringify(newRecette));
        console.log(recette)
        console.log('Je suis après le setItem');
    }

    return (
        <View style={styles.container}>

            <View style={styles.inputContainer}>
                <Text style={styles.label}> Nom de la recette</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setNameValue}
                    value={NameValue}
                    placeholder="Ajoutez ici votre tâche"
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}> URL de l'image</Text>
                <TextInput
                    style={styles.input}
                        onChangeText={setUrlValue}
                        value={urlValue}
                        placeholder="Ajoutez ici votre tâche"
                    />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}> Catégorie </Text>
                <Picker
                    selectedValue={categorieValue}
                    onValueChange={setCategorieValue}
                    style={styles.input}
                >
                    <Picker.Item label="Apero" value="apero" />
                    <Picker.Item label="Entrée" value="entree" />
                    <Picker.Item label="Plat" value="plat" />
                    <Picker.Item label="Dessert" value="dessert" />
                </Picker>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}> Je sais plus</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setIngredientValue}
                    value={ingredientValue}
                    placeholder="Ajoutez ici votre tâche"
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}> Je sais plus</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setDescrValue}
                    value={descrValue}
                    placeholder="Ajoutez ici votre tâche"
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
    title:{
        textAlign: 'center',
        fontSize: 35
    },
    label:{
        paddingLeft: 10,
    },
    inputContainer: {
        paddingTop: 30
    },
    input:{
        borderRadius: 20,
        borderWidth: 1,
        padding: 10,
        
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
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
