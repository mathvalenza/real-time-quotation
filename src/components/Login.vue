<template>
  <user-form @submit="login" form-title="Login" submit-label="Entrar">
    <v-btn text small color="primary" @click="goToSignUp">Registrar-se</v-btn>
  </user-form>
</template>

<script>
import firebase from 'firebase';
import UserForm from './UserForm.vue';

export default {
  name: 'Login',
  components: {
    UserForm,
  },
  methods: {
    login({ email, password }) {
      if (email && password) {
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(user => this.$router.push({ name: 'home' }))
          .catch(error => console.log('Ops, ', error.message));
      }
    },
    goToSignUp() {
      this.$router.push({ name: 'signUp' });
    },
  },
};
</script>
