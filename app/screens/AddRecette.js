import React from 'react';
import { Text, View, Button } from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default AddRecette = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Text>Add friends here!</Text>

            <Button
                title="Back to home"
                onPress={() =>
                    navigation.navigate('Home')
                }
            />
        </View>
    );
}
