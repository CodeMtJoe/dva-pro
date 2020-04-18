const axios=require('axios')
import {testUrl} from '../config/index'
// 配置post请求头信息
// axios.defaults.headers.post['Content-type']='application/x-www-form-urlencoded';

export function request({url,type,data}){
    const http=axios.create({
        baseURL:testUrl

    });
    if(type=='get'||type=='undefined'){
        return http.get(url,{params:data})
    }else{
        return http.post(url,data)
    }
}
