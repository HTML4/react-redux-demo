import * as type from './demoType';
import {postDemo, getDemo} from 'Src/js/axios/demo'
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

export const fetchItems = () => (dispatch, getState) => {
    console.log("getState",getState())
    dispatch(getItems());
    // setTimeout(function(){
    // 	return dispatch(getItemsSuccess({data: 1}))
    // }, 1000)
    getDemo().then(res => dispatch(getItemsSuccess(res)))
    // http[funcName](params).then(res => dispatch(receiveData(res, stateName)));
};
