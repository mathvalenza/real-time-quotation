<template>
  <v-app>
    <v-toolbar max-height="50px">
      <custom-app-bar />
    </v-toolbar>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import CustomAppBar from '@/components/CustomAppBar.vue';

export default {
  name: 'App',
  components: {
    CustomAppBar,
  },
};
</script>
