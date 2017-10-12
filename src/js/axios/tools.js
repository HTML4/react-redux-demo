import axios from 'axios';
import { message } from 'antd';

// axios.defaults.headers.common['Authorization'] = "xxx";
/**
 * 公用get请求
 * @param url       接口地址
 * @param msg       接口异常提示
 * @param headers   接口所需header配置
 */
// export const get = ({url, msg = '接口异常', headers}) =>
// 	axios.get(url, headers).then(res => res.data).catch(err => {
//    console.log(err);
//    message.warn(msg);
// });
export const Get = ({url, msg = '服务器异常，请稍后再试', headers}) : Promise<Action> => {
  return axios.get(url, headers).then(function (response) {
    return Promise.resolve(response.data);
  }).catch(function (error) {
      console.log("error",error);
      message.warn(msg);
      return Promise.reject("服务器异常，请稍后再试");
  });
}

	/**
 * 公用post请求
 * @param url       接口地址
 * @param data      接口参数
 * @param msg       接口异常提示
 * @param headers   接口所需header配置
 */

export const Post = ({url, data, msg = '接口异常', headers}) : Promise<Action> => {
  return axios.post(url, headers).then(function (response) {
    return Promise.resolve(response.data);
  }).catch(function (error) {
      console.log("error",error);
      message.warn(msg);
      return Promise.reject("服务器异常，请稍后再试");
  });
}


