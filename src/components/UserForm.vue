<template>
  <v-container fluid fill-height>
    <v-row justify="center">
      <v-col lg="6" md="8" sm="6">
        <v-card class="mx-auto" width="100%">
          <v-card-title>{{ formTitle }}</v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field
                clearable
                v-model="form.email"
                label="E-mail"
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
              <v-row justify="end" align="center">
                <v-btn @click="submit">{{ submitLabel }}</v-btn>
                <slot />
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'UserForm',
  props: {
    formTitle: {
      type: String,
      default: 'Formulário',
    },
    submitLabel: {
      type: String,
      default: 'Submeter',
    },
  },
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
    submit() {
      return this.$emit('submit', this.form);
    },
  },
}
</script>
