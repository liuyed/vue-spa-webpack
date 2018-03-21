import * as types from '../types';

export const setAccount = ({ commit }) => {
  // 接口调用的真实逻辑
  // service.auth.login()
  //           .then((res) => {
  //             console.log('处理成功逻辑');
  //           });
  const account = {
    firstName: 'toni',
    lastName: 'qian',
    email: 'toniqian@qq.com',
  };
  commit(types.SET_ACCOUNT, account);
};

export default {
  setAccount,
};
