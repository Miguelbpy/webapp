import * as mutation from './mutation-types';
const state = () => ({
  userdata: {},
});

const mutations = {

  [mutation.SIGNIN](state) {
    state.showLoader = true;
  },
  [mutation.SIGNIN_FAILED](state) {
    state.showLoader = false;
  },
  [mutation.SIGNIN_ERROR](state) {
    state.showLoader = false;
  },
  [mutation.SIGNIN_SUCCESS](state, payload) {
    state.showLoader = false;
    state.userdata = payload;

  },
  [mutation.SIGNOUT](state) {
    state.showLoader = true;
  },
  [mutation.SIGNOUT_SUCCESS](state) {
    state.showLoader = false;
    state.userdata = null;
  },
  [mutation.SIGNOUT_FAILED](state) {
    state.showLoader = false;
  },
};
const actions = {
  async login({ commit }, payload) {
    commit(mutation.SIGNIN);
    await this.$api.$post(`auth/signin`, payload)
      .then(response => {
        console.log(response);
        if (response.accessToken != null) {

          commit(mutation.SIGNIN_SUCCESS, response);

          localStorage.setItem('ospic.token', response.accessToken);
          localStorage.setItem('ospic.roles', response.roles);
          localStorage.setItem('ospic.email', response.email);
          localStorage.setItem('ospic.tokentype', response.tokenType);
          localStorage.setItem('ospic.uid', response.id);
          localStorage.setItem('ospic.username', response.username);
          sessionStorage.setItem('ospic.token', response.accessToken)
          this.$router.push('/');
        }


      }).catch(error => {
        commit(mutation.SIGNIN_ERROR);
        localStorage.removeItem('ospic');
        console.log(error);

      });
  },
  async logout({ commit }) {
    await this.$api.$get(`auth/signout`)
      .then(response => {
        if (response.result == 'OK') {
          commit(mutation.SIGNOUT);
          window.localStorage.clear();
          localStorage.removeItem('ospic');
          sessionStorage.clear();
          this.$router.push('/signin');
        }


      }).catch(error => {
        commit(mutation.SIGNOUT_FAILED);

      });
  }
};
const getters = {
  isLoggedIn: function (state) {
    return (localStorage.getItem('ospic.token') && localStorage.getItem('ospic.tokentype')) !== null;
  },
  userInfos: function (state) {
    return state.userdata;
  }
};
export default {
  state,
  getters,
  mutations,
  actions,
};
