import React, { Component } from 'react'
import { View, TouchableOpacity, FlatList, Text } from 'react-native'
import { Actions } from 'react-native-router-flux';
import Styles from '../../styles'
import { HotelsViewItem } from './HotelsViewItem'
import { HotelsFilter } from './HotelsFilter'
import { Spinner, Header } from '../common';

class HotelsView extends Component {

    onHotelPress(item) {
        this.props.hotelFetch(item._id);
        Actions.hotel();
    }

    renderItem({ item }) {
        return (
            <TouchableOpacity onPress={this.onHotelPress.bind(this, item)}>
                <HotelsViewItem item={item} />
            </TouchableOpacity>
        )
    }

    onFilterChanged(text) {
        this.props.filterChanged({ text });
    }

    render() {
        const title = <Header headerText={"Lista de hoteles"} />;

        if (this.props.listFetching) {
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

        return (
            <View style={styles.screen}>
                {title}
                <View style={styles.container}>
                    <HotelsFilter onFilterChanged={this.onFilterChanged.bind(this)} />
                    <View style={styles.listContainer}>
                        <FlatList
                        style={{flex:1}}
                            data={this.props.filterdList}
                            keyExtractor={(item, index) => item._id}
                            renderItem={this.renderItem.bind(this)}
                        />
                    </View>
                    <Text style={styles.quantityText}>
                        {"Se encontraron " + this.props.filterdList.length + " hoteles."}
                    </Text>
                </View>


            </View>
        )
    }
}

export default HotelsView;

const styles = {
    screen: {
        flex:1
    },
    container: {
        flex: 1,
        paddingHorizontal: 10,
    },
    listContainer: {
        flex: 1,
    },
    errorContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    quantityText: {
        flex:1,
        backgroundColor: Styles.colors.lightestGray,
        position: 'absolute',
        bottom: 0,
        left:10,
        right:10,
        fontSize: 10,
        color: Styles.colors.black,
        paddingHorizontal: 10,
    },
}