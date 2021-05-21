import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import FormButton from '../components/FormButton';

const HomeScreen = () => {
    return (
        <Text style={styles.container}>Home Screen</Text>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center '
    }
})