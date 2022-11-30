/*
 * @Author: artemis
 * @Date: 2021-10-13 09:55:27
 * @LastEditTime: 2021-12-15 09:43:59
 * @LastEditors: artemis
 * @Description: 时间格式化输出
 */
function formatDate(date, formatType) {
    let res = '';
    for (let i = 0; i < formatType.length; i++) {
        let p = formatType[i];
        while (i + 1 < formatType.length && formatType[i] === formatType[i + 1]) {
            p += formatType[i++];
        }
        switch (p) {
            case 'yyyy':
                res += date.getFullYear();
                break;
            case 'yy':
                res += (date.getFullYear() + '').slice(2);
                break;
            case 'MM':
                let mm = date.getMonth() + 1 + '';
                res += (mm.length === 2 ? mm : '0' + mm);
                break;
            case 'M':
                res += date.getMonth() + 1;
                break;
            case 'dd':
                let dd = date.getDate() + '';
                res += (dd.length === 2 ? dd : '0' + dd);
                break;
            case 'd':
                res += date.getDate();
                break;
            case 'HH':
                let hh = date.getHours() + '';
                res += (hh.length === 2 ? hh : '0' + hh);
                break;
            case 'H':
                res += date.getHours();
                break;
            case 'hh':
                let hh1 = date.getHours() % 12 + '';
                res += (hh1.length === 2 ? hh1 : '0' + hh1);
                break;
            case 'h':
                res += date.getHours() % 12;
                break;
            case 'mm':
                let mm1 = date.getMinutes() + '';
                res += (mm1.length === 2 ? mm1 : '0' + mm1);
                break;
            case 'm':
                res += date.getMinutes();
                break;
            case 'ss':
                let ss = date.getSeconds() + '';
                res += (ss.length === 2 ? ss : '0' + ss);
                break;
            case 's':
                res += date.getSeconds();
                break;
            case 'w':
                res += ['日', '一', '二', '三', '四', '五', '六'][date.getDay()];
                break;
            default:
                res += p;
        }
    }
    return res;
}
var localOffset = new Date().getTimezoneOffset() * 60 * 1000;
console.log(formatDate(new Date(1409894060000 + localOffset), 'yy-M-d hh:m:s 星期w'));
console.log(formatDate(new Date(), 'yyyy-M-d hh:mm:ss 星期w'));