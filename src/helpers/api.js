import Utils from './../helpers/utils'
var api = {
	baseAddress: "https://mysterious-falls-75183.herokuapp.com/",
	
	//Local:
	//baseAddress: "http://192.168.1.209:3000/",
	
	getHotelListlUrl:  function(){
		return this.baseAddress + "hotels/" 
	},
}

module.exports = api;