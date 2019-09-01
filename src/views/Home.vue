<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-row align="center" justify="center" class="grey lighten-5" >
          <div class="ma-6 pa-6" v-for="currency in lastCurrencies" :key="currency.name">
            <quotation-card
              data-group="Câmbio"
              :data-type="currency.name"
              :update-time="lastUpdate"
              :variation="currency.variation"
              :price="currency.buy"
              @show-more="onShowMore(currency)"
            />
          </div>
          <div class="ma-6 pa-6" v-for="bitcoin in lastBitcoins" :key="bitcoin.name">
            <quotation-card
              data-group="Bitcoin"
              :data-type="bitcoin.name"
              :update-time="lastUpdate"
              :variation="bitcoin.variation"
              :price="bitcoin.last"
              :currency-format="bitcoin.format && bitcoin.format[0]"
              @show-more="onShowMore(bitcoin)"
            />
          </div>
        </v-row>
      </v-col>
    </v-row>
    <history-info
      v-if="showHistoryInfo"
      :quotation-name="selectedQuotation.name"
      :quotation-id="selectedQuotation.id"
      @close="toggleShowHistoryInfo"
    />
  </v-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import QuotationCard from '@/components/QuotationCard.vue';
import HistoryInfo from '@/components/HistoryInfo.vue';

export default {
  name: 'Home',
  components: {
    QuotationCard,
    HistoryInfo,
  },
  data() {
    return {
      showHistoryInfo: false,
      selectedQuotation: null,
    };
  },
  computed: {
    ...mapState(['refreshInterval']),
    ...mapGetters(['lastCurrencies', 'lastBitcoins', 'lastUpdate']),
  },
  created() {
    this.$store.dispatch('fetchDataFromApi');
    this.setAutomaticRefresh();
  },
  methods: {
    onShowMore(item) {
      this.selectedQuotation = item;
      this.toggleShowHistoryInfo();
    },
    toggleShowHistoryInfo() {
      this.showHistoryInfo = !this.showHistoryInfo;
    },
    setAutomaticRefresh() {
      setInterval(() => this.$store.dispatch('fetchDataFromApi'), this.refreshInterval);
    },
  },
};
</script>
