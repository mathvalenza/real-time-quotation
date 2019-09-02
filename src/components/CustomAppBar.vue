<template>
  <v-app-bar absolute class="primary white--text">
    <v-toolbar-title>Real Time Quotation</v-toolbar-title>
    <div class="flex-grow-1"></div>
    {{ helloMessage }}
    <v-btn class="white--text" icon :disabled="!isInHome" @click="signOut">
      <v-icon>mdi-logout</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'CustomAppBar',
  computed: {
    isInHome() {
      return this.$route.name === 'home';
    },
    helloMessage() {
      return this.isInHome ? `Olá, ${sessionStorage.getItem('userEmail')}!` : '';
    },
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: 'login' });
          this.$store.dispatch('clearState');
        })
        .catch(error => console.error(error));
    },
  },
};
</script>
