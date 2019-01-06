import axios from 'axios';
import {
  CommonURL,
  CommonURL2,
  CommonURL3,
  ToLink,
  ShareToLink,
  FiveToLink,
} from './Common';

const Base64 = require ('js-base64').Base64;
// import router from '../router/index.vue';
// import {MessageBox} from 'element-ui';

//响应拦截
// axios.interceptors.response.use(res => {
//   if(res.data.head.error_code === 97){
//     MessageBox.alert('长时间未操作，请重新登录', {
//       type:'warning',
//       center:true,
//       confirmButtonText: '确定',
//       callback: action => {
//         sessionStorage.removeItem("securityNo");
//         sessionStorage.removeItem("userInfo");
//         sessionStorage.removeItem("userRoles");
//         window.location.reload();
//       }
//     });
//   }
// 	return res;
// }, err => {
// 	return err;
// });

//封装axios请求
export const $http = {
  getProductType: function () {
    var data = {
      1: '重疾险',
      2: '医疗险',
      3: '寿险',
      4: '意外险',
      5: '车险',
      6: '家财险',
      7: '责任险',
      8: '年金险',
    };
    return data;
  },
  getData () {
    let data = {
      head: {
        timeStamp: '',
        systemId: 'system',
        MD5: '',
        extTransactionNo: '',
        localTransactionNo: '',
        errorCode: '0000',
        errorMessage: '成功',
      },
      body: {},
    };
    return data;
  },
  post (url, data) {
    return axios ({
      method: 'post',
      baseURL: `${CommonURL.HTTP}${CommonURL.SERVER_PATH}:${CommonURL.PORT}/`,
      url,
      data: data,
      timeout: 60000,
    });
  },
  post2 (interfaceNo, dataBody) {
    let data = {
      head: {
        timeStamp: '',
        systemId: 'system',
        MD5: '',
        extTransactionNo: '',
        localTransactionNo: '',
        errorCode: '0000',
        errorMessage: '成功',
      },
      body: dataBody,
    };
    let param = {
      system: 'S10000051',
      interface: interfaceNo,
      mode: '',
      sessionId: '',
    };
    param = Base64.encode (JSON.stringify (param));

    return axios ({
      method: 'post',
      baseURL: `${CommonURL2.HTTP}${CommonURL2.SERVER_PATH}/`,
      url: 'routerServices?param=' + param,
      data: data,
      timeout: 60000,
    });
  },
  post3 (interfaceName, data) {
    return axios ({
      method: 'post',
      baseURL: `${CommonURL3.HTTP}${CommonURL3.SERVER_PATH}/`,
      url: interfaceName,
      data: data,
      timeout: 60000,
    });
  },
};

export const Href = `${ToLink.HTTP}${ToLink.SERVER_PATH}`;

export const ShareHref = `${ShareToLink.HTTP}${ShareToLink.SERVER_PATH}`;

export const FiveHref = `${FiveToLink.HTTP}${FiveToLink.SERVER_PATH}`;
