import React, {useEffect, useState} from 'react';
import { Text, View, Button, TextInput, StyleSheet, Picker, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import Router from '../Router';

export default DetailRecette = ({route}) => {

    return(
        <View>
            <Text> Je suis sur la page Détail</Text>
            <Text> {route.params.description}</Text>
        </View>
    );
}