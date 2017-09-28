import * as type from './demoType';
import {postDemo} from 'Client/js/axios/demo'
const getItems = category => ({
    type: type.GET_DEMO_DATA,
});
const getItemsSuccess = (data) => ({
    type: type.GET_DEMO_DATA_SUCCESS,
    data,
});
const getItemsFail = (data) => ({
    type: type.GET_DEMO_DATA_FAIL,
    data,
});

export const fetchItems = () => dispatch => {
    dispatch(getItems());
    // setTimeout(function(){
    // 	return dispatch(getItemsSuccess({data: 1}))
    // }, 1000)
    postDemo().then(res => dispatch(getItemsSuccess(res)))
    // http[funcName](params).then(res => dispatch(receiveData(res, stateName)));
};