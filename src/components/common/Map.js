import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Styles from '../../styles'
import Utils from '../../helpers/utils';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'


var Map = ({ point }) => {
    const { width, height } = Utils.getWindowDimensions();
    const ASPECT_RATIO = width / height;
    var latitudeDelta = 0.0032;
    var longitudeDelta = latitudeDelta * ASPECT_RATIO;

    const region = {
        latitude,
        longitude,
        latitudeDelta,
        longitudeDelta,
    } = {...point, latitudeDelta, longitudeDelta};
    
    return (
        <MapView
            provider={Platform.OS === 'ios' ? null : PROVIDER_GOOGLE}
            initialRegion={region}
            style={StyleSheet.absoluteFillObject}
        >
            <MapView.Marker coordinate={point}>
                <Icon name='room' size={18} color={Styles.colors.darkGray} />
            </MapView.Marker>
        </MapView>
    );
};

export { Map };




