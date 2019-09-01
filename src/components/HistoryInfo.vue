<template>
  <v-dialog
    persistent
    v-model="active"
    @click:outside="onClose"
    @keydown.esc="onClose"
  >
    <v-card class="mx-auto text-center" color="blue lighten-2" dark>
      <v-container pb-0>
        <v-card-text>
          <v-sheet color="rgba(0, 0, 0, .08)">
            <v-sparkline
              auto-draw
              smooth
              show-labels
              auto-line-width
              color="rgba(255, 255, 255, .7)"
              height="100"
              padding="24"
              stroke-linecap="round"
              label-size="10"
              :value="quotationHistory"
            />
          </v-sheet>
        </v-card-text>
        <v-card-text class="headline">
          {{ quotationName }}: Histórico de variação
        </v-card-text>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'HistoryInfo',
  props: {
    quotationName: String,
    quotationId: String,
  },
  data() {
    return {
      active: true,
    };
  },
  computed: {
    quotationHistory() {
      return this.$store.getters.quotationHistory(this.quotationId);
    },
  },
  methods: {
    onClose() {
      this.$emit('close');
    },
  },
};
</script>
