import React, { Component } from 'react'
import Styles from '../../styles'
import { View, Image, Text } from 'react-native'
import Utils from '../../helpers/utils';
import { Stars } from '../common';

const HotelsViewItem = ({ item }) => {
    return (
        <View key={item._id} style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: item.image }} style={styles.image} />
            </View >

            <View style={styles.bottomContainer}>
                <View style={styles.line}>
                    <Text style={styles.hotelName}>{item.name} </Text>
                    <Text style={styles.priceText}>Precio Por Noche</Text>
                </View>
                <View style={styles.line}>
                    <View style={styles.stars}>
                        <Stars starsAmount={item.stars} />
                    </View>
                    <Text style={styles.priceValue}>ARS {item.price.thousandDot()}</Text>
                </View >
            </View>
        </View >
    )
}

const styles = {
    container: {
        height: 240,
        marginBottom: 10,
        flexDirection: 'column',
        backgroundColor: Styles.colors.white,
        borderRadius: 3,
        elevation: 2
    },
    imageContainer:{
        flex:1,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderColor: Styles.colors.lighterGray,
        borderWidth: 1,
        overflow:'hidden'
    },
    image: {
        flex: 1,
        resizeMode: 'cover',

    },
    bottomContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    line: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 3,
    },
    priceText: {
        alignSelf: 'flex-end',
        fontSize: 9,
        color: Styles.colors.lighterGray,
    },
    hotelName: {
        fontSize: 16,
        color: Styles.colors.black,
        fontWeight: '500',
        maxWidth: Utils.getWindowDimensions().width * 0.7,
    },
    stars: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    priceValue: {
        fontSize: 13,
        color: Styles.colors.yellow,
        fontWeight: '500'
    },
}

export { HotelsViewItem }