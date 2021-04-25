import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'



export default RenderItem = ({ displayRecette }) => {

    const navigation = useNavigation();
    
    return (
        <View>
            <TouchableOpacity
                style={styles.container}
                onPress={() => {
                    navigation.navigate('DetailRecette', {
                        id: displayRecette.id,
                        title: displayRecette.name,
                        description: displayRecette.description,
                        urlImage: displayRecette.url,
                        categorie: displayRecette.categorie,
                        ingredient: displayRecette.ingredient
                    });
                }}
            >
                <View>
                    <Image
                        style={{
                            borderBottomLeftRadius: 20,
                            borderTopLeftRadius: 20,
                            height: 120,
                            width: 120
                        }}
                        source={{
                            uri: displayRecette.url
                        }}
                    />
                </View>
                <View>
                    <Text style={styles.categorie}> {displayRecette.categorie} </Text>
                    <Text style={styles.title}>{displayRecette.name}</Text>
                    <Text style={styles.description}>{displayRecette.description}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        margin: 5,
        backgroundColor: '#003C62',
        borderRadius: 20,
        flex: 1,
        flexDirection: 'row'

    },
    title: {
        marginTop: 5,
        textAlignVertical: 'center',
        textAlign: 'center',
        fontSize: 20,
        color: '#EEEEEE'
    },
    categorie: {
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#EDEDED',
        maxWidth: 120,
        textAlign: 'center'
    },
    description:{
        color: 'white',
        textAlign: 'left',
        marginTop: 2,
        padding: 10,
        maxWidth: 260
    }
})
