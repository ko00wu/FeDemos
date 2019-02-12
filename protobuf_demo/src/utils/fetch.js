import { processProtocParams } from './index';
import Protobuf from 'protobufjs';
import axios from 'axios';
const BASE_URL = 'http://122.224.34.235/';
const BaseRequestConfig = require('../static/TestPB/ProtocBaseRequest.json');
const BaseReplyConfig = require('../static/TestPB/ProtocBaseReply.json');
const BaseReplyRoot = Protobuf.Root.fromJSON(BaseReplyConfig);
const BaseRequestRoot = Protobuf.Root.fromJSON(BaseRequestConfig);
const RequestMessage = BaseRequestRoot.lookupType('BaseRequest');
const ReplyMessage = BaseReplyRoot.lookupType('BaseReply');

// const inst = axios.create({
//   withCredentials: true
// })

function fetch(options) {
  const url = BASE_URL + options.api;
  const payload = processProtocParams(
    options.extraParams,
    options.spareParameter,
    url
  );
  console.log(payload);
  // 验证
  const errMessage = RequestMessage.verify(payload);
  if (errMessage) {
    throw Error(errMessage);
  }
  const data = String.fromCharCode.apply(
    null,
    RequestMessage.encode(RequestMessage.create(payload)).finish()
  );
  // const cookie = localStorage.getItem('cookie');
  // let co = {};
  // if (cookie) {
  //   co = {
  //     cookie: 'SID=' + cookie
  //   };
  // }
  axios({
    url,
    method: 'POST',
    responseType: 'arraybuffer',
    headers: {
      Accept: '*/*',
      'Content-Type': 'application/x-protobuf'
      // ...co
    },
    data
    // withCredentials: true
  }).then(({ data }) => {
    // Protobuf.load(require('../static/TestPB/ProtocBaseReply.json'), function(
    //   err,
    //   root
    // ) {
    //   if (err) throw err;

    // const ReplyMessage = root.lookupType('BaseReply');

    console.log(ReplyMessage.decode(new Uint8Array(data)));
    success(ReplyMessage.decode(new Uint8Array(data)));
  });
  // console.log(res);
  // });
  // });
}

export default fetch;
