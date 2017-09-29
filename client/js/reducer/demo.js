import * as type from 'Client/js/actions/demoType';

let initState = {
	isFetch: false,
	data: null
}
export default function getItems (state = initState, action) {
	switch (action.type) {
		case type.GET_DEMO_DATA:
			return {...state, isFetch:true}
		case type.GET_DEMO_DATA_SUCCESS:
			return {...state, isFetch: false, data: action.data}
		default:
      return state
	}
}