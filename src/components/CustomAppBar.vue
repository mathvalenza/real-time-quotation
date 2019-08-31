<template>
  <v-app-bar absolute class="primary white--text">
    <v-toolbar-title>Real Time Quotation</v-toolbar-title>
    <div class="flex-grow-1"></div>
    <v-btn class="white--text" icon :disabled="isLoginView" @click="goToLogin">
      <v-icon>mdi-logout</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'CustomAppBar',
  computed: {
    isLoginView() {
      return this.$route.name === 'login';
    },
  },
  methods: {
    goToLogin() {
      return this.$router.push({ name: 'login' });
    },
  },
};
</script>
