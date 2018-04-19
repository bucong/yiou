import axios from 'axios'
import qs from 'qs'
import {URL} from './common'
import {Toast} from 'mint-ui'
export function fetch (method, url, data, cb) {
  let newurl = URL + url;
  if (method === 'get') {
    if(data != ''){
      newurl = URL + url + '?' + qs.stringify(data);
    }
    axios({
      url: newurl,
      method: 'get'
    }).then((response) => {
      if(response.data.code == 0){
        cb(response.data)
      }else{
        Toast(response.data.msg)
      }
    }).catch((error) => {
      Toast('服务器开小差了。。。')
    })
  }
  if (method === 'post') {
    axios({
      url: newurl,
      method: 'post',
      data: data
    }).then((response) => {
      if(response.data.code == 0){
        cb(response.data)
      }else{
        Toast(response.data.msg)
      }
    }).catch((error) => {
      Toast('服务器开小差了。。。')
    })
  }
}
