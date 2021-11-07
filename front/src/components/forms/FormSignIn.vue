<template>
  <v-card>
    <v-card-title>
      Créer un compte
    </v-card-title>

    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
            >
              <!-- EMAIL  -->
              <v-text-field
                v-model="email"
                label="E-mail"
                :rules="emailRules"
                required
              ></v-text-field>
              
              <!-- MDP  -->
              <v-text-field label="Password" v-model="password" :rules="[v => !!v || 'Requis']"></v-text-field>
              
              <v-btn
                color="success"
                @click="validateCode"
                class="mr-2"
              >
                Login
              </v-btn>
              <v-btn
                color="warning"
                @click="cancel"
              >
                Annuler
              </v-btn>
            </v-form>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    props: {
    },
    data: () => ({
      valid: true,
      email: null,
      emailRules: [
        v => !!v || 'Requis',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      password: '',
    }),
    methods: {
      validateCode () {
        if (this.$refs.form.validate()) {
          this.$emit('close')
          this.$refs.form.reset()
        }
      },
      cancel () {
        this.$refs.form.reset()
        this.$emit('close')
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>