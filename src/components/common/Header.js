import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Styles from '../../styles'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';

const Header = (props) => {
  const { textStyle, container } = styles;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.navBarLeftButton}
        activeOpacity={0.2}
        onPress={() => { Actions.pop() }}>
        <Icon name='arrow-back' size={20} color={Styles.colors.orange} />
      </TouchableOpacity>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  container: {
    backgroundColor: Styles.colors.white,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom:4,
    height: 45,
    paddingLeft: 20,
    flexDirection: 'row',
    elevation: 5
  },
  navBarLeftButton:{
    marginRight: 20,
  },
  textStyle: {
    fontSize: 13,
    fontWeight: '400',
    textShadowOffset: {width: 0, height: 1},
    color: Styles.colors.black,
  }
};

export { Header };
