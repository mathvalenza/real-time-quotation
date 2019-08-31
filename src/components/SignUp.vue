<template>
  <user-form @submit="signUp" form-title="Registrar-se" submit-label="Cadastrar"/>
</template>

<script>
import firebase from 'firebase';
import UserForm from './UserForm.vue';

export default {
  name: 'SignUp',
  components: {
    UserForm,
  },
  methods: {
    signUp({ email, password }) {
      if (email && password) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user => console.log(user, ' foi criado'))
          .catch(err => console.log('Ops, ', err.message));
      }
    },
  },
};
</script>
