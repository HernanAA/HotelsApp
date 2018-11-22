import React, { Component } from 'react'
import { View, FlatList, Text, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';
import Utils from '../../helpers/utils';
import Styles from '../../styles'
import { HotelViewItem } from './HotelViewItem'
import { Spinner, Header } from '../common';
import { Stars, Map } from '../common';

class HotelView extends Component {

    onHotelPress(item) {
        this.props.hotelSelect(item);
        Actions.hotel();
    }

    renderItem({ item }) {
        return (
            <HotelViewItem item={item} />
        )
    }

    render() {
        const hotel = this.props.hotel;
        const title = <Header headerText={this.props.hotelFetching ? '' : hotel.name} />

        if (this.props.hotelFetching) {
            return (
                <View style={styles.screen}>
                    {title}
                    <Spinner size="small" />
                </View>
            )
        }

        if (this.props.error !== '') {
            return (
                <View style={styles.screen}>
                    {title}
                    <View style={styles.errorContainer}>
                        <Text> {this.props.error} </Text>
                    </View>
                </View>
            )
        }

        const POINT = { latitude, longitude } = hotel.detail.coordinates;

        return (
            <ScrollView style={styles.screen}>
                <Header headerText={hotel.name} />
                <View style={styles.container}>
                    <View>
                        <FlatList
                            horizontal
                            keyExtractor={(item, index) => item}
                            data={hotel.detail.images}
                            renderItem={this.renderItem.bind(this)}
                        />
                    </View>
                    <View style={styles.dataContainer}>
                        <View style={styles.nameContainer}>
                            <View style={styles.line}>
                                <Text style={styles.hotelName}>{hotel.name} </Text>
                                <Text style={styles.priceText}>Precio Por Noche</Text>
                            </View>
                            <View style={styles.line}>
                                <View style={styles.stars}>
                                    <Stars starsAmount={hotel.stars} />
                                </View>
                                <Text style={styles.priceValue}>ARS {hotel.price.thousandDot()}</Text>
                            </View >
                        </View >
                        <View style={styles.lineAddress}>
                            <Icon name='room' size={18}
                                color={Styles.colors.darkGray}
                                style={styles.addressIcon} />
                            <Text style={styles.addressText}>{hotel.detail.address}</Text>
                        </View>
                    </View>
                    <View style={styles.mapStyle}>
                        <Map point={POINT} />
                    </View>
                    <View style={styles.descriptionContainer}>
                        <View style={styles.descriptionHeaderContainer}>
                            <Icon name='weekend' size={18} color={Styles.colors.darkGray}
                                style={styles.descriptionIcon} />
                            <Text style={styles.descriptionHeader}>Descripción</Text>
                        </View>
                        <Text style={styles.descriptionText}>{hotel.detail.description}</Text>
                    </View>
                </View>
            </ScrollView>
        )

    }
}

export default HotelView;

const styles = {
    screen: {
        flex: 1
    },
    container: {
        paddingHorizontal: 5,
        height: 700,
    },
    dataContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    nameContainer:{
        paddingHorizontal: 10,
        backgroundColor: Styles.colors.white,
    },
    errorContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
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
    lineAddress: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingTop: 3,
        marginTop:10,
        paddingHorizontal: 10,
        backgroundColor: Styles.colors.white
    },
    addressIcon: {
        paddingTop: 2,
        marginLeft: -4,
    },
    addressText: {
        fontSize: 14,
        color: Styles.colors.darkGray,
        paddingBottom: 2,
    },
    mapStyle: {
        height: 200,
    },
    descriptionContainer: {
        backgroundColor: Styles.colors.white,
        padding: 10,
        marginTop:10,
    },
    descriptionIcon: {
        paddingTop: 1,
        paddingRight: 5
    },
    descriptionHeaderContainer: {
        flexDirection: 'row'
    },
    descriptionHeader: {
        fontSize: 14,
        color: Styles.colors.black,
        fontWeight: '700',
    },
    descriptionText: {
        fontSize: 12,
    }
}