import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export const _renderItem = ({item}) => (
    <View style={styles.container}>
        <View>
            <Image
            style={{
                borderBottomLeftRadius: 20,
                borderTopLeftRadius: 20,
                height: 120,
                width: 120
            }}
            source={{
                uri: item.url
            }}
            />
        </View>
        <View>
            <Text style={styles.categorie}> {item.categorie} </Text>
            <Text style={styles.title}>{item.name}</Text>
        </View>
    </View>
)
const styles = StyleSheet.create({
    container:{
        marginTop:20,
        backgroundColor: '#003C62',
        borderRadius: 20,
        flex: 1,
        flexDirection: 'row'

    },
    title:{
        textAlignVertical: 'center',
        textAlign:'center',
        fontSize: 20,
        color: '#EEEEEE'
    },
    categorie:{
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#EDEDED',
    }
})
