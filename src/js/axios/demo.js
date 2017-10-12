import axios from 'axios';
import { Get, Post } from './tools';

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
const getDemo = () => Get({url:'/341-1'})

module.exports = {
  getDemo,
};