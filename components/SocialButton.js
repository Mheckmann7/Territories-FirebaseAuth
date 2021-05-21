import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { height } from '../utilities/Dimensions';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();



const SocialButton = ({ buttonTitle, btnType, color, backgroundColor, ...rest }) => {
    let bgColor = backgroundColor
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: bgColor}]} {...rest}>
            <View style={styles.icon}>
                <Icon name={btnType} color={color} size={20}/>
            </View>
            <View style={styles.btnWrapper}>
                <Text style={styles.btnText, {color: color}}>{buttonTitle}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default SocialButton;

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
    },
    icon: {
        width: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});