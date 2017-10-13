import * as type from './demoType';
import { Get, post } from 'src/js/axios/tools';
import {postDemo, getDemo} from 'src/js/axios/demo'
import {request} from 'utils'
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


const isLoad = () => ({
  type: type.IS_LOAD
})
const isLoadSuccess = () => ({
  type: type.IS_LOAD_SUCCESS
})

export const fetchItems = () => (dispatch, getState) => {
    //console.log("getState",getState())
    dispatch(getItems());
    // setTimeout(function(){
    // 	return dispatch(getItemsSuccess({data: 1}))
    // }, 1000)
    request({url:'/341-1'}).then(res => {
      dispatch(getItemsSuccess(res))
    }).catch(err => {
      console.log("err", err)
      dispatch(getItemsFail(err))
    })
    // http[funcName](params).then(res => dispatch(receiveData(res, stateName)));
};

export const showLoad = () => (dispatch, getState) => {
    
    setTimeout(function(){
      dispatch(isLoad())
    }, 1000)
};
export const hideLoad = () => (dispatch, getState) => {
    
  dispatch(isLoadSuccess())
};