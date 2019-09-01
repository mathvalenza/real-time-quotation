<template>
  <v-dialog
    persistent
    v-model="active"
    max-width="600px"
    @click:outside="onClose"
    @keydown.esc="onClose"
  >
    <v-card class="mx-auto text-center" color="blue lighten-2" dark>
      <v-container pb-0>
        <v-card-text>
          <v-sheet color="rgba(0, 0, 0, .08)">
            <v-sparkline
              :value="value"
              color="rgba(255, 255, 255, .7)"
              height="100"
              padding="24"
              stroke-linecap="round"
              smooth
            >
              <template v-slot:label="item">
                ${{ item.value }}
              </template>
            </v-sparkline>
          </v-sheet>
        </v-card-text>

        <v-card-text>
          <div class="headline">{{ item.name }}: Histórico de variação</div>
        </v-card-text>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'HistoryInfo',
  props: {
    item: Object,
  },
  data() {
    return {
      active: true,
      value: [
        423,
        446,
        675,
        510,
        590,
        610,
        760,
      ],
    };
  },
  methods: {
    onClose() {
      this.$emit('close');
    },
  },
};
</script>
