<template>
  <v-card>
    <v-card-title>
      Se connecter
    </v-card-title>
    <p class="warning" v-if="wrongPassword"> {{ wrongPasswordMsg }} </p>
    <p class="warning" v-if="wrongEmail"> {{ wrongEmailMsg }} </p>
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
import firebaseInit from '../Firebase/FirebaseInit.js'
// import getUser from '../Firebase/FirebaseDatabase.js'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { getDatabase, ref, onValue} from "firebase/database";

export default {
  props: {
  },
  data: () => ({
    valid: true,
    email: 'johanne.assorin@hotmail.com3',
    emailRules: [
      v => !!v || 'Requis',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    password: '000000',    
    wrongPassword: false,
    wrongEmail: false,
    wrongPasswordMsg: 'Le mot de passe rentré est incorrecte',
    wrongEmailMsg: 'l\'email rentré n\'existe pas dans la base de donnée',
  }),
  created () {
    firebaseInit
  },
  methods: {
    validateCode () {
      if (this.$refs.form.validate()) {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, this.email, this.password)
          .then((userCredential) => {
            // Connection validé
            const user = userCredential.user
            const uuid = user.uid
            this.$store.dispatch('setUuid', uuid)
            // .then(() => {
              // console.log(uuid)
              // const userDatas = await getUser(uuid)
              //  userDatas.then(() => {
              //   console.log('ok')
              //   // this.$store.dispatch('setUser', data)
              // })
              // console.log('userDatas', userDatas)
              
              // const db = getDatabase()
              // const userInfos = ref(db, 'users/' + uuid )
              // let userDatas = {}
              // onValue(userInfos, (snapshot) => {
              //   userDatas = snapshot.val()
              // })
              // console.log('userDatas', userDatas)
              // this.$store.dispatch('setUser', userDatas)
              this.$emit('close')
              this.$refs.form.reset()
            // })
          })
          .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message
            console.log(errorMessage)
            if (errorCode === 'auth/wrong-password') {
              this.wrongPassword = true
            }
            if (errorCode === 'auth/user-not-found') {
              this.wrongEmail = true
            }
          });
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