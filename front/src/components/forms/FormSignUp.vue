<template>
  <v-card>
    <v-card-title>
      Créer un compte
    </v-card-title>

    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12">
            <p class="warning" v-show="accountAlreadyExist">{{accountAlreadyExistMsg}}</p>
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
            >
              <!-- Team  -->
              <!-- <v-text-field v-model="teamname" label="Nom de ta team" :rules="[v => !!v || 'Requis']"></v-text-field> -->
              
              <!-- Pseudo  -->
              <v-text-field v-model="nickname" label="Pseudo In Game" :rules="[v => !!v || 'Requis']"></v-text-field>

              <!-- EMAIL  -->
              <v-text-field
                v-model="email"
                label="E-mail"
                :rules="emailRules"
                required
              ></v-text-field>
              
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
import firebaseInit from '../Firebase/FirebaseInit.js'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set  } from "firebase/database";

  export default {
    props: {
    },
    data: () => ({
      valid: true,
      email: null,
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
      passwordConfirmErrorMsg: 'Les Mdp doivent être similaires',
      accountAlreadyExist: false,
      accountAlreadyExistMsg: 'Le compte existe déjà'
    }),
    created () {
      firebaseInit
    },
    methods: {
      validateCode () {
        if (this.confirm === this.password && this.$refs.form.validate()) {
          const auth = getAuth();
          createUserWithEmailAndPassword(auth, this.email, this.password)
            .then((userCredential) => {
              // console.log(userCredential.user)
              // Utilisateur créé
              const uuid = userCredential.user.uid;
              return uuid
            })
            .then((uuid) => {
              console.log('uid', uuid)
              // on enregistre les infos dans le realtime database
              function writeUserData(userId, nickname, role, email) {
                const db = getDatabase(firebaseInit)
                set(ref(db, 'users/' + userId), {
                  nickname: nickname,
                  role: role,
                  email: email,
                });
              }
              
              writeUserData(uuid, this.nickname, this.role, this.email)

              this.$store.dispatch('setUser', {nickname: this.nickname, role: this.role, email: this.email})

              this.$emit('close')
              this.$refs.form.reset()
              console.log('end')
            })
            .catch((error) => {
              const errorCode = error.code;
              // const errorMessage = error.message;
              // console.log(errorCode, errorMessage)
              if (errorCode === 'auth/email-already-in-use') {
                this.accountAlreadyExist = true
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