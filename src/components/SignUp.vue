<template>
  <v-container fluid fill-height>
    <user-form @submit="signUp" form-title="Registrar-se" submit-label="Cadastrar"/>
    <v-snackbar v-model="showSnackbarError">
      Erro ao realizar cadastrar-se. Por favor, tente novamente
      <v-btn color="red" text @click="showSnackbarError = false">
        Fechar
      </v-btn>
    </v-snackbar>
    <v-snackbar color="green" v-model="showSnackbarSuccess">
      Você foi cadastrado com sucesso
      <v-btn color="white" text @click="goToLogin">
        Ir para login
      </v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
import UserForm from './UserForm.vue';

export default {
  name: 'SignUp',
  components: {
    UserForm,
  },
  data() {
    return {
      showSnackbarError: false,
      showSnackbarSuccess: false,
    };
  },
  methods: {
    signUp({ email, password }) {
      if (email && password) {
        this.$store.dispatch('signUp', {
          email,
          password,
          onSuccess: this.onSuccess,
          onError: this.onError,
        });
      } else {
        this.onError();
      }
    },
    onSuccess() {
      this.showSnackbarSuccess = true;
    },
    onError() {
      this.showSnackbarError = true;
    },
    goToLogin() {
      this.$router.push({ name: 'login' });
    },
  },
};
</script>
