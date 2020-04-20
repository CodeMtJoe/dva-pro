const axios=require('axios')
import {testUrl} from '../config/index'
// 配置post请求头信息
// axios.defaults.headers.post['Content-type']='application/x-www-form-urlencoded';
export function parseErrorMessage( data ) {
    const { Statue, Message } = data;
    if (Statue === 'false') {
      throw new Error(Message);
    }
    return  data ;
  }
axios.default.retry=4
axios.default.retryDelay=1000
export function request({url,type,data}){
    const http=axios.create({
        baseURL:testUrl,
        timeout:6000
    });
    if(type=='get'||type=='undefined'){
        return http.get(url,{params:data})
    }else if(type=="put"){
        return http.put(url,{params:data})
    }else if(type=='delete'){
        return http.delete(url,{params:data})
    }
    else{
        return http.post(url,data)
    }
}
