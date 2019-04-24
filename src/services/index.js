import 'whatwg-fetch'
import { stringify } from 'query-string'
import config from '../config'

const checkStatus = (response) => {
  if (response.ok) {
    return response
  }
};
const parseJSON = response => response.json();

//params,method
const requestApi = (endpoint, {params, ...settings}) => {
    endpoint = endpoint.indexOf('http') === 0 ? endpoint : config.apiUrl + endpoint;

    let query = { timeStamp:(new Date()).valueOf() };
    endpoint += `?${stringify(query)}`;
    //默认值
    settings = {...{
        method:'get',
        // credentials: 'include',
        headers:{
        'Authorization':"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNvbmd0YW9AZGVhbGxpbmtlci5jbiIsImlhdCI6MTU0MzI5MDE0NywiZXhwIjoxNTQzMzI2MTQ3fQ.5JWq3J4Ri0eNPCAPfPtqsi6fYrUpxUrg2s8BpIVz0gY",
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Accept-Language': settings.locale?settings.locale:"zh"
        }
    },...settings};

    if(settings.method === "post"){
        params = {
            ...params,
        };
        if(settings.formData){
            delete settings.headers['Accept'];
            delete settings.headers['Content-Type'];
        }
        settings = {...settings,...{
            body:settings.formData?settings.formData:stringify(params)
        }}
    }else{
        endpoint += `&${stringify(params)}`
    }
    return fetch(endpoint, settings)
            .then(checkStatus)
            .then(parseJSON)
};

export default {checkStatus,parseJSON,requestApi}
