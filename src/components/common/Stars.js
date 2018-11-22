import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from '../../styles'

const Stars = ({ starsAmount }) => {
    var stars = [];
    for (var i = 0; i < starsAmount; i++) {
        stars.push(
            <Icon
                key={i} name='star'
                size={12}
                color={Styles.colors.yellow}
                style={{ paddingRight: 4 }}
            />);
    }
    return (
        <View style={styles.stars}>
            {stars}
        </View>
    );
};

const styles = {
    stars: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
};

export { Stars };




