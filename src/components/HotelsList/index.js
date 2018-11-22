import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux';
import { hotelListFetch, hotelFetch, filterChanged } from '../../actions/HotelActions';
import HotelsView from './HotelsView'

class HotelList extends Component {

    componentWillMount() {
        this.props.hotelListFetch();
    }

    render() {
        return (
            <View style={styles.screen}>
                <HotelsView {...this.props} />
            </View>
        );
    }

}

const styles = {
    screen: {
        flex:1
    },
};

const mapStateToProps = ({ hotels }) => {
    return { filterdList, listFetching } = hotels;
};

export default connect(mapStateToProps, { 
        hotelListFetch, 
        hotelFetch,
        filterChanged 
    })(HotelList);

