import axios from 'axios';
import { get, post } from './tools';

export const postDemo = () => axios.post('http://api.xitu.io/resources/github', {
    category: "trending",
    period: "day",
    lang: "javascript",
    offset: 0,
    limit: 30
}).then(function (response) {
    return response.data;
}).catch(function (error) {
    console.log("error",error);
});
const getDemo = () : Promise<Action> => {
	return axios.get('/341-1').then(function (response) {
    return Promise.resolve(response.data);
	}).catch(function (error) {
	    console.log("error",error);
	    return Promise.reject("服务器异常，请稍后再试");
	});
}

module.exports = {
  getDemo,
};