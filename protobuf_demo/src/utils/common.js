const md5 = require('md5');
const CryptoJS = require('crypto-js');
const KEY = CryptoJS.enc.Utf8.parse('3b21a5ea2aa7222e'); //加密KEY
const IV = CryptoJS.enc.Utf8.parse('PuQL2Dsk74deXwGo'); //偏移量

function processProtocParams(params, SpareParameter, url) {
  const userId = sessionStorage.getItem('userId');
  // const userId = '243276';
  const token = sessionStorage.getItem('token');
  const timeStamp = new Date().getTime();
  let p;
  if (userId)
    p = 'userId=' + userId + '&timeStamp=' + timeStamp + '&loginSource=7';
  else p = 'timeStamp=' + timeStamp + '&loginSource=7';

  for (var key in params) {
    p += '&' + key + '=' + params[key];
  }
  console.log(p);
  let sign = p + url;
  // console.log(p, sign);
  return {
    token,
    p: CryptoJS.AES.encrypt(p, KEY, {
      iv: IV,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    }).toString(),
    sign: md5(sign),
    SpareParameter
  };
}
export { processProtocParams };
