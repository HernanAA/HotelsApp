var ReactNative = require('react-native');
var { Dimensions } = ReactNative;

var Utils = {

	dims: undefined,
	getWindowDimensions() {
		if (this.dims === undefined) {
			this.dims = {
				width: Dimensions.get('window').width ,
				height:  Dimensions.get('window').height 
			}
		}
		return this.dims;
	},

};
module.exports = Utils;



