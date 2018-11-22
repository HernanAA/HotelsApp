import React, { Component } from 'react'
import Styles from '../../styles'
import { View, Image } from 'react-native'
import Utils from '../../helpers/utils';

const HotelViewItem = ({ item }) => {
    return (
        <View key={item._id} style={styles.container}>
            <Image source={{ uri: item }} style={styles.image} />
        </View >
    )
}

const styles = {
    container: {
        height: 200,
        width: Utils.getWindowDimensions().width * 0.45,        
        marginBottom: 10,
        flexDirection: 'column',
        backgroundColor: Styles.colors.black,
        elevation: 2,
        padding: 5,
        
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        borderWidth: 1,
    },
}

export { HotelViewItem }