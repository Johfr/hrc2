<template>
  <v-card>
    <v-card-title>
      Créer un compte
    </v-card-title>

    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12">
            <!-- <p v-for="code in authErrors" :key="code.id">
              {{ code }}
            </p> -->
            <p class="warning" v-show="accountAlreadyExist">{{accountAlreadyExistMsg}}</p>
            <p class="warning" v-show="invalidEmail">{{invalidEmailMsg}}</p>
            <p class="warning" v-show="weakPw">{{weakPwMsg}}</p>
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
            >
              <!-- Team  -->
              <!-- <v-text-field v-model="teamname" label="Nom de ta team" :rules="[v => !!v || 'Requis']"></v-text-field> -->
              
              <!-- Pseudo  -->
              <v-text-field v-model="nickname" label="Pseudo In Game" type="name" autocomplete="nickname" :rules="[v => !!v || 'Requis']"></v-text-field>

              <!-- EMAIL  -->
              <!-- <v-text-field
                v-model="email"
                label="E-mail"
                :rules="emailRules"
                required
              /> -->
              
              <v-text-field
                label="Email"
                v-model="email"
                :suffix="emailSuffixe"
                required
              />
              
              <!-- Role -->
              <v-select
                v-model="role"
                :items="roleItems"
                label="Tu es :"
                :rules="[v => !!v || 'Merci d\'indiquer ton rôle']"
                required
              >
              </v-select>

              <!-- MDP  -->
              <v-text-field label="Password" v-model="password" autocomplete="current-password" :rules="[v => !!v || 'Requis']"></v-text-field>
              
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
import firebaseInit from '../Firebase/FirebaseInit.js'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set  } from "firebase/database";

  export default {
    props: {
    },
    data: () => ({
      valid: true,
      emailSuffixe: '@hcr2.com',
      email: '',
      nickname: '',
      role: null,
      roleItems: ['leader', 'coleader', 'membre'],
      emailRules: [
        v => !!v || 'Requis',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      password: '',
      confirm: '',
      passwordConfirmError: false,
      // authErrors: [],
      passwordConfirmErrorMsg: 'Les Mdp doivent être similaires',
      accountAlreadyExist: false,
      accountAlreadyExistMsg: 'Le compte existe déjà',
      invalidEmail: false,
      invalidEmailMsg: 'Format d\'email invalide',
      weakPw: false,
      weakPwMsg: 'Le mot de passe doit contenir au moins 6 caractères',
    }),
    created () {
      firebaseInit
    },
    methods: {
      validateCode () {
        if (this.confirm === this.password && this.$refs.form.validate()) {
          const userMail = this.email + this.emailSuffixe
          const auth = getAuth();
          createUserWithEmailAndPassword(auth, userMail, this.password)
            .then((userCredential) => {
              // console.log(userCredential.user)
              // Utilisateur créé
              const uuid = userCredential.user.uid;
              return uuid
            })
            .then((uuid) => {
              // console.log('uid', uuid)
              // on enregistre les infos dans le realtime database
              function writeUserData(userId, nickname, role, email) {
                const db = getDatabase(firebaseInit)
                set(ref(db, 'users/' + userId), {
                  nickname: nickname,
                  role: role,
                  email: email,
                });
              }
              
              writeUserData(uuid, this.nickname, this.role, userMail)

              this.$store.dispatch('setUser', {nickname: this.nickname, role: this.role, email: userMail})

              this.$emit('close')
              this.$refs.form.reset()
              console.log('end')
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode, errorMessage)
              // if (errorCode) {
              //   this.authErrors.push(errorCode)
              //   console.log(errorCode, 'errorCode')
              // }
              if (errorCode === 'auth/email-already-in-use') {
                this.accountAlreadyExist = true
              }
              if (errorCode === 'auth/invalid-email') {
                this.invalidEmail = true
              }
              if (errorCode === 'auth/weak-password') {
                this.weakPw = true
              }
            });
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