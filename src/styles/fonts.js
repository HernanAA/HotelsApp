import { StyleSheet } from 'react-native';

var fonts = StyleSheet.create({
  normal: {
    fontSize: 8,
    fontFamily: 'Avenir Medium'
  },

  alternate: {
    fontSize: 10,
    fontFamily: 'Avenir Heavy',
    color: '#FFFFFF'
  },

  big: {
    fontSize: 12,
    alignSelf: 'center',
    fontFamily: 'Avenir Medium'
  }
});

var scalingFactors = {
  normal: 28,
  big: 7
};

module.exports = {fonts, scalingFactors};
