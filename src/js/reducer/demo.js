import * as type from 'Src/js/actions/demoType';

let initState = {
	isFetch: false,
	isLoad: true,
	data: null
}
const getItems = (state = initState, action) => {
	switch (action.type) {
		case type.GET_DEMO_DATA:
			return {...state, isFetch:true}
		case type.GET_DEMO_DATA_SUCCESS:
			return {...state, isFetch: false, data: action.data}
		case type.IS_LOAD:
			return {...state, isLoad: true}
		case type.IS_LOAD_SUCCESS:
			return {...state, isLoad: false}
		default:
      return state
	}
}


module.exports = {getItems}