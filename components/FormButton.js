import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { height } from '../utilities/Dimensions';

const FormButton = ({buttonTitle, ...rest}) => {
    return (
        <TouchableOpacity style={styles.button} {...rest}>
            <Text style={styles.text}>{buttonTitle}</Text>
        </TouchableOpacity>
    );
};

export default FormButton;

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        width: '100%',
        height: height / 15,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});