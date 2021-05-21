import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { height } from '../utilities/Dimensions';
import { width } from '../utilities/Dimensions';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

const FormInput = ({labelValue, placeholderText, iconType, ...rest}) => {
    return (
        <View style={styles.inputContainer}>
            <View style={styles.icon}>
                <Icon name={iconType} color="gray" size={20}/>
            </View>
            <TextInput
                value={labelValue}
                style={styles.input}
                placeholder={placeholderText}
                placeholderTextColor="#666"
                numberOfLines={1}
                {...rest}
            />
        </View>
    );
};

export default FormInput;

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 5,
        marginBottom: 10, 
        width: '100%',
        height: height / 15,
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 3,
        borderWidth: 1,
        backgroundColor: '#fff'
    },
    icon: {
        padding: 10,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        borderRightWidth: 1,
        borderRightColor: '#ccc'
    },
    input: {
        padding: 10,
        flex: 1,
        fontSize: 16,
        color: '#333',
        justifyContent: 'center',
        alignItems: 'center'
    },
    // inputField: {
    //     padding: 10,
    //     marginTop: 5,
    //     marginBottom: 10,
    //     width: width / 1.5,
    //     height: height / 15,
    //     fontSize: 16,
    //     borderRadius: 8,
    //     borderWidth: 1
    // }
});