<template>
  <v-card width="280px">
    <v-list-item>
      <v-list-item-content>
        <v-container ma-0 pa-0>
          <v-row no-gutters>
            <v-col cols="6">
              <div class="overline mb-2">{{ dataGroup }}</div>
              <v-list-item-title class="headline mb-1">{{ dataType }}</v-list-item-title>
              <v-chip small text-color="white" :color="variationStyle.color">
                <v-avatar left>
                  <v-icon>{{ variationStyle.icon }}</v-icon>
                </v-avatar>
                <div class="font-weight-bold">
                  {{ variation }}
                </div>
              </v-chip>
            </v-col>
            <v-col cols="6" align-self="center">
              <div ma-0>
                <span class="headline">$</span><span class="display-2">4,50</span>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-list-item-content>
    </v-list-item>
    <v-card-actions>
      <v-btn text>Ver mais</v-btn>
      <div class="flex-grow-1"></div>
      <div class="justify-end caption grey--text">Atualizado {{ updateTime }}</div>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'QuotationCard',
  props: {
    dataType: String,
    dataGroup: String,
    variation: Number,
    updateTime: String,
  },
  computed: {
    variationStyle() {
      return this.variation > 0
        ? { color: 'green', icon: 'mdi-arrow-up' }
        : { color: 'red', icon: 'mdi-arrow-down' };
    },
  },
};
</script>
