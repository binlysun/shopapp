import axios from 'axios'


export default function ajax(url = '', parmas = {}, type = 'get') {
    //1定义一个变量
    let promise;
    //2返回一个promis对象
    return new Promise((resolve, reject) => {
        //2.1判断请求类型
        if (type.toUpperCase() === 'GET') { //get请求
            //2.2拼接字符 ?name=zhangsan&age=18&sex=men
            let paramsStr = '';
            //2.3遍历
            Object.keys(parmas).forEach(key => {
                paramsStr += key + '=' + parmas[key] + '&';
            });
            //2.4过滤最后一个&,从0截取到最后按一个&的位置
            if (paramsStr) {
                paramsStr = paramsStr.substr(0, paramsStr.lastIndexOf('&'))
            }
            //2.5拼接完整路径
            var d = new Date();
            var n = d.getTime();
            url += '?' + paramsStr + '&itlike=' + n;
            //2.6 发起get请求
            promise = axios.get(url)

        } else if (type.toUpperCase() === 'POST') {
            promise = axios.post(url, parmas);
        }

        promise.then((response) => {
            resolve(response.data);
        }).catch(error => {
            reject(error);
        })
    });
}