<template>
  <v-container fluid fill-height>
    <user-form @submit="login" form-title="Login" submit-label="Entrar">
      <v-btn text small color="primary" @click="goToSignUp">Registrar-se</v-btn>
    </user-form>
    <v-snackbar color="red" v-model="showSnackbarError">
      Erro ao realizar o login. Verifique seus dados e tente novamente
      <v-btn color="white" text @click="showSnackbar = false">
        Fechar
      </v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
import UserForm from './UserForm.vue';

export default {
  name: 'Login',
  components: {
    UserForm,
  },
  data() {
    return {
      showSnackbarError: false,
    };
  },
  methods: {
    login({ email, password }) {
      if (email && password) {
        this.$store.dispatch('login', {
          email,
          password,
          onSuccess: this.onSuccess,
          onError: this.onError,
        });
      }
    },
    goToSignUp() {
      this.$router.push({ name: 'signUp' });
    },
    onSuccess() {
      this.$router.push({ name: 'home' });
    },
    onError() {
      this.showSnackbarError = true;
    },
  },
};
</script>
