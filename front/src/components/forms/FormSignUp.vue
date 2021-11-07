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
              <!-- Team  -->
              <v-text-field label="Nom de ta team" :rules="[v => !!v || 'Requis']"></v-text-field>
              
              <!-- Pseudo  -->
              <v-text-field label="Pseudo In Game" :rules="[v => !!v || 'Requis']"></v-text-field>

              <!-- EMAIL  -->
              <v-text-field
                v-model="email"
                label="E-mail"
                :rules="emailRules"
                required
              ></v-text-field>
              
              <!-- MDP  -->
              <v-text-field label="Password" v-model="password" :rules="[v => !!v || 'Requis']"></v-text-field>
              
              <!-- Confirm MDP  -->
              <v-text-field label="Password confirm" v-model="confirm" @input="checkPassword" :rules="[v => !!v || 'Requis'] || passwordConfirmRules"></v-text-field>
              <p class="warning" v-show="passwordConfirmError">{{passwordConfirmErrorMsg}}</p>
              <v-btn
                color="success"
                @click="validateCode"
                class="mr-2"
              >
                Créer
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
      confirm: '',
      passwordConfirmError: false,
      passwordConfirmErrorMsg: 'Les Mdp doivent être similaires'
    }),
    methods: {
      validateCode () {
        if (this.confirm === this.password && this.$refs.form.validate()) {
          this.$emit('close')
          this.$refs.form.reset()
        }
      },
      checkPassword () {
        if (this.confirm === this.password) {
          this.passwordConfirmError = false
        } else {
          this.passwordConfirmError = true
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