<template>
  <v-container fluid fill-height>
    <v-row justify="center">
      <v-col lg="6" md="8" sm="6">
        <v-form>
          <v-text-field
            clearable
            v-model="form.email"
            label="Login"
            :rules="[rules.required]"
          />
          <v-text-field
            v-model="form.password"
            label="Senha"
            name="input-10-1"
            :append-icon="showPassword ? 'visibility' : 'visibility_off'"
            :rules="[rules.required, rules.min]"
            :type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
          />
          <v-row justify="end">
            <v-btn @click="login">Entrar</v-btn>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'Login',
  data() {
    return {
      showPassword: false,
      form: {
        email: '',
        password: '',
      },
      rules: {
        required: v => !!v || 'Este campo é obrigatório.',
        min: v => (v && v.length >= 6) || 'A senha deve possuir no mínimo 6 caracteres',
      },
    };
  },
  methods: {
    login() {
      // this.$router.push({ name: 'home' });
      this.addUserToFirebase();
    },
    addUserToFirebase() {
      if (this.form.email && this.form.password) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.form.email, this.form.password)
          .then(user => console.log(user, ' foi criado'))
          .catch(err => console.log('Ops, ', err.message));
      }
    },
  },
};
</script>
