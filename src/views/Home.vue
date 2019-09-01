<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-row align="center" justify="center" class="grey lighten-5" >
          <div class="ma-6 pa-6" v-for="currency in currencies" :key="currency.name">
            <quotation-card
              data-group="Câmbio"
              :data-type="currency.name"
              update-time="09:40"
              :variation="currency.variation"
              :price="currency.buy"
            />
          </div>
          <div class="ma-6 pa-6" v-for="bitcoin in bitcoins" :key="bitcoin.name">
            <quotation-card
              data-group="Bitcoin"
              :data-type="bitcoin.name"
              update-time="09:40"
              :variation="bitcoin.variation"
              :price="bitcoin.last"
              :currency-format="bitcoin.format[0]"
            />
          </div>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import mock from '../apiService';
import QuotationCard from '@/components/QuotationCard.vue';

export default {
  name: 'Home',
  components: {
    QuotationCard,
  },
  data() {
    return {
      mock,
    };
  },
  computed: {
    currencies() {
      const targetCurrencies = ['USD', 'EUR', 'GBP', 'ARS', 'BTC'];
      const currencies = [];

      targetCurrencies.forEach(targetCurrency => (currencies.push(
        this.mock.results.currencies[targetCurrency],
      )));

      return currencies;
    },
    bitcoins() {
      const targetBitcoins = ['foxbit', 'omnitrade', 'xdex', 'coinbase'];
      const bitcoins = [];

      targetBitcoins.forEach(targetBitcoin => (bitcoins.push(
        this.mock.results.bitcoin[targetBitcoin],
      )));

      return bitcoins;
    },
  },
};
</script>
