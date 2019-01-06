import { pk } from '../../mutation-types/index';

const history = {
  state: {
    historyProductInfo: {},
    analyseProduct:"",
    // searchProduct1:"",
    // searchProduct2:"",
    param:{}
  },
  mutations: {
    [pk.GET_AD_VIEW](state, data){
      state.historyProductInfo = data;
    },
    [pk.SET_pk_PARAM](state, data){
      state.param = data;
    }
  }
}

export default history;
