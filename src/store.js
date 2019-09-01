import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';
import flattenDeep from 'lodash/flattenDeep';
import filter from 'lodash/filter';

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
    refreshInterval: 10000000,
  },
  getters: {
    lastQuotation({ quotations }) {
      return quotations && [...quotations].pop();
    },
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
    async fetchDataFromApi({ commit, dispatch }) {
      const response = await axios.get(
        API_URI, {
          params: {
            key: API_KEY,
            userCredentials: true,
          },
        },
      );
      const newQuotation = response.data.results;
      const targetCurrencies = ['USD', 'EUR', 'GBP', 'ARS', 'BTC'];
      const targetBitcoins = ['foxbit', 'omnitrade', 'xdex', 'blockchain_info', 'coinbase'];

      const currencies = resolveQuotations({
        type: 'currencies',
        quotation: newQuotation,
        targetIds: targetCurrencies,
      });

      const bitcoins = resolveQuotations({
        type: 'bitcoin',
        quotation: newQuotation,
        targetIds: targetBitcoins,
      });

      console.log('currencies: ', currencies);
      console.log('bitcoins: ', bitcoins);

      commit('SET_CURRENCIES', currencies);
      commit('SET_BITCOINS', bitcoins);

      dispatch('setUpdateTime');
    },
    setUpdateTime({ commit }) {
      const updateTime = new Date().toLocaleTimeString();

      commit('SET_UPDATES', updateTime);
    },
  },
});
