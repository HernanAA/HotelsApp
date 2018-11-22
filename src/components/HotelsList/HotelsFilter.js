import React, { Component } from 'react'
import Styles from '../../styles'
import { View, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const HotelsFilter = (props) => {

    return (
        <View style={styles.container}>
            <TextInput style={styles.inputText}
                onChangeText={props.onFilterChanged}
                underlineColorAndroid={'transparent'}
            >
            </TextInput>
            <View style={styles.iconContainer}>
                <Icon
                    name='search' size={15}
                    color={Styles.colors.orange}
                />
            </View>
        </View>
    )
}

const styles = {
    container: {
        backgroundColor: Styles.colors.white,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
        height: 45,
        paddingLeft: 20,
        flexDirection: 'row',
        elevation: 5,
        borderRadius: 2
    },
    inputText:{
        flex:1,
        fontSize:13,
    },
    iconContainer: {
        marginRight:15,
    },

}

export { HotelsFilter }