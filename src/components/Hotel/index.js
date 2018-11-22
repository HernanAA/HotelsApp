import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux';
import HotelView from './HotelView'

class Hotel extends Component {
    render() {
        return (
            <View style={styles.screen}>
                <HotelView {...this.props} />
            </View>
        );
    }

}

const styles = {
    screen: {
        flex:1,
    },
};

const mapStateToProps = ({ hotels }) => {
    const hotel = hotels.selectedHotel;
    const { hotelFetching, error } =  hotels

    return { hotel, hotelFetching, error}
};

export default connect(mapStateToProps, )(Hotel);

