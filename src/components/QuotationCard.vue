<template>
  <v-card width="330px">
    <v-list-item>
      <v-list-item-content>
        <div class="overline mb-2 grey--text">{{ dataGroup }}</div>
        <div class="headline mb-2">{{ dataType }}</div>
        <v-container ma-0 pa-0>
          <v-row no-gutters justify="space-between">
            <v-col cols="4" align-self="center">
              <v-chip small text-color="white" :color="variationStyle.color">
                <v-avatar left>
                  <v-icon>{{ variationStyle.icon }}</v-icon>
                </v-avatar>
                <div class="font-weight-bold">
                  {{ variation }}
                </div>
              </v-chip>
            </v-col>
            <v-col cols="8" align-self="center">
              <div class="text-end" ma-0>
                <span class="headline">{{ formatSymbol }}</span>
                <span class="display-1">{{ price }}</span>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-list-item-content>
    </v-list-item>
    <v-card-actions>
      <v-btn depressed @click="onShowMore">
        <v-icon left>mdi-information-outline</v-icon>Ver mais
      </v-btn>
      <div class="flex-grow-1"></div>
      <div class="justify-end caption grey--text">Atualizado {{ updateTime }}</div>
    </v-card-actions>
  </v-card>
</template>

<script>

const BRASILIAN_CURRENCY = 'BRL';

export default {
  name: 'QuotationCard',
  props: {
    dataType: String,
    dataGroup: String,
    variation: Number,
    updateTime: String,
    price: Number,
    currencyFormat: {
      type: String,
      default: () => BRASILIAN_CURRENCY,
    },
  },
  computed: {
    variationStyle() {
      return this.variation > 0
        ? { color: 'green', icon: 'mdi-arrow-up' }
        : { color: 'red', icon: 'mdi-arrow-down' };
    },
    formatSymbol() {
      return this.currencyFormat === BRASILIAN_CURRENCY
        ? 'R$'
        : 'USD';
    },
  },
  methods: {
    onShowMore() {
      this.$emit('show-more');
    },
  },
};
</script>
