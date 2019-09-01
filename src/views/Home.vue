<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-row align="center" justify="center" class="grey lighten-5" >
          <div class="ma-6 pa-6" v-for="i in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]" :key="i">
            <quotation-card
              data-group="Câmbio"
              data-type="USD"
              update-time="09:40"
              :variation="i === 2 ? 2.5 : -1.3"
              :title="i"
            />
          </div>
        </v-row>
      </v-col>
      opa, {{ mock }}
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
};
</script>
