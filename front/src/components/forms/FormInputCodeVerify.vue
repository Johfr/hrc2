<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <p class="warning" v-if="wrongCode">
      {{ wrongCodeMsg }}
    </p>
    {{ user }}
    {{ teamDatas.teamId }}
    {{ teamDatas.teamCode }}
    <v-text-field label="Code d'entrée" v-model="code" :rules="[v => !!v || 'Requis']"></v-text-field>
    <v-btn
      color="success"
      @click="validateCode"
      class="mr-2"
    >
      Valider
    </v-btn>
    <v-btn
      color="warning"
      @click="cancel"
    >
      Annuler
    </v-btn>
  </v-form>
</template>

<script>
  import firebaseInit from '../Firebase/FirebaseInit.js'
  import { getDatabase, ref, update, onValue } from "firebase/database"

  // on ferme tout
  export default {
    props: {
      teamDatas: {
        type: Object,
        default: () => {}
      }
    },
    data: () => ({
      valid: true,
      code: '',
      wrongCode: false,
      wrongCodeMsg: "Le code ne correspond pas pas avec celui de la team. Contact le leader de la team pour obtenir le bon code d'entrée",
    }),
    computed: {
      uuid () {
        return this.$store.getters.getUuid
      },
      user () {
        return this.$store.getters.getUser
      }
    },
    methods: {
      validateCode () {
        this.$refs.form.validate() // retour true ou false

        if (this.$refs.form.validate()) {
          if (this.teamDatas.teamCode === this.code) {
            // on met à jour les infos user dans la database
            
            // on update le userDatas
            const dbRealtime = getDatabase(firebaseInit)
            const userDb = ref(dbRealtime, 'users/' + this.uuid)
            update(userDb, {
              teamname: this.teamDatas.teamname, 
              teamCode: this.teamDatas.teamCode, 
              teamId: this.teamDatas.teamId
            })
            let userNewValue = null
            onValue(userDb, (snapshot) => {
              const data = snapshot.val()
              console.log(data)
              userNewValue = data
            })
            // on close + push en store
            this.$store.dispatch('setUser', userNewValue)
            this.$emit('close')
            this.$refs.form.reset()
          } else {
            this.wrongCode = true
          }
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