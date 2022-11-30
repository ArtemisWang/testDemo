/*
 * @Author: artemis
 * @Date: 2021-10-12 15:50:29
 * @LastEditTime: 2021-10-12 15:56:14
 * @LastEditors: artemis
 * @Description: 获取url参数
 */
function getUrlParam(sUrl, sKey) {
    let search = sUrl.split('?')[1].split('#')[0];
    let searchArr = search.split('&');
    let res = {};
    searchArr.forEach(item => {
        let [key, value] = item.split('=');
        if (res[key] && res[key] instanceof Array) {
            res[key].push(value);
        } else if (res[key]) {
            res[key] = [res[key], value];
        } else {
            res[key] = value;
        }
    });
    if (sKey) {
        return res[sKey] ? res[sKey] : '';
    }
    return res;
}

console.log(getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&key=4&test1=4#hehe', 'abc'));