import React, { useState, useContext } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';

const HomeScreen = () => {
    const {user, logout} = useContext(AuthContext)
    return (
        <View style={styles.container}>
            <Text>Home Screen {user.uid}</Text>
            <FormButton buttonTitle='Logout' onPress={() => logout()} />
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1 
    }
})