<template>
  <div class="text-center">
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      offset-y
      transition="slide-x-transition"
      bottom
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn href="" text v-bind="attrs" v-on="on">
          <span class="mr-2">Account</span>
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </template>

      <!-- Connexion  -->
      <v-list v-if="uuid === null">
        <v-list-item-group>
          <v-list-item @click="dialogSignUpFn">Créer un compte</v-list-item>
          <v-list-item @click="dialogSignInFn">Se connecter</v-list-item>
        </v-list-item-group>
      </v-list>

      <!-- User infos -->
      <v-card v-else>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <img class="navbar-avatar-img" src="/img/user_avatar.jpg" alt="John" >
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{ user.nickname }}</v-list-item-title>
              <v-list-item-subtitle>{{ user.teamname }}</v-list-item-subtitle>
              <v-list-item-subtitle>{{ user.role }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        
         <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text :to="'/Dashboard/' + uuid" >Dashboard</v-btn>
          <v-btn text @click="signOut" color="primary" >Loggout</v-btn>
        </v-card-actions>
      </v-card>

      
      <v-dialog v-model="dialogSignUp" max-width="500px">
        <FormSignUp @close="closeDialog" />
      </v-dialog>

      <v-dialog v-model="dialogSignIn" max-width="500px">
        <FormSignIn @close="closeDialog" />
      </v-dialog>
      
    </v-menu>
  </div>
</template>

<script>
import FormSignIn from './forms/FormSignIn.vue'
import FormSignUp from './forms/FormSignUp.vue'
import { getAuth, signOut } from "firebase/auth";

  export default {
  components: { FormSignIn, FormSignUp },
    name: 'NavbarUserAccount',
    props: {
    },
    data: () => ({
      dialogSignIn: false,
      dialogSignUp: false,
      fav: true,
      menu: false,
      message: false,
      hints: true,
      userId: null
    }),
    watch: {
      dialogSignUp (val) {
        val || this.closeDialog()
      },
      dialogSignIn (val) {
        val || this.closeDialog()
      }
    },
    mounted () {
    },
    computed: {
      uuid () {
        return this.$store.getters.getUuid
      },
      user () {
        return this.$store.getters.getUser
      }
    },
    methods: {
      dialogSignUpFn () {
        this.dialogSignUp = true
      },
      dialogSignInFn () {
        this.dialogSignIn = true
      },
      closeDialog () {
        this.dialogSignIn = false
        this.dialogSignUp = false
      },
      signOut () {
        const auth = getAuth()
        // console.log(auth)
        // this.menu = false
        signOut(auth)
        .then(() => {
          // Sign-out successful.
          console.log('déconnecté')
          
          // this.$store.dispatch('setUuid', null)
          this.$store.dispatch('cleanStore')
          window.location = '/'
        }).catch((error) => {
          // An error happened.
          console.log(error)
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
.navbar-avatar-img {
  filter: brightness(1.4);
}
</style>