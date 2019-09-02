import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';
import flattenDeep from 'lodash/flattenDeep';
import filter from 'lodash/filter';
import get from 'lodash/get';

Vue.use(Vuex);

const API_KEY = 'a126fec1';
const CORS_ANYWHERE = 'https://cors-anywhere.herokuapp.com/';
const API_URI = `${CORS_ANYWHERE}https://api.hgbrasil.com/finance`;

const resolveQuotations = ({ quotation, type, targetIds }) => targetIds.map(targetQuotation => ({
  ...quotation[type][targetQuotation],
  id: targetQuotation,
}));

export default new Vuex.Store({
  state: {
    currencies: [],
    bitcoins: [],
    updates: [],
    targetCurrencies: ['USD', 'EUR', 'GBP', 'ARS', 'BTC'],
    targetBitcoins: ['foxbit', 'omnitrade', 'xdex', 'blockchain_info', 'coinbase'],
    refreshInterval: 120000,
  },
  getters: {
    lastUpdate({ updates }) {
      return updates && [...updates].pop();
    },
    lastCurrencies({ currencies }) {
      return [...currencies].pop();
    },
    lastBitcoins({ bitcoins }) {
      return [...bitcoins].pop();
    },
    quotationHistory: (state, { lastCurrencies }) => (quotationId) => {
      const isCurrency = lastCurrencies.some(currency => currency.id === quotationId);

      const quotationsHistory = isCurrency
        ? filter(flattenDeep(state.currencies), { id: quotationId }).map(quotation => quotation.buy)
        : filter(flattenDeep(state.bitcoins), { id: quotationId }).map(quotation => quotation.last);

      return [0, ...quotationsHistory];
    },
  },
  mutations: {
    SET_CURRENCIES(state, currencies) {
      state.currencies = [...state.currencies, currencies];
    },
    SET_BITCOINS(state, bitcoins) {
      state.bitcoins = [...state.bitcoins, bitcoins];
    },
    SET_UPDATES(state, updateTime) {
      state.updates = [...state.updates, updateTime];
    },
  },
  actions: {
    async fetchDataFromApi({ state, commit, dispatch }) {
      const response = await axios.get(
        API_URI, {
          params: {
            key: API_KEY,
          },
        },
      );

      const newQuotation = get(response, 'data.results', []);

      const currencies = resolveQuotations({
        type: 'currencies',
        quotation: newQuotation,
        targetIds: state.targetCurrencies,
      });

      const bitcoins = resolveQuotations({
        type: 'bitcoin',
        quotation: newQuotation,
        targetIds: state.targetBitcoins,
      });

      commit('SET_CURRENCIES', currencies);
      commit('SET_BITCOINS', bitcoins);

      dispatch('setUpdateTime');
    },
    setUpdateTime({ commit }) {
      const updateTime = new Date().toLocaleTimeString();

      commit('SET_UPDATES', updateTime);
    },
    signIn(_, {
      email, password, onSuccess, onError,
    }) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          sessionStorage.setItem('userEmail', email);
          onSuccess();
        })
        .catch((error) => {
          console.error(error);
          onError();
        });
    },
    signUp(_, {
      email, password, onSuccess, onError,
    }) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {
          sessionStorage.setItem('userEmail', user.email);
          onSuccess();
        })
        .catch((error) => {
          console.error(error);
          onError();
        });
    },
  },
});
